import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { event } from "@/data/event";

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="home"
      className="grain relative overflow-hidden border-b border-hairline bg-background pt-28 md:pt-36"
    >
      {/* Abstract geometric composition */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="grid-lines absolute inset-0 opacity-60" />
        <div className="float-slow absolute -right-16 top-10 h-64 w-64 rounded-full bg-brand/10 blur-2xl md:h-96 md:w-96" />
        <div className="absolute right-6 top-24 h-40 w-40 border border-brand/50 md:right-24 md:h-72 md:w-72" />
        <div className="float-slow absolute bottom-24 left-4 h-24 w-24 bg-brand/90 md:h-36 md:w-36" />
        <svg
          className="absolute bottom-0 left-1/2 h-56 w-[120%] -translate-x-1/2 text-ink/10"
          viewBox="0 0 1200 200"
          fill="none"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M0 ${40 + i * 30} C 300 ${i * 24} 900 ${200 - i * 18} 1200 ${60 + i * 24}`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 pb-16 md:px-10 md:pb-24">
        <motion.p {...rise(0)} className="eyebrow">
          Independently organized TED event
        </motion.p>

        <h1 className="mt-6">
          <motion.span {...rise(0.08)} className="display-xl block text-brand">
            TED<span className="align-super text-[0.45em]">x</span>
          </motion.span>
          <motion.span
            {...rise(0.18)}
            className="mt-2 block font-display text-[clamp(1.5rem,4.2vw,3.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-ink"
          >
            {event.school}
          </motion.span>
        </h1>

        <motion.div
          {...rise(0.3)}
          className="mt-10 flex flex-wrap items-stretch gap-px border border-ink"
        >
          <div className="bg-ink px-6 py-5 md:px-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-background/60">
              Date
            </p>
            <p className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight text-background md:text-4xl">
              21 November
            </p>
          </div>
          <div className="flex-1 bg-background px-6 py-5 md:px-10">
            <p className="eyebrow">Theme</p>
            <p className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight text-brand md:text-4xl">
              {event.theme}
            </p>
          </div>
        </motion.div>

        <motion.p
          {...rise(0.42)}
          className="mt-10 max-w-xl text-lg leading-relaxed text-ink-soft md:text-2xl"
        >
          {event.heroSupport}
        </motion.p>

        <motion.div {...rise(0.5)} className="mt-10 flex flex-wrap gap-3">
          <a
            href="#about"
            className="group inline-flex items-center gap-3 bg-brand px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-foreground transition-transform hover:-translate-y-0.5"
          >
            Explore the Event
            <ArrowDown size={15} className="transition-transform group-hover:translate-y-1" />
          </a>
          <a
            href="#speakers"
            className="inline-flex items-center gap-3 border border-ink px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-background"
          >
            Meet the Speakers
          </a>
        </motion.div>
      </div>

      <div className="relative overflow-hidden border-t border-hairline bg-background py-4">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex gap-10">
              {["Ideas", "People", "Perspectives", "Conversations", "Curiosity"].map((w) => (
                <span
                  key={w}
                  className="font-display text-sm font-extrabold uppercase tracking-[0.3em] text-ink-soft"
                >
                  {w} <span className="text-brand">•</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
