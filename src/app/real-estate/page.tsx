import type { Metadata } from "next";
import { wealthFootnote } from "@/data/realEstate";
import { ReHero } from "@/components/real-estate/ReHero";
import { OpenDeals } from "@/components/real-estate/OpenDeals";
import { Portfolio } from "@/components/real-estate/Portfolio";
import { ShariahCompliance } from "@/components/real-estate/ShariahCompliance";
import { Testimonials } from "@/components/real-estate/Testimonials";
import { ReturnsCalculator } from "@/components/sections/ReturnsCalculator";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Real Estate — Mizan Capital",
  description:
    "Asset-backed, Shariah-compliant real estate investments across Greater Dayton. Halal returns for investors and lasting Sadaqah Jariyah for the community.",
};

export default function RealEstatePage() {
  return (
    <main className="overflow-x-hidden">
      <ReHero />
      <OpenDeals />
      <div className="h-20 md:h-24" />
      <Portfolio />
      <ShariahCompliance />

      <div className="flex flex-col gap-[84px] py-[84px]">
        <section id="wealth-impact">
          <Container>
            <ReturnsCalculator
              title="What your investment could look like"
              description="Explore projected portfolio growth alongside the Sadaqah Jariyah impact your capital creates."
              footnote={wealthFootnote}
            />
          </Container>
        </section>
        <Testimonials />
      </div>

      <CallToAction image="/images/home/project-housing-boltin.jpg" imagePosition="center 35%" />
      <Footer />
    </main>
  );
}
