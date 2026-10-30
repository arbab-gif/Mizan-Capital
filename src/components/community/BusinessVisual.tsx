import Image from "next/image";

/** Up/down arrow badge used on the stat cards. */
function Trend({ dir }: { dir: "up" | "down" }) {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-white">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={dir === "down" ? "rotate-180" : ""} aria-hidden>
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </span>
  );
}

/**
 * Business owner photo in a circle, ringed by a thin orbit, with two floating stat cards:
 * purchasing costs going down (group buying) and new customers going up (member visits).
 * Figures are illustrative.
 */
export function BusinessVisual({ costCut = "−14%", customerLift = "+18%", className = "" }: { costCut?: string; customerLift?: string; className?: string }) {
  return (
    <div className={`relative mx-auto aspect-[340/430] w-full max-w-[440px] ${className}`}>
      {/* Soft beige glow and orbit ring */}
      <div aria-hidden className="absolute top-[4%] -right-[6%] aspect-square w-[78%] rounded-full bg-beige/25 blur-[2px]" />
      <div aria-hidden className="absolute top-[3%] left-[12%] aspect-square w-[86%] rounded-full border border-beige/70" />
      {/* Dot sits on the left edge of the orbit ring (ring: left 12%, top 3%, width 86% of a 340:430 box) */}
      <span aria-hidden className="absolute size-3.5 -translate-1/2 rounded-full bg-beige-btn" style={{ left: "12%", top: "37%" }} />

      {/* Photo circle */}
      <div className="absolute top-[9%] left-[16%] aspect-square w-[80%] overflow-hidden rounded-full ring-8 ring-white/10">
        <Image
          src="/images/community/partner-cafe.png"
          alt="A Muslim-owned bakery owner serving a customer"
          fill
          sizes="360px"
          className="scale-[1.45] object-cover object-[72%_42%]"
          style={{ transformOrigin: "72% 42%" }}
        />
      </div>

      {/* Purchasing costs card (top right) */}
      <div className="absolute top-[14%] right-0 w-[40%] min-w-[150px] rounded-[16px] bg-white p-3.5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.45)]">
        <p className="text-[13px] font-medium text-neutral-800">Purchasing costs</p>
        <div className="mt-2 flex items-center gap-2.5">
          <Trend dir="down" />
          <span className="text-[24px] leading-none font-semibold text-primary">{costCut}</span>
        </div>
        <svg viewBox="0 0 120 34" className="mt-2.5 h-8 w-full" aria-hidden>
          <defs>
            <linearGradient id="bv-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#4f8f6b" stopOpacity="0.35" />
              <stop offset="1" stopColor="#4f8f6b" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 6 C14 4 20 12 32 11 S52 16 64 18 S88 24 100 26 S114 29 120 30 V34 H0Z" fill="url(#bv-fill)" />
          <path d="M0 6 C14 4 20 12 32 11 S52 16 64 18 S88 24 100 26 S114 29 120 30" fill="none" stroke="#2f6b4b" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* New customers card (bottom left) */}
      <div className="absolute bottom-[14%] left-0 w-[44%] min-w-[160px] rounded-[16px] bg-white p-3.5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.45)]">
        <p className="text-[13px] font-medium text-neutral-800">New customers</p>
        <div className="mt-2 flex items-center gap-2.5">
          <Trend dir="up" />
          <span className="text-[24px] leading-none font-semibold text-primary">{customerLift}</span>
        </div>
        <div className="mt-3 flex h-10 items-end gap-1.5" aria-hidden>
          {[22, 38, 52, 70, 100].map((h, i) => (
            <span key={i} className={`flex-1 rounded-t-[3px] ${i === 4 ? "bg-[#4f8f6b]" : "bg-[#4f8f6b]/45"}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
