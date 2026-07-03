"use client";

import type { Project } from "@/types";
import { useI18n } from "@/i18n/I18nProvider";
import { TechTag, MetricPill } from "@/components/ui/primitives";
import { DemoLink, ProjectBadges, RepoLink, categoryLabel } from "@/components/projects/ProjectCard";
import { ProjectGallery } from "@/components/projects/ProjectGallery";

/**
 * The flagship gets a wide, two-column feature block and the strongest
 * hierarchy on the page. The visual reinforces Data Fuel's core insight:
 * the cheapest station per litre is often NOT the cheapest by total cost.
 */
export function FlagshipCard({ project }: { project: Project }) {
  const { locale, t } = useI18n();

  return (
    <article className="relative overflow-hidden rounded-xl border border-border bg-surface ring-1 ring-accent/15">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Content */}
        <div className="p-7 sm:p-9">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-label text-accent">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              {t.projects.flagship}
            </p>
            <ProjectBadges project={project} />
          </div>

          <div className="mt-4">
            <p className="font-mono text-[0.72rem] uppercase tracking-label text-muted/80">
              {categoryLabel(project.category, locale)}
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              {project.name}
            </h3>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-text/90">
              {project.tagline[locale]}
            </p>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <span className="font-mono text-[0.68rem] uppercase tracking-label text-muted/80">
                {t.projects.problem}
              </span>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.problem[locale]}</p>
            </div>
            <div>
              <span className="font-mono text-[0.68rem] uppercase tracking-label text-muted/80">
                {t.projects.product}
              </span>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.product[locale]}</p>
            </div>
          </div>

          <div className="mt-6">
            <span className="font-mono text-[0.68rem] uppercase tracking-label text-muted/80">
              {t.projects.engineering}
            </span>
            <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
              {project.highlights[locale].map((item, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {project.metrics ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.metrics.map((m) => (
                <MetricPill key={m.en}>{m[locale]}</MetricPill>
              ))}
            </div>
          ) : null}

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <DemoLink project={project} />
            <RepoLink project={project} />
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="border-t border-border bg-surface-2/50 p-7 sm:p-9 lg:border-l lg:border-t-0">
          <CostComparison />
        </div>
      </div>

      {/* Full-width screenshot gallery */}
      {project.images ? (
        <div className="border-t border-border p-7 sm:p-9">
          <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-label text-muted/80">
            {t.a11y.gallery}
          </p>
          <ProjectGallery images={project.images} />
        </div>
      ) : null}
    </article>
  );
}

/**
 * Illustrative "before vs after" decision, not live product data. Figures are
 * internally consistent with Data Fuel's total-cost model:
 *   total = fuel (litres × €/L) + travel (round-trip km × €/km).
 * The cheapest price-per-litre station loses once the drive is priced in.
 */
const LITRES = 40;
const EUR_PER_KM = 0.25; // illustrative round-trip driving cost per km

function station(pricePerLitre: number, distanceKm: number, win: boolean) {
  const fuel = LITRES * pricePerLitre;
  const travel = distanceKm * 2 * EUR_PER_KM;
  return { pricePerLitre, distanceKm, fuel, travel, total: fuel + travel, win };
}

function CostComparison() {
  const { t, locale } = useI18n();
  const v = t.projects.costViz;

  const money = (n: number) =>
    locale === "es" ? `${n.toFixed(2).replace(".", ",")} €` : `€${n.toFixed(2)}`;
  const perL = (n: number) =>
    locale === "es" ? `${n.toFixed(2).replace(".", ",")} €/L` : `€${n.toFixed(2)}/L`;

  const options = [
    { name: v.option1, ...station(1.45, 12, false) },
    { name: v.option2, ...station(1.49, 3, true) },
  ];

  return (
    <div className="flex h-full flex-col justify-center">
      <p className="font-mono text-[0.72rem] font-medium uppercase leading-snug tracking-label text-text">
        {v.header}
      </p>
      <p className="mt-1.5 font-mono text-[0.62rem] uppercase tracking-label text-muted/70">
        {v.context}
      </p>

      <div className="mt-5 space-y-3">
        {options.map((o) => (
          <div
            key={o.name}
            className={
              o.win
                ? "rounded-lg border border-accent/50 bg-accent/[0.06] p-4 ring-1 ring-accent/20"
                : "rounded-lg border border-border bg-surface/60 p-4"
            }
          >
            <div className="flex items-center justify-between gap-2">
              <span
                className={`font-mono text-[0.72rem] font-medium ${o.win ? "text-accent" : "text-muted"}`}
              >
                {o.name}
              </span>
              {o.win ? (
                <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-[0.56rem] uppercase tracking-label text-accent-contrast">
                  {v.best}
                </span>
              ) : null}
            </div>

            <div className="mt-1.5 flex items-baseline justify-between font-mono text-[0.62rem] text-muted/70">
              <span>{perL(o.pricePerLitre)}</span>
              <span>{o.distanceKm} km</span>
            </div>

            <dl className="mt-3 space-y-1 font-mono text-[0.66rem] text-muted">
              <BreakdownRow label={v.fuel} value={money(o.fuel)} />
              <BreakdownRow label={v.travel} value={money(o.travel)} />
            </dl>

            <div className="mt-2.5 flex items-baseline justify-between border-t border-border/60 pt-2">
              <span className="font-mono text-[0.62rem] uppercase tracking-label text-muted">
                {v.total}
              </span>
              <span
                className={`font-display text-lg font-semibold tabular-nums ${o.win ? "text-accent" : "text-text"}`}
              >
                {money(o.total)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 flex items-center gap-2 font-mono text-[0.62rem] text-muted">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
        {v.footer}
      </p>
    </div>
  );
}

function BreakdownRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt>{label}</dt>
      <dd className="tabular-nums text-muted/90">{value}</dd>
    </div>
  );
}
