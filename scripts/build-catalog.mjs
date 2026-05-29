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
// git-tree 接口响应体 ~640KB，需要更长超时；单文件下载通常更快。
const TREE_TIMEOUT_MS   = 60000; // 60s：拉整库文件树
const REQUEST_TIMEOUT_MS = 30000; // 30s：单文件下载
const POOL_SIZE = 10;

// GitHub Personal Access Token（可选）：设置后将认证请求，限额从 60 → 5000 次/小时。
// 用法：GITHUB_TOKEN=ghp_xxx node scripts/build-catalog.mjs
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';

// galaxy 目录 → 我们的 category 枚举 + 目标数量。
// 我们的合法 category：loader / button / toggle / checkbox / card / hover / navigation
//
// 策略：优先选「简单」分类（loaders / toggle / inputs / notifications），
// 减少视觉复杂的 Cards / Tooltips 配额。
const SOURCES = [
  { dir: 'loaders',          category: 'loader',   target: 35 },
  { dir: 'Buttons',          category: 'button',   target: 30 },
  { dir: 'Toggle-switches',  category: 'toggle',   target: 25 },
  { dir: 'Checkboxes',       category: 'checkbox', target: 15 },
  { dir: 'Radio-buttons',    category: 'checkbox', target: 10 }, // 并入 checkbox
  { dir: 'Inputs',           category: 'hover',    target: 20 }, // 输入框动效，天然简洁
  { dir: 'Notifications',    category: 'card',     target: 15 }, // 通知动效，轻量
];

// 文件列表用 GitHub git tree API（Node.js 内置 fetch，走系统代理；支持 GITHUB_TOKEN）；
// 文件下载用 jsDelivr CDN 镜像（curl execFile，无限流、国内访问更稳）。
const GIT_TREE = `https://api.github.com/repos/${REPO}/git/trees/${BRANCH}?recursive=1`;
const JSDELIVR_CDN = `https://cdn.jsdelivr.net/gh/${REPO}@${BRANCH}`;

function rawUrl(dir, name) {
  return `${JSDELIVR_CDN}/${encodeURIComponent(dir)}/${encodeURIComponent(name)}`;
}

// 一次性拉取整库文件树，各 collect 复用。
// GitHub API 用 curl --noproxy 直连（绕过本地代理的 TLS 拦截问题）；
// 支持 GITHUB_TOKEN 提升限额（匿名 60/h → 认证 5000/h）。
let fileIndexPromise = null;
function loadFileIndex() {
  if (!fileIndexPromise) {
    fileIndexPromise = (async () => {
      const args = [
        '-fsL', '--max-time', String(Math.round(TREE_TIMEOUT_MS / 1000)),
        '--noproxy', 'api.github.com',
        '-A', UA,
        '-H', 'Accept: application/vnd.github+json',
      ];
      if (GITHUB_TOKEN) args.push('-H', `Authorization: Bearer ${GITHUB_TOKEN}`);
      args.push(GIT_TREE);
      const { stdout } = await execFileP('curl', args, { maxBuffer: 64 * 1024 * 1024 });
      const data = JSON.parse(stdout);
      if (data.truncated) console.warn('  (注意：文件树较大被截断，使用可见部分取样)');
      return (data.tree || []).filter(n => n.type === 'blob').map(n => n.path); // "Buttons/xxx.html"
    })();
  }
  return fileIndexPromise;
}

