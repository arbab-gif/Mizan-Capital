"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/home";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Logo } from "@/components/ui/Logo";

/**
 * Transparent, blurred header that overlays the hero.
 * cta: "arrow" = cream pill with arrow square (default), "solid" = dark green button (latest Home design).
 */
export function Navbar({ cta = "arrow" }: { cta?: "arrow" | "solid" } = {}) {
  const [open, setOpen] = useState(false);
  const activeHref = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-30 px-5 py-[13px] backdrop-blur-[62px]">
      <div className="flex items-center justify-between">
        <Logo variant="light" />

        <nav className="hidden items-center gap-10 xl:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-[16px] leading-[1.5] font-medium whitespace-nowrap text-white transition-colors hover:text-cream ${
                    link.href === activeHref ? "border-b border-beige" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {cta === "solid" ? (
            <Link
              href="#invest"
              className="rounded-[4px] bg-primary px-6 py-2 text-[18px] leading-[1.5] font-medium whitespace-nowrap text-white transition hover:bg-forest"
            >
              Invest with Purpose
            </Link>
          ) : (
            <ArrowButton href="#invest">Invest with Purpose</ArrowButton>
          )}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 items-center justify-center rounded-[4px] border border-cream/60 text-white xl:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="mt-4 flex flex-col gap-4 rounded-[12px] bg-primary/90 p-5 xl:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[16px] font-medium text-white"
            >
              {link.label}
            </Link>
          ))}
          <ArrowButton href="#invest" className="self-start">
            Invest with Purpose
          </ArrowButton>
        </nav>
      )}
    </header>
  );
}
