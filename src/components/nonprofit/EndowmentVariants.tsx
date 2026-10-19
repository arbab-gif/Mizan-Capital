/**
 * "The endowment model" — alternative treatments (A–D) for review.
 * Preview at /nonprofit/endowment-variants. Copy comes from data/nonprofit.ts.
 */
import { fundingModel as f } from "@/data/nonprofit";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { Icon } from "@/components/community/Icon";

const STEP_ICONS = ["chart", "store", "lock", "heart"];

function Footnote({ dark = false }: { dark?: boolean }) {
  return (
    <p
      className={`flex items-start gap-3 rounded-[16px] p-4 text-[16px] leading-[1.55] ${
        dark ? "border border-white/10 bg-white/[0.05] text-cream" : "border border-gold/30 bg-gold/8 text-primary"
      }`}
    >
      <Icon name="heart" size={20} className="mt-0.5 shrink-0 text-gold" />
      {f.footnote}
    </p>
  );
}

/* ───────────── A · Horizontal stepper ───────────── */

export function EndowmentStepper() {
  return (
    <section className="bg-cream-light py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="The endowment model" title={f.title} description={f.description} descriptionClassName="max-w-[760px]" />
        <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          <span aria-hidden className="absolute top-9 right-[12.5%] left-[12.5%] hidden h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20 md:block" />
          {f.steps.map((s, i) => (
            <li key={s.title} className="relative flex flex-col items-center gap-4 text-center">
              <span className="relative z-10 flex size-[72px] items-center justify-center rounded-full border-4 border-cream-light bg-primary text-gold shadow-[0_14px_30px_-16px_rgba(1,42,28,0.8)]">
                <Icon name={STEP_ICONS[i]} size={28} />
              </span>
              <span className="font-display text-[14px] text-gold">Step {String(i + 1).padStart(2, "0")}</span>
              <p className="font-display text-[28px] leading-none text-primary">{s.title}</p>
              <p className="max-w-[240px] text-[15px] leading-[1.55] text-neutral-600">{s.description}</p>
            </li>
          ))}
        </ol>
        <div className="mx-auto max-w-[760px]">
          <Footnote />
        </div>
      </Container>
    </section>
  );
}

/* ───────────── B · Money-flow diagram ───────────── */

function FlowNode({ label, title, note, tone = "light", icon }: { label: string; title: string; note: string; tone?: "light" | "dark" | "gold"; icon: string }) {
  const styles = {
    light: "bg-white text-primary ring-1 ring-black/5",
    dark: "bg-primary text-white",
    gold: "bg-gold text-white",
  }[tone];
  return (
    <div className={`relative z-10 flex flex-col gap-3 rounded-[20px] p-5 shadow-[0_20px_40px_-28px_rgba(1,42,28,0.6)] ${styles}`}>
      <span className={`flex size-10 items-center justify-center rounded-full ${tone === "light" ? "bg-gold/15 text-gold" : "bg-white/15 text-white"}`}>
        <Icon name={icon} size={20} />
      </span>
      <span className={`text-[11px] tracking-[0.14em] uppercase ${tone === "light" ? "text-gold" : "text-white/70"}`}>{label}</span>
      <p className="font-display text-[24px] leading-tight">{title}</p>
      <p className={`text-[14px] leading-snug ${tone === "light" ? "text-neutral-600" : "text-white/80"}`}>{note}</p>
    </div>
  );
}

function FlowArrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <div className={`relative flex items-center justify-center ${vertical ? "h-10 md:hidden" : "hidden w-14 md:flex"}`}>
      <span className={`absolute rounded-full bg-gold/30 ${vertical ? "h-full w-0.5" : "h-0.5 w-full"}`} />
      <span
        className={`absolute size-2 rounded-full bg-gold ${vertical ? "animate-[flowY_1.6s_linear_infinite]" : "animate-[flowX_1.6s_linear_infinite]"}`}
      />
      <span className="relative flex size-7 items-center justify-center rounded-full bg-cream-light text-gold ring-1 ring-gold/40">
        <Icon name="arrow" size={14} className={vertical ? "rotate-90" : ""} />
      </span>
    </div>
  );
}

