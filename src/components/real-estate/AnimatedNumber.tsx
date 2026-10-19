"use client";

import { useEffect, useRef, useState } from "react";

const fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/** Counts smoothly from the previous value to `value` whenever it changes. */
export function AnimatedNumber({ value, duration = 700 }: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(value);
  const from = useRef(value);

  useEffect(() => {
    const start = performance.now();
    const initial = from.current;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = initial + (value - initial) * eased;
      setDisplay(next);
      from.current = next;
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return <span className="tabular-nums">{fmt.format(Math.round(display))}</span>;
}
