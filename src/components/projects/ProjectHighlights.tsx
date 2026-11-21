import { cn } from "@/lib/utils";

export function ProjectHighlights({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul role="list" className={cn("[columns:13rem_2] gap-x-5 leading-relaxed text-muted", className)}>
      {items.map((item) => (
        <li key={item} className="mb-2.5 flex break-inside-avoid items-start gap-2.5 last:mb-0">
          <span
            aria-hidden="true"
            className="mt-[0.62em] h-1 w-1 shrink-0 rounded-full bg-accent"
          />
          <span className="min-w-0 [overflow-wrap:anywhere]">{item}</span>
        </li>
      ))}
    </ul>
  );
}
