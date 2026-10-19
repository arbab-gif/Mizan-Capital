"use client";

import Image from "next/image";
import { type ComponentProps, useRef, useState } from "react";
import { deals, profitFlow, type Deal } from "@/data/realEstate";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedNumber } from "./AnimatedNumber";
import { FlyerModal } from "./DealModal";

const n = deals.length;
const usd = (v: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(v);
/** Position of card i relative to the active card, wrapped so the carousel loops (…, -1, 0, 1, …). */
const relative = (i: number, active: number) => {
  const r = (((i - active) % n) + n) % n;
  return r > n / 2 ? r - n : r;
};

function ArrowBtn({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous property" : "Next property"}
      className="flex size-12 items-center justify-center rounded-full border border-primary/20 text-primary transition hover:bg-primary hover:text-cream"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={dir === "prev" ? "rotate-180" : ""}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}

/** One owned property: photo (opens the flyer), key numbers, and its projected profit. */
function DealCard({ deal, isActive, onOpen }: { deal: Deal; isActive: boolean; onOpen: () => void }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-[#e8dfcc] bg-white shadow-[0_24px_60px_-30px_rgba(1,42,28,0.35)]">
      <button
        type="button"
        onClick={onOpen}
        tabIndex={isActive ? 0 : -1}
        aria-label={`Open the ${deal.address} property overview`}
        className="group relative h-[230px] shrink-0 overflow-hidden md:h-[270px]"
      >
        <Image src={deal.image} alt="" fill sizes="600px" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
        <span className="absolute inset-0 bg-gradient-to-b from-transparent from-55% to-black/35" />
        <span className="absolute top-4 left-4 rounded-full bg-cream-light px-3 py-1.5 text-[11px] font-semibold tracking-[0.06em] text-primary uppercase">
          {deal.type}
        </span>
        <span className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold tracking-[0.06em] text-cream uppercase">
          {deal.status}
        </span>
        <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-[13px] font-medium text-primary opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
          View property overview
        </span>
      </button>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <h3 className="font-display text-[28px] leading-[1.15] font-medium text-primary">{deal.address}</h3>
          <p className="text-[14px] text-neutral-500">{deal.city}</p>
        </div>

        <dl className="grid grid-cols-3 divide-x divide-[#e8dfcc] border-y border-[#e8dfcc] py-3.5">
          {deal.stats.map((s, i) => (
            <div key={s.label} className={`flex flex-col gap-1 ${i ? "pl-3" : "pr-3"}`}>
              <dd className="text-[15px] font-semibold text-primary">{s.value}</dd>
              <dt className="order-first text-[10px] font-medium tracking-[0.06em] text-neutral-500 uppercase">{s.label}</dt>
            </div>
          ))}
        </dl>

        {/* Projected profit (client: "put the profit in each property overview") */}
        <div className="flex flex-col gap-2.5 rounded-[14px] bg-beige-bg px-[18px] py-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.08em] text-beige-ink uppercase">Projected profit</p>
              <p className="font-display text-[38px] leading-none text-primary">{usd(deal.projectedProfit)}</p>
            </div>
            <p className="text-right text-[12px] leading-snug text-neutral-500">
              shared with investors
              <br />
              and the community
            </p>
          </div>
          <div className="flex h-1.5 gap-[3px]">
            {profitFlow.allocation.map((a) => (
              <span key={a.label} className={`rounded-full ${a.color}`} style={{ flex: a.share }} />
            ))}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3">
          <button type="button" onClick={onOpen} tabIndex={isActive ? 0 : -1} className="text-[15px] font-semibold text-primary hover:underline">
            View property overview →
          </button>
          <a
            href="#contact"
            tabIndex={isActive ? 0 : -1}
            className="rounded-[8px] bg-primary px-[18px] py-2.5 text-[14px] font-medium text-cream transition hover:bg-forest"
          >
            Invest
          </a>
        </div>
      </div>
    </article>
  );
}

/** "Where the profits go": payout order from the client's brochure, with a Learn more link to the full brochure. */
function ProfitFlow({ deal, onLearnMore }: { deal: Deal; onLearnMore: () => void }) {
  return (
    <div className="flex flex-col gap-8 rounded-[24px] border border-[#e3d9c4] bg-white p-6 md:p-11">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          align="left"
          eyebrow="Profit redistribution"
          eyebrowTone="soft"
          title="Where the profits go"
          description="Real estate returns with a community purpose. Investors are paid first; what remains is put to work for the community."
          descriptionClassName="max-w-[620px]"
        />
        <button
          type="button"
          onClick={onLearnMore}
          className="flex shrink-0 items-center gap-2.5 rounded-[8px] bg-primary px-[22px] py-3.5 text-[15px] font-medium text-cream transition hover:bg-forest"
        >
          Learn more about profit sharing <span className="text-beige">→</span>
        </button>
      </div>

      {/* Follows the property selected in the carousel above (client: "see the number changing") */}
      <div className="flex flex-col gap-4 rounded-[16px] border border-[#e3d9c4] bg-cream-light px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <span className="relative size-14 shrink-0 overflow-hidden rounded-[10px]">
            <Image src={deal.image} alt="" fill sizes="56px" className="object-cover" />
          </span>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.08em] text-beige-ink uppercase">Showing the numbers for</p>
            <p key={deal.id} className="animate-[fadeUp_0.4s_ease-out] font-display text-[24px] leading-tight text-primary">{deal.address}</p>
          </div>
        </div>
        <div className="md:text-right">
          <p className="text-[11px] font-semibold tracking-[0.08em] text-neutral-500 uppercase">Projected profit</p>
          <p className="font-display text-[36px] leading-none text-primary">
            <AnimatedNumber value={deal.projectedProfit} />
          </p>
        </div>
      </div>

      <ol className="flex flex-col gap-3">
        {profitFlow.steps.map((s, i) => (
          <li key={s.title} className="flex flex-col gap-2 rounded-[14px] bg-beige-bg px-6 py-4 md:flex-row md:items-center md:gap-5">
            <span className="w-fit rounded-full bg-primary px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-cream uppercase">
              {i === 0 ? "First" : "Second"}
            </span>
            <span className="font-display text-[22px] text-primary">{s.title}</span>
            <span className="text-[15px] text-neutral-600">{s.description}</span>
          </li>
        ))}
      </ol>

      <div className="flex flex-col gap-4">
        <p className="flex items-center gap-3 text-[16px] font-medium text-primary">
          <span className="rounded-full bg-beige-btn px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-white uppercase">Then</span>
          Remaining profit is allocated three ways
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {profitFlow.allocation.map((a) => (
            <div key={a.label} className="flex flex-col gap-2.5 rounded-[16px] bg-cream-light p-6">
              <span className={`h-1 w-10 rounded-full ${a.color}`} />
              <span className={`font-display text-[56px] leading-none ${a.text}`}>{a.share}%</span>
              <span className="text-[22px] font-semibold text-primary">
                <AnimatedNumber value={(deal.projectedProfit * a.share) / 100} />
              </span>
              <span className="text-[17px] font-semibold text-primary">{a.label}</span>
              <span className="text-[15px] leading-normal text-neutral-600">{a.description}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-[16px] bg-primary px-7 py-6 md:flex-row md:items-center md:gap-6">
        <span className="shrink-0 font-display text-[26px] text-beige">The $5M milestone</span>
        <p className="text-[15px] leading-normal text-cream">{profitFlow.milestone}</p>
      </div>
      <p className="text-[13px] text-neutral-500">
        Dollar amounts are illustrative: the split applies to profit remaining after investor distributions and overhead. Allocations describe intended uses of available profit. Exact terms are defined in each deal&apos;s offering documents.
      </p>
    </div>
  );
}

/**
 * "Current opportunities": the properties Mizan owns now, in a looping carousel where the
 * middle card is larger (client's original outline). Clicking a property opens its overview flyer.
 */
export function OpenDeals() {
  const [active, setActive] = useState(Math.min(1, n - 1));
  const [flyer, setFlyer] = useState<Omit<ComponentProps<typeof FlyerModal>, "onClose"> | null>(null);
  const touchX = useRef<number | null>(null);
  const go = (d: number) => setActive((a) => (a + d + n) % n);

  return (
    <section id="deals" className="scroll-mt-20 bg-white pt-16 pb-10 md:pt-20">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Open to investors"
            eyebrowTone="soft"
            title="Current opportunities"
            description="Properties we own today. Each one is asset-backed and Shariah-compliant; tap a property to see its full overview."
            descriptionClassName="max-w-[620px]"
          />
          <div className="flex shrink-0 items-center gap-3">
            <span className="mr-2 font-display text-[18px] text-neutral-500 tabular-nums">
              <span className="text-primary">{String(active + 1).padStart(2, "0")}</span> / {String(n).padStart(2, "0")}
            </span>
            <ArrowBtn dir="prev" onClick={() => go(-1)} />
            <ArrowBtn dir="next" onClick={() => go(1)} />
          </div>
        </div>
      </Container>

      {/* Carousel: active card in the middle and larger, neighbours peek in on both sides */}
      <div
        className="relative mt-12 h-[680px] overflow-hidden [--card-w:min(86vw,480px)]"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {deals.map((d, i) => {
          const r = relative(i, active);
          const isActive = r === 0;
          const visible = Math.abs(r) <= 1;
          return (
            <div
              key={d.id}
              aria-hidden={!isActive}
              onClick={() => !isActive && visible && setActive(i)}
              className={`absolute top-0 left-1/2 h-[660px] w-(--card-w) transition-all duration-500 ease-out ${
                isActive ? "z-20" : "z-10 cursor-pointer"
              }`}
              style={{
                transform: `translateX(calc(-50% + ${r} * (var(--card-w) * 0.95 + 24px))) scale(${isActive ? 1 : 0.84})`,
                opacity: visible ? (isActive ? 1 : 0.6) : 0,
                pointerEvents: visible ? "auto" : "none",
              }}
            >
              <DealCard
                deal={d}
                isActive={isActive}
                onOpen={() =>
                  setFlyer({
                    title: d.address,
                    subtitle: `${d.type} · ${d.city}`,
                    src: d.flyer,
                    details: [...d.stats, { label: "Projected profit", value: usd(d.projectedProfit) }],
                    link: { label: "See before & after photos", href: d.photosUrl },
                    action: { label: "Invest in this property", href: "#contact" },
                  })
                }
              />
            </div>
          );
        })}
      </div>

      <div className="mt-2 flex justify-center gap-2">
        {deals.map((d, i) => (
          <button
            key={d.id}
            type="button"
            aria-label={`Show ${d.address}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-primary" : "w-2 bg-primary/20"}`}
          />
        ))}
      </div>

      <Container className="mt-14">
        <ProfitFlow deal={deals[active]} onLearnMore={() => setFlyer({ title: "Where profits go", subtitle: "Mizan Capital investor overview", src: profitFlow.brochure })} />
      </Container>

      {flyer && <FlyerModal {...flyer} onClose={() => setFlyer(null)} />}
    </section>
  );
}
