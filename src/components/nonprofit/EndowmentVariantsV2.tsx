"use client";

/**
 * Active endowments: calmer, premium variations (client: "too repetitive… make each one stand on its own…
 * interactive"; team: previous version was too busy). One light interaction per variation, each initiative
 * keeps its own identity through a signature number and accent. Preview at /nonprofit/endowment-showcase.
 */
import Image from "next/image";
import { useState } from "react";
import { giftModel, initiatives, type Initiative } from "@/data/nonprofit";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/community/Icon";

const usd = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;
const pct = (it: Initiative) => Math.min(100, Math.round((it.allocated / it.allocationGoal) * 100));

/** Each initiative's own identity: a signature figure and an accent. */
const ID: Record<string, { stat: string; statLabel: string; accent: string; soft: string; icon: string }> = {
  masjid: { stat: "1", statLabel: "masjid restored for the next generation", accent: "#a88b5d", soft: "#f6efe3", icon: "home" },
  education: { stat: "50", statLabel: "students in after-school Islamic education", accent: "#2f6b4b", soft: "#eaf1ec", icon: "book" },
  housing: { stat: "14", statLabel: "beds at 100 Bolton Ave for families in transition", accent: "#012a1c", soft: "#efeee8", icon: "users" },
};

function Heading({ center = false, light = false }: { center?: boolean; light?: boolean }) {
  return (
    <SectionHeading
      align={center ? "center" : "left"}
      tone={light ? "light" : undefined}
      eyebrow="Active endowments"
      eyebrowTone={light ? undefined : "soft"}
      title="Initiatives your gift keeps running"
      description="Each endowment is sized to cover an initiative's yearly overhead, so one gift keeps working year after year."
      descriptionClassName="max-w-[620px]"
    />
  );
}

function Bar({ it, dark = false }: { it: Initiative; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`flex justify-between text-[13px] ${dark ? "text-white/70" : "text-neutral-500"}`}>
        <span>Funding this year</span>
        <span className={dark ? "text-white" : "text-primary"}>
          {usd(it.allocated)} / {usd(it.allocationGoal)}
        </span>
      </div>
      <div className={`h-[3px] rounded-full ${dark ? "bg-white/20" : "bg-[#e8dfcc]"}`}>
        <div className="h-full rounded-full bg-beige-btn" style={{ width: `${pct(it)}%` }} />
      </div>
    </div>
  );
}

function Support({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#involved" className={`group inline-flex w-fit items-center gap-2 border-b pb-1 text-[15px] font-semibold ${dark ? "border-beige text-white" : "border-primary text-primary"}`}>
      Support this initiative
      <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
    </a>
  );
}

/* ───────────── A · Stage with tabs ───────────── */

