"use client";

/**
 * "Get involved": alternative treatments (B–D) for review beside the live role picker (A).
 * Preview at /nonprofit/involve-variants. Role details are DRAFT copy.
 * TODO (B): connect the form to the email list / CRM.
 */
import { useState } from "react";
import { involvement, involvementRoles } from "@/data/nonprofit";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { Icon } from "@/components/community/Icon";

function Heading({ light = false, center = false }: { light?: boolean; center?: boolean }) {
  return (
    <div className={`flex flex-col gap-5 ${center ? "items-center text-center" : ""}`}>
      <Eyebrow tone={light ? "light" : "soft"}>Get involved</Eyebrow>
      <h2 className={`font-display text-[40px] leading-[1.08] tracking-[-0.01em] md:text-[56px] ${light ? "text-white" : "text-primary"}`}>
        Bring more <span className={`italic ${light ? "text-beige" : "text-beige-ink"}`}>than capital.</span>
      </h2>
      <p className={`max-w-[560px] text-[17px] leading-[1.65] ${light ? "text-[#c9d3cd]" : "text-neutral-600"}`}>{involvement.description}</p>
    </div>
  );
}

/* ───────────── B · Sign-up form ───────────── */

export function InvolveForm() {
  const [roles, setRoles] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const toggle = (id: string) => setRoles((r) => (r.includes(id) ? r.filter((x) => x !== id) : [...r, id]));

  return (
    <section className="bg-beige-bg py-20 md:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex min-w-0 flex-col gap-8">
          <Heading />
          <ul className="flex flex-col gap-4">
            {[
              { icon: "users", t: "Tell us who you are", d: "Pick every role that fits. Most people wear more than one hat." },
              { icon: "mail", t: "We’ll match you", d: "Our team connects you with the initiative that needs you most." },
              { icon: "heart", t: "Make it last", d: "Your time and skills help build institutions that serve for generations." },
            ].map((s) => (
              <li key={s.t} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-beige-ink">
                  <Icon name={s.icon} size={20} />
                </span>
                <div>
                  <p className="text-[17px] font-semibold text-primary">{s.t}</p>
                  <p className="text-[15px] leading-[1.55] text-neutral-600">{s.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_40px_80px_-50px_rgba(48,43,35,0.6)] md:p-9">
          {done ? (
            <div role="status" className="flex flex-col items-center gap-4 py-12 text-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-primary text-beige">
                <Icon name="check" size={30} />
              </span>
              <p className="font-display text-[30px] text-primary">Jazakum Allahu khairan.</p>
              <p className="max-w-[360px] text-[16px] text-neutral-600">We&apos;ve got your details and will reach out to find the right role for you.</p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <div>
                <p className="font-display text-[28px] text-primary">How would you like to help?</p>
                <p className="mt-1 text-[15px] text-neutral-500">Choose one or more.</p>
              </div>
              <div className="flex flex-wrap gap-2.5" role="group" aria-label="Roles">
                {involvementRoles.map((r) => {
                  const on = roles.includes(r.id);
                  return (
                    <button
                      key={r.id}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggle(r.id)}
                      className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-[15px] font-medium transition ${
                        on ? "border-primary bg-primary text-cream" : "border-[#e3d9c4] bg-white text-primary hover:border-beige-btn"
                      }`}
                    >
                      <Icon name={on ? "check" : r.icon} size={16} className={on ? "text-beige" : "text-beige-ink"} />
                      {r.title}
                    </button>
                  );
                })}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-neutral-600">
                  Full name
                  <input required className="h-12 rounded-[10px] border border-[#e3d9c4] px-4 text-[16px] font-normal text-primary outline-none focus:border-beige-btn focus:ring-2 focus:ring-beige/40" />
                </label>
                <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-neutral-600">
                  Email
                  <input required type="email" className="h-12 rounded-[10px] border border-[#e3d9c4] px-4 text-[16px] font-normal text-primary outline-none focus:border-beige-btn focus:ring-2 focus:ring-beige/40" />
                </label>
              </div>
              <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-neutral-600">
                <span>
                  Anything we should know? <span className="font-normal text-neutral-400">(optional)</span>
                </span>
                <textarea rows={3} className="rounded-[10px] border border-[#e3d9c4] px-4 py-3 text-[16px] font-normal text-primary outline-none focus:border-beige-btn focus:ring-2 focus:ring-beige/40" />
              </label>
              <button
                type="submit"
                disabled={roles.length === 0}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-[10px] bg-primary px-6 text-[16px] font-semibold text-cream transition hover:bg-forest disabled:cursor-not-allowed disabled:opacity-40"
              >
                {roles.length ? "Count me in" : "Choose a role to continue"}
                <Icon name="arrow" size={18} />
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

/* ───────────── C · Expanding panels ───────────── */

export function InvolvePanels() {
  const [id, setId] = useState(involvementRoles[0].id);
  return (
    <section className="relative isolate overflow-hidden bg-primary py-20 md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06]" style={{ backgroundImage: STAR_PATTERN }} />
      <Container className="flex flex-col gap-12">
        <Heading light center />
        <div className="flex flex-col gap-3 lg:h-[460px] lg:flex-row">
          {involvementRoles.map((r, i) => {
            const on = r.id === id;
            return (
              <button
                key={r.id}
                type="button"
                aria-expanded={on}
                onClick={() => setId(r.id)}
                onMouseEnter={() => setId(r.id)}
                className={`relative flex min-w-0 flex-col overflow-hidden rounded-[24px] p-6 text-left transition-all duration-500 ease-out ${
                  on ? "bg-cream text-primary lg:flex-[3.2]" : "bg-white/[0.06] text-cream ring-1 ring-white/10 hover:bg-white/10 lg:flex-1"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className={`flex size-12 shrink-0 items-center justify-center rounded-full ${on ? "bg-primary text-beige" : "bg-beige-btn text-white"}`}>
                    <Icon name={r.icon} size={22} />
                  </span>
                  <span className={`font-display text-[22px] ${on ? "text-beige-ink" : "text-cream/40"}`}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className={`mt-6 font-display text-[26px] leading-tight ${on ? "" : "lg:mt-auto"}`}>{r.title}</h3>
                {on ? (
                  <div className="mt-3 flex animate-[fadeUp_0.4s_ease-out] flex-col gap-5">
                    <p className="text-[16px] leading-[1.6] text-neutral-700">{r.headline}</p>
                    <ul className="flex flex-col gap-2.5">
                      {r.tasks.map((t) => (
                        <li key={t} className="flex items-center gap-3 text-[15px] text-primary">
                          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-beige-btn text-white">
                            <Icon name="check" size={11} />
                          </span>
                          {t}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-1 flex flex-wrap items-center gap-3 text-[13px] text-neutral-600">
                      <span className="rounded-full bg-beige-bg px-3 py-1">{r.commitment}</span>
                      <span className="rounded-full bg-beige-bg px-3 py-1">{r.where}</span>
                    </span>
                    <span className="inline-flex w-fit items-center gap-2 rounded-[8px] bg-primary px-5 py-3 text-[15px] font-semibold text-cream">
                      {r.cta}
                      <Icon name="arrow" size={17} />
                    </span>
                  </div>
                ) : (
                  <p className="mt-2 hidden text-[13px] text-cream/60 lg:block">{r.commitment}</p>
                )}
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ───────────── D · Three steps ───────────── */

const STEPS = [
  { icon: "users", t: "Choose your role", d: "Educator, business owner, contractor, nonprofit leader, or community member." },
  { icon: "mail", t: "Talk with our team", d: "A short call to understand your skills, time, and what you care about." },
  { icon: "heart", t: "Start making impact", d: "Join an initiative and see the results in our regular project updates." },
];

export function InvolveSteps() {
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <Heading center />

        <ol className="grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.t} className="relative flex flex-col items-center text-center">
              <span className="font-display text-[30px] leading-none text-[#a88b5d]">{String(i + 1).padStart(2, "0")}</span>
              <span className="mt-3 flex size-[68px] items-center justify-center rounded-full bg-beige-bg text-beige-ink">
                <Icon name={s.icon} size={28} />
              </span>
              <h3 className="mt-4 font-display text-[24px] text-primary">{s.t}</h3>
              <p className="mt-1.5 max-w-[300px] text-[15px] leading-[1.55] text-neutral-600">{s.d}</p>
              {i < STEPS.length - 1 && (
                <span aria-hidden className="absolute top-[70px] left-[calc(50%+46px)] hidden w-[calc(100%-92px+24px)] items-center text-primary md:flex">
                  <span className="h-[1.5px] flex-1 bg-current" />
                  <svg width="9" height="12" viewBox="0 0 9 12" fill="none" className="-ml-px shrink-0">
                    <path d="M1 1l6.5 5L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {involvementRoles.map((r) => (
            <li key={r.id}>
              <a href="#contact" className="group flex h-full flex-col gap-3 rounded-[20px] border border-[#e8dfcc] bg-white p-5 transition hover:-translate-y-1 hover:border-beige hover:shadow-[0_20px_40px_-28px_rgba(48,43,35,0.6)]">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary text-beige">
                  <Icon name={r.icon} size={20} />
                </span>
                <span className="text-[17px] font-semibold text-primary">{r.title}</span>
                <span className="text-[14px] leading-[1.5] text-neutral-600">{r.body}</span>
                <span className="mt-auto flex items-center gap-1.5 pt-2 text-[14px] font-semibold text-beige-ink">
                  {r.cta}
                  <Icon name="arrow" size={15} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="relative isolate flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[24px] bg-primary p-8 md:flex-row md:items-center md:p-10">
          <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.07]" style={{ backgroundImage: STAR_PATTERN }} />
          <div>
            <p className="font-display text-[30px] leading-tight text-white md:text-[36px]">Not sure where you fit?</p>
            <p className="mt-1 text-[16px] text-[#c9d3cd]">Tell us what you bring and we&apos;ll find the right place for it.</p>
          </div>
          <a href="#contact" className="inline-flex shrink-0 items-center gap-2 rounded-[8px] bg-cream px-6 py-3.5 text-[16px] font-semibold text-primary transition hover:bg-white">
            Help build the mission
            <Icon name="arrow" size={18} />
          </a>
        </div>
      </Container>
    </section>
  );
}
