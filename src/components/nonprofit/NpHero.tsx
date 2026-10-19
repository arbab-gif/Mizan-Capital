import Image from "next/image";
import Link from "next/link";
import { initiatives, npHero as c } from "@/data/nonprofit";
import { Navbar } from "@/components/sections/Navbar";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { Icon } from "@/components/community/Icon";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

/** Nonprofit hero: copy on the left, arched masjid photo on the right, live endowment totals below. */
export function NpHero() {
  const allocated = initiatives.reduce((s, i) => s + i.allocated, 0);
  const target = initiatives.reduce((s, i) => s + i.endowmentTarget, 0);
  const stats = [
    { value: String(initiatives.length), label: "Active endowments" },
    { value: usd(allocated), label: "Funding allocated" },
    { value: usd(target), label: "Combined endowment goal" },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-primary">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] [mask-image:radial-gradient(ellipse_at_75%_45%,black_10%,transparent_65%)]"
        style={{ backgroundImage: STAR_PATTERN }}
      />
      <Navbar />

      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-14 px-5 pt-[150px] pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-[170px]">
        <div className="flex flex-col gap-7">
          <Eyebrow tone="light">{c.eyebrow}</Eyebrow>
          <h1 className="font-display text-[46px] leading-[1.04] tracking-[-0.02em] text-white md:text-[72px]">
            {c.titleStart}
            <br />
            <span className="font-medium text-gold italic">{c.titleEnd}</span>
          </h1>
          <p className="max-w-[560px] text-[17px] leading-[1.65] font-medium text-neutral-300 md:text-[18px]">{c.description}</p>
          <div className="flex flex-wrap items-stretch gap-4">
            <ArrowButton href="#endowments">Explore our projects</ArrowButton>
            <Link
              href="#involved"
              className="flex items-center justify-center rounded-[4px] border border-cream/70 bg-white/8 px-6 py-0.5 text-[18px] leading-[1.5] font-medium text-cream backdrop-blur-[7px] transition hover:bg-white/15"
            >
              Get involved
            </Link>
          </div>
        </div>

        {/* Arched photo */}
        <div className="relative mx-auto w-full max-w-[440px]">
          <div aria-hidden className="absolute -inset-3 translate-x-4 translate-y-4 rounded-t-full rounded-b-[24px] border border-gold/50" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[24px]">
            <Image src={c.image} alt="Interior of the ISGD masjid" fill priority sizes="440px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-4 flex max-w-[290px] items-start gap-3 rounded-[16px] bg-white p-4 shadow-xl md:-left-10">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Icon name="lock" size={18} />
            </span>
            <p className="text-[14px] leading-snug text-primary">
              <span className="block font-medium">Your gift stays invested.</span>
              <span className="text-neutral-500">Its profits fund the work, year after year.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-5 pt-10 pb-20">
        <dl className="grid grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
          {stats.map((s, i) => (
            <div key={s.label} className={`flex flex-col gap-1 ${i > 0 ? "sm:border-l sm:border-white/15 sm:pl-8" : ""}`}>
              <dd className="font-display text-[40px] leading-none text-white">{s.value}</dd>
              <dt className="order-first text-[13px] tracking-[0.1em] text-cream/60 uppercase">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
