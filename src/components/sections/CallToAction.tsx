import Image from "next/image";
import { ctaContent as c } from "@/data/home";
import { Button } from "@/components/ui/Button";

/**
 * "Invest today. Create impact forever." — light full-width banner over a photo with a white fade on the left.
 * Pass `image` to use a different (local) photo, e.g. a property on the Real Estate page.
 */
export function CallToAction({ image = c.image, imagePosition = "center" }: { image?: string; imagePosition?: string } = {}) {
  return (
    <section className="relative isolate overflow-hidden lg:h-[450px]">
      <Image src={image} alt="" fill sizes="100vw" className="-z-20 object-cover" style={{ objectPosition: imagePosition }} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.7)_40%,rgba(255,255,255,0)_75%)]" />

      <div className="flex h-full flex-col justify-center px-5 py-16 md:px-[136px] lg:py-0">
        <div className="flex max-w-[669px] flex-col gap-[49px]">
          <div className="flex flex-col gap-[18.645px]">
            <h2 className="font-display text-[36px] leading-[1.2] tracking-[-0.01em] text-primary md:text-[51.274px]">
              {c.title[0]}
              <br />
              {c.title[1]}
            </h2>
            <p className="text-[18px] leading-[1.6] text-neutral-600 md:text-[20.976px]">{c.description}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href={c.primaryCta.href}>{c.primaryCta.label}</Button>
            <Button href={c.secondaryCta.href} variant="beige">
              {c.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
