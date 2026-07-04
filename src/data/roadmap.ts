// 前端从零到全栈 · 学习路线数据
// 每个节点：简介一句话 + 官方一键跳转（sub 为补充资料）

export type NodeTag = "must" | "option" | "plus";

export interface SubLink {
  label: string;
  href: string;
}

export interface RoadmapNode {
  name: string;
  en?: string;
  desc: string;
  href?: string;
  tag?: NodeTag;
  subs?: SubLink[];
}

export type Tone = "sky" | "ocean" | "leaf" | "leaf2" | "leaf3" | "sun";
export type StationKind = "prep" | "ai" | "level" | "bonus";

export interface Station {
  id: string;
  kind: StationKind;
  marker: string; // 攀登标记（等级/图标文字）
  title: string;
  elevation: string;
  blurb: string;
  tone: Tone;
  optional?: boolean;
  nodes: RoadmapNode[];
}

export const TAG_LABEL: Record<NodeTag, string> = {
  must: "主线必学",
  option: "可选了解",
  plus: "加分项",
};

export const STATIONS: Station[] = [
  {
    id: "prep",
    kind: "prep",
    marker: "0m",
    title: "出发前 · 基础条件",
    elevation: "海平面 · 整装待发",
    blurb:
      "这些不是技能，却是隐形门槛。没有它们，后面每一步都会走得很痛苦。先把行囊备齐，再进森林。",
    tone: "sky",
    nodes: [
      {
        name: "科学上网",
        en: "VPN",
        desc: "官方文档、GitHub、AI 工具大多在墙外，入行的水电煤。",
        tag: "must",
      },
      {
        name: "看懂常见错误码",
        desc: "404 找不到、403 没权限、500 服务器炸了、200 正常。",
        href: "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status",
        tag: "must",
      },
      {
        name: "计算机常识",
        desc: "会用终端、懂文件路径、知道环境变量、会装软件配环境。",
        href: "https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Command_line",
        tag: "must",
      },
      {
        name: "英文阅读能力",
        desc: "不用口语流利，但要能读文档、听懂教程。先开字幕慢慢脱离。",
        tag: "must",
      },
    ],
  },
  {
    id: "ai",
    kind: "ai",
    marker: "☀",
    title: "贯穿全程 · AI 生产力",
    elevation: "随身携带 · 从第一天就带上",
    blurb:
      "不是某一级的内容，而是从第一天就该带在身上的能力。会用 AI 写代码、查文档、排 bug，能让每一级的速度翻好几倍。别当作弊，它是这个时代的新键盘。",
    tone: "ocean",
    nodes: [
      {
        name: "AI 辅助开发",
        en: "Claude Code",
        desc: "学会给 AI 提需求、让它读你的项目、和它一起调试重构。",
        href: "https://time.geekbang.org/column/intro/101089301",
        tag: "must",
        subs: [
          {
            label: "Claude Code 文档",
            href: "https://docs.claude.com/en/docs/claude-code",
          },
        ],
      },
    ],
  },
  {
    id: "l1",
    kind: "level",
    marker: "等级 1",
    title: "基础 · 网页怎么长出来",
    elevation: "林间入口 · 100m",
    blurb:
      "解决三个问题：网页的骨架、长相、行为。再顺手学会 Git，越早用越好。目标：手写一个会动的小页面，并用 Git 管起来。",
    tone: "leaf",
    nodes: [
      {
        name: "HTML",
        desc: "网页的骨架，决定页面上有什么。",
        href: "https://developer.mozilla.org/zh-CN/docs/Web/HTML",
        tag: "must",
      },
      {
        name: "CSS",
        desc: "网页的皮肤与排版，重点吃透 Flexbox 和 Grid。",
        href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS",
        tag: "must",
        subs: [
          {
            label: "Jonas · HTML/CSS 课",
            href: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
          },
          {
            label: "Jonas · Advanced CSS",
            href: "https://www.udemy.com/course/advanced-css-and-sass/",
          },
        ],
      },
      {
        name: "JavaScript",
        en: "ES8+",
        desc: "网页的大脑，学 async/await、可选链等现代语法。",
        href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
        tag: "must",
        subs: [
          { label: "现代 JS 教程", href: "https://zh.javascript.info/" },
          {
            label: "Jonas · JS 完整课",
            href: "https://www.udemy.com/course/the-complete-javascript-course/",
          },
        ],
      },
      {
        name: "Git",
        desc: "代码的时间机器。不会 Git 等于不会协作，越早成肌肉记忆越好。",
        href: "https://git-scm.com/",
        tag: "must",
        subs: [
          { label: "Pro Git 中文", href: "https://git-scm.com/book/zh/v2" },
        ],
      },
    ],
  },
  {
    id: "l2",
    kind: "level",
    marker: "等级 2",
    title: "核心 · 现代前端主力工具箱",
    elevation: "石阶主道 · 300m",
    blurb:
      "真正干活的技术栈：用框架搭界面、管数据、做表单、连后端。目标：用 React 全家桶独立做出一个能联调接口的应用。",
    tone: "leaf2",
    nodes: [
      {
        name: "React",
        desc: "组件化 UI 框架，这一级的绝对核心，花最多时间。",
        href: "https://react.dev/",
        tag: "must",
        subs: [
          {
            label: "Jonas · Ultimate React",
            href: "https://www.udemy.com/course/the-ultimate-react-course/",
          },
        ],
      },
      {
        name: "TypeScript",
        desc: "给 JS 加类型安全带，现代项目标配，越早切越好。",
        href: "https://www.typescriptlang.org/",
        tag: "must",
      },
      {
        name: "TanStack Query",
        en: "v5",
        desc: "服务端数据管理神器：缓存、失效、乐观更新、无限滚动。",
        href: "https://tanstack.com/query/latest",
        tag: "must",
      },
      {
        name: "Zustand",
        desc: "极简客户端全局状态，比 Redux 少一堆样板，5 分钟上手。",
        href: "https://zustand.docs.pmnd.rs/",
        tag: "must",
      },
      {
        name: "SWR",
        desc: "Vercel 出品的轻量数据请求，和 Query 了解其一即可。",
        href: "https://swr.vercel.app/zh-CN",
        tag: "option",
      },
      {
        name: "React Hook Form + Zod",
        desc: "复杂表单标准解法：RHF 管状态，Zod 做 schema 校验。",
        href: "https://react-hook-form.com/",
        tag: "must",
        subs: [{ label: "Zod", href: "https://zod.dev/" }],
      },
      {
        name: "Tailwind CSS",
        desc: "原子类写样式，飞快。配合 clsx / cva 管条件类名。",
        href: "https://tailwindcss.com/",
        tag: "must",
      },
      {
        name: "Next.js",
        desc: "React 全栈框架：路由、SSR、Server Actions，做产品几乎都用它。",
        href: "https://nextjs.org/",
        tag: "must",
      },
      {
        name: "Apifox",
        desc: "接口调试与协作，前后端联调测接口、造假数据、写文档。",
        href: "https://apifox.com/",
        tag: "must",
      },
    ],
  },
  {
    id: "l3",
    kind: "level",
    marker: "等级 3",
    title: "进阶 · 从能写到写得专业",
    elevation: "藤蔓高处 · 600m",
    blurb:
      "会写只是起点。学会排查问题、提升效率、把工程规范起来，这才是区分新手和熟手的地方。",
    tone: "leaf3",
    nodes: [
      {
        name: "调试与排查",
        desc: "浏览器 / React / Query DevTools + VS Code 断点，别再靠 console.log 瞎猜。",
        href: "https://developer.chrome.com/docs/devtools",
        tag: "must",
      },
      {
        name: "shadcn/ui",
        desc: "把组件源码复制进项目、随意改，现代 React 组件库事实标准。",
        href: "https://ui.shadcn.com/",
        tag: "must",
      },
      {
        name: "Magic UI",
        desc: "动效炫酷的组件，基于 Tailwind + shadcn，给页面加高级动画。",
        href: "https://magicui.design/",
        tag: "option",
      },
      {
        name: "21st.dev",
        desc: "社区组件市场，海量现成 UI 片段和灵感，可配合 AI 生成。",
        href: "https://21st.dev/",
        tag: "option",
      },
      {
        name: "Husky",
        desc: "Git 提交前的质检员，自动跑 lint/类型检查，脏代码进不了仓库。",
        href: "https://typicode.github.io/husky/",
        tag: "must",
      },
      {
        name: "Workflow · CI/CD",
        desc: "GitHub Actions 自动化：PR 自动跑 lint + 测试 + 构建。",
        href: "https://docs.github.com/zh/actions",
        tag: "must",
      },
    ],
  },
  {
    id: "l4",
    kind: "level",
    marker: "等级 4",
    title: "专家 · 深度、质量与规模",
    elevation: "云端遗迹 · 1000m",
    blurb:
      "从实现功能升级到实现得又快又稳又可维护。关注测试、性能、工程化、架构。",
    tone: "ocean",
    nodes: [
      {
        name: "Vitest + RTL",
        desc: "从用户视角写测试，给组件、Hook、异步逻辑写单测。",
        href: "https://vitest.dev/",
        tag: "must",
      },
      {
        name: "性能优化",
        desc: "Core Web Vitals（LCP/INP/CLS）+ Profiler 定位重渲染。",
        href: "https://web.dev/explore/learn-core-web-vitals",
        tag: "must",
      },
      {
        name: "Sentry",
        desc: "错误追踪 + 性能监控，线上问题第一时间发现。",
        href: "https://sentry.io/",
        tag: "option",
      },
      {
        name: "pnpm",
        desc: "硬链接 + 内容寻址，比 npm/yarn 省空间更快。Monorepo 地基。",
        href: "https://pnpm.io/zh/",
        tag: "must",
      },
      {
        name: "Turborepo",
        desc: "管理大型 Monorepo：任务依赖图 + 远程缓存。",
        href: "https://turborepo.com/",
        tag: "must",
      },
      {
        name: "微前端",
        desc: "把多个独立应用组合进主应用，了解概念和场景即可。",
        href: "https://module-federation.io/",
        tag: "option",
      },
    ],
  },
  {
    id: "l5",
    kind: "level",
    marker: "等级 5",
    title: "全栈 · 打通后端",
    elevation: "海的彼端 · 岔路（可选）",
    blurb:
      "整个板块都是可选项。专注前端也能是很优秀的工程师。想成为一个人从头做到上线的全栈，就走这条岔路：Python / Go 双语言，逐级打通数据库、缓存、并发、微服务。",
    tone: "sky",
    optional: true,
    nodes: [
      {
        name: "Python",
        desc: "上手快、生态全，Web 框架用 FastAPI。零基础过一遍语法即可。",
        href: "https://docs.python.org/zh-cn/3/tutorial/index.html",
        tag: "must",
        subs: [
          {
            label: "极客时间 · Python",
            href: "https://time.geekbang.org/course/intro/100310001?tab=catalog",
          },
        ],
      },
      {
        name: "Go",
        desc: "语法简洁、天生高并发、部署一个二进制，云原生主力语言。",
        href: "https://go.dev/",
        tag: "must",
      },
      {
        name: "FastAPI",
        desc: "高性能 Python 框架，自带类型提示和自动接口文档。",
        href: "https://fastapi.tiangolo.com/zh/",
        tag: "must",
      },
      {
        name: "数据库",
        en: "PG / MySQL",
        desc: "重点是表设计，业务目前用 PostgreSQL。",
        href: "https://www.postgresql.org/",
        tag: "must",
        subs: [
          {
            label: "极客时间 · MySQL",
            href: "https://time.geekbang.org/column/intro/100073201?tab=intro",
          },
        ],
      },
      {
        name: "Redis",
        desc: "缓存与 NoSQL，理解并解决穿透 / 击穿 / 雪崩三大问题。",
        href: "https://redis.io/",
        tag: "must",
        subs: [
          {
            label: "极客时间 · Redis",
            href: "https://time.geekbang.org/column/intro/100056701",
          },
        ],
      },
      {
        name: "Docker",
        desc: "环境打包，一次配置到处运行。会写 Dockerfile 和 Compose。",
        href: "https://www.docker.com/",
        tag: "must",
        subs: [
          {
            label: "Docker 入门指南",
            href: "https://juejin.cn/post/7367626204206202907",
          },
        ],
      },
      {
        name: "消息中间件",
        desc: "异步、解耦、削峰填谷，了解 RabbitMQ 与 Kafka 的区别。",
        href: "https://www.rabbitmq.com/",
        tag: "option",
        subs: [{ label: "Kafka", href: "https://kafka.apache.org/" }],
      },
      {
        name: "高并发系统设计",
        desc: "架构、数据库优化、缓存策略，理解系统如何扛住大流量。",
        href: "https://time.geekbang.org/column/intro/100035801?tab=catalog",
        tag: "option",
      },
      {
        name: "微服务",
        desc: "与单体的区别和场景，学会 RPC、注册中心等。",
        href: "https://time.geekbang.org/column/intro/100014401",
        tag: "option",
      },
      {
        name: "Rust",
        desc: "系统级语言，内存安全 + 极致性能，前端工具链也爱用。行有余力再碰。",
        href: "https://www.rust-lang.org/zh-CN/",
        tag: "plus",
      },
    ],
  },
  {
    id: "bonus",
    kind: "bonus",
    marker: "✦",
    title: "加分项 · 知识圣殿的宝库",
    elevation: "世界树树冠 · 圣殿",
    blurb: "都不是必需，但每一项都能让你和别人拉开差距：设计出图、3D、跨端。",
    tone: "sun",
    nodes: [
      {
        name: "Three.js",
        desc: "浏览器里玩 3D，让作品在一堆平面页面里脱颖而出。",
        href: "https://threejs.org/",
        tag: "plus",
        subs: [
          { label: "React Three Fiber", href: "https://r3f.docs.pmnd.rs/" },
        ],
      },
      {
        name: "Dart + Flutter",
        desc: "一套代码跨 iOS/Android/Web/桌面。建议在 TS 之后学，上手快。",
        href: "https://flutter.dev/",
        tag: "plus",
        subs: [{ label: "Dart", href: "https://dart.dev/" }],
      },
      {
        name: "Figma",
        desc: "现代 UI/UX 设计与协作主流，一定要会看稿、量间距、导资源。",
        href: "https://www.figma.com/",
        tag: "plus",
      },
      {
        name: "Photoshop",
        desc: "老牌图像处理王者，抠图、修图、精细处理素材。",
        href: "https://www.adobe.com/products/photoshop.html",
        tag: "plus",
      },
      {
        name: "Canva",
        desc: "傻瓜式设计工具，不会设计也能做出好看的海报封面。",
        href: "https://www.canva.com/",
        tag: "plus",
      },
      {
        name: "ChatGPT 图像",
        en: "Image2",
        desc: "OpenAI 的文生图 / 改图模型，出图和编辑都很强。",
        href: "https://chatgpt.com/",
        tag: "plus",
      },
      {
        name: "Nano Banana",
        desc: "Google Gemini 的图像生成 / 编辑模型，改图很自然。",
        href: "https://gemini.google.com/",
        tag: "plus",
      },
      {
        name: "Lovart",
        desc: "AI 设计 Agent，用对话生成整套设计与素材。",
        href: "https://www.lovart.ai/",
        tag: "plus",
      },
    ],
  },
];
