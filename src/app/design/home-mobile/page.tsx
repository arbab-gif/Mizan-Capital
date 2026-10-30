import type { Metadata } from "next";
import Image from "next/image";
import { DM_Sans } from "next/font/google";

/**
 * Mobile (390px) design of the Home screen, built from the Figma "Home" frame (node 462:2069):
 * same copy, colors, images and section order, re-flowed for a phone. Internal review only;
 * once approved it can be pushed to Figma and folded into the responsive site.
 */
export const metadata: Metadata = {
  title: "Home — Mobile design (internal review)",
  robots: { index: false, follow: false },
};

const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const A = "/images/figma-home";

/* Figma tokens */
const C = {
  green: "#012a1c",
  howGreen: "#084631",
  beigeInk: "#a88b5d",
  stat: "#bfa477",
  beige: "#d6c29e",
  btnBeige: "#c4aa7e",
  muted: "#797164",
  body: "#525252",
  cream: "#f4efe4",
  sand: "#efe6d3",
  calm: "#f9f6ef",
};

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className="inline-flex w-fit items-center rounded-full px-2.5 py-1.5 text-[13px] font-medium"
      style={dark ? { background: "rgba(255,255,255,0.1)", color: "#fff" } : { background: C.cream, color: "#302b23" }}
    >
      {children}
    </span>
  );
}

function SectionHead({ pill, title, body, light = false }: { pill: string; title: string; body: string; light?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Pill dark={light}>{pill}</Pill>
      <h2 className="font-display text-[32px] leading-[1.15] font-medium tracking-[-0.01em]" style={{ color: light ? "#fff" : "#000" }}>
        {title}
      </h2>
      <p className="text-[16px] leading-[1.55]" style={{ color: light ? "rgba(255,255,255,0.8)" : C.body }}>
        {body}
      </p>
    </div>
  );
}

function Btn({ children, variant = "green", full = false }: { children: React.ReactNode; variant?: "green" | "beige"; full?: boolean }) {
  return (
    <span
      className={`inline-flex h-12 items-center justify-center px-6 text-[17px] font-medium ${full ? "w-full" : ""}`}
      style={variant === "green" ? { background: C.green, color: "#fff" } : { background: C.btnBeige, color: "#fff" }}
    >
      {children}
    </span>
  );
}

/* ───────── deterministic chart data (shape of the Figma chart) ───────── */
function series(seed: number, base: number, amp: number, drift: number, n = 120) {
  let s = seed;
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280) * 2 - 1;
  return Array.from({ length: n }, (_, i) => base + drift * (i / n) + rnd() * amp + Math.sin(i / 3) * amp * 0.4);
}
const portfolio = series(7, 34, 7, -14);
const impact = series(19, 18, 4, -5);
const path = (pts: number[], w: number, h: number) =>
  pts.map((v, i) => `${i ? "L" : "M"}${((i / (pts.length - 1)) * w).toFixed(1)} ${(h - ((v - 5) / 45) * h).toFixed(1)}`).join(" ");

const STATS = [
  { v: "1", l: "Shariah Compliant Process", icon: 1 },
  { v: "3+", l: "Community Initiative Funded", icon: 2 },
  { v: "20+", l: "Real Estate Transactions Completed", icon: 3 },
  { v: "$500K", l: "Generated for investors as Sadaqah Jariyah", icon: 4 },
];

const PROJECTS = [
  { t: "Muslim Transitional Housing", d: "Income-based transitional housing and a structured pathway toward stability, self-sufficiency, and long-term financial independence.", img: "project-housing.jpg", pos: "center 40%" },
  { t: "Islamic Curriculum", d: "Supporting 50 students with Islamic education that strengthens faith, character, and community.", img: "project-curriculum.jpg", pos: "center 40%" },
  { t: "Mosque Renovation", d: "Restoring our Masjid while preserving its legacy and creating a place for future generations.", img: "project-mosque.jpg", pos: "center 30%" },
  { t: "Palestine Diaspora Movement (PDM)", d: "A grassroots advocacy organization led by the Palestinian diaspora, embracing our heritage and the struggle of our ancestors.", img: "project-palestine.jpg", pos: "center" },
];

