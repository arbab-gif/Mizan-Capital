/**
 * Real Estate page content.
 * Photos live in /public/images/real-estate — swap any `before` / `after` path to update a property,
 * and set `photosUrl` to the Google page/album with the full before & after gallery.
 */

/** A property Mizan currently owns and is raising capital for (from the client's property overview flyers). */
export type Deal = {
  id: string;
  type: string;
  status: string;
  address: string;
  city: string;
  /** Three headline numbers shown on the card. */
  stats: { label: string; value: string }[];
  /** Projected returns from the property overview (shared with investors and the community). */
  projectedProfit: number;
  image: string;
  /** Full property overview flyer, opened in a modal when the card is clicked. */
  flyer: string;
  /** Album with this property's before & after photos (PLACEHOLDER "#"). */
  photosUrl: string;
};

export const reHero = {
  eyebrow: ["Asset-backed", "Shariah compliant", "No interest"],
  titleStart: "Real homes.",
  titleMiddle: "Real returns.",
  titleEnd: "Lasting impact.",
  description:
    "We acquire, renovate, and hold collateralized real estate across Greater Dayton, turning every property into halal returns for investors and a growing fund for the community.",
  stats: [
    { value: "12%", label: "Target net return" },
    { value: "$25K", label: "Minimum investment" },
    { value: "30%", label: "Profit to Sadaqah Jariyah" },
    { value: "12", label: "Properties completed" },
  ],
};


const OWNED = "/images/real-estate/owned";

// Figures copied from each property's overview flyer (client's Figma reference file).
export const deals: Deal[] = [
  {
    id: "rustic-2024",
    type: "Single family · 4 bd / 2 ba",
    status: "Renovation underway",
    address: "2024 Rustic Rd",
    city: "Dayton, OH 45405",
    stats: [
      { label: "Rehab budget", value: "$106,000" },
      { label: "Est. ARV", value: "$175,000" },
      { label: "Completion", value: "Oct 2026" },
    ],
    projectedProfit: 49000,
    image: `${OWNED}/rustic.jpg`,
    flyer: `${OWNED}/rustic-flyer.jpg`,
    photosUrl: "#",
  },
  {
    id: "larch-2151",
    type: "6-unit apartment",
    status: "Open to investors",
    address: "2151 Larch Street",
    city: "Springfield, OH 45503",
    stats: [
      { label: "Investment needed", value: "$150,000" },
      { label: "Est. ARV", value: "$415,000" },
      { label: "Completion", value: "Oct 2026" },
    ],
    projectedProfit: 190500,
    image: `${OWNED}/larch.jpg`,
    flyer: `${OWNED}/larch-flyer.jpg`,
    photosUrl: "#",
  },
  {
    id: "mcclure-108",
    type: "Single family · 3 bd / 3 ba",
    status: "Open to investors",
    address: "108 McClure Street",
    city: "Dayton, OH 45410",
    stats: [
      { label: "Investment needed", value: "$200,000" },
      { label: "Exit", value: "Lease-to-purchase" },
      { label: "Completion", value: "Nov 2026" },
    ],
    projectedProfit: 90500,
    image: `${OWNED}/mcclure.jpg`,
    flyer: `${OWNED}/mcclure-flyer.jpg`,
    photosUrl: "#",
  },
];

/** "Where profits go" — the order profit is paid out (client brochure + comment: managing party overhead is paid second). */
export const profitFlow = {
  brochure: `${OWNED}/where-profits-go.jpg`,
  steps: [
    { title: "Investor distributions", description: "Paid first, according to each deal’s executed investment agreement." },
    { title: "Managing party overhead", description: "Operating costs of the managing party are covered second." },
  ],
  allocation: [
    { share: 50, label: "Real estate reinvestment", description: "Funds future acquisitions and renovations to grow the capital base.", color: "bg-primary", text: "text-primary" },
    { share: 20, label: "Community development", description: "Builds community businesses, services, and infrastructure that create jobs.", color: "bg-beige", text: "text-beige-ink" },
    { share: 30, label: "Nonprofits & endowments", description: "Launches community programs and endowments that sustain them over time.", color: "bg-[#4f8f6b]", text: "text-[#4f8f6b]" },
  ],
  milestone:
    "Once real estate funding reaches $5 million, the goal is to direct 100% of remaining profits, after investor distributions, to community development and nonprofit initiatives.",
};

