import type { Metadata } from "next";
import { CommunityHero } from "@/components/community/CommunityHero";
import { AppFeatures } from "@/components/community/AppFeatures";
import { BuiltForEveryone } from "@/components/community/BuiltForEveryone";
import { PartnerBusinesses } from "@/components/community/PartnerBusinesses";
import { LaunchWaitlist } from "@/components/community/LaunchWaitlist";
import { Newsletter } from "@/components/community/Newsletter";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Community Capital App — Mizan Capital",
  description:
    "One App. One Mission. Discover Muslim-owned businesses, fund local nonprofits, and join the waitlist for a $10 launch bonus.",
};

export default function CommunityPage() {
  return (
    <main className="overflow-x-hidden">
      <CommunityHero />
      <AppFeatures />
      <BuiltForEveryone />
      <PartnerBusinesses />
      <LaunchWaitlist />
      <Newsletter />
      <Footer />
    </main>
  );
}
