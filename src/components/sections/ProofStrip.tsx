"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { Container } from "@/components/ui/primitives";

export function ProofStrip() {
  const { t } = useI18n();

  return (
    <Container>
      <div className="grid grid-cols-2 divide-border rounded-lg border border-border bg-surface/60 sm:grid-cols-4 sm:divide-x">
        {t.proof.items.map((item, i) => (
          <div
            key={item.label}
            className={[
              "px-5 py-6 sm:px-6 sm:py-7",
              i < 2 ? "border-b border-border sm:border-b-0" : "",
              i % 2 === 0 ? "border-r border-border sm:border-r-0" : "",
            ].join(" ")}
          >
            <div className="font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
              {item.value}
            </div>
            <div className="mt-1.5 font-mono text-[0.72rem] leading-snug text-muted">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
