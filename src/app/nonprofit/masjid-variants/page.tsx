import type { Metadata } from "next";
import { MasjidRoadmap } from "@/components/nonprofit/EndowmentTrio";
import { MasjidArch, MasjidBoard, MasjidSheet, MasjidTimeline } from "@/components/nonprofit/MasjidVariants";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "ISGD Masjid Renovation — Variations (internal review)",
  robots: { index: false, follow: false },
};

const VARIANTS = [
  { id: "a", label: "Variation A · Photo with roadmap (current)", Component: MasjidRoadmap },
  { id: "b", label: "Variation B · Split with vertical timeline", Component: MasjidTimeline },
  { id: "c", label: "Variation C · Arch frame + scope cards", Component: MasjidArch },
  { id: "d", label: "Variation D · Dark status board", Component: MasjidBoard },
  { id: "e", label: "Variation E · Project sheet with stamp", Component: MasjidSheet },
];

/** Internal review page: ISGD Masjid Renovation card treatments, stacked with labels. */
export default function MasjidVariantsPage() {
  return (
    <main className="overflow-x-hidden">
      <header className="sticky top-0 z-40 flex flex-wrap items-center gap-2 border-b border-neutral-200 bg-white/90 px-5 py-3 backdrop-blur">
        <span className="mr-2 text-[14px] font-medium text-primary">Masjid Renovation variations:</span>
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
          <div className="py-16">
            <Container>
              <Component />
            </Container>
          </div>
        </div>
      ))}
    </main>
  );
}
