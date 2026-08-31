import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { speakers, type Speaker } from "@/data/event";
import { Placeholder, Reveal, SectionHeading } from "./Reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function SpeakerCard({ s, onOpen }: { s: Speaker; onOpen: () => void }) {
  return (
    <article className="group relative border border-hairline bg-background transition-all duration-300 hover:-translate-y-1 hover:border-brand">
      <div className="overflow-hidden">
        <div className="transition-transform duration-500 group-hover:scale-[1.04]">
          <Placeholder label={s.slot} ratio="aspect-[4/5]" />
        </div>
      </div>
      <div className="p-5">
        <p className="eyebrow text-brand">{s.slot}</p>
        <h3 className="mt-3 text-xl uppercase text-ink">{s.name}</h3>
        <p className="mt-1 text-sm text-ink-soft">{s.profession}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-soft opacity-70 transition-opacity group-hover:opacity-100">
          {s.short}
        </p>
        <button
          type="button"
          onClick={onOpen}
          className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:text-brand"
        >
          View Story
          <ArrowUpRight size={14} />
        </button>
      </div>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full"
      />
    </article>
  );
}

export function Speakers() {
  const [active, setActive] = useState<Speaker | null>(null);

  return (
    <section id="speakers" className="border-b border-hairline py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          eyebrow="The speakers"
          title="The Speakers"
          subtitle="Voices. Stories. Perspectives."
        />
        <p className="eyebrow mt-6">Line-up to be announced</p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {speakers.map((s, i) => (
            <Reveal key={s.id} delay={(i % 4) * 0.07}>
              <SpeakerCard s={s} onOpen={() => setActive(s)} />
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-none border-hairline p-0">
          {active ? (
            <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <Placeholder label={active.slot} ratio="aspect-[4/5]" />
              <div className="p-6 md:p-9">
                <DialogHeader className="space-y-0 text-left">
                  <p className="eyebrow text-brand">{active.category}</p>
                  <DialogTitle className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink">
                    {active.name}
                  </DialogTitle>
                  <DialogDescription className="mt-1 text-sm text-ink-soft">
                    {active.profession}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-7 space-y-6 text-sm leading-relaxed text-ink-soft">
                  <div>
                    <p className="eyebrow">Talk title</p>
                    <p className="mt-2 font-display text-xl uppercase tracking-tight text-ink">
                      {active.talkTitle}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow">Biography</p>
                    <p className="mt-2">{active.bio}</p>
                  </div>
                  <div className="border-l-2 border-brand pl-4">
                    <p className="eyebrow">Why this idea matters</p>
                    <p className="mt-2">{active.whyItMatters}</p>
                  </div>
                  <div>
                    <p className="eyebrow">Find them</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {active.socials.map((so) => (
                        <li key={so.label}>
                          <a
                            href={so.url}
                            className="inline-block border border-hairline px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:border-brand hover:text-brand"
                          >
                            {so.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
