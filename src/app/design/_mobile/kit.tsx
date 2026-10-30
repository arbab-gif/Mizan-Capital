/**
 * Shared building blocks for the 390px mobile design artboards (/design/*-mobile).
 * Tokens and type sizes come from the Figma desktop frames.
 */
import Image from "next/image";

export const C = {
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
  line: "#e7e5e0",
};

export const LOGO = "/images/figma-home/logo.png";

export function Artboard({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <main className={`${className} min-h-screen bg-[#d9d9d9] md:py-10`}>
      <div className="mx-auto w-full max-w-[390px] overflow-hidden bg-white md:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]">{children}</div>
    </main>
  );
}

export function MobileNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-4">
      <Image src={LOGO} alt="Mizan Capital" width={150} height={50} className="h-[44px] w-auto" />
      <span className="flex size-11 items-center justify-center rounded-[6px]" style={{ background: C.green }} aria-label="Menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" aria-hidden>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </span>
    </header>
  );
}

export function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className="inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[13px] font-medium"
      style={dark ? { background: "rgba(255,255,255,0.1)", color: "#fff" } : { background: C.cream, color: "#302b23" }}
    >
      {children}
    </span>
  );
}

export function SectionHead({ pill, title, body, light = false }: { pill: React.ReactNode; title: string; body?: string; light?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Pill dark={light}>{pill}</Pill>
      <h2 className="font-display text-[32px] leading-[1.15] font-medium tracking-[-0.01em]" style={{ color: light ? "#fff" : "#000" }}>
        {title}
      </h2>
      {body && (
        <p className="text-[16px] leading-[1.55]" style={{ color: light ? "rgba(255,255,255,0.8)" : C.body }}>
          {body}
        </p>
      )}
    </div>
  );
}

export function Btn({ children, variant = "green", full = false }: { children: React.ReactNode; variant?: "green" | "beige"; full?: boolean }) {
  return (
    <span
      className={`inline-flex h-12 items-center justify-center px-6 text-[17px] font-medium ${full ? "w-full" : ""}`}
      style={variant === "green" ? { background: C.green, color: "#fff" } : { background: C.btnBeige, color: "#fff" }}
    >
      {children}
    </span>
  );
}

/** Small stroke glyph in brand green. */
export function Glyph({ d, color = C.green, size = 18 }: { d: string; color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  );
}

/** A recoloured SVG icon from /public/icons (CSS mask). */
export function MaskIcon({ src, color, size }: { src: string; color: string; size: number }) {
  return (
    <span
      aria-hidden
      className="inline-block shrink-0"
      style={{
        width: size,
        height: size,
        background: color,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

/* ───────── Calculator (shared by Home and Real Estate) ───────── */
function series(seed: number, base: number, amp: number, drift: number, n = 120) {
  let s = seed;
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280) * 2 - 1;
  return Array.from({ length: n }, (_, i) => base + drift * (i / n) + rnd() * amp + Math.sin(i / 3) * amp * 0.4);
}
const portfolio = series(7, 34, 7, -14);
const impact = series(19, 18, 4, -5);
const path = (pts: number[], w: number, h: number) =>
  pts.map((v, i) => `${i ? "L" : "M"}${((i / (pts.length - 1)) * w).toFixed(1)} ${(h - ((v - 5) / 45) * h).toFixed(1)}`).join(" ");

export function Calculator({ pill, title, body }: { pill: string; title: string; body: string }) {
  return (
    <div className="flex flex-col gap-6 rounded-[16px] px-4 py-8" style={{ background: C.calm }}>
      <SectionHead pill={pill} title={title} body={body} />
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
  );
}

/* ───────── CTA + Footer (shared) ───────── */
export function CtaBlock({ image, position = "30% center" }: { image: string; position?: string }) {
  return (
    <section style={{ background: "#f7f7f9" }}>
      <div className="relative h-[230px]">
        <Image src={image} alt="" fill sizes="390px" className="object-cover" style={{ objectPosition: position }} />
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
  );
}

export function MobileFooter() {
  return (
    <footer className="flex flex-col gap-9 bg-white px-5 pt-12 pb-8">
      <div className="flex flex-col gap-5">
        <Image src={LOGO} alt="Mizan Capital" width={150} height={50} className="h-[44px] w-auto self-start" />
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
              <Glyph d={d} size={22} />
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
  );
}
