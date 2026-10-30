"use client";

/**
 * "For Non-profits" (Community page): alternative treatments. The neighbours on the page are
 * Business owners (dark green, 3 white cards) above and Shopping center (white, photo left) below,
 * so these avoid a dark full-bleed band, a photo-left split and a 3-card row.
 * Preview at /community/nonprofit-variants. Figures are ILLUSTRATIVE.
 */
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "./Icon";

const COPY = {
  eyebrow: "For Non-profits",
  title: "Everyday Spending. Lasting Impact.",
  body: "Every purchase on Mizan supports your mission through community contributions, platform revenue, and meaningful connections.",
};

const POINTS = [
  { icon: "store", title: "Receive support from local businesses", body: "Partner businesses contribute a share of what members spend with them.", stat: "$1,280", statLabel: "from businesses / mo" },
  { icon: "chart", title: "Earn a share of platform revenue", body: "A portion of Mizan's revenue goes to participating nonprofits every month.", stat: "$640", statLabel: "platform share / mo" },
  { icon: "users", title: "Share your mission with the community", body: "Post events and milestones straight to members who already want to help.", stat: "2,500", statLabel: "members reached" },
];

function Pill({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`w-fit rounded-full px-3 py-1.5 text-[13px] font-medium ${light ? "bg-white/15 text-white backdrop-blur" : "bg-beige-bg text-[#302b23]"}`}>{children}</span>
  );
}

function Title({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <h2 className={`font-display text-[40px] leading-[1.08] tracking-[-0.01em] md:text-[54px] ${light ? "text-white" : "text-primary"} ${className}`}>
      Everyday Spending.
      <br />
      <span className={`italic ${light ? "text-beige" : "text-beige-ink"}`}>Lasting Impact.</span>
    </h2>
  );
}

function Cta({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#contact"
      className={`inline-flex w-fit items-center gap-2 rounded-[8px] px-6 py-3.5 text-[16px] font-semibold transition ${
        light ? "bg-cream text-primary hover:bg-white" : "bg-primary text-cream hover:bg-forest"
      }`}
    >
      Apply as a nonprofit partner
      <Icon name="arrow" size={18} />
    </a>
  );
}

/* ───────────── A · Funding dashboard ───────────── */

