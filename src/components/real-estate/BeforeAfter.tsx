"use client";

import Image from "next/image";
import { useState } from "react";

type BeforeAfterProps = {
  before: string;
  after: string;
  alt: string;
  sizes?: string;
  className?: string;
  /** false = static split (e.g. for inactive carousel cards). */
  interactive?: boolean;
};

/** Drag-to-compare before/after photo. The full area is a range input, so it works with mouse, touch and keyboard. */
export function BeforeAfter({
  before,
  after,
  alt,
  sizes = "(min-width: 1024px) 400px, 100vw",
  className = "relative",
  interactive = true,
}: BeforeAfterProps) {
  const [pos, setPos] = useState(50);

  // `className` should include a position (`relative` by default, or e.g. `absolute inset-0`).
  // Touch events stop here so dragging the slider never triggers a parent carousel swipe.
  return (
    <div
      className={`isolate overflow-hidden select-none ${className}`}
      onTouchStart={(e) => e.stopPropagation()}
      onTouchEnd={(e) => e.stopPropagation()}
    >
      <Image src={after} alt={`${alt} after renovation`} fill sizes={sizes} className="object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={`${alt} before renovation`} fill sizes={sizes} className="object-cover" />
      </div>

      {/* Divider + handle */}
      <div className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 flex size-10 -translate-1/2 items-center justify-center rounded-full bg-white text-primary shadow-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </span>
      </div>

      <span className="pointer-events-none absolute top-3 left-3 z-10 rounded-full bg-black/55 px-3 py-1 text-[12px] font-medium tracking-wider text-white uppercase backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute top-3 right-3 z-10 rounded-full bg-primary/85 px-3 py-1 text-[12px] font-medium tracking-wider text-cream uppercase backdrop-blur-sm">
        After
      </span>

      <input
        disabled={!interactive}
        tabIndex={interactive ? 0 : -1}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Compare before and after photos of ${alt}`}
        className={`absolute inset-0 z-20 h-full w-full opacity-0 ${interactive ? "cursor-ew-resize" : "pointer-events-none"}`}
      />
    </div>
  );
}
