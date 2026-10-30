"use client";

import { useState } from "react";
import { fundingModel as f, giftModel as g } from "@/data/nonprofit";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/community/Icon";

const usd = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
const STEP_ICONS = ["chart", "home", "lock", "heart"];

/** One-time donation vs. endowment gift, year by year (illustrative rate from `giftModel`). */
function GiftComparison() {
  const [gift, setGift] = useState(g.default);
  const yearly = gift * g.rate;
  const endowTotal = yearly * g.years;
  const years = Array.from({ length: g.years }, (_, i) => i + 1);
  const max = Math.max(gift, endowTotal);

  return (
    <div className="flex flex-col gap-6 rounded-[28px] bg-white p-6 shadow-[0_30px_60px_-40px_rgba(48,43,35,0.5)] md:p-9">
      <label className="flex flex-col gap-3">
        <span className="flex items-baseline justify-between">
          <span className="text-[13px] font-semibold tracking-[0.08em] text-neutral-500 uppercase">Your gift</span>
          <span className="font-display text-[34px] text-primary tabular-nums">{usd(gift)}</span>
        </span>
        <input
          type="range"
          min={g.min}
          max={g.max}
          step={100}
          value={gift}
          onChange={(e) => setGift(Number(e.target.value))}
          className="w-full accent-[#012a1c]"
          aria-label="Gift amount"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* One-time donation */}
        <div className="flex flex-col gap-4 rounded-[18px] bg-cream-light p-5">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.1em] text-neutral-500 uppercase">One-time donation</p>
            <p className="mt-1 text-[14px] text-neutral-600">Spent once, then it&apos;s gone.</p>
          </div>
          <div className="flex h-24 items-end gap-1" aria-hidden>
            {years.map((y) => (
              <span key={y} className={`flex-1 rounded-t-[3px] ${y === 1 ? "bg-neutral-400" : "bg-neutral-200"}`} style={{ height: y === 1 ? `${(gift / max) * 100}%` : "3%" }} />
            ))}
          </div>
          <dl className="flex justify-between text-[14px]">
            <div>
              <dt className="text-neutral-500">Funds the work</dt>
              <dd className="font-display text-[26px] text-primary">{usd(gift)}</dd>
            </div>
            <div className="text-right">
              <dt className="text-neutral-500">Left after year 1</dt>
              <dd className="font-display text-[26px] text-neutral-400">$0</dd>
            </div>
          </dl>
        </div>

        {/* Endowment gift */}
        <div className="flex flex-col gap-4 rounded-[18px] bg-primary p-5 text-cream">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.1em] text-beige uppercase">Endowment gift</p>
            <p className="mt-1 text-[14px] text-[#c9d3cd]">Stays invested. Its profit funds the work every year.</p>
          </div>
          <div className="flex h-24 items-end gap-1" aria-hidden>
            {years.map((y) => (
              <span key={y} className="flex-1 rounded-t-[3px] bg-beige" style={{ height: `${Math.max(((yearly * y) / max) * 100, 3)}%` }} />
            ))}
          </div>
          <dl className="flex justify-between text-[14px]">
            <div>
              <dt className="text-[#c9d3cd]">Funds over {g.years} years</dt>
              <dd className="font-display text-[26px] text-white">{usd(endowTotal)}</dd>
            </div>
            <div className="text-right">
              <dt className="text-[#c9d3cd]">Still invested</dt>
              <dd className="font-display text-[26px] text-beige">{usd(gift)}</dd>
            </div>
          </dl>
        </div>
      </div>
      <p className="text-[12px] text-neutral-500">
        Illustrative: assumes a {Math.round(g.rate * 100)}% annual return paid out to the initiative. Returns are not guaranteed.
      </p>
    </div>
  );
}

/**
 * "How we fund nonprofits": a one-time donation compared with an endowment gift, then the
 * four steps as a numbered row (same language as Home's "How it works").
 */
export function FundingModel() {
  return (
    <section className="bg-beige-bg py-20 md:py-28">
      <Container className="flex flex-col gap-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading align="left" eyebrow="The endowment model" eyebrowTone="soft" title="Give once. Fund it every year." description={f.description} />
            <p className="flex items-start gap-3 text-[16px] leading-[1.55] text-primary">
              <Icon name="heart" size={20} className="mt-0.5 shrink-0 text-beige-ink" />
              {f.footnote}
            </p>
          </div>
          <GiftComparison />
        </div>

        <ol className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {f.steps.map((s, i) => (
            <li key={s.title} className="relative flex flex-col items-center text-center">
              <span className="font-display text-[30px] leading-none text-[#a88b5d]">{String(i + 1).padStart(2, "0")}</span>
              <span className="mt-3 flex size-[68px] items-center justify-center rounded-full bg-white text-beige-ink shadow-[0_10px_30px_-18px_rgba(48,43,35,0.5)]">
                <Icon name={STEP_ICONS[i]} size={28} />
              </span>
              <h3 className="mt-4 font-display text-[24px] text-primary">{s.title}</h3>
              <p className="mt-1.5 max-w-[240px] text-[15px] leading-[1.5] text-neutral-600">{s.description}</p>
              {i < f.steps.length - 1 && (
                <span aria-hidden className="absolute top-[70px] left-[calc(50%+46px)] hidden w-[calc(100%-92px+24px)] items-center text-primary md:flex">
                  <span className="h-[1.5px] flex-1 bg-current" />
                  <svg width="9" height="12" viewBox="0 0 9 12" fill="none" className="-ml-px shrink-0">
                    <path d="M1 1l6.5 5L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
