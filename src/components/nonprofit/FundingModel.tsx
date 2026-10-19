import { fundingModel as f } from "@/data/nonprofit";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/community/Icon";

/* Step cards sit at the top/right/bottom/left of a loop; arrows on the ring show the cycle repeating. */
const NODE_POS = [
  "left-1/2 top-0 -translate-x-1/2",
  "right-0 top-1/2 -translate-y-1/2",
  "left-1/2 bottom-0 -translate-x-1/2",
  "left-0 top-1/2 -translate-y-1/2",
];
const ARROWS = [-45, 45, 135, 225].map((deg) => {
  const r = 230;
  const rad = (deg * Math.PI) / 180;
  return { x: 300 + r * Math.cos(rad), y: 300 + r * Math.sin(rad), rot: deg + 90 };
});

function StepCard({ i, title, description, className = "" }: { i: number; title: string; description: string; className?: string }) {
  return (
    <div className={`w-[188px] rounded-[16px] bg-white p-4 shadow-[0_16px_40px_-24px_rgba(1,42,28,0.45)] ring-1 ring-black/5 ${className}`}>
      <span className="font-display text-[14px] text-gold">{String(i + 1).padStart(2, "0")}</span>
      <p className="mt-1 font-display text-[22px] leading-tight text-primary">{title}</p>
      <p className="mt-1 text-[14px] leading-snug text-neutral-600">{description}</p>
    </div>
  );
}

/** "How we fund nonprofits": the endowment cycle as a loop around the preserved principal. */
export function FundingModel() {
  return (
    <section className="bg-cream-light py-24 md:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="flex flex-col gap-6">
          <SectionHeading align="left" eyebrow="The endowment model" title={f.title} description={f.description} />
          <p className="flex items-start gap-3 rounded-[16px] border border-gold/30 bg-gold/8 p-4 text-[16px] leading-[1.55] text-primary">
            <Icon name="heart" size={20} className="mt-0.5 shrink-0 text-gold" />
            {f.footnote}
          </p>
        </div>

        {/* Loop diagram (md+) */}
        <div className="relative mx-auto hidden size-[600px] md:block">
          <div className="absolute inset-[70px] rounded-full border-2 border-dashed border-gold/40" />
          {ARROWS.map((a, i) => (
            <span
              key={i}
              className="absolute flex size-8 -translate-1/2 items-center justify-center rounded-full bg-gold text-white shadow"
              style={{ left: a.x, top: a.y }}
            >
              <span className="flex" style={{ rotate: `${a.rot}deg` }}>
                <Icon name="arrow" size={16} />
              </span>
            </span>
          ))}
          <div className="absolute inset-[205px] flex flex-col items-center justify-center rounded-full bg-primary p-5 text-center text-cream shadow-[0_30px_60px_-30px_rgba(1,42,28,0.8)]">
            <Icon name="lock" size={22} className="text-gold" />
            <p className="mt-1.5 font-display text-[19px] leading-tight text-white">Principal stays invested</p>
            <p className="mt-1 text-[11px] leading-snug text-cream/70">Profits fund the work, every year</p>
          </div>
          {f.steps.map((s, i) => (
            <StepCard key={s.title} i={i} title={s.title} description={s.description} className={`absolute ${NODE_POS[i]}`} />
          ))}
        </div>

        {/* Stacked steps (mobile) */}
        <ol className="grid gap-3 md:hidden">
          {f.steps.map((s, i) => (
            <li key={s.title}>
              <StepCard i={i} title={s.title} description={s.description} className="w-full" />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
