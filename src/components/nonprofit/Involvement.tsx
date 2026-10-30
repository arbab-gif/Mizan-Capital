"use client";

import { useState } from "react";
import { involvement, involvementRoles } from "@/data/nonprofit";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { Icon } from "@/components/community/Icon";

/**
 * "Bring more than capital.": pick who you are on the left; the panel on the right shows what
 * that role actually involves, the time it takes, and a direct way to sign up.
 */
export function Involvement() {
  const [id, setId] = useState(involvementRoles[0].id);
  const r = involvementRoles.find((x) => x.id === id)!;

  return (
    <section id="involved" className="scroll-mt-20 py-20 md:py-28">
      <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* Left: heading + role picker */}
        <div className="flex min-w-0 flex-col gap-8">
          <div className="flex flex-col gap-5">
            <Eyebrow tone="soft">Get involved</Eyebrow>
            <h2 className="font-display text-[40px] leading-[1.08] tracking-[-0.01em] text-primary md:text-[56px]">
              Bring more <span className="text-beige-ink italic">than capital.</span>
            </h2>
            <p className="max-w-[520px] text-[17px] leading-[1.65] text-neutral-600">{involvement.description}</p>
          </div>

          <div role="tablist" aria-label="How you can help" className="flex flex-col gap-2">
            <p className="mb-1 text-[12px] font-semibold tracking-[0.12em] text-neutral-500 uppercase">I am…</p>
            {involvementRoles.map((x) => {
              const on = x.id === id;
              return (
                <button
                  key={x.id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setId(x.id)}
                  className={`group flex items-center gap-4 rounded-[16px] border px-4 py-3.5 text-left transition ${
                    on ? "border-primary bg-primary text-cream" : "border-[#e8dfcc] bg-white text-primary hover:border-beige hover:bg-[#fcfaf6]"
                  }`}
                >
                  <span
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full transition ${
                      on ? "bg-beige-btn text-white" : "bg-beige-bg text-beige-ink"
                    }`}
                  >
                    <Icon name={x.icon} size={19} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[17px] font-semibold">{x.title}</span>
                    <span className={`block truncate text-[14px] ${on ? "text-cream/70" : "text-neutral-500"}`}>{x.body}</span>
                  </span>
                  <Icon name="arrow" size={18} className={`shrink-0 transition ${on ? "text-beige" : "text-neutral-300 group-hover:translate-x-0.5 group-hover:text-beige-ink"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: what this role involves */}
        <div className="relative isolate overflow-hidden rounded-[28px] bg-primary p-7 text-cream shadow-[0_40px_80px_-45px_rgba(1,42,28,0.9)] md:p-10 lg:sticky lg:top-24">
          <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.07] [mask-image:radial-gradient(ellipse_at_top_right,black_15%,transparent_65%)]" style={{ backgroundImage: STAR_PATTERN }} />
          <div aria-hidden className="absolute -top-24 -right-24 -z-10 size-[320px] rounded-full bg-beige/15 blur-[80px]" />

          <div key={r.id} className="flex animate-[fadeUp_0.4s_ease-out] flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-full bg-beige-btn text-white">
                <Icon name={r.icon} size={26} />
              </span>
              <p className="text-[13px] font-semibold tracking-[0.12em] text-beige uppercase">For {r.title.toLowerCase()}</p>
            </div>

            <h3 className="font-display text-[32px] leading-[1.15] text-white md:text-[40px]">{r.headline}</h3>

            <div>
              <p className="mb-4 text-[12px] font-semibold tracking-[0.12em] text-cream/60 uppercase">How you&apos;d help</p>
              <ol className="flex flex-col gap-3">
                {r.tasks.map((t, i) => (
                  <li key={t} className="flex items-center gap-4 rounded-[14px] bg-white/[0.06] px-4 py-3.5 ring-1 ring-white/10">
                    <span className="font-display text-[20px] leading-none text-beige">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[16px] text-white">{t}</span>
                  </li>
                ))}
              </ol>
            </div>

            <dl className="grid grid-cols-2 gap-3">
              <div className="rounded-[14px] border border-white/10 p-4">
                <dt className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.1em] text-cream/60 uppercase">
                  <Icon name="calendar" size={14} className="text-beige" />
                  Time
                </dt>
                <dd className="mt-1 text-[16px] font-medium text-white">{r.commitment}</dd>
              </div>
              <div className="rounded-[14px] border border-white/10 p-4">
                <dt className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.1em] text-cream/60 uppercase">
                  <Icon name="pin" size={14} className="text-beige" />
                  Where
                </dt>
                <dd className="mt-1 text-[16px] font-medium text-white">{r.where}</dd>
              </div>
            </dl>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[8px] bg-cream px-6 py-3.5 text-[16px] font-semibold text-primary transition hover:bg-white"
              >
                {r.cta}
                <Icon name="arrow" size={18} />
              </a>
              <span className="text-[14px] text-cream/70">We&apos;ll reach out within a few days.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
