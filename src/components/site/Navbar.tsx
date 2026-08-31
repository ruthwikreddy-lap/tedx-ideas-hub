import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { event, navLinks } from "@/data/event";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-hairline bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#home" className="flex items-baseline gap-1.5" aria-label="Home">
          <span className="font-display text-xl font-extrabold tracking-tight text-brand md:text-2xl">
            TED<sup className="text-[0.6em]">x</sup>
          </span>
          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-ink sm:inline">
            {event.school}
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="relative text-[13px] font-semibold text-ink-soft transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          {event.bookingEnabled ? (
            <a
              href="#contact"
              className="bg-brand px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-foreground"
            >
              {event.bookingLabel}
            </a>
          ) : null}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center border border-hairline text-ink lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-hairline bg-background px-5 pb-12 pt-6 lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {navLinks.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-hairline py-4 text-2xl font-extrabold uppercase tracking-tight text-ink"
            >
              {l.label}
              <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
