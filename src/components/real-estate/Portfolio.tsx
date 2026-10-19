"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { portfolioOutlook, portfolioOverview, properties, type Property } from "@/data/realEstate";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CameraIcon } from "./DealModal";

/** Small before/after thumbnails at the start of each row. */
function Thumbs({ p }: { p: Property }) {
  return (
    <span className="flex gap-1">
      {[p.before, p.after].map((src, i) =>
        src ? (
          <span key={i} className="relative h-10 w-[50px] overflow-hidden rounded-[6px]">
            <Image src={src} alt="" fill sizes="50px" className="object-cover" />
          </span>
        ) : (
          <span key={i} className="h-10 w-[50px] rounded-[6px] bg-beige-bg" />
        ),
      )}
    </span>
  );
}

function Tile({ label, value, highlight, note }: { label: string; value: string; highlight?: boolean; note?: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-[12px] border border-[#e8dfcc] bg-white px-[18px] py-3.5">
      <span className={`text-[11px] font-semibold tracking-[0.08em] uppercase ${highlight ? "text-beige-ink" : "text-neutral-500"}`}>{label}</span>
      <span className={`font-display text-[24px] leading-tight ${highlight ? "text-beige-ink" : "text-primary"}`}>{value}</span>
      {note && <span className="text-[12px] text-neutral-500">{note}</span>}
    </div>
  );
}

/** Photo with a "See before pics" / "See after pics" button linking to the full album. */
function PhotoPanel({ src, kind, href, address }: { src?: string; kind: "before" | "after"; href: string; address: string }) {
  const after = kind === "after";
  return (
    <div className="relative flex h-[220px] flex-1 flex-col justify-between overflow-hidden rounded-[12px] bg-beige-bg p-3.5">
      {src ? (
        <Image src={src} alt={`${address} ${kind} renovation`} fill sizes="(min-width: 768px) 560px, 100vw" className="-z-0 object-cover" />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-[14px] text-neutral-500">After photos coming soon</span>
      )}
      <span className="relative w-fit rounded-full bg-cream px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-primary uppercase">
        {after ? "After" : "Before"}
      </span>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`relative flex w-fit items-center gap-2 rounded-full px-4 py-2.5 text-[14px] font-semibold shadow-sm transition hover:brightness-95 ${
          after ? "bg-primary text-cream" : "bg-white text-primary"
        }`}
      >
        See {kind} pics <span className="text-beige">→</span>
      </a>
    </div>
  );
}

function DealRow({ p, open, onToggle }: { p: Property; open: boolean; onToggle: () => void }) {
  const panelId = useId();
  return (
    <li className="border-t border-[#e8dfcc]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className={`grid w-full grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 px-4 py-3.5 text-left transition hover:bg-cream-light md:grid-cols-[120px_1fr_140px_140px_100px_32px] md:px-7 ${
          open ? "bg-[#fbf8f2]" : ""
        }`}
      >
        <span className="hidden md:block">
          <Thumbs p={p} />
        </span>
        <span className="min-w-0">
          <span className="block text-[16px] font-semibold text-primary">{p.address}</span>
          <span className="flex items-center gap-2 text-[13px] text-neutral-500">
            {p.city}
            <span className="flex items-center gap-1 rounded-full bg-beige-bg px-2 py-0.5 text-[11px] font-semibold text-beige-ink [&_svg]:size-3">
              <CameraIcon />
              Photos
            </span>
          </span>
        </span>
        <span className="hidden text-right text-[16px] font-medium text-primary md:block">{p.deployed}</span>
        <span className="hidden text-right text-[16px] font-medium text-[#2f6b4b] md:block">{p.netProfit}</span>
        <span className="justify-self-end rounded-full bg-beige-bg px-2.5 py-1 text-[13px] font-semibold text-primary">{p.roi}</span>
        <span aria-hidden className={`hidden justify-self-end text-neutral-500 transition-transform md:block ${open ? "rotate-180" : ""}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      {open && (
        <div id={panelId} className="flex animate-[fadeUp_0.3s_ease-out] flex-col gap-3.5 bg-[#fbf8f2] px-4 pt-2 pb-6 md:px-7">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <Tile label="Purchase price" value={p.purchase} />
            <Tile label="Renovation" value={p.renovation} />
            <Tile label="Other costs" value={p.otherCosts} />
            <Tile label="Sale price" value={p.salePrice} />
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <Tile label="Net profit" value={p.netProfit} />
            <Tile label="Investor return" value="12% net" />
            <div className="col-span-2">
              <Tile label="Sadaqah Jariyah" value={p.sadaqah} highlight note="Directed into community causes from this deal." />
            </div>
          </div>
          {/* Client: make "view all photos" more apparent */}
          <a
            href={p.photosUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-4 rounded-[12px] bg-primary px-5 py-4 text-cream transition hover:bg-forest"
          >
            <span className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-beige-btn text-white">
                <CameraIcon />
              </span>
              <span>
                <span className="block text-[16px] font-semibold">View all photos</span>
                <span className="block text-[13px] text-[#c9d3cd]">Full before &amp; after gallery for {p.address}</span>
              </span>
            </span>
            <span className="text-[22px] text-beige transition-transform group-hover:translate-x-1">→</span>
          </a>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PhotoPanel src={p.before} kind="before" href={p.photosUrl} address={p.address} />
            <PhotoPanel src={p.after} kind="after" href={p.photosUrl} address={p.address} />
          </div>
        </div>
      )}
    </li>
  );
}

