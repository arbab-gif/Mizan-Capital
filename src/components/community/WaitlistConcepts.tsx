/**
 * More concepts for the "App Download / Waitlist" section (client doc: "any way you can elevate this
 * section… open to ideas"), each built around the client's "two streams → one community fund" diagram.
 * Preview at /community/waitlist-concept. Waitlist count is ILLUSTRATIVE.
 */
import { communityFlow as f, launchSteps } from "@/data/community";
import { Container } from "@/components/ui/Container";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { Icon } from "./Icon";
import { SignupForm } from "./SignupForm";
import { FoundersCard, GOAL, JOINED } from "./WaitlistLaunch";

const pct = Math.round((JOINED / GOAL) * 100);
const n = (v: number) => v.toLocaleString("en-US");

function Progress({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between text-[14px]">
        <span className={dark ? "text-[#c9d3cd]" : "text-neutral-600"}>
          <span className={`font-semibold ${dark ? "text-white" : "text-primary"}`}>{n(JOINED)}</span> of {n(GOAL)} founding spots claimed
        </span>
        <span className="font-semibold text-beige">{pct}%</span>
      </div>
      <div className={`h-2 overflow-hidden rounded-full ${dark ? "bg-white/15" : "bg-[#e6dfcf]"}`}>
        <div className="h-full rounded-full bg-gradient-to-r from-beige-btn to-[#b77c00]" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`w-fit rounded-full px-3 py-1.5 text-[13px] font-medium ${dark ? "bg-white/10 text-white" : "bg-[#e6dfcf] text-[#302b23]"}`}>{children}</span>
  );
}

/* ───────────── B · Your journey to the community fund ───────────── */

const JOURNEY = [
  { icon: "mail", t: "Join the waitlist", d: "Reserve your spot and your $10 bonus." },
  { icon: "phone", t: "Download at launch", d: "Your $10 is credited when you sign up." },
  { icon: "bag", t: "Shop local partners", d: "Groceries, food, services: what you already buy." },
  { icon: "heart", t: "5–10% goes to causes", d: "Automatically, from every qualifying purchase." },
];

