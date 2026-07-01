interface CvDownloadProps {
  label: string;
  spanishLabel: string;
  englishLabel: string;
}

const cvFiles = {
  es: "/cv/joan-vicent-oliver-rosell-cv-es.pdf",
  en: "/cv/joan-vicent-oliver-rosell-cv-en.pdf",
} as const;

export function CvDownload({
  label,
  spanishLabel,
  englishLabel,
}: CvDownloadProps) {
  return (
    <details className="group relative">
      <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-md border border-border bg-surface/50 px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:text-accent [&::-webkit-details-marker]:hidden">
        <DownloadIcon />
        {label}
        <ChevronIcon className="transition-transform group-open:rotate-180" />
      </summary>

      <div className="absolute left-0 top-full z-20 mt-2 min-w-52 overflow-hidden rounded-md border border-border bg-surface p-1.5 shadow-lg">
        <a
          href={cvFiles.es}
          download="Joan_Vicent_Oliver_Rosell_CV_ES.pdf"
          className="flex items-center justify-between gap-4 rounded px-3 py-2.5 text-sm text-text transition-colors hover:bg-surface-2 hover:text-accent"
        >
          <span>{spanishLabel}</span>
          <span aria-hidden="true" className="font-mono text-[0.65rem] text-muted">
            PDF
          </span>
        </a>
        <a
          href={cvFiles.en}
          download="Joan_Vicent_Oliver_Rosell_CV_EN.pdf"
          className="flex items-center justify-between gap-4 rounded px-3 py-2.5 text-sm text-text transition-colors hover:bg-surface-2 hover:text-accent"
        >
          <span>{englishLabel}</span>
          <span aria-hidden="true" className="font-mono text-[0.65rem] text-muted">
            PDF
          </span>
        </a>
      </div>
    </details>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