/**
 * "Property by property": a quick outlook of the current portfolio combined with the completed-deal
 * history (Lovable layout) — scan each deal at a glance, open a row for its numbers and photos.
 */
export function Portfolio() {
  const [openRow, setOpenRow] = useState<string | null>(null);

  return (
    <section id="portfolio" className="scroll-mt-20 py-20 md:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Property by property history"
          eyebrowTone="soft"
          title="Property by property"
          description="Every completed deal across Greater Dayton, line by line. Open any deal to see what we paid, what we invested, and what it returned to investors and the community."
          descriptionClassName="max-w-[760px]"
        />

        <div className="overflow-hidden rounded-[20px] border border-[#e8dfcc] bg-white">
          {/* Current portfolio outlook (client: profit to come + total investment needed) */}
          <div className="flex flex-col gap-5 bg-primary px-5 py-7 text-cream md:px-9">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[12px] font-semibold tracking-[0.1em] text-beige uppercase">Current portfolio outlook</p>
              <p className="text-[14px] text-[#c9d3cd]">3 active properties · next completion Oct 2026</p>
            </div>
            <dl className="grid grid-cols-2 gap-y-6 md:grid-cols-4">
              {portfolioOutlook.stats.map((s, i) => (
                <div key={s.label} className={`flex flex-col gap-1.5 ${i % 2 ? "pl-5 md:pl-7" : i ? "md:pl-7" : ""} ${i ? "md:border-l md:border-white/15" : ""}`}>
                  <dd className={`font-display text-[32px] leading-none md:text-[44px] ${i < 2 ? "text-beige" : "text-cream"}`}>{s.value}</dd>
                  <dt className="order-last text-[14px] text-[#c9d3cd]">{s.label}</dt>
                </div>
              ))}
            </dl>
            <p className="text-[12px] text-[#9fb0a6]">{portfolioOutlook.note}</p>
          </div>

          {/* Completed portfolio totals */}
          <div className="flex flex-col gap-3.5 bg-cream-light px-5 py-5 md:px-7">
            <div className="flex justify-between text-[12px] font-semibold tracking-[0.1em] uppercase">
              <span className="text-neutral-500">Completed portfolio</span>
              <span className="text-beige-ink">Last 2 years</span>
            </div>
            <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {portfolioOverview.map((s, i) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <dt className="text-[11px] font-medium tracking-[0.06em] text-neutral-500 uppercase">{s.label}</dt>
                  <dd className={`font-display text-[26px] md:text-[30px] ${i === 3 ? "text-beige-ink" : "text-primary"}`}>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Table header */}
          <div className="hidden grid-cols-[120px_1fr_140px_140px_100px_32px] gap-x-4 border-t border-[#e8dfcc] px-7 py-3 text-[11px] font-semibold tracking-[0.08em] text-neutral-500 uppercase md:grid">
            <span>Visuals</span>
            <span>Property details</span>
            <span className="text-right">Deployed</span>
            <span className="text-right">Net profit</span>
            <span className="text-right">ROI</span>
            <span />
          </div>

          <ul>
            {properties.map((p) => (
              <DealRow key={p.address} p={p} open={openRow === p.address} onToggle={() => setOpenRow((o) => (o === p.address ? null : p.address))} />
            ))}
          </ul>

          <p className="border-t border-[#e8dfcc] px-7 py-4 text-center text-[13px] text-neutral-500">
            Click any deal to see its numbers and view all photos
          </p>
        </div>
      </Container>
    </section>
  );
}