export function WaitlistJourney() {
  return (
    <section className="bg-[#f6efe3] py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <div className="mx-auto flex max-w-[720px] flex-col items-center gap-5 text-center">
          <Eyebrow>Early access</Eyebrow>
          <h2 className="font-display text-[40px] leading-[1.08] text-[#2a2620] md:text-[56px]">Be First In Line When We Launch.</h2>
          <p className="text-[17px] leading-[1.65] text-neutral-600">Your spot on the waitlist is the first step of a journey that ends with your community funded.</p>
        </div>

        {/* Journey */}
        <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
          <span aria-hidden className="absolute top-7 right-[10%] left-[10%] hidden h-[2px] bg-gradient-to-r from-beige-btn via-beige-btn to-primary md:block" />
          {JOURNEY.map((s, i) => (
            <li key={s.t} className="relative flex items-start gap-4 md:flex-col md:items-center md:text-center">
              <span
                className={`relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full ${
                  i === 0 ? "bg-beige-btn text-white shadow-[0_0_0_8px_rgba(196,170,126,0.2)]" : "bg-white text-beige-ink ring-1 ring-[#e3d9c4]"
                }`}
              >
                <Icon name={s.icon} size={22} />
              </span>
              <div>
                {i === 0 && <span className="mb-1 block text-[11px] font-semibold tracking-[0.1em] text-beige-ink uppercase">You start here</span>}
                <p className="text-[16px] font-semibold text-primary">{s.t}</p>
                <p className="mt-1 text-[14px] leading-[1.5] text-neutral-600">{s.d}</p>
              </div>
            </li>
          ))}
          <li className="relative flex items-start gap-4 md:flex-col md:items-center md:text-center">
            <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-beige shadow-[0_14px_30px_-12px_rgba(1,42,28,0.7)]">
              <Icon name="users" size={22} />
            </span>
            <div>
              <p className="font-display text-[26px] leading-none text-primary">$500,000</p>
              <p className="mt-1 text-[14px] text-neutral-600">a year for local causes, with business savings</p>
            </div>
          </li>
        </ol>

        {/* Sign-up card */}
        <div className="grid items-center gap-10 rounded-[28px] bg-white p-6 shadow-[0_40px_80px_-60px_rgba(48,43,35,0.5)] md:p-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="flex flex-col gap-5">
            <p className="font-display text-[30px] leading-tight text-primary">Reserve your $10 founders bonus</p>
            <SignupForm kind="waitlist" buttonLabel="Reserve Bonus" successMessage="You're on the list. Your $10 launch bonus is reserved." />
            <Progress />
          </div>
          <div className="scale-[0.85]">
            <FoundersCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────── C · Two numbers, one fund ───────────── */

export function WaitlistEquation() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-5">
            <Eyebrow>Early access</Eyebrow>
            <h2 className="font-display text-[40px] leading-[1.08] text-[#2a2620] md:text-[56px]">Be First In Line When We Launch.</h2>
          </div>
          <p className="text-[17px] leading-[1.65] text-neutral-600">
            Two groups, one fund. When local businesses save together and members shop together, both send a share to the community.
          </p>
        </div>

        {/* Equation */}
        <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1.15fr]">
          <div className="flex flex-col gap-4 rounded-[24px] bg-[#e9f0eb] p-7">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary text-white">
              <Icon name="store" size={22} />
            </span>
            <p className="font-display text-[52px] leading-none text-primary">200+</p>
            <p className="text-[16px] font-semibold text-primary">local businesses</p>
            <p className="text-[14px] leading-[1.5] text-neutral-600">Pool demand for wholesale prices, then Mizan donates its share of the savings.</p>
          </div>
          <span className="flex items-center justify-center font-display text-[44px] text-beige-ink">+</span>
          <div className="relative flex flex-col gap-4 rounded-[24px] bg-[#f6efe3] p-7 ring-2 ring-beige-btn">
            <span className="absolute -top-3 right-6 rounded-full bg-beige-btn px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-white uppercase">You join here</span>
            <span className="flex size-12 items-center justify-center rounded-full bg-beige-btn text-white">
              <Icon name="users" size={22} />
            </span>
            <p className="font-display text-[52px] leading-none text-primary">2,500</p>
            <p className="text-[16px] font-semibold text-primary">founding members</p>
            <p className="text-[14px] leading-[1.5] text-neutral-600">Shop partners through the app and 5–10% of each purchase goes to causes.</p>
          </div>
          <span className="flex items-center justify-center font-display text-[44px] text-beige-ink">=</span>
          <div className="relative isolate flex flex-col gap-4 overflow-hidden rounded-[24px] bg-primary p-7 text-cream">
            <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.07]" style={{ backgroundImage: STAR_PATTERN }} />
            <span className="flex size-12 items-center justify-center rounded-full bg-beige text-primary">
              <Icon name="heart" size={22} />
            </span>
            <p className="font-display text-[52px] leading-none text-white">$500K</p>
            <p className="text-[16px] font-semibold text-beige">a year for the community</p>
            <ul className="flex flex-wrap gap-2">
              {f.causes.map((c) => (
                <li key={c.label} className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[13px]">
                  <Icon name={c.icon} size={14} className="text-beige" />
                  {c.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sign-up strip */}
        <div className="grid items-center gap-8 rounded-[24px] border border-[#e8dfcc] bg-cream-light p-6 md:p-8 lg:grid-cols-[auto_1fr_1fr]">
          <span className="flex h-20 w-fit items-center rounded-[16px] bg-primary px-5 font-display text-[44px] leading-none text-[#e8c97a] ring-2 ring-[#d6b46a]">$10</span>
          <ol className="flex flex-col gap-2">
            {launchSteps.map((s, i) => (
              <li key={s.title} className="flex items-center gap-3 text-[15px] font-medium text-primary">
                <span className="flex size-6 items-center justify-center rounded-full border border-primary/60 text-[12px]">{i + 1}</span>
                {s.title}
              </li>
            ))}
          </ol>
          <div className="flex flex-col gap-3">
            <SignupForm kind="waitlist" buttonLabel="Reserve Bonus" successMessage="You're on the list. Your $10 launch bonus is reserved." />
            <Progress />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────── D · Founders pass (dark) ───────────── */

export function WaitlistFoundersPass() {
  const flow = [
    { icon: "store", t: "Businesses save together", lane: "g" },
    { icon: "users", t: "Members shop together", lane: "y", you: true },
    { icon: "heart", t: "$500,000 / year to local causes", lane: "goal" },
  ];
  return (
    <section className="relative isolate overflow-hidden bg-primary py-20 md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06]" style={{ backgroundImage: STAR_PATTERN }} />
      <div aria-hidden className="absolute top-1/2 right-[8%] -z-10 size-[520px] -translate-y-1/2 rounded-full bg-beige/15 blur-[120px]" />
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col gap-7">
          <Eyebrow dark>Founders access</Eyebrow>
          <h2 className="font-display text-[40px] leading-[1.08] text-white md:text-[56px]">
            Be First In Line <span className="text-beige italic">When We Launch.</span>
          </h2>
          <p className="max-w-[540px] text-[17px] leading-[1.65] text-[#c9d3cd]">
            Founding members get $10 when the app goes live, and become the first members of a fund that gives back every time they shop.
          </p>
          <ol className="flex flex-col gap-3">
            {launchSteps.map((s, i) => (
              <li key={s.title} className="flex items-center gap-4 text-[17px] text-white">
                <span className="flex size-9 items-center justify-center rounded-full border border-beige/60 text-[14px] text-beige">{i + 1}</span>
                {s.title}
              </li>
            ))}
          </ol>
          <div className="flex max-w-[560px] flex-col gap-4 rounded-[20px] bg-white/[0.06] p-5 ring-1 ring-white/10">
            <SignupForm kind="waitlist" tone="dark" buttonLabel="Reserve Bonus" successMessage="You're on the list. Your $10 launch bonus is reserved." />
            <Progress dark />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <FoundersCard />
          {/* Compact two-stream flow */}
          <div className="mx-auto w-full max-w-[460px] rounded-[20px] bg-white/[0.05] p-5 ring-1 ring-white/10">
            <p className="mb-4 text-[12px] font-semibold tracking-[0.12em] text-beige uppercase">Where your spot leads</p>
            <ol className="relative flex flex-col gap-4 pl-14">
              <span aria-hidden className="absolute top-5 bottom-5 left-[21px] w-[2px] bg-gradient-to-b from-[#7fb596] via-beige-btn to-beige" />
              {flow.map((x) => (
                <li key={x.t} className="relative flex items-center gap-3">
                  <span
                    className={`absolute -left-14 flex size-11 items-center justify-center rounded-full ${
                      x.lane === "goal" ? "bg-beige text-primary" : x.lane === "g" ? "bg-[#e3ede7] text-primary" : "bg-[#f4efe4] text-beige-ink"
                    }`}
                  >
                    <Icon name={x.icon} size={18} />
                  </span>
                  <span className={`text-[15px] ${x.lane === "goal" ? "font-display text-[22px] text-white" : "text-white/90"}`}>{x.t}</span>
                  {x.you && <span className="rounded-full bg-beige-btn px-2 py-0.5 text-[10px] font-semibold tracking-[0.06em] text-white uppercase">You</span>}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
