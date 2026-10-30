import type { Metadata } from "next";
import { Involvement } from "@/components/nonprofit/Involvement";
import { InvolveForm, InvolvePanels, InvolveSteps } from "@/components/nonprofit/InvolveVariants";

export const metadata: Metadata = {
  title: "Get Involved — Variations (internal review)",
  robots: { index: false, follow: false },
};

const VARIANTS = [
  { id: "a", label: "Variation A (live) · Role picker", Component: Involvement },
  { id: "b", label: "Variation B · Sign-up form", Component: InvolveForm },
  { id: "c", label: "Variation C · Expanding panels", Component: InvolvePanels },
  { id: "d", label: "Variation D · Three steps", Component: InvolveSteps },
];

/** Internal review page: every "Get involved" treatment, stacked with labels. */
export default function InvolveVariantsPage() {
  return (
    <main className="overflow-x-hidden">
      <header className="sticky top-0 z-40 flex flex-wrap items-center gap-2 border-b border-neutral-200 bg-white/90 px-5 py-3 backdrop-blur">
        <span className="mr-2 text-[14px] font-medium text-primary">Get involved variations:</span>
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
