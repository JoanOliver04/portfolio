"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/primitives";
import { LanguageToggle, ThemeToggle } from "@/components/ui/Toggles";

const SECTIONS = ["projects", "experience", "education", "contact"] as const;

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when resizing up to desktop.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const navLabels: Record<(typeof SECTIONS)[number], string> = {
    projects: t.nav.projects,
    experience: t.nav.experience,
    education: t.nav.education,
    contact: t.nav.contact,
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-border bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="group inline-flex items-baseline gap-2 font-display text-lg font-semibold tracking-tight text-text"
          aria-label={t.a11y.home}
        >
          <span>{site.shortName}</span>
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-125" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-text"
            >
              {navLabels[key]}
            </a>
          ))}
          <span className="mx-2 h-5 w-px bg-border" aria-hidden="true" />
          <LanguageToggle />
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface/60 text-text transition-colors hover:border-accent/60"
          >
            <span className="relative block h-3.5 w-4" aria-hidden="true">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-full bg-current transition-transform duration-300",
                  open && "translate-y-[7px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-current transition-opacity duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-full bg-current transition-transform duration-300",
                  open && "-translate-y-[7px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-border transition-[max-height] duration-300 md:hidden",
          open ? "max-h-72 border-t" : "max-h-0",
        )}
      >
        <Container>
          <nav aria-label="Mobile" className="flex flex-col py-2">
            {SECTIONS.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-muted transition-colors last:border-0 hover:text-text"
              >
                {navLabels[key]}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
