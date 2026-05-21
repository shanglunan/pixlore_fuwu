import { ANIMATIONS } from './animations.mjs';

/**
 * 动效数据加载（含来源扩展点 + fallback）。
 *
 * 现在：返回本地 mock。
 * 将来：在 fetchFromUiverse() 里实现真实 uiverse.io 抓取（服务端抓取可绕开浏览器 CORS）；
 *       抓取失败时自动回退到本地 mock，保证接口始终有数据返回。
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

/** 加载并按参数过滤动效；真实抓取不可用时回退 mock。 */
export async function getAnimations(params = {}) {
  let source = ANIMATIONS;
  try {
    const live = await fetchFromUiverse(params);
    if (Array.isArray(live) && live.length > 0) {
      source = live;
    }
  } catch {
    // 抓取异常 → 回退 mock。
    source = ANIMATIONS;
  }
  const items = filterAnimations(source, params);
  return { items, total: items.length };
}
