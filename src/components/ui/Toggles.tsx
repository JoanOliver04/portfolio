"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";

const controlClass =
  "inline-flex h-11 items-center justify-center rounded-md border border-border bg-surface/60 text-text transition-colors hover:border-accent/60 hover:text-accent";

/** Switches between the two languages, showing the target language code. */
export function LanguageToggle({ className }: { className?: string }) {
  const { locale, t } = useI18n();
  const next = locale === "en" ? "ES" : "EN";
  const path = "/" + next.toLowerCase();
  const [suffix, setSuffix] = useState("");
  useEffect(() => {
    const sync = () => setSuffix(location.search + location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <a
      href={path + suffix}
      hrefLang={next.toLowerCase()}
      onClick={(event) => {
        // An explicit deep link is stable even during viewport or scroll restoration.
        if (location.hash) {
          event.currentTarget.href = path + location.search + location.hash;
          return;
        }
        const top = document.querySelector(".site-header")?.getBoundingClientRect().bottom ?? 0;
        const project = Array.from(document.querySelectorAll("article[id]")).find(article => {
          const bounds = article.getBoundingClientRect();
          return bounds.top < innerHeight / 2 && bounds.bottom > top;
        });
        const hash = project ? "#" + project.id : "";
        event.currentTarget.href = path + location.search + hash;
      }}
      aria-label={t.a11y.language}
      className={cn(controlClass, "w-12 font-mono text-xs tracking-label disabled:cursor-wait disabled:opacity-60", className)}
    >
      <span aria-hidden="true">{next}</span>
    </a>
  );
}

/** Toggles light / dark, guarding against hydration mismatch until mounted. */
export function ThemeToggle({ className }: { className?: string }) {
  const { t } = useI18n();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={t.a11y.theme}
      className={cn(controlClass, "w-11", className)}
    >
      {/* Render a neutral placeholder until we know the resolved theme. */}
      {!mounted ? (
        <span className="h-4 w-4" aria-hidden="true" />
      ) : isDark ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}
