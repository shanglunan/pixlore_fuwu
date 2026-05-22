import { getBaseCount } from '../_data/getAnimations.mjs';

// GET /api/health → 探活（count 反映当前数据基底：真实 catalog 或 mock 回退）
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ ok: true, count: getBaseCount() });
}
