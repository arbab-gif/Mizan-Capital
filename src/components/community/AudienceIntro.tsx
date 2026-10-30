import { purchaseFlow } from "@/data/community";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "./Icon";

/**
 * "Built for everyone" opener: one purchase, followed through all three audiences.
 * Each step links down to that audience's own section.
 */
export function AudienceIntro() {
  return (
    <section className="pt-24 pb-16 md:pt-28">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Built for everyone"
          eyebrowTone="soft"
          title="One purchase. Three people better off."
          description="Customers, business owners, and nonprofits each get something different from the app, and a single purchase connects all three."
          descriptionClassName="max-w-[680px]"
        />

        <ol className="grid w-full gap-4 md:grid-cols-3 md:gap-0">
          {purchaseFlow.map((s, i) => (
            <li key={s.id} className="relative flex md:px-3">
              <a
                href={`#${s.id}`}
                className="group flex w-full flex-col gap-4 rounded-[20px] border border-[#e8dfcc] bg-white p-6 transition hover:-translate-y-0.5 hover:border-beige hover:shadow-[0_20px_40px_-28px_rgba(48,43,35,0.5)]"
              >
                <span className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-beige-bg text-beige-ink">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <span className="font-display text-[28px] text-[#a88b5d]">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <span className="font-display text-[24px] leading-tight text-primary">{s.who}</span>
                <span className="text-[15px] leading-[1.55] text-neutral-600">{s.line}</span>
                <span className="mt-auto flex items-center gap-1.5 text-[14px] font-semibold text-primary">
                  What&apos;s in it for {s.who.toLowerCase()}s
                  <Icon name="arrow" size={16} className="text-beige-ink transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
              {i < purchaseFlow.length - 1 && (
                <span aria-hidden className="absolute top-1/2 -right-3.5 z-10 hidden size-7 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-cream md:flex">
                  <Icon name="arrow" size={14} />
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
