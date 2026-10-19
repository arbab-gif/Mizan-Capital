/**
 * Community page content (Community Capital App).
 * "Learn more" copy is DRAFT — have the client review before launch.
 */

export const communityHero = {
  eyebrow: "Community Capital App",
  titleStart: "One App.",
  titleEnd: "One Mission.",
  description:
    "Redirect everyday spending toward Muslim-owned businesses, fund local nonprofits, and strengthen the community around you, all from one app.",
  bonus: "$10",
  bonusNote: "download bonus when we launch",
};

export const appFeaturesIntro = {
  title: "Everything inside the app",
  description: "The everyday tools that turn ordinary spending into lasting community impact.",
  link: { label: "Join the waitlist", href: "#waitlist" },
};

/** Bento order: 2 cards beside the intro, then 3 below. The `highlight` card is the mission at the core. */
export const appFeatures = [
  { title: "Discover local", description: "Find Muslim-owned businesses, services, and events near you.", icon: "pin", highlight: false },
  { title: "Member perks", description: "Unlock exclusive offers and loyalty rewards automatically.", icon: "tag", highlight: false },
  { title: "Community news", description: "Stay close to updates from nonprofits and local leaders.", icon: "news", highlight: false },
  { title: "Transparent impact", description: "See exactly where every round-up and contribution goes.", icon: "chart", highlight: false },
  { title: "Round-up giving", description: "Round up every purchase and send the change to causes you choose.", icon: "heart", highlight: true },
] as const;

export type AudienceId = "customers" | "business" | "nonprofits";

export const audiences: {
  id: AudienceId;
  tab: string;
  headline: string;
  summary: string;
  points: { title: string; description: string }[];
  learnMore: { intro: string; sections: { title: string; body: string }[] };
}[] = [
  {
    id: "customers",
    tab: "Customers",
    headline: "Shop with purpose. Earn as you give.",
    summary: "Everything you already buy, redirected to businesses and causes that share your values.",
    points: [
      { title: "Find locally owned Muslim businesses", description: "Halal food, services, and shops near you, verified and in one place." },
      { title: "Fund local nonprofit programs", description: "Every purchase can round up toward masjids, food pantries, and youth programs." },
      { title: "Unlock member perks", description: "Exclusive offers and loyalty rewards at partner businesses." },
    ],
    learnMore: {
      intro: "The app turns the spending you already do into support for the community, without asking you to give more.",
      sections: [
        { title: "Discover with confidence", body: "Browse a curated directory of Muslim-owned and community-aligned businesses, from halal groceries and restaurants to services, fitness, and education. Filter by category and distance, and see what's open now." },
        { title: "Give without extra effort", body: "Turn on round-ups and the spare change from each purchase goes to the local cause you choose. You can see exactly where your giving goes and how much you've contributed each month." },
        { title: "Get rewarded for supporting local", body: "Partner businesses offer member-only discounts and loyalty rewards that apply automatically, so supporting the community also saves you money." },
      ],
    },
  },
  {
    id: "business",
    tab: "Business Owners",
    headline: "Grow sales. Lower costs.",
    summary: "Join a network that brings you loyal customers and the buying power of a much larger business.",
    points: [
      { title: "Purchasing power of hundreds of stores", description: "Group buying on supplies and services lowers costs for every member business." },
      { title: "A loyal customer base", description: "Reach community members who actively choose to shop with you." },
      { title: "Shared services and insights", description: "Simple dashboards show sales, repeat customers, and community impact." },
    ],
    learnMore: {
      intro: "Independent businesses grow faster when they don't have to do everything alone.",
      sections: [
        { title: "Buy together, save together", body: "By pooling orders across the network, member businesses access pricing on supplies, packaging, and services that is normally reserved for large chains." },
        { title: "Customers who come looking for you", body: "Your business is featured to app users who are actively searching for Muslim-owned options nearby, with promotions you control." },
        { title: "Growth support", body: "Access shared services, practical insights from your sales data, and introductions to community capital for expansion and buildouts." },
      ],
    },
  },
  {
    id: "nonprofits",
    tab: "Nonprofits",
    headline: "Consistent funding.",
    summary: "Steady monthly support from everyday community spending, so you can plan ahead instead of fundraising constantly.",
    points: [
      { title: "Receive consistent funding without asking for more", description: "Round-ups and business contributions arrive every month." },
      { title: "Share milestones with a large crowd", description: "Post updates and local initiatives directly to app members." },
      { title: "Transparent impact reporting", description: "Show supporters exactly what their contributions achieved." },
    ],
    learnMore: {
      intro: "Most nonprofits spend too much time raising money. The app creates a reliable base of support that grows with the community.",
      sections: [
        { title: "Recurring, predictable support", body: "A share of platform revenue, business contributions, and member round-ups is directed to participating nonprofits every month, helping cover yearly overhead." },
        { title: "A direct line to the community", body: "Share milestones, events, and new initiatives with app members who have chosen to support local causes." },
        { title: "Built-in transparency", body: "Simple reporting shows supporters how funds were used, building trust and long-term engagement." },
      ],
    },
  },
];

export const partnerSection = {
  eyebrow: "Partnered businesses",
  title: "Places that help our community thrive.",
  /**
   * Photo bento. AI-generated stand-ins (Figma AI) — replace with real partner photos before launch.
   * `position` crops away AI-garbled signage in the backgrounds.
   */
  photos: [
    { src: "/images/community/partner-cafe.png", alt: "A local halal bakery owner handing a customer her order", position: "60% 75%", zoom: 1.3 },
    { src: "/images/community/partner-grocery.png", alt: "A mother and son choosing fresh produce at a community grocery", position: "50% 80%", zoom: 1.3 },
    { src: "/images/community/partner-courtyard.png", alt: "Families sharing a meal together in a community courtyard", position: "50% 70%", zoom: 1 },
  ],
  // Client-provided copy — keep verbatim.
  body:
    "Throughout the US we lack islamic community infrastructure that allows us to truly practice our religion without limited options or religious dilemmas. We look to make investments that focus on providing services that make it easy for Muslims to practice, while supporting community owned businesses.",
  directory: [
    { name: "Halal Grocery", note: "Fresh & packaged" },
    { name: "Restaurants", note: "Dine in & takeout" },
    { name: "Fitness", note: "Separate sessions" },
    { name: "Education", note: "Quran & tutoring" },
    { name: "Modest Fashion", note: "Clothing & gifts" },
    { name: "Services", note: "Finance, legal & more" },
  ],
};

export const launchSteps = [
  { title: "Join the waitlist", description: "Reserve your spot with your email." },
  { title: "Get notified at launch", description: "We'll email you the moment the app is live." },
  { title: "Claim your $10 bonus", description: "Download, sign up, and your bonus is added." },
];
