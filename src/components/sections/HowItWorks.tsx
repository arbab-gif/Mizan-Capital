import { howItWorksIntro, steps } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TONE = {
  green: "bg-primary/12",
  gold: "bg-beige/12",
};

/*
 * Loop geometry (px). Each step is: number (38px) + 12px gap + 76.2px icon circle,
 * so the circle's vertical center sits at CIRCLE_CENTER. Connectors and the end
 * loops are positioned from that line.
 */
const CIRCLE_CENTER = 88.1;
const CIRCLE_EDGE = 48; // circle radius (38.1) + 10px breathing room

/** Straight connector with arrowhead between two neighbouring step circles. */
function Arrow() {
  return (
    <span
      aria-hidden
      className="absolute hidden -translate-y-1/2 items-center text-primary md:flex"
      style={{
        top: CIRCLE_CENTER,
        left: `calc(50% + ${CIRCLE_EDGE}px)`,
        width: `calc(100% + 24.718px - ${CIRCLE_EDGE * 2}px)`,
      }}
    >
      <span className="h-[1.5px] flex-1 bg-current" />
      <svg width="9" height="12" viewBox="0 0 9 12" fill="none" className="-ml-px shrink-0">
        <path d="M1 1l6.5 5L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/** Curved end of the loop: runs out from the circle and bends down toward the step title. */
function LoopEnd({ side }: { side: "left" | "right" }) {
  return (
    <svg
      aria-hidden
      width="96"
      height="74.5"
      viewBox="0 0 96 74.5"
      fill="none"
      className={`absolute hidden text-primary lg:block ${side === "right" ? "-scale-x-100" : ""}`}
      style={{
        top: CIRCLE_CENTER - 0.75,
        [side === "left" ? "right" : "left"]: `calc(50% + ${CIRCLE_EDGE}px)`,
      }}
    >
      <path d="M96 0.75H37A36.5 36.5 0 0 0 37 73.75H47" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** "Investing in what matters" — four numbered steps joined into a continuous loop. */
export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24">
      <Container className="flex flex-col gap-[60px]">
        <SectionHeading
          eyebrow={howItWorksIntro.eyebrow}
          eyebrowTone="soft"
          title={howItWorksIntro.title}
          description={howItWorksIntro.description}
          descriptionClassName="max-w-[991px]"
        />

        <ol className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-[24.718px]">
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col items-center text-center">
              <span className="h-[38px] font-display text-[32px] leading-[1.2] font-medium text-[#a88b5d]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className={`mt-3 flex rounded-full p-[16.478px] ${TONE[step.tone]}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.icon} alt="" aria-hidden className="size-[43.256px]" />
              </span>

              <div className="mt-5 flex flex-col gap-[12.359px]">
                <h3 className="font-display text-[24.718px] leading-[1.2] font-medium tracking-[-0.01em] text-primary">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-[1.4] font-medium text-neutral-600">{step.description}</p>
              </div>

              {i === 0 && <LoopEnd side="left" />}
              {i < steps.length - 1 && <Arrow />}
              {i === steps.length - 1 && <LoopEnd side="right" />}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
