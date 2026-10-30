import Image from "next/image";
import { initiatives, npHero as c } from "@/data/nonprofit";
import { Navbar } from "@/components/sections/Navbar";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/community/Icon";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

/**
 * Nonprofit hero, matching the Home and Real Estate heroes: full-bleed masjid photo with a soft
 * white fade, dark headline, and the live endowment totals in a strip merged into the image.
 */
export function NpHero() {
  const allocated = initiatives.reduce((s, i) => s + i.allocated, 0);
  const target = initiatives.reduce((s, i) => s + i.endowmentTarget, 0);
  const stats = [
    { value: String(initiatives.length), label: "Active endowments" },
    { value: usd(allocated), label: "Funding allocated" },
    { value: usd(target), label: "Combined endowment goal" },
  ];

  return (
    <section className="relative isolate flex flex-col overflow-hidden lg:min-h-[860px]">
      <Image src="/images/home/project-mosque.jpg" alt="" fill priority sizes="100vw" className="-z-20 object-cover object-[60%_center]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.88)_42%,rgba(255,255,255,0.1)_78%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[240px] bg-gradient-to-t from-white via-white/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[210px] bg-gradient-to-b from-black/35 to-transparent" />

      <Navbar cta="solid" />

      <div className="flex flex-1 flex-col justify-between gap-14 px-5 pt-[150px] pb-14 md:px-16 lg:pt-[190px]">
        <div className="flex max-w-[660px] flex-col gap-8">
          <p className="w-fit rounded-full bg-beige/15 px-4 py-1.5 text-[12px] font-semibold tracking-[0.12em] text-warm-ink uppercase">{c.eyebrow}</p>
          <h1 className="font-display text-[46px] leading-[1.05] tracking-[-0.02em] text-black md:text-[76px]">
            {c.titleStart}
            <br />
            <span className="text-beige-ink italic">{c.titleEnd}</span>
          </h1>
          <p className="max-w-[560px] text-[17px] leading-[1.65] text-neutral-700 md:text-[18px]">{c.description}</p>
          <div className="flex flex-wrap gap-4">
            <Button href="#endowments">Support an initiative</Button>
            <Button href="#involved" variant="beige">
              Get involved
            </Button>
          </div>
          <p className="flex items-center gap-2.5 text-[14px] text-warm-muted">
            <span className="flex size-7 items-center justify-center rounded-full bg-beige/25 text-beige-ink">
              <Icon name="lock" size={14} />
            </span>
            Your gift stays invested. Its profits fund the work, year after year.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-[16px] border border-beige/60 bg-beige/60 sm:grid-cols-3">
          {stats.map((s) => (
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
