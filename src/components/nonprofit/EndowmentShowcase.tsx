"use client";

import Image from "next/image";
import { useState } from "react";
import { giftModel, initiatives } from "@/data/nonprofit";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { Icon } from "@/components/community/Icon";

/*
 * Active endowments (client feedback: "too repetitive… make it like the community section and make each
 * one stand on its own… interactive"). Each initiative gets its own layout, palette and interaction:
 *   Masjid    → restoration plan you can step through + pick what your gift restores
 *   Education → "fund a seat": a gift slider that lights up classroom seats
 *   Housing   → 14-bed home: tap a room, see its status; sponsor nights of stay
 * Per-unit costs and room statuses are ILLUSTRATIVE, derived from each initiative's figures.
 */

const usd = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;
const byId = (id: string) => initiatives.find((i) => i.id === id)!;

function Funding({ allocated, goal, dark = false }: { allocated: number; goal: number; dark?: boolean }) {
  const p = Math.min(100, Math.round((allocated / goal) * 100));
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between text-[14px]">
        <span className={dark ? "text-[#c9d3cd]" : "text-neutral-600"}>Funding allocated this year</span>
        <span className={`font-semibold ${dark ? "text-white" : "text-primary"}`}>
          {usd(allocated)} <span className={dark ? "text-white/50" : "text-neutral-400"}>/ {usd(goal)}</span>
        </span>
      </div>
      <div className={`h-2 overflow-hidden rounded-full ${dark ? "bg-white/15" : "bg-[#e8dfcc]"}`}>
        <div className="h-full rounded-full bg-beige-btn transition-[width] duration-700" style={{ width: `${p}%` }} />
      </div>
    </div>
  );
}

function Target({ value, dark = false }: { value: number; dark?: boolean }) {
  return (
    <div>
      <p className={`text-[11px] font-semibold tracking-[0.12em] uppercase ${dark ? "text-beige" : "text-beige-ink"}`}>Endowment target</p>
      <p className={`font-display text-[52px] leading-none md:text-[64px] ${dark ? "text-white" : "text-primary"}`}>{usd(value)}</p>
      <p className={`mt-1 text-[13px] ${dark ? "text-white/60" : "text-neutral-500"}`}>
        sustains about {usd(value * giftModel.rate)} of overhead every year*
      </p>
    </div>
  );
}

function Cta({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <a
      href="#involved"
      className={`inline-flex w-fit items-center gap-2 rounded-[8px] px-6 py-3.5 text-[16px] font-semibold transition ${
        dark ? "bg-cream text-primary hover:bg-white" : "bg-primary text-cream hover:bg-forest"
      }`}
    >
      {label}
      <Icon name="arrow" size={18} />
    </a>
  );
}

function Tag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`w-fit rounded-full px-3 py-1 text-[12px] font-semibold tracking-[0.1em] uppercase ${dark ? "bg-white/10 text-beige" : "bg-white text-beige-ink"}`}>
      {children}
    </span>
  );
}

/* ───────────── 1 · Masjid: restoration plan ───────────── */

const PHASES = [
  { title: "Partnership with the board", body: "Connected with the ISGD board to plan the renovation together.", status: "Done" },
  { title: "Concrete & exterior", body: "Concrete work scheduled, with a price finalized.", status: "Scheduled" },
  { title: "Interior renovation", body: "Interior work scheduled with a funded budget.", status: "Funded" },
];
const MASJID_GIFTS = [
  { label: "Exterior & concrete", amount: 250, d: "Helps finish the walkways and entrance." },
  { label: "Prayer hall interior", amount: 500, d: "Carpet, lighting, and repairs inside." },
  { label: "Upkeep endowment", amount: 1000, d: "Stays invested; covers utilities every year." },
];

