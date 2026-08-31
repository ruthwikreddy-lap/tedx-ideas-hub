import { useEffect, useState } from "react";
import { event, eventDate } from "@/data/event";
import { Reveal } from "./Reveal";

function diff(target: Date) {
  const ms = target.getTime() - Date.now();
  if (ms <= 0) return null;
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

export function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof diff> | undefined>(undefined);

  useEffect(() => {
    setTime(diff(eventDate));
    const t = setInterval(() => setTime(diff(eventDate)), 1000);
    return () => clearInterval(t);
  }, []);

  const units =
    time === undefined || time === null
      ? [
          { label: "Days", value: 0 },
          { label: "Hours", value: 0 },
          { label: "Minutes", value: 0 },
          { label: "Seconds", value: 0 },
        ]
      : [
          { label: "Days", value: time.days },
          { label: "Hours", value: time.hours },
          { label: "Minutes", value: time.minutes },
          { label: "Seconds", value: time.seconds },
        ];

  const passed = time === null;

  return (
    <section aria-labelledby="countdown-title" className="bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-background/50">
            {event.dateLabel} · {event.year}
          </p>
          <h2
            id="countdown-title"
            className="mt-4 font-display text-2xl font-extrabold uppercase tracking-tight text-background md:text-4xl"
          >
            {passed ? "Thank you for being part of TEDx" : "Counting down to 21 November"}
          </h2>
        </Reveal>

        {passed ? (
          <Reveal delay={0.1}>
            <p className="mt-8 font-display text-[clamp(2rem,7vw,6rem)] font-extrabold uppercase leading-none tracking-[-0.04em] text-brand">
              The event has begun
            </p>
          </Reveal>
        ) : (
          <Reveal delay={0.1}>
            <dl className="mt-10 grid grid-cols-2 gap-px border border-background/15 bg-background/15 md:grid-cols-4">
              {units.map((u) => (
                <div key={u.label} className="bg-ink px-5 py-8 text-center md:py-12">
                  <dd
                    className="font-display text-[clamp(2.75rem,8vw,6rem)] font-extrabold leading-none tracking-[-0.05em] text-background tabular-nums"
                    aria-live={u.label === "Seconds" ? "off" : undefined}
                  >
                    {String(u.value).padStart(2, "0")}
                  </dd>
                  <dt className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand">
                    {u.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
      </div>
    </section>
  );
}
