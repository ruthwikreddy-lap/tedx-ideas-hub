import { aboutBlocks, event } from "@/data/event";
import { Placeholder, Reveal, SectionHeading } from "./Reveal";

export function AboutTedx() {
  return (
    <section id="about" className="border-b border-hairline py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="About TEDx" title="Ideas Worth Spreading" />
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft md:text-lg">
                <p>
                  TEDx events are independently organized events that bring people together
                  to share ideas, stories and perspectives. They are designed to spark deep
                  discussion and connection within a local community.
                </p>
                <p>
                  TED is a nonprofit organization devoted to ideas worth spreading. In the
                  spirit of that mission, the TEDx program grants licenses to individuals and
                  communities who want to host their own TED-like experience.
                </p>
                <p className="border-l-2 border-brand pl-5 text-ink">
                  {event.name}
                  <span className="text-brand">x</span> {event.school} is an independently
                  organized event, curated and produced by our own team — it is not organized
                  by TED itself.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="relative">
              <Placeholder label="TEDx stage photograph" ratio="aspect-[4/5]" />
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -left-5 hidden h-24 w-24 bg-brand md:block"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function AboutEvent() {
  return (
    <section aria-labelledby="about-event" className="border-b border-hairline py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          id="about-event"
          eyebrow="The event"
          title="A day built around ideas"
          subtitle="[Official event description placeholder. This paragraph will introduce the TEDx event at P. Obul Reddy Public School — its intent, its voice and what the day sets out to create.]"
        />

        <ul className="mt-16 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {aboutBlocks.map((b, i) => (
            <Reveal as="li" key={b.no} delay={i * 0.08} className="group bg-background">
              <div className="h-full p-7 transition-colors group-hover:bg-ink md:p-9">
                <p className="font-display text-sm font-extrabold tracking-[0.2em] text-brand">
                  {b.no}
                </p>
                <h3 className="mt-6 text-2xl uppercase text-ink transition-colors group-hover:text-background">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft transition-colors group-hover:text-background/70">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
