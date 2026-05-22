#!/usr/bin/env node
/**
 * 动效目录构建脚本（阶段 4：接入真实数据）。
 *
 * 从 uiverse.io 的官方开源镜像仓库 uiverse-io/galaxy（MIT 许可）拉取真实社区动效，
 * 筛选出含动画 / 交互的元素，归一化为 BFF 字段结构，生成 _data/catalog.mjs。
 *
 * 为什么生成 .mjs 而不是 .json：
 *   Vercel serverless 只把「被静态 import 的文件」打包进函数；运行时 readFile 动态路径
 *   的文件不会被包含。生成 ES 模块 + 在 getAnimations.mjs 里静态 import，保证线上能读到。
 *
 * 用法：node scripts/build-catalog.mjs
 * 依赖：Node 18+（内置 fetch），无需任何 npm 包。
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileP = promisify(execFile);

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, '_data', 'catalog.mjs');

const REPO = 'uiverse-io/galaxy';
const BRANCH = 'main';
const UA = 'pixlore-catalog-builder';
const REQUEST_TIMEOUT_MS = 20000;
const POOL_SIZE = 10;

// galaxy 目录 → 我们的 category 枚举 + 目标数量。
// 我们的合法 category：loader / button / toggle / checkbox / card / hover / navigation
const SOURCES = [
  { dir: 'loaders', category: 'loader', target: 25 },
  { dir: 'Buttons', category: 'button', target: 25 },
  { dir: 'Toggle-switches', category: 'toggle', target: 25 },
  { dir: 'Checkboxes', category: 'checkbox', target: 15 },
  { dir: 'Radio-buttons', category: 'checkbox', target: 10 }, // 并入 checkbox
  { dir: 'Cards', category: 'card', target: 25 },
  { dir: 'Tooltips', category: 'hover', target: 25 },
];

// 文件列表用 GitHub git tree API（1 次递归调用，省限流配额）；
// 文件下载用 jsDelivr CDN 镜像（无限流、国内访问更稳）。
const GIT_TREE = `https://api.github.com/repos/${REPO}/git/trees/${BRANCH}?recursive=1`;
const JSDELIVR_CDN = `https://cdn.jsdelivr.net/gh/${REPO}@${BRANCH}`;

function rawUrl(dir, name) {
  return `${JSDELIVR_CDN}/${encodeURIComponent(dir)}/${encodeURIComponent(name)}`;
}

// 一次性拉取整库文件树，各 collect 复用。
let fileIndexPromise = null;
function loadFileIndex() {
  if (!fileIndexPromise) {
    fileIndexPromise = fetchText(GIT_TREE, 'application/vnd.github+json').then(txt => {
      const data = JSON.parse(txt);
      if (data.truncated) console.warn('  (注意：文件树较大被截断，使用可见部分取样)');
      return (data.tree || []).filter(n => n.type === 'blob').map(n => n.path); // "Buttons/xxx.html"
    });
  }
  return fileIndexPromise;
}

// 用系统 curl 下载：复用用户终端已配置的代理（Node 内置 fetch 默认不走代理，
// 国内直连 GitHub 不稳）。-f：HTTP 错误返回非 0；-sL：静默 + 跟随跳转。
async function fetchText(url, accept) {
  const args = ['-fsL', '--max-time', String(Math.round(REQUEST_TIMEOUT_MS / 1000)), '-A', UA];
  if (accept) args.push('-H', `Accept: ${accept}`);
  args.push(url);
  const { stdout } = await execFileP('curl', args, { maxBuffer: 64 * 1024 * 1024 });
  return stdout;
}

async function listDir(dir) {
  const index = await loadFileIndex();
  const prefix = `${dir}/`;
  return index
    .filter(p => p.startsWith(prefix) && p.toLowerCase().endsWith('.html'))
    .map(p => p.slice(prefix.length))
    .filter(name => !name.includes('/')); // 只取该目录的直接子文件
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function toTitle(slug) {
  const base = slug.replace(/-\d+$/, '');
  const title = base
    .split('-')
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return title || base || slug;
}

/** 解析单个 galaxy .html → 归一化条目；不合格返回 null。 */
function parseElement(raw, fileName, category) {
  const styleMatch = raw.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  if (!styleMatch) return null; // 无 <style>：Tailwind / 纯 HTML，跳过
  const css = styleMatch[1].trim();
  const html = raw.replace(styleMatch[0], '').trim();
  if (!html || !css) return null;

  // 动效判定（动画优先，也含 hover/transition 交互）。
  const hasAnim = /@keyframes|animation\s*:/i.test(css);
  const hasInteractive = /transition\s*:|:hover/i.test(css);
  if (!hasAnim && !hasInteractive) return null;

  // 元数据注释：/* From Uiverse.io by {author}  - Tags: a, b, c */
  const meta = css.match(/From Uiverse\.io by\s+(.+?)(?:\s+-\s+Tags:\s*([^*]*))?\*\//i);

  const baseName = fileName.replace(/\.html$/, '');
  const usIdx = baseName.indexOf('_');
  const authorFromName = usIdx > 0 ? baseName.slice(0, usIdx) : 'unknown';
  const slug = usIdx > 0 ? baseName.slice(usIdx + 1) : baseName;
  const author = (meta && meta[1] ? meta[1].trim() : authorFromName) || authorFromName;
  const tags = (meta && meta[2] ? meta[2] : '')
    .split(',')
    .map(t => t.trim().toLowerCase())
    .filter(Boolean);

  // 时长：取第一个 animation/transition 时间值，限制在合理区间。
  let durationMs = 1000;
  const t = css.match(/(?:animation(?:-duration)?|transition(?:-duration)?)\s*:[^;]*?([\d.]+)\s*(ms|s)/i);
  if (t) {
    const v = parseFloat(t[1]);
    durationMs = t[2].toLowerCase() === 'ms' ? Math.round(v) : Math.round(v * 1000);
  }
  if (!durationMs || durationMs < 100) durationMs = 800;
  if (durationMs > 6000) durationMs = 6000;

  const tagSet = Array.from(new Set([category, ...tags, hasAnim ? 'animated' : 'hover'])).slice(0, 8);
  const id = `uiverse-${baseName}`.replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase();

  return {
    id,
    title: toTitle(slug),
    category,
    source: 'uiverse',
    author: { name: author, profileUrl: `https://uiverse.io/${author}/${slug}` },
    license: 'MIT',
    description: `${toTitle(slug)} · ${category} by ${author}`,
    tags: tagSet,
    previewType: 'css',
    durationMs,
    accentColor: null, // 真实元素主色各异，第一批不强制改色（前端无 accentColor 即隐藏改色控件）
    html,
    css,
  };
}

/** 并发池（限制并发数）。 */
async function mapPool(items, limit, fn) {
  const results = new Array(items.length);
  let cursor = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const idx = cursor++;
      results[idx] = await fn(items[idx], idx);
    }
  });
  await Promise.all(workers);
  return results;
}

