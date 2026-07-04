import { MousePointerClick } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const ITEMS = [
  { variant: "leaf", label: "主线必学", desc: "这条路的骨架，务必掌握" },
  { variant: "ocean", label: "可选了解", desc: "知道概念，需要时再深入" },
  { variant: "sun", label: "加分项", desc: "锦上添花，拉开差距" },
] as const

export function Legend() {
  return (
    <div className="mx-auto mt-4 mb-2 max-w-3xl px-6">
      <div className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-[0_20px_50px_-30px_rgba(14,42,36,0.6)] backdrop-blur-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-base font-bold text-ink">图例 · 怎么看这份路线</h2>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ocean-1/10 px-3 py-1 text-xs font-medium text-[#1c5aa8]">
            <MousePointerClick className="size-3.5" />
            点任意卡片，直达官方文档
          </span>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {ITEMS.map((it) => (
            <div
              key={it.label}
              className="flex items-center gap-2.5 rounded-2xl bg-cloud-2 px-3 py-2.5"
            >
              <Badge variant={it.variant}>{it.label}</Badge>
              <span className="text-sm text-ink-soft">{it.desc}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-ink-faint">
          按等级从上往下走，遇到一个学一个；带
          <span className="mx-1 rounded border border-dashed border-ink/25 px-1.5 py-0.5 text-xs font-medium text-ink-soft">
            可选板块
          </span>
          标记的整块（如后端全栈）可以跳过。每一级末尾都有「学完你能」，用来自检。
        </p>
      </div>
    </div>
  )
}
