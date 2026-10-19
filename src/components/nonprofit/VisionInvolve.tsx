import { involvement, vision } from "@/data/nonprofit";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { Icon } from "@/components/community/Icon";

const PILLAR_ICONS = ["book", "home", "health", "users"];

/** "Today's projects. Tomorrow's community infrastructure." */
export function Vision() {
  return (
    <section className="relative isolate overflow-hidden bg-forest py-24 md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06]" style={{ backgroundImage: STAR_PATTERN }} />
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeading align="left" tone="light" eyebrow="The bigger vision" title={vision.title} description={vision.description} />
        <ul className="grid grid-cols-2 gap-4">
          {vision.pillars.map((p, i) => (
            <li key={p} className="flex flex-col gap-6 rounded-[20px] border border-white/10 bg-white/[0.05] p-6">
              <span className="flex size-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Icon name={PILLAR_ICONS[i]} size={22} />
              </span>
              <p className="font-display text-[24px] text-white">{p}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** "Bring more than capital." — volunteer / partner call to action. */
export function Involvement() {
  return (
    <section id="involved" className="scroll-mt-20 py-24 md:py-28">
      <Container>
        <div className="flex flex-col items-center gap-8 rounded-[32px] bg-cream-light px-6 py-14 text-center md:px-16">
          <SectionHeading eyebrow="Get involved" title={involvement.title} description={involvement.description} descriptionClassName="max-w-[620px]" />
          <ul className="flex flex-wrap justify-center gap-2">
            {involvement.roles.map((r) => (
              <li key={r} className="rounded-full bg-white px-4 py-2 text-[15px] text-primary ring-1 ring-black/5">
                {r}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-[8px] bg-primary px-7 py-3.5 text-[16px] font-medium text-cream transition hover:bg-forest"
          >
            Help build the mission
            <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
