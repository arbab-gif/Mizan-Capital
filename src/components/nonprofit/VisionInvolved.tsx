"use client";

import Image from "next/image";
import { useState } from "react";
import { involvement, involvementRoles, vision, visionPillars, visionRoadmap } from "@/data/nonprofit";
import { Container } from "@/components/ui/Container";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { Icon } from "@/components/community/Icon";

/**
 * "The bigger vision" + "Get involved" as one section: first where the community is going
 * (roadmap and pillars), then, in a card growing out of the same band, how you help get there.
 */
export function VisionInvolved() {
  const [id, setId] = useState(involvementRoles[0].id);
  const r = involvementRoles.find((x) => x.id === id)!;

  return (
    <section id="involved" className="relative isolate scroll-mt-20 overflow-hidden bg-primary pt-20 md:pt-28">
      {/* Background: faint mosque arch + pattern in the green part; cream fills the bottom so the card "lands" */}
      <Image src="/images/cta-mosque.png" alt="" fill sizes="100vw" className="-z-30 object-cover object-[70%_top] opacity-30" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_75%_20%,rgba(1,42,28,0.35)_0%,rgba(1,42,28,0.94)_55%)]" />
      <div aria-hidden className="absolute inset-0 -z-20 opacity-[0.05]" style={{ backgroundImage: STAR_PATTERN }} />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-[260px] bg-white" />

      <Container className="flex flex-col gap-14">
        {/* 1 · Where we're going */}
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-5">
            <p className="w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[12px] font-semibold tracking-[0.14em] text-beige uppercase">
              The bigger vision
            </p>
            <h2 className="font-display text-[38px] leading-[1.08] tracking-[-0.01em] text-white md:text-[54px]">
              Today&apos;s projects.
              <br />
              <span className="text-beige italic">Tomorrow&apos;s community infrastructure.</span>
            </h2>
            <p className="max-w-[620px] text-[17px] leading-[1.65] text-[#c9d3cd]">{vision.description}</p>
          </div>

          <ol className="relative flex flex-col gap-5 border-l border-beige/40 pl-6">
            {visionRoadmap.map((s, i) => (
              <li key={s.stage} className="relative">
                <span
                  className={`absolute top-1 -left-[31px] size-3.5 rounded-full ${i === 0 ? "bg-beige shadow-[0_0_0_5px_rgba(214,194,158,0.2)]" : "border border-beige/70 bg-primary"}`}
                />
                <p className="text-[12px] font-semibold tracking-[0.12em] text-beige uppercase">{s.stage}</p>
                <p className="font-display text-[22px] leading-tight text-white">{s.title}</p>
                <p className="mt-0.5 text-[14.5px] leading-[1.55] text-[#c9d3cd]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {visionPillars.map((p) => {
            const live = p.status === "Active";
            return (
              <li key={p.title} className="flex flex-col gap-3 rounded-[18px] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm md:p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex size-10 items-center justify-center rounded-full bg-beige-btn text-white">
                    <Icon name={p.icon} size={18} />
                  </span>
                  <span
                    className={`flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10.5px] font-semibold tracking-[0.08em] uppercase ${
                      live ? "bg-[#7fd1a3]/15 text-[#a8e3c2]" : "bg-white/10 text-cream/70"
                    }`}
                  >
                    <span className={`size-1.5 rounded-full ${live ? "bg-[#7fd1a3]" : "bg-cream/50"}`} />
                    {p.status}
                  </span>
                </div>
                <p className="font-display text-[21px] leading-tight text-white">{p.title}</p>
                <p className="text-[13px] text-beige">{p.note}</p>
              </li>
            );
          })}
        </ul>

        {/* 2 · How you help get there */}
        <div className="mb-20 overflow-hidden rounded-[28px] bg-cream-light shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] md:mb-28">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col gap-5 border-b border-[#e8dfcc] p-7 md:p-10 lg:border-r lg:border-b-0">
              <p className="w-fit rounded-full bg-beige/20 px-3 py-1 text-[12px] font-semibold tracking-[0.12em] text-warm-ink uppercase">Get involved</p>
              <h3 className="font-display text-[34px] leading-[1.1] text-primary md:text-[42px]">
                Help build it.
                <br />
                <span className="text-beige-ink italic">Bring more than capital.</span>
              </h3>
              <p className="text-[16px] leading-[1.65] text-neutral-600">{involvement.description}</p>

              <div className="mt-2 flex flex-col gap-2" role="tablist" aria-label="I am…">
                <p className="text-[12px] font-semibold tracking-[0.12em] text-neutral-500 uppercase">I am…</p>
                <div className="flex flex-wrap gap-2">
                  {involvementRoles.map((x) => {
                    const on = x.id === id;
                    return (
                      <button
                        key={x.id}
                        role="tab"
                        aria-selected={on}
                        onClick={() => setId(x.id)}
                        className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-[14px] font-medium transition ${
                          on ? "border-primary bg-primary text-cream" : "border-[#e3d9c4] bg-white text-primary hover:border-beige-btn"
                        }`}
                      >
                        <Icon name={x.icon} size={15} className={on ? "text-beige" : "text-beige-ink"} />
                        {x.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div key={r.id} role="tabpanel" className="flex animate-[fadeUp_0.35s_ease-out] flex-col gap-6 p-7 md:p-10">
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-beige">
                  <Icon name={r.icon} size={22} />
                </span>
                <p className="font-display text-[26px] leading-tight text-primary md:text-[30px]">{r.headline}</p>
              </div>

              <ol className="grid gap-3 sm:grid-cols-3">
                {r.tasks.map((t, i) => (
                  <li key={t} className="flex flex-col gap-2 rounded-[16px] bg-white p-4 ring-1 ring-[#e8dfcc]">
                    <span className="font-display text-[20px] leading-none text-[#a88b5d]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[15px] leading-[1.45] text-primary">{t}</span>
                  </li>
                ))}
              </ol>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-neutral-600">
                <span className="flex items-center gap-2">
                  <Icon name="calendar" size={16} className="text-beige-ink" />
                  {r.commitment}
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="pin" size={16} className="text-beige-ink" />
                  {r.where}
                </span>
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-[#e8dfcc] pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-[8px] bg-primary px-6 py-3.5 text-[16px] font-semibold text-cream transition hover:bg-forest"
                >
                  {r.cta}
                  <Icon name="arrow" size={18} />
                </a>
                <span className="text-[14px] text-neutral-500">Not sure? Pick any role and we&apos;ll help you find the right fit.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
