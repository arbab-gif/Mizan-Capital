import Image from "next/image";
import { communityHero, joinSection as j, launchSteps } from "@/data/community";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { SignupForm } from "./SignupForm";

/**
 * Closing waitlist (client: "make it a unique image for us to join into"): the community itself,
 * gathered around one table, with the sign-up card and the $10 bonus tag layered on the photo.
 */
export function JoinCommunity() {
  return (
    <section id="waitlist" className="scroll-mt-20 py-20 md:py-28">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[32px] p-4 md:p-10 lg:min-h-[640px]">
          <Image
            src="/images/community/hero-market.jpg"
            alt="A local shopper at a community market stall"
            fill
            sizes="(min-width: 1280px) 1240px, 100vw"
            className="-z-20 object-cover object-[75%_center]"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(1,42,28,0.55)_0%,rgba(1,42,28,0.15)_55%,rgba(0,0,0,0)_100%)]" />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            {/* Sign-up card */}
            <div className="flex w-full max-w-[520px] flex-col gap-6 rounded-[24px] bg-white/95 p-6 shadow-2xl backdrop-blur md:p-8">
              <Eyebrow tone="soft">{j.eyebrow}</Eyebrow>
              <h2 className="font-display text-[34px] leading-[1.1] tracking-[-0.01em] text-primary md:text-[44px]">{j.title}</h2>
              <p className="text-[16px] leading-[1.6] text-neutral-700">{j.description}</p>
              <ol className="flex flex-col gap-2.5">
                {launchSteps.map((s, i) => (
                  <li key={s.title} className="flex items-center gap-3 text-[15px] text-primary">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary font-display text-[13px] text-cream">{i + 1}</span>
                    <span>
                      <span className="font-semibold">{s.title}.</span> <span className="text-neutral-600">{s.description}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <SignupForm
                kind="waitlist"
                buttonLabel="Reserve my $10 bonus"
                successMessage={`You're on the list. Your ${communityHero.bonus} launch bonus is reserved.`}
              />
            </div>

            {/* Bonus tag + who's joining */}
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <div className="flex rotate-[-3deg] items-center gap-4 rounded-[18px] bg-primary py-3 pr-5 pl-3 text-cream shadow-2xl ring-4 ring-white/80">
                <span className="flex h-16 items-center rounded-[12px] border border-dashed border-beige bg-beige-btn px-4 font-display text-[40px] leading-none text-white">
                  {communityHero.bonus}
                </span>
                <span className="text-[14px] leading-snug">
                  <span className="block text-[11px] font-semibold tracking-[0.14em] text-beige uppercase">Launch bonus</span>
                  Credited when you download
                  <br />
                  the app and sign up
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-white/95 py-2 pr-5 pl-2 shadow-xl">
                <span className="flex -space-x-2.5">
                  {j.avatars.map((src) => (
                    <span key={src} className="relative size-9 overflow-hidden rounded-full ring-2 ring-white">
                      <Image src={src} alt="" fill sizes="36px" className="object-cover" />
                    </span>
                  ))}
                </span>
                <span className="text-[14px] font-medium text-primary">Neighbors across Greater Dayton are joining</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