const STEPS = [
  // Icon colours as in Figma: search + chart white, money + people gold.
  { t: "Explore", d: "Discover vetted investment opportunities that align with your goals.", icon: "/icons/icon-search.svg", color: "#ffffff" },
  { t: "Invest", d: "Choose an opportunity and complete a simple, secure, transparent process.", icon: "/icons/icon-money-send.svg", color: "#c9a46a" },
  { t: "Earn", d: "Receive your share of returns through sustainable growth and lasting value.", icon: "/icons/icon-trend-up.svg", color: "#ffffff" },
  { t: "Create Impact", d: "Your capital helps fund businesses and community initiatives.", icon: "/icons/icon-people.svg", color: "#c9a46a" },
];

function Glyph({ d }: { d: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.green} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  );
}

export default function HomeMobileDesign() {
  return (
    <main className={`${dm.className} min-h-screen bg-[#d9d9d9] py-0 md:py-10`}>
      {/* 390px artboard */}
      <div className="mx-auto w-full max-w-[390px] overflow-hidden bg-white md:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]">
        {/* ───────── Hero + Stats ───────── */}
        <section className="relative">
          <div className="relative overflow-hidden pb-[96px]" style={{ background: "#f9f6f3" }}>
            {/* Photo gets its own top area, framed on the arch and courtyard (arch centre ≈ 67% across the image) */}
            <div className="relative h-[430px]">
              <Image src={`${A}/hero.jpg`} alt="" fill priority sizes="390px" className="object-cover object-[88%_55%]" />
              {/* Figma: cream fade (#f9f6f3) + dark shade at the top; the fade runs bottom-up on mobile */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, #f9f6f3 0%, rgba(249,246,243,0.85) 14%, rgba(249,246,243,0) 42%)" }} />
              <div className="absolute inset-x-0 top-0 h-[120px]" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0) 100%)" }} />
            </div>

            {/* Navbar */}
            <header className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4">
              <Image src={`${A}/logo.png`} alt="Mizan Capital" width={150} height={50} className="h-[44px] w-auto" />
              <span className="flex size-11 items-center justify-center rounded-[6px]" style={{ background: C.green }} aria-label="Menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </span>
            </header>

            <div className="relative -mt-10 flex flex-col gap-6 px-5">
              <h1 className="font-display text-[38px] leading-[1.15] tracking-[-0.01em] text-black">
                Islamic <span className="font-medium" style={{ color: C.beigeInk }}>Impact</span>
                <br />
                Investment Redefined
              </h1>
              <p className="text-[16px] leading-[1.6] text-black">
                Invest in asset-backed opportunities designed around Islamic principles, while helping support businesses, nonprofits, and projects that create lasting community impact.
              </p>
              <div className="flex flex-col gap-3">
                <Btn full>Invest with Purpose</Btn>
                <Btn variant="beige" full>
                  Schedule a call
                </Btn>
              </div>
            </div>
          </div>

          {/* Stats: 2×2 version of the 4-column band */}
          <div className="relative z-10 -mt-[72px] px-5">
            <dl className="grid grid-cols-2 overflow-hidden rounded-[20px]" style={{ border: `1px solid ${C.beige}` }}>
              {STATS.map((s, i) => (
                <div
                  key={s.v}
                  className="flex flex-col gap-2.5 p-4"
                  style={{
                    background: C.cream,
                    borderRight: i % 2 === 0 ? `1px solid ${C.beige}` : undefined,
                    borderBottom: i < 2 ? `1px solid ${C.beige}` : undefined,
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <dd className="font-display text-[26px] leading-none font-semibold" style={{ color: C.green }}>
                      {s.v}
                    </dd>
                    <Image src={`${A}/stat-icon-${s.icon}.png`} alt="" width={40} height={40} className="size-10" />
                  </div>
                  <dt className="text-[13px] leading-[1.4]" style={{ color: C.muted }}>
                    {s.l}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ───────── Real assets. Real Returns ───────── */}
        <section className="flex flex-col gap-8 px-5 pt-16">
          <SectionHead
            pill="Asset Backed Safety"
            title="Real assets. Real Returns"
            body="We use asset-backed real estate to secure your investment, channeling profits into local halal businesses and nonprofits. Generate strong returns while building a lifetime of Sadaqah Jariyah"
          />

          {/* Card 1 */}
          <article className="flex flex-col gap-5 rounded-[16px] bg-white p-6" style={{ border: "1px solid #e7e5e0" }}>
            <div className="flex items-center justify-center gap-5">
              <div className="text-center">
                <p className="text-[56px] leading-none font-bold tracking-[-0.03em]" style={{ color: C.stat }}>12+</p>
                <p className="mt-1.5 text-[12px] text-[#6b7280]">Real Estate Transactions</p>
              </div>
              <span className="h-16 w-px bg-[#e7e5e0]" />
              <div className="text-center">
                <p className="text-[56px] leading-none font-bold tracking-[-0.03em]" style={{ color: C.stat }}>45%</p>
                <p className="mt-1.5 text-[12px] text-[#6b7280]">Average ROI</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-b border-[#e7e5e0] pb-5">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#f1f3f2]">
                <Glyph d="M4 11l8-6.5 8 6.5M6 9.5V20h12V9.5M10 20v-5h4v5" />
              </span>
              <span className="text-[16px] font-medium" style={{ color: C.green }}>Physical property assets</span>
            </div>
            <div>
              <h3 className="font-display text-[22px] font-medium" style={{ color: C.green }}>Real Asset Foundation</h3>
              <p className="mt-2 text-[15px] leading-[1.5]" style={{ color: C.body }}>Invest in physical properties with measurable value and clear ownership structures.</p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="flex flex-col gap-5 rounded-[16px] bg-white p-6" style={{ border: "1px solid #e7e5e0" }}>
            <div className="flex flex-col items-center">
              {[
                { t: "Property profit", d: "M4 7h16v10H4zM8 12h8" },
                { t: "Reinvestment", d: "M20 12a8 8 0 1 1-2.3-5.7M20 4v4h-4" },
                { t: "Community initiatives", d: "M9 8.5a3 3 0 1 0 0-.01M3.5 19a5.5 5.5 0 0 1 11 0M16 5.8a3 3 0 0 1 0 5.4M17.5 14.3A5.5 5.5 0 0 1 20.5 19" },
              ].map((s, i) => (
                <div key={s.t} className="flex flex-col items-center">
                  {i > 0 && <span className="my-2 size-1.5 rounded-full" style={{ background: C.beigeInk }} />}
                  <span className="flex items-center gap-3 rounded-[10px] bg-white px-4 py-2.5" style={{ border: "1px solid #e7e5e0" }}>
                    <span className="flex size-8 items-center justify-center rounded-[8px] bg-[#f1f3f2]">
                      <Glyph d={s.d} />
                    </span>
                    <span className="text-[15px] font-medium" style={{ color: C.green }}>{s.t}</span>
                  </span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-display text-[22px] font-medium" style={{ color: C.green }}>Transparent Investment Model</h3>
              <p className="mt-2 text-[15px] leading-[1.5]" style={{ color: C.body }}>Understand where your capital goes and how value is created.</p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="flex flex-col gap-5 rounded-[16px] bg-white p-6" style={{ border: "1px solid #e7e5e0" }}>
            <div className="flex items-end justify-center gap-8 border-b border-[#e7e5e0] px-4">
              {[
                { v: "$1.00", h: 100, bg: "#d8c39c", l: "Invested" },
                { v: "$1.45", h: 124, bg: C.green, l: "Property collateral" },
              ].map((b) => (
                <div key={b.l} className="flex flex-col items-center gap-2">
                  <span className="text-[18px] font-bold" style={{ color: C.green }}>{b.v}</span>
                  <span className="w-[72px] rounded-t-[10px]" style={{ height: b.h, background: b.bg }} />
                </div>
              ))}
            </div>
            <div className="-mt-3 flex justify-center gap-8 text-[13px] text-[#6b7280]">
              <span className="w-[72px] text-center">Invested</span>
              <span className="w-[72px] text-center leading-tight">Property collateral</span>
            </div>
            <div>
              <h3 className="font-display text-[22px] font-medium" style={{ color: C.green }}>Asset Coverage</h3>
              <p className="mt-2 text-[15px] leading-[1.5]" style={{ color: C.body }}>Each opportunity is structured with asset value designed to support investor confidence.</p>
            </div>
          </article>
        </section>

        {/* ───────── Deen & Dunyah Returns ───────── */}
        <section className="px-5 pt-6 pb-16">
          <div className="flex flex-col gap-6 rounded-[16px] px-4 py-8" style={{ background: C.calm }}>
            <SectionHead pill="Wealth & Impact" title="Deen & Dunyah Returns" body="Projected portfolio growth for this life, and cumulative Sadaqah Jariyah impact for the next." />
            <div className="flex flex-col gap-5 rounded-[16px] bg-white p-4" style={{ border: "1px solid #ece7dd" }}>
              <div className="flex flex-col gap-2.5">
                {[
                  { v: "$11,200.00", l: "Portfolio value", icon: "/icons/icon-money.svg" },
                  { v: "$1,800.00", l: "Community impact", icon: "/icons/icon-users-three.svg" },
                  { v: "$13,000", l: "Combined value", icon: "/icons/icon-currency.svg" },
                ].map((t) => (
                  <div key={t.l} className="flex items-center justify-between rounded-[12.6px] px-3.5 py-3" style={{ background: "#faf7f3", border: "1px solid #e5e5e5" }}>
                    <div>
                      <p className="font-display text-[20px] font-medium" style={{ color: C.green }}>{t.v}</p>
                      <p className="text-[14px]" style={{ color: C.body }}>{t.l}</p>
                    </div>
                    <Image src={t.icon} alt="" width={28} height={28} className="size-7" />
                  </div>
                ))}
              </div>

              <div className="border-t border-[#ece7dd] pt-4">
                <div className="flex gap-2">
                  <div className="flex h-[170px] flex-col justify-between text-[10px] text-[#51595a]">
                    {["$50k", "$30k", "$20k", "$20k", "$10k", "$5k"].map((y, i) => (
                      <span key={i}>{y}</span>
                    ))}
                  </div>
                  <svg viewBox="0 0 300 170" className="h-[170px] flex-1" preserveAspectRatio="none" aria-hidden>
                    {[0, 34, 68, 102, 136, 170].map((y) => (
                      <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="#e5e5e5" strokeDasharray="4 4" />
                    ))}
                    <path d={path(portfolio, 300, 170)} fill="none" stroke="#6f9784" strokeWidth="1.4" />
                    <path d={path(impact, 300, 170)} fill="none" stroke="#d6a84f" strokeWidth="1.3" strokeDasharray="3 2" />
                  </svg>
                </div>
                <div className="mt-1.5 flex justify-between pl-8 text-[11px] text-[#51595a]">
                  <span>Year 0</span>
                  <span>Year 5</span>
                </div>
              </div>

              {[
                { l: "Initial Investment", v: "$75,000", pct: 39, ends: null },
                { l: "Investment horizon", v: "5 years", pct: 45, ends: ["1 year", "10 years"] },
              ].map((s) => (
                <div key={s.l} className="flex flex-col gap-2.5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[14px] text-[#626d6f]">{s.l}</span>
                    <span className="text-[18px] font-bold" style={{ color: C.green }}>{s.v}</span>
                  </div>
                  <div className="relative h-1.5 rounded-full bg-[#ebebef]">
                    <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: C.green }} />
                    <span className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ left: `${s.pct}%`, background: C.green }} />
                  </div>
                  {s.ends && (
                    <div className="flex justify-between text-[12px] text-[#667085]">
                      <span>{s.ends[0]}</span>
                      <span>{s.ends[1]}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Redirecting Community Capital ───────── */}
        <section className="flex flex-col gap-6 overflow-hidden pt-14" style={{ background: C.sand }}>
          <div className="flex flex-col gap-4 px-5">
            <span className="inline-flex w-fit rounded-full px-2.5 py-1.5 text-[13px] font-medium" style={{ background: C.cream, color: "#302b23" }}>
              Community Focused -<span className="ml-1" style={{ color: "#b77c00" }}>Coming Soon</span>
            </span>
            <h2 className="font-display text-[32px] leading-[1.15] font-medium text-black">Redirecting Community Capital</h2>
            <p className="text-[16px] leading-[1.55]" style={{ color: C.body }}>
              A powerful platform that connects our community, supports local businesses, and creates sustainable funding without asking for more.
            </p>
            <p className="flex flex-wrap items-center gap-1.5 text-[14px] text-black">
              Early members get a
              <span className="inline-flex items-center gap-1 font-semibold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b77c00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M3.5 12.6V5a1.5 1.5 0 0 1 1.5-1.5h7.6l8 8a1.5 1.5 0 0 1 0 2.1l-7.5 7.5a1.5 1.5 0 0 1-2.1 0z" />
                  <circle cx="8.5" cy="8.5" r="1.4" />
                </svg>
                $10 Bonus
              </span>
              when the app launches.
            </p>
            <span className="mt-2 inline-flex h-12 w-fit items-center gap-3 rounded-[8px] px-5 text-[17px] font-semibold shadow-[0_10px_25px_-12px_rgba(1,42,28,0.8)]" style={{ background: C.green, color: C.cream }}>
              Join the Waitlist <span aria-hidden>→</span>
            </span>
          </div>
          <div className="relative -mr-16 ml-2 h-[300px]">
            <Image src={`${A}/app-showcase.png`} alt="Community app screens" fill sizes="460px" className="object-contain object-bottom" />
          </div>
        </section>

        {/* ───────── Projects ───────── */}
        <section className="flex flex-col gap-8 px-5 py-16">
          <SectionHead pill="Non Profit Projects" title="Project that build a Brighter a Ummah" body="Support carefully vetted Islamic initiatives that creates lasting impact in the communities around the world." />
          <div className="flex flex-col gap-4">
            {PROJECTS.map((p) => (
              <article key={p.t} className="relative flex h-[400px] flex-col justify-end overflow-hidden rounded-[12px] p-5">
                <Image src={`${A}/${p.img}`} alt="" fill sizes="350px" className="object-cover" style={{ objectPosition: p.pos }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.78) 100%)" }} />
                <div className="relative flex flex-col gap-3">
                  <h3 className="font-display text-[26px] leading-tight font-medium text-white">{p.t}</h3>
                  <p className="text-[15px] leading-[1.5] text-[#fafafa]">{p.d}</p>
                  <span className="mt-1 inline-flex h-10 w-fit items-center rounded-[4px] px-3 text-[16px] font-medium" style={{ background: C.beige, color: "#302b23" }}>
                    Support this project
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ───────── How it works ───────── */}
        <section className="flex flex-col gap-10 px-5 py-14" style={{ background: C.howGreen }}>
          <SectionHead
            light
            pill="How it works"
            title="Investing in what matters today and tomorrow."
            body="We build investments on real-world value, sustainable growth, and trusted opportunities that create long-term benefits for investors and communities."
          />
          {/* Figma's horizontal loop, stacked: number → icon circle → title → text, joined by arrows */}
          <ol className="flex flex-col items-center">
            {STEPS.map((s, i) => (
              <li key={s.t} className="flex flex-col items-center text-center">
                <span className="font-display text-[32px] leading-[1.2] font-medium" style={{ color: C.beigeInk }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 flex size-[76px] items-center justify-center rounded-full" style={{ background: "rgba(214,194,158,0.12)" }}>
                  <span
                    aria-hidden
                    className="size-[43px]"
                    style={{
                      background: s.color,
                      maskImage: `url(${s.icon})`,
                      WebkitMaskImage: `url(${s.icon})`,
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                    }}
                  />
                </span>
                <h3 className="mt-5 font-display text-[24.7px] leading-[1.2] font-medium text-white">{s.t}</h3>
                <p className="mt-3 max-w-[280px] text-[16px] leading-[1.4] font-medium text-white/70">{s.d}</p>
                {i < STEPS.length - 1 && (
                  <svg width="12" height="56" viewBox="0 0 12 56" fill="none" className="my-5" aria-hidden>
                    <path d="M6 0v54M1 49l5 6 5-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── CTA ───────── */}
        <section style={{ background: "#f7f7f9" }}>
          <div className="relative h-[230px]">
            <Image src={`${A}/cta-mosque.jpg`} alt="" fill sizes="390px" className="object-cover object-[30%_center]" />
            <div className="absolute inset-x-0 bottom-0 h-20" style={{ background: "linear-gradient(0deg,#f7f7f9,rgba(247,247,249,0))" }} />
          </div>
          <div className="flex flex-col gap-6 px-5 pt-2 pb-14">
            <h2 className="font-display text-[34px] leading-[1.15] font-medium text-black">
              Invest today.
              <br />
              Create impact forever.
            </h2>
            <p className="text-[17px] leading-[1.55]" style={{ color: "#3f3f46" }}>
              Join a community of investors who believe wealth is a trust and impact is an obligation.
            </p>
            <div className="flex flex-col gap-3">
              <Btn full>Invest with Purpose</Btn>
              <Btn variant="beige" full>
                Schedule a Call
              </Btn>
            </div>
          </div>
        </section>

        {/* ───────── Footer ───────── */}
        <footer className="flex flex-col gap-9 bg-white px-5 pt-12 pb-8">
          <div className="flex flex-col gap-5">
            <Image src={`${A}/logo.png`} alt="Mizan Capital" width={150} height={50} className="h-[44px] w-auto self-start" />
            <p className="text-[16px] leading-[1.55]" style={{ color: C.muted }}>
              Building stronger communities for generations to come.
            </p>
            <div className="flex gap-3">
              {[
                "M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2H8v3.5h2.5V20H14v-6.5h2.5L17 10h-3V8.5a.5.5 0 0 1 .5-.5z",
                "M7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7A3.5 3.5 0 0 1 7 3.5zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17 6.8h.01",
                "M20 6.5c-.6.3-1.2.4-1.9.5a3.3 3.3 0 0 0 1.4-1.8 6.6 6.6 0 0 1-2 .8 3.3 3.3 0 0 0-5.7 3A9.4 9.4 0 0 1 5 5.6a3.3 3.3 0 0 0 1 4.4c-.5 0-1-.2-1.5-.4 0 1.6 1.1 3 2.6 3.3-.5.1-1 .2-1.5.1.4 1.3 1.7 2.3 3.1 2.3A6.6 6.6 0 0 1 4 16.6 9.4 9.4 0 0 0 9 18c6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.2-1.1 1.7-1.8z",
              ].map((d, i) => (
                <span key={i} className="flex size-[46px] items-center justify-center rounded-full" style={{ background: "rgba(1,42,28,0.1)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.green} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d={d} />
                  </svg>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { h: "Features", l: ["Home", "Real Estate", "Community", "Nonprofit"] },
              { h: "Support", l: ["FAQs", "Contact Us"] },
              { h: "Legal", l: ["Privacy Policy", "Terms of Services", "Disclosure"] },
            ].map((c) => (
              <div key={c.h} className="flex flex-col gap-3.5">
                <p className="text-[16px] font-medium text-black">{c.h}</p>
                {c.l.map((x) => (
                  <span key={x} className="text-[14px]" style={{ color: C.muted }}>{x}</span>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[18px] text-black">News letter</p>
            <span className="flex h-12 items-center rounded-[4px] px-3 text-[15px] text-[#8a8a8a]" style={{ background: "#f1f3f2", border: "1px solid #c9cfcc" }}>
              Your email address
            </span>
            <span className="flex h-12 items-center justify-center rounded-[4px] text-[17px] font-medium text-white" style={{ background: "#b77c00" }}>
              Send
            </span>
          </div>

          <div className="flex flex-col gap-1.5 border-t border-[#e7e5e0] pt-6 text-[15px]" style={{ color: C.muted }}>
            <span>© 2026 Mizan Capital</span>
            <span>All Rights Reserved.</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
