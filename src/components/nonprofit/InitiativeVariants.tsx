"use client";

/**
 * Initiative card ("ISGD Masjid Renovation" etc.): alternative treatments for review.
 * Each variation shows all three initiatives with the same content: category, name, funding
 * allocated, milestones, photo, quote, endowment target and a support action.
 * Preview at /nonprofit/initiative-variants.
 */
import Image from "next/image";
import { useState } from "react";
import { giftModel, initiatives, type Initiative } from "@/data/nonprofit";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/community/Icon";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
const pct = (it: Initiative) => Math.min(100, Math.round((it.allocated / it.allocationGoal) * 100));
const ICON: Record<string, string> = { masjid: "home", education: "book", housing: "users" };

function Heading() {
  return (
    <SectionHeading
      eyebrow="Active endowments"
      eyebrowTone="soft"
      title="Initiatives your gift keeps running"
      description="Each endowment is sized to cover an initiative's yearly overhead."
      descriptionClassName="max-w-[620px]"
    />
  );
}

function Progress({ it, dark = false }: { it: Initiative; dark?: boolean }) {
  const p = pct(it);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between text-[14px]">
        <span className={dark ? "text-cream/80" : "font-semibold text-primary"}>
          Funding allocated: {usd(it.allocated)} / {usd(it.allocationGoal)}
        </span>
        <span className={dark ? "text-beige" : "text-neutral-500"}>{p}%</span>
      </div>
      <div className={`h-2 overflow-hidden rounded-full ${dark ? "bg-white/15" : "bg-beige-bg"}`}>
        <div className="h-full rounded-full bg-beige-btn" style={{ width: `${p}%` }} />
      </div>
    </div>
  );
}

