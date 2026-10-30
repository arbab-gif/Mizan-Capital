"use client";

/**
 * "For business owners": alternative treatments (B–D) for review beside the live section (A).
 * All answer the client's comment: explain how businesses cut costs and increase sales.
 * Preview at /community/business-variants. Figures are illustrative.
 */
import Image from "next/image";
import { useState } from "react";
import { businessPitch as b } from "@/data/community";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { BusinessScreen } from "./AppScreens";
import { Icon } from "./Icon";
import { PhoneFrame } from "./PhoneFrame";

const usd = (v: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(v);

function Cta({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#partners"
      className={`inline-flex w-fit items-center gap-2 rounded-[8px] px-6 py-3.5 text-[16px] font-medium transition ${
        light ? "bg-cream text-primary hover:bg-white" : "bg-primary text-cream hover:bg-forest"
      }`}
    >
      Explore a business partnership
      <Icon name="arrow" size={18} />
    </a>
  );
}

/* ───────────── B · Savings calculator ───────────── */

/** Share of monthly sales each cost line represents, and the network's saving on it. */
const LINES = [
  { label: "Supplies & inventory", share: 0.72, cut: 0.14, why: "Group buying" },
  { label: "Card processing", share: 0.03, cut: 0.27, why: "Network rate" },
  { label: "Marketing", share: 0.036, cut: 0.67, why: "Featured to members" },
  { label: "Bookkeeping & payroll", share: 0.026, cut: 0.4, why: "Shared services" },
];
const LIFT = 0.18;

export function BusinessCalculator() {
  const [sales, setSales] = useState(25000);
  const rows = LINES.map((l) => ({ ...l, before: sales * l.share, saved: sales * l.share * l.cut }));
  const saved = rows.reduce((a, r) => a + r.saved, 0);
  const extraSales = sales * LIFT;

  return (
    <section className="bg-beige-bg py-20 md:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="flex flex-col gap-6 lg:sticky lg:top-24">
          <Eyebrow tone="soft">{b.eyebrow}</Eyebrow>
          <h2 className="font-display text-[38px] leading-[1.1] text-primary md:text-[50px]">What would the network save your business?</h2>
          <p className="text-[17px] leading-[1.65] text-neutral-700">
            Move the slider to your monthly sales. We&apos;ll show where the savings come from, and the extra sales members bring in.
          </p>
          <ul className="flex flex-col gap-3 text-[15px] text-primary">
            {["Pooled buying unlocks wholesale prices", "Shared services at network rates", "Members choose you, and come back"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="flex size-6 items-center justify-center rounded-full bg-primary text-cream">
                  <Icon name="check" size={14} />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <Cta />
        </div>

        <div className="flex flex-col gap-5 rounded-[28px] bg-white p-6 shadow-[0_30px_60px_-40px_rgba(48,43,35,0.5)] md:p-8">
          <label className="flex flex-col gap-3">
            <span className="flex items-baseline justify-between">
              <span className="text-[13px] font-semibold tracking-[0.08em] text-neutral-500 uppercase">Your monthly sales</span>
              <span className="font-display text-[32px] text-primary tabular-nums">{usd(sales)}</span>
            </span>
            <input
              type="range"
              min={5000}
              max={100000}
              step={1000}
              value={sales}
              onChange={(e) => setSales(Number(e.target.value))}
              className="w-full accent-[#012a1c]"
              aria-label="Monthly sales"
            />
            <span className="flex justify-between text-[12px] text-neutral-500">
              <span>$5k</span>
              <span>$100k</span>
            </span>
          </label>

          <ul className="flex flex-col divide-y divide-neutral-200 border-y border-neutral-200">
            {rows.map((r) => (
              <li key={r.label} className="flex items-center justify-between gap-4 py-3.5">
                <span>
                  <span className="block text-[15px] font-medium text-primary">{r.label}</span>
                  <span className="block text-[12px] text-neutral-500">
                    {r.why} · {Math.round(r.cut * 100)}% less
                  </span>
                </span>
                <span className="text-right">
                  <span className="block text-[13px] text-neutral-400 line-through tabular-nums">{usd(r.before)}</span>
                  <span className="block text-[16px] font-semibold text-[#2f6b4b] tabular-nums">−{usd(r.saved)}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[18px] bg-primary p-5 text-cream">
              <p className="text-[12px] font-semibold tracking-[0.08em] text-beige uppercase">Saved every month</p>
              <p className="mt-1 font-display text-[40px] leading-none tabular-nums">{usd(saved)}</p>
              <p className="mt-1.5 text-[13px] text-[#c9d3cd]">{usd(saved * 12)} a year</p>
            </div>
            <div className="rounded-[18px] bg-beige-bg p-5">
              <p className="text-[12px] font-semibold tracking-[0.08em] text-beige-ink uppercase">Extra sales from members</p>
              <p className="mt-1 font-display text-[40px] leading-none text-primary tabular-nums">+{usd(extraSales)}</p>
              <p className="mt-1.5 text-[13px] text-neutral-600">at an average +18% lift</p>
            </div>
          </div>
          <p className="text-[12px] text-neutral-500">Illustrative estimate using typical cost shares for a neighborhood store.</p>
        </div>
      </Container>
    </section>
  );
}

/* ───────────── C · Alone vs. with Mizan ───────────── */

const COMPARE = [
  { topic: "Buying supplies", alone: "Small orders at retail prices", mizan: "Pooled orders at wholesale prices" },
  { topic: "Finding customers", alone: "Paying for ads that reach anyone", mizan: "Featured to members looking for you" },
  { topic: "Repeat visits", alone: "Hoping they remember you", mizan: "Perks that bring them back" },
  { topic: "Back office", alone: "Bookkeeping, payroll on your own", mizan: "Shared services at network rates" },
  { topic: "Knowing what works", alone: "Guesswork", mizan: "Simple dashboard of sales and regulars" },
];

export function BusinessCompare() {
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <div className="relative isolate overflow-hidden rounded-[28px] px-6 py-12 md:px-12 md:py-16">
          <Image src="/images/community/partner-cafe.png" alt="" fill sizes="1240px" className="-z-20 scale-[1.2] object-cover object-[60%_70%]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(1,42,28,0.92)_0%,rgba(1,42,28,0.7)_50%,rgba(1,42,28,0.2)_100%)]" />
          <div className="flex max-w-[600px] flex-col gap-5">
            <Eyebrow tone="light">{b.eyebrow}</Eyebrow>
            <h2 className="font-display text-[38px] leading-[1.1] text-white md:text-[52px]">Stop running your business alone.</h2>
            <p className="text-[17px] leading-[1.6] text-cream/85">Same store, same hours. Here&apos;s what changes when you join the network.</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-[#e8dfcc]">
          <div className="grid grid-cols-[1fr_1fr] bg-cream-light text-[13px] font-semibold tracking-[0.08em] uppercase md:grid-cols-[0.8fr_1fr_1fr]">
            <span className="hidden px-6 py-4 text-neutral-500 md:block" />
            <span className="px-5 py-4 text-neutral-500 md:px-6">On your own</span>
            <span className="bg-primary px-5 py-4 text-beige md:px-6">With Mizan</span>
          </div>
          {COMPARE.map((r) => (
            <div key={r.topic} className="grid grid-cols-[1fr_1fr] border-t border-[#e8dfcc] md:grid-cols-[0.8fr_1fr_1fr]">
              <span className="col-span-2 px-5 pt-4 font-display text-[20px] text-primary md:col-span-1 md:px-6 md:py-5">{r.topic}</span>
              <span className="flex items-start gap-2.5 px-5 py-4 text-[15px] text-neutral-500 md:px-6 md:py-5">
                <span className="mt-1 size-2 shrink-0 rounded-full bg-neutral-300" />
                {r.alone}
              </span>
              <span className="flex items-start gap-2.5 bg-[#f3f7f4] px-5 py-4 text-[15px] font-medium text-primary md:px-6 md:py-5">
                <Icon name="check" size={18} className="mt-0.5 shrink-0 text-[#2f6b4b]" />
                {r.mizan}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-6 rounded-[24px] bg-beige-bg p-6 md:flex-row md:items-center md:p-8">
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="font-display text-[40px] leading-none text-primary">{b.example.saving}</p>
              <p className="mt-1 text-[14px] text-neutral-600">saved a month*</p>
            </div>
            <div>
              <p className="font-display text-[40px] leading-none text-primary">{b.example.salesLift}</p>
              <p className="mt-1 text-[14px] text-neutral-600">sales from members*</p>
            </div>
          </div>
          <Cta />
        </div>
        <p className="-mt-8 text-[12px] text-neutral-500">*Illustrative, for a store with about $25,000 in monthly sales.</p>
      </Container>
    </section>
  );
}

/* ───────────── D · Annotated dashboard ───────────── */

const CALLOUTS = [
  { side: "left", icon: "chart", title: "Sales that grow", body: "Members find you in the app: +18% on average." },
  { side: "left", icon: "users", title: "Regulars, tracked", body: "See repeat customers and reward them with your perk." },
  { side: "right", icon: "store", title: "Group buying savings", body: "Pooled orders cut supply costs by about 14%." },
  { side: "right", icon: "briefcase", title: "Shared services", body: "Bookkeeping, payroll and delivery at network rates." },
] as const;

function Callout({ c }: { c: (typeof CALLOUTS)[number] }) {
  return (
    <div className={`flex gap-4 rounded-[18px] bg-white p-5 ring-1 ring-black/5 ${c.side === "left" ? "lg:flex-row-reverse lg:text-right" : ""}`}>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-beige">
        <Icon name={c.icon} size={20} />
      </span>
      <div>
        <p className="text-[17px] font-semibold text-primary">{c.title}</p>
        <p className="mt-1 text-[14.5px] leading-[1.5] text-neutral-600">{c.body}</p>
      </div>
    </div>
  );
}

export function BusinessDashboard() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f3f7f4] py-20 md:py-28">
      <Container className="flex flex-col items-center gap-14">
        <div className="flex max-w-[760px] flex-col items-center gap-5 text-center">
          <Eyebrow tone="soft">{b.eyebrow}</Eyebrow>
          <h2 className="font-display text-[38px] leading-[1.1] text-primary md:text-[52px]">Your store, with the buying power of hundreds.</h2>
          <p className="text-[17px] leading-[1.6] text-neutral-700">Everything you need to cut costs and grow sales lives in one simple business dashboard.</p>
        </div>

        <div className="grid w-full items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
          <div className="flex flex-col gap-5">
            {CALLOUTS.filter((c) => c.side === "left").map((c) => (
              <Callout key={c.title} c={c} />
            ))}
          </div>
          <div className="relative mx-auto">
            <div aria-hidden className="absolute top-1/2 left-1/2 -z-10 size-[420px] -translate-1/2 rounded-full bg-beige/40 blur-[80px]" />
            <PhoneFrame>
              <BusinessScreen />
            </PhoneFrame>
          </div>
          <div className="flex flex-col gap-5">
            {CALLOUTS.filter((c) => c.side === "right").map((c) => (
              <Callout key={c.title} c={c} />
            ))}
          </div>
        </div>

        <ol className="flex flex-wrap items-center justify-center gap-3 text-[15px] text-primary">
          {b.steps.map((s, i) => (
            <li key={s} className="flex items-center gap-3">
              <span className="flex items-center gap-2.5 rounded-full bg-white px-4 py-2 ring-1 ring-black/5">
                <span className="flex size-6 items-center justify-center rounded-full bg-primary text-[12px] text-cream">{i + 1}</span>
                {s}
              </span>
              {i < b.steps.length - 1 && <Icon name="arrow" size={16} className="hidden text-beige-ink sm:block" />}
            </li>
          ))}
        </ol>
        <Cta />
      </Container>
    </section>
  );
}
