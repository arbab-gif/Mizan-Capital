import { communityHero, launchSteps } from "@/data/community";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SignupForm } from "./SignupForm";

/** Three short gold strokes radiating outward, used either side of the bonus amount. */
function Sparks({ className = "" }: { className?: string }) {
  return (
    <svg width="26" height="40" viewBox="0 0 26 40" fill="none" stroke="var(--color-gold)" strokeWidth="2.4" strokeLinecap="round" className={className} aria-hidden>
      <path d="M5 14l10-7M4 20h15M5 26l10 7" />
    </svg>
  );
}

/** App download / waitlist: three launch steps beside a $10 bonus "ticket". */
export function LaunchWaitlist() {
  return (
    <section id="waitlist" className="scroll-mt-20 py-24 md:py-28">
      <Container>
        <div className="grid items-center gap-12 overflow-hidden rounded-[32px] bg-gold/10 p-6 md:p-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              align="left"
              eyebrow="Early access"
              title="Be first in line when we launch."
              description="Join the waitlist today. When the app goes live on the App Store and Google Play, your launch bonus is waiting."
              descriptionClassName="max-w-[520px]"
            />

            <ol className="grid gap-4 sm:grid-cols-3">
              {launchSteps.map((s, i) => (
                <li key={s.title} className="relative flex flex-col gap-2 rounded-[16px] bg-white p-4 ring-1 ring-black/5">
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary font-display text-[14px] text-cream">
                    {i + 1}
                  </span>
                  <p className="text-[16px] font-medium text-primary">{s.title}</p>
                  <p className="text-[14px] leading-[1.5] text-neutral-600">{s.description}</p>
                </li>
              ))}
            </ol>

            <SignupForm
              kind="waitlist"
              buttonLabel="Reserve my $10 bonus"
              successMessage={`You're on the list. Your ${communityHero.bonus} launch bonus is reserved.`}
              className="max-w-[560px]"
            />
          </div>

          {/* Bonus ticket */}
          <div className="relative mx-auto w-full max-w-[380px] rounded-[22px] bg-primary p-3 text-cream shadow-[0_40px_80px_-40px_rgba(1,42,28,0.7)] ring-4 ring-[#efe6d3]">
            <p className="rounded-[10px] bg-gold py-2.5 text-center text-[13px] font-medium tracking-[0.2em] text-primary uppercase">
              Launch bonus
            </p>

            <div className="flex flex-col items-center px-4 pt-6 pb-7 text-center">
              <div className="flex items-center gap-4">
                <Sparks className="-scale-x-100" />
                <span className="font-display text-[104px] leading-none font-medium text-white">{communityHero.bonus}</span>
                <Sparks />
              </div>
              <p className="mt-4 max-w-[280px] text-[16px] leading-snug text-cream/90">Credited when you download the app and sign up.</p>
            </div>

            {/* Tear line with side notches */}
            <div className="relative -mx-3 border-t-2 border-dashed border-white/25">
              <span className="absolute -top-[13px] -left-[13px] size-6 rounded-full bg-[#f8f2e6] ring-4 ring-[#efe6d3]" />
              <span className="absolute -top-[13px] -right-[13px] size-6 rounded-full bg-[#f8f2e6] ring-4 ring-[#efe6d3]" />
            </div>

            <div className="mt-3 flex items-center justify-between rounded-[12px] bg-cream px-5 py-3.5">
              <span className="text-[14px] text-primary">Reserved for waitlist members</span>
              <span className="flex items-center gap-4">
                <span className="h-6 w-px bg-primary/25" />
                <span className="font-display text-[20px] text-gold">Mizan</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
