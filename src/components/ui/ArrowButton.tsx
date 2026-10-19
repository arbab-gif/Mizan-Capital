import Link from "next/link";

type ArrowButtonProps = {
  href: string;
  children: React.ReactNode;
  /** md = 18px text / 36px icon (default), lg = 21px text / 42px icon (CTA banner). */
  size?: "md" | "lg";
  /** Arrow color inside the dark square: white (default) or cream. */
  arrow?: "white" | "cream";
  className?: string;
};

const ICONS = {
  white: "/icons/icon-arrow-btn.svg",
  cream: "/icons/icon-arrow-btn-alt.svg",
};

/** Cream pill button with dark arrow square — the primary CTA used across the site. */
export function ArrowButton({
  href,
  children,
  size = "md",
  arrow = "white",
  className = "",
}: ArrowButtonProps) {
  const isLg = size === "lg";
  return (
    <Link
      href={href}
      className={`group inline-flex shrink-0 items-center bg-cream font-medium leading-[1.5] whitespace-nowrap text-primary transition hover:brightness-95 ${
        isLg
          ? "gap-[10.5px] rounded-[4.66px] py-[4.66px] pr-[4.66px] pl-[14px] text-[20.976px]"
          : "gap-[9px] rounded-[4px] py-[4px] pr-[4px] pl-[12px] text-[18px]"
      } ${className}`}
    >
      {children}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={isLg ? "/icons/icon-arrow-btn-lg.svg" : ICONS[arrow]}
        alt=""
        aria-hidden
        className={`transition-transform group-hover:translate-x-0.5 ${isLg ? "size-[41.95px]" : "size-9"}`}
      />
    </Link>
  );
}
