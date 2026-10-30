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

/* ------------------------------------------------------------------------------------------
 * Audience pitches (client feedback, Oct 17): each audience gets its own section, its own
 * imagery and its own argument instead of one shared card template.
 * All app figures below are ILLUSTRATIVE examples for the design; confirm before launch.
 * ---------------------------------------------------------------------------------------- */

/** One purchase, three winners: shown under the "Built for everyone" heading. */
export const purchaseFlow = [
  { id: "customers", who: "Customer", icon: "tag", line: "Buys groceries at Noor Grocery and saves 10% with a member perk." },
  { id: "business", who: "Business", icon: "store", line: "Gains a repeat customer, and pays less for supplies through group buying." },
  { id: "nonprofits", who: "Nonprofit", icon: "heart", line: "Receives the round-up from that purchase, live, the moment it happens." },
] as const;

export const customerPitch = {
  eyebrow: "For customers",
  title: "Spend like you already do. Watch it build your community.",
  pitch:
    "You already buy groceries, eat out, and pay for services every week. Mizan turns that same spending into savings for you and support for the people around you, without asking you to give a single dollar more.",
  reasons: [
    { icon: "tag", title: "Save on every visit", body: "Member perks of 5–15%, applied automatically." },
    { icon: "heart", title: "Give without giving more", body: "Spare change from each purchase goes to a cause you pick." },
    { icon: "lock", title: "Shop with confidence", body: "Every business is verified, so halal is never a guess." },
    { icon: "chart", title: "See what you built", body: "A monthly report of what you saved and gave." },
  ],
  receipt: {
    store: "Noor Grocery Store",
    lines: [
      { label: "Weekly groceries", value: "$47.60" },
      { label: "Member perk (10%)", value: "−$4.76", perk: true },
    ],
    total: "$42.84",
    roundUp: { amount: "$0.16", to: "Dayton Food Pantry" },
  },
  month: [
    { value: "$38.20", label: "saved this month" },
    { value: "$12.40", label: "given to local causes" },
    { value: "9", label: "local businesses supported" },
  ],
};

export const businessPitch = {
  eyebrow: "For business owners",
  title: "Lower costs. More customers. Here's exactly how.",
  intro:
    "Independent Muslim-owned businesses compete with chains that buy in bulk and advertise everywhere. The network gives you both advantages, shared across hundreds of stores.",
  cut: [
    { title: "Group buying", body: "Orders for supplies, packaging, and inventory are pooled across the network to unlock wholesale pricing." },
    { title: "Shared services", body: "Bookkeeping, payroll, insurance, and delivery at network rates instead of small-business rates." },
    { title: "Lower payment fees", body: "Purchases through the app are processed at a negotiated network rate." },
  ],
  grow: [
    { title: "Customers who look for you", body: "You're featured to members actively searching for Muslim-owned options nearby." },
    { title: "Perks that bring them back", body: "Set your own member perk; the app reminds members and tracks repeat visits." },
    { title: "Insights you can act on", body: "See peak hours, top products, and repeat-customer rates in a simple dashboard." },
  ],
  /** Example: a neighborhood grocery with ~$25k monthly sales. */
  example: {
    title: "Example: a neighborhood grocery, per month",
    rows: [
      { label: "Supplies & inventory", before: "$18,000", after: "$15,480", note: "−14% group buying" },
      { label: "Card processing", before: "$750", after: "$550", note: "network rate" },
      { label: "Marketing", before: "$900", after: "$300", note: "featured to members" },
      { label: "Bookkeeping & payroll", before: "$650", after: "$390", note: "shared services" },
    ],
    saving: "$3,580",
    salesLift: "+18%",
  },
  steps: ["Apply and get verified", "Set your member perk", "Start buying with the network"],
};

