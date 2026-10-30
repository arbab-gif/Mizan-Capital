import { Container } from "@/components/ui/Container";
import { Icon } from "./Icon";
import { SignupForm } from "./SignupForm";

type Lane = {
  icon: string;
  title: string;
  target: string;
  tone: "blue" | "gold";
  steps: { icon: string; title: string; body: string }[];
};

const LANES: Lane[] = [
  {
    icon: "store",
    title: "For local businesses",
    target: "Target: 200+ businesses",
    tone: "blue",
    steps: [
      { icon: "users", title: "Join the partner network", body: "Be part of a network of 200+ local businesses." },
      { icon: "box", title: "Combine purchasing power", body: "Pool demand for supplies and services." },
      { icon: "heart", title: "Save together. Give together.", body: "Mizan donates its share of savings." },
    ],
  },
  {
    icon: "users",
    title: "For everyday shoppers",
    target: "Target: 2,500 members",
    tone: "gold",
    steps: [
      { icon: "phone", title: "Join the app", body: "Get early access and be part of the community." },
      { icon: "bag", title: "Shop local partners", body: "Support local businesses through everyday spending." },
      { icon: "heart", title: "Support community initiatives", body: "Proposed giving: 5–10% from qualifying purchases." },
    ],
  },
];

const TONE = {
  blue: { circle: "bg-[#e5eef0] text-primary", pill: "bg-[#e3e9e6] text-[#3f4a45]", line: "bg-[#d6dfe0]" },
  gold: { circle: "bg-[#f6e9cf] text-[#9a6b12]", pill: "bg-[#f5e7c9] text-[#5a4a2a]", line: "bg-[#ecd9ae]" },
};

/** Large faint geometric line-art used in the section corners. */
function Ornament({ className }: { className: string }) {
  return (
    <svg aria-hidden viewBox="0 0 400 400" className={`pointer-events-none absolute text-[#efe5d1] opacity-70 ${className}`} fill="none" stroke="currentColor" strokeWidth="18">
      <path d="M200 20 L380 200 L200 380 L20 200 Z" />
      <path d="M72 72 H328 V328 H72 Z" />
      <circle cx="200" cy="200" r="70" />
    </svg>
  );
}

