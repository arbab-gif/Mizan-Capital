"use client";

import { useId, useState } from "react";

type SignupFormProps = {
  /** "waitlist" reserves the $10 launch bonus; "newsletter" is general updates. */
  kind: "waitlist" | "newsletter";
  tone?: "dark" | "light";
  buttonLabel: string;
  successMessage: string;
  className?: string;
};

/**
 * Email capture form. TODO: connect `onSubmit` to the email database / ESP (e.g. a
 * route handler that adds the address to the waitlist or newsletter list).
 */
export function SignupForm({ kind, tone = "light", buttonLabel, successMessage, className = "" }: SignupFormProps) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const dark = tone === "dark";
  const inputId = useId();

  if (done) {
    return (
      <p
        role="status"
        className={`flex items-center gap-3 rounded-[10px] px-4 py-3.5 text-[15px] font-medium ${
          dark ? "bg-white/10 text-cream" : "bg-primary/8 text-primary"
        } ${className}`}
      >
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gold text-white">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </span>
        {successMessage}
      </p>
    );
  }

  return (
    <form
      className={`flex flex-col gap-2 sm:flex-row ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        if (email) setDone(true);
      }}
    >
      <label className="sr-only" htmlFor={inputId}>
        Email address
      </label>
      <input
        id={inputId}
        name={`${kind}-email`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className={`h-12 w-full min-w-0 rounded-[8px] sm:flex-1 px-4 text-[16px] outline-none transition focus:ring-2 focus:ring-gold ${
          dark
            ? "border border-white/20 bg-white/10 text-white placeholder:text-cream/50"
            : "border border-neutral-300 bg-white text-primary placeholder:text-neutral-400"
        }`}
      />
      <button
        type="submit"
        className={`h-12 shrink-0 rounded-[8px] px-6 text-[16px] font-medium transition ${
          dark ? "bg-cream text-primary hover:bg-white" : "bg-primary text-cream hover:bg-forest"
        }`}
      >
        {buttonLabel}
      </button>
    </form>
  );
}
