import Image from "next/image";
import Link from "next/link";
import { appPromo as c } from "@/data/home";
import { Eyebrow } from "@/components/ui/SectionHeading";

/** "Redirecting Community Capital" — full-bleed beige app promo with a "Join the waitlist" CTA. */
export function AppDownload() {
  return (
    <section className="overflow-hidden bg-beige-bg">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[60px] px-5 pt-8 md:px-[94px] lg:flex-row lg:items-end lg:pr-0">
        <div className="flex max-w-[580px] flex-col gap-11 pt-10 pb-10 lg:flex-1 lg:self-center">
          <div className="flex flex-col gap-4">
            <Eyebrow tone="soft">
              {c.eyebrow} -{" "}<span className="text-beige-ink">{c.eyebrowHighlight}</span>
            </Eyebrow>
            <h2 className="font-display text-[32px] leading-[1.2] font-medium tracking-[-0.01em] text-black md:text-[44px]">
              {c.title}
            </h2>
            <p className="text-[18px] leading-[1.6] text-black/65">{c.description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-3.5">
            <Link
              href={c.cta.href}
              className="group relative inline-flex items-center gap-3 rounded-[10px] bg-primary py-4 pr-[22px] pl-[26px] text-[17px] font-semibold text-cream shadow-[0_10px_24px_-6px_rgba(1,42,28,0.25)] transition hover:bg-forest"
            >
              {c.cta.label}
              <span aria-hidden className="text-[18px] text-beige transition-transform group-hover:translate-x-0.5">
                →
              </span>
              {/* Promotional tag on the button */}
              <span className="absolute -top-4 -right-3.5 -rotate-[4deg] rounded-full border-2 border-white bg-beige px-3 py-1 text-[11px] font-bold tracking-[0.06em] whitespace-nowrap text-primary uppercase">
                {c.promoTag}
              </span>
            </Link>
            <p className="text-[14px] text-[#5e5e5e]">{c.note}</p>
          </div>
        </div>

        <div className="relative aspect-[778/488] w-full max-w-[778px] shrink-0 self-end lg:-mr-[51px] lg:w-[778px]">
          <Image src={c.image} alt="Mizan community app screens" fill sizes="(min-width: 1024px) 778px, 100vw" className="object-contain object-bottom" />
        </div>
      </div>
    </section>
  );
}
