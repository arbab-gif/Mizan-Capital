import { testimonials } from "@/data/realEstate";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** "Investor voices": three quote cards (PLACEHOLDER reviews until real ones arrive). */
export function Testimonials() {
  return (
    <section>
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Investor voices" eyebrowTone="soft" title="What our past and current investors say" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className={`flex flex-col gap-5 rounded-[20px] p-7 ${i === 1 ? "bg-primary text-white" : "bg-cream-light"}`}
            >
              <span className="font-display text-[64px] leading-[0.6] text-beige-ink" aria-hidden>
                &ldquo;
              </span>
              <h3 className={`font-display text-[24px] leading-tight ${i === 1 ? "text-white" : "text-primary"}`}>{t.headline}</h3>
              <blockquote className={`text-[16px] leading-[1.6] ${i === 1 ? "text-neutral-300" : "text-neutral-600"}`}>
                {t.quote}
              </blockquote>
              <figcaption className={`mt-auto flex items-center gap-3 border-t pt-5 ${i === 1 ? "border-white/15" : "border-neutral-200"}`}>
                <span className="flex size-10 items-center justify-center rounded-full bg-beige-btn font-display text-[16px] text-white">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className={`block text-[15px] font-medium ${i === 1 ? "text-white" : "text-primary"}`}>{t.name}</span>
                  <span className={`block text-[13px] ${i === 1 ? "text-cream/60" : "text-neutral-500"}`}>{t.meta}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
