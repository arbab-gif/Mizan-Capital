import type { Metadata } from "next";
import { Vision } from "@/components/nonprofit/VisionInvolve";
import { VisionFromTo, VisionPhotoPillars, VisionRings } from "@/components/nonprofit/VisionVariants";

export const metadata: Metadata = {
  title: "The Bigger Vision — Variations (internal review)",
  robots: { index: false, follow: false },
};

const VARIANTS = [
  { id: "a", label: "Variation A (live) · Roadmap + pillar status", Component: Vision },
  { id: "b", label: "Variation B · Photo pillars", Component: VisionPhotoPillars },
  { id: "c", label: "Variation C · Growth rings", Component: VisionRings },
  { id: "d", label: "Variation D · From today to tomorrow", Component: VisionFromTo },
];

/** Internal review page: every "bigger vision" treatment, stacked with labels. */
export default function VisionVariantsPage() {
  return (
    <main className="overflow-x-hidden">
      <header className="sticky top-0 z-40 flex flex-wrap items-center gap-2 border-b border-neutral-200 bg-white/90 px-5 py-3 backdrop-blur">
        <span className="mr-2 text-[14px] font-medium text-primary">Bigger vision variations:</span>
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