// 用系统 curl 下载 jsDelivr CDN 文件内容。
// -f：HTTP 错误返回非 0；-sL：静默 + 跟随跳转。
async function fetchText(url) {
  const args = ['-fsL', '--max-time', String(Math.round(REQUEST_TIMEOUT_MS / 1000)), '-A', UA];
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

/**
 * 简洁度评分：优先选取干净、轻量、视觉清爽的动效。
 *
 * 原则：
 * - CSS 行数在 20~100 行的甜区得分最高（太少=无聊，太多=复杂）
 * - @keyframes 1~2 个为最佳；超过 3 开始扣分
 * - HTML 元素越少越好（少即是多）
 * - 基础 transform / opacity 动效加分；3D / filter / clip-path 扣分
 * - 必须有真实动画（@keyframes 或 animation 声明）才计分
 *
 * 满分约 100，用于在候选池中排序后取 top N。
 */
function qualityScore(html, css) {
  const lines     = css.split('\n').length;
  const kfCount   = (css.match(/@keyframes/gi)    || []).length;
  const animCount = (css.match(/\banimation\s*:/gi) || []).length;
  const elCount   = (html.match(/<[a-z][^/]/gi)   || []).length;

  // 必须有动画
  if (kfCount === 0 && animCount === 0) return 0;
  // CSS 极短（< 12 行）：太简陋，不选
  if (lines < 12) return 0;

  let score = 40; // 基础分

  // ── 1. CSS 行数（甜区 20~100）────────────────────────────
  if (lines >= 20 && lines < 50)       score += 25;
  else if (lines >= 50 && lines < 100) score += 20;
  else if (lines >= 100 && lines < 140) score += 8;
  else if (lines >= 140 && lines < 200) score -= 5;
  else if (lines >= 200)               score -= 20; // 太复杂

  // ── 2. @keyframes 数量（1~2 最优）───────────────────────
  if (kfCount === 1)      score += 20;
  else if (kfCount === 2) score += 12;
  else if (kfCount === 3) score +=  4;
  else                    score -= (kfCount - 3) * 8; // 超过 3 开始扣

  // ── 3. HTML 元素数（越少越简洁）─────────────────────────
  if (elCount <= 2)       score += 15;
  else if (elCount <= 5)  score += 10;
  else if (elCount <= 9)  score +=  4;
  else                    score -= (elCount - 9) * 3; // 超过 9 个扣分

  // ── 4. 简单动效关键词（加分）────────────────────────────
  if (/\bopacity\s*:/i.test(css))                       score += 6;  // 淡入淡出
  if (/transform\s*:[^;]*(?:scale|translate)/i.test(css)) score += 5; // 基础变形
  if (/border-radius/i.test(css))                        score += 3;  // 圆角常见于 loader

  // ── 5. 复杂效果（扣分）──────────────────────────────────
  if (/perspective|rotateX|rotateY|rotateZ|rotate3d/i.test(css)) score -= 12; // 3D
  if (/filter\s*:|backdrop-filter/i.test(css))                    score -= 10; // 滤镜
  if (/clip-path|(?<!\w)mask\s*:/i.test(css))                     score -= 10; // clip-path
  if (/(linear|radial|conic)-gradient/i.test(css))                score -=  4; // 渐变稍微复杂

  return Math.max(0, score);
}

/** 解析单个 galaxy .html → 归一化条目（含质量分）；不合格返回 null。 */
function parseElement(raw, fileName, category) {
  const styleMatch = raw.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  if (!styleMatch) return null; // 无 <style>：Tailwind / 纯 HTML，跳过
  const css = styleMatch[1].trim();
  const html = raw.replace(styleMatch[0], '').trim();
  if (!html || !css) return null;

  // 动效判定：必须有真实 CSS 动画（hover 纯过渡不算，需要 @keyframes 或 animation）。
  const hasAnim = /@keyframes|animation\s*:/i.test(css);
  const hasInteractive = /transition\s*:|:hover/i.test(css);
  if (!hasAnim && !hasInteractive) return null;

  // 简洁度评分，< 30 分视为质量不达标（太短/无动画/过于复杂）直接丢弃。
  const score = qualityScore(html, css);
  if (score < 30) return null;

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
    accentColor: null,
    html,
    css,
    _score: score, // 构建时排序用，输出前删除
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
  // 候选池扩大到 12 倍，评分后取 top target 条（简洁优先策略需要更大样本）。
  // 随机打乱保证每次构建有一定多样性，不会总是同一批。
  const candidates = shuffle(names).slice(0, target * 12);
  const parsed = await mapPool(candidates, POOL_SIZE, async name => {
    try {
      const raw = await fetchText(rawUrl(dir, name));
      return parseElement(raw, name, category);
    } catch {
      return null;
    }
  });
  // 按质量分降序，取前 target 条。
  const valid = parsed.filter(Boolean).sort((a, b) => b._score - a._score);
  const top = valid.slice(0, target);
  const topScore = valid[0]?._score ?? 0;
  const minScore = top[top.length - 1]?._score ?? 0;
  console.log(
    `  ${dir} → ${category}: ${top.length}/${target}` +
    ` (候选 ${candidates.length}, 质量分 ${minScore}~${topScore})`,
  );
  // 删除内部 _score 字段再输出
  return top.map(({ _score, ...rest }) => rest);
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
