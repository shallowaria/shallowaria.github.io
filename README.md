# 前端从 0 到全栈 · 学习路线

一座可以「攀登」的前端学习路线图 —— 沿着森林、遗迹与石阶一路向上，抵达知识圣殿。

- **内容**：从出发前的基础条件、AI 生产力，到基础 / 核心 / 进阶 / 专家 / 全栈五个等级，再到设计出图等加分项。每个技术都有一句话简介 + 官方文档一键跳转。
- **在线地址**：https://shallowaria.github.io/

## 技术栈

React 19 · TypeScript · Vite · Tailwind CSS v4 · shadcn/ui · motion · lucide-react

## 本地开发

```bash
pnpm install
pnpm dev        # 本地开发
pnpm build      # 构建到 dist/
pnpm preview    # 预览构建产物
```

## 部署

推送到 `main` 分支后，GitHub Actions（`.github/workflows/deploy.yml`）会自动构建并发布到 GitHub Pages。
首次部署需在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

## 目录

- `src/data/roadmap.ts` — 全部路线数据（站点与技术节点）
- `src/components/` — Hero / Legend / Station / NodeCard
- `src/components/ui/` — shadcn 组件
- `前端从0学习路线.md` — 内容源（Markdown 版）
