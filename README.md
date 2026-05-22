# Pixlore 动效 BFF（pixlore_fuwu）

Pixlore 动效模块的后端服务。**无需数据库**：动效数据由构建脚本从 uiverse.io 官方开源镜像
（[uiverse-io/galaxy](https://github.com/uiverse-io/galaxy)，MIT 许可）预生成为静态目录 `_data/catalog.mjs`，
运行时直接读取，并以内置 mock（`_data/animations.mjs`）作 fallback。可部署到 Vercel（推荐）或 Render。

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

## 数据来源与更新

数据基底优先级：`_data/catalog.mjs`（真实目录）→ `_data/animations.mjs`（mock 回退）。

**重新生成目录（拉取最新 uiverse 内容）：**

```bash
node scripts/build-catalog.mjs   # 从 uiverse-io/galaxy 拉取、筛选含动画/交互的元素、归一化
git add _data/catalog.mjs && git commit -m "chore: 刷新动效目录" && git push   # push 触发自动重部署
```

- 列表走 GitHub git tree API，下载走 jsDelivr CDN，**通过系统 `curl` 复用本机代理**
  （Node 内置 fetch 默认不走代理，国内直连 GitHub 不稳）。
- 每个分类的目标数量、筛选口径在脚本顶部 `SOURCES` 调整。
- 生成 `.mjs`（而非 `.json`）是为了被 Serverless 静态 `import` 打包；运行时 `readFile` 动态文件不会被 Vercel 包含。

**运行时实时抓取（可选扩展点）：** `_data/getAnimations.mjs` 的 `fetchFromUiverse()` 默认关闭（返回 `null`）。
如需"永远最新"，在此实现服务端抓取并归一化为同样字段，其结果会覆盖预生成目录；失败自动回退。

## 目录

```
api/animations.js        Serverless Function：GET /api/animations
api/health.js            探活（count 反映当前基底数量）
scripts/build-catalog.mjs 从 uiverse galaxy 预生成真实目录的构建脚本
_data/catalog.mjs        预生成的真实动效目录（脚本产物，主数据源）
_data/animations.mjs     mock 数据（catalog 为空时的 fallback）
_data/getAnimations.mjs  加载/过滤 + catalog 基底 + uiverse 实时抓取扩展点
local-server.mjs         本地/Render 常驻服务（与线上共用数据逻辑）
public/index.html        根落地页
```
