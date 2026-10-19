import { appFeatures, appFeaturesIntro as intro } from "@/data/community";
import { Container } from "@/components/ui/Container";
import { Icon } from "./Icon";

/** "Everything inside the app" — bento grid: intro + five feature cards, the core one highlighted in gold. */
export function AppFeatures() {
  return (
    <section className="pt-8 md:pt-12">
      <Container>
        <div className="grid gap-5 border-y border-neutral-200 py-16 md:grid-cols-2 lg:grid-cols-3 md:py-24">
          <div className="flex flex-col gap-4 lg:pr-6">
            <h2 className="font-display text-[32px] leading-[1.15] text-primary md:text-[36px]">{intro.title}</h2>
            <p className="text-[18px] leading-[1.6] text-neutral-600">{intro.description}</p>
            <a
              href={intro.link.href}
              className="group inline-flex items-center gap-2 self-start text-[18px] font-medium text-gold transition hover:text-primary"
            >
              {intro.link.label}
              <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {appFeatures.map((f) => (
            <article
              key={f.title}
              className={`group flex min-h-[280px] flex-col justify-between gap-10 rounded-[16px] p-7 transition md:p-8 ${
                f.highlight ? "bg-gold text-white" : "bg-cream-light hover:bg-cream"
              }`}
            >
              <span className="flex size-14 items-center justify-center rounded-[8px] bg-white text-gold shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <Icon name={f.icon} size={22} />
              </span>
              <div className="flex flex-col gap-2.5">
                <h3 className={`font-display text-[24px] leading-tight ${f.highlight ? "text-white" : "text-primary"}`}>{f.title}</h3>
                <p className={`text-[17px] leading-[1.55] ${f.highlight ? "text-white/90" : "text-neutral-600"}`}>{f.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