async function collect(source) {
  const { dir, category, target } = source;
  let names;
  try {
    names = await listDir(dir);
  } catch (e) {
    console.warn(`  ! list ${dir} failed: ${e.message}`);
    return [];
  }
  // 候选取目标的 3 倍（给筛掉的 Tailwind / 无动效留余量）。
  const candidates = shuffle(names).slice(0, target * 3);
  const parsed = await mapPool(candidates, POOL_SIZE, async name => {
    try {
      const raw = await fetchText(rawUrl(dir, name));
      return parseElement(raw, name, category);
    } catch {
      return null;
    }
  });
  const out = parsed.filter(Boolean).slice(0, target);
  console.log(`  ${dir} → ${category}: ${out.length}/${target} (scanned ${candidates.length})`);
  return out;
}

async function main() {
  console.log(`Building catalog from ${REPO}@${BRANCH} ...`);
  const all = [];
  const seen = new Set();
  for (const s of SOURCES) {
    const items = await collect(s);
    for (const it of items) {
      if (seen.has(it.id)) continue;
      seen.add(it.id);
      all.push(it);
    }
  }

  const header =
    '// 自动生成，请勿手改。重新生成：`node scripts/build-catalog.mjs`\n' +
    `// 来源：${REPO}（MIT 许可，已带作者署名与原链）。生成时间：${new Date().toISOString()}\n` +
    `// 条目数：${all.length}\n`;
  const body = `export const CATALOG = ${JSON.stringify(all, null, 2)};\n`;

  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, header + body, 'utf8');
  console.log(`\nWrote ${all.length} animations → ${OUT}`);
  if (all.length === 0) {
    console.error('No items collected — 网络问题或仓库结构变化，请检查。');
    process.exit(1);
  }
}

main().catch(e => {
  console.error('build-catalog failed:', e);
  process.exit(1);
});
