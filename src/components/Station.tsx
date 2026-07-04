import { motion, useReducedMotion } from "motion/react"

import { NodeCard } from "@/components/NodeCard"
import { cn } from "@/lib/utils"
import type { Station, Tone } from "@/data/roadmap"

const TONE: Record<
  Tone,
  { dot: string; ring: string; title: string; chip: string }
> = {
  sky: {
    dot: "from-sky-2 to-sky-1",
    ring: "ring-sky-2/40",
    title: "text-[#1c5aa8]",
    chip: "bg-sky-1/15 text-[#1c5aa8]",
  },
  ocean: {
    dot: "from-ocean-2 to-ocean-1",
    ring: "ring-ocean-1/35",
    title: "text-[#1c5aa8]",
    chip: "bg-ocean-1/12 text-[#1c5aa8]",
  },
  leaf: {
    dot: "from-leaf-3 to-leaf-1",
    ring: "ring-leaf-1/35",
    title: "text-[#2f6a34]",
    chip: "bg-leaf-1/15 text-[#2f6a34]",
  },
  leaf2: {
    dot: "from-leaf-3 to-leaf-2",
    ring: "ring-leaf-2/35",
    title: "text-[#2f6a34]",
    chip: "bg-leaf-2/15 text-[#2f6a34]",
  },
  leaf3: {
    dot: "from-sun-2 to-leaf-3",
    ring: "ring-leaf-3/40",
    title: "text-[#3f7a2a]",
    chip: "bg-leaf-3/20 text-[#3f7a2a]",
  },
  sun: {
    dot: "from-sun-1 to-sun-2",
    ring: "ring-sun-2/50",
    title: "text-[#6b5200]",
    chip: "bg-sun-2/50 text-[#6b5200]",
  },
}

export function StationSection({ station }: { station: Station }) {
  const reduce = useReducedMotion()
  const tone = TONE[station.tone]
  const isAi = station.kind === "ai"

  return (
    <section
      id={station.id}
      className="relative scroll-mt-24 py-14 md:py-20"
    >
      {/* 里程碑 */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center"
      >
        {/* 圣殿藤蔓上的节点勋章 */}
        <div
          className={cn(
            "flex size-16 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-lg ring-8 ring-white/70",
            "outline outline-4",
            tone.dot,
          )}
          style={{ outlineColor: "rgba(255,255,255,0.55)" }}
        >
          <span className="px-1 text-center text-[13px] font-bold leading-tight tracking-tight drop-shadow">
            {station.marker}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
              tone.chip,
            )}
          >
            {station.elevation}
          </span>
          {station.optional && (
            <span className="inline-flex items-center gap-1 rounded-full border border-dashed border-ink/25 bg-white/60 px-3 py-1 text-xs font-semibold text-ink-soft">
              可选板块
            </span>
          )}
        </div>

        <h2
          className={cn(
            "mt-3 text-3xl font-extrabold tracking-tight md:text-4xl",
            tone.title,
          )}
        >
          {station.title}
        </h2>

        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
          {station.blurb}
        </p>
      </motion.div>

      {/* 技术节点 */}
      <div
        className={cn(
          "relative z-10 mx-auto mt-10 grid gap-4 md:gap-5",
          isAi
            ? "max-w-2xl grid-cols-1"
            : "max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {station.nodes.map((node, i) => (
          <NodeCard key={node.name} node={node} index={i} />
        ))}
      </div>
    </section>
  )
}
