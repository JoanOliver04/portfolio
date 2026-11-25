"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

const FILL_LITRES = 40;
const TRAVEL_CENTS_PER_KM = 25;

function estimate(priceCents: number, oneWayKm: number) {
  const fuel = FILL_LITRES * priceCents;
  const travel = Math.round(2 * oneWayKm * TRAVEL_CENTS_PER_KM);
  return { priceCents, oneWayKm, fuel, travel, total: fuel + travel };
}

export function FuelComparison() {
  const { locale, ready, t } = useI18n();
  const v = t.projects.costViz;
  const [distance, setDistance] = useState(12);
  const currency = new Intl.NumberFormat(locale, { style: "currency", currency: "EUR" });
  const money = (cents: number) => currency.format(cents / 100);
  const km = (value: number) => `${value.toLocaleString(locale)} km`;
  const stations = [
    { name: v.stationA, ...estimate(145, distance) },
    { name: v.stationB, ...estimate(149, 3) },
  ];
  const [a, b] = stations;
  const difference = a.total - b.total;
  const winner = difference < 0 ? a : difference > 0 ? b : undefined;
  const result = winner
    ? v.savings.replace("{station}", winner.name).replace("{amount}", money(Math.abs(difference)))
    : v.tie;

  return (
    <div className="mx-auto flex h-full w-full max-w-xl flex-col justify-center">
      <h4 className="font-display text-2xl font-semibold leading-tight text-text">{v.header}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">{v.context}</p>

      <label htmlFor="fuel-distance" className="mt-6 flex flex-wrap items-baseline justify-between gap-x-3 text-sm font-medium">
        {v.distance}
        <span aria-hidden="true" className="font-mono tabular-nums text-accent">{km(distance)}</span>
      </label>
      <input
        id="fuel-distance"
        type="range"
        min="1"
        max="15"
        step="0.2"
        value={distance}
        onChange={(event) => setDistance(event.currentTarget.valueAsNumber)}
        aria-valuetext={`${km(distance)}. ${result}`}
        disabled={!ready}
        className="h-11 w-full cursor-pointer accent-accent"
      />

      <div className="mt-2 divide-y divide-border overflow-hidden rounded-lg border border-border bg-surface">
        {stations.map((station) => (
          <div key={station.name} className="p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <p className="font-display text-base font-semibold">{station.name}</p>
              <p className="font-mono text-xs tabular-nums text-muted">{money(station.priceCents)}/L · {km(station.oneWayKm)}</p>
            </div>
            <dl className="mt-3 grid grid-cols-3 gap-x-1.5 text-xs">
              {([[v.fuel, station.fuel], [v.travel, station.travel], [v.total, station.total]] as const).map(([label, cents]) => (
                <div key={label} className="min-w-0">
                  <dt className="text-muted">{label}</dt>
                  <dd className={`mt-1 font-mono tabular-nums ${label === v.total ? "font-semibold text-text" : "text-muted"}`}>{money(cents)}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      <p className="mt-4 border-l-2 border-accent pl-3 font-display text-lg font-semibold text-text">{result}</p>
    </div>
  );
}
