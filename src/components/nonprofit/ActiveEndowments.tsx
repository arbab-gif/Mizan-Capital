"use client";

import Image from "next/image";
import { useState } from "react";
import { giftAmounts, initiatives } from "@/data/nonprofit";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/community/Icon";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

function Bar({ pct, className = "" }: { pct: number; className?: string }) {
  return (
    <div className={`h-2 overflow-hidden rounded-full bg-primary/10 ${className}`}>
      <div className="h-full rounded-full bg-gradient-to-r from-[#4f8f6b] to-primary transition-all duration-700" style={{ width: `${Math.min(pct, 100)}%` }} />
    </div>
  );
}

/**
 * Active endowments: pick an initiative (tab cards), then see its endowment target front and centre,
 * this year's funding, what a gift sustains, milestones, and a way to give.
 * TODO: connect "Support this initiative" to the donation/payment flow.
 */
export function ActiveEndowments() {
  const [activeId, setActiveId] = useState(initiatives[0].id);
  const [gift, setGift] = useState(giftAmounts[1]);
  const it = initiatives.find((x) => x.id === activeId)!;
  const pct = Math.round((it.allocated / it.allocationGoal) * 100);

  return (
    <section id="endowments" className="scroll-mt-20 py-24 md:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Active endowments"
          title="Initiatives your gift keeps running"
          description="Each endowment is sized to cover an initiative's yearly overhead. Choose one to see where it stands and what your support sustains."
          descriptionClassName="max-w-[680px]"
        />

        {/* Initiative tabs */}
        <div role="tablist" aria-label="Initiatives" className="grid gap-4 md:grid-cols-3">
          {initiatives.map((x) => {
            const on = x.id === activeId;
            const p = Math.round((x.allocated / x.allocationGoal) * 100);
            return (
              <button
                key={x.id}
                role="tab"
                aria-selected={on}
                onClick={() => setActiveId(x.id)}
                className={`flex min-w-0 items-center gap-4 rounded-[18px] p-3 text-left transition ${
                  on ? "bg-primary text-white shadow-[0_20px_40px_-25px_rgba(1,42,28,0.8)]" : "bg-cream-light text-primary hover:bg-cream"
                }`}
              >
                <span className="relative size-16 shrink-0 overflow-hidden rounded-[12px]">
                  <Image src={x.image} alt="" fill sizes="64px" className="object-cover" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block text-[11px] tracking-[0.12em] uppercase ${on ? "text-gold" : "text-gold"}`}>{x.category}</span>
                  <span className="block truncate font-display text-[19px] leading-tight">{x.name}</span>
                  <span className={`mt-1 block text-[12px] ${on ? "text-cream/70" : "text-neutral-500"}`}>
                    {usd(x.endowmentTarget)} endowment goal
                  </span>
                </span>
                <span className={`font-display text-[18px] ${on ? "text-gold" : "text-primary/60"}`}>{p}%</span>
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div key={it.id} className="grid animate-[fadeUp_0.45s_ease-out] overflow-hidden rounded-[28px] bg-cream-light lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[360px]">
            <Image src={it.image} alt={it.name} fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            <span className="absolute top-5 left-5 rounded-full bg-cream px-3 py-1 text-[12px] font-medium tracking-[0.12em] text-primary uppercase">
              {it.category}
            </span>
            <p className="absolute right-6 bottom-6 left-6 font-display text-[24px] leading-snug text-white italic">“{it.quote}”</p>
          </div>

          <div className="flex flex-col gap-7 p-6 md:p-10">
            <div>
              <h3 className="font-display text-[30px] leading-tight text-primary">{it.name}</h3>
              <div className="mt-5 flex flex-wrap items-end gap-x-5 gap-y-2">
                <div>
                  <p className="text-[12px] tracking-[0.14em] text-neutral-500 uppercase">Endowment target</p>
                  <p className="font-display text-[64px] leading-none text-primary md:text-[80px]">{usd(it.endowmentTarget)}</p>
                </div>
                <p className="mb-2 max-w-[240px] text-[14px] leading-snug text-neutral-600">
                  A permanent fund whose profits cover this initiative&apos;s yearly costs.
                </p>
              </div>
            </div>

            <div className="rounded-[16px] bg-white p-5 ring-1 ring-black/5">
              <div className="flex items-baseline justify-between gap-3 text-[14px]">
                <span className="text-neutral-600">Funding allocated this year</span>
                <span className="font-medium text-primary">
                  {usd(it.allocated)} <span className="text-neutral-400">/ {usd(it.allocationGoal)}</span>
                </span>
              </div>
              <Bar pct={pct} className="mt-3" />
              <p className="mt-2 text-[13px] text-[#2f6b4b]">{pct >= 100 ? "This year's allocation is fully funded." : `${pct}% of this year's allocation funded.`}</p>
            </div>

            <div className="flex gap-3">
              <Icon name="heart" size={20} className="mt-0.5 shrink-0 text-gold" />
              <p className="text-[16px] leading-[1.55] text-primary">
                <span className="font-medium">What your gift sustains: </span>
                {it.sustains}
              </p>
            </div>

            <div>
              <p className="text-[12px] tracking-[0.14em] text-neutral-500 uppercase">Milestones</p>
              <ol className="mt-3 flex flex-col gap-3 border-l border-gold/40 pl-5">
                {it.milestones.map((m) => (
                  <li key={m} className="relative text-[15px] leading-[1.5] text-neutral-700">
                    <span className="absolute top-1 -left-[29px] flex size-4 items-center justify-center rounded-full bg-gold text-white">
                      <Icon name="check" size={10} />
                    </span>
                    {m}
                  </li>
                ))}
              </ol>
            </div>

            {/* Give */}
            <div className="flex flex-col gap-3 border-t border-neutral-200 pt-6">
              <p className="text-[15px] font-medium text-primary">Become part of this endowment</p>
              <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Gift amount">
                {giftAmounts.map((a) => (
                  <button
                    key={a}
                    role="radio"
                    aria-checked={gift === a}
                    onClick={() => setGift(a)}
                    className={`rounded-full px-4 py-2 text-[15px] font-medium transition ${
                      gift === a ? "bg-primary text-cream" : "bg-white text-primary ring-1 ring-neutral-300 hover:ring-primary"
                    }`}
                  >
                    {usd(a)}
                  </button>
                ))}
              </div>
              <a
                href="#involved"
                className="group mt-1 inline-flex w-fit items-center gap-2 rounded-[8px] bg-gold px-6 py-3.5 text-[16px] font-medium text-white transition hover:brightness-95"
              >
                Support with {usd(gift)}
                <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
