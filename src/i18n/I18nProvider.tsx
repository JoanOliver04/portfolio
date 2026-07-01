"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Locale } from "@/types";
import { dictionary, type Dictionary } from "@/content/dictionary";

const STORAGE_KEY = "portfolio-lang";
const DEFAULT_LOCALE: Locale = "en";

interface I18nValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  toggleLocale: () => void;
  /** Dictionary for the active locale. */
  t: Dictionary;
  /** True once the client has read the persisted preference. */
  ready: boolean;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  // Server render and first client paint use the default locale (English),
  // so the initial HTML — and therefore SEO — is stable. The persisted
  // preference is applied right after mount.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "es") {
        setLocaleState(stored);
      }
    } catch {
      /* localStorage may be unavailable; fall back to default */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore persistence errors */
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "es" : "en");
  }, [locale, setLocale]);

  const value = useMemo<I18nValue>(
    () => ({ locale, setLocale, toggleLocale, t: dictionary[locale], ready }),
    [locale, setLocale, toggleLocale, ready],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
