/**
 * Partner Businesses — alternative visual treatments (A–D) for review.
 * Each variant keeps the client's copy and swaps the visual. Preview at /community/partner-variants.
 */
import { partnerSection as p } from "@/data/community";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { Icon } from "./Icon";

function Copy({ align = "left" }: { align?: "left" | "center" }) {
  return (
    <div className={`flex flex-col gap-8 ${align === "center" ? "items-center text-center" : ""}`}>
      <SectionHeading align={align} eyebrow={p.eyebrow} title={p.title} description={p.body} descriptionClassName="max-w-[620px]" />
      <a
        href="#contact"
        className="group inline-flex w-fit items-center gap-2 rounded-[8px] bg-primary px-6 py-3.5 text-[16px] font-medium text-cream transition hover:bg-forest"
      >
        Explore a business partnership
        <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

/* ───────────── Previous · Directory board ───────────── */

export function PartnersDirectoryBoard() {
  return (
    <section className="bg-cream-light py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Copy />
        <div className="relative isolate overflow-hidden rounded-[28px] bg-primary p-6 text-cream shadow-[0_40px_80px_-40px_rgba(1,42,28,0.6)] md:p-8">
          <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.07]" style={{ backgroundImage: STAR_PATTERN }} />
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-[12px] tracking-[0.14em] text-gold uppercase">Directory</p>
              <p className="mt-1 font-display text-[26px] leading-tight text-white">Community Center</p>
            </div>
            <span className="rounded-full border border-gold/40 px-3 py-1 text-[12px] text-gold">Greater Dayton</span>
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-3">
            {p.directory.map((d, i) => (
              <li key={d.name} className="rounded-[16px] border border-white/10 bg-white/[0.05] p-4">
                <span className="font-display text-[13px] text-gold">Unit {String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-[16px] font-medium text-white">{d.name}</p>
                <p className="text-[13px] text-cream/60">{d.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* ───────────── A · Storefront street ───────────── */

const AWNINGS = [
  ["#012A1C", "#F4EFE4"],
  ["#B77C00", "#FFF8EA"],
  ["#0D3E26", "#F4EFE4"],
];

function Storefront({ name, note, i }: { name: string; note: string; i: number }) {
  const [a, b] = AWNINGS[i % AWNINGS.length];
  return (
    <div className="flex flex-col">
      {/* Sign */}
      <div className="rounded-t-[10px] px-3 py-2 text-center" style={{ background: a }}>
        <p className="truncate font-display text-[15px] leading-tight text-white">{name}</p>
      </div>
      {/* Scalloped awning */}
      <div className="relative h-7" style={{ background: `repeating-linear-gradient(90deg, ${a} 0 14px, ${b} 14px 28px)` }}>
        <div
          className="absolute inset-x-0 -bottom-2 h-3"
          style={{ background: `radial-gradient(circle at 7px 0, ${a} 6px, transparent 6.5px) 0 0 / 14px 12px repeat-x` }}
        />
      </div>
      {/* Facade */}
      <div className="flex flex-1 gap-2 border-x-[6px] border-[#e9e1cf] bg-[#f3ecdc] px-2 pt-5 pb-0">
        <div className="flex-1 rounded-t-[4px] border-[3px] border-[#d8cdb5] bg-gradient-to-b from-[#fdf9f0] to-[#efe3c8]" />
        <div className="flex w-[34%] items-end justify-center rounded-t-[6px] border-[3px] border-b-0 border-[#d8cdb5] bg-primary/85 pb-1">
          <span className="mb-6 size-1.5 rounded-full bg-gold" />
        </div>
      </div>
      <p className="mt-2 text-center text-[12px] text-neutral-500">{note}</p>
    </div>
  );
}

export function PartnersStorefronts() {
  return (
    <section className="bg-cream-light py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Copy />
        <div className="rounded-[28px] bg-white p-6 shadow-[0_30px_70px_-40px_rgba(1,42,28,0.45)] ring-1 ring-black/5 md:p-8">
          <div className="grid grid-cols-3 gap-x-3 gap-y-6">
            {p.directory.map((d, i) => (
              <Storefront key={d.name} name={d.name} note={d.note} i={i} />
            ))}
          </div>
          <div className="mt-2 h-3 rounded-full bg-[#e9e1cf]" />
          <p className="mt-5 flex items-center justify-center gap-2 text-[14px] text-neutral-600">
            <Icon name="store" size={16} className="text-gold" /> One street. Every everyday need, community-owned.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ───────────── B · Floor plan ───────────── */

export function PartnersFloorPlan() {
  const units = [
    { x: 20, y: 20, w: 170, h: 120, n: "01", name: "Halal Grocery", anchor: true },
    { x: 200, y: 20, w: 110, h: 120, n: "02", name: "Restaurants" },
    { x: 320, y: 20, w: 110, h: 120, n: "03", name: "Fitness" },
    { x: 440, y: 20, w: 140, h: 120, n: "04", name: "Education" },
    { x: 20, y: 270, w: 140, h: 110, n: "05", name: "Modest Fashion" },
    { x: 170, y: 270, w: 140, h: 110, n: "06", name: "Services" },
  ];
  return (
    <section className="py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Copy />
        <figure
          className="relative overflow-hidden rounded-[28px] border border-primary/10 bg-[#f7f4ec] p-5 md:p-7"
          style={{
            backgroundImage:
              "linear-gradient(rgba(1,42,28,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(1,42,28,0.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[12px] tracking-[0.14em] text-gold uppercase">Site plan · Concept</p>
            <p className="font-display text-[15px] text-primary">Mizan Community Center</p>
          </div>
          <svg viewBox="0 0 600 470" className="h-auto w-full" role="img" aria-label="Concept floor plan of the community center">
            <rect x="10" y="10" width="580" height="380" rx="6" fill="#fff" stroke="#012A1C" strokeWidth="2.5" />
            {units.map((u) => (
              <g key={u.n}>
                <rect x={u.x} y={u.y} width={u.w} height={u.h} rx="3" fill={u.anchor ? "#012A1C" : "#F9F6EF"} stroke="#012A1C" strokeOpacity="0.35" />
                <text x={u.x + 12} y={u.y + 24} fontSize="12" fill={u.anchor ? "#B77C00" : "#B77C00"} fontFamily="inherit">
                  UNIT {u.n}
                </text>
                <text x={u.x + 12} y={u.y + u.h - 16} fontSize="15" fill={u.anchor ? "#fff" : "#012A1C"} fontFamily="var(--font-ivar), serif">
                  {u.name}
                </text>
              </g>
            ))}
            {/* Courtyard */}
            <rect x="20" y="150" width="410" height="110" rx="3" fill="#B77C00" fillOpacity="0.08" stroke="#B77C00" strokeOpacity="0.5" strokeDasharray="5 5" />
            <text x="225" y="210" textAnchor="middle" fontSize="15" fill="#012A1C" fontFamily="var(--font-ivar), serif">
              Community Courtyard
            </text>
            {/* Prayer room + family */}
            <rect x="440" y="150" width="140" height="230" rx="3" fill="#0D3E26" stroke="#012A1C" strokeOpacity="0.35" />
            <path d="M510 220 a22 22 0 0 1 22 22 v18 h-44 v-18 a22 22 0 0 1 22 -22z" fill="none" stroke="#B77C00" strokeWidth="1.5" />
            <text x="510" y="300" textAnchor="middle" fontSize="15" fill="#fff" fontFamily="var(--font-ivar), serif">Prayer Room</text>
            <text x="510" y="320" textAnchor="middle" fontSize="11" fill="#F4EFE4" fillOpacity="0.7" fontFamily="inherit">& family lounge</text>
            {/* Shared */}
            <rect x="320" y="270" width="110" height="110" rx="3" fill="#F9F6EF" stroke="#012A1C" strokeOpacity="0.35" />
            <text x="375" y="320" textAnchor="middle" fontSize="12" fill="#012A1C" fontFamily="inherit">Shared</text>
            <text x="375" y="336" textAnchor="middle" fontSize="12" fill="#012A1C" fontFamily="inherit">event hall</text>
            {/* Entrance + parking */}
            <path d="M215 390 v30 M205 410 l10 10 10 -10" stroke="#B77C00" strokeWidth="2" fill="none" strokeLinecap="round" />
            <text x="232" y="416" fontSize="11" fill="#525252" fontFamily="inherit">Main entrance</text>
            {Array.from({ length: 14 }).map((_, i) => (
              <line key={i} x1={40 + i * 38} y1="440" x2={40 + i * 38} y2="466" stroke="#012A1C" strokeOpacity="0.25" />
            ))}
            <text x="590" y="458" textAnchor="end" fontSize="11" fill="#525252" fontFamily="inherit">Parking</text>
          </svg>
          <figcaption className="mt-3 text-[12px] text-neutral-500">Concept layout for illustration only.</figcaption>
        </figure>
      </Container>
    </section>
  );
}

/* ───────────── C · Neighborhood map ───────────── */

export function PartnersMap() {
  const pins = [
    { x: 22, y: 30, name: "Halal Grocery" },
    { x: 58, y: 22, name: "Restaurants" },
    { x: 76, y: 48, name: "Fitness" },
    { x: 34, y: 62, name: "Education" },
    { x: 62, y: 74, name: "Modest Fashion" },
    { x: 14, y: 80, name: "Services" },
  ];
  return (
    <section className="bg-cream-light py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="relative order-2 aspect-[5/4] overflow-hidden rounded-[28px] bg-[#e9efe6] shadow-[0_30px_70px_-40px_rgba(1,42,28,0.45)] lg:order-1">
          <svg viewBox="0 0 500 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
            <path d="M-20 300 C 80 260, 160 330, 260 290 S 420 230, 520 270" stroke="#bcd3c4" strokeWidth="34" fill="none" />
            <rect x="300" y="40" width="120" height="80" rx="18" fill="#d5e3cf" />
            <rect x="40" y="150" width="90" height="70" rx="16" fill="#d5e3cf" />
            {[60, 140, 220, 380].map((y) => (
              <line key={y} x1="0" y1={y} x2="500" y2={y - 30} stroke="#fff" strokeWidth={y === 220 ? 14 : 8} />
            ))}
            {[90, 200, 330, 440].map((x) => (
              <line key={x} x1={x} y1="0" x2={x + 30} y2="400" stroke="#fff" strokeWidth={x === 200 ? 14 : 8} />
            ))}
          </svg>
          {pins.map((pin) => (
            <div key={pin.name} className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center" style={{ left: `${pin.x}%`, top: `${pin.y}%` }}>
              <span className="mb-1 rounded-full bg-white px-2.5 py-1 text-[12px] font-medium whitespace-nowrap text-primary shadow">{pin.name}</span>
              <span className="flex size-9 items-center justify-center rounded-full rounded-br-none bg-primary text-cream shadow-lg rotate-45">
                <Icon name="store" size={16} className="-rotate-45" />
              </span>
            </div>
          ))}
          <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-[16px] bg-white/95 p-4 shadow-lg backdrop-blur md:left-auto md:w-[280px]">
            <div>
              <p className="text-[12px] tracking-[0.12em] text-gold uppercase">Greater Dayton</p>
              <p className="font-display text-[20px] text-primary">One destination</p>
              <p className="text-[13px] text-neutral-500">6 categories · community-owned</p>
            </div>
            <span className="flex size-11 items-center justify-center rounded-full bg-gold text-white">
              <Icon name="pin" size={20} />
            </span>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Copy />
        </div>
      </Container>
    </section>
  );
}

/* ───────────── D · Category mosaic ───────────── */

export function PartnersMosaic() {
  const tiles: { name: string; note: string; cls: string; big?: boolean }[] = [
    { ...p.directory[0], cls: "md:col-span-2 md:row-span-2 bg-primary text-white", big: true },
    { ...p.directory[1], cls: "bg-gold text-white" },
    { ...p.directory[2], cls: "bg-cream text-primary" },
    { ...p.directory[3], cls: "bg-cream text-primary" },
    { ...p.directory[4], cls: "bg-forest text-white" },
    { ...p.directory[5], cls: "sm:col-span-2 md:col-span-4 bg-cream-light text-primary ring-1 ring-black/5" },
  ];
  return (
    <section className="py-24">
      <Container className="flex flex-col gap-14">
        <Copy align="center" />
        <div className="grid auto-rows-[170px] gap-4 sm:grid-cols-2 md:grid-cols-4">
          {tiles.map((t, i) => (
            <div key={t.name} className={`relative isolate flex flex-col justify-between overflow-hidden rounded-[20px] p-6 ${t.cls}`}>
              {i === 0 && <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.1]" style={{ backgroundImage: STAR_PATTERN }} />}
              <span className="font-display text-[13px] opacity-70">Unit {String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className={`font-display leading-[1.05] ${t.big ? "text-[44px] md:text-[56px]" : "text-[26px]"}`}>{t.name}</p>
                <p className="mt-1 text-[14px] opacity-75">{t.note}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center font-display text-[22px] text-primary">
          One location. <span className="text-gold italic">Shared purpose.</span> Lasting local impact.
        </p>
      </Container>
    </section>
  );
}
