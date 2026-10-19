import type { Metadata } from "next";
import { FundingModel } from "@/components/nonprofit/FundingModel";
import {
  EndowmentChart,
  EndowmentCompare,
  EndowmentFlow,
  EndowmentStepper,
} from "@/components/nonprofit/EndowmentVariants";

export const metadata: Metadata = {
  title: "The Endowment Model — Variations (internal review)",
  robots: { index: false, follow: false },
};

const VARIANTS = [
  { id: "current", label: "Current (live) · Loop", Component: FundingModel },
  { id: "a", label: "Variation A · Horizontal stepper", Component: EndowmentStepper },
  { id: "b", label: "Variation B · Money flow", Component: EndowmentFlow },
  { id: "c", label: "Variation C · Ten-year chart", Component: EndowmentChart },
  { id: "d", label: "Variation D · One-time gift vs endowment", Component: EndowmentCompare },
];

/** Internal review page: every "endowment model" treatment, stacked with labels. */
export default function EndowmentVariantsPage() {
  return (
    <main>
      <header className="sticky top-0 z-40 flex flex-wrap items-center gap-2 border-b border-neutral-200 bg-white/90 px-5 py-3 backdrop-blur">
        <span className="mr-2 text-[14px] font-medium text-primary">Endowment model variations:</span>
        {VARIANTS.map((v) => (
          <a key={v.id} href={`#${v.id}`} className="rounded-full border border-neutral-300 px-3 py-1 text-[13px] text-primary hover:bg-cream-light">
            {v.label.split(" · ")[0]}
          </a>
        ))}
      </header>
      {VARIANTS.map(({ id, label, Component }) => (
        <div key={id} id={id} className="scroll-mt-14 border-b-8 border-neutral-100">
          <p className="bg-primary px-5 py-2 text-[13px] font-medium tracking-[0.1em] text-cream uppercase">{label}</p>
          <Component />
        </div>
      ))}
    </main>
  );
}
