/**
 * Home page content. Edit copy, links and images here without touching layout code.
 */

// Matches the designer's latest nav in Figma (Home, Real Estate, Community, Nonprofit, FAQ's).
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Community", href: "/community" },
  { label: "Nonprofit", href: "/nonprofit" },
  { label: "FAQ’s", href: "/faq" },
];

export const heroContent = {
  /** Two lines, as initially outlined by the client. */
  title: ["Islamic Impact", "Investment Redefined"],
  description:
    "Invest in asset-backed opportunities designed around Islamic principles, while helping support businesses, nonprofits, and projects that create lasting community impact.",
  image: "/images/home/hero-arch.jpg",
  primaryCta: { label: "Invest with Purpose", href: "#invest" },
  secondaryCta: { label: "Schedule a call", href: "#contact" },
};

export const stats = [
  { value: "$1.2M+", label: "Capital Deployed", icon: "/icons/icon-currency.svg" },
  { value: "20+", label: "Asset-Backed Transactions", icon: "/icons/icon-money-send.svg" },
  { value: "4,800+", label: "People Reached", icon: "/icons/icon-users-three.svg" },
  { value: "1", label: "Shariah Approved Process", icon: "/icons/icon-shield.svg" },
];

export const trustedAvatars = [
  "/images/avatar-1.png",
  "/images/avatar-2.png",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
];

export const realAssetsIntro = {
  eyebrow: "Asset Backed Safety",
  title: "Real assets. Real Returns",
  description:
    "We use asset-backed real estate to secure your investment, channeling profits into local halal businesses and nonprofits. Generate strong returns while building a lifetime of Sadaqah Jariyah",
};

/** The three value cards: each shows its visual first, then the text. */
export const valueCards = {
  foundation: {
    title: "Real Asset Foundation",
    description: "Invest in physical properties with measurable value and clear ownership structures.",
    stats: [
      { value: "12+", label: "Real Estate Transactions" },
      { value: "45%", label: "Average ROI" },
    ],
    link: { label: "Physical property assets", href: "/real-estate" },
  },
  model: {
    title: "Transparent Investment Model",
    description: "Understand where your capital goes and how value is created.",
    steps: ["Property profit", "Reinvestment", "Community initiatives"],
  },
  coverage: {
    title: "Asset Coverage",
    description: "Each opportunity is structured with asset value designed to support investor confidence.",
    /** Historically ~$1.45 of collateral for every $1 invested. */
    bars: [
      { value: "$1.00", label: "Invested", ratio: 1 },
      { value: "$1.45", label: "Property collateral", ratio: 1.45 },
    ],
  },
};

export const returnsCalculator = {
  eyebrow: "Wealth & Impact",
  title: "Deen & Dunyah Returns",
  description:
    "Projected portfolio growth for this life, and cumulative Sadaqah Jariyah impact for the next.",
  /** Initial investment slider (USD). */
  investment: { min: 25000, max: 150000, step: 5000, default: 75000 },
  /** Investment horizon slider in years (client: "change it to 1–10 years"). */
  horizon: { min: 1, max: 10, default: 5 },
  /**
   * Projection inputs. Portfolio compounds at 12%/yr (the promised annual growth).
   * Community impact uses 18% of the initial investment per year — derived from the
   * Figma example ($10,000 → $1,800 in year 1). PLACEHOLDER: confirm the exact formula with the client.
   */
  annualReturn: 0.12,
  annualImpactRate: 0.18,
  yAxis: ["$50k", "$30k", "$20k", "$20k", "$10k", "$5k"],
  results: {
    portfolio: { label: "Portfolio value", icon: "/icons/icon-money.svg" },
    impact: { label: "Community impact", icon: "/icons/icon-users-three.svg" },
    combined: { label: "Combined value", icon: "/icons/icon-currency.svg" },
  },
};

export const projects = [
  {
    title: "Muslim Transitional Housing",
    description:
      "Income-based transitional housing and a structured pathway toward stability, self-sufficiency, and long-term financial independence.",
    // 100 Boltin Ave (client request)
    image: "/images/home/project-housing-boltin.jpg",
    href: "#",
  },
  {
    title: "Islamic Curriculum",
    description:
      "Supporting 50 students with Islamic education that strengthens faith, character, and community.",
    image: "/images/home/project-curriculum.jpg",
    href: "#",
  },
  {
    title: "Mosque Renovation",
    description:
      "Restoring our Masjid while preserving its legacy and creating a place for future generations.",
    image: "/images/home/project-mosque.jpg",
    href: "#",
  },
  {
    title: "Palestine Diaspora Movement (PDM)",
    description:
      "A grassroots advocacy organization led by the Palestinian diaspora, embracing our heritage and the struggle of our ancestors.",
    image: "/images/home/project-palestine.jpg",
    href: "#",
  },
];

export const steps = [
  {
    icon: "/icons/icon-search.svg",
    tone: "green",
    title: "Explore",
    description: "Discover vetted investment opportunities that align with your goals.",
  },
  {
    icon: "/icons/icon-money-send.svg",
    tone: "gold",
    title: "Invest",
    description: "Choose an opportunity and complete a simple, secure, transparent process.",
  },
  {
    icon: "/icons/icon-trend-up.svg",
    tone: "green",
    title: "Earn",
    description: "Receive your share of returns through sustainable growth and lasting value.",
  },
  {
    icon: "/icons/icon-people.svg",
    tone: "gold",
    title: "Create Impact",
    description: "Your capital helps fund businesses and community initiatives.",
  },
] as const;

export const appPromo = {
  eyebrow: "Community Focused",
  eyebrowHighlight: "Coming Soon",
  title: "Redirecting Community Capital",
  description:
    "A powerful platform that connects our community, supports local businesses, and creates sustainable funding without asking for more.",
  cta: { label: "Join the waitlist", href: "/community#waitlist" },
  promoTag: "Get $10 at launch",
  note: "Early members get a $10 bonus when the app launches.",
  image: "/images/home/app-community.png",
};

export const projectsIntro = {
  eyebrow: "Non Profit Projects",
  title: "Project that build a Brighter a Ummah",
  description:
    "Support carefully vetted Islamic initiatives that creates lasting impact in the communities around the world.",
};

export const howItWorksIntro = {
  eyebrow: "How it works",
  title: "Investing in what matters today and tomorrow.",
  description:
    "We build investments on real-world value, sustainable growth, and trusted opportunities that create long-term benefits for investors and communities.",
};

export const ctaContent = {
  title: ["Invest today.", "Create impact forever."],
  description: "Join a community of investors who believe wealth is a trust and impact is an obligation.",
  image: "/images/home/cta-mosque.jpg",
  primaryCta: { label: "Invest with Purpose", href: "#invest" },
  secondaryCta: { label: "Schedule a Call", href: "#contact" },
};

export const footerColumns = [
  {
    title: "Features",
    links: [
      { label: "Home", href: "/" },
      { label: "Real Estate", href: "/real-estate" },
      { label: "Community", href: "/community" },
      { label: "Nonprofit", href: "/nonprofit" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "/faq" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Services", href: "#" },
      { label: "Disclosure", href: "#" },
    ],
  },
];

export const socialLinks = [
  { label: "Facebook", icon: "/icons/icon-facebook.svg", href: "#" },
  { label: "Instagram", icon: "/icons/icon-instagram.svg", href: "#" },
  { label: "Twitter", icon: "/icons/icon-twitter.svg", href: "#" },
];
