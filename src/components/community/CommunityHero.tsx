import Image from "next/image";
import { communityHero as c } from "@/data/community";
import { Navbar } from "@/components/sections/Navbar";
import { Icon } from "./Icon";
import { SignupForm } from "./SignupForm";

function StoreChip({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="flex items-center gap-2 rounded-[8px] border border-primary/15 bg-white/70 px-3 py-2 text-[13px] text-primary backdrop-blur-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt="" className="h-4 w-auto brightness-0" />
      <span>
        <span className="block text-[10px] tracking-wider text-warm-muted uppercase">Coming soon</span>
        {label}
      </span>
    </span>
  );
}

/**
 * Community hero, in the same language as the Home / Real Estate / Nonprofit heroes (client feedback:
 * "not as nice as the other hero sections"): one full-bleed community photo with a soft cream fade,
 * a dark headline with a beige accent, the waitlist card, and two small app moments over the photo.
 */
export function CommunityHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f9f6f3] lg:min-h-[860px]">
      {/* Phone: photo gets its own top area and fades into cream above the text. Desktop: full-bleed with a left fade. */}
      <div className="absolute inset-x-0 top-0 -z-20 h-[420px] lg:inset-0 lg:h-auto">
        <Image
          src="/images/community/hero-courtyard.jpg"
          alt="Families from the community sharing a meal together outdoors"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] lg:object-[70%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#f9f6f3_0%,rgba(249,246,243,0.85)_16%,rgba(249,246,243,0)_48%)] lg:hidden" />
      </div>
      <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,rgba(249,246,243,0.97)_0%,rgba(249,246,243,0.9)_40%,rgba(249,246,243,0.15)_72%,rgba(249,246,243,0)_100%)] lg:block" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[210px] bg-gradient-to-b from-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 hidden h-[160px] bg-gradient-to-t from-white/70 to-transparent lg:block" />

      <Navbar cta="solid" />

      <div className="mx-auto grid w-full max-w-[1312px] items-center gap-10 px-5 pt-[360px] pb-16 md:px-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-[190px] lg:pb-24">
        <div className="flex max-w-[620px] flex-col gap-7">
          <p className="w-fit rounded-full bg-beige/20 px-4 py-1.5 text-[12px] font-semibold tracking-[0.12em] text-warm-ink uppercase">{c.eyebrow}</p>
          <h1 className="font-display text-[46px] leading-[1.05] tracking-[-0.02em] text-black md:text-[76px]">
            {c.titleStart}
            <br />
            <span className="text-beige-ink italic">{c.titleEnd}</span>
          </h1>
          <p className="max-w-[540px] text-[17px] leading-[1.65] text-neutral-700 md:text-[18px]">{c.description}</p>

          {/* Waitlist with launch incentive */}
          <div id="waitlist-hero" className="w-full max-w-[560px] rounded-[20px] border border-beige/60 bg-white/85 p-5 shadow-[0_30px_60px_-40px_rgba(48,43,35,0.6)] backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-4">
              <span className="flex h-14 shrink-0 items-center gap-1.5 rounded-[12px] bg-beige-btn px-3.5 font-display text-[30px] leading-none text-white">
                <Icon name="tag" size={20} />
                {c.bonus}
              </span>
              <p className="text-[15px] leading-snug text-neutral-700">
                <span className="font-semibold text-primary">Join the waitlist</span> and get a {c.bonus} {c.bonusNote}.
              </p>
            </div>
            <SignupForm kind="waitlist" buttonLabel="Join the waitlist" successMessage={`You're on the list. Your ${c.bonus} launch bonus is reserved.`} />
          </div>

          <div className="flex flex-wrap gap-3">
            <StoreChip icon="/icons/icon-apple.svg" label="App Store" />
            <StoreChip icon="/icons/icon-playstore.svg" label="Google Play" />
          </div>
        </div>

        {/* App moments floating over the market photo */}
        <div className="relative hidden h-[560px] lg:block">
          <div className="absolute bottom-0 left-6 flex flex-col items-start gap-3">
            <div className="flex items-center gap-3 rounded-[14px] bg-white/95 p-3 pr-4 shadow-xl backdrop-blur">
              <span className="flex size-9 items-center justify-center rounded-full bg-beige/25 text-beige-ink">
                <Icon name="heart" size={18} />
              </span>
              <span className="text-[13px] leading-tight text-primary">
                <span className="block font-semibold">+$0.60 rounded up</span>
                <span className="text-neutral-500">to Masjid youth program</span>
              </span>
            </div>
            <div className="ml-10 flex items-center gap-3 rounded-[14px] bg-white/95 p-3 pr-4 shadow-xl backdrop-blur">
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
      </div>
    </section>
  );
}
