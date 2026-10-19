"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Full-screen viewer for a property overview flyer (or any tall document image).
 * Closes on Escape, backdrop click, or the close button; locks page scroll while open.
 */
export function FlyerModal({
  title,
  subtitle,
  src,
  action,
  details,
  link,
  onClose,
}: {
  title: string;
  subtitle?: string;
  src: string;
  /** Optional primary action under the flyer, e.g. "Invest in this property". */
  action?: { label: string; href: string };
  /** Key investment numbers shown above the flyer. */
  details?: { label: string; value: string }[];
  /** Secondary link in the footer, e.g. the before/after photo album. */
  link?: { label: string; href: string };
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-3 backdrop-blur-sm md:p-6"
      onClick={onClose}
    >
      <div
        className="flex max-h-[94vh] w-full max-w-[760px] flex-col overflow-hidden rounded-[20px] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-5 py-4">
          <div className="min-w-0">
            <p className="truncate font-display text-[22px] leading-tight text-primary">{title}</p>
            {subtitle && <p className="text-[14px] text-neutral-500">{subtitle}</p>}
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-primary transition hover:bg-neutral-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {details && (
          <dl className="grid grid-cols-2 gap-px border-b border-neutral-200 bg-[#e8dfcc] sm:grid-cols-4">
            {details.map((d, i) => (
              <div key={d.label} className="flex flex-col gap-1 bg-white px-5 py-3.5">
                <dt className="text-[10px] font-semibold tracking-[0.08em] text-neutral-500 uppercase">{d.label}</dt>
                <dd className={`text-[16px] font-semibold ${i === details.length - 1 ? "text-beige-ink" : "text-primary"}`}>{d.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="overflow-y-auto bg-[#f4f1ea]">
          <Image src={src} alt={`${title} overview`} width={1400} height={1960} sizes="760px" className="h-auto w-full" />
        </div>

        {(action || link) && (
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 px-5 py-4">
            {link ? (
              <a href={link.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-[6px] border border-primary/25 px-4 py-3 text-[15px] font-semibold text-primary transition hover:bg-primary/5">
                <CameraIcon />
                {link.label} <span className="text-beige-ink">→</span>
              </a>
            ) : (
              <span />
            )}
            {action && (
            <a
              href={action.href}
              onClick={onClose}
              className="rounded-[6px] bg-primary px-5 py-3 text-[16px] font-medium text-cream transition hover:bg-forest"
            >
              {action.label}
            </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function CameraIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.6l1.4-2h7l1.4 2h1.6A2.5 2.5 0 0 1 21 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}