export const nonprofitPitch = {
  eyebrow: "For nonprofits",
  title: "Steady funding, and a direct line to your community.",
  intro:
    "Stop chasing one-off donations. Every member purchase can send a round-up to your cause, and every event you host reaches the people already choosing to support you.",
  events: {
    title: "Announce events to the whole community",
    body: "Post an iftar, food drive, class, or volunteer day in minutes. Members nearby are notified, can RSVP, sign up to volunteer, or donate toward it.",
    items: [
      { day: "14", month: "Mar", title: "Community iftar", place: "Dayton Masjid hall", going: 186 },
      { day: "22", month: "Mar", title: "Ramadan food drive", place: "Dayton Food Pantry", going: 64, volunteers: true },
      { day: "05", month: "Apr", title: "Youth Quran class", place: "Al-Noor Center", going: 32 },
    ],
  },
  live: {
    title: "See every purchase help, in real time",
    body: "A live feed shows each round-up and business contribution as it arrives, so you, and your supporters, can watch the month's goal fill up.",
    goal: 5000,
    start: 3840,
    feed: [
      { who: "Sara M.", where: "Noor Grocery", amount: 0.4 },
      { who: "Green Bites", where: "Business contribution", amount: 12 },
      { who: "Yusuf A.", where: "Barakah Books", amount: 0.75 },
      { who: "Amina K.", where: "Halal Meats Co.", amount: 0.3 },
      { who: "Noor Grocery", where: "Business contribution", amount: 18 },
      { who: "Omar H.", where: "Green Bites", amount: 0.55 },
      { who: "Fatima R.", where: "Modest Threads", amount: 0.9 },
    ],
  },
};

export const joinSection = {
  eyebrow: "Early access",
  title: "Join the people building something of our own.",
  description:
    "Get on the waitlist today. When the app goes live on the App Store and Google Play, your $10 launch bonus is waiting.",
  avatars: ["/images/avatar-1.png", "/images/avatar-2.png", "/images/avatar-3.png", "/images/avatar-4.png"],
};

/**
 * "For business owners" data cards (client feedback, Oct 22: make it stats business owners can use,
 * in the style of the Home "Real assets" cards). Figures supplied by the team; ILLUSTRATIVE until confirmed.
 */
export const businessCards = {
  eyebrow: "For Business Owners",
  title: "Higher Revenue, Lower Cost",
  intro: "Get lower costs, more customers, and the right tools by being part of a trusted business network.",
  savings: { value: "−7%", label: "on supplier costs", bars: [18, 32, 48, 66, 88] },
  customers: { value: "+18%", label: "new local customers", repeat: "412", repeatLabel: "repeat community customers / mo" },
  services: [
    { name: "Card processing", saved: "−27%" },
    { name: "Bookkeeping & payroll", saved: "−40%" },
    { name: "Marketing", saved: "−67%" },
  ],
  servicesTotal: "$3,580",
};

/**
 * "How the app funds the community" flow (client liked this concept, Oct 22): business spending and
 * customer spending, two lanes that meet at the annual donation goal. Figures are the client's targets.
 */
export const communityFlow = {
  eyebrow: "Where the giving comes from",
  title: "Two streams. One community fund.",
  description: "Businesses save together and customers shop together, and both send a share to local causes, without anyone giving more.",
  business: {
    title: "Business spending",
    steps: [
      { icon: "store", title: "200+ local businesses", body: "Join the Mizan partner network.", chips: [] as { icon: string; label: string }[], flow: [] as { icon: string; label: string }[] },
      {
        icon: "users",
        title: "Wholesale buying power",
        body: "Pool demand. Negotiate better rates.",
        chips: [
          { icon: "box", label: "Supplies" },
          { icon: "bolt", label: "Utilities" },
          { icon: "briefcase", label: "Professional services" },
          { icon: "laptop", label: "Software" },
          { icon: "card", label: "Payment processing" },
        ],
        flow: [],
      },
      { icon: "split", title: "Split savings. Donate our share.", body: "Businesses save; Mizan gives its portion.", chips: [], flow: [{ icon: "tag", label: "Businesses save" }, { icon: "heart", label: "Mizan gives" }] },
    ],
  },
  customer: {
    title: "Customer spending",
    steps: [
      { icon: "users", title: "2,500-person waitlist", body: "Bring the community onto the app.", chips: [] as { icon: string; label: string }[], flow: [] as { icon: string; label: string }[] },
      { icon: "bag", title: "Redirect everyday spending", body: "Shop Mizan business partners.", chips: [], flow: [{ icon: "phone", label: "App" }, { icon: "store", label: "Partner" }, { icon: "bag", label: "Purchase" }] },
      { icon: "heart", title: "5–10% donated automatically", body: "From each qualifying partner purchase.", chips: [], flow: [{ icon: "card", label: "Purchase" }, { icon: "gift", label: "Community giving" }] },
    ],
  },
  goal: { label: "Annual community donation goal", value: "$500,000 / year", note: "Business savings + everyday purchases" },
  causes: [
    { icon: "book", label: "Education" },
    { icon: "home", label: "Housing" },
    { icon: "users", label: "Community spaces" },
  ],
};
