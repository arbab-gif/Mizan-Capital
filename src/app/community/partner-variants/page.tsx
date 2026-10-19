import type { Metadata } from "next";
import { PartnerBusinesses } from "@/components/community/PartnerBusinesses";
import {
  PartnersDirectoryBoard,
  PartnersFloorPlan,
  PartnersMap,
  PartnersMosaic,
  PartnersStorefronts,
} from "@/components/community/PartnerVariants";

export const metadata: Metadata = {
  title: "Partner Businesses — Variations (internal review)",
  robots: { index: false, follow: false },
};

const VARIANTS = [
  { id: "current", label: "Current (live) · Photo bento", Component: PartnerBusinesses },
  { id: "board", label: "Previous · Directory board", Component: PartnersDirectoryBoard },
  { id: "a", label: "Variation A · Storefront street", Component: PartnersStorefronts },
  { id: "b", label: "Variation B · Floor plan", Component: PartnersFloorPlan },
  { id: "c", label: "Variation C · Neighborhood map", Component: PartnersMap },
  { id: "d", label: "Variation D · Category mosaic", Component: PartnersMosaic },
];

/** Internal review page: every Partner Businesses treatment, stacked with labels. */
export default function PartnerVariantsPage() {
  return (
    <main>
      <header className="sticky top-0 z-40 flex flex-wrap items-center gap-2 border-b border-neutral-200 bg-white/90 px-5 py-3 backdrop-blur">
        <span className="mr-2 text-[14px] font-medium text-primary">Partner Businesses variations:</span>
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
