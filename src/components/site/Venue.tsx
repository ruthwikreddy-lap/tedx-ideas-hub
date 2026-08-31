import { MapPin } from "lucide-react";
import { event, venue } from "@/data/event";
import { Placeholder, Reveal, SectionHeading } from "./Reveal";

export function Venue() {
  return (
    <section aria-labelledby="venue-title" className="border-b border-hairline py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Placeholder label="Venue photograph" ratio="aspect-[4/3]" />
            <div className="mt-6 border border-hairline">
              {venue.mapUrl ? (
                <iframe
                  title="Event location map"
                  src={venue.mapUrl}
                  loading="lazy"
                  className="h-64 w-full"
                />
              ) : (
                <div className="grid-lines flex h-40 items-center justify-center bg-muted">
                  <p className="eyebrow">Map embed placeholder</p>
                </div>
              )}
            </div>
          </Reveal>

          <div>
            <SectionHeading id="venue-title" eyebrow="The venue" title="The Venue" />
            <Reveal delay={0.1}>
              <p className="mt-6 font-display text-2xl uppercase tracking-tight text-ink md:text-4xl">
                {venue.name}
              </p>
              <dl className="mt-10 divide-y divide-hairline border-y border-hairline">
                {[
                  { k: "Address", v: venue.address },
                  { k: "Date", v: event.dateLabel },
                  { k: "Location", v: venue.description },
                ].map((row) => (
                  <div key={row.k} className="grid gap-1 py-5 sm:grid-cols-[140px_1fr] sm:gap-6">
                    <dt className="eyebrow">{row.k}</dt>
                    <dd className="text-sm leading-relaxed text-ink-soft md:text-base">{row.v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={venue.mapUrl || "#"}
                className="mt-8 inline-flex items-center gap-3 border border-ink px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-background"
              >
                <MapPin size={15} /> View on Map
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
