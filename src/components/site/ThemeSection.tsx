import { motion, useReducedMotion } from "motion/react";
import { event } from "@/data/event";
import { Reveal } from "./Reveal";

export function ThemeSection() {
  const reduce = useReducedMotion();
  const letters = event.theme.split("");

  return (
    <section
      id="theme"
      aria-labelledby="theme-title"
      className="grain relative overflow-hidden border-b border-hairline bg-ink py-20 md:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="float-slow absolute -left-24 top-1/4 h-72 w-72 rounded-full border border-background/15" />
        <div className="absolute bottom-0 right-8 h-40 w-40 border border-brand md:h-72 md:w-72" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-background/50">
            The theme
          </p>
        </Reveal>

        <h2 id="theme-title" className="mt-6 flex flex-wrap">
          {letters.map((ch, i) => (
            <motion.span
              key={`${ch}-${i}`}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
              className="display-xl text-background"
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </h2>

        <Reveal delay={0.2}>
          <p className="mt-8 font-display text-xl uppercase tracking-tight text-brand md:text-3xl">
            {event.themeTagline}
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-12 max-w-3xl border-t border-background/20 pt-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-background/50">
              Curatorial note
            </p>
            <p className="mt-4 text-base leading-relaxed text-background/75 md:text-lg">
              {event.themeDescription}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
