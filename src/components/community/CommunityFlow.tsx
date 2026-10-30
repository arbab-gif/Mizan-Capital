import { communityFlow as f } from "@/data/community";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "./Icon";

type Step = (typeof f.business.steps)[number];
type Lane = "business" | "customer";

const LANE = {
  business: { line: "border-primary", node: "bg-[#e3ede7] text-primary ring-primary/25", text: "text-primary" },
  customer: { line: "border-beige-btn", node: "bg-[#f4efe4] text-beige-ink ring-beige-btn/40", text: "text-beige-ink" },
};

function Node({ icon, lane, className = "" }: { icon: string; lane: Lane; className?: string }) {
  return (
    <span className={`flex size-11 items-center justify-center rounded-full ring-1 ${LANE[lane].node} ${className}`}>
      <Icon name={icon} size={18} />
    </span>
  );
}

/** One step's text, chips and mini flow. `right` mirrors the alignment for the customer lane. */
function StepBody({ s, right = false }: { s: Step; right?: boolean }) {
  return (
    <div className={`flex flex-col gap-2 ${right ? "lg:items-end lg:text-right" : ""}`}>
      <h4 className="text-[16px] font-semibold text-primary">{s.title}</h4>
      <p className="text-[15px] text-neutral-500">{s.body}</p>
      {s.chips.length > 0 && (
        <ul className={`mt-1 flex flex-wrap gap-x-4 gap-y-2 ${right ? "lg:justify-end" : ""}`}>
          {s.chips.map((c) => (
            <li key={c.label} className="flex items-center gap-1.5 text-[13.5px] text-neutral-600">
              <Icon name={c.icon} size={15} className="text-neutral-400" />
              {c.label}
            </li>
          ))}
        </ul>
      )}
      {s.flow.length > 0 && (
        <ol className={`mt-2 flex items-start gap-3 ${right ? "lg:justify-end" : ""}`}>
          {s.flow.map((x, i) => (
            <li key={x.label} className="flex items-start gap-3">
              {i > 0 && (
                <span className="mt-1 text-neutral-400" aria-hidden>
                  {s.flow.length === 2 && s.title.startsWith("Split") ? "+" : "→"}
                </span>
              )}
              <span className="flex flex-col items-center gap-1 text-center text-[13px] text-primary">
                <Icon name={x.icon} size={17} className="text-neutral-600" />
                {x.label}
              </span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

/** Gold "You join here" pill, marking the waitlist step when the diagram sits in the sign-up section. */
function YouAreHere({ right = false }: { right?: boolean }) {
  return (
    <span className={`mb-2 flex w-fit items-center gap-1.5 rounded-full bg-beige-btn px-2.5 py-1 text-[11px] font-semibold tracking-[0.06em] text-white uppercase ${right ? "lg:ml-auto" : ""}`}>
      <span className="relative flex size-1.5">
        <span className="absolute inset-0 animate-ping rounded-full bg-white opacity-75" />
        <span className="relative size-1.5 rounded-full bg-white" />
      </span>
      You join here
    </span>
  );
}

/** The two-lane diagram plus the goal. Reused by the waitlist concept with `youAreHere`. */
export function FlowDiagram({ youAreHere = false }: { youAreHere?: boolean }) {
  const rows = f.business.steps.map((b, i) => [b, f.customer.steps[i]] as const);
  return (
    <>
    {/* ───── Desktop diagram ───── */}
    <div className="mx-auto hidden w-full max-w-[940px] lg:block">
      <div className="relative">
        {/* Lanes: start at the app node, run down each side and curve into the goal node */}
        <div aria-hidden className="absolute inset-x-0 top-8 bottom-8">
          <span className="absolute inset-y-0 left-0 w-1/2 rounded-tl-[44px] rounded-bl-[90px] border-t-2 border-b-2 border-l-2 border-t-neutral-200 border-b-primary border-l-primary" />
          <span className="absolute inset-y-0 right-0 w-1/2 rounded-tr-[44px] rounded-br-[90px] border-t-2 border-r-2 border-b-2 border-t-neutral-200 border-r-beige-btn border-b-beige-btn" />
        </div>

        {/* App node */}
        <div className="relative flex flex-col items-center gap-3">
          <span className="flex size-16 items-center justify-center rounded-full bg-white text-primary shadow-[0_10px_30px_-15px_rgba(1,42,28,0.5)] ring-1 ring-neutral-200">
            <Icon name="phone" size={24} />
          </span>
          <span className="text-[16px] font-semibold text-primary">Community app</span>
        </div>

        {/* Lane titles + steps */}
        <div className="relative grid grid-cols-2 gap-x-24 gap-y-14 px-16 pt-10 pb-28">
          <p className="flex items-center gap-2.5 font-display text-[22px] text-primary">
            <Icon name="briefcase" size={19} className="text-primary" />
            {f.business.title}
          </p>
          <p className="flex items-center justify-end gap-2.5 font-display text-[22px] text-primary">
            <Icon name="users" size={19} className="text-beige-ink" />
            {f.customer.title}
          </p>
          {rows.map(([b, c]) => [
            <div key={b.title} className="relative">
              <Node icon={b.icon} lane="business" className="absolute top-[-6px] left-[-64px] -translate-x-1/2" />
              <StepBody s={b} />
            </div>,
            <div key={c.title} className="relative">
              <Node icon={c.icon} lane="customer" className="absolute top-[-6px] right-[-64px] translate-x-1/2" />
              {youAreHere && c === f.customer.steps[0] && <YouAreHere right />}
              <StepBody s={c} right />
            </div>,
          ])}
        </div>

        {/* Goal node */}
        <div className="relative flex justify-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-primary text-beige shadow-[0_16px_40px_-15px_rgba(1,42,28,0.7)]">
            <Icon name="heart" size={26} />
          </span>
        </div>
      </div>
    </div>

    {/* ───── Phone: lanes stacked ───── */}
    <div className="flex flex-col gap-10 lg:hidden">
      {(
        [
          ["business", f.business],
          ["customer", f.customer],
        ] as const
      ).map(([lane, l]) => (
        <div key={lane} className="flex flex-col gap-5">
          <p className="flex items-center gap-2.5 font-display text-[22px] text-primary">
            <Icon name={lane === "business" ? "briefcase" : "users"} size={19} className={LANE[lane].text} />
            {l.title}
          </p>
          <ol className={`ml-[21px] flex flex-col gap-7 border-l-2 pl-8 ${LANE[lane].line}`}>
            {l.steps.map((s) => (
              <li key={s.title} className="relative">
                <Node icon={s.icon} lane={lane} className="absolute top-[-6px] left-[-55px]" />
                {youAreHere && s === f.customer.steps[0] && <YouAreHere />}
                <StepBody s={s} />
              </li>
            ))}
          </ol>
        </div>
      ))}
      <div className="flex justify-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary text-beige">
          <Icon name="heart" size={22} />
        </span>
      </div>
    </div>

    {/* Goal */}
    <div className="-mt-8 flex flex-col items-center gap-2 text-center lg:-mt-10">
      <p className="text-[12px] font-semibold tracking-[0.14em] text-neutral-500 uppercase">{f.goal.label}</p>
      <p className="font-display text-[40px] leading-none text-primary md:text-[48px]">{f.goal.value}</p>
      <p className="text-[15px] text-neutral-500">{f.goal.note}</p>
      <ul className="mt-4 flex flex-wrap justify-center gap-8">
        {f.causes.map((c) => (
          <li key={c.label} className="flex flex-col items-center gap-1.5 text-[14px] text-neutral-600">
            <span className="flex size-10 items-center justify-center rounded-full bg-beige-bg text-beige-ink">
              <Icon name={c.icon} size={18} />
            </span>
            {c.label}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

/**
 * "Where the giving comes from": business spending (green lane) and customer spending (gold lane)
 * both flow into the annual community donation goal. Desktop shows the two-lane diagram; phones stack it.
 */
export function CommunityFlow() {
  return (
    <section id="giving" className="scroll-mt-20 bg-white py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow={f.eyebrow} eyebrowTone="soft" title={f.title} description={f.description} descriptionClassName="max-w-[640px]" />
        <FlowDiagram />
      </Container>
    </section>
  );
}
