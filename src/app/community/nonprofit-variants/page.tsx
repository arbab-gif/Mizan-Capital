import type { Metadata } from "next";
import { NonprofitBento, NonprofitColumns, NonprofitDashboard, NonprofitPhotoPanel, NonprofitStatement, NonprofitTabs } from "@/components/community/NonprofitVariants";

export const metadata: Metadata = {
  title: "For Non-profits — Variations (internal review)",
  robots: { index: false, follow: false },
};

const VARIANTS = [
  { id: "f", label: "Variation F · Photo + feature columns (reference)", Component: NonprofitColumns },
  { id: "e", label: "Variation E · Bento cards (reference)", Component: NonprofitBento },
  { id: "a", label: "Variation A · Funding dashboard", Component: NonprofitDashboard },
  { id: "b", label: "Variation B · Photo panel with glass cards", Component: NonprofitPhotoPanel },
  { id: "c", label: "Variation C · Statement + numbers", Component: NonprofitStatement },
  { id: "d", label: "Variation D · Interactive tabs", Component: NonprofitTabs },
];

/** Internal review page: "For Non-profits" treatments. Context strips show the neighbouring sections' backgrounds. */
export default function NonprofitVariantsPage() {
  return (
    <main className="overflow-x-hidden">
      <header className="sticky top-0 z-40 flex flex-wrap items-center gap-2 border-b border-neutral-200 bg-white/90 px-5 py-3 backdrop-blur">
        <span className="mr-2 text-[14px] font-medium text-primary">For Non-profits variations:</span>
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
          {/* Above: Business owners section (dark green in Figma) */}
          <div className="h-16 bg-primary" aria-hidden />
          <Component />
          {/* Below: Shopping center section (white) */}
          <div className="h-16 border-t border-neutral-200 bg-white" aria-hidden />
        </div>
      ))}
    </main>
  );
}
