import Image from "next/image";
import { initiatives, vision, visionPillars, visionRoadmap } from "@/data/nonprofit";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { Icon } from "@/components/community/Icon";

/** "Latest from the projects": every initiative's milestones as one transparent timeline. */
export function ProjectUpdates() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Transparent progress"
            eyebrowTone="soft"
            title="Where every project stands"
            description="We share each milestone as it happens, so you can see exactly what your support has built."
          />
        </div>
        <ol className="flex flex-col gap-5">
          {initiatives.map((it) => (
            <li key={it.id} className="rounded-[22px] border border-[#e8dfcc] bg-white p-6 md:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-beige-ink uppercase">{it.category}</p>
                  <h3 className="font-display text-[24px] leading-tight text-primary">{it.name}</h3>
                </div>
                <span className="rounded-full bg-beige-bg px-3 py-1 text-[13px] font-semibold text-primary">
                  {it.milestones.length} milestones reached
                </span>
              </div>
              <ol className="mt-5 flex flex-col gap-3 border-l border-beige pl-5">
                {it.milestones.map((m) => (
                  <li key={m} className="relative text-[15px] leading-[1.5] text-neutral-700">
                    <span className="absolute top-1 -left-[29px] flex size-4 items-center justify-center rounded-full bg-beige-btn text-white">
                      <Icon name="check" size={10} />
                    </span>
                    {m}
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/**
 * "The bigger vision": dark-green band mid-page. A Today → Next → Tomorrow roadmap, then the four
 * pillars with where each one stands, over a faint mosque-arch photo.
 */
export function Vision() {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-20 md:py-28">
      <Image src="/images/cta-mosque.png" alt="" fill sizes="100vw" className="-z-20 object-cover object-[70%_center] opacity-35" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_30%,rgba(1,42,28,0.35)_0%,rgba(1,42,28,0.92)_60%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.05]" style={{ backgroundImage: STAR_PATTERN }} />

      <Container className="flex flex-col gap-16">
        <div className="flex max-w-[760px] flex-col gap-5">
          <p className="w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[12px] font-semibold tracking-[0.14em] text-beige uppercase">
            The bigger vision
          </p>
          <h2 className="font-display text-[40px] leading-[1.08] tracking-[-0.01em] text-white md:text-[58px]">
            Today&apos;s projects.
            <br />
            <span className="text-beige italic">Tomorrow&apos;s community infrastructure.</span>
          </h2>
          <p className="text-[17px] leading-[1.65] text-[#c9d3cd]">{vision.description}</p>
        </div>

        {/* Roadmap */}
        <ol className="relative grid gap-8 md:grid-cols-3 md:gap-6">
          <span aria-hidden className="absolute top-[22px] right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-beige via-beige/60 to-beige/20 md:block" />
          {visionRoadmap.map((r, i) => (
            <li key={r.stage} className="relative flex flex-col items-start gap-4 md:items-center md:text-center">
              <span
                className={`relative z-10 flex size-11 items-center justify-center rounded-full font-display text-[16px] ${
                  i === 0 ? "bg-beige text-primary shadow-[0_0_0_8px_rgba(214,194,158,0.15)]" : "border border-beige/60 bg-primary text-beige"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2 md:items-center">
                <span
                  className={`w-fit rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase ${
                    i === 0 ? "bg-beige text-primary" : "bg-white/10 text-beige"
                  }`}
                >
                  {r.stage}
                </span>
                <h3 className="font-display text-[26px] leading-tight text-white">{r.title}</h3>
                <p className="max-w-[340px] text-[15px] leading-[1.6] text-[#c9d3cd]">{r.body}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Pillars */}
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visionPillars.map((p) => {
            const live = p.status === "Active";
            return (
              <li
                key={p.title}
                className="flex flex-col gap-5 rounded-[22px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-beige/50 hover:bg-white/[0.09]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-full bg-beige-btn text-white">
                    <Icon name={p.icon} size={22} />
                  </span>
                  <span
                    className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase ${
                      live ? "bg-[#7fd1a3]/15 text-[#a8e3c2]" : "bg-white/10 text-cream/70"
                    }`}
                  >
                    <span className={`size-1.5 rounded-full ${live ? "bg-[#7fd1a3]" : "bg-cream/50"}`} />
                    {p.status}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-[24px] text-white">{p.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.55] text-[#c9d3cd]">{p.body}</p>
                </div>
                <p className="mt-auto border-t border-white/10 pt-4 text-[13px] font-medium text-beige">{p.note}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

