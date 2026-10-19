import type { Metadata } from "next";
import { NpHero } from "@/components/nonprofit/NpHero";
import { FundingModel } from "@/components/nonprofit/FundingModel";
import { ActiveEndowments } from "@/components/nonprofit/ActiveEndowments";
import { Involvement, Vision } from "@/components/nonprofit/VisionInvolve";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Nonprofit Impact — Mizan Capital",
  description:
    "Built to give. Designed to last. Endowments that turn one-time gifts into lasting support for Islamic education, housing, and community spaces.",
};

export default function NonprofitPage() {
  return (
    <main className="overflow-x-hidden">
      <NpHero />
      <FundingModel />
      <ActiveEndowments />
      <Vision />
      <Involvement />
      <Footer />
    </main>
  );
}
