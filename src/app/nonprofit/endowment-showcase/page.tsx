import type { Metadata } from "next";
import { ActiveEndowments } from "@/components/nonprofit/ActiveEndowments";
import { EndowChapters, EndowLegacy, EndowPanels, EndowStage } from "@/components/nonprofit/EndowmentVariantsV2";

export const metadata: Metadata = {
  title: "Active Endowments — Variations (internal review)",
  robots: { index: false, follow: false },
};

const VARIANTS = [
  { id: "a", label: "Variation A · Stage with tabs", Component: EndowStage },
  { id: "b", label: "Variation B · Expanding photo panels", Component: EndowPanels },
  { id: "c", label: "Variation C · Editorial chapters", Component: EndowChapters },
  { id: "d", label: "Variation D · Gift that keeps giving (dark)", Component: EndowLegacy },
  { id: "live", label: "Current (live)", Component: ActiveEndowments },
];

/** Internal review page: Active Endowments treatments, stacked with labels. */
export default function EndowmentShowcasePage() {
  return (
    <main className="overflow-x-hidden">
      <header className="sticky top-0 z-40 flex flex-wrap items-center gap-2 border-b border-neutral-200 bg-white/90 px-5 py-3 backdrop-blur">
        <span className="mr-2 text-[14px] font-medium text-primary">Active Endowments variations:</span>
        {VARIANTS.map((v) => (
          <a key={v.id} href={`#${v.id}`} className="rounded-full border border-neutral-300 px-3 py-1 text-[13px] text-primary hover:bg-cream-light">
            {v.label.split(" · ")[0]}
          </a>
        ))}
      </header>
      {VARIANTS.map(({ id, label, Component }) => (
        <div key={id} className="border-b-8 border-neutral-100">
          <span id={id} className="block scroll-mt-14" />
          <p className="bg-primary px-5 py-2 text-[13px] font-medium tracking-[0.1em] text-cream uppercase">{label}</p>
          <Component />
        </div>
      ))}
    </main>
  );
}
