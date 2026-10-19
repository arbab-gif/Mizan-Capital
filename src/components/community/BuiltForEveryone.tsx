"use client";

import { useEffect, useState } from "react";
import { audiences, type AudienceId } from "@/data/community";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BusinessScreen, DiscoverScreen, NonprofitScreen } from "./AppScreens";
import { Icon } from "./Icon";
import { PhoneFrame } from "./PhoneFrame";

const SCREENS: Record<AudienceId, React.ReactNode> = {
  customers: <DiscoverScreen />,
  business: <BusinessScreen />,
  nonprofits: <NonprofitScreen />,
};

const CTA: Record<AudienceId, { label: string; href: string }> = {
  customers: { label: "Join the waitlist", href: "#waitlist" },
  business: { label: "Explore a business partnership", href: "#partners" },
  nonprofits: { label: "Apply as a nonprofit partner", href: "#contact" },
};

type Audience = (typeof audiences)[number];

function LearnMoreModal({ audience, onClose }: { audience: Audience; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const cta = CTA[audience.id];
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`How we help ${audience.tab.toLowerCase()}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative max-h-[90vh] w-full max-w-[680px] overflow-y-auto rounded-[24px] bg-white p-7 shadow-2xl md:p-10" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 flex size-10 items-center justify-center rounded-full bg-cream-light text-primary transition hover:bg-cream"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <p className="text-[12px] font-medium tracking-[0.14em] text-gold uppercase">For {audience.tab.toLowerCase()}</p>
        <h3 className="mt-2 pr-10 font-display text-[34px] leading-[1.15] text-primary">{audience.headline}</h3>
        <p className="mt-3 text-[17px] leading-[1.6] text-neutral-600">{audience.learnMore.intro}</p>

        <ol className="mt-7 flex flex-col gap-5">
          {audience.learnMore.sections.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/50 font-display text-[15px] text-gold">
                {i + 1}
              </span>
              <div>
                <p className="font-display text-[21px] leading-tight text-primary">{s.title}</p>
                <p className="mt-1.5 text-[15px] leading-[1.6] text-neutral-600">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <a
          href={cta.href}
          onClick={onClose}
          className="mt-8 inline-flex items-center gap-2 rounded-[8px] bg-primary px-6 py-3 text-[16px] font-medium text-cream transition hover:bg-forest"
        >
          {cta.label}
          <Icon name="arrow" size={18} />
        </a>
      </div>
    </div>
  );
}

/** "Built for everyone": audience tabs, each with its own app screen, benefits, and a Learn-more pop-up. */
export function BuiltForEveryone() {
  const [activeId, setActiveId] = useState<AudienceId>("customers");
  const [modalOpen, setModalOpen] = useState(false);
  const a = audiences.find((x) => x.id === activeId)!;

  return (
    <section className="py-24 md:py-28">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Built for everyone"
          title="One platform. Benefits for the whole community."
          description="Customers, business owners, and nonprofits each get something different, and every purchase connects them."
          descriptionClassName="max-w-[640px]"
        />

        <div role="tablist" aria-label="Audience" className="flex flex-wrap justify-center gap-1 rounded-full bg-cream-light p-1.5 ring-1 ring-black/5">
          {audiences.map((x) => {
            const on = x.id === activeId;
            return (
              <button
                key={x.id}
                role="tab"
                aria-selected={on}
                onClick={() => setActiveId(x.id)}
                className={`rounded-full px-5 py-2.5 text-[15px] font-medium transition md:px-7 ${
                  on ? "bg-primary text-cream shadow" : "text-primary hover:bg-white"
                }`}
              >
                {x.tab}
              </button>
            );
          })}
        </div>

        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Phone on a soft panel */}
          <div className="relative flex justify-center overflow-hidden rounded-[28px] bg-cream-light py-12">
            <div aria-hidden className="absolute top-1/2 left-1/2 size-[380px] -translate-1/2 rounded-full bg-gold/15 blur-[90px]" />
            <div key={a.id} className="relative animate-[fadeUp_0.45s_ease-out]">
              <PhoneFrame>{SCREENS[a.id]}</PhoneFrame>
            </div>
          </div>

          <div key={`copy-${a.id}`} className="flex animate-[fadeUp_0.45s_ease-out] flex-col gap-6">
            <div>
              <p className="text-[13px] font-medium tracking-[0.14em] text-gold uppercase">For {a.tab.toLowerCase()}</p>
              <h3 className="mt-2 font-display text-[34px] leading-[1.15] text-primary md:text-[40px]">{a.headline}</h3>
              <p className="mt-3 text-[17px] leading-[1.6] text-neutral-600">{a.summary}</p>
            </div>

            <ul className="flex flex-col gap-3">
              {a.points.map((p) => (
                <li key={p.title} className="flex gap-4 rounded-[16px] border border-neutral-200 bg-white p-4 transition hover:border-gold/40">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                    <Icon name="check" size={16} />
                  </span>
                  <div>
                    <p className="text-[16px] font-medium text-primary">{p.title}</p>
                    <p className="mt-0.5 text-[15px] leading-[1.5] text-neutral-600">{p.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="group inline-flex items-center gap-2 self-start rounded-[8px] border border-primary px-6 py-3 text-[16px] font-medium text-primary transition hover:bg-primary hover:text-cream"
            >
              Learn how we help {a.tab.toLowerCase()}
              <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <p className="text-[13px] text-neutral-500">App screens are design mockups; names and figures are illustrative.</p>
          </div>
        </div>
      </Container>

      {modalOpen && <LearnMoreModal audience={a} onClose={() => setModalOpen(false)} />}
    </section>
  );
}
