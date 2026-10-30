/**
 * "The bigger vision": alternative treatments (B–D) for review beside the live section (A).
 * Preview at /nonprofit/vision-variants. Roadmap and pillar copy is DRAFT.
 */
import Image from "next/image";
import { vision, visionFromTo, visionPillars, visionRoadmap } from "@/data/nonprofit";
import { Container } from "@/components/ui/Container";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { Icon } from "@/components/community/Icon";

function Title({ light = true, center = false }: { light?: boolean; center?: boolean }) {
  return (
    <div className={`flex max-w-[760px] flex-col gap-5 ${center ? "mx-auto items-center text-center" : ""}`}>
      <p
        className={`w-fit rounded-full px-4 py-1.5 text-[12px] font-semibold tracking-[0.14em] uppercase ${
          light ? "border border-white/15 bg-white/5 text-beige" : "bg-beige/15 text-warm-ink"
        }`}
      >
        The bigger vision
      </p>
      <h2 className={`font-display text-[40px] leading-[1.08] tracking-[-0.01em] md:text-[56px] ${light ? "text-white" : "text-primary"}`}>
        Today&apos;s projects.
        <br />
        <span className={`italic ${light ? "text-beige" : "text-beige-ink"}`}>Tomorrow&apos;s community infrastructure.</span>
      </h2>
      <p className={`text-[17px] leading-[1.65] ${light ? "text-[#c9d3cd]" : "text-neutral-600"}`}>{vision.description}</p>
    </div>
  );
}

function Status({ active }: { active: boolean }) {
  return (
    <span
      className={`flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase ${
        active ? "bg-[#7fd1a3]/20 text-[#bdeccf]" : "bg-white/15 text-cream/80"
      }`}
    >
      <span className={`size-1.5 rounded-full ${active ? "bg-[#7fd1a3]" : "bg-cream/60"}`} />
      {active ? "Active" : "Planned"}
    </span>
  );
}

/* ───────────── B · Photo pillars ───────────── */

const PHOTOS: Record<string, string | null> = {
  Education: "/images/project-curriculum.png",
  Housing: "/images/project-housing.png",
  Health: null,
  "Community spaces": "/images/project-mosque.png",
};

