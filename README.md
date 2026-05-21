# Pixlore 动效 BFF（pixlore_fuwu）

Pixlore 动效模块的后端服务。先返回本地 mock 动效数据，**无需数据库**，
预留真实 uiverse.io 抓取扩展点，并自带 fallback。可部署到 Vercel（推荐）或 Render。

## 接口

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/api/animations` | 动效列表 `{ items, total }`，支持 `?category=&source=&q=` 过滤 |
| GET | `/api/health` | 探活 `{ ok, count }` |

返回字段：`id、title、category、source、author、license、description、tags、previewType、durationMs、accentColor、html、css`。

## 本地运行

```bash
npm install      # 无运行时依赖，可跳过
npm run dev      # node local-server.mjs → http://localhost:3456
curl http://localhost:3456/api/animations
```

> 也可用 `vercel dev`（需 `npm i -g vercel`），它会模拟线上的 Serverless Function 路由。

## 部署到 Vercel（推荐）

**方式 A：网页导入（最简单）**
1. 把本项目推到 GitHub（仓库 `pixlore_fuwu`）。
2. 打开 https://vercel.com → New Project → Import 这个仓库。
3. Framework Preset 选 **Other**；Build/Output 留空（纯 Serverless Functions）。
4. Deploy → 得到公网域名，如 `https://pixlore-fuwu.vercel.app`。
5. 验证：浏览器打开 `https://pixlore-fuwu.vercel.app/api/animations`。

**方式 B：CLI**
```bash
npm i -g vercel
vercel login
vercel        # 预览部署
vercel --prod # 生产部署，输出公网 URL
```

## 部署到 Render（备选）

New → Web Service → 连接仓库 → Runtime: Node → Start Command: `node local-server.mjs`
（Render 用常驻进程而非 Serverless，`local-server.mjs` 正好可用；注意 Render 注入的 `PORT` 已被支持）。

## 重新部署

- Vercel：`git push` 到主分支会自动重新部署；或 `vercel --prod`。
- Render：`git push` 自动重部署。

## 扩展真实 uiverse 抓取

见 `_data/getAnimations.mjs` 的 `fetchFromUiverse()`：在那里实现服务端抓取并归一化为同样的字段结构即可；
抓取失败会自动回退到 `_data/animations.mjs` 的 mock。

## 目录

```
api/animations.js      Serverless Function：GET /api/animations
api/health.js          探活
_data/animations.mjs   mock 数据（单一数据源）
_data/getAnimations.mjs 加载/过滤 + uiverse 扩展点 + fallback
local-server.mjs       本地/Render 常驻服务（与线上共用数据逻辑）
public/index.html      根落地页
```
