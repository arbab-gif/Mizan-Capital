import { businessCards as b } from "@/data/community";
import { Container } from "@/components/ui/Container";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { Icon } from "./Icon";

/** Dark circle with an up/down arrow, used on the stat cards. */
function Trend({ dir }: { dir: "up" | "down" }) {
  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={dir === "down" ? "rotate-180" : ""} aria-hidden>
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </span>
  );
}

function Card({ visual, icon, title, body }: { visual: React.ReactNode; icon: string; title: string; body: string }) {
  return (
    <article className="flex flex-col gap-6 rounded-[20px] bg-white p-6 shadow-[0_30px_60px_-45px_rgba(48,43,35,0.45)] md:p-7">
      <div className="flex h-[256px] flex-col justify-center rounded-[16px] border border-[#e8dfcc] bg-cream-light p-5">{visual}</div>
      <div className="flex flex-col gap-2">
        <h3 className="flex items-center gap-2.5 font-display text-[24px] leading-tight text-primary">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-beige-bg text-beige-ink">
            <Icon name={icon} size={17} />
          </span>
          {title}
        </h3>
        <p className="text-[15px] leading-[1.55] text-neutral-600">{body}</p>
      </div>
    </article>
  );
}

/**
 * "For business owners" (client feedback: keep the concept, replace the photo cards with real statistics
 * business owners can use, closer to the Home "Real assets" cards). Beige band, three white data cards.
 */
export function ForBusinesses() {
  return (
    <section id="business" className="relative isolate scroll-mt-20 overflow-hidden border-t border-[#ddcfb3] bg-beige-bg py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_top_left,black_15%,transparent_60%)]"
        style={{ backgroundImage: STAR_PATTERN }}
      />
      <Container className="flex flex-col gap-12">
        <div className="flex max-w-[760px] flex-col gap-5">
          <span className="w-fit rounded-full bg-white px-3 py-1.5 text-[13px] font-medium text-warm-ink">{b.eyebrow}</span>
          <h2 className="font-display text-[38px] leading-[1.1] tracking-[-0.01em] text-primary md:text-[52px]">{b.title}</h2>
          <p className="text-[17px] leading-[1.65] text-neutral-700">{b.intro}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {/* 1 · Buy smarter together: supplier savings */}
          <Card
            icon="store"
            title="Buy Smarter Together"
            body="Access wholesale pricing by purchasing with other trusted businesses."
            visual={
              <div className="flex flex-col gap-5">
                <p className="text-[14px] font-medium text-neutral-700">Average savings</p>
                <div className="flex items-center gap-4">
                  <Trend dir="down" />
                  <div>
                    <p className="font-display text-[44px] leading-none text-primary">{b.savings.value}</p>
                    <p className="mt-1 text-[14px] text-neutral-500">{b.savings.label}</p>
                  </div>
                </div>
                <div className="flex h-16 items-end gap-2" aria-hidden>
                  {b.savings.bars.map((h, i) => (
                    <span key={i} className="flex-1 rounded-t-[6px]" style={{ height: `${h}%`, background: `rgba(79,143,107,${0.15 + i * 0.18})` }} />
                  ))}
                </div>
              </div>
            }
          />

          {/* 2 · Reach more local customers */}
          <Card
            icon="users"
            title="Reach More Local Customers"
            body="Get featured to members actively looking for Muslim-owned businesses."
            visual={
              <div className="flex flex-col gap-5">
                <p className="text-[14px] font-medium text-neutral-700">More customers</p>
                <div className="flex items-center gap-4">
                  <Trend dir="up" />
                  <div>
                    <p className="font-display text-[44px] leading-none text-primary">{b.customers.value}</p>
                    <p className="mt-1 text-[14px] text-neutral-500">{b.customers.label}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-[12px] bg-beige-bg px-3.5 py-3">
                  <span className="flex -space-x-2" aria-hidden>
                    {["N", "S", "Y", "A"].map((l, i) => (
                      <span
                        key={l}
                        className="flex size-7 items-center justify-center rounded-full text-[11px] font-semibold text-white ring-2 ring-beige-bg"
                        style={{ background: ["#012a1c", "#4f8f6b", "#a88b5d", "#2f6b4b"][i] }}
                      >
                        {l}
                      </span>
                    ))}
                  </span>
                  <p className="text-[13px] leading-tight text-primary">
                    <span className="font-semibold">{b.customers.repeat}</span> {b.customers.repeatLabel}
                  </p>
                </div>
              </div>
            }
          />

          {/* 3 · Save on everyday services */}
          <Card
            icon="briefcase"
            title="Save on Everyday Services"
            body="Shared services at network rates, plus a monthly report of what you saved, what you gave, and who it helped."
            visual={
              <div className="flex flex-col gap-3">
                <p className="flex items-center justify-between text-[14px] font-medium text-neutral-700">
                  Monthly report
                  <span className="rounded-full bg-beige-bg px-2.5 py-0.5 text-[11px] font-semibold text-beige-ink">Network rate</span>
                </p>
                <ul className="flex flex-col">
                  {b.services.map((s) => (
                    <li key={s.name} className="flex items-center justify-between border-b border-[#efe6d3] py-2 text-[14px] last:border-b-0">
                      <span className="text-neutral-700">{s.name}</span>
                      <span className="font-semibold text-[#2f6b4b]">{s.saved}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between rounded-[12px] bg-primary px-4 py-3 text-cream">
                  <span className="text-[13px] text-[#c9d3cd]">Saved this month</span>
                  <span className="font-display text-[24px] leading-none">{b.servicesTotal}</span>
                </div>
              </div>
            }
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[12px] text-neutral-500">Illustrative figures for a neighborhood store; actual results depend on volume and category.</p>
          <a
            href="#partners"
            className="inline-flex items-center gap-2 rounded-[8px] bg-primary px-6 py-3.5 text-[16px] font-semibold text-cream transition hover:bg-forest"
          >
            Explore a business partnership
            <Icon name="arrow" size={18} />
          </a>
        </div>
      </Container>
    </section>
  );
}
