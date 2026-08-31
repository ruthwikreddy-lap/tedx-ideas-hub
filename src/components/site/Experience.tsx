import { experience } from "@/data/event";
import { Placeholder, Reveal, SectionHeading } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="border-b border-hairline py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          eyebrow="The experience"
          title="More than a stage"
          subtitle="What a day at TEDx P. Obul Reddy Public School feels like."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experience.map((e, i) => (
            <Reveal
              key={e.title}
              delay={(i % 3) * 0.08}
              className={i === 0 ? "lg:col-span-2" : ""}
            >
              <article className="group h-full border border-hairline bg-background transition-all duration-300 hover:-translate-y-1 hover:border-brand">
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 group-hover:scale-[1.04]">
                    <Placeholder
                      label={`${e.title} photograph`}
                      ratio={i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}
                    />
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl uppercase text-ink md:text-3xl">{e.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
                    {e.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
