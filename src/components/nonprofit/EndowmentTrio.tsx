"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { externalAssistance as ext, masjidOutlook as masjid, transitionalHousing as housing, youthProgram as youth } from "@/data/nonprofit";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { Icon } from "@/components/community/Icon";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export function Tag({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[12px] font-semibold tracking-[0.12em] uppercase ${
        tone === "light" ? "bg-beige/15 text-warm-ink" : "bg-white/10 text-beige ring-1 ring-white/15 backdrop-blur-md"
      }`}
    >
      {children}
    </span>
  );
}

export function SupportLink({ tone = "dark" }: { tone?: "dark" | "beige" }) {
  return (
    <a
      href="#involved"
      className={`group inline-flex w-fit items-center gap-2 rounded-[8px] px-6 py-3.5 text-[16px] font-medium transition hover:brightness-110 ${
        tone === "dark" ? "bg-primary text-cream" : "bg-beige-btn text-white"
      }`}
    >
      Support this initiative
      <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

/* ---------- 1. Masjid: full-bleed photo with a renovation roadmap ---------- */

export function MasjidRoadmap() {
  const done = masjid.steps.filter((s) => s.done).length;
  return (
    <article id="endow-masjid" className="scroll-mt-24">
      <div className="relative isolate overflow-hidden rounded-[32px] bg-primary">
        <Image src={masjid.image} alt={masjid.name} fill sizes="(min-width: 1280px) 1200px, 100vw" className="-z-20 object-cover object-[50%_35%]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(1,42,28,0.15)_0%,rgba(1,42,28,0.55)_45%,rgba(1,42,28,0.95)_100%)] lg:bg-[linear-gradient(90deg,rgba(1,42,28,0.92)_0%,rgba(1,42,28,0.6)_45%,rgba(1,42,28,0.1)_80%)]" />

        <div className="flex flex-col gap-10 px-6 pt-48 pb-6 md:px-12 md:pb-10 lg:min-h-[640px] lg:justify-between lg:pt-12">
          <div className="flex max-w-[520px] flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2">
              <Tag tone="dark">{masjid.category}</Tag>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-beige px-3 py-1 text-[12px] font-semibold tracking-[0.08em] text-primary uppercase">
                <Icon name="check" size={14} />
                {masjid.status}
              </span>
            </div>
            <h3 className="font-display text-[40px] leading-[1.05] text-white md:text-[56px]">{masjid.name}</h3>
            <p className="text-[17px] leading-[1.6] text-[#d7e0db]">{masjid.intro}</p>
            <SupportLink tone="beige" />
          </div>

          {/* Roadmap: four milestones done, start date to come */}
          <div className="rounded-[24px] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-md md:p-7">
            <div className="mb-5 flex items-center justify-between gap-4 text-[13px] font-medium tracking-[0.1em] text-beige uppercase">
              <span>Renovation roadmap</span>
              <span>
                {done} of {masjid.steps.length} complete
              </span>
            </div>
            <ol className="grid gap-5 md:grid-cols-5 md:gap-3">
              {masjid.steps.map((s, i) => (
                <li key={s.title} className="relative flex gap-4 md:flex-col md:gap-3">
                  {/* connector line */}
                  {i < masjid.steps.length - 1 && (
                    <span
                      aria-hidden
                      className={`absolute top-10 left-[19px] h-[calc(100%-12px)] w-px md:top-[19px] md:left-12 md:h-px md:w-[calc(100%-36px)] ${
                        masjid.steps[i + 1].done ? "bg-beige" : "border-t border-l border-dashed border-white/40 bg-transparent"
                      }`}
                    />
                  )}
                  <span
                    className={`relative grid size-10 shrink-0 place-items-center rounded-full ${
                      s.done ? "bg-beige text-primary" : "border border-dashed border-white/60 text-white"
                    }`}
                  >
                    {s.done ? <Icon name="check" size={18} /> : <Icon name="calendar" size={17} />}
                  </span>
                  <span className="flex flex-col gap-1 pb-1">
                    <span className="text-[16px] font-medium text-white">{s.title}</span>
                    <span className="text-[14px] leading-snug text-[#c9d3cd]">{s.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------- 2. Youth program: editorial stats + photo with goal ring ---------- */

/** Icons for youth.extras, in order: trips, snacks, supplies, printing & admin. */
const EXTRA_ICONS = ["pin", "food", "book", "news"];

function GoalRing({ raised, goal, tone = "light" }: { raised: number; goal: number; tone?: "light" | "dark" }) {
  const pct = Math.round((raised / goal) * 100);
  const r = 44;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative size-[104px] shrink-0">
      <svg viewBox="0 0 100 100" className="size-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="currentColor" strokeWidth="7" className={tone === "dark" ? "text-white/12" : "text-primary/10"} />
        <circle cx="50" cy="50" r={r} fill="none" stroke="#d6c29e" strokeWidth="7" strokeLinecap="round" strokeDasharray={`${(c * pct) / 100} ${c}`} />
      </svg>
      <span className={`absolute inset-0 grid place-items-center font-display text-[26px] ${tone === "dark" ? "text-white" : "text-primary"}`}>{pct}%</span>
    </div>
  );
}

/** Bento of the program's progress: each number gets its own small visual. */
function YouthStats() {
  const [sessions, students, , teachers] = youth.stats;
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {/* Students: one dot per student */}
      <div className="flex sm:row-span-2 flex-col justify-between gap-6 rounded-[20px] bg-primary p-5 text-cream md:p-6">
        <div>
          <p className="font-display text-[64px] leading-none text-white md:text-[80px]">{students.value}</p>
          <p className="mt-2 text-[15px] leading-snug text-[#c9d3cd]">{students.label}</p>
        </div>
        <div aria-hidden className="grid w-fit grid-cols-10 gap-1.5">
          {Array.from({ length: Number(students.value) }, (_, i) => (
            <span key={i} className="size-2.5 rounded-full bg-beige transition-transform hover:scale-150" />
          ))}
        </div>
      </div>

      {/* Sessions: three marks */}
      <div className="flex flex-col gap-3 rounded-[20px] bg-beige-bg p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="font-display text-[44px] leading-none text-primary">
            {sessions.value}
            <span className="ml-1 text-[18px] text-beige-ink">× week</span>
          </p>
          <span aria-hidden className="flex gap-1">
            {Array.from({ length: Number(sessions.value) }, (_, i) => (
              <span key={i} className="h-7 w-2 rounded-full bg-primary" />
            ))}
          </span>
        </div>
        <p className="text-[14px] leading-snug text-neutral-700">Class sessions</p>
      </div>

      {/* Age groups as two pills */}
      <div className="flex flex-col gap-3 rounded-[20px] bg-white p-5 ring-1 ring-[#e8dfcc]">
        <div className="flex flex-wrap gap-2">
          {youth.groups.map((g) => (
            <span key={g} className="rounded-full bg-cream-light px-3 py-1.5 font-display text-[18px] text-primary ring-1 ring-[#e8dfcc]">
              {g.replace("Ages ", "")}
            </span>
          ))}
        </div>
        <p className="text-[14px] leading-snug text-neutral-700">Two class groups, by age</p>
      </div>

      {/* Teachers */}
      <div className="flex items-center gap-4 sm:col-span-2 rounded-[20px] bg-white p-5 ring-1 ring-[#e8dfcc]">
        <span className="flex -space-x-2">
          {Array.from({ length: Number(teachers.value) }, (_, i) => (
            <span key={i} className="grid size-11 place-items-center rounded-full bg-beige text-primary ring-2 ring-white">
              <Icon name="users" size={18} />
            </span>
          ))}
        </span>
        <p className="text-[15px] leading-snug text-neutral-700">
          <span className="font-display text-[26px] text-primary">{teachers.value} </span>
          {teachers.label.toLowerCase()}
        </p>
      </div>
    </div>
  );
}

function YouthProgram() {
  return (
    <article id="endow-youth" className="scroll-mt-24 rounded-[32px] bg-cream-light p-6 md:p-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Tag>{youth.category}</Tag>
            <h3 className="font-display text-[40px] leading-[1.05] text-primary md:text-[56px]">{youth.name}</h3>
            <p className="font-display text-[22px] text-beige-ink italic">{youth.subtitle}</p>
          </div>

          {/* Progress made, as big numbers */}
          <YouthStats />

          {/* Beyond teachers: what the extra funding pays for */}
          <div className="rounded-[20px] bg-beige-bg/60 p-5 md:p-6">
            <p className="text-[13px] font-semibold tracking-[0.12em] text-beige-ink uppercase">Additional funding covers</p>
            <ul className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {youth.extras.map((x, i) => (
                <li key={x} className="flex items-center gap-3 text-[15px] text-primary">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-beige-ink ring-1 ring-[#e8dfcc]">
                    <Icon name={EXTRA_ICONS[i] ?? "check"} size={18} />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-[24px]">
            <Image src={youth.image} alt={youth.name} fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover transition duration-700 hover:scale-[1.03]" />
            <div className="absolute top-4 left-4 flex gap-2">
              {youth.groups.map((g) => (
                <span key={g} className="rounded-full bg-white/85 px-3 py-1 text-[13px] font-medium text-primary backdrop-blur-md">
                  {g}
                </span>
              ))}
            </div>
          </div>

          {/* Goal + CTA in one card, so the right column ends level with the left */}
          <div className="flex flex-col gap-5 rounded-[24px] bg-primary p-5 text-cream md:p-6">
            {/* This year's funds, as prominent as the goal */}
            <div className="flex items-end justify-between gap-4 border-b border-white/15 pb-5">
              <p className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-beige uppercase">
                <Icon name="calendar" size={15} />
                2026 funds allocated
              </p>
              <p className="font-display text-[40px] leading-none text-beige">{usd(youth.allocated2026)}</p>
            </div>
            <div className="flex items-center gap-5">
              <GoalRing raised={youth.raised} goal={youth.goal} tone="dark" />
              <div className="flex min-w-0 flex-col gap-1">
                <p className="text-[12px] font-semibold tracking-[0.12em] text-beige uppercase">Endowment goal</p>
                <p className="font-display text-[28px] leading-tight text-white">
                  {usd(youth.raised)} <span className="text-white/45">/ {usd(youth.goal)}</span>
                </p>
              </div>
            </div>
            <a
              href="#involved"
              className="group inline-flex items-center justify-center gap-2 rounded-[8px] bg-beige-btn px-6 py-3.5 text-[16px] font-medium text-white transition hover:brightness-110"
            >
              Support this initiative
              <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------- 3. Housing: dark panel with a short-term / long-term switch ---------- */

function HousingPhases() {
  const [phaseId, setPhaseId] = useState(housing.phases[1].id);
  const phase = housing.phases.find((p) => p.id === phaseId)!;
  const pct = Math.round((housing.raised / housing.goal) * 100);

  return (
    <article id="endow-housing" className="relative isolate scroll-mt-24 overflow-hidden rounded-[32px] bg-primary p-6 text-cream md:p-12">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.1]" style={{ backgroundImage: STAR_PATTERN }} />
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="flex flex-col gap-6">
          <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-[24px] lg:min-h-[380px]">
            <Image src={housing.image} alt={housing.name} fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">
              <ul className="flex flex-col gap-2">
                {housing.foundation.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[14px] text-white">
                    <span className="grid size-5 place-items-center rounded-full bg-beige text-primary">
                      <Icon name="check" size={12} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-4">
            <Tag tone="dark">{housing.category}</Tag>
            <h3 className="font-display text-[40px] leading-[1.05] text-white md:text-[56px]">{housing.name}</h3>
            <p className="text-[17px] leading-[1.6] text-[#c9d3cd]">{housing.intro}</p>
          </div>

          <div role="tablist" aria-label="Housing plan" className="inline-flex w-fit rounded-full bg-white/10 p-1 ring-1 ring-white/15">
            {housing.phases.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={p.id === phaseId}
                onClick={() => setPhaseId(p.id)}
                className={`rounded-full px-5 py-2 text-[15px] font-medium transition ${
                  p.id === phaseId ? "bg-beige text-primary" : "text-cream hover:text-white"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div key={phase.id} className="flex animate-[fadeUp_0.4s_ease-out] flex-col gap-5">
            <p className="font-display text-[26px] text-beige">{phase.title}</p>
            <div className="flex flex-wrap gap-3">
              {phase.facts.map((f) => (
                <div key={f.label} className="min-w-[120px] flex-1 rounded-[18px] bg-white/[0.06] p-4 ring-1 ring-white/10">
                  <p className="font-display text-[36px] leading-none text-white">{f.value}</p>
                  <p className="mt-2 text-[13px] text-[#c9d3cd]">{f.label}</p>
                </div>
              ))}
            </div>
            <ul className="flex flex-col gap-2.5">
              {phase.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-[16px] text-cream">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-beige" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* Endowment goal: raised vs goal, a marked track, and this year's allocation */}
          <div className="rounded-[20px] bg-white/[0.06] p-5 ring-1 ring-white/10 md:p-6">
            {/* Two headline figures side by side: this year's funds and the endowment goal */}
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-white/15">
              <div className="sm:pr-6">
                <p className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-beige uppercase">
                  <Icon name="calendar" size={15} />
                  2026 funds allocated
                </p>
                <p className="mt-2 font-display text-[44px] leading-none text-beige">{usd(housing.allocated2026)}</p>
                <p className="mt-2 text-[14px] text-white/55">Funding this year&apos;s program</p>
              </div>
              <div className="sm:pl-6">
                <p className="text-[12px] font-semibold tracking-[0.12em] text-beige uppercase">Endowment goal</p>
                <p className="mt-2 font-display text-[44px] leading-none text-white">{usd(housing.raised)}</p>
                <p className="mt-2 text-[14px] text-white/55">raised of {usd(housing.goal)}</p>
              </div>
            </div>

            <div className="relative mt-12">
              {/* percent bubble riding on the fill */}
              <span
                className="absolute -top-8 -translate-x-1/2 rounded-full bg-beige px-2.5 py-0.5 text-[12px] font-semibold text-primary"
                style={{ left: `${pct}%` }}
              >
                {pct}%
              </span>
              <div className="flex h-3 gap-1">
                {Array.from({ length: 10 }, (_, i) => (
                  <span
                    key={i}
                    className={`flex-1 rounded-full transition-colors ${i < Math.round(pct / 10) ? "bg-beige" : "bg-white/10"}`}
                  />
                ))}
              </div>
              <div className="mt-2.5 flex justify-between text-[12px] text-white/50">
                <span>$0</span>
                <span>{usd(housing.goal / 2)}</span>
                <span>{usd(housing.goal)}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <SupportLink tone="beige" />
            <p className="text-[12px] text-white/50">Partnership returns are targeted, not guaranteed.</p>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------- External nonprofit assistance ---------- */

function ExternalAssistance() {
  return (
    <div className="flex flex-col gap-8 pt-6">
      <SectionHeading eyebrow="Beyond our endowments" eyebrowTone="soft" title={ext.title} description={ext.body} />
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-5 rounded-[24px] bg-beige-bg p-7 md:p-9">
          <span className="grid size-14 place-items-center rounded-full bg-white text-beige-ink">
            <Icon name="gift" size={24} />
          </span>
          <h4 className="font-display text-[30px] leading-tight text-primary">{ext.oneTime.title}</h4>
          <p className="text-[16px] text-neutral-700">{ext.oneTime.body}</p>
          <ul className="flex flex-wrap gap-2">
            {ext.oneTime.causes.map((c) => (
              <li key={c} className="rounded-full bg-white px-4 py-2 text-[14px] font-medium text-primary">
                {c}
              </li>
            ))}
          </ul>
          <a href="#involved" className="group mt-auto inline-flex w-fit items-center gap-2 text-[16px] font-medium text-primary">
            Reach out
            <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <div className="flex flex-col gap-5 rounded-[24px] bg-primary p-7 text-cream md:p-9">
          <span className="grid size-14 place-items-center rounded-full bg-beige text-primary">
            <Icon name="chart" size={24} />
          </span>
          <h4 className="font-display text-[30px] leading-tight text-beige">{ext.longTerm.title}</h4>
          <p className="text-[16px] leading-[1.6] text-[#d7e0db]">{ext.longTerm.body}</p>
          <p className="text-[12px] text-white/50">Returns are not guaranteed.</p>
          <a href="#involved" className="group mt-auto inline-flex w-fit items-center gap-2 text-[16px] font-medium text-beige">
            Ask about endowments
            <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

const ENDOWMENTS = [
  { id: "endow-masjid", n: "01", label: "Masjid Renovation", category: masjid.category, image: masjid.image, Panel: MasjidRoadmap },
  { id: "endow-youth", n: "02", label: "Islamic Youth Program", category: youth.category, image: youth.image, Panel: YouthProgram },
  { id: "endow-housing", n: "03", label: "Transitional Housing", category: housing.category, image: housing.image, Panel: HousingPhases },
];

export type EndowmentView = "stacked" | "tabs" | "slider";

/** Tabs view: photo tab cards on top, one endowment's own layout shown below. */
function TabsView() {
  const [active, setActive] = useState(0);
  const { Panel } = ENDOWMENTS[active];
  return (
    <div className="flex flex-col gap-6">
      <div role="tablist" aria-label="Endowments" className="grid gap-3 sm:grid-cols-3">
        {ENDOWMENTS.map((e, i) => {
          const on = i === active;
          return (
            <button
              key={e.id}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(i)}
              className={`group flex items-center gap-4 rounded-[20px] p-3 text-left transition ${
                on ? "bg-primary text-cream shadow-[0_20px_40px_-26px_rgba(1,42,28,0.9)]" : "bg-white text-primary ring-1 ring-[#e8dfcc] hover:ring-beige"
              }`}
            >
              <span className="relative size-16 shrink-0 overflow-hidden rounded-[14px]">
                <Image src={e.image} alt="" fill sizes="64px" className="object-cover transition duration-500 group-hover:scale-110" />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className={`text-[12px] font-semibold tracking-[0.12em] uppercase ${on ? "text-beige" : "text-beige-ink"}`}>
                  {e.n} · {e.category}
                </span>
                <span className="font-display text-[20px] leading-tight">{e.label}</span>
              </span>
            </button>
          );
        })}
      </div>
      <div key={active} className="animate-[fadeUp_0.45s_ease-out]">
        <Panel />
      </div>
    </div>
  );
}

/** Slider view: each endowment is a full-width slide; swipe, use the arrows, or pick a dot. */
function SliderView() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const idx = Math.max(0, Math.min(ENDOWMENTS.length - 1, i));
    el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4">
        <p className="font-display text-[22px] text-primary">
          <span className="text-beige-ink">{ENDOWMENTS[active].n}</span> / 0{ENDOWMENTS.length} · {ENDOWMENTS[active].label}
        </p>
        <div className="flex gap-2">
          {[-1, 1].map((d) => (
            <button
              key={d}
              onClick={() => go(active + d)}
              disabled={active + d < 0 || active + d >= ENDOWMENTS.length}
              aria-label={d < 0 ? "Previous endowment" : "Next endowment"}
              className="grid size-12 place-items-center rounded-full bg-white text-primary ring-1 ring-[#e8dfcc] transition hover:bg-primary hover:text-cream disabled:pointer-events-none disabled:opacity-35"
            >
              <Icon name="arrow" size={18} className={d < 0 ? "rotate-180" : ""} />
            </button>
          ))}
        </div>
      </div>
      <div
        ref={track}
        onScroll={(e) => setActive(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
        className="flex snap-x snap-mandatory items-start overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {ENDOWMENTS.map(({ id, Panel }) => (
          <div key={id} className="w-full shrink-0 snap-start">
            <Panel />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {ENDOWMENTS.map((e, i) => (
          <button
            key={e.id}
            onClick={() => go(i)}
            aria-label={`Show ${e.label}`}
            className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Active endowments, redesigned per the client's 28 Oct comments: each initiative stands on its own
 * with a different layout (photo roadmap, stats + goal ring, dark panel with a phase switch),
 * followed by the external nonprofit assistance block.
 * view: stacked (all three in a column), tabs (one at a time) or slider (swipe between them).
 * TODO: connect "Support this initiative" to the donation flow.
 */
export function EndowmentTrio({ view = "stacked" }: { view?: EndowmentView }) {
  return (
    <section id="endowments" className="scroll-mt-20 py-24 md:py-28">
      <Container className="flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Active endowments"
            eyebrowTone="soft"
            align="left"
            title="Three initiatives, each with its own story"
            description="Real progress, real numbers. See where each endowment stands today."
            descriptionClassName="max-w-[560px]"
          />
          {view === "stacked" && (
            <nav aria-label="Endowments" className="flex flex-wrap gap-2">
              {ENDOWMENTS.map((j) => (
                <a
                  key={j.id}
                  href={`#${j.id}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[14px] text-primary ring-1 ring-[#e8dfcc] transition hover:bg-primary hover:text-cream"
                >
                  <span className="font-display text-beige-ink">{j.n}</span>
                  {j.label}
                </a>
              ))}
            </nav>
          )}
        </div>

        {view === "stacked" && ENDOWMENTS.map(({ id, Panel }) => <Panel key={id} />)}
        {view === "tabs" && <TabsView />}
        {view === "slider" && <SliderView />}
        <ExternalAssistance />
      </Container>
    </section>
  );
}
