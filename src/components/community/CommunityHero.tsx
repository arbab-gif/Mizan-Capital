import { communityHero as c } from "@/data/community";
import { Navbar } from "@/components/sections/Navbar";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { BusinessScreen, DiscoverScreen } from "./AppScreens";
import { Icon } from "./Icon";
import { PhoneFrame } from "./PhoneFrame";
import { SignupForm } from "./SignupForm";

function StoreChip({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="flex items-center gap-2 rounded-[8px] border border-white/15 px-3 py-2 text-[13px] text-cream/80">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt="" className="h-4 w-auto" />
      <span>
        <span className="block text-[10px] tracking-wider text-cream/50 uppercase">Coming soon</span>
        {label}
      </span>
    </span>
  );
}

/** Community hero: tagline, waitlist with the $10 launch bonus, and live-looking app mockups. */
export function CommunityHero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary pb-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08] [mask-image:radial-gradient(ellipse_at_70%_40%,black_10%,transparent_65%)]"
        style={{ backgroundImage: STAR_PATTERN }}
      />
      <div aria-hidden className="absolute top-1/3 right-[12%] -z-10 size-[520px] rounded-full bg-gold/20 blur-[140px]" />

      <Navbar />

      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-16 px-5 pt-[150px] lg:grid-cols-[1.05fr_0.95fr] lg:pt-[170px]">
        <div className="flex flex-col gap-7">
          <Eyebrow tone="light">{c.eyebrow}</Eyebrow>
          <h1 className="font-display text-[48px] leading-[1.02] tracking-[-0.02em] text-white md:text-[76px]">
            {c.titleStart}
            <br />
            <span className="font-medium text-gold italic">{c.titleEnd}</span>
          </h1>
          <p className="max-w-[540px] text-[17px] leading-[1.6] font-medium text-neutral-300 md:text-[18px]">{c.description}</p>

          {/* Waitlist with launch incentive */}
          <div id="waitlist-hero" className="w-full max-w-[560px] rounded-[20px] border border-white/12 bg-white/[0.06] p-5 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-4">
              <span className="flex h-14 shrink-0 items-center rounded-[12px] border border-dashed border-gold/60 bg-gold/15 px-3.5 font-display text-[30px] leading-none text-gold">
                {c.bonus}
              </span>
              <p className="text-[15px] leading-snug text-cream">
                <span className="font-medium text-white">Join the waitlist</span> and get a {c.bonus} {c.bonusNote}.
              </p>
            </div>
            <SignupForm
              kind="waitlist"
              tone="dark"
              buttonLabel="Join the waitlist"
              successMessage={`You're on the list. Your ${c.bonus} launch bonus is reserved.`}
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <StoreChip icon="/icons/icon-apple.svg" label="App Store" />
            <StoreChip icon="/icons/icon-playstore.svg" label="Google Play" />
          </div>
        </div>

        {/* App mockups */}
        <div className="relative mx-auto flex h-[600px] w-full max-w-[520px] items-center justify-center">
          <PhoneFrame className="absolute top-10 right-0 hidden scale-[0.86] rotate-[6deg] opacity-90 sm:block">
            <BusinessScreen />
          </PhoneFrame>
          <PhoneFrame className="relative z-10 sm:-translate-x-12">
            <DiscoverScreen />
          </PhoneFrame>

          <div className="absolute top-24 left-0 z-20 hidden items-center gap-3 rounded-[14px] bg-white p-3 pr-4 shadow-xl sm:flex">
            <span className="flex size-9 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Icon name="heart" size={18} />
            </span>
            <span className="text-[13px] leading-tight text-primary">
              <span className="block font-semibold">+$0.60 rounded up</span>
              <span className="text-neutral-500">to Masjid youth program</span>
            </span>
          </div>
          <div className="absolute right-2 bottom-16 z-20 hidden items-center gap-3 rounded-[14px] bg-white p-3 pr-4 shadow-xl sm:flex">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-cream">
              <Icon name="tag" size={18} />
            </span>
            <span className="text-[13px] leading-tight text-primary">
              <span className="block font-semibold">10% member perk</span>
              <span className="text-neutral-500">unlocked at Noor Grocery</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
