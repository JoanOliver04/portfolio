"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import type { ProjectImage } from "@/types";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";

/** Bilingual screenshot picker with keyboard navigation and a full-size viewer. */
export function ProjectGallery({
  images,
  projectId,
  className,
  singleFrame = false,
}: {
  images: ProjectImage[];
  projectId: string;
  className?: string;
  singleFrame?: boolean;
}) {
  const { t, locale, ready } = useI18n();
  const [index, setIndex] = useState(0);
  const count = images.length;
  const frame = useRef<HTMLDivElement>(null);
  const viewer = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const [viewerOpen, setViewerOpen] = useState(false);
  const closing = useRef(false);
  const returnPoint = useRef({ url: "", top: 0 });
  const viewerHash = `#gallery-${projectId}`;
  const [nearViewport, setNearViewport] = useState(false);
  const cover = images[0]?.thumbnail;

  useEffect(() => {
    if (!frame.current || !cover) return;
    if (!("IntersectionObserver" in window)) {
      setNearViewport(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearViewport(true);
        observer.disconnect();
      }
    }, { rootMargin: "320px 0px" });
    observer.observe(frame.current);
    return () => observer.disconnect();
  }, [cover]);

  useEffect(() => {
    let restoreFrame = 0;
    const syncHistory = () => {
      const dialog = viewer.current;
      if (!dialog) return;
      cancelAnimationFrame(restoreFrame);
      closing.current = false;
      if (location.hash === viewerHash) {
        if (!dialog.open) dialog.showModal();
        setViewerOpen(true);
      } else if (dialog.open) {
        dialog.close();
        setViewerOpen(false);
        // Restore after the browser has applied its own fragment scrolling.
        restoreFrame = requestAnimationFrame(() => {
          if (dialog.open) return;
          if (!returnPoint.current.url && location.hash === "#" + projectId) {
            opener.current?.focus();
            return;
          }
          if (location.href !== returnPoint.current.url) return;
          opener.current?.focus({ preventScroll: true });
          window.scrollTo({ top: returnPoint.current.top, behavior: "instant" });
        });
      }
    };
    syncHistory();
    window.addEventListener("hashchange", syncHistory);
    window.addEventListener("pageshow", syncHistory);
    return () => {
      cancelAnimationFrame(restoreFrame);
      window.removeEventListener("hashchange", syncHistory);
      window.removeEventListener("pageshow", syncHistory);
    };
  }, [projectId, viewerHash]);

  const openViewer = () => {
    if (!viewer.current || viewer.current.open) return;
    returnPoint.current = { url: location.href, top: window.scrollY };
    location.hash = viewerHash;
  };

  const closeViewer = () => {
    if (!closing.current && viewer.current?.open) {
      closing.current = true;
      if (returnPoint.current.url) window.history.back();
      else location.replace("#" + projectId);
    }
  };

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
  const preview = current.src.replace("/projects/", "/project-previews/");

  return (
    <div
      className={cn("group/gallery min-w-0", className)}
      role="group"
      aria-roledescription="carousel"
      aria-label={t.a11y.gallery}
      onKeyDown={onKeyDown}
    >
      <div className="relative overflow-hidden rounded-lg border border-border bg-surface-2">
        <div
          ref={frame}
          style={{ aspectRatio: current.aspectRatio }}
          className={cn("relative w-full", singleFrame ? "aspect-[4/5] max-h-[70svh] sm:aspect-square lg:aspect-[6/5]" : "aspect-video")}
        >
          <picture>
            {!nearViewport && index === 0 && cover && (
              <source media="(scripting: enabled)" srcSet={cover} />
            )}
            <source media="(max-width: 540px)" srcSet={`${preview}.480.webp 1x, ${preview}.960.webp 2x`} />
            <Image
              src={`${preview}.960.webp`}
              alt={current.caption[locale]}
              fill
              sizes={singleFrame ? "(min-width: 768px) 540px, 94vw" : "(max-width: 1024px) 100vw, 760px"}
              className="object-contain"
            />
          </picture>
        </div>

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
      <button
        ref={opener}
        type="button"
        aria-haspopup="dialog"
        disabled={!ready}
        onClick={openViewer}
        className="mt-2 inline-flex min-h-11 items-center text-xs font-medium text-muted underline underline-offset-4 hover:text-accent"
      >
        {t.a11y.galleryFullSize}
      </button>
      <dialog
        ref={viewer}
        aria-label={t.a11y.galleryFullSize}
        onCancel={(event) => {
          event.preventDefault();
          closeViewer();
        }}
        className="capture-viewer fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-black text-white backdrop:bg-black open:flex open:flex-col"
      >
        <button
          type="button"
          aria-label={t.a11y.galleryClose}
          onClick={closeViewer}
          className="mb-2 flex h-12 w-12 shrink-0 items-center justify-center self-end rounded-full bg-red-700 text-white hover:bg-red-800 focus-visible:outline-white"
        >
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
        {viewerOpen && (
          <div className="relative min-h-0 flex-1">
            <Image src={current.src} alt={current.caption[locale]} fill sizes="100vw" loading="eager" className="object-contain" />
          </div>
        )}
        {count > 1 && (
          <div className="mt-2 flex shrink-0 items-center justify-center gap-4">
            <button type="button" onClick={() => go(index - 1)} aria-label={t.a11y.galleryPrev} className="grid h-11 w-11 place-items-center rounded-full bg-white/15 hover:bg-white/25">
              <Chevron dir="left" />
            </button>
            <span role="status" className="min-w-16 text-center font-mono text-sm tabular-nums">
              {index + 1} / {count}
              <span className="sr-only"> · {current.caption[locale]}</span>
            </span>
            <button type="button" onClick={() => go(index + 1)} aria-label={t.a11y.galleryNext} className="grid h-11 w-11 place-items-center rounded-full bg-white/15 hover:bg-white/25">
              <Chevron dir="right" />
            </button>
          </div>
        )}
      </dialog>
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