export function NonprofitDashboard() {
  const sources = [
    { label: "Member round-ups", value: 1920, color: "bg-primary" },
    { label: "Business contributions", value: 1280, color: "bg-beige-btn" },
    { label: "Platform revenue share", value: 640, color: "bg-[#4f8f6b]" },
  ];
  const total = sources.reduce((s, x) => s + x.value, 0);
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col gap-7">
          <Pill>{COPY.eyebrow}</Pill>
          <Title />
          <p className="max-w-[520px] text-[17px] leading-[1.65] text-neutral-600">{COPY.body}</p>
          <ol className="flex flex-col gap-5">
            {POINTS.map((p, i) => (
              <li key={p.title} className="flex gap-4">
                <span className="font-display text-[22px] leading-none text-beige-ink">0{i + 1}</span>
                <div>
                  <p className="text-[17px] font-semibold text-primary">{p.title}</p>
                  <p className="mt-1 text-[15px] leading-[1.55] text-neutral-600">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <Cta />
        </div>

        {/* Nonprofit dashboard mock */}
        <div className="relative">
          <div aria-hidden className="absolute -inset-3 -z-10 rounded-[36px] bg-beige-bg md:-inset-6" />
          <div className="flex flex-col gap-6 rounded-[24px] bg-white p-7 shadow-[0_40px_80px_-50px_rgba(48,43,35,0.6)] ring-1 ring-[#e8dfcc] md:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative size-11 overflow-hidden rounded-full">
                  <Image src="/images/project-curriculum.png" alt="" fill sizes="44px" className="object-cover" />
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-primary">Dayton Islamic School</p>
                  <p className="text-[12px] text-neutral-500">Nonprofit partner · this month</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-[#eaf1ec] px-2.5 py-1 text-[12px] font-semibold text-[#2f6b4b]">
                <span className="size-1.5 rounded-full bg-[#2f6b4b]" />
                Live
              </span>
            </div>
            <div>
              <p className="text-[12px] tracking-[0.12em] text-neutral-500 uppercase">Monthly funding</p>
              <p className="mt-1 font-display text-[56px] leading-none text-primary">
                ${total.toLocaleString("en-US")}
                <span className="ml-2 font-sans text-[16px] text-neutral-400">of $5,000</span>
              </p>
            </div>
            <div className="flex h-3 overflow-hidden rounded-full">
              {sources.map((s) => (
                <span key={s.label} className={s.color} style={{ width: `${(s.value / 5000) * 100}%` }} />
              ))}
              <span className="flex-1 bg-[#efe6d3]" />
            </div>
            <ul className="flex flex-col divide-y divide-[#efe6d3]">
              {sources.map((s) => (
                <li key={s.label} className="flex items-center justify-between py-3 text-[15px]">
                  <span className="flex items-center gap-3 text-neutral-700">
                    <span className={`size-2.5 rounded-full ${s.color}`} />
                    {s.label}
                  </span>
                  <span className="font-semibold text-primary">${s.value.toLocaleString("en-US")}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 rounded-[14px] bg-beige-bg px-4 py-3">
              <Icon name="calendar" size={18} className="text-beige-ink" />
              <p className="text-[14px] text-primary">
                <span className="font-semibold">Ramadan food drive</span> shared with 2,500 members
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────── B · Photo panel with glass cards ───────────── */

export function NonprofitPhotoPanel() {
  return (
    <section className="bg-cream-light py-20 md:py-28">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[32px]">
          <Image src="/images/project-curriculum.png" alt="Children learning in a community Islamic school" fill sizes="(min-width: 1280px) 1240px, 100vw" className="-z-20 object-cover object-[50%_35%]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(1,42,28,0.88)_0%,rgba(1,42,28,0.6)_45%,rgba(1,42,28,0.15)_100%)]" />
          <div className="grid gap-10 p-7 md:p-12 lg:min-h-[560px] lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div className="flex flex-col gap-6 self-center">
              <Pill light>{COPY.eyebrow}</Pill>
              <Title light />
              <p className="max-w-[480px] text-[17px] leading-[1.65] text-white/85">{COPY.body}</p>
              <Cta light />
            </div>
            <ul className="flex flex-col gap-3">
              {POINTS.map((p) => (
                <li key={p.title} className="flex items-center gap-4 rounded-[18px] bg-white/[0.12] p-4 ring-1 ring-white/20 backdrop-blur-md">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-beige-btn text-white">
                    <Icon name={p.icon} size={20} />
                  </span>
                  <span className="min-w-0 flex-1 text-[15px] font-medium text-white">{p.title}</span>
                  <span className="shrink-0 text-right">
                    <span className="block font-display text-[22px] leading-none text-white">{p.stat}</span>
                    <span className="block text-[11px] text-white/70">{p.statLabel}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────── C · Editorial statement + numbers ───────────── */

export function NonprofitStatement() {
  const strip = [
    { src: "/images/project-curriculum.png", cap: "Education" },
    { src: "/images/project-mosque.png", cap: "Masjids" },
    { src: "/images/project-housing.png", cap: "Housing" },
  ];
  return (
    <section className="bg-[#f6efe3] py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <Pill>{COPY.eyebrow}</Pill>
          <Title className="md:text-[64px]" />
          <p className="max-w-[640px] text-[18px] leading-[1.65] text-neutral-600">{COPY.body}</p>
        </div>

        <dl className="grid border-y border-[#e0d4bd] md:grid-cols-3 md:divide-x md:divide-[#e0d4bd]">
          {POINTS.map((p) => (
            <div key={p.title} className="flex flex-col items-center gap-2 px-6 py-8 text-center">
              <dd className="font-display text-[52px] leading-none text-primary">{p.stat}</dd>
              <dt className="text-[13px] tracking-[0.1em] text-beige-ink uppercase">{p.statLabel}</dt>
              <p className="mt-2 max-w-[280px] text-[15px] leading-[1.5] text-neutral-600">{p.title}</p>
            </div>
          ))}
        </dl>

        <div className="grid grid-cols-3 gap-3 md:gap-5">
          {strip.map((s, i) => (
            <figure key={s.cap} className={`relative overflow-hidden rounded-[20px] ${i === 1 ? "aspect-[3/4] md:-mt-8" : "aspect-[3/4]"}`}>
              <Image src={s.src} alt="" fill sizes="(min-width: 768px) 400px, 33vw" className="object-cover" />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium text-primary md:text-[13px]">{s.cap}</figcaption>
            </figure>
          ))}
        </div>
        <div className="flex justify-center">
          <Cta />
        </div>
      </Container>
    </section>
  );
}

/* ───────────── D · Interactive tabs ───────────── */

const TABS = [
  { ...POINTS[0], img: "/images/project-housing.png", note: "Noor Grocery sends 2% of member purchases to your programs, automatically." },
  { ...POINTS[1], img: "/images/project-mosque.png", note: "Each month a share of Mizan's platform revenue is split between partner nonprofits." },
  { ...POINTS[2], img: "/images/project-curriculum.png", note: "Post an iftar, food drive or class and every nearby member sees it in the app." },
];

export function NonprofitTabs() {
  const [i, setI] = useState(0);
  const t = TABS[i];
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-7">
          <Pill>{COPY.eyebrow}</Pill>
          <Title />
          <p className="max-w-[500px] text-[17px] leading-[1.65] text-neutral-600">{COPY.body}</p>
          <div role="tablist" className="flex flex-col">
            {TABS.map((x, k) => {
              const on = k === i;
              return (
                <button
                  key={x.title}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setI(k)}
                  onMouseEnter={() => setI(k)}
                  className={`flex items-center gap-4 border-l-2 py-4 pl-5 text-left transition ${on ? "border-beige-btn" : "border-[#ece4d3] opacity-55 hover:opacity-90"}`}
                >
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-full transition ${on ? "bg-primary text-beige" : "bg-beige-bg text-beige-ink"}`}>
                    <Icon name={x.icon} size={18} />
                  </span>
                  <span className="text-[17px] font-semibold text-primary">{x.title}</span>
                </button>
              );
            })}
          </div>
          <Cta />
        </div>

        <div key={i} className="relative animate-[fadeUp_0.45s_ease-out]">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[28px]">
            <Image src={t.img} alt="" fill sizes="(min-width: 1024px) 680px, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 flex items-center gap-5 rounded-[20px] bg-white p-5 shadow-[0_30px_60px_-30px_rgba(48,43,35,0.55)] md:left-auto md:w-[380px]">
            <div>
              <p className="font-display text-[34px] leading-none text-primary">{t.stat}</p>
              <p className="mt-1 text-[12px] tracking-[0.08em] text-beige-ink uppercase">{t.statLabel}</p>
            </div>
            <p className="border-l border-[#efe6d3] pl-5 text-[14px] leading-[1.5] text-neutral-600">{t.note}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────── E · Bento cards ───────────── */

/** A small app "post" tile used in the collage on the big card. */
function PostTile({ img, tag, title, className = "" }: { img: string; tag: string; title: string; className?: string }) {
  return (
    <div className={`absolute flex overflow-hidden rounded-[14px] bg-cream shadow-[0_30px_50px_-25px_rgba(0,0,0,0.6)] ${className}`}>
      <div className="flex flex-1 flex-col justify-between gap-3 p-4">
        <span className="w-fit rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-cream">{tag}</span>
        <p className="font-display text-[22px] leading-[1.05] whitespace-pre-line text-primary">{title}</p>
      </div>
      <div className="relative w-[42%] shrink-0">
        <Image src={img} alt="" fill sizes="160px" className="object-cover" />
      </div>
    </div>
  );
}

export function NonprofitBento() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-5">
            <Pill>{COPY.eyebrow}</Pill>
            <Title />
          </div>
          <p className="max-w-[440px] text-[17px] leading-[1.65] text-neutral-600">{COPY.body}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* Big card: share your mission */}
          <article className="relative isolate flex min-h-[560px] flex-col overflow-hidden rounded-[28px] bg-primary p-8 md:p-10">
            <h3 className="font-display text-[34px] leading-tight text-beige md:text-[40px]">Share your mission</h3>
            <p className="mt-3 max-w-[440px] text-[17px] leading-[1.6] text-cream/85">
              Post events, milestones and new programs straight to members who already want to help.
            </p>
            <a href="#contact" className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-beige px-6 py-3.5 text-[16px] font-semibold text-primary transition hover:bg-[#e2cfab]">
              See how it works
            </a>

            {/* Collage of app posts */}
            <div aria-hidden className="relative mt-auto h-[290px]">
              <div className="absolute bottom-24 -left-10 h-[110px] w-[220px] rounded-[14px] bg-white/10 blur-[1px]" />
              <div className="absolute -right-10 bottom-6 h-[120px] w-[200px] rounded-[14px] bg-beige/25 blur-[1px]" />
              <PostTile img="/images/project-mosque.png" tag="Milestone" title={"1,200 meal kits\ndelivered"} className="right-4 bottom-32 h-[136px] w-[300px] rotate-[2deg] max-sm:right-0 max-sm:w-[250px]" />
              <PostTile img="/images/project-curriculum.png" tag="Event" title={"Ramadan\nfood drive"} className="bottom-0 left-0 h-[140px] w-[330px] -rotate-[1deg] max-sm:w-[260px]" />
            </div>
          </article>

          <div className="flex flex-col gap-5">
            {/* Beige: steady funding */}
            <article className="flex flex-1 flex-col justify-center rounded-[28px] bg-beige-bg p-8 md:p-10">
              <h3 className="font-display text-[32px] leading-tight text-primary md:text-[38px]">Ready for steady, monthly funding?</h3>
              <p className="mt-3 max-w-[480px] text-[17px] leading-[1.6] text-neutral-700">
                Join as a partner nonprofit and start receiving support from everyday community spending, without asking for more.
              </p>
              <a href="#contact" className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[16px] font-semibold text-cream transition hover:bg-forest">
                Apply as a partner
              </a>
            </article>

            {/* Light: where the money comes from */}
            <article className="flex flex-1 flex-col justify-center rounded-[28px] bg-cream-light p-8 ring-1 ring-[#ece4d3] md:p-10">
              <h3 className="font-display text-[32px] leading-tight text-primary md:text-[38px]">Where does the funding come from?</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {POINTS.slice(0, 2).map((p) => (
                  <li key={p.title} className="flex items-center gap-3 text-[16px] text-neutral-700">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-beige-ink ring-1 ring-[#e8dfcc]">
                      <Icon name={p.icon} size={15} />
                    </span>
                    {p.title}
                  </li>
                ))}
              </ul>
              <a href="#giving" className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#3f4a45] px-6 py-3.5 text-[16px] font-semibold text-white transition hover:bg-primary">
                Learn more
              </a>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────── F · Photo + feature columns ───────────── */

function PhotoCard({ img, pos, title, body }: { img: string; pos: string; title: string; body: string }) {
  return (
    <article className="group relative isolate flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[24px] p-7 lg:min-h-[640px]">
      <Image src={img} alt="" fill sizes="(min-width: 1024px) 400px, 100vw" className="-z-20 object-cover transition-transform duration-700 group-hover:scale-[1.04]" style={{ objectPosition: pos }} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#012a1c] via-[#012a1c]/45 to-transparent" />
      <h3 className="font-display text-[30px] leading-tight text-beige">{title}</h3>
      <p className="mt-2 text-[15px] leading-[1.6] text-white/85">{body}</p>
    </article>
  );
}

function FeatureCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <article className="flex flex-1 flex-col gap-6 rounded-[24px] bg-primary p-7">
      <h3 className="font-display text-[30px] leading-tight text-beige">{title}</h3>
      <span className="flex size-[72px] items-center justify-center rounded-full bg-beige text-primary">
        <Icon name={icon} size={32} />
      </span>
      <p className="mt-auto text-[15px] leading-[1.6] text-white/85">{body}</p>
    </article>
  );
}

export function NonprofitColumns() {
  return (
    <section className="bg-cream-light py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex max-w-[860px] flex-col gap-5">
          <Pill>{COPY.eyebrow}</Pill>
          <Title />
          <p className="text-[18px] leading-[1.6] font-medium text-primary">{COPY.body}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <PhotoCard
            img="/images/project-curriculum.png"
            pos="50% 35%"
            title="Your mission, seen"
            body="Share events, milestones and new programs with thousands of members who already want to help, right inside the app."
          />
          <div className="flex flex-col gap-5">
            <FeatureCard
              icon="heart"
              title="Steady funding"
              body="Monthly support from member round-ups, partner businesses and a share of platform revenue, so you can plan ahead instead of fundraising constantly."
            />
            <FeatureCard
              icon="chart"
              title="Fully transparent"
              body="Every contribution is tracked, and supporters see exactly what their giving achieved, which builds trust that lasts."
            />
          </div>
          <PhotoCard
            img="/images/project-mosque.png"
            pos="50% 40%"
            title="Built to last"
            body="Support that grows with the community, sustaining masjids, schools and housing across Greater Dayton year after year."
          />
        </div>

        <Cta />
      </Container>
    </section>
  );
}
