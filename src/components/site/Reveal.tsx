import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section";
};

export function Reveal({ children, delay = 0, y = 26, className, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  id?: string;
}) {
  return (
    <Reveal className="max-w-3xl">
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 id={id} className="display-lg text-ink">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-lg text-ink-soft md:text-xl">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}

export function Placeholder({
  label,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} — image placeholder`}
      className={`grain grid-lines relative flex ${ratio} items-end overflow-hidden bg-muted ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="h-16 w-16 rotate-45 border border-brand/40" aria-hidden="true" />
      </div>
      <span className="eyebrow relative z-10 m-5 bg-background px-2 py-1">{label}</span>
    </div>
  );
}
