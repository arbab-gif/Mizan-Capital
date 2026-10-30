import Image from "next/image";
import { customerPitch as c } from "@/data/community";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Icon } from "./Icon";

/** A member's receipt: the perk saved and the round-up sent, from one ordinary grocery run. */
function Receipt() {
  const r = c.receipt;
  return (
    <div className="w-[300px] rounded-[18px] bg-white p-5 shadow-[0_30px_60px_-30px_rgba(48,43,35,0.6)] ring-1 ring-black/5">
      <div className="flex items-center justify-between border-b border-dashed border-neutral-300 pb-3">
        <span className="text-[14px] font-semibold text-primary">{r.store}</span>
        <span className="text-[11px] text-neutral-500">Paid with Mizan</span>
      </div>
      <dl className="flex flex-col gap-2 py-3 text-[14px]">
        {r.lines.map((l) => (
          <div key={l.label} className="flex justify-between">
            <dt className={l.perk ? "flex items-center gap-1.5 text-beige-ink" : "text-neutral-600"}>
              {l.perk && <Icon name="tag" size={14} />}
              {l.label}
            </dt>
            <dd className={l.perk ? "font-semibold text-beige-ink" : "text-primary"}>{l.value}</dd>
          </div>
        ))}
        <div className="flex justify-between border-t border-neutral-200 pt-2 font-semibold text-primary">
          <dt>Total</dt>
          <dd>{r.total}</dd>
        </div>
      </dl>
      <div className="flex items-center gap-3 rounded-[12px] bg-primary px-3.5 py-3 text-cream">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-beige-btn text-white">
          <Icon name="heart" size={16} />
        </span>
        <p className="text-[13px] leading-snug">
          <span className="font-semibold text-white">{r.roundUp.amount} rounded up</span>
          <br />
          to {r.roundUp.to}
        </p>
      </div>
    </div>
  );
}

/**
 * Customer pitch (client: "a pitch and unique design on why customers should" join).
 * Warm, lifestyle-led: a real shopping moment, the receipt that shows the benefit, then the reasons.
 */
export function ForCustomers() {
  return (
    <section id="customers" className="scroll-mt-20 bg-beige-bg py-20 md:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        {/* Photo with the receipt and monthly summary layered on it */}
        <div className="relative pb-24 lg:pb-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] lg:aspect-[4/4.6]">
            <Image
              src="/images/community/partner-grocery.png"
              alt="A mother and son choosing fresh produce at a community grocery"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="scale-[1.25] object-cover object-[50%_80%]"
              style={{ transformOrigin: "50% 80%" }}
            />
          </div>
          <div className="absolute bottom-0 left-4 sm:left-8 lg:-bottom-10 lg:-left-8">
            <Receipt />
          </div>
          <div className="absolute top-6 right-4 hidden rounded-[16px] bg-white/95 p-4 shadow-xl backdrop-blur sm:block lg:-right-8">
            <p className="text-[11px] font-semibold tracking-[0.08em] text-beige-ink uppercase">Your month with Mizan</p>
            <dl className="mt-2 flex flex-col gap-1.5">
              {c.month.map((m) => (
                <div key={m.label} className="flex items-baseline gap-2">
                  <dd className="font-display text-[22px] leading-none text-primary">{m.value}</dd>
                  <dt className="text-[13px] text-neutral-600">{m.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <Eyebrow tone="soft">{c.eyebrow}</Eyebrow>
            <h2 className="font-display text-[38px] leading-[1.1] tracking-[-0.01em] text-primary md:text-[50px]">{c.title}</h2>
            <p className="text-[17px] leading-[1.65] text-neutral-700">{c.pitch}</p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {c.reasons.map((r) => (
              <li key={r.title} className="flex flex-col gap-2.5 rounded-[18px] bg-white p-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-beige/25 text-beige-ink">
                  <Icon name={r.icon} size={19} />
                </span>
                <p className="text-[17px] font-semibold text-primary">{r.title}</p>
                <p className="text-[14.5px] leading-[1.55] text-neutral-600">{r.body}</p>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-[8px] bg-primary px-6 py-3.5 text-[16px] font-medium text-cream transition hover:bg-forest"
            >
              Join the waitlist, get $10
              <Icon name="arrow" size={18} />
            </a>
            <span className="text-[13px] text-neutral-500">Free to join. Perks and figures shown are examples.</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
