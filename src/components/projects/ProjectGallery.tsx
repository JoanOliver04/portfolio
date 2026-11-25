"use client";

import { useCallback, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import type { ProjectImage } from "@/types";
import { useI18n } from "@/i18n/I18nProvider";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

/** Bilingual screenshot picker with keyboard navigation and a link to the selected original. */
export function ProjectGallery({
  images,
  className,
  singleFrame = false,
}: {
  images: ProjectImage[];
  className?: string;
  singleFrame?: boolean;
}) {
  const { t, locale, ready } = useI18n();
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const count = images.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!ready || e.target instanceof HTMLSelectElement) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    }
  };

  if (count === 0) return null;
  const current = images[index];

  return (
    <div
      className={cn("group/gallery min-w-0", className)}
      role="group"
      aria-roledescription="carousel"
      aria-label={t.a11y.gallery}
      onKeyDown={onKeyDown}
    >
      <div className="relative overflow-hidden rounded-lg border border-border bg-surface-2">
        {singleFrame ? (
          <div className="relative aspect-[4/5] max-h-[70svh] w-full sm:aspect-square lg:aspect-[6/5]">
            <Image
              key={current.src}
              src={current.src}
              alt={current.caption[locale]}
              fill
              sizes="(min-width: 768px) 540px, 94vw"
              className="object-contain"
            />
          </div>
        ) : (
          <div
            className={cn("flex", !reduced && "transition-transform duration-500 ease-out")}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img, i) => (
              <div key={img.src} className="relative aspect-video w-full shrink-0 basis-full">
                <Image
                  src={img.src}
                  alt={img.caption[locale]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 760px"
                  className="object-contain"
                  loading={i === 0 ? "eager" : "lazy"}
                  aria-hidden={i !== index}
                />
              </div>
            ))}
          </div>
        )}

        {count > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              disabled={!ready}
              aria-label={t.a11y.galleryPrev}
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/80 text-muted backdrop-blur transition-colors hover:border-accent/60 hover:text-accent disabled:cursor-wait disabled:opacity-60"
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              disabled={!ready}
              aria-label={t.a11y.galleryNext}
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/80 text-muted backdrop-blur transition-colors hover:border-accent/60 hover:text-accent disabled:cursor-wait disabled:opacity-60"
            >
              <Chevron dir="right" />
            </button>
            <span className="absolute right-2 top-2 rounded-full bg-bg/70 px-2 py-0.5 font-mono text-[0.62rem] text-muted backdrop-blur">
              {index + 1} / {count}
            </span>
          </>
        ) : null}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <p className="min-w-0 flex-[1_1_12rem] font-mono text-[0.72rem] leading-snug text-muted" aria-live="polite">
          {current.caption[locale]}
        </p>
        {count > 1 && (
          <select
            aria-label={t.a11y.galleryGoTo}
            value={index}
            onChange={(event) => go(Number(event.target.value))}
            disabled={!ready}
            className="min-h-11 w-full min-w-0 max-w-full rounded-md border border-border bg-bg px-2 text-base text-text sm:text-sm"
          >
            {images.map((img, i) => (
              <option key={img.src} value={i}>{i + 1} / {count} · {(img.label ?? img.caption)[locale]}</option>
            ))}
          </select>
        )}
      </div>
      <a
        href={current.src}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex min-h-8 items-center text-xs font-medium text-muted underline underline-offset-4 hover:text-accent"
      >
        {t.a11y.galleryFullSize}
        <span className="sr-only"> ({t.a11y.opensNewTab})</span>
      </a>
    </div>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={dir === "left" ? "rotate-180" : undefined}
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}