/** Quick outlook of the current portfolio (totals of the three properties above). */
export const portfolioOutlook = {
  stats: [
    { value: "$330,000", label: "Projected profit to come" },
    { value: "$456,000", label: "Total investment needed" },
    { value: "$660,000", label: "Combined est. ARV" },
    { value: "3", label: "Active properties" },
  ],
  note: "From current property overviews. 2024 Rustic Rd uses its rehab budget. Projections, not guarantees.",
};

export const portfolioOverview = [
  { value: "12", label: "Properties" },
  { value: "$1,315,200", label: "Capital deployed" },
  { value: "$775,730", label: "Net profit" },
  { value: "$227,859", label: "Sadaqah Jariyah" },
];

export type Property = {
  address: string;
  city: string;
  deployed: string;
  netProfit: string;
  roi: string;
  purchase: string;
  renovation: string;
  otherCosts: string;
  salePrice: string;
  sadaqah: string;
  before: string;
  after?: string;
  /** Google album with every before & after photo for this property (PLACEHOLDER "#"). */
  photosUrl: string;
};

const RE = "/images/real-estate";

// Completed deals, in the order shown on the Lovable prototype.
export const properties: Property[] = [
  { address: "307 N Isabella Street", city: "Springfield, OH 45504", deployed: "$109,000", netProfit: "$56,800", roi: "52.1%", purchase: "$78,000", renovation: "$31,000", otherCosts: "$7,200", salePrice: "$173,000", sadaqah: "$18,900", before: `${RE}/307-isabella-before.jpg`, after: `${RE}/307-isabella-after.jpg`, photosUrl: "#" },
  { address: "814 W North Street", city: "Springfield, OH 45504", deployed: "$135,000", netProfit: "$120,000", roi: "88.9%", purchase: "$70,000", renovation: "$65,000", otherCosts: "$5,000", salePrice: "$260,000", sadaqah: "$39,000", before: `${RE}/814-north-before.jpg`, after: `${RE}/814-north-after.jpg`, photosUrl: "#" },
  { address: "834 W North Street", city: "Springfield, OH 45504", deployed: "$145,600", netProfit: "$96,900", roi: "66.6%", purchase: "$60,600", renovation: "$85,000", otherCosts: "$7,500", salePrice: "$250,000", sadaqah: "$30,120", before: `${RE}/834-north-before.jpg`, after: `${RE}/834-north-after.jpg`, photosUrl: "#" },
  { address: "218 N Jackson Street", city: "Springfield, OH 45504", deployed: "$135,600", netProfit: "$116,600", roi: "86.0%", purchase: "$40,600", renovation: "$95,000", otherCosts: "$7,800", salePrice: "$260,000", sadaqah: "$31,200", before: `${RE}/218-jackson-before.jpg`, after: `${RE}/218-jackson-after.jpg`, photosUrl: "#" },
  { address: "2149 Larch Street", city: "Springfield, OH 45503", deployed: "$100,000", netProfit: "$52,000", roi: "52.0%", purchase: "$60,000", renovation: "$40,000", otherCosts: "$3,500", salePrice: "$155,500", sadaqah: "$16,650", before: `${RE}/2149-larch-before.jpg`, after: `${RE}/2149-larch-after.jpg`, photosUrl: "#" },
  { address: "4416 Midway Avenue", city: "Dayton, OH 45417", deployed: "$81,000", netProfit: "$38,500", roi: "47.5%", purchase: "$41,000", renovation: "$40,000", otherCosts: "$5,500", salePrice: "$125,000", sadaqah: "$12,000", before: `${RE}/4416-midway-before.jpg`, after: `${RE}/4416-midway-after.jpg`, photosUrl: "#" },
  { address: "835 Dennison Avenue", city: "Dayton, OH 45417", deployed: "$85,000", netProfit: "$60,500", roi: "71.2%", purchase: "$40,000", renovation: "$45,000", otherCosts: "$4,500", salePrice: "$150,000", sadaqah: "$18,000", before: `${RE}/835-dennison-before.jpg`, photosUrl: "#" },
  { address: "4516 Echelberger Road", city: "Dayton, OH 45406", deployed: "$89,000", netProfit: "$56,000", roi: "62.9%", purchase: "$45,000", renovation: "$44,000", otherCosts: "$2,500", salePrice: "$147,500", sadaqah: "$13,200", before: `${RE}/4516-echelberger-before.jpg`, after: `${RE}/4516-echelberger-after.jpg`, photosUrl: "#" },
  { address: "421 Struckhardt Road", city: "Trotwood, OH 45426", deployed: "$161,500", netProfit: "$31,980", roi: "19.8%", purchase: "$160,000", renovation: "$1,500", otherCosts: "$1,520", salePrice: "$195,000", sadaqah: "$8,094", before: `${RE}/421-struckhardt-before.jpg`, photosUrl: "#" },
  { address: "128 N Marion Street", city: "Dayton, OH 45417", deployed: "$76,000", netProfit: "$54,150", roi: "71.3%", purchase: "$75,000", renovation: "$1,000", otherCosts: "$36,000", salePrice: "$166,150", sadaqah: "$16,245", before: `${RE}/128-marion-before.jpg`, photosUrl: "#" },
  { address: "129 E Hudson Avenue", city: "Dayton, OH 45405", deployed: "$80,000", netProfit: "$35,300", roi: "44.1%", purchase: "$35,000", renovation: "$45,000", otherCosts: "$4,700", salePrice: "$120,000", sadaqah: "$10,500", before: `${RE}/129-hudson-before.jpg`, after: `${RE}/129-hudson-after.jpg`, photosUrl: "#" },
  { address: "72 S Garfield Street", city: "Dayton, OH 45403", deployed: "$117,500", netProfit: "$57,000", roi: "48.5%", purchase: "$32,500", renovation: "$85,000", otherCosts: "$5,500", salePrice: "$180,000", sadaqah: "$13,950", before: `${RE}/72-garfield-before.jpg`, photosUrl: "#" },
];

