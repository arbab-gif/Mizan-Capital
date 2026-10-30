import type { Metadata } from "next";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { Artboard, Btn, C, Calculator, CtaBlock, Glyph, MaskIcon, MobileFooter, MobileNav, SectionHead } from "../_mobile/kit";

/**
 * Mobile (390px) design of the Real Estate screen, built from the Figma frame
 * "Real Estate — Feedback" (node 369:2707): same copy, colors, images and section order,
 * re-flowed for a phone. Internal review only.
 */
export const metadata: Metadata = {
  title: "Real Estate — Mobile design (internal review)",
  robots: { index: false, follow: false },
};

const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const A = "/images/figma-re";

type Deal = {
  type: string;
  status: string;
  statusDark: boolean;
  name: string;
  city: string;
  stats: [string, string][];
  profit: string;
  img: string;
};

const DEALS: Deal[] = [
  {
    type: "6-unit apartment",
    status: "Open to investors",
    statusDark: true,
    name: "2151 Larch Street",
    city: "Springfield, OH 45503",
    stats: [["Investment", "$150,000"], ["Est. ARV", "$415,000"], ["Completion", "Oct 2026"]],
    profit: "$190,500",
    img: "deal-larch.jpg",
  },
  {
    type: "Single family · 4 bd / 2 ba",
    status: "Renovation underway",
    statusDark: true,
    name: "2024 Rustic Rd",
    city: "Dayton, OH 45405",
    stats: [["Rehab budget", "$106,000"], ["Est. ARV", "$175,000"], ["Completion", "Oct 2026"]],
    profit: "$49,000",
    img: "deal-rustic.jpg",
  },
  {
    type: "Single family · 3 bd / 3 ba",
    status: "Expected after",
    statusDark: false,
    name: "108 McClure Street",
    city: "Dayton, OH 45410",
    stats: [["Investment", "$200,000"], ["Exit", "Lease-buy"], ["Completion", "Nov 2026"]],
    profit: "$90,500",
    img: "deal-mcclure.jpg",
  },
];

/* Rows of the property-by-property table; thumbnails are the Figma ones. */
const ROWS: { a: string; deployed: string; net: string; roi: string; t: [string, string]; open?: boolean }[] = [
  { a: "307 N Isabella Street", deployed: "$109,000", net: "$56,800", roi: "52.1%", t: ["before.jpg", "after.jpg"] },
  { a: "814 W North Street", deployed: "$135,000", net: "$120,000", roi: "88.9%", t: ["before.jpg", "after.jpg"], open: true },
  { a: "834 W North Street", deployed: "$145,600", net: "$96,900", roi: "66.6%", t: ["thumb-289.jpg", "thumb-811.jpg"] },
  { a: "218 N Jackson Street", deployed: "$135,600", net: "$116,600", roi: "86.0%", t: ["thumb-0f8.jpg", "thumb-752.jpg"] },
  { a: "2149 Larch Street", deployed: "$100,000", net: "$52,000", roi: "52.0%", t: ["thumb-0f8.jpg", "thumb-752.jpg"] },
  { a: "4416 Midway Avenue", deployed: "$81,000", net: "$38,500", roi: "47.5%", t: ["thumb-0f8.jpg", "thumb-752.jpg"] },
  { a: "835 Dennison Avenue", deployed: "$85,000", net: "$60,500", roi: "71.2%", t: ["thumb-f1b.jpg", "thumb-811.jpg"] },
  { a: "4516 Echelberger Road", deployed: "$89,000", net: "$56,000", roi: "62.9%", t: ["thumb-cf0.jpg", "thumb-e2e.jpg"] },
  { a: "421 Struckhardt Road", deployed: "$161,500", net: "$31,980", roi: "19.8%", t: ["thumb-0f8.jpg", "thumb-752.jpg"] },
  { a: "128 N Marion Street", deployed: "$76,000", net: "$54,150", roi: "71.3%", t: ["thumb-0f8.jpg", "thumb-752.jpg"] },
  { a: "129 E Hudson Avenue", deployed: "$80,000", net: "$35,300", roi: "44.1%", t: ["thumb-0f8.jpg", "thumb-752.jpg"] },
  { a: "72 S Garfield Street", deployed: "$117,500", net: "$57,000", roi: "48.5%", t: ["thumb-0f8.jpg", "thumb-752.jpg"] },
];

const PIN = "M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11zM12 12.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8z";

