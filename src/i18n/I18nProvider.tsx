"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Locale } from "@/types";
import { dictionary, type Dictionary } from "@/content/dictionary";

const STORAGE_KEY = "portfolio-lang";

interface I18nValue {
  locale: Locale;
  /** Dictionary for the active locale. */
  t: Dictionary;
  /** True once the client has read the persisted preference. */
  ready: boolean;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      if (location.pathname === "/") {
        const preferred = localStorage.getItem(STORAGE_KEY) ?? navigator.language.split("-")[0];
        if (preferred === "es") {
          location.replace("/es" + location.search + location.hash);
          return;
        }
      } else {
        localStorage.setItem(STORAGE_KEY, locale);
      }
    } catch {
      /* localStorage may be unavailable; fall back to default */
    }
    setReady(true);
  }, [locale]);

  const value = useMemo<I18nValue>(
    () => ({ locale, t: dictionary[locale], ready }),
    [locale, ready],
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