function Milestones({ it, dark = false, limit }: { it: Initiative; dark?: boolean; limit?: number }) {
  const list = limit ? it.milestones.slice(0, limit) : it.milestones;
  return (
    <ul className="flex flex-col gap-2.5">
      {list.map((m) => (
        <li key={m} className={`flex gap-3 text-[15px] leading-[1.5] ${dark ? "text-cream/85" : "text-neutral-700"}`}>
          <span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border ${dark ? "border-beige text-beige" : "border-beige-btn text-beige-ink"}`}>
            <Icon name="check" size={11} />
          </span>
          {m}
        </li>
      ))}
      {limit && it.milestones.length > limit && (
        <li className={`pl-8 text-[13px] ${dark ? "text-cream/60" : "text-neutral-500"}`}>+{it.milestones.length - limit} more milestones</li>
      )}
    </ul>
  );
}

function Support({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href="#support"
      className={`inline-flex w-fit items-center gap-2 rounded-[8px] px-5 py-3 text-[15px] font-semibold transition ${
        dark ? "bg-cream text-primary hover:bg-white" : "bg-primary text-cream hover:bg-forest"
      }`}
    >
      Support this initiative
      <Icon name="arrow" size={17} />
    </a>
  );
}

/* ───────────── A · Editorial split ───────────── */

export function InitiativesEditorial() {
  return (
    <section className="bg-beige-bg py-20">
      <Container className="flex flex-col gap-12">
        <Heading />
        <div className="flex flex-col gap-8">
          {initiatives.map((it, i) => (
            <article key={it.id} className={`grid overflow-hidden rounded-[24px] bg-white shadow-[0_30px_60px_-45px_rgba(48,43,35,0.6)] lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="flex flex-col gap-6 border-l-[6px] border-beige-btn p-7 md:p-10">
                <div>
                  <p className="text-[12px] font-semibold tracking-[0.14em] text-beige-ink uppercase">{it.category}</p>
                  <h3 className="mt-2 flex items-center gap-3 font-display text-[32px] leading-tight text-primary">
                    <Icon name={ICON[it.id]} size={26} className="shrink-0 text-beige-ink" />
                    {it.name}
                  </h3>
                </div>
                <Progress it={it} />
                <div>
                  <p className="mb-3 text-[12px] font-semibold tracking-[0.14em] text-neutral-500 uppercase">Milestones</p>
                  <Milestones it={it} />
                </div>
                <Support />
              </div>
              <div className="relative min-h-[380px]">
                <Image src={it.image} alt={it.name} fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-7 md:p-9">
                  <p className="font-display text-[22px] leading-snug text-white italic">“{it.quote}”</p>
                  <div className="flex items-end justify-between gap-4 border-t border-white/20 pt-4">
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.12em] text-beige uppercase">Endowment target</p>
                      <p className="font-display text-[48px] leading-none text-white md:text-[64px]">{usd(it.endowmentTarget)}</p>
                    </div>
                    <p className="max-w-[180px] text-right text-[13px] text-cream/80">
                      sustains about {usd(it.endowmentTarget * giftModel.rate)} of overhead a year*
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="text-[12px] text-neutral-500">*Illustrative, at a {giftModel.rate * 100}% annual return. Returns are not guaranteed.</p>
      </Container>
    </section>
  );
}

/* ───────────── B · Loop carousel (middle card bigger) ───────────── */

export function InitiativesCarousel() {
  const n = initiatives.length;
  const [active, setActive] = useState(0);
  const go = (d: number) => setActive((a) => (a + d + n) % n);
  const rel = (i: number) => {
    const r = (((i - active) % n) + n) % n;
    return r > n / 2 ? r - n : r;
  };

  return (
    <section className="overflow-hidden py-20">
      <Container className="flex flex-col items-center gap-10">
        <Heading />
      </Container>
      <div className="relative mt-10 h-[720px] [--w:min(88vw,560px)] md:h-[600px]">
        {initiatives.map((it, i) => {
          const r = rel(i);
          const on = r === 0;
          return (
            <article
              key={it.id}
              aria-hidden={!on}
              onClick={() => !on && setActive(i)}
              className={`absolute top-0 left-1/2 flex h-[700px] w-(--w) flex-col md:h-[580px] overflow-hidden rounded-[26px] bg-white shadow-[0_30px_70px_-40px_rgba(1,42,28,0.55)] ring-1 ring-black/5 transition-all duration-500 ${on ? "z-20" : "z-10 cursor-pointer"}`}
              style={{ transform: `translateX(calc(-50% + ${r} * (var(--w) * 0.92 + 24px))) scale(${on ? 1 : 0.84})`, opacity: on ? 1 : 0.55 }}
            >
              <div className="relative h-[220px] shrink-0">
                <Image src={it.image} alt={it.name} fill sizes="560px" className="object-cover" />
                <span className="absolute top-4 left-4 rounded-full bg-cream px-3 py-1 text-[11px] font-semibold tracking-[0.1em] text-primary uppercase">{it.category}</span>
                <div className="absolute right-4 bottom-4 rounded-[14px] bg-primary/90 px-4 py-2.5 text-right text-cream backdrop-blur">
                  <p className="text-[10px] font-semibold tracking-[0.12em] text-beige uppercase">Endowment target</p>
                  <p className="font-display text-[30px] leading-none">{usd(it.endowmentTarget)}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
                <div>
                  <h3 className="font-display text-[28px] leading-tight text-primary">{it.name}</h3>
                  <p className="mt-1 text-[15px] text-neutral-600 italic">“{it.quote}”</p>
                </div>
                <Progress it={it} />
                <Milestones it={it} limit={3} />
                <div className="mt-auto">{on && <Support />}</div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-4">
        <button type="button" onClick={() => go(-1)} aria-label="Previous initiative" className="flex size-12 items-center justify-center rounded-full border border-primary/20 text-primary transition hover:bg-primary hover:text-cream">
          <Icon name="arrow" size={18} className="rotate-180" />
        </button>
        {initiatives.map((it, i) => (
          <button key={it.id} type="button" aria-label={`Show ${it.name}`} onClick={() => setActive(i)} className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-primary" : "w-2 bg-primary/20"}`} />
        ))}
        <button type="button" onClick={() => go(1)} aria-label="Next initiative" className="flex size-12 items-center justify-center rounded-full border border-primary/20 text-primary transition hover:bg-primary hover:text-cream">
          <Icon name="arrow" size={18} />
        </button>
      </div>
    </section>
  );
}

/* ───────────── C · Progress-ring cards ───────────── */

function Ring({ p }: { p: number }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <span className="relative flex size-[84px] shrink-0 items-center justify-center">
      <svg width="84" height="84" viewBox="0 0 84 84" className="-rotate-90" aria-hidden>
        <circle cx="42" cy="42" r={r} fill="none" stroke="#efe6d3" strokeWidth="7" />
        <circle cx="42" cy="42" r={r} fill="none" stroke="#c4aa7e" strokeWidth="7" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - p / 100)} />
      </svg>
      <span className="absolute font-display text-[20px] text-primary">{p}%</span>
    </span>
  );
}

export function InitiativesRings() {
  return (
    <section className="bg-cream-light py-20">
      <Container className="flex flex-col gap-12">
        <Heading />
        <div className="grid gap-6 lg:grid-cols-3">
          {initiatives.map((it) => (
            <article key={it.id} className="flex flex-col overflow-hidden rounded-[24px] bg-white ring-1 ring-[#e8dfcc]">
              <div className="relative h-[190px]">
                <Image src={it.image} alt={it.name} fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute right-5 bottom-4 left-5 text-[14px] leading-snug text-white italic">“{it.quote}”</p>
              </div>
              <div className="flex flex-1 flex-col gap-5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.12em] text-beige-ink uppercase">{it.category}</p>
                    <h3 className="mt-1 font-display text-[24px] leading-tight text-primary">{it.name}</h3>
                  </div>
                  <Ring p={pct(it)} />
                </div>
                <dl className="grid grid-cols-2 gap-3 rounded-[16px] bg-beige-bg p-4">
                  <div>
                    <dt className="text-[11px] font-semibold tracking-[0.08em] text-neutral-500 uppercase">Endowment target</dt>
                    <dd className="font-display text-[26px] leading-tight text-primary">{usd(it.endowmentTarget)}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold tracking-[0.08em] text-neutral-500 uppercase">This year</dt>
                    <dd className="font-display text-[26px] leading-tight text-primary">{usd(it.allocated)}</dd>
                  </div>
                </dl>
                {/* Milestone stepper */}
                <div>
                  <p className="mb-3 text-[11px] font-semibold tracking-[0.12em] text-neutral-500 uppercase">Milestones</p>
                  <ol className="flex flex-col">
                    {it.milestones.map((m, k) => (
                      <li key={m} className="relative flex gap-3 pb-3 last:pb-0">
                        {k < it.milestones.length - 1 && <span aria-hidden className="absolute top-5 bottom-0 left-[9px] w-px bg-beige" />}
                        <span className="relative z-10 flex size-[19px] shrink-0 items-center justify-center rounded-full bg-beige-btn text-[10px] font-semibold text-white">{k + 1}</span>
                        <span className="text-[14px] leading-[1.45] text-neutral-700">{m}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="mt-auto pt-2">
                  <Support />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───────────── D · Dashboard tabs ───────────── */

export function InitiativesDashboard() {
  const [id, setId] = useState(initiatives[0].id);
  const it = initiatives.find((x) => x.id === id)!;
  return (
    <section className="bg-primary py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          tone="light"
          eyebrow="Active endowments"
          title="Initiatives your gift keeps running"
          description="Each endowment is sized to cover an initiative's yearly overhead."
          descriptionClassName="max-w-[620px]"
        />
        <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
          <div role="tablist" aria-label="Initiatives" className="flex flex-col gap-3">
            {initiatives.map((x) => {
              const on = x.id === id;
              return (
                <button
                  key={x.id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setId(x.id)}
                  className={`flex items-center gap-4 rounded-[18px] p-4 text-left transition ${on ? "bg-cream text-primary" : "bg-white/[0.06] text-cream hover:bg-white/10"}`}
                >
                  <span className={`flex size-11 shrink-0 items-center justify-center rounded-full ${on ? "bg-primary text-beige" : "bg-white/10 text-beige"}`}>
                    <Icon name={ICON[x.id]} size={20} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[19px] leading-tight">{x.name}</span>
                    <span className={`mt-0.5 block text-[13px] ${on ? "text-neutral-600" : "text-cream/60"}`}>{usd(x.endowmentTarget)} target · {pct(x)}%</span>
                  </span>
                </button>
              );
            })}
          </div>

          <article key={it.id} className="grid animate-[fadeUp_0.4s_ease-out] overflow-hidden rounded-[24px] bg-white lg:grid-cols-[1fr_1fr]">
            <div className="relative min-h-[300px]">
              <Image src={it.image} alt={it.name} fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 rounded-full bg-cream px-3 py-1 text-[11px] font-semibold tracking-[0.1em] text-primary uppercase">{it.category}</span>
              <p className="absolute right-6 bottom-6 left-6 font-display text-[21px] leading-snug text-white italic">“{it.quote}”</p>
            </div>
            <div className="flex flex-col gap-6 p-6 md:p-8">
              <h3 className="font-display text-[30px] leading-tight text-primary">{it.name}</h3>
              <dl className="grid grid-cols-3 divide-x divide-[#e8dfcc] rounded-[16px] border border-[#e8dfcc]">
                {[
                  { k: "Endowment target", v: usd(it.endowmentTarget) },
                  { k: "Allocated this year", v: usd(it.allocated) },
                  { k: "Overhead / year*", v: usd(it.endowmentTarget * giftModel.rate) },
                ].map((s) => (
                  <div key={s.k} className="flex flex-col gap-1 p-3.5">
                    <dt className="text-[10px] font-semibold tracking-[0.08em] text-neutral-500 uppercase">{s.k}</dt>
                    <dd className="font-display text-[22px] leading-none text-primary">{s.v}</dd>
                  </div>
                ))}
              </dl>
              <Progress it={it} />
              <Milestones it={it} />
              <div className="mt-auto flex flex-wrap items-center gap-4">
                <Support />
                <span className="text-[12px] text-neutral-500">*Illustrative, at {giftModel.rate * 100}% a year.</span>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
