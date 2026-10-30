import { partnerSection as p } from "@/data/community";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Icon } from "./Icon";

const ICONS = ["store", "food", "dumbbell", "book", "shirt", "briefcase"];

/**
 * "A shopping center of Muslim-owned businesses": the client's copy beside a storefront-style
 * directory, so this section reads differently from the photo-led audience sections above.
 */
export function ShoppingCenter() {
  return (
    <section id="partners" className="scroll-mt-20 bg-cream-light py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <Eyebrow tone="soft">{p.eyebrow}</Eyebrow>
          <h2 className="font-display text-[38px] leading-[1.1] tracking-[-0.01em] text-primary md:text-[50px]">
            A shopping center of <span className="text-beige-ink italic">Muslim-owned</span> businesses.
          </h2>
          <p className="text-[17px] leading-[1.65] text-neutral-700">{p.body}</p>
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2.5 rounded-[8px] bg-primary px-6 py-3.5 text-[16px] font-medium text-cream transition hover:bg-forest"
          >
            Explore a business partnership
            <Icon name="arrow" size={18} />
          </a>
        </div>

        {/* Storefront directory */}
        <div className="rounded-[28px] border border-[#e8dfcc] bg-white p-4 md:p-6">
          <div className="mb-4 flex items-center justify-between px-1">
            <p className="text-[12px] font-semibold tracking-[0.12em] text-beige-ink uppercase">In the app directory</p>
            <p className="text-[12px] text-neutral-500">Greater Dayton</p>
          </div>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {p.directory.map((d, i) => (
              <li
                key={d.name}
                className="group flex flex-col gap-6 overflow-hidden rounded-[18px] border border-[#efe6d3] bg-[#fcfaf6] transition hover:border-beige"
              >
                {/* awning */}
                <span aria-hidden className="flex h-3">
                  {Array.from({ length: 8 }).map((_, k) => (
                    <span key={k} className={`flex-1 rounded-b-full ${k % 2 ? "bg-beige/60" : i % 2 ? "bg-primary/85" : "bg-[#4f8f6b]/80"}`} />
                  ))}
                </span>
                <span className="flex flex-col gap-3 px-4 pb-4">
                  <span className="flex size-11 items-center justify-center rounded-full bg-beige-bg text-beige-ink transition group-hover:bg-primary group-hover:text-cream">
                    <Icon name={ICONS[i]} size={20} />
                  </span>
                  <span>
                    <span className="block text-[16px] font-semibold text-primary">{d.name}</span>
                    <span className="block text-[13px] text-neutral-500">{d.note}</span>
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
