import { ANIMATIONS } from './animations.mjs';
import { CATALOG } from './catalog.mjs';

/**
 * 动效数据加载（含来源扩展点 + fallback）。
 *
 * 数据基底优先级：
 *   1) catalog.mjs —— 预生成的真实动效目录（来自 uiverse-io/galaxy，
 *      由 `node scripts/build-catalog.mjs` 生成，重新生成需重新部署）；
 *   2) animations.mjs —— catalog 为空时回退的内置 mock，保证接口始终有数据。
 *
 * fetchFromUiverse() 是「运行时实时抓取」扩展点，默认关闭（返回 null）；
 * 若将来启用，其结果会覆盖上述基底。
 */

// eslint-disable-next-line no-unused-vars
async function fetchFromUiverse(_params) {
  // TODO(阶段4): 服务端抓取 uiverse.io 并归一化为 ANIMATIONS 的字段结构。
  // 现在返回 null 表示“未启用真实抓取”，让调用方走 mock。
  return null;
}

function filterAnimations(list, { category, source, q } = {}) {
  const query = (q || '').trim().toLowerCase();
  return list.filter(a => {
    if (category && category !== 'all' && a.category !== category) return false;
    if (source && source !== 'all' && a.source !== source) return false;
    if (!query) return true;
    const haystack = [a.title, a.category, a.source, ...(a.tags || [])].join(' ').toLowerCase();
    return haystack.includes(query);
  });
}

/** 数据基底：优先真实目录 catalog，为空时回退内置 mock。 */
function baseList() {
  return Array.isArray(CATALOG) && CATALOG.length > 0 ? CATALOG : ANIMATIONS;
}

/** 当前数据基底的条目数（诊断用，health 端点显示真实数量）。 */
export function getBaseCount() {
  return baseList().length;
}

/** 加载并按参数过滤动效；实时抓取不可用时回退 catalog / mock。 */
export async function getAnimations(params = {}) {
  let source = baseList();
  try {
    const live = await fetchFromUiverse(params);
    if (Array.isArray(live) && live.length > 0) {
      source = live;
    }
  } catch {
    // 抓取异常 → 回退基底（catalog / mock）。
    source = baseList();
  }
  const items = filterAnimations(source, params);
  return { items, total: items.length };
}
