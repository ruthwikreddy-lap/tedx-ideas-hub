import { schedule } from "@/data/event";
import { Reveal, SectionHeading } from "./Reveal";

export function Schedule() {
  return (
    <section id="schedule" className="border-b border-hairline py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          eyebrow="The programme"
          title="The Day"
          subtitle="A journey through ideas, stories and conversations."
        />
        <Reveal delay={0.08}>
          <p className="eyebrow mt-6 text-brand">
            All timings below are placeholders until official timings are confirmed
          </p>
        </Reveal>

        <ol className="mt-14 border-t border-hairline">
          {schedule.map((item, i) => (
            <Reveal as="li" key={`${item.time}-${i}`} delay={Math.min(i, 5) * 0.05}>
              <div className="group relative grid gap-2 border-b border-hairline py-6 pl-8 transition-colors hover:bg-muted md:grid-cols-[180px_minmax(0,1fr)_auto] md:items-baseline md:gap-8 md:pl-12">
                <span
                  aria-hidden="true"
                  className="absolute left-2 top-8 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-brand bg-background transition-colors group-hover:bg-brand md:left-4"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-2 top-0 w-px bg-hairline md:left-4"
                />
                <p className="font-display text-lg font-extrabold uppercase tracking-tight text-brand md:text-xl">
                  {item.time}
                </p>
                <h3 className="text-xl uppercase text-ink md:text-2xl">{item.title}</h3>
                <p className="text-sm text-ink-soft">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
