"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { footerColumns, socialLinks } from "@/data/home";
import { Logo } from "@/components/ui/Logo";

/** Newsletter sign-up. TODO: connect to the email service provider. */
function Newsletter() {
  const id = useId();
  const [sent, setSent] = useState(false);
  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label htmlFor={id} className="text-[20px] font-medium text-warm-ink">
        News letter
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={id}
          type="email"
          required
          placeholder="Your email address"
          className="h-11 w-full rounded-[8px] border border-primary/60 bg-primary/5 px-3 text-[16px] text-primary placeholder:text-primary/60 focus:outline-2 focus:outline-beige sm:flex-1"
        />
        <button
          type="submit"
          className="h-11 shrink-0 rounded-[4px] border border-beige bg-beige-btn px-6 text-[18px] font-medium text-white transition hover:brightness-95"
        >
          {sent ? "Thanks!" : "Send"}
        </button>
      </div>
    </form>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-primary/5 px-5 pt-16 pb-6 md:px-[100px] md:pt-[100px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-[60px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-8">
            <Logo variant="dark" />
            <div className="flex flex-col gap-6">
              <p className="w-[259px] text-[18px] leading-[1.6] text-warm-muted">
                Building stronger communities for generations to come.
              </p>
              <div className="flex items-center gap-[17.15px]">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex size-[51.44px] items-center justify-center rounded-full bg-primary/10 transition hover:bg-primary/20"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.icon} alt="" className="size-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-8 lg:w-[621px]">
            <div className="flex flex-wrap justify-between gap-8 sm:flex-nowrap">
              {footerColumns.map((col, i) => (
                <div key={col.title} className="contents">
                  {i > 0 && <span aria-hidden className="hidden w-px self-stretch bg-primary sm:block" />}
                  <div className="flex flex-col gap-6 whitespace-nowrap">
                    <p className="text-[18px] font-medium text-warm-ink">{col.title}</p>
                    <ul className="flex flex-col gap-4 text-[16px] text-warm-muted">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <Link href={link.href} className="transition-colors hover:text-primary">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <Newsletter />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <hr className="border-primary" />
          <div className="flex flex-wrap items-center justify-between gap-2 text-[16px] text-warm-muted md:text-[20px]">
            <p>© 2026 Mizan Capital</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
