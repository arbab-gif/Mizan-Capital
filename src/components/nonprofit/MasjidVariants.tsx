import Image from "next/image";
import { masjidOutlook as masjid } from "@/data/nonprofit";
import { STAR_PATTERN } from "@/components/ui/pattern";
import { Icon } from "@/components/community/Icon";
import { SupportLink, Tag } from "@/components/nonprofit/EndowmentTrio";

const done = masjid.steps.filter((s) => s.done);
const next = masjid.steps.find((s) => !s.done)!;
const pct = Math.round((done.length / masjid.steps.length) * 100);

function StatusPill() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-beige px-3 py-1 text-[12px] font-semibold tracking-[0.08em] text-primary uppercase">
      <Icon name="check" size={14} />
      {masjid.status}
    </span>
  );
}

/* ---------- B. Split with a vertical timeline ---------- */

export function MasjidTimeline() {
  return (
    <article className="grid overflow-hidden rounded-[32px] bg-cream-light lg:grid-cols-[1.05fr_0.95fr]">
      <div className="flex flex-col gap-7 p-6 md:p-12">
        <div className="flex flex-wrap gap-2">
          <Tag>{masjid.category}</Tag>
          <StatusPill />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-[40px] leading-[1.05] text-primary md:text-[56px]">{masjid.name}</h3>
          <p className="text-[17px] leading-[1.6] text-neutral-700">{masjid.intro}</p>
        </div>

        <ol className="flex flex-col">
          {masjid.steps.map((s, i) => (
            <li key={s.title} className="group relative flex gap-4 pb-6 last:pb-0">
              {i < masjid.steps.length - 1 && (
                <span aria-hidden className={`absolute top-10 left-[17px] h-[calc(100%-36px)] w-0.5 ${masjid.steps[i + 1].done ? "bg-beige" : "border-l-2 border-dashed border-beige"}`} />
              )}
              <span
                className={`relative grid size-9 shrink-0 place-items-center rounded-full ${
                  s.done ? "bg-primary text-beige" : "border-2 border-dashed border-beige-ink bg-white text-beige-ink"
                }`}
              >
                {s.done ? <Icon name="check" size={16} /> : <span className="size-2 animate-pulse rounded-full bg-beige-ink" />}
              </span>
              <div className="flex flex-col gap-0.5 pt-1.5">
                <p className="text-[17px] font-medium text-primary">
                  {s.title}
                  {!s.done && <span className="ml-2 rounded-full bg-beige/20 px-2 py-0.5 text-[11px] font-semibold tracking-[0.1em] text-beige-ink uppercase">Up next</span>}
                </p>
                <p className="text-[15px] text-neutral-600">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <SupportLink />
      </div>

      <div className="relative min-h-[380px]">
        <Image src={masjid.image} alt={masjid.name} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
        <div className="absolute bottom-5 left-5 flex items-center gap-4 rounded-[20px] bg-white/90 p-4 pr-6 backdrop-blur-md">
          <span className="font-display text-[40px] leading-none text-primary">
            {done.length}
            <span className="text-[20px] text-neutral-400">/{masjid.steps.length}</span>
          </span>
          <span className="text-[14px] leading-snug text-neutral-700">
            steps complete
            <br />
            <span className="text-beige-ink">Ready to begin</span>
          </span>
        </div>
      </div>
    </article>
  );
}

/* ---------- C. Arch-framed photo with scope cards ---------- */

export function MasjidArch() {
  return (
    <article className="relative isolate overflow-hidden rounded-[32px] bg-beige-bg p-6 md:p-12">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.18]" style={{ backgroundImage: STAR_PATTERN }} />
      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* mihrab-style arch */}
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[400px] overflow-hidden rounded-t-[999px] rounded-b-[24px] ring-8 ring-white">
          <Image src={masjid.image} alt={masjid.name} fill sizes="400px" className="object-cover" />
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <Tag>{masjid.category}</Tag>
              <StatusPill />
            </div>
            <h3 className="font-display text-[40px] leading-[1.05] text-primary md:text-[56px]">{masjid.name}</h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { icon: "home", title: "Interior", body: "Renovation scope outlined and quoted." },
              { icon: "store", title: "Exterior", body: "Renovation scope outlined and quoted." },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 rounded-[20px] bg-white p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-beige">
                  <Icon name={c.icon} size={20} />
                </span>
                <div>
                  <p className="font-display text-[22px] text-primary">{c.title}</p>
                  <p className="text-[14px] text-neutral-600">{c.body}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {done.map((s) => (
              <li key={s.title} className="flex items-center gap-3 text-[16px] text-primary">
                <Icon name="check" size={18} className="text-beige-ink" />
                {s.title}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[20px] bg-primary p-5 text-cream">
            <div className="flex items-center gap-3">
              <Icon name="calendar" size={22} className="text-beige" />
              <div>
                <p className="text-[12px] font-semibold tracking-[0.12em] text-beige uppercase">Next: {next.title}</p>
                <p className="text-[16px]">{next.body}</p>
              </div>
            </div>
            <SupportLink tone="beige" />
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------- D. Dark status board with a photo banner ---------- */

export function MasjidBoard() {
  return (
    <article className="overflow-hidden rounded-[32px] bg-primary text-cream">
      <div className="relative h-[260px] md:h-[320px]">
        <Image src={masjid.image} alt={masjid.name} fill sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover object-[50%_40%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
        <div className="absolute right-6 bottom-6 left-6 flex flex-wrap items-end justify-between gap-4 md:right-12 md:left-12">
          <div className="flex flex-col gap-3">
            <Tag tone="dark">{masjid.category}</Tag>
            <h3 className="font-display text-[40px] leading-[1.05] text-white md:text-[56px]">{masjid.name}</h3>
          </div>
          <StatusPill />
        </div>
      </div>

      <div className="flex flex-col gap-6 p-6 md:p-12 md:pt-8">
        <div className="flex items-center gap-4">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-beige" style={{ width: `${pct}%` }} />
          </div>
          <span className="text-[14px] font-medium text-beige">{pct}% of the outlook complete</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {masjid.steps.map((s, i) =>
            s.done ? (
              <div key={s.title} className="flex flex-col gap-4 rounded-[20px] bg-white/[0.06] p-5 ring-1 ring-white/10 transition hover:bg-white/[0.1]">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[28px] text-white/35">0{i + 1}</span>
                  <span className="grid size-8 place-items-center rounded-full bg-beige text-primary">
                    <Icon name="check" size={15} />
                  </span>
                </div>
                <div>
                  <p className="text-[16px] font-medium text-white">{s.title}</p>
                  <p className="mt-1 text-[14px] text-[#c9d3cd]">{s.body}</p>
                </div>
              </div>
            ) : (
              <div key={s.title} className="flex flex-col gap-4 rounded-[20px] bg-beige p-5 text-primary sm:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[28px] text-primary/40">0{i + 1}</span>
                  <Icon name="calendar" size={20} />
                </div>
                <div>
                  <p className="text-[16px] font-medium">{s.title}</p>
                  <p className="mt-1 text-[14px] text-primary/75">{s.body} Your support helps set it.</p>
                </div>
                <a href="#involved" className="group mt-auto inline-flex items-center gap-2 text-[15px] font-semibold">
                  Support this initiative
                  <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            ),
          )}
        </div>
      </div>
    </article>
  );
}

/* ---------- E. Project sheet: a checklist document with a stamp ---------- */

export function MasjidSheet() {
  return (
    <article className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
      <div className="relative min-h-[360px] overflow-hidden rounded-[32px] lg:min-h-0">
        <Image src={masjid.image} alt={masjid.name} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute right-6 bottom-6 left-6 flex flex-col gap-3">
          <Tag tone="dark">{masjid.category}</Tag>
          <h3 className="font-display text-[40px] leading-[1.05] text-white md:text-[52px]">{masjid.name}</h3>
        </div>
      </div>

      <div className="relative flex flex-col gap-6 rounded-[32px] bg-white p-6 shadow-[0_30px_60px_-40px_rgba(1,42,28,0.5)] ring-1 ring-[#e8dfcc] md:p-10">
        {/* stamp */}
        <span className="absolute top-6 right-6 rotate-[-8deg] rounded-[10px] border-2 border-beige-ink px-3 py-1.5 text-center text-[12px] leading-tight font-bold tracking-[0.14em] text-beige-ink uppercase opacity-90">
          Outlook
          <br />
          completed
        </span>

        <div className="pr-28">
          <p className="text-[12px] font-semibold tracking-[0.14em] text-beige-ink uppercase">Renovation outlook</p>
          <p className="mt-2 text-[17px] leading-[1.6] text-neutral-700">{masjid.intro}</p>
        </div>

        <ul className="flex flex-col divide-y divide-dashed divide-[#e0d5bf] border-y border-dashed border-[#e0d5bf]">
          {masjid.steps.map((s) => (
            <li key={s.title} className="flex items-center gap-4 py-4">
              <span
                className={`grid size-6 shrink-0 place-items-center rounded-[6px] ${
                  s.done ? "bg-primary text-beige" : "border-2 border-beige-ink"
                }`}
              >
                {s.done && <Icon name="check" size={14} />}
              </span>
              <span className={`flex-1 text-[16px] ${s.done ? "text-primary" : "font-medium text-beige-ink"}`}>{s.title}</span>
              <span className={`text-[14px] ${s.done ? "text-neutral-500" : "text-beige-ink"}`}>{s.done ? "Done" : "TBD"}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[14px] text-neutral-600">
            <span className="font-display text-[24px] text-primary">{done.length}</span> of {masjid.steps.length} steps done
          </p>
          <SupportLink />
        </div>
      </div>
    </article>
  );
}
