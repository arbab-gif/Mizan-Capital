"use client";

import { useState } from "react";
import { returnsCalculator as data } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";

const money = (n: number, cents = false) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
  }).format(n);

/**
 * "Deen & Dunyah Returns" card (Home + Real Estate).
 * Layout per the latest Home design: result cards on top, chart in the middle, and the
 * initial-investment + 1–10 year horizon sliders at the bottom. Chart lines are the Figma vectors.
 */
export function ReturnsCalculator({
  eyebrow,
  title = data.title,
  description = data.description,
  footnote,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Optional disclaimer shown under the card. */
  footnote?: string;
} = {}) {
  const [years, setYears] = useState(data.horizon.default);
  const [amount, setAmount] = useState(data.investment.default);

  const { min, max, step } = data.investment;
  const fill = ((amount - min) / (max - min)) * 100;
  const yearsFill = ((years - data.horizon.min) / (data.horizon.max - data.horizon.min)) * 100;
  const portfolio = amount * Math.pow(1 + data.annualReturn, years);
  const impact = amount * data.annualImpactRate * years;
  const results = [
    { ...data.results.portfolio, value: money(portfolio, true) },
    { ...data.results.impact, value: money(impact, true) },
    { ...data.results.combined, value: money(portfolio + impact) },
  ];

  return (
    <div className="flex flex-col gap-6 rounded-[16px] bg-cream-light p-5 md:p-8">
      <SectionHeading
        eyebrow={eyebrow}
        eyebrowTone="soft"
        title={title}
        description={description}
        descriptionClassName="max-w-[1042px]"
      />

      <div className="flex flex-col gap-[18.95px] overflow-hidden rounded-[12.635px] border-[0.79px] border-chart-border bg-white p-4 md:p-6">
        {/* Result cards */}
        <div className="grid gap-[13px] md:grid-cols-3" aria-live="polite">
          {results.map((r) => (
            <div
              key={r.label}
              className="flex items-start gap-2 rounded-[12.635px] border-[0.79px] border-neutral-200 bg-cream-card p-[12.635px]"
            >
              <div className="flex flex-1 flex-col gap-0.5 whitespace-nowrap">
                <span className="font-display text-[22px] leading-[1.2] font-medium tracking-[-0.01em] text-primary">
                  {r.value}
                </span>
                <span className="text-[15px] leading-[1.6] text-neutral-600">{r.label}</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.icon} alt="" aria-hidden className="size-8 shrink-0" />
            </div>
          ))}
        </div>

        <hr className="border-neutral-200" />

        {/* Chart */}
        <div className="flex items-start gap-4 overflow-x-auto">
          <div className="flex h-[241px] shrink-0 flex-col gap-[21px]">
            {data.yAxis.map((label, i) => (
              <span
                key={i}
                className="flex h-[25.27px] w-[36px] items-center justify-center text-[11px] font-medium text-chart-label"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="relative h-[268px] min-w-[560px] flex-1">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex flex-1 flex-col justify-between">
                <span className="h-[22px] border-b border-dashed border-chart-grid" />
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="h-[17px] border-b border-dashed border-chart-grid" />
                ))}
              </div>
              <div className="flex h-[18px] items-center justify-between text-[12px] leading-[18px] text-chart-axis">
                <span>Year 0</span>
                <span>Year {years}</span>
              </div>
            </div>

            {/* Figma "_chartData": portfolio line (green) + community impact line (gold, dashed) */}
            <div className="absolute inset-[0_1.84%_9.7%_3.52%]">
              <div className="absolute inset-[5.73%_0_0_0]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/chart-portfolio.svg" alt="" className="absolute inset-[-0.44%_0_0_0] size-full" />
              </div>
              <div className="absolute inset-[46.12%_0_13.8%_0]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/chart-impact.svg" alt="" className="absolute inset-[-1.03%_0] size-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Controls: initial investment (left) + investment horizon 1–10 years (right) */}
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
          <label className="flex w-full max-w-[320px] flex-col gap-3 pb-[22px]">
            <span className="flex items-baseline justify-between gap-4">
              <span className="text-[14px] font-medium text-neutral-400">Initial Investment</span>
              <span className="text-[18px] font-bold text-primary tabular-nums">{money(amount)}</span>
            </span>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              aria-label="Initial investment"
              aria-valuetext={money(amount)}
              className="range-slider"
              style={{ "--fill": `${fill}%` } as React.CSSProperties}
            />
          </label>

          <label className="flex w-full max-w-[320px] flex-col gap-2">
            <span className="flex items-baseline justify-between gap-4">
              <span className="text-[14px] text-neutral-400">Investment horizon</span>
              <span className="text-[18px] font-medium text-primary tabular-nums">
                {years} {years === 1 ? "year" : "years"}
              </span>
            </span>
            <input
              type="range"
              min={data.horizon.min}
              max={data.horizon.max}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              aria-label="Investment horizon in years"
              aria-valuetext={`${years} years`}
              className="range-slider"
              style={{ "--fill": `${yearsFill}%` } as React.CSSProperties}
            />
            <span className="flex justify-between text-[12px] text-[#8a8a8a]">
              <span>{data.horizon.min} year</span>
              <span>{data.horizon.max} years</span>
            </span>
          </label>
        </div>
      </div>

      {footnote && (
        <p className="mx-auto max-w-[960px] text-center text-[13px] leading-[1.6] text-neutral-500 italic">
          *{footnote}
        </p>
      )}
    </div>
  );
}
