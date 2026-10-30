import type { Metadata } from "next";
import { NpHero } from "@/components/nonprofit/NpHero";
import { FundingModel } from "@/components/nonprofit/FundingModel";
import { EndowmentViewSwitch } from "./ViewSwitch";
import { VisionInvolved } from "@/components/nonprofit/VisionInvolved";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Nonprofit — New Active Endowments (internal review)",
  robots: { index: false, follow: false },
};

/** Internal review: the full Nonprofit page with the redesigned endowments in place of ActiveEndowments. */
export default function EndowmentsNewPage() {
  return (
    <main className="overflow-x-hidden">
      <NpHero />
      <FundingModel />
      <EndowmentViewSwitch />
      {/* ProjectUpdates omitted: the new endowment sections carry the latest milestones */}
      <VisionInvolved />
      <CallToAction image="/images/project-curriculum.png" imagePosition="center 40%" />
      <Footer />
    </main>
  );
}
