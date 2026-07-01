"use client";

import { useCallback, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import type { ProjectImage } from "@/types";
import { useI18n } from "@/i18n/I18nProvider";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

/**
 * Accessible screenshot carousel. Real product images sell the work faster than
 * copy, so each project ships a short curated gallery. Keyboard navigable
 * (arrow keys), honours reduced-motion (instant swap, no slide), and lazy-loads
 * every frame after the first. Captions are bilingual and double as alt text.
 */
export function ProjectGallery({
  images,
  className,
}: {
  images: ProjectImage[];
  className?: string;
}) {
  const { t, locale } = useI18n();
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const count = images.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
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
      className={cn("group/gallery", className)}
      role="group"
      aria-roledescription="carousel"
      aria-label={t.a11y.gallery}
      onKeyDown={onKeyDown}
    >
      <div className="relative overflow-hidden rounded-lg border border-border bg-surface-2">
        {/* Track */}
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

        {count > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label={t.a11y.galleryPrev}
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/80 text-muted backdrop-blur transition-colors hover:border-accent/60 hover:text-accent"
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label={t.a11y.galleryNext}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/80 text-muted backdrop-blur transition-colors hover:border-accent/60 hover:text-accent"
            >
              <Chevron dir="right" />
            </button>
            <span className="absolute right-2 top-2 rounded-full bg-bg/70 px-2 py-0.5 font-mono text-[0.62rem] text-muted backdrop-blur">
              {index + 1} / {count}
            </span>
          </>
        ) : null}
      </div>

      {/* Caption + dots */}
      <div className="mt-3 flex items-center justify-between gap-4">
        <p className="min-w-0 font-mono text-[0.72rem] leading-snug text-muted" aria-live="polite">
          {current.caption[locale]}
        </p>
        {count > 1 ? (
          <div className="flex shrink-0 items-center gap-1.5">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`${t.a11y.galleryGoTo} ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-4 bg-accent" : "w-1.5 bg-border hover:bg-muted",
                )}
              />
            ))}
          </div>
        ) : null}
      </div>
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
