import type { Metadata } from "next";
import { NpHero } from "@/components/nonprofit/NpHero";
import { FundingModel } from "@/components/nonprofit/FundingModel";
import { ActiveEndowments } from "@/components/nonprofit/ActiveEndowments";
import { ProjectUpdates } from "@/components/nonprofit/VisionInvolve";
import { VisionInvolved } from "@/components/nonprofit/VisionInvolved";
import { CallToAction } from "@/components/sections/CallToAction";
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
      <ProjectUpdates />
      {/* Vision + Get involved merged: where we are going, then how you help get there */}
      <VisionInvolved />
      <CallToAction image="/images/project-curriculum.png" imagePosition="center 40%" />
      <Footer />
    </main>
  );
}
