import type { Metadata } from "next";
import { CommunityHero } from "@/components/community/CommunityHero";
import { AppFeatures } from "@/components/community/AppFeatures";
import { AudienceIntro } from "@/components/community/AudienceIntro";
import { ForCustomers } from "@/components/community/ForCustomers";
import { ForBusinesses } from "@/components/community/ForBusinesses";
import { ForNonprofits } from "@/components/community/ForNonprofits";
import { ShoppingCenter } from "@/components/community/ShoppingCenter";
import { JoinCommunity } from "@/components/community/JoinCommunity";
import { CommunityFlow } from "@/components/community/CommunityFlow";
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
      {/* Client feedback (Oct 17): each audience gets its own pitch and design */}
      <AudienceIntro />
      <ForCustomers />
      <ForBusinesses />
      <ForNonprofits />
      <ShoppingCenter />
      <CommunityFlow />
      <JoinCommunity />
      <Newsletter />
      <Footer />
    </main>
  );
}