function MasjidBlock() {
  const it = byId("masjid");
  const [phase, setPhase] = useState(0);
  const [gift, setGift] = useState(1);
  const p = PHASES[phase];
  return (
    <article id="e-masjid" className="scroll-mt-24 grid overflow-hidden rounded-[28px] bg-[#f6efe3] lg:grid-cols-[0.95fr_1.05fr]">
      <div className="relative min-h-[420px]">
        <Image src={it.image} alt={it.name} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-7">
          <p className="font-display text-[22px] leading-snug text-white italic">“{it.quote}”</p>
        </div>
      </div>
      <div className="flex flex-col gap-7 p-7 md:p-10">
        <div className="flex flex-col gap-3">
          <Tag>{it.category}</Tag>
          <h3 className="font-display text-[34px] leading-tight text-primary md:text-[40px]">{it.name}</h3>
        </div>
        <Target value={it.endowmentTarget} />

        {/* Restoration plan */}
        <div className="flex flex-col gap-4 rounded-[18px] bg-white p-5">
          <p className="text-[12px] font-semibold tracking-[0.12em] text-neutral-500 uppercase">Restoration plan · tap a phase</p>
          <div className="flex gap-2" role="tablist">
            {PHASES.map((x, i) => (
              <button
                key={x.title}
                role="tab"
                aria-selected={phase === i}
                onClick={() => setPhase(i)}
                className={`flex flex-1 flex-col items-start gap-1 rounded-[12px] border px-3 py-2.5 text-left transition ${
                  phase === i ? "border-primary bg-primary text-cream" : "border-[#e8dfcc] text-primary hover:border-beige-btn"
                }`}
              >
                <span className="font-display text-[18px] leading-none">0{i + 1}</span>
                <span className="text-[12px] leading-tight">{x.status}</span>
              </button>
            ))}
          </div>
          <div key={phase} className="animate-[fadeUp_0.3s_ease-out]">
            <p className="text-[17px] font-semibold text-primary">{p.title}</p>
            <p className="mt-1 text-[15px] text-neutral-600">{p.body}</p>
          </div>
        </div>

        {/* What your gift restores */}
        <div className="flex flex-col gap-3">
          <p className="text-[15px] font-medium text-primary">What will your gift restore?</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {MASJID_GIFTS.map((g, i) => (
              <button
                key={g.label}
                onClick={() => setGift(i)}
                aria-pressed={gift === i}
                className={`flex flex-col gap-1 rounded-[14px] border p-3.5 text-left transition ${
                  gift === i ? "border-beige-btn bg-white shadow-[0_10px_25px_-18px_rgba(48,43,35,0.6)]" : "border-transparent bg-white/60 hover:bg-white"
                }`}
              >
                <span className="font-display text-[24px] leading-none text-primary">{usd(g.amount)}</span>
                <span className="text-[13px] font-medium text-primary">{g.label}</span>
              </button>
            ))}
          </div>
          <p className="text-[14px] text-neutral-600">{MASJID_GIFTS[gift].d}</p>
        </div>

        <Funding allocated={it.allocated} goal={it.allocationGoal} />
        <Cta label={`Give ${usd(MASJID_GIFTS[gift].amount)} to the masjid`} />
      </div>
    </article>
  );
}

/* ───────────── 2 · Education: fund a seat ───────────── */

const SEATS = 50;

