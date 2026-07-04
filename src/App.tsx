import { ArrowUp, Compass, Leaf, MountainSnow } from "lucide-react";

import { Hero } from "@/components/Hero";
import { Legend } from "@/components/Legend";
import { StationSection } from "@/components/Station";
import { Button } from "@/components/ui/button";
import { STATIONS } from "@/data/roadmap";
import pathScene from "@/assets/path-scene.webp";

const TIPS = [
  { icon: Compass, text: "别追求一次学完。这条路按月甚至按年算，慢就是快。" },
  { icon: Leaf, text: "每一级都动手做个小项目，光看不练等于没学。" },
  {
    icon: MountainSnow,
    text: "AI 从第一天就用起来：报错丢给它、代码让它 review。",
  },
];

export default function App() {
  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden">
      {/* 右上角 · GitHub 源码入口 */}
      <a
        href="https://github.com/shallowaria/shallowaria.github.io"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="在 GitHub 上查看本站源码"
        className="fixed right-4 top-4 z-50 inline-flex size-11 items-center justify-center rounded-full border border-white/70 bg-white/70 text-ink shadow-[0_8px_24px_-12px_rgba(14,42,36,0.6)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ocean-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-2"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="size-5"
        >
          <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.19 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.89.12 3.19.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.57 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
        </svg>
      </a>

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
            抵达全栈之径
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-ink-soft">
            到这里你已经走了很远，剩下的路，交给时间和热爱。
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
  );
}
