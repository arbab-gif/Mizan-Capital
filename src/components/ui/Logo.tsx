import Link from "next/link";

type LogoProps = {
  /** light = white wordmark (on dark/hero backgrounds), dark = green + gold (on light backgrounds). */
  variant?: "light" | "dark";
};

/** Mizan Capital wordmark: gold "M" tile + name + tagline. */
export function Logo({ variant = "light" }: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      aria-label="Mizan Capital home"
      className="relative block h-[57.746px] w-[223.358px] shrink-0 font-logo"
    >
      <span className="absolute top-[4.58px] left-[6.32px] flex size-[47.94px] items-center justify-center rounded-[8px] bg-beige-btn text-[32.687px] leading-[1.2] font-bold text-white">
        M
      </span>
      <span
        className={`absolute top-[5.67px] left-[67.33px] text-[23.97px] font-bold whitespace-nowrap ${
          isLight ? "text-white" : "text-primary"
        }`}
      >
        Mizan Capital
      </span>
      <span
        className={`absolute top-[36.17px] left-[68.2px] text-[8.716px] whitespace-nowrap ${
          isLight ? "text-white" : "text-beige-ink"
        }`}
      >
        ISLAMIC IMPACT INVESTMENT
      </span>
    </Link>
  );
}
