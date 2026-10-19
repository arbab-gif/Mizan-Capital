import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  /** primary = dark green, beige = soft beige (secondary actions on the latest designs). */
  variant?: "primary" | "beige";
  className?: string;
};

const VARIANTS = {
  primary: "bg-primary text-white hover:bg-forest",
  beige: "bg-beige-btn text-white hover:brightness-95",
};

/** Flat 44px button used by the latest Home design (hero, CTA, project cards). */
export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex h-11 shrink-0 items-center justify-center rounded-[4px] px-6 text-[18px] leading-[1.5] font-medium whitespace-nowrap transition ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
