import { ArrowUp, Compass, Leaf, MountainSnow } from "lucide-react"

import { Hero } from "@/components/Hero"
import { Legend } from "@/components/Legend"
import { StationSection } from "@/components/Station"
import { Button } from "@/components/ui/button"
import { STATIONS } from "@/data/roadmap"
import pathScene from "@/assets/path-scene.webp"

const TIPS = [
  { icon: Compass, text: "别追求一次学完。这条路按月甚至按年算，慢就是快。" },
  { icon: Leaf, text: "每一级都动手做个小项目，光看不练等于没学。" },
  { icon: MountainSnow, text: "AI 从第一天就用起来：报错丢给它、代码让它 review。" },
]

export default function App() {
  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden">
      {/* 世界背景：天空 → 森林 → 阳光 的纵向渐变 */}
      <div
        aria-hidden
        className="fixed inset-0 -z-50 bg-gradient-to-b from-[#e9f6ff] via-[#eef8ee] to-[#fff6da]"
      />
      {/* 远景遗迹（低透明度长廊场景）*/}
      <div
        aria-hidden
        className="fixed inset-0 -z-40 bg-cover bg-center opacity-[0.07]"
        style={{ backgroundImage: `url(${pathScene})` }}
      />

      <Hero />
      <Legend />

      {/* 攀登之路 */}
      <main className="relative mx-auto max-w-7xl px-6">
        {/* 中央藤蔓主轴 */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-8 bottom-24 hidden w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-leaf-1/0 via-leaf-1/55 to-sun-2/70 md:block"
        />
        {STATIONS.map((station) => (
          <StationSection key={station.id} station={station} />
        ))}
      </main>

      {/* 抵达 · 知识圣殿 */}
      <footer
        id="summit"
        className="relative mt-10 overflow-hidden px-6 pb-16 pt-20"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-transparent via-sun-1/25 to-sun-2/40" />
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-sun-1 to-sun-2 text-[#6b5200] shadow-lg ring-8 ring-white/70">
            <MountainSnow className="size-7" />
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#6b5200] md:text-4xl">
            抵达知识圣殿
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-ink-soft">
            RoadMap 不只是一棵知识树，而是一座可以探索的幻想世界。到这里你已经走了很远，剩下的路，交给时间和热爱。
          </p>

          <div className="mt-8 grid gap-3 text-left">
            {TIPS.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/75 px-4 py-3 backdrop-blur-md"
              >
                <Icon className="mt-0.5 size-5 shrink-0 text-leaf-1" />
                <span className="text-sm leading-relaxed text-ink-soft">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-lg font-bold text-ink">加油，欢迎入坑。</p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches
                    ? "auto"
                    : "smooth",
                })
              }
            >
              <ArrowUp className="size-4" />
              回到森林入口
            </Button>
          </div>

          <p className="mt-8 text-xs text-ink-faint">
            前端学习路线 · 写给正在入坑的你
          </p>
        </div>
      </footer>
    </div>
  )
}