function LaneCard({ lane }: { lane: Lane }) {
  const t = TONE[lane.tone];
  return (
    <article className="rounded-[14px] border border-[#e7e0d2] bg-[#fdfbf7] p-6 md:p-7">
      <div className="flex items-center gap-5">
        <span className={`flex size-[66px] shrink-0 items-center justify-center rounded-full ${t.circle}`}>
          <Icon name={lane.icon} size={30} />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-[28px] leading-none tracking-[-0.01em] text-primary md:text-[32px]">{lane.title}</h3>
          <span className={`w-fit rounded-full px-3.5 py-1 text-[14px] ${t.pill}`}>{lane.target}</span>
        </div>
      </div>
      <ol className="relative mt-4 flex flex-col gap-6">
        <span aria-hidden className={`absolute top-0 bottom-6 left-[32px] w-px ${t.line}`} />
        {lane.steps.map((s) => (
          <li key={s.title} className="relative flex items-start gap-6">
            <span className={`relative z-10 ml-[10px] flex size-[46px] shrink-0 items-center justify-center rounded-full ${t.circle}`}>
              <Icon name={s.icon} size={20} />
            </span>
            <div className="pt-1">
              <p className="text-[17px] font-medium text-[#1f2a26]">{s.title}</p>
              <p className="mt-0.5 text-[15px] text-neutral-500">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}

/** Curved connector from a card's bottom to the goal box (desktop only). */
function Connector({ side }: { side: "left" | "right" }) {
  const color = side === "left" ? "#0f4b33" : "#c08b1c";
  return (
    <svg aria-hidden viewBox="0 0 360 120" className={`h-[120px] w-full ${side === "right" ? "-scale-x-100" : ""}`} fill="none">
      <circle cx="190" cy="4" r="3.5" fill={color} />
      <path d="M190 4 C 190 60, 230 58, 346 66" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M338 60 L348 66 L338 72" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * CONCEPT E: "Our shared vision" + waitlist, built from the team's reference: two lane cards
 * (businesses / shoppers) that both flow into the $500,000 annual donation goal, then a sign-up band.
 * Figures are the client's proposed targets.
 */
export function WaitlistVision() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8f4ec]">
      <Ornament className="-top-24 -right-24 -z-10 size-[420px] rotate-12" />
      <Ornament className="bottom-40 -left-32 -z-10 size-[380px] -rotate-12" />

      <Container className="flex flex-col gap-8 pt-14 pb-14 md:pt-16">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="flex items-center gap-6 text-[13px] font-medium tracking-[0.32em] text-[#b07d1a] uppercase md:text-[14px]">
            <span className="h-px w-12 bg-[#c9a24e]" />
            Our shared vision
            <span className="h-px w-12 bg-[#c9a24e]" />
          </p>
          <h2 className="font-display text-[40px] leading-[1.05] tracking-[-0.02em] text-primary md:text-[64px]">One community. Lasting impact.</h2>
          <p className="text-[17px] text-neutral-600 md:text-[19px]">Business savings and everyday spending can help fund local initiatives.</p>
        </div>

        {/* Lanes */}
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
          {LANES.map((l) => (
            <LaneCard key={l.title} lane={l} />
          ))}
        </div>

        {/* Goal with connectors */}
        <div className="grid items-start lg:grid-cols-[1fr_520px_1fr]">
          <div className="hidden lg:block">
            <Connector side="left" />
          </div>
          <div className="mx-auto w-full max-w-[520px] rounded-[18px] bg-[#0f4b33] px-6 pt-7 pb-6 text-center text-white shadow-[0_30px_60px_-35px_rgba(1,42,28,0.8)] lg:mt-6">
            <p className="text-[13px] tracking-[0.3em] text-white/85 uppercase">Our annual donation goal</p>
            <p className="mt-3 font-display text-[56px] leading-none md:text-[64px]">
              $500,000 <span className="font-display text-[24px] md:text-[28px]">/ year</span>
            </p>
            <div className="mt-4 flex items-center gap-4">
              <span className="h-px flex-1 bg-white/30" />
              <span className="text-[14px] text-white/85">Proposed goal, not funds raised.</span>
              <span className="h-px flex-1 bg-white/30" />
            </div>
            <ul className="mt-5 grid grid-cols-3 divide-x divide-white/25">
              {[
                ["book", "Education"],
                ["home", "Housing"],
                ["users", "Community spaces"],
              ].map(([i, l]) => (
                <li key={l} className="flex flex-col items-center gap-2 px-2 text-[15px] whitespace-nowrap md:text-[16px]">
                  <Icon name={i} size={28} className="text-white" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <Connector side="right" />
          </div>
        </div>
      </Container>

      {/* Sign-up band */}
      <div className="border-t border-[#ecdcc0] bg-[#fbf8f2]">
        <Container className="grid items-center gap-8 py-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-14">
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-[38px] leading-[1.05] tracking-[-0.02em] text-primary md:text-[50px]">Be first when we launch.</h2>
            <p className="text-[17px] text-neutral-600 md:text-[19px]">Join the waitlist. Download the app and sign up at launch for a $10 bonus.</p>
          </div>
          <span aria-hidden className="hidden h-[130px] w-px bg-[#e0d6c4] lg:block" />
          <div className="flex flex-col gap-2.5">
            <span className="flex w-fit items-center gap-2 rounded-full bg-[#f5e7c9] px-3.5 py-1.5 text-[14px] text-[#9a6b12]">
              <Icon name="gift" size={16} />
              $10 launch bonus
            </span>
            <label className="text-[14px] text-neutral-700">Email address</label>
            <SignupForm kind="waitlist" buttonLabel="Join the waitlist" successMessage="You're on the list. Your $10 launch bonus is reserved." />
            <p className="text-[12px] text-neutral-500">Concept figures and bonus terms require confirmation.</p>
          </div>
        </Container>
      </div>
    </section>
  );
}