export const shariahAvoid = [
  { term: "Riba", meaning: "Interest of any kind, paid or earned. Returns come only from real profit." },
  { term: "Gharar", meaning: "Excessive uncertainty. Every contract states ownership, terms, and risk clearly." },
  { term: "Haram industries", meaning: "No alcohol, gambling, or other prohibited activity in any property or tenant." },
];

/** Link to the Shariah compliance letter (PLACEHOLDER until the letter is published). */
export const shariahLetterUrl = "#";

export const shariahPrinciples = [
  {
    stage: "Funding structure",
    title: "No riba, real assets",
    description:
      "Projects are funded without interest-bearing debt. Your capital is tied to a tangible property from day one, so returns come from real profit, not loans or leverage.",
  },
  {
    stage: "Deal approval",
    title: "Shariah advisory review",
    description:
      "Every deal structure is reviewed to avoid riba, gharar, and prohibited industries. Only transactions aligned with Islamic finance principles receive capital.",
  },
  {
    stage: "Profit distribution",
    title: "Shared profit, shared purpose",
    description:
      "A Mudarabah-style agreement: investors provide capital, Mizan provides expertise, and profits are shared on clear terms, with 30% directed to Sadaqah Jariyah.",
  },
];

export const wealthFootnote =
  "Illustrative projection based on 12% promised annual growth and 30% cumulative Sadaqah Jariyah impact. Marketable returns are modeled for funds up to $2,000,000. Returns and Sadaqah Jariyah results may vary as the fund grows, but the promised return remains the same. Past performance does not guarantee future Sadaqah Jariyah results.";

// PLACEHOLDER testimonials — replace with real investor reviews.
export const testimonials = [
  {
    headline: "Growth I can explain to my family.",
    quote:
      "I wanted my savings to grow without compromising my deen. Every update shows exactly which property my money is in, and knowing part of the profit supports our masjid makes it feel complete.",
    name: "Investor name",
    meta: "Investing since 2024 · 3 properties",
  },
  {
    headline: "There is a real building behind it.",
    quote:
      "Asset-backed was the deciding factor for me. The reporting is clear, the structure is halal, and I can drive past the homes my investment helped renovate.",
    name: "Investor name",
    meta: "Investing since 2024 · 2 properties",
  },
  {
    headline: "My money works for this life and the next.",
    quote:
      "I started small to see how it worked. The return came through as projected, a share went to community projects, and I have reinvested twice since.",
    name: "Investor name",
    meta: "Investing since 2025 · 2 properties",
  },
];
