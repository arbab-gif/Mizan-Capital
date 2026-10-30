"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nonprofitPitch as n } from "@/data/community";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Icon } from "./Icon";

const usd = (v: number, digits = 0) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: digits, maximumFractionDigits: digits }).format(v);

type Entry = { key: number; who: string; where: string; amount: number };

/** Simulated live feed: a new contribution arrives every few seconds (paused for reduced motion). */
function useLiveFeed() {
  const [entries, setEntries] = useState<Entry[]>(() => n.live.feed.slice(0, 4).map((e, i) => ({ ...e, key: i })));
  const [total, setTotal] = useState(n.live.start);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 4;
    const id = window.setInterval(() => {
      const next = n.live.feed[i % n.live.feed.length];
      const entry = { ...next, key: i };
      i += 1;
      setEntries((list) => [entry, ...list].slice(0, 4));
      setTotal((t) => Math.min(t + next.amount, n.live.goal));
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return { entries, total };
}

function LivePanel() {
  const { entries, total } = useLiveFeed();
  const pct = Math.round((total / n.live.goal) * 100);
  return (
    <div className="flex flex-col gap-4 rounded-[20px] bg-primary p-5 text-cream shadow-[0_30px_60px_-35px_rgba(1,42,28,0.8)]">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-[13px] font-semibold">
          <span className="relative flex size-2.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#7fd1a3] opacity-70" />
            <span className="relative size-2.5 rounded-full bg-[#7fd1a3]" />
          </span>
          Live · Dayton Food Pantry
        </p>
        <span className="text-[12px] text-[#9fb0a6]">This month</span>
      </div>
      <div>
        <p className="font-display text-[40px] leading-none tabular-nums" aria-live="polite">
          {usd(total, 2)} <span className="text-[16px] text-cream/60">of {usd(n.live.goal)}</span>
        </p>
        <div className="mt-3 h-2 rounded-full bg-white/15">
          <div className="h-full rounded-full bg-beige transition-[width] duration-700" style={{ width: `${pct}%` }} />
        </div>
        <p className="mt-1.5 text-[12px] text-[#c9d3cd]">{pct}% of this month&apos;s overhead covered</p>
      </div>
      <ul className="flex flex-col gap-2">
        {entries.map((e, i) => (
          <li
            key={e.key}
            className={`flex items-center justify-between gap-3 rounded-[12px] bg-white/[0.07] px-3.5 py-2.5 text-[13px] ${i === 0 ? "animate-[fadeUp_0.5s_ease-out]" : ""}`}
          >
            <span className="min-w-0">
              <span className="block truncate font-semibold text-white">{e.who}</span>
              <span className="block truncate text-[12px] text-[#9fb0a6]">{e.where}</span>
            </span>
            <span className="shrink-0 font-semibold text-beige tabular-nums">+{usd(e.amount, 2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EventsPanel() {
  return (
    <div className="flex flex-col gap-3 rounded-[20px] bg-white p-5 shadow-[0_30px_60px_-40px_rgba(48,43,35,0.6)] ring-1 ring-black/5">
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-semibold text-primary">Upcoming near you</p>
        <span className="rounded-full bg-primary px-3 py-1.5 text-[12px] font-semibold text-cream">+ Post an event</span>
      </div>
      {n.events.items.map((e) => (
        <div key={e.title} className="flex items-center gap-3.5 rounded-[14px] bg-cream-light p-3">
          <span className="flex w-12 shrink-0 flex-col items-center rounded-[10px] bg-white py-1.5 ring-1 ring-black/5">
            <span className="text-[10px] font-semibold tracking-wide text-beige-ink uppercase">{e.month}</span>
            <span className="font-display text-[20px] leading-none text-primary">{e.day}</span>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[14px] font-semibold text-primary">{e.title}</span>
            <span className="block truncate text-[12px] text-neutral-500">{e.place}</span>
          </span>
          <span className="shrink-0 text-right text-[12px]">
            <span className="block font-semibold text-primary">{e.going} going</span>
            {e.volunteers && <span className="block text-beige-ink">Volunteers needed</span>}
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * Nonprofit pitch (client: explain how nonprofits announce new events, and show in real time
 * how each purchase is helping). Photo-led opener, then the two capabilities side by side.
 */
export function ForNonprofits() {
  return (
    <section id="nonprofits" className="scroll-mt-20 py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <div className="relative isolate overflow-hidden rounded-[28px] px-6 py-14 md:px-12 md:py-20">
          <Image
            src="/images/project-curriculum.png"
            alt="Children learning in a community Islamic school classroom"
            fill
            sizes="(min-width: 1280px) 1240px, 100vw"
            className="-z-20 object-cover object-[50%_40%]"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(1,42,28,0.9)_0%,rgba(1,42,28,0.72)_45%,rgba(1,42,28,0.15)_85%)]" />
          <div className="flex max-w-[620px] flex-col gap-5">
            <Eyebrow tone="light">{n.eyebrow}</Eyebrow>
            <h2 className="font-display text-[38px] leading-[1.1] tracking-[-0.01em] text-white md:text-[52px]">{n.title}</h2>
            <p className="text-[17px] leading-[1.65] text-cream/85">{n.intro}</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex min-w-0 flex-col gap-6 rounded-[24px] bg-beige-bg p-6 md:p-9">
            <div className="flex flex-col gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-white text-beige-ink">
                <Icon name="calendar" size={20} />
              </span>
              <h3 className="font-display text-[28px] leading-tight text-primary">{n.events.title}</h3>
              <p className="text-[16px] leading-[1.6] text-neutral-700">{n.events.body}</p>
            </div>
            <EventsPanel />
          </article>

          <article className="flex min-w-0 flex-col gap-6 rounded-[24px] bg-[#eaf1ec] p-6 md:p-9">
            <div className="flex flex-col gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-white text-primary">
                <Icon name="bolt" size={20} />
              </span>
              <h3 className="font-display text-[28px] leading-tight text-primary">{n.live.title}</h3>
              <p className="text-[16px] leading-[1.6] text-neutral-700">{n.live.body}</p>
            </div>
            <LivePanel />
          </article>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[13px] text-neutral-500">App screens are design mockups; names and amounts are illustrative.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[8px] bg-primary px-6 py-3.5 text-[16px] font-medium text-cream transition hover:bg-forest"
          >
            Apply as a nonprofit partner
            <Icon name="arrow" size={18} />
          </a>
        </div>
      </Container>
    </section>
  );
}
