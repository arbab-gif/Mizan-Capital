import { launchSteps } from "@/data/community";
import { Container } from "@/components/ui/Container";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { FlowDiagram } from "./CommunityFlow";
import { Icon } from "./Icon";
import { SignupForm } from "./SignupForm";

/* Waitlist progress (ILLUSTRATIVE until the real count is wired in). */
export const JOINED = 1840;
export const GOAL = 2500;

/** The $10 founders card, coded so the text stays sharp and editable (replaces the AI raster). */
export function FoundersCard() {
  return (
    <div className="relative mx-auto w-full max-w-[460px] [perspective:1200px]">
      <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-4 -rotate-[8deg] rounded-[26px] bg-[#0b3a26] shadow-2xl" />
      <div className="relative -rotate-[6deg] overflow-hidden rounded-[26px] bg-[radial-gradient(120%_120%_at_20%_10%,#0f5a3a_0%,#073322_60%,#04241a_100%)] p-7 shadow-[0_40px_80px_-30px_rgba(1,42,28,0.8)] ring-[3px] ring-[#d6b46a]">
        <svg aria-hidden viewBox="0 0 400 240" className="pointer-events-none absolute inset-0 h-full w-full opacity-60" preserveAspectRatio="none">
          <path d="M-20 200 C 120 150, 240 250, 420 120" stroke="#d6b46a" strokeWidth="1.2" fill="none" />
          <path d="M150 -10 C 230 60, 320 40, 420 70" stroke="#d6b46a" strokeWidth="0.8" fill="none" />
        </svg>
        <p className="relative font-display text-[34px] leading-none text-[#e8c97a]">Mizan Capital</p>
        <p className="relative mt-3 text-[11px] font-semibold tracking-[0.42em] text-[#e8c97a]/90 uppercase">Founders access</p>
        <div className="relative mt-5 flex items-center gap-5">
          <span className="bg-gradient-to-b from-[#f6dc98] to-[#c79a3b] bg-clip-text font-display text-[88px] leading-none text-transparent">$10</span>
          <span className="h-16 w-px bg-[#e8c97a]/50" />
          <span>
            <span className="block font-display text-[24px] leading-tight text-[#f3e3b5]">Welcome Bonus</span>
            <span className="mt-1 block text-[12px] leading-snug text-[#f3e3b5]/80">When you download the app and sign up.</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * CONCEPT for the "App Download / Waitlist" section (client doc: "any way you can elevate this section…").
 * Top: the sign-up (steps, form, waitlist progress) beside the founders card. Below: the client's
 * two-stream diagram, with "You join here" on the waitlist step, so signing up reads as the first step
 * toward the $500,000 community goal.
 */
export function WaitlistLaunch() {
  const pct = Math.round((JOINED / GOAL) * 100);
  return (
    <section id="waitlist" className="relative isolate scroll-mt-20 overflow-hidden bg-[#f6efe3] py-20 md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06] [mask-image:radial-gradient(ellipse_at_top_right,black_10%,transparent_60%)]" style={{ backgroundImage: STAR_PATTERN }} />
      <Container className="flex flex-col gap-16">
        {/* 1 · Sign up */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <span className="w-fit rounded-full bg-[#e6dfcf] px-3 py-1.5 text-[13px] font-medium text-[#302b23]">Early access</span>
              <h2 className="font-display text-[40px] leading-[1.08] tracking-[-0.01em] text-[#2a2620] md:text-[56px]">Be First In Line When We Launch.</h2>
              <p className="max-w-[560px] text-[17px] leading-[1.65] text-neutral-600">
                Join the waitlist today. When the app goes live on the App Store and Google Play, your launch bonus is waiting.
              </p>
            </div>

            <ol className="flex flex-col gap-4">
              {launchSteps.map((s, i) => (
                <li key={s.title} className="flex items-center gap-4 text-[18px] font-medium text-[#2a2620]">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-primary/70 text-[15px] text-primary">{i + 1}</span>
                  {s.title}
                </li>
              ))}
            </ol>

            <div className="flex max-w-[560px] flex-col gap-4">
              <SignupForm kind="waitlist" buttonLabel="Reserve Bonus" successMessage="You're on the list. Your $10 launch bonus is reserved." />
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between text-[14px]">
                  <span className="text-neutral-600">
                    <span className="font-semibold text-primary">{JOINED.toLocaleString("en-US")}</span> of {GOAL.toLocaleString("en-US")} founding spots claimed
                  </span>
                  <span className="font-semibold text-beige-ink">{pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[#e6dfcf]">
                  <div className="h-full rounded-full bg-gradient-to-r from-beige-btn to-[#b77c00]" style={{ width: `${pct}%` }} />
                </div>
              </div>
            </div>
          </div>

          <FoundersCard />
        </div>

        {/* 2 · Why your spot matters: the client's diagram */}
        <div className="flex flex-col gap-12 rounded-[32px] bg-white px-5 py-12 shadow-[0_40px_80px_-60px_rgba(48,43,35,0.5)] md:px-10 md:py-16">
          <div className="mx-auto flex max-w-[680px] flex-col items-center gap-3 text-center">
            <span className="flex items-center gap-2 rounded-full bg-beige-bg px-3 py-1.5 text-[13px] font-medium text-[#302b23]">
              <Icon name="heart" size={14} className="text-beige-ink" />
              Why your spot matters
            </span>
            <h3 className="font-display text-[32px] leading-[1.15] text-primary md:text-[40px]">Your sign-up starts a $500,000 stream.</h3>
            <p className="text-[16px] leading-[1.6] text-neutral-600">
              Every member brings partner businesses closer to wholesale buying power, and every everyday purchase sends a share to local causes.
            </p>
          </div>
          <FlowDiagram youAreHere />
        </div>
      </Container>
    </section>
  );
}
