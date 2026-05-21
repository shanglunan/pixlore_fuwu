import { ANIMATIONS } from '../_data/animations.mjs';

// GET /api/health → 探活
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ ok: true, count: ANIMATIONS.length });
}