export function EndowmentFlow() {
  const nodes = [
    { label: "You give", title: "One-time gift", note: "A donation sized to the initiative's yearly need.", icon: "heart", tone: "light" as const },
    { label: "We invest", title: "Endowment", note: "The principal stays invested, untouched, for the long term.", icon: "lock", tone: "dark" as const },
    { label: "It earns", title: "Yearly profits", note: "Asset-backed returns are generated every year.", icon: "chart", tone: "light" as const },
    { label: "It funds", title: "The initiative", note: "Profits cover recurring costs, year after year.", icon: "home", tone: "gold" as const },
  ];
  return (
    <section className="py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="The endowment model" title={f.title} description={f.description} descriptionClassName="max-w-[760px]" />
        <div className="flex flex-col items-stretch md:flex-row md:items-center">
          {nodes.map((n, i) => (
            <div key={n.title} className="flex flex-col md:flex-1 md:flex-row md:items-center">
              <div className="flex-1">
                <FlowNode {...n} />
              </div>
              {i < nodes.length - 1 && (
                <>
                  <FlowArrow />
                  <FlowArrow vertical />
                </>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 text-[15px] text-primary">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-gold">
            <Icon name="arrow" size={14} className="rotate-180" />
          </span>
          The cycle repeats every year, while the original gift stays invested.
        </div>
        <div className="mx-auto max-w-[760px]">
          <Footnote />
        </div>
      </Container>
    </section>
  );
}

/* ───────────── C · Ten-year chart ───────────── */

export function EndowmentChart() {
  const years = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <section className="relative isolate overflow-hidden bg-primary py-24">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06]" style={{ backgroundImage: STAR_PATTERN }} />
      <Container className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col gap-6">
          <SectionHeading align="left" tone="light" eyebrow="The endowment model" title="One gift. Every year." description={f.description} />
          <Footnote dark />
        </div>
        <figure className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div className="flex items-end gap-2 md:gap-3" style={{ height: 300 }}>
            {years.map((y) => (
              <div key={y} className="flex h-full flex-1 flex-col justify-end gap-1">
                <div
                  className="rounded-t-[6px] bg-gold"
                  style={{ height: 60 }}
                  title={`Year ${y}: profits fund the initiative`}
                />
                <div className="rounded-b-[6px] bg-[#4f8f6b]" style={{ height: 180 }} />
                <span className="mt-2 text-center text-[11px] text-cream/60">Y{y}</span>
              </div>
            ))}
          </div>
          <figcaption className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-cream/80">
            <span className="flex items-center gap-2">
              <span className="size-3 rounded-[3px] bg-[#4f8f6b]" /> Original gift, still invested
            </span>
            <span className="flex items-center gap-2">
              <span className="size-3 rounded-[3px] bg-gold" /> Profits that fund the initiative
            </span>
            <span className="w-full text-[12px] text-cream/50">Illustrative only; not a projection of returns.</span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

/* ───────────── D · One-time gift vs endowment ───────────── */

function YearDots({ filled }: { filled: (y: number) => boolean }) {
  return (
    <div className="grid grid-cols-10 gap-1.5">
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <span className={`h-10 w-full rounded-[6px] ${filled(i + 1) ? "bg-gold" : "bg-neutral-200"}`} />
          <span className="text-[10px] text-neutral-400">Y{i + 1}</span>
        </div>
      ))}
    </div>
  );
}

export function EndowmentCompare() {
  return (
    <section className="bg-cream-light py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="The endowment model" title={f.title} description={f.description} descriptionClassName="max-w-[760px]" />
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="flex flex-col gap-6 rounded-[24px] bg-white p-7 ring-1 ring-black/5 md:p-9">
            <div>
              <p className="text-[12px] tracking-[0.14em] text-neutral-500 uppercase">A typical donation</p>
              <p className="mt-2 font-display text-[30px] leading-tight text-primary">Spent once.</p>
              <p className="mt-2 text-[15px] text-neutral-600">The gift covers one year of costs, then the initiative has to fundraise again.</p>
            </div>
            <YearDots filled={(y) => y === 1} />
            <ul className="flex flex-col gap-2 text-[15px] text-neutral-600">
              <li className="flex gap-2"><span className="text-neutral-400">—</span> Fundraising every year</li>
              <li className="flex gap-2"><span className="text-neutral-400">—</span> Uncertain overhead coverage</li>
            </ul>
          </article>

          <article className="relative isolate flex flex-col gap-6 overflow-hidden rounded-[24px] bg-primary p-7 text-white md:p-9">
            <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.07]" style={{ backgroundImage: STAR_PATTERN }} />
            <span className="absolute top-6 right-6 rounded-full bg-gold px-3 py-1 text-[12px] font-medium tracking-wider text-white uppercase">Mizan model</span>
            <div>
              <p className="text-[12px] tracking-[0.14em] text-gold uppercase">An endowment gift</p>
              <p className="mt-2 font-display text-[30px] leading-tight">Keeps giving.</p>
              <p className="mt-2 text-[15px] text-cream/75">The gift stays invested and its profits cover costs every single year.</p>
            </div>
            <div className="[&_.bg-neutral-200]:bg-white/10 [&_.text-neutral-400]:text-cream/50">
              <YearDots filled={() => true} />
            </div>
            <ul className="flex flex-col gap-2 text-[15px] text-cream/85">
              {f.steps.map((s) => (
                <li key={s.title} className="flex gap-2">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-gold" />
                  <span>
                    <span className="font-medium text-white">{s.title}:</span> {s.description}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="mx-auto max-w-[760px]">
          <Footnote />
        </div>
      </Container>
    </section>
  );
}
