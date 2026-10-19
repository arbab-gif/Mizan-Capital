import Image from "next/image";
import { reHero } from "@/data/realEstate";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/sections/Navbar";

/**
 * Real Estate hero, modeled on essaestates.com: one full-bleed property photo with a soft white
 * fade, a large dark headline, a row of trust markers and the key numbers merged into the image.
 */
export function ReHero() {
  const c = reHero;
  return (
    <section className="relative isolate flex flex-col overflow-hidden lg:min-h-[900px]">
      <Image
        src="/images/real-estate/deal-after.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[75%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.86)_42%,rgba(255,255,255,0.15)_75%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[260px] bg-gradient-to-t from-white via-white/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[210px] bg-gradient-to-b from-black/35 to-transparent" />

      <Navbar cta="solid" />

      <div className="flex flex-1 flex-col justify-between gap-14 px-5 pt-[150px] pb-14 md:px-16 lg:pt-[190px]">
        <div className="flex max-w-[680px] flex-col gap-8">
          <p className="w-fit rounded-full bg-beige/15 px-4 py-1.5 text-[12px] font-semibold tracking-[0.12em] text-warm-ink uppercase">
            Greater Dayton · 12 properties completed
          </p>

          <h1 className="font-display text-[44px] leading-[1.05] tracking-[-0.02em] text-black md:text-[76px]">
            {c.titleStart}
            <br />
            <span className="text-beige-ink italic">{c.titleMiddle}</span>
            <br />
            {c.titleEnd}
          </h1>

          <p className="max-w-[540px] text-[17px] leading-[1.6] text-neutral-700 md:text-[18px]">{c.description}</p>

          <div className="flex flex-wrap gap-4">
            <Button href="#deals">View open deals</Button>
            <Button href="#portfolio" variant="beige">
              See our track record
            </Button>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] font-semibold tracking-[0.12em] text-warm-muted uppercase">
            {c.eyebrow.map((e) => (
              <li key={e} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="text-beige-ink" aria-hidden>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                {e}
              </li>
            ))}
          </ul>
        </div>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[16px] border border-beige/60 bg-beige/60 md:grid-cols-4">
          {c.stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 bg-white/90 px-6 py-5 backdrop-blur-sm">
              <dt className="order-2 text-[14px] font-medium text-warm-muted">{s.label}</dt>
              <dd className="order-1 font-display text-[34px] leading-none text-primary md:text-[42px]">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
