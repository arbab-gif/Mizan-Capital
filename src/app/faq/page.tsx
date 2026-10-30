import type { Metadata } from "next";
import { faqIntro as c } from "@/data/faq";
import { FaqContent } from "@/components/faq/FaqContent";
import { Navbar } from "@/components/sections/Navbar";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/sections/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "FAQ’s — Mizan Capital",
  description:
    "Answers about Mizan Capital's mission, halal compliance, investments, the community app, nonprofit support, transparency, and partnerships.",
};

export default function FaqPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Same hero language as Home / Real Estate / Nonprofit: photo, cream fade from the left, dark headline */}
      <section className="relative isolate overflow-hidden bg-[#f9f6f3] lg:min-h-[620px]">
        <Image src="/images/faq-hero.jpg" alt="" fill priority sizes="100vw" className="-z-20 object-cover object-[70%_40%]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(249,246,243,0.96)_0%,rgba(249,246,243,0.88)_42%,rgba(249,246,243,0.1)_75%)] max-lg:bg-[linear-gradient(90deg,rgba(249,246,243,0.95)_0%,rgba(249,246,243,0.85)_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[210px] bg-gradient-to-b from-black/35 to-transparent" />
        <Navbar cta="solid" />
        <div className="flex max-w-[700px] flex-col gap-6 px-5 pt-[160px] pb-20 md:px-16 lg:pt-[210px]">
          <p className="w-fit rounded-full bg-beige/20 px-4 py-1.5 text-[12px] font-semibold tracking-[0.12em] text-warm-ink uppercase">{c.eyebrow}</p>
          <h1 className="font-display text-[46px] leading-[1.05] tracking-[-0.02em] text-black md:text-[72px]">{c.title}</h1>
          <p className="max-w-[560px] text-[17px] leading-[1.65] text-neutral-700 md:text-[18px]">{c.description}</p>
        </div>
      </section>

      <FaqContent />

      <CallToAction />
      <Footer />
    </main>
  );
}
