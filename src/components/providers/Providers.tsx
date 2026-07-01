"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { I18nProvider } from "@/i18n/I18nProvider";

/** Single client boundary that supplies theme and language to the whole app. */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  );
}
