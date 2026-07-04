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

        {/* GitHub 源码入口：与眉标同高、靠近标题右侧 */}
        <a
          href="https://github.com/shallowaria/shallowaria.github.io"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="在 GitHub 上查看本站源码"
          className="absolute top-0 left-[calc(50%+6.28rem)] z-20 inline-flex size-10 items-center justify-center rounded-full border border-white/70 bg-white/80 text-ink shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-ocean-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-2 md:left-[calc(50%+12.86rem)]"
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
