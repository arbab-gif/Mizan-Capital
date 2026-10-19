import Image from "next/image";
import { heroContent } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Navbar } from "./Navbar";

/** Full-bleed hero: arched courtyard photo, soft white fade on the left, dark headline. */
export function Hero() {
  const c = heroContent;
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden lg:h-[832px]">
      <Image src={c.image} alt="" fill priority sizes="100vw" className="-z-20 object-cover object-[70%_center]" />
      {/* Figma: white fade from the left (to ~75%) + dark shade behind the navbar */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.8)_45%,rgba(255,255,255,0)_75%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[210px] bg-gradient-to-b from-black/35 to-transparent" />

      <Navbar cta="solid" />

      <div className="flex h-full flex-col justify-end px-5 pt-[180px] pb-[140px] md:px-16 lg:block lg:p-0">
        <div className="flex max-w-[648px] flex-col gap-12 lg:absolute lg:top-[353px] lg:left-16">
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-[38px] leading-[1.2] tracking-[-0.01em] text-black md:text-[52px]">
              {c.title[0]}
              <br />
              {c.title[1]}
            </h1>
            <p className="text-[16px] leading-[1.6] text-black md:text-[18px]">{c.description}</p>
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
