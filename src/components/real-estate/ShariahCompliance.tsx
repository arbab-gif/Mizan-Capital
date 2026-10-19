import { shariahAvoid, shariahLetterUrl, shariahPrinciples } from "@/data/realEstate";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICONS = [
  // Funding structure: house (real asset)
  <path key="a" d="M3 11.5 12 4l9 7.5M5.5 10v9.5h13V10M10 19.5v-5h4v5" />,
  // Deal approval: shield check
  <path key="b" d="M12 3.5 19 6v5.5c0 4.3-2.9 7.6-7 9-4.1-1.4-7-4.7-7-9V6zM8.8 12l2.2 2.2 4.2-4.4" />,
  // Profit distribution: shared hands / heart
  <path key="c" d="M12 20s-7.5-4.4-7.5-10A4.2 4.2 0 0 1 12 7.6 4.2 4.2 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z" />,
];

/** Arrow between neighbouring step circles (desktop), as on the Home "How it works" loop. */
function Connector() {
  return (
    <span aria-hidden className="absolute top-[88px] left-[calc(50%+56px)] hidden w-[calc(100%-112px+32px)] items-center text-primary md:flex">
      <span className="h-[1.5px] flex-1 bg-current" />
      <svg width="9" height="12" viewBox="0 0 9 12" fill="none" className="-ml-px shrink-0">
        <path d="M1 1l6.5 5L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/**
 * How every deal stays halal, elevated to match the Home "How it works" section:
 * three numbered checks joined by arrows, then what we never touch, then the compliance letter.
 */
export function ShariahCompliance() {
  return (
    <section id="shariah" className="scroll-mt-20 bg-beige-bg py-20 md:py-28">
      <Container className="flex flex-col gap-[60px]">
        <SectionHeading
          eyebrow="Shariah compliance"
          eyebrowTone="soft"
          title="How every deal stays halal"
          description="Compliance isn't a box we tick at the end. It's built into how each deal is funded, approved, and paid out."
          descriptionClassName="max-w-[760px]"
        />

        <ol className="grid gap-12 md:grid-cols-3 md:gap-8">
          {shariahPrinciples.map((s, i) => (
            <li key={s.title} className="relative flex flex-col items-center text-center">
              <span className="h-[38px] font-display text-[32px] leading-[1.2] font-medium text-[#a88b5d]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-3 flex size-[76px] items-center justify-center rounded-full bg-white text-beige-ink shadow-[0_10px_30px_-18px_rgba(48,43,35,0.5)]">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {ICONS[i]}
                </svg>
              </span>
              <span className="mt-5 rounded-full bg-beige/20 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-warm-ink uppercase">
                {s.stage}
              </span>
              <h3 className="mt-3 font-display text-[26px] leading-[1.2] font-medium text-primary">{s.title}</h3>
              <p className="mt-3 max-w-[360px] text-[16px] leading-[1.55] text-neutral-600">{s.description}</p>
              {i < shariahPrinciples.length - 1 && <Connector />}
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-6 rounded-[24px] bg-white p-6 md:p-9">
          <p className="text-center text-[12px] font-semibold tracking-[0.14em] text-beige-ink uppercase">What we never touch</p>
          <ul className="grid gap-4 md:grid-cols-3">
            {shariahAvoid.map((a) => (
              <li key={a.term} className="flex gap-4 rounded-[16px] bg-cream-light p-5">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-beige-ink/40 text-beige-ink">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M6 6l12 12" />
                  </svg>
                </span>
                <div>
                  <p className="font-display text-[20px] leading-tight text-primary">{a.term}</p>
                  <p className="mt-1 text-[15px] leading-[1.55] text-neutral-600">{a.meaning}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href={shariahLetterUrl}
            className="flex items-center gap-2.5 self-center rounded-[8px] bg-primary px-[22px] py-3.5 text-[15px] font-medium text-cream transition hover:bg-forest"
          >
            Read our Shariah compliance letter <span className="text-beige">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