export function VisionPhotoPillars() {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-20 md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06]" style={{ backgroundImage: STAR_PATTERN }} />
      <Container className="flex flex-col gap-14">
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Title />
          <p className="font-display text-[22px] leading-snug text-cream/90 italic lg:text-right">
            “Four pillars. Three already standing.
            <br className="hidden lg:block" /> One more on the way.”
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visionPillars.map((p) => {
            const src = PHOTOS[p.title];
            const active = p.status === "Active";
            return (
              <li key={p.title} className="group relative isolate flex h-[440px] flex-col justify-end overflow-hidden rounded-[24px] p-6">
                {src ? (
                  <Image src={src} alt="" fill sizes="(min-width: 1024px) 300px, 50vw" className="-z-20 object-cover transition duration-700 group-hover:scale-[1.05]" />
                ) : (
                  <div className="absolute inset-0 -z-20 flex items-center justify-center bg-[radial-gradient(circle_at_50%_35%,#3d6b52_0%,#0d3e26_70%)]">
                    <span className="flex size-24 items-center justify-center rounded-full border border-dashed border-beige/60 text-beige">
                      <Icon name={p.icon} size={40} />
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <span className="absolute top-5 left-5 flex size-11 items-center justify-center rounded-full bg-beige-btn text-white">
                  <Icon name={p.icon} size={20} />
                </span>
                <div className="absolute top-5 right-5 rounded-full bg-black/45 backdrop-blur-sm">
                  <Status active={active} />
                </div>
                <h3 className="font-display text-[28px] text-white">{p.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.55] text-cream/85">{p.body}</p>
                <p className="mt-4 border-t border-white/20 pt-3 text-[13px] font-medium text-beige">{p.note}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

/* ───────────── C · Growth rings ───────────── */

const RING_POS = [
  "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  "right-0 top-1/2 translate-x-1/3 -translate-y-1/2",
  "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2",
  "left-0 top-1/2 -translate-x-1/3 -translate-y-1/2",
];

export function VisionRings() {
  return (
    <section className="bg-beige-bg py-20 md:py-28">
      <Container className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-8">
          <Title light={false} />
          <ol className="flex flex-col gap-4">
            {visionRoadmap.map((r, i) => (
              <li key={r.stage} className="flex gap-4">
                <span
                  className={`mt-1 size-4 shrink-0 rounded-full ${i === 0 ? "bg-primary" : i === 1 ? "bg-[#4f8f6b]" : "bg-beige-btn"}`}
                />
                <div>
                  <p className="text-[16px] font-semibold text-primary">
                    {r.stage} · <span className="font-normal">{r.title}</span>
                  </p>
                  <p className="text-[15px] leading-[1.55] text-neutral-600">{r.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Concentric rings: Today at the centre, growing outward; pillars sit on the outer ring */}
        <div className="relative mx-auto aspect-square w-full max-w-[520px] px-10 py-10">
          <div className="relative size-full">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-beige-btn/60 bg-white/40" />
            <div className="absolute inset-[17%] rounded-full bg-[#4f8f6b]/15 ring-1 ring-[#4f8f6b]/30" />
            <div className="absolute inset-[34%] flex flex-col items-center justify-center rounded-full bg-primary p-4 text-center text-cream shadow-[0_30px_60px_-30px_rgba(1,42,28,0.8)]">
              <span className="text-[11px] font-semibold tracking-[0.12em] text-beige uppercase">Today</span>
              <span className="font-display text-[34px] leading-none">3</span>
              <span className="text-[12px] text-cream/80">endowments</span>
            </div>
            <span className="absolute top-[19%] left-1/2 -translate-x-1/2 text-[11px] font-semibold tracking-[0.12em] text-[#2f6b4b] uppercase">Next</span>
            <span className="absolute top-[3%] left-1/2 hidden -translate-x-1/2 text-[11px] font-semibold tracking-[0.12em] text-beige-ink uppercase">Tomorrow</span>
            {visionPillars.map((p, i) => (
              <div key={p.title} className={`absolute ${RING_POS[i]} flex w-[150px] flex-col items-center gap-2 rounded-[16px] bg-white p-3 text-center shadow-[0_15px_35px_-20px_rgba(48,43,35,0.6)]`}>
                <span className="flex size-10 items-center justify-center rounded-full bg-beige-btn text-white">
                  <Icon name={p.icon} size={18} />
                </span>
                <span className="text-[15px] font-semibold text-primary">{p.title}</span>
                <span className={`text-[11px] font-semibold tracking-[0.08em] uppercase ${p.status === "Active" ? "text-[#2f6b4b]" : "text-neutral-500"}`}>{p.status}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────── D · From → To ───────────── */

export function VisionFromTo() {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-20 md:py-28">
      <Image src="/images/hero-bg.png" alt="" fill sizes="100vw" className="-z-20 object-cover object-right opacity-25" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(1,42,28,0.97)_0%,rgba(1,42,28,0.9)_55%,rgba(1,42,28,0.7)_100%)]" />
      <Container className="flex flex-col gap-14">
        <Title />
        <div className="overflow-hidden rounded-[24px] border border-white/10">
          <div className="hidden grid-cols-[1fr_1.1fr_40px_1.3fr] items-center gap-6 bg-white/[0.04] px-7 py-4 text-[12px] font-semibold tracking-[0.12em] uppercase md:grid">
            <span className="text-cream/60">Pillar</span>
            <span className="text-cream/60">Today</span>
            <span />
            <span className="text-beige">Tomorrow</span>
          </div>
          <ul>
            {visionFromTo.map((p) => (
              <li
                key={p.title}
                className="grid gap-3 border-t border-white/10 px-6 py-6 transition hover:bg-white/[0.04] md:grid-cols-[1fr_1.1fr_40px_1.3fr] md:items-center md:gap-6 md:px-7"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-full bg-beige-btn text-white">
                    <Icon name={p.icon} size={20} />
                  </span>
                  <span className="font-display text-[24px] text-white">{p.title}</span>
                </span>
                <span className="text-[15px] text-cream/75">
                  <span className="mr-2 text-[11px] font-semibold tracking-[0.1em] text-cream/50 uppercase md:hidden">Today</span>
                  {p.today}
                </span>
                <span className="hidden size-9 items-center justify-center rounded-full border border-beige/50 text-beige md:flex">
                  <Icon name="arrow" size={16} />
                </span>
                <span className="font-display text-[22px] leading-snug text-beige">
                  <span className="mr-2 font-sans text-[11px] font-semibold tracking-[0.1em] text-cream/50 uppercase md:hidden">Tomorrow</span>
                  {p.tomorrow}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
