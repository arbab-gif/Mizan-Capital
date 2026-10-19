import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { RealAssets } from "@/components/sections/RealAssets";
import { AppDownload } from "@/components/sections/AppDownload";
import { Projects } from "@/components/sections/Projects";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/sections/Footer";

/**
 * Home page (matches Figma "Home", node 400:2385). Each section is a self-contained component in
 * `src/components/sections`; add, remove or reorder sections here. Content lives in `src/data/home.ts`.
 */
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <StatsBar />

      {/* Content sections: 80px below stats, 84px between sections (per Figma) */}
      <div className="flex flex-col gap-[84px] pt-20 pb-[84px]">
        <RealAssets />
        <AppDownload />
        <Projects />
        <HowItWorks />
      </div>

      <CallToAction />
      <Footer />
    </main>
  );
}