export function EndowStage() {
  const [id, setId] = useState(initiatives[0].id);
  const it = initiatives.find((x) => x.id === id)!;
  const s = ID[it.id];
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col gap-10">
        <Heading />
        <div role="tablist" className="grid gap-3 md:grid-cols-3">
          {initiatives.map((x) => {
            const on = x.id === id;
            return (
              <button
                key={x.id}
                role="tab"
                aria-selected={on}
                onClick={() => setId(x.id)}
                className={`flex items-center gap-4 border-t-2 pt-4 text-left transition ${on ? "border-primary" : "border-[#e8dfcc] opacity-60 hover:opacity-100"}`}
              >
                <span className="font-display text-[32px] leading-none text-primary">{ID[x.id].stat}</span>
                <span>
                  <span className="block text-[12px] tracking-[0.12em] text-beige-ink uppercase">{x.category}</span>
                  <span className="block font-display text-[19px] leading-tight text-primary">{x.name}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div key={it.id} className="relative isolate grid min-h-[520px] animate-[fadeUp_0.45s_ease-out] overflow-hidden rounded-[28px] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[320px]">
            <Image src={it.image} alt={it.name} fill sizes="(min-width: 1024px) 760px, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-between gap-8 p-8 md:p-10" style={{ background: s.soft }}>
            <div className="flex flex-col gap-4">
              <p className="font-display text-[22px] leading-snug text-primary italic">“{it.quote}”</p>
              <p className="text-[15px] leading-[1.6] text-neutral-600">{it.sustains}</p>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[12px] tracking-[0.12em] text-neutral-500 uppercase">Endowment target</p>
                <p className="font-display text-[64px] leading-none text-primary">{usd(it.endowmentTarget)}</p>
              </div>
              <Bar it={it} />
              <Support />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────── B · Expanding panels ───────────── */

export function EndowPanels() {
  const [id, setId] = useState(initiatives[0].id);
  return (
    <section className="bg-[#f6efe3] py-20 md:py-28">
      <Container className="flex flex-col gap-10">
        <Heading center />
        <div className="flex flex-col gap-3 lg:h-[560px] lg:flex-row">
          {initiatives.map((x) => {
            const on = x.id === id;
            const s = ID[x.id];
            return (
              <button
                key={x.id}
                type="button"
                aria-expanded={on}
                onClick={() => setId(x.id)}
                onMouseEnter={() => setId(x.id)}
                className={`relative isolate flex min-h-[260px] overflow-hidden rounded-[24px] text-left transition-all duration-700 ease-out ${on ? "lg:flex-[2.6]" : "lg:flex-1"}`}
              >
                <Image src={x.image} alt={x.name} fill sizes="(min-width: 1024px) 800px, 100vw" className="-z-20 object-cover transition-transform duration-700" />
                <span className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />
                <span className="mt-auto flex w-full flex-col gap-4 p-7">
                  <span className="flex items-end gap-3">
                    <span className="font-display text-[56px] leading-none text-white">{s.stat}</span>
                    <span className="mb-1.5 max-w-[200px] text-[13px] leading-snug text-white/80">{s.statLabel}</span>
                  </span>
                  <span className="font-display text-[26px] leading-tight text-white">{x.name}</span>
                  {on && (
                    <span className="flex animate-[fadeUp_0.4s_ease-out] flex-col gap-5">
                      <span className="max-w-[460px] text-[15px] leading-[1.6] text-white/80">{x.sustains}</span>
                      <span className="flex flex-wrap items-end gap-8">
                        <span>
                          <span className="block text-[12px] tracking-[0.12em] text-beige uppercase">Endowment target</span>
                          <span className="block font-display text-[40px] leading-none text-white">{usd(x.endowmentTarget)}</span>
                        </span>
                        <span className="min-w-[220px] flex-1">
                          <Bar it={x} dark />
                        </span>
                      </span>
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
        <a href="#involved" className="inline-flex items-center gap-2 self-center rounded-[8px] bg-primary px-6 py-3.5 text-[16px] font-semibold text-cream transition hover:bg-forest">
          Support an initiative
          <Icon name="arrow" size={18} />
        </a>
      </Container>
    </section>
  );
}

/* ───────────── C · Editorial chapters ───────────── */

export function EndowChapters() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col gap-16">
        <Heading />
        {initiatives.map((it, i) => {
          const s = ID[it.id];
          const isOpen = open === it.id;
          return (
            <article key={it.id} className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[5/4] overflow-hidden rounded-[24px]">
                <Image src={it.image} alt={it.name} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-6">
                <p className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.16em] uppercase" style={{ color: s.accent }}>
                  <span className="font-display text-[15px]">0{i + 1}</span>
                  <span className="h-px w-10" style={{ background: s.accent }} />
                  {it.category}
                </p>
                <h3 className="font-display text-[40px] leading-[1.1] text-primary md:text-[48px]">{it.name}</h3>
                <p className="font-display text-[20px] leading-snug text-neutral-600 italic">“{it.quote}”</p>
                <div className="flex items-end gap-10 border-y border-[#e8dfcc] py-6">
                  <div>
                    <p className="text-[12px] tracking-[0.12em] text-neutral-500 uppercase">Endowment target</p>
                    <p className="font-display text-[48px] leading-none text-primary">{usd(it.endowmentTarget)}</p>
                  </div>
                  <div>
                    <p className="font-display text-[48px] leading-none" style={{ color: s.accent }}>{s.stat}</p>
                    <p className="max-w-[180px] text-[13px] leading-snug text-neutral-500">{s.statLabel}</p>
                  </div>
                </div>
                <Bar it={it} />
                <div className="flex flex-wrap items-center gap-6">
                  <Support />
                  <button type="button" onClick={() => setOpen(isOpen ? null : it.id)} aria-expanded={isOpen} className="flex items-center gap-1.5 text-[14px] text-neutral-500 hover:text-primary">
                    {isOpen ? "Hide progress" : `See progress (${it.milestones.length})`}
                    <Icon name="arrow" size={14} className={`transition-transform ${isOpen ? "-rotate-90" : "rotate-90"}`} />
                  </button>
                </div>
                {isOpen && (
                  <ol className="flex animate-[fadeUp_0.35s_ease-out] flex-col gap-2.5 border-l pl-5" style={{ borderColor: s.accent }}>
                    {it.milestones.map((m) => (
                      <li key={m} className="text-[15px] leading-[1.5] text-neutral-600">{m}</li>
                    ))}
                  </ol>
                )}
              </div>
            </article>
          );
        })}
      </Container>
    </section>
  );
}

/* ───────────── D · Gift that keeps giving (dark) ───────────── */

export function EndowLegacy() {
  const [id, setId] = useState(initiatives[0].id);
  const it = initiatives.find((x) => x.id === id)!;
  const yearly = it.endowmentTarget * giftModel.rate;
  return (
    <section className="bg-primary py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="flex flex-col gap-10">
          <Heading light />
          <ul className="flex flex-col">
            {initiatives.map((x) => {
              const on = x.id === id;
              return (
                <li key={x.id}>
                  <button
                    type="button"
                    onClick={() => setId(x.id)}
                    onMouseEnter={() => setId(x.id)}
                    aria-pressed={on}
                    className={`flex w-full items-center justify-between gap-4 border-b border-white/10 py-5 text-left transition ${on ? "text-white" : "text-white/45 hover:text-white/80"}`}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-display text-[16px] text-beige">{ID[x.id].stat}</span>
                      <span className="font-display text-[26px] leading-tight">{x.name}</span>
                    </span>
                    <Icon name="arrow" size={18} className={`shrink-0 transition ${on ? "translate-x-0 text-beige" : "-translate-x-2 opacity-0"}`} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div key={it.id} className="relative isolate animate-[fadeUp_0.45s_ease-out] overflow-hidden rounded-[28px]">
          <div className="relative aspect-[4/3]">
            <Image src={it.image} alt={it.name} fill sizes="(min-width: 1024px) 700px, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <p className="absolute right-7 bottom-7 left-7 font-display text-[22px] leading-snug text-white italic">“{it.quote}”</p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/10">
            <div className="bg-[#0d3e26] p-6">
              <p className="text-[12px] tracking-[0.12em] text-beige uppercase">Endowment target</p>
              <p className="mt-1 font-display text-[40px] leading-none text-white">{usd(it.endowmentTarget)}</p>
            </div>
            <div className="bg-[#0d3e26] p-6">
              <p className="text-[12px] tracking-[0.12em] text-beige uppercase">Funds every year*</p>
              <p className="mt-1 font-display text-[40px] leading-none text-white">{usd(yearly)}</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 bg-[#0d3e26] px-6 pt-2 pb-6">
            <Bar it={it} dark />
            <Support dark />
          </div>
        </div>
      </Container>
      <Container>
        <p className="mt-8 text-[12px] text-white/50">*Illustrative, at a {Math.round(giftModel.rate * 100)}% annual return. Returns are not guaranteed.</p>
      </Container>
    </section>
  );
}
