import { Icon } from "./Icon";

/* Coded app screen mockups. Names and figures are illustrative. */

function Avatar({ letter, tone }: { letter: string; tone: string }) {
  return (
    <span className={`flex size-10 shrink-0 items-center justify-center rounded-[12px] font-display text-[16px] text-white ${tone}`}>
      {letter}
    </span>
  );
}

export function DiscoverScreen() {
  const places = [
    { name: "Noor Grocery Store", meta: "Grocery · 0.4 mi", perk: "10% perk", letter: "N", tone: "bg-primary" },
    { name: "Green Bites", meta: "Restaurant · 0.8 mi", perk: "Free drink", letter: "G", tone: "bg-[#4f8f6b]" },
    { name: "Barakah Books", meta: "Education · 1.2 mi", perk: null, letter: "B", tone: "bg-gold" },
  ];
  return (
    <div className="flex flex-col gap-3.5 px-4 pt-4">
      <div>
        <p className="text-[11px] text-neutral-500">Assalamu alaikum,</p>
        <p className="font-display text-[20px] leading-tight text-primary">Sara</p>
      </div>
      <div className="flex items-center gap-2 rounded-[12px] bg-white px-3 py-2.5 text-[11px] text-neutral-400 shadow-sm ring-1 ring-black/5">
        <Icon name="search" size={14} /> Search businesses, services…
      </div>
      <div className="flex gap-1.5 text-[10.5px] font-medium">
        {["All", "Food", "Grocery", "Services"].map((c, i) => (
          <span key={c} className={`rounded-full px-2.5 py-1 ${i === 0 ? "bg-primary text-cream" : "bg-white text-primary ring-1 ring-black/5"}`}>
            {c}
          </span>
        ))}
      </div>
      <div className="rounded-[16px] bg-primary p-3.5 text-cream">
        <div className="flex items-center justify-between text-[10.5px] text-cream/70">
          <span className="flex items-center gap-1.5">
            <Icon name="heart" size={13} className="text-gold" /> Round-up giving
          </span>
          <span>This month</span>
        </div>
        <p className="mt-1 font-display text-[24px] leading-none">$12.40</p>
        <p className="mt-1 text-[10.5px] text-cream/70">to Dayton Food Pantry</p>
        <div className="mt-2.5 h-1.5 rounded-full bg-white/15">
          <div className="h-full w-[62%] rounded-full bg-gold" />
        </div>
      </div>
      <p className="text-[12px] font-semibold text-primary">Nearby businesses</p>
      <div className="flex flex-col gap-2.5">
        {places.map((p) => (
          <div key={p.name} className="flex items-center gap-2.5 rounded-[14px] bg-white p-2.5 ring-1 ring-black/5">
            <Avatar letter={p.letter} tone={p.tone} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-semibold text-primary">{p.name}</p>
              <p className="text-[10.5px] text-neutral-500">{p.meta}</p>
            </div>
            {p.perk && <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[9.5px] font-semibold text-gold">{p.perk}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export function BusinessScreen() {
  const bars = [38, 52, 45, 60, 58, 72, 84];
  return (
    <div className="flex flex-col gap-3.5 px-4 pt-4">
      <div className="flex items-center gap-2.5">
        <Avatar letter="N" tone="bg-primary" />
        <div>
          <p className="text-[12px] font-semibold text-primary">Noor Grocery Store</p>
          <p className="text-[10.5px] text-neutral-500">Business dashboard</p>
        </div>
      </div>
      <div className="rounded-[16px] bg-white p-3.5 ring-1 ring-black/5">
        <div className="flex items-center justify-between text-[10.5px] text-neutral-500">
          <span>Sales this month</span>
          <span className="rounded-full bg-[#4f8f6b]/15 px-2 py-0.5 font-semibold text-[#2f6b4b]">+18%</span>
        </div>
        <p className="mt-1 font-display text-[24px] leading-none text-primary">$24,860</p>
        <div className="mt-3 flex h-16 items-end gap-1.5">
          {bars.map((h, i) => (
            <span key={i} className={`flex-1 rounded-t-[4px] ${i === bars.length - 1 ? "bg-primary" : "bg-primary/20"}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        <div className="rounded-[14px] bg-white p-3 ring-1 ring-black/5">
          <Icon name="users" size={16} className="text-gold" />
          <p className="mt-1.5 font-display text-[18px] leading-none text-primary">412</p>
          <p className="mt-1 text-[10px] text-neutral-500">Repeat community customers</p>
        </div>
        <div className="rounded-[14px] bg-white p-3 ring-1 ring-black/5">
          <Icon name="store" size={16} className="text-gold" />
          <p className="mt-1.5 font-display text-[18px] leading-none text-primary">$1,230</p>
          <p className="mt-1 text-[10px] text-neutral-500">Saved with group buying</p>
        </div>
      </div>
      <div className="flex items-center gap-2.5 rounded-[14px] bg-gold/12 p-3">
        <Icon name="heart" size={16} className="text-gold" />
        <p className="text-[10.5px] text-primary">
          <span className="font-semibold">$372</span> contributed to local causes this month
        </p>
      </div>
    </div>
  );
}

export function NonprofitScreen() {
  const sources = [
    { label: "Member round-ups", value: "$1,920", w: "50%" },
    { label: "Business contributions", value: "$1,280", w: "33%" },
    { label: "Platform revenue share", value: "$640", w: "17%" },
  ];
  return (
    <div className="flex flex-col gap-3.5 px-4 pt-4">
      <div className="flex items-center gap-2.5">
        <Avatar letter="D" tone="bg-gold" />
        <div>
          <p className="text-[12px] font-semibold text-primary">Dayton Food Pantry</p>
          <p className="text-[10.5px] text-neutral-500">Nonprofit partner</p>
        </div>
      </div>
      <div className="rounded-[16px] bg-primary p-3.5 text-cream">
        <p className="text-[10.5px] text-cream/70">Monthly funding</p>
        <p className="mt-1 font-display text-[24px] leading-none">
          $3,840 <span className="text-[13px] text-cream/60">of $5,000</span>
        </p>
        <div className="mt-2.5 h-1.5 rounded-full bg-white/15">
          <div className="h-full w-[77%] rounded-full bg-gold" />
        </div>
        <p className="mt-2 text-[10px] text-cream/70">Covers 77% of this month&apos;s overhead</p>
      </div>
      <div className="flex flex-col gap-2 rounded-[14px] bg-white p-3 ring-1 ring-black/5">
        {sources.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between text-[10.5px]">
              <span className="text-neutral-500">{s.label}</span>
              <span className="font-semibold text-primary">{s.value}</span>
            </div>
            <div className="mt-1 h-1 rounded-full bg-primary/10">
              <div className="h-full rounded-full bg-[#4f8f6b]" style={{ width: s.w }} />
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-[14px] bg-white p-3 ring-1 ring-black/5">
        <p className="text-[10px] font-semibold tracking-wide text-gold uppercase">Latest update</p>
        <p className="mt-1 text-[11px] leading-snug text-primary">1,200 family meal kits delivered this Ramadan. Jazakum Allahu khairan!</p>
      </div>
      <span className="rounded-[10px] bg-primary py-2 text-center text-[11px] font-semibold text-cream">Post a milestone</span>
    </div>
  );
}
