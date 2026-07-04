import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { TAG_LABEL, type RoadmapNode } from "@/data/roadmap"

const TAG_VARIANT = {
  must: "leaf",
  option: "ocean",
  plus: "sun",
} as const

export function NodeCard({ node, index }: { node: RoadmapNode; index: number }) {
  const reduce = useReducedMotion()
  const isLink = Boolean(node.href)

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.05, 0.3),
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group relative flex flex-col gap-2 rounded-2xl border border-white/70 bg-white/80 p-5 text-left backdrop-blur-md",
        "shadow-[0_10px_30px_-18px_rgba(14,42,36,0.5)] transition-all duration-300",
        isLink &&
          "hover:-translate-y-1 hover:border-sun-2 hover:bg-white hover:shadow-[0_20px_44px_-20px_rgba(47,139,255,0.55)]"
      )}
    >
      {/* 整卡可点击：铺满的隐形跳转层 */}
      {isLink && (
        <a
          href={node.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`打开 ${node.name} 官方文档`}
          className="absolute inset-0 z-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-2"
        />
      )}

      <div className="pointer-events-none relative z-10 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <h3 className="text-lg font-semibold text-ink">{node.name}</h3>
            {node.en && (
              <span className="font-mono text-xs text-ink-faint">{node.en}</span>
            )}
          </div>
          {node.tag && (
            <Badge variant={TAG_VARIANT[node.tag]} className="mt-0.5">
              {TAG_LABEL[node.tag]}
            </Badge>
          )}
        </div>

        <p className="text-sm leading-relaxed text-ink-soft">{node.desc}</p>

        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          {isLink ? (
            <span className="inline-flex items-center gap-1 text-sm font-medium text-ocean-1">
              官方文档
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          ) : (
            <span className="text-xs font-medium text-ink-faint">
              自行准备 · 无需链接
            </span>
          )}
          {node.subs?.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="pointer-events-auto relative z-20 inline-flex items-center gap-0.5 rounded-full bg-ocean-1/10 px-2.5 py-0.5 text-xs font-medium text-[#1c5aa8] transition-colors hover:bg-ocean-1/20"
            >
              {s.label}
              <ArrowUpRight className="size-3" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