function EducationBlock() {
  const it = byId("education");
  const perSeat = it.allocationGoal / SEATS; // yearly cost per student
  const funded = Math.round(it.allocated / perSeat);
  const [gift, setGift] = useState(perSeat * 2);
  const added = Math.min(SEATS - funded, Math.floor(gift / perSeat));
  return (
    <article id="e-education" className="scroll-mt-24 grid items-center gap-10 rounded-[28px] border border-[#e8dfcc] bg-white p-7 md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <Tag>{it.category}</Tag>
          <h3 className="font-display text-[34px] leading-tight text-primary md:text-[40px]">{it.name}</h3>
          <p className="text-[16px] leading-[1.6] text-neutral-600">{it.quote}</p>
        </div>

        {/* Classroom */}
        <div className="flex flex-col gap-4 rounded-[18px] bg-[#f6efe3] p-5">
          <div className="flex items-baseline justify-between">
            <p className="text-[12px] font-semibold tracking-[0.12em] text-neutral-500 uppercase">This year&apos;s classroom</p>
            <p className="text-[13px] text-neutral-600">
              <span className="font-semibold text-primary">{funded + added}</span> / {SEATS} seats funded
            </p>
          </div>
          <div className="grid grid-cols-10 gap-1.5" aria-hidden>
            {Array.from({ length: SEATS }, (_, i) => (
              <span
                key={i}
                className={`aspect-square rounded-[6px] transition-colors duration-300 ${
                  i < funded ? "bg-primary" : i < funded + added ? "bg-beige-btn" : "bg-white ring-1 ring-[#e3d9c4]"
                }`}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-[12px] text-neutral-600">
            <span className="flex items-center gap-1.5"><span className="size-3 rounded-[3px] bg-primary" />Funded</span>
            <span className="flex items-center gap-1.5"><span className="size-3 rounded-[3px] bg-beige-btn" />Your gift</span>
            <span className="flex items-center gap-1.5"><span className="size-3 rounded-[3px] bg-white ring-1 ring-[#e3d9c4]" />Still needed</span>
          </div>
        </div>

        <label className="flex flex-col gap-3">
          <span className="flex items-baseline justify-between">
            <span className="text-[15px] font-medium text-primary">Your gift</span>
            <span className="font-display text-[30px] leading-none text-primary">{usd(gift)}</span>
          </span>
          <input
            type="range"
            min={perSeat}
            max={perSeat * 10}
            step={perSeat}
            value={gift}
            onChange={(e) => setGift(Number(e.target.value))}
            className="w-full accent-[#c4aa7e]"
            aria-label="Gift amount"
          />
          <span className="text-[15px] text-neutral-600">
            Funds <span className="font-semibold text-primary">{added} {added === 1 ? "student" : "students"}</span> for a full year of after-school Islamic education.
          </span>
        </label>
        <Cta label={`Fund ${added} ${added === 1 ? "seat" : "seats"}`} />
      </div>

      <div className="flex flex-col gap-6">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
          <Image src={it.image} alt={it.name} fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
          <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[13px] font-medium text-primary">{usd(perSeat)} / student / year*</span>
        </div>
        <Target value={it.endowmentTarget} />
        <Funding allocated={it.allocated} goal={it.allocationGoal} />
      </div>
    </article>
  );
}

/* ───────────── 3 · Housing: the 14-bed home ───────────── */

const ROOMS = Array.from({ length: 14 }, (_, i) => ({
  n: i + 1,
  status: i < 6 ? "Ready" : i < 11 ? "Renovating" : "Planned",
}));

function HousingBlock() {
  const it = byId("housing");
  const [room, setRoom] = useState(0);
  const [nights, setNights] = useState(30);
  const perNight = 25; // illustrative cost of one supported night
  const r = ROOMS[room];
  return (
    <article id="e-housing" className="relative isolate scroll-mt-24 overflow-hidden rounded-[28px] bg-primary p-7 text-cream md:p-10">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06]" style={{ backgroundImage: STAR_PATTERN }} />
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-6">
          <Tag dark>{it.category}</Tag>
          <h3 className="font-display text-[34px] leading-tight text-white md:text-[40px]">{it.name}</h3>
          <p className="font-display text-[20px] text-beige italic">“{it.quote}”</p>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[20px]">
            <Image src={it.image} alt={it.name} fill sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />
            <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1.5 text-[13px] text-white backdrop-blur">100 Bolton Ave · 14 beds · 6 baths</span>
          </div>
          <Target value={it.endowmentTarget} dark />
          <Funding allocated={it.allocated} goal={it.allocationGoal} dark />
        </div>

        <div className="flex flex-col gap-6">
          {/* Floor plan */}
          <div className="flex flex-col gap-4 rounded-[20px] bg-white/[0.06] p-5 ring-1 ring-white/10">
            <p className="text-[12px] font-semibold tracking-[0.12em] text-beige uppercase">The home · tap a room</p>
            <div className="grid grid-cols-7 gap-2">
              {ROOMS.map((x, i) => (
                <button
                  key={x.n}
                  onClick={() => setRoom(i)}
                  aria-pressed={room === i}
                  aria-label={`Room ${x.n}: ${x.status}`}
                  className={`flex aspect-square flex-col items-center justify-center rounded-[10px] text-[12px] font-semibold transition ${
                    room === i ? "ring-2 ring-beige" : ""
                  } ${x.status === "Ready" ? "bg-beige text-primary" : x.status === "Renovating" ? "bg-beige/35 text-white" : "bg-white/10 text-white/70"}`}
                >
                  <Icon name="home" size={14} />
                  {x.n}
                </button>
              ))}
            </div>
            <div key={room} className="flex animate-[fadeUp_0.3s_ease-out] items-center justify-between rounded-[12px] bg-white/[0.06] px-4 py-3">
              <span className="text-[15px] text-white">Room {r.n}</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-[13px] text-beige">{r.status}</span>
            </div>
          </div>

          {/* Milestones */}
          <ol className="relative flex flex-col gap-3 border-l border-beige/40 pl-5">
            {it.milestones.map((m) => (
              <li key={m} className="relative text-[14.5px] leading-[1.5] text-[#c9d3cd]">
                <span className="absolute top-1.5 -left-[25px] size-2.5 rounded-full bg-beige" />
                {m}
              </li>
            ))}
          </ol>

          {/* Sponsor nights */}
          <label className="flex flex-col gap-3 rounded-[20px] bg-cream p-5 text-primary">
            <span className="flex items-baseline justify-between">
              <span className="text-[15px] font-medium">Sponsor nights of safe housing</span>
              <span className="font-display text-[28px] leading-none">{usd(nights * perNight)}</span>
            </span>
            <input type="range" min={7} max={180} step={1} value={nights} onChange={(e) => setNights(Number(e.target.value))} className="w-full accent-[#012a1c]" aria-label="Nights" />
            <span className="text-[14px] text-neutral-600">
              Covers <span className="font-semibold text-primary">{nights} nights</span> of a bed, case management, and onboarding.
            </span>
          </label>
          <Cta label="Sponsor a stay" dark />
        </div>
      </div>
    </article>
  );
}

/* ───────────── Section ───────────── */

export function EndowmentShowcase() {
  const jump = [
    { id: "e-masjid", label: "Infrastructure", icon: "home" },
    { id: "e-education", label: "Education", icon: "book" },
    { id: "e-housing", label: "Social services", icon: "users" },
  ];
  return (
    <section id="endowments" className="scroll-mt-20 py-20 md:py-28">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Active endowments"
            eyebrowTone="soft"
            title="Three initiatives. Pick the one that moves you."
            description="Each endowment is sized to cover an initiative's yearly overhead. Explore what each one needs, and see exactly what your gift does."
            descriptionClassName="max-w-[620px]"
          />
          <nav className="flex flex-wrap gap-2">
            {jump.map((j) => (
              <a key={j.id} href={`#${j.id}`} className="flex items-center gap-2 rounded-full border border-[#e3d9c4] bg-white px-4 py-2 text-[14px] font-medium text-primary transition hover:border-beige-btn">
                <Icon name={j.icon} size={15} className="text-beige-ink" />
                {j.label}
              </a>
            ))}
          </nav>
        </div>

        <MasjidBlock />
        <EducationBlock />
        <HousingBlock />

        <p className="text-[12px] text-neutral-500">
          *Illustrative: assumes a {Math.round(giftModel.rate * 100)}% annual return paid out. Per-student, per-night and room figures are examples. Returns are not guaranteed.
        </p>
      </Container>
    </section>
  );
}
