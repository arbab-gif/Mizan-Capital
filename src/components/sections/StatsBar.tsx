import { stats } from "@/data/home";

/** Tints a single-colour SVG icon with the beige ink colour (CSS mask). */
function StatIcon({ src }: { src: string }) {
  return (
    <span
      aria-hidden
      className="size-[38px] shrink-0 bg-beige-ink"
      style={{ mask: `url(${src}) center / contain no-repeat`, WebkitMask: `url(${src}) center / contain no-repeat` }}
    />
  );
}

/** Four cream stat tiles in one rounded strip that overlaps the bottom edge of the hero. */
export function StatsBar() {
  return (
    <div className="relative z-10 -mt-[54px] px-5">
      {/* 1px gaps over a beige background draw the dividers between tiles */}
      <div className="mx-auto grid max-w-[1240px] gap-px overflow-hidden rounded-[20px] border border-beige bg-beige sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-2.5 bg-cream px-6 py-8">
            <div className="flex flex-1 flex-col gap-1 text-center">
              <p className="font-display text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-primary">{s.value}</p>
              <p className="text-[16px] leading-[1.6] font-medium text-neutral-600">{s.label}</p>
            </div>
            <StatIcon src={s.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}
