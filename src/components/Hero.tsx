import { ArrowDown, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import heroScene from "@/assets/hero-scene.webp";

export function Hero() {
  const reduce = useReducedMotion();

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <header className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-24">
      {/* 场景背景 */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroScene}
          alt="被森林与遗迹环绕、通往大海与天空的石阶"
          className="size-full object-cover"
          fetchPriority="high"
        />
      </div>
      {/* 顶部阳光 + 底部融入渐变 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-3/10 via-transparent to-[#f4fbff]" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-[520px] -translate-x-1/2 rounded-full bg-sun-1/50 blur-3xl motion-safe:animate-[sunpulse_6s_ease-in-out_infinite]"
        aria-hidden
      />

      {/* 浮云 */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-[8%] top-[18%] h-16 w-40 rounded-full bg-white/70 blur-2xl motion-safe:animate-float" />
        <div className="absolute right-[10%] top-[26%] h-20 w-56 rounded-full bg-white/60 blur-2xl motion-safe:animate-float [animation-delay:1.5s]" />
        <div className="absolute left-[22%] top-[40%] h-12 w-32 rounded-full bg-white/50 blur-2xl motion-safe:animate-float [animation-delay:3s]" />
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        {/* 文字可读性光晕 */}
        <div
          aria-hidden
          className="absolute -inset-x-8 -inset-y-8 -z-10 rounded-[48px] bg-white/35 blur-3xl"
        />

        <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/80 px-4 py-1.5 text-sm font-semibold text-ink-soft shadow-sm backdrop-blur-md">
          <Sparkles className="size-4 text-ocean-1" />
          前端学习路线
        </span>

        <h1
          className="text-5xl font-black leading-[1.08] tracking-tight text-ink md:text-7xl"
          style={{ textShadow: "0 2px 24px rgba(255,255,255,0.9)" }}
        >
          前端从零到全栈
        </h1>

        <p
          className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-[#173d33] md:text-xl"
          style={{
            textShadow:
              "0 1px 2px rgba(255,255,255,0.95), 0 2px 18px rgba(255,255,255,0.95)",
          }}
        >
          沿着石阶、藤蔓与遗迹一路向下，逐级攀登，最终成为全栈工程师。
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" onClick={() => goTo("prep")}>
            开始攀登
            <ArrowDown className="size-4" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => goTo("bonus")}>
            直达加分项
          </Button>
        </div>
      </motion.div>
    </header>
  );
}
