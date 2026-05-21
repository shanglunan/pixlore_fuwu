import { getAnimations } from '../_data/getAnimations.mjs';

// Vercel Serverless Function：GET /api/animations[?category=&source=&q=]
// 返回 { items, total }。已开启 CORS，供 Figma 插件 / 浏览器跨源请求。
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { category, source, q } = req.query || {};
  const result = await getAnimations({ category, source, q });
  res.status(200).json(result);
}
