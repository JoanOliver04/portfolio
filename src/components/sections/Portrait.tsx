import Image from "next/image";
import { site } from "@/content/site";

/**
 * Portrait — the ONLY place the profile photo is referenced.
 *
 * To use the real photo: drop a square image at `public/profile.jpg`
 * (same filename). Nothing else needs to change. A branded placeholder
 * ships in that location so the layout is never broken.
 */
export function Portrait() {
  return (
    <div className="relative">
      {/* Quiet background detail — non-informational, sits behind the frame. */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 -z-10 rounded-2xl bg-accent/5 blur-2xl sm:-inset-5"
      />

      {/* Restrained corner markers — decorative engineering-instrument accent. */}
      {[
        "-left-2 -top-2 border-l-2 border-t-2",
        "-right-2 -top-2 border-r-2 border-t-2",
        "-bottom-2 -left-2 border-b-2 border-l-2",
        "-bottom-2 -right-2 border-b-2 border-r-2",
      ].map((corner) => (
        <span
          key={corner}
          aria-hidden="true"
          className={`absolute h-5 w-5 rounded-[3px] border-accent/40 ${corner}`}
        />
      ))}

      <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-border bg-surface-2 shadow-sm ring-1 ring-border/50">
        <Image
          src="/profile.jpg"
          alt={site.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 448px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
