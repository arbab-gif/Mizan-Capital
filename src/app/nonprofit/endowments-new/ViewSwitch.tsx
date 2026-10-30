"use client";

import { useState } from "react";
import { EndowmentTrio, type EndowmentView } from "@/components/nonprofit/EndowmentTrio";

const VIEWS: { id: EndowmentView; label: string }[] = [
  { id: "stacked", label: "Stacked" },
  { id: "tabs", label: "Tabs" },
  { id: "slider", label: "Slider" },
];

/** Review-only: floating switch to compare the three ways of presenting the endowments. */
export function EndowmentViewSwitch() {
  const [view, setView] = useState<EndowmentView>("stacked");
  return (
    <>
      <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full bg-white/95 p-1.5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/10 backdrop-blur">
        <span className="px-3 text-[13px] font-medium text-neutral-500">View</span>
        {VIEWS.map((v) => (
          <button
            key={v.id}
            onClick={() => setView(v.id)}
            className={`rounded-full px-4 py-2 text-[14px] font-medium transition ${view === v.id ? "bg-primary text-cream" : "text-primary hover:bg-cream-light"}`}
          >
            {v.label}
          </button>
        ))}
      </div>
      <EndowmentTrio view={view} />
    </>
  );
}