function DealCard({ d }: { d: Deal }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_24px_50px_-28px_rgba(1,42,28,0.45)]" style={{ border: `1px solid ${C.line}` }}>
      <div className="relative h-[190px] shrink-0">
        <Image src={`${A}/${d.img}`} alt="" fill sizes="330px" className="object-cover" />
        <span className="absolute top-3 left-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold tracking-[0.06em] text-[#012a1c] uppercase">{d.type}</span>
        <span
          className="absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.06em] uppercase"
          style={d.statusDark ? { background: C.green, color: "#fff" } : { background: "#557a66", color: "#fff" }}
        >
          {d.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div>
          <h3 className="text-[24px] leading-tight" style={{ color: C.green }}>{d.name}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-[13px] text-[#6b6b6b]">
            <Glyph d={PIN} color="#8a8a8a" size={13} />
            {d.city}
          </p>
        </div>
        <dl className="grid grid-cols-3 divide-x divide-[#e7e5e0] border-y border-[#e7e5e0] py-3">
          {d.stats.map(([k, v], i) => (
            <div key={k} className={i ? "pl-2.5" : "pr-2.5"}>
              <dt className="text-[9.5px] tracking-[0.06em] text-[#8a8a8a] uppercase">{k}</dt>
              <dd className="mt-0.5 text-[14px] font-semibold" style={{ color: C.green }}>{v}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-col gap-2 rounded-[12px] p-3.5" style={{ background: C.cream }}>
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[10.5px] font-medium tracking-[0.08em] uppercase" style={{ color: C.beigeInk }}>Projected profit</p>
              <p className="text-[32px] leading-none" style={{ color: C.green }}>{d.profit}</p>
            </div>
            <p className="text-right text-[11px] leading-tight text-[#797164]">
              to be shared
              <br />
              with investors
              <br />& community
            </p>
          </div>
          <div className="flex h-1 gap-[3px]">
            <span className="flex-[5] rounded-full" style={{ background: C.green }} />
            <span className="flex-[2] rounded-full" style={{ background: C.beigeInk }} />
            <span className="flex-[3] rounded-full bg-[#4f8f6b]" />
          </div>
          <p className="text-[10.5px] text-[#797164]">After investor distributions: 50% reinvest · 20% community · 30% nonprofits</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-[14px] font-medium" style={{ color: C.green }}>View deal details →</span>
          <span className="rounded-[6px] px-4 py-2 text-[13px] font-medium text-white" style={{ background: C.green }}>Invest</span>
        </div>
      </div>
    </article>
  );
}

function Tile({ k, v, gold = false }: { k: string; v: string; gold?: boolean }) {
  return (
    <div className="rounded-[10px] bg-white px-3 py-2.5" style={{ border: `1px solid ${C.line}` }}>
      <p className="text-[9.5px] tracking-[0.06em] text-[#6b6b6b] uppercase">{k}</p>
      <p className="font-display text-[20px]" style={{ color: gold ? C.beigeInk : C.green }}>{v}</p>
    </div>
  );
}

export default function RealEstateMobileDesign() {
  return (
    <Artboard className={dm.className}>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden" style={{ background: "#fbfaf8" }}>
        <div className="relative h-[400px]">
          <Image src={`${A}/hero.jpg`} alt="" fill priority sizes="390px" className="object-cover object-[60%_55%]" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, #fbfaf8 0%, rgba(251,250,248,0.85) 14%, rgba(251,250,248,0) 45%)" }} />
          {/* light wash at the top keeps the dark logo readable over the photo */}
          <div className="absolute inset-x-0 top-0 h-[110px]" style={{ background: "linear-gradient(180deg, rgba(251,250,248,0.85), rgba(251,250,248,0))" }} />
        </div>
        <MobileNav />
        <div className="relative -mt-12 flex flex-col gap-6 px-5 pb-14">
          <h1 className="font-display text-[42px] leading-[1.1] tracking-[-0.01em] text-black">
            Real homes.
            <br />
            <span style={{ color: C.btnBeige }}>Real returns.</span>
            <br />
            Lasting impact.
          </h1>
          <p className="text-[16px] leading-[1.6] text-[#3a3a3a]">
            We acquire, renovate, and hold collateralized real estate across Greater Dayton, turning every property into halal returns for investors and a growing fund for the community.
          </p>
          <div className="flex flex-col gap-3">
            <Btn full>Become an Investor</Btn>
            <Btn variant="beige" full>
              Download Overview
            </Btn>
          </div>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[12px] tracking-[0.1em] text-[#6b6b6b] uppercase">
            {["Asset-backed", "Shariah compliant", "No interest"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <span style={{ color: C.btnBeige }}>✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── Current opportunities (carousel, middle card first) ───────── */}
      <section className="flex flex-col gap-8 pt-4 pb-14">
        <div className="px-5">
          <SectionHead
            pill={
              <>
                <span className="size-1.5 rounded-full" style={{ background: C.beigeInk }} />
                Open to Investors
              </>
            }
            title="Current Opportunities"
            body="Asset-backed, Shariah-compliant deals open for participation today. Each one returns profit to investors while funding community impact."
          />
        </div>
        <div className="relative h-[610px]">
          {/* neighbours peek in on both sides, active card in front */}
          <div className="absolute top-8 -left-[262px] h-[560px] w-[290px] opacity-50">
            <DealCard d={DEALS[1]} />
          </div>
          <div className="absolute top-8 -right-[262px] h-[560px] w-[290px] opacity-50">
            <DealCard d={DEALS[2]} />
          </div>
          <div className="absolute top-0 left-1/2 h-[600px] w-[318px] -translate-x-1/2">
            <DealCard d={DEALS[0]} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 text-[15px]">
          <span className="flex size-10 items-center justify-center rounded-full border border-[#d4d4d4]" style={{ color: C.green }}>←</span>
          <span style={{ color: C.green }}>
            01 <span className="text-[#8a8a8a]">/ 04</span>
          </span>
          <span className="flex size-10 items-center justify-center rounded-full border border-[#d4d4d4]" style={{ color: C.green }}>→</span>
        </div>
      </section>

      {/* ───────── Where the profits go ───────── */}
      <section className="flex flex-col gap-6 px-5 pb-16">
        <SectionHead
          pill="Profit Redistribution"
          title="Where The Profits Go"
          body="Real estate returns with a community purpose. Investors are paid first; what remains is put to work for the community."
        />
        <div className="flex flex-col gap-3">
          {[
            { p: "50%", c: C.green, t: "Real estate reinvestment", d: "Funds future property acquisitions and renovations to grow the capital base." },
            { p: "20%", c: C.beigeInk, t: "Community development", d: "Builds community businesses, services, and infrastructure that create jobs." },
            { p: "30%", c: "#4f8f6b", t: "Nonprofits & endowments", d: "Launches community programs and endowments that sustain them over time." },
          ].map((x) => (
            <div key={x.t} className="rounded-[14px] p-5" style={{ background: "#f7f4ee" }}>
              <p className="font-display text-[48px] leading-none" style={{ color: x.c }}>{x.p}</p>
              <p className="mt-3 text-[16px] font-semibold" style={{ color: C.green }}>{x.t}</p>
              <p className="mt-1.5 text-[14px] leading-[1.5]" style={{ color: C.body }}>{x.d}</p>
            </div>
          ))}
        </div>
        <span className="mx-auto inline-flex h-11 items-center gap-2 rounded-[6px] px-5 text-[14px] font-medium text-white" style={{ background: C.green }}>
          Learn more about profit sharing <span aria-hidden>→</span>
        </span>
      </section>

      {/* ───────── Property by property ───────── */}
      <section className="px-3 pb-16">
        <div className="flex flex-col gap-6 rounded-[16px] px-3 py-8" style={{ background: C.calm }}>
          <SectionHead
            pill="Property By Property History"
            title="Property By Property"
            body="Every completed deal across Greater Dayton, line by line. Open any deal to see what we paid, what we invested, and what it returned to investors and the community."
          />

          {/* Completed portfolio */}
          <div className="overflow-hidden rounded-[14px] bg-white" style={{ border: `1px solid ${C.line}` }}>
            <div className="flex justify-between border-b px-4 py-3 text-[10.5px] tracking-[0.08em] uppercase" style={{ borderColor: C.line }}>
              <span className="text-[#6b6b6b]">Completed portfolio</span>
              <span style={{ color: "#b77c00" }}>Last 2 years</span>
            </div>
            <dl className="grid grid-cols-2">
              {[
                { v: "12", l: "Properties", i: "/icons/icon-buildings.svg" },
                { v: "$1,315,200", l: "Capital deployed", i: "/icons/icon-money-send.svg" },
                { v: "$775,730", l: "Net profit", i: "/icons/icon-trend-up.svg" },
                { v: "$227,859", l: "Sadaqah Jariyah", i: "/icons/icon-people.svg" },
              ].map((s, i) => (
                <div
                  key={s.l}
                  className="flex items-start justify-between gap-2 p-4"
                  style={{ borderRight: i % 2 === 0 ? `1px solid ${C.line}` : undefined, borderBottom: i < 2 ? `1px solid ${C.line}` : undefined }}
                >
                  <div>
                    <dd className="font-display text-[22px] leading-tight" style={{ color: C.green }}>{s.v}</dd>
                    <dt className="text-[13px] text-[#6b6b6b]">{s.l}</dt>
                  </div>
                  <MaskIcon src={s.i} color="#b77c00" size={24} />
                </div>
              ))}
            </dl>
          </div>

          {/* Deal list */}
          <ul className="overflow-hidden rounded-[14px] bg-white" style={{ border: `1px solid ${C.line}` }}>
            <li className="flex justify-between px-4 py-2.5 text-[10px] tracking-[0.08em] text-[#6b6b6b] uppercase">
              <span>Property details</span>
              <span>Net profit · ROI</span>
            </li>
            {ROWS.map((r) => (
              <li key={r.a} className="border-t" style={{ borderColor: C.line, background: r.open ? "#fbf8f2" : undefined }}>
                <div className="flex items-center gap-2.5 px-3 py-3">
                  <span className="flex shrink-0 gap-1">
                    {r.t.map((t, i) => (
                      <span key={i} className="relative size-[30px] overflow-hidden rounded-[5px]">
                        <Image src={`${A}/${t}`} alt="" fill sizes="32px" className="object-cover" />
                      </span>
                    ))}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13.5px] leading-tight font-semibold" style={{ color: C.green }}>{r.a}</span>
                    <span className="mt-0.5 flex items-center gap-1 text-[11.5px] text-[#6b6b6b]">
                      <Glyph d={PIN} color="#8a8a8a" size={11} />
                      Springfield, OH 45504
                    </span>
                    <span className="block text-[11.5px] text-[#6b6b6b]">
                      Deployed <span className="font-medium text-[#262626]">{r.deployed}</span>
                    </span>
                  </span>
                  <span className="flex shrink-0 flex-col items-end gap-1">
                    <span className="text-[13px] font-medium text-[#2f6b4b]">{r.net}</span>
                    <span className="rounded-full px-2 py-0.5 text-[11px] font-semibold" style={{ background: C.sand, color: C.green }}>{r.roi}</span>
                  </span>
                  <Glyph d={r.open ? "M6 15l6-6 6 6" : "M6 9l6 6 6-6"} color="#6b6b6b" size={16} />
                </div>
                {r.open && (
                  <div className="flex flex-col gap-2.5 px-3 pb-4">
                    <div className="grid grid-cols-2 gap-2">
                      <Tile k="Purchase price" v="$70,000" />
                      <Tile k="Renovation" v="$65,000" />
                      <Tile k="Other costs" v="$5,000" />
                      <Tile k="Sale price" v="$260,000" />
                      <Tile k="Net profit" v="$120,000" />
                      <Tile k="Investor return" v="12% net" />
                    </div>
                    <Tile k="Sadaqah Jariyah" v="$39,000" gold />
                    {[
                      { k: "Before", img: "before.jpg", n: "6 photos" },
                      { k: "After", img: "after.jpg", n: "8 photos" },
                    ].map((p) => (
                      <div key={p.k} className="relative h-[170px] overflow-hidden rounded-[10px]">
                        <Image src={`${A}/${p.img}`} alt={`${p.k} renovation`} fill sizes="340px" className="object-cover" />
                        <span className="absolute top-2.5 left-2.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold tracking-[0.08em] uppercase" style={{ color: C.green }}>
                          {p.k}
                        </span>
                        <span className="absolute right-2.5 bottom-2.5 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] text-white" style={{ background: "rgba(1,42,28,0.85)" }}>
                          <Glyph d="M4 5h16v14H4zM4 15l4-4 4 4 3-3 5 5" color="#fff" size={13} />
                          {p.n}
                        </span>
                      </div>
                    ))}
                    <span className="text-[13px] font-medium" style={{ color: C.green }}>Learn more about this deal →</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── Shariah compliance ───────── */}
      <section className="relative isolate overflow-hidden px-5 py-14" style={{ background: "#0d3e26" }}>
        <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.12]" style={{ backgroundImage: STAR_PATTERN }} />
        <div className="flex flex-col gap-8">
          <SectionHead light pill="Shariah Compliance" title="How every deal stays halal" body="Our process is built from the ground up so your wealth grows in a way you can be proud of." />
          <ol className="flex flex-col items-center">
            {[
              { n: "1", t: "No riba, real assets", d: "Projects are funded without interest-bearing debt. Your capital is tied to a tangible property from day one, so returns come from real profit, not loans or leverage.", i: "M12 4v16M5 20h14M6 8h12M6 8l-3 6a3 3 0 0 0 6 0zM18 8l-3 6a3 3 0 0 0 6 0z" },
              { n: "2", t: "Shariah advisory review", d: "Every deal structure is reviewed to avoid riba, gharar, and prohibited industries. Only transactions aligned with Islamic finance principles receive capital.", i: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" },
              { n: "3", t: "Shared profit, shared purpose", d: "A Mudarabah-style agreement: investors provide capital, Mizan provides expertise, and profits are shared on clear terms, with 30% directed to Sadaqah Jariyah.", i: "M3 14h4l3 2h5a1.5 1.5 0 0 0 0-3h-3M3 20h12l6-4M15 6.5a2.5 2.5 0 1 0 0-.01" },
            ].map((s, i) => (
              <li key={s.n} className="flex w-full flex-col items-center">
                <div className="w-full rounded-[14px] p-5" style={{ background: "#0b3521", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-start justify-between">
                    <Glyph d={s.i} color={C.btnBeige} size={30} />
                    <span className="font-display text-[48px] leading-none text-white/30">{s.n}</span>
                  </div>
                  <h3 className="mt-5 font-display text-[22px] font-medium text-white">{s.t}</h3>
                  <p className="mt-2 text-[15px] leading-[1.55] text-white/75">{s.d}</p>
                </div>
                {i < 2 && (
                  <svg width="12" height="40" viewBox="0 0 12 40" fill="none" className="my-3" aria-hidden>
                    <path d="M6 0v38M1 33l5 6 5-6" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── Calculator ───────── */}
      <section className="px-5 py-14">
        <Calculator
          pill="Wealth & Impact"
          title="What Your Investment Could Look Like"
          body="Projected portfolio growth for this life, and cumulative Sadaqah Jariyah impact for the next."
        />
      </section>

      {/* ───────── Investor voices ───────── */}
      <section className="flex flex-col gap-8 px-5 pb-16">
        <SectionHead pill="Investor Voices" title="What Our Investors Say" />
        <div className="flex flex-col gap-4">
          {[
            { h: "Growth I can explain to my family.", q: "I wanted my savings to grow without compromising my deen. Every update shows exactly which property my money is in, and knowing part of the profit supports our masjid makes it feel complete.", dark: false },
            { h: "There is a real building behind it.", q: "Asset-backed was the deciding factor for me. The reporting is clear, the structure is halal, and I can drive past the homes my investment helped renovate.", dark: true },
            { h: "Growth I can explain to my family.", q: "I wanted my savings to grow without compromising my deen. Every update shows exactly which property my money is in, and knowing part of the profit supports our masjid makes it feel complete.", dark: false },
          ].map((t, i) => (
            <figure key={i} className="flex flex-col gap-3 rounded-[16px] p-5" style={{ background: t.dark ? "#0d3e26" : "#f1f3f2" }}>
              <span className="font-display text-[64px] leading-[0.5] italic" style={{ color: "#a88b5d" }} aria-hidden>
                “
              </span>
              <h3 className="font-display text-[20px]" style={{ color: t.dark ? "#fff" : C.green }}>{t.h}</h3>
              <blockquote className="text-[14px] leading-[1.6]" style={{ color: t.dark ? "rgba(255,255,255,0.75)" : "#6b6b6b" }}>
                {t.q}
              </blockquote>
              <figcaption className="mt-2 flex items-center gap-3 border-t pt-4" style={{ borderColor: t.dark ? "rgba(255,255,255,0.12)" : "#dfe3e1" }}>
                <span className="relative size-9 overflow-hidden rounded-full">
                  <Image src="/images/avatar-2.png" alt="" fill sizes="36px" className="object-cover" />
                </span>
                <span>
                  <span className="block text-[14px] font-medium" style={{ color: t.dark ? "#fff" : "#111" }}>Jane Cooper</span>
                  <span className="block text-[12px]" style={{ color: t.dark ? "rgba(255,255,255,0.6)" : "#8a8a8a" }}>Investing since 2024 · 3 properties</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBlock image={`${A}/cta-mosque.jpg`} position="22% center" />
      <MobileFooter />
    </Artboard>
  );
}
