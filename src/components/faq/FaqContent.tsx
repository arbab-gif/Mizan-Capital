"use client";

import { useId, useMemo, useState } from "react";
import { faqCategories, type Faq, type FaqBlock } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/community/Icon";

const text = (blocks: FaqBlock[]) => blocks.map((b) => (typeof b === "string" ? b : b.list.join(" "))).join(" ");

function Answer({ blocks }: { blocks: FaqBlock[] }) {
  return (
    <div className="flex flex-col gap-3 text-[16px] leading-[1.65] text-neutral-700">
      {blocks.map((b, i) =>
        typeof b === "string" ? (
          <p key={i}>{b}</p>
        ) : (
          <ul key={i} className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
            {b.list.map((li) => (
              <li key={li} className="flex items-start gap-2.5">
                <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-beige-btn" />
                {li}
              </li>
            ))}
          </ul>
        ),
      )}
    </div>
  );
}

function Item({ faq, open, onToggle }: { faq: Faq; open: boolean; onToggle: () => void }) {
  const id = useId();
  return (
    <li className={`rounded-[18px] border transition ${open ? "border-beige bg-white shadow-[0_20px_40px_-30px_rgba(48,43,35,0.5)]" : "border-[#e8dfcc] bg-white hover:border-beige"}`}>
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
        >
          <span className="text-[17px] font-semibold text-primary md:text-[18px]">{faq.q}</span>
          <span
            aria-hidden
            className={`flex size-8 shrink-0 items-center justify-center rounded-full transition ${open ? "rotate-45 bg-primary text-cream" : "bg-beige-bg text-primary"}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>
      {open && (
        <div id={id} className="animate-[fadeUp_0.3s_ease-out] px-5 pb-5 md:px-6 md:pb-6">
          <Answer blocks={faq.a} />
        </div>
      )}
    </li>
  );
}

/** FAQ body: search, category navigation (sidebar on desktop, chips on mobile), and accordions. */
export function FaqContent() {
  const [query, setQuery] = useState("");
  const [openKey, setOpenKey] = useState<string | null>(`${faqCategories[0].id}-0`);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqCategories;
    return faqCategories
      .map((c) => ({ ...c, items: c.items.filter((f) => `${f.q} ${text(f.a)}`.toLowerCase().includes(q)) }))
      .filter((c) => c.items.length > 0);
  }, [query]);
  const count = filtered.reduce((n, c) => n + c.items.length, 0);

  return (
    <section className="py-16 md:py-24">
      <Container className="flex flex-col gap-10">
        {/* Search */}
        <label className="relative mx-auto w-full max-w-[680px]">
          <span className="sr-only">Search the FAQ</span>
          <Icon name="search" size={20} className="pointer-events-none absolute top-1/2 left-5 -translate-y-1/2 text-neutral-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions, e.g. “halal”, “returns”, “app”"
            className="h-14 w-full rounded-full border border-[#e3d9c4] bg-white pr-5 pl-13 text-[16px] text-primary shadow-[0_15px_40px_-30px_rgba(48,43,35,0.6)] outline-none placeholder:text-neutral-400 focus:border-beige-btn focus:ring-2 focus:ring-beige/40"
          />
        </label>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
          {/* Category nav */}
          <nav aria-label="FAQ categories" className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
              {faqCategories.map((c) => {
                const hidden = !filtered.some((f) => f.id === c.id);
                return (
                  <li key={c.id} className="shrink-0">
                    <a
                      href={`#${c.id}`}
                      className={`flex items-center gap-3 rounded-full px-4 py-2 text-[14px] font-medium whitespace-nowrap transition lg:rounded-[12px] lg:whitespace-normal lg:py-2.5 lg:text-[15px] ${
                        hidden ? "pointer-events-none text-neutral-300" : "text-primary hover:bg-beige-bg"
                      } bg-white ring-1 ring-[#e8dfcc] lg:bg-transparent lg:ring-0`}
                    >
                      <Icon name={c.icon} size={17} className={`shrink-0 ${hidden ? "" : "text-beige-ink"}`} />
                      {c.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 hidden rounded-[18px] bg-primary p-5 text-cream lg:block">
              <p className="font-display text-[22px] leading-tight text-white">Still have a question?</p>
              <p className="mt-2 text-[14px] leading-[1.55] text-[#c9d3cd]">Talk to our team. We&apos;re happy to walk you through anything.</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-[8px] bg-cream px-4 py-2.5 text-[14px] font-semibold text-primary transition hover:bg-white">
                Schedule a call
                <Icon name="arrow" size={16} />
              </a>
            </div>
          </nav>

          {/* Questions */}
          <div className="flex min-w-0 flex-col gap-12">
            {query && (
              <p className="text-[15px] text-neutral-600" aria-live="polite">
                {count} {count === 1 ? "result" : "results"} for “{query}”
              </p>
            )}
            {filtered.map((c) => (
              <div key={c.id} id={c.id} className="flex scroll-mt-24 flex-col gap-4">
                <h2 className="flex items-center gap-3 font-display text-[28px] text-primary md:text-[32px]">
                  <span className="flex size-10 items-center justify-center rounded-full bg-beige-bg text-beige-ink">
                    <Icon name={c.icon} size={18} />
                  </span>
                  {c.title}
                </h2>
                <ul className="flex flex-col gap-3">
                  {c.items.map((f, i) => {
                    const key = `${c.id}-${i}`;
                    return <Item key={key} faq={f} open={openKey === key || Boolean(query)} onToggle={() => setOpenKey((k) => (k === key ? null : key))} />;
                  })}
                </ul>
              </div>
            ))}
            {count === 0 && (
              <div className="rounded-[18px] bg-beige-bg p-8 text-center">
                <p className="font-display text-[24px] text-primary">No questions match “{query}”.</p>
                <p className="mt-2 text-[15px] text-neutral-600">Try a different word, or ask our team directly.</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
