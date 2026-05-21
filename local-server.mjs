// 本地运行（无需 Vercel CLI）：node local-server.mjs
// 与线上 Serverless Function 共用同一份数据与过滤逻辑（_data/getAnimations.mjs）。
import { createServer } from 'node:http';
import { getAnimations } from './_data/getAnimations.mjs';
import { ANIMATIONS } from './_data/animations.mjs';

const PORT = Number(process.env.PORT) || 3456;

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

const server = createServer(async (req, res) => {
  cors(res);
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, count: ANIMATIONS.length }));
    return;
  }
  if (url.pathname === '/api/animations') {
    const result = await getAnimations({
      category: url.searchParams.get('category'),
      source: url.searchParams.get('source'),
      q: url.searchParams.get('q'),
    });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
    return;
  }
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`[pixlore-fuwu] local BFF on http://localhost:${PORT}`);
  console.log(`[pixlore-fuwu] GET http://localhost:${PORT}/api/animations  (${ANIMATIONS.length} items)`);
});
