"use client";

import { useEffect, useRef, useState } from "react";
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
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const wideNavigation = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const navigation = wideNavigation.current;
    if (!open || !navigation) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width > 0) setOpen(false);
    });
    observer.observe(navigation);
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      observer.disconnect();
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [open]);

  const navLabels: Record<(typeof SECTIONS)[number], string> = {
    projects: t.nav.projects,
    experience: t.nav.experience,
    education: t.nav.education,
    contact: t.nav.contact,
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-contrast"
      >
        {t.a11y.skip}
      </a>
      <header
        ref={header}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setOpen(false);
          }
        }}
        onKeyDown={(event) => {
          if (open && event.key === "Escape") {
            setOpen(false);
            menuButton.current?.focus();
          }
        }}
        className={cn(
          "site-header sticky top-0 z-50 border-b transition-colors duration-300",
          scrolled || open
            ? "border-border bg-bg/85 backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <Container className="flex min-h-16 flex-wrap items-center justify-between gap-x-4 gap-y-2 py-2">
          <a
            href="#top"
            className="group inline-flex items-baseline gap-2 font-display text-lg font-semibold tracking-tight text-text"
            aria-label={t.a11y.home}
          >
            <span>{site.shortName}</span>
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-125" />
          </a>

          <nav ref={wideNavigation} aria-label={t.a11y.navigation} className="wide-navigation min-w-0 max-w-full flex-wrap items-center gap-1">
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

          <div className="compact-navigation flex max-w-full flex-wrap items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              ref={menuButton}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface/60 text-text transition-colors hover:border-accent/60"
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

        <div
          id="mobile-navigation"
          hidden={!open}
          className="compact-navigation max-h-[45dvh] overflow-y-auto border-t border-border"
        >
          <Container>
            <nav aria-label={t.a11y.navigation} className="flex flex-col py-2">
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
    </>
  );
}
