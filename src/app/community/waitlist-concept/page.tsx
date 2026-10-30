import type { Metadata } from "next";
import { WaitlistLaunch } from "@/components/community/WaitlistLaunch";
import { WaitlistEquation, WaitlistFoundersPass, WaitlistJourney } from "@/components/community/WaitlistConcepts";
import { JoinCommunity } from "@/components/community/JoinCommunity";
import { WaitlistVision } from "@/components/community/WaitlistVision";

export const metadata: Metadata = {
  title: "Waitlist section — Concepts (internal review)",
  robots: { index: false, follow: false },
};

const CONCEPTS = [
  { id: "e", label: "Concept E · Shared vision (team reference)", Component: WaitlistVision },
  { id: "a", label: "Concept A · Sign-up + full two-stream diagram", Component: WaitlistLaunch },
  { id: "b", label: "Concept B · Your journey to the community fund", Component: WaitlistJourney },
  { id: "c", label: "Concept C · Two numbers, one fund", Component: WaitlistEquation },
  { id: "d", label: "Concept D · Founders pass (dark)", Component: WaitlistFoundersPass },
  { id: "live", label: "Current (live) · Join section", Component: JoinCommunity },
];

/** Internal review page: every waitlist concept (client's diagram idea), stacked with labels. */
export default function WaitlistConceptPage() {
  return (
    <main className="overflow-x-hidden">
      <header className="sticky top-0 z-40 flex flex-wrap items-center gap-2 border-b border-neutral-200 bg-white/90 px-5 py-3 backdrop-blur">
        <span className="mr-2 text-[14px] font-medium text-primary">Waitlist concepts:</span>
        {CONCEPTS.map((c) => (
          <a key={c.id} href={`#${c.id}`} className="rounded-full border border-neutral-300 px-3 py-1 text-[13px] text-primary hover:bg-cream-light">
            {c.label.split(" · ")[0]}
          </a>
        ))}
      </header>
      {CONCEPTS.map(({ id, label, Component }) => (
        <div key={id} id={`c-${id}`} className="scroll-mt-14 border-b-8 border-neutral-100">
          <span id={id} className="block scroll-mt-14" />
          <p className="bg-primary px-5 py-2 text-[13px] font-medium tracking-[0.1em] text-cream uppercase">{label}</p>
          <Component />
        </div>
      ))}
    </main>
  );
}
