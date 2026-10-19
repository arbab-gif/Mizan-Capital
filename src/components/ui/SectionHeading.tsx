type SectionHeadingProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Small pill label shown above the title. */
  eyebrow?: React.ReactNode;
  /** Eyebrow pill style; defaults to match `tone`. */
  eyebrowTone?: "dark" | "light" | "soft";
  align?: "center" | "left";
  /** light = white text for dark backgrounds. */
  tone?: "dark" | "light";
  /** Max width of the description paragraph (Figma widths vary per section). */
  descriptionClassName?: string;
  className?: string;
};

/**
 * Small pill shown above section titles.
 * dark/light = uppercase pill with a gold dot; soft = beige-tinted pill from the latest Home design.
 */
export function Eyebrow({ children, tone = "dark" }: { children: React.ReactNode; tone?: "dark" | "light" | "soft" }) {
  if (tone === "soft") {
    return (
      <span className="inline-flex w-fit items-center rounded-full bg-beige/10 px-2.5 py-1 text-[14px] leading-[1.2] font-medium text-warm-ink">
        {children}
      </span>
    );
  }
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-medium tracking-[0.14em] uppercase ${
        tone === "dark" ? "bg-primary text-cream" : "border border-white/20 bg-white/10 text-cream backdrop-blur-md"
      }`}
    >
      <span className="size-1.5 rounded-full bg-gold" />
      {children}
    </span>
  );
}

/** 44px Ivar Display title + 18px supporting copy, used at the top of most sections. */
export function SectionHeading({
  title,
  description,
  eyebrow,
  eyebrowTone,
  align = "center",
  tone = "dark",
  descriptionClassName = "",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  const light = tone === "light";
  return (
    <div
      className={`flex flex-col gap-4 ${centered ? "items-center text-center" : "items-start"} ${className}`}
    >
      {eyebrow && <Eyebrow tone={eyebrowTone ?? tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-display text-[32px] leading-[1.2] font-medium tracking-[-0.01em] md:text-[44px] ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-[16px] leading-[1.6] font-medium md:text-[18px] ${
            light ? "text-neutral-300" : "text-neutral-600"
          } ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
