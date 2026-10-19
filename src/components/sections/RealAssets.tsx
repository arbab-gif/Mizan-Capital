import Link from "next/link";
import { realAssetsIntro, valueCards, returnsCalculator } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReturnsCalculator } from "./ReturnsCalculator";

const ICON_PATHS = {
  house: "M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5M10 21v-6h4v6",
  coins:
    "M14 3.5c3.3 0 6 1.1 6 2.5S17.3 8.5 14 8.5 8 7.4 8 6s2.7-2.5 6-2.5ZM8 6v3c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V6M8 9v3c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V9M9 11.8c2.8 0 5 1 5 2.2s-2.2 2.2-5 2.2-5-1-5-2.2 2.2-2.2 5-2.2ZM4 14v3c0 1.2 2.2 2.2 5 2.2s5-1 5-2.2v-3",
  refresh: "M20 11A8 8 0 0 0 5.7 6.1L4 8M4 3v5h5M4 13a8 8 0 0 0 14.3 4.9L20 16M20 21v-5h-5",
  people:
    "M12 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM5 6.8a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM19 6.8a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM6.5 20a5.5 5.5 0 0 1 11 0M1.5 19a3.5 3.5 0 0 1 5-3.2M22.5 19a3.5 3.5 0 0 0-5-3.2",
};

function Icon({ name, className = "" }: { name: keyof typeof ICON_PATHS; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex flex-col gap-6 rounded-[16px] border border-[#e7e5e0] bg-white p-7 shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
      {children}
    </article>
  );
}

function CardText({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-display text-[24px] leading-[1.2] font-medium tracking-[-0.01em] text-primary">{title}</h3>
      <p className="text-[16px] leading-[1.4] text-neutral-600">{description}</p>
    </div>
  );
}

/** Card 1: big stats (visual), text, then a link row. */
function FoundationCard() {
  const c = valueCards.foundation;
  return (
    <Card>
      <div className="flex items-center py-5">
        {c.stats.map((s, i) => (
          <div key={s.label} className={`flex flex-1 flex-col items-center gap-1.5 ${i > 0 ? "border-l border-[#e7e5e0]" : ""}`}>
            <span className="text-[60px] leading-none font-bold tracking-[-0.04em] text-beige-ink md:text-[74px]">{s.value}</span>
            <span className="text-[13px] text-[#6b7280]">{s.label}</span>
          </div>
        ))}
      </div>
      <CardText title={c.title} description={c.description} />
      <Link href={c.link.href} className="group mt-auto flex items-center gap-3.5 border-t border-[#e7e5e0] pt-[18px]">
        <span className="flex size-10 items-center justify-center rounded-full bg-[#eef3ef] text-primary">
          <Icon name="house" className="size-[18px]" />
        </span>
        <span className="flex-1 text-[16px] font-medium text-primary">{c.link.label}</span>
        <span aria-hidden className="text-[#4b5563] transition-transform group-hover:translate-x-0.5">›</span>
      </Link>
    </Card>
  );
}

/** Card 2: profit → reinvestment → community flow (visual), then text. */
function ModelCard() {
  const c = valueCards.model;
  const icons = ["coins", "refresh", "people"] as const;
  return (
    <Card>
      <ol className="flex flex-col items-center">
        {c.steps.map((step, i) => (
          <li key={step} className="flex flex-col items-center">
            <span className="flex items-center gap-4 rounded-[10px] border border-[#e7e5e0] bg-white p-2.5 pr-5">
              <span className={`flex size-10 items-center justify-center rounded-[8px] bg-[#f3f4f1] ${i === 0 ? "text-beige" : "text-primary"}`}>
                <Icon name={icons[i]} className="size-[22px]" />
              </span>
              <span className="text-[16px] font-medium text-primary">{step}</span>
            </span>
            {i < c.steps.length - 1 && (
              <span aria-hidden className="flex flex-col items-center">
                <span className="h-1.5 w-px bg-[#e7e5e0]" />
                <span className="size-2 rounded-full bg-[#a88b5d]" />
                <span className="h-1.5 w-px bg-[#e7e5e0]" />
              </span>
            )}
          </li>
        ))}
      </ol>
      <CardText title={c.title} description={c.description} />
    </Card>
  );
}

/** Card 3: $1 invested vs $1.45 collateral bar chart (visual), then text. */
function CoverageCard() {
  const c = valueCards.coverage;
  const maxH = 130;
  return (
    <Card>
      <div className="flex h-[218px] items-end justify-around" role="img" aria-label="$1.00 invested is backed by about $1.45 of property collateral">
        {c.bars.map((b, i) => (
          <div key={b.label} className="flex w-[140px] flex-col items-center gap-2.5">
            <span className="text-[20px] font-bold text-primary">{b.value}</span>
            <span className="flex w-full flex-col items-center border-b-2 border-[#e7e5e0]">
              <span
                className={`w-[84px] rounded-t-[4px] ${i === 0 ? "bg-beige" : "bg-primary"}`}
                style={{ height: Math.round((b.ratio / 1.45) * maxH) }}
              />
            </span>
            <span className="text-[14px] text-[#6b7280]">{b.label}</span>
          </div>
        ))}
      </div>
      <CardText title={c.title} description={c.description} />
    </Card>
  );
}

/** "Real assets. Real Returns" — three value cards followed by the Deen & Dunyah returns calculator. */
export function RealAssets() {
  return (
    <section id="invest" className="scroll-mt-24">
      <Container className="flex flex-col gap-[60px]">
        <SectionHeading
          eyebrow={realAssetsIntro.eyebrow}
          eyebrowTone="soft"
          title={realAssetsIntro.title}
          description={realAssetsIntro.description}
          descriptionClassName="max-w-[814px]"
        />

        <div className="flex flex-col gap-6">
          <div className="grid gap-5 md:grid-cols-3">
            <FoundationCard />
            <ModelCard />
            <CoverageCard />
          </div>

          <ReturnsCalculator
            eyebrow={returnsCalculator.eyebrow}
            title={returnsCalculator.title}
            description={returnsCalculator.description}
          />
        </div>
      </Container>
    </section>
  );
}
