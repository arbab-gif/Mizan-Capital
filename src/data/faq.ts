/**
 * FAQ content. Copied from the client's "Frequently Asked Questions (FAQ)" section of the website
 * document; wording kept as written (only obvious typos fixed).
 * An answer is a list of blocks: a paragraph (string) or a bullet list ({ list }).
 */
export type FaqBlock = string | { list: string[] };
export type Faq = { q: string; a: FaqBlock[] };
export type FaqCategory = { id: string; title: string; icon: string; items: Faq[] };

export const faqIntro = {
  eyebrow: "FAQ’s",
  title: "Questions, answered.",
  description:
    "Everything you need to know about how Mizan Capital invests, stays halal, and puts its profits to work for the community.",
};

export const faqCategories: FaqCategory[] = [
  {
    id: "mission",
    title: "Mission & Vision",
    icon: "heart",
    items: [
      {
        q: "What is the purpose of this organization?",
        a: [
          "Our purpose is to build a halal, community-centered economic ecosystem that creates sustainable wealth, supports ethical businesses, develops real assets, while reinvesting 100% of profits back into the community.",
        ],
      },
      {
        q: "What problem are you trying to solve?",
        a: [
          "Many Muslims today live inside economic systems that were never designed with their values, priorities, or long-term wellbeing in mind.",
          "In many industries, Muslims are often underserved, misrepresented, overlooked, or forced to compromise between convenience and their values. At the same time, much of the money spent by the community immediately leaves the community.",
          "People shop locally, eat locally, work locally, and spend locally — but ownership, profits, and influence often flow elsewhere. Over time, this weakens the community’s ability to:",
          { list: ["Support its own institutions", "Fund its own projects", "Create opportunities for its youth", "Build long-term financial independence"] },
          "We are trying to change that by creating an ecosystem where everyday spending helps strengthen the community itself. Something as simple as buying food, supporting a local business, shopping through the community app, investing in halal projects, or attending community events can begin contributing towards community-funded nonprofits, stronger masjids, youth programs, schools, business development, housing initiatives, and future investment opportunities.",
          "The vision is to gradually create a self-sustaining community infrastructure where Muslims have more options in:",
          { list: ["Shopping", "Dining", "Fitness", "Entertainment", "Education", "Business ownership", "Community engagement"] },
          "while improving overall quality of life for families and future generations. At its core, this is about transforming ordinary economic activity into long-term community development.",
        ],
      },
      {
        q: "Is this a nonprofit or a business?",
        a: [
          "This structure is designed as a hybrid ecosystem that combines business, investment, and community development together under one larger mission. The overall structure may include:",
          { list: ["For-profit business entities", "Investment entities", "Community development initiatives", "Nonprofit and waqf-aligned programs"] },
          "Each entity will operate separately with its own legal and financial structure in order to:",
          { list: ["Properly manage liability", "Maintain transparency", "Protect investors and operators", "Ensure operational efficiency", "Create long-term sustainability"] },
          "The businesses themselves are intended to operate competitively and professionally, while still contributing toward a broader community mission. This allows store operators, investors, managers, and community initiatives to all work together in a way where:",
          {
            list: [
              "Businesses can grow sustainably",
              "Operators are properly incentivized",
              "Investors can participate ethically",
              "The community benefits from the long-term success of the ecosystem",
            ],
          },
          "The objective is to create a structure where economic success and community benefit are no longer separated, but instead grow together.",
        ],
      },
    ],
  },
  {
    id: "halal",
    title: "Islamic Finance & Halal Compliance",
    icon: "lock",
    items: [
      {
        q: "How do you ensure investments are halal?",
        a: [
          "All investments and partnerships are reviewed according to Islamic finance principles and guided by qualified Islamic advisors and Shariah board members. Most investments outline clear ownership, shared loss and shared profit that are designed to match Shariah compliant guidelines.",
        ],
      },
      {
        q: "Will there be a Shariah advisory board?",
        a: [
          "Yes. The goal is to establish a Shariah advisory board consisting of:",
          {
            list: [
              "Local Islamic leadership",
              "Islamic finance specialists",
              "Advisors and lawyers experienced in halal business structures that work in modern business practices",
            ],
          },
        ],
      },
      {
        q: "Are returns guaranteed?",
        a: [
          "Returns are never guaranteed in halal investment structures because risk must be shared fairly between parties. But there are investment vehicles provided that provide collateral, monthly dividends, and real ownership in what you are investing in that is projected to surpass your investment, backed by tangible data and industry experience.",
        ],
      },
      {
        q: "How is this different from traditional investing?",
        a: [
          "Our model focuses on:",
          { list: ["Real assets", "Real businesses", "Shared risk", "Ethical growth", "Community reinvestment"] },
          "Traditional systems often rely heavily on:",
          { list: ["Interest (riba)", "Excessive speculation", "Debt-driven growth"] },
        ],
      },
    ],
  },
  {
    id: "investing",
    title: "Investment Questions",
    icon: "chart",
    items: [
      {
        q: "What types of investments will you focus on?",
        a: ["Potential sectors include:", { list: ["Real estate", "Construction", "Restaurants", "Community-focused businesses"] }],
      },
      {
        q: "How will investors make money?",
        a: ["Returns may come from:", { list: ["Real estate rental cash flow", "Asset appreciation", "Revenue-sharing agreements", "Equity growth"] }],
      },
      {
        q: "What happens if investments fail?",
        a: [
          "Loss is a possibility in any halal investment structure. Risk is shared fairly among participants according to agreed terms. Risk mitigation strategies may include:",
          { list: ["Asset-backed investments", "Sufficient insurance", "Diversification", "Conservative underwriting", "Operational oversight"] },
        ],
      },
      {
        q: "How are profits used?",
        a: [
          "Profits may be:",
          {
            list: [
              "Reinvested into the fund",
              "Distributed to investors",
              "Allocated toward nonprofit/community initiatives",
              "Used to expand community-owned infrastructure",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "app",
    title: "Community App",
    icon: "pin",
    items: [
      {
        q: "What is the purpose of the community app?",
        a: [
          "The app is intended to:",
          {
            list: [
              "Connect businesses and consumers",
              "Redirect spending into halal/community businesses",
              "Educate users",
              "Increase transparency",
              "Facilitate donations and investments",
              "Showcase community development",
            ],
          },
        ],
      },
      { q: "Will businesses be able to join the app?", a: ["Yes. Businesses aligned with the mission may be added to the platform."] },
      {
        q: "Will the app include donations?",
        a: [
          "The goal is to implement features such as:",
          { list: ["Round-up donations", "Community campaigns", "Nonprofit support initiatives", "Transparent impact reporting"] },
        ],
      },
    ],
  },
  {
    id: "impact",
    title: "Community & Social Impact",
    icon: "users",
    items: [
      {
        q: "How does the community benefit?",
        a: [
          "The goal is to:",
          {
            list: [
              "Create jobs",
              "Build businesses",
              "Increase Muslim ownership",
              "Support nonprofits and masjids",
              "Keep money circulating locally",
              "Build long-term economic sustainability",
            ],
          },
        ],
      },
      {
        q: "Will you support nonprofits and masjids?",
        a: [
          "Yes. One long-term objective is to allocate a portion of profits toward:",
          { list: ["Local nonprofits", "Masjid projects", "Youth programs", "Community services"] },
        ],
      },
      {
        q: "Why focus on community-owned businesses?",
        a: [
          "Community-supported businesses:",
          {
            list: [
              "Keep money circulating locally",
              "Build long-term sustainability",
              "Strengthen economic independence",
              "Create generational opportunities",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "transparency",
    title: "Transparency & Governance",
    icon: "news",
    items: [
      {
        q: "How will transparency be maintained?",
        a: [
          "The organization plans to provide:",
          {
            list: ["Regular investor updates", "Financial reporting", "Community progress updates", "Project documentation", "Operational transparency"],
          },
        ],
      },
      {
        q: "Who makes investment decisions?",
        a: [
          "Investment decisions will be guided through:",
          { list: ["Leadership team", "Sector managers", "Advisory board input", "Shariah compliance review", "Internal due diligence processes"] },
        ],
      },
      {
        q: "Will there be regular reporting?",
        a: ["Yes. The goal is to provide:", { list: ["Quarterly updates", "Annual reviews", "Community impact reports", "Financial summaries"] }],
      },
    ],
  },
  {
    id: "giving",
    title: "Fundraising & Donations",
    icon: "gift",
    items: [
      {
        q: "What is the difference between donations and investments?",
        a: [
          "Donations (Sadaqah/Waqf): given for community benefit, with no financial return expected.",
          "Qard Hasan (non-interest loan): loaned without interest, with the principal expected to be returned.",
          "Investment capital: risk-bearing participation, with potential profit and loss sharing.",
        ],
      },
      {
        q: "How will Ramadan fundraising work?",
        a: [
          "The goal is to host community-centered events focused on:",
          { list: ["Education", "Worship", "Community development", "Ethical investing", "Long-term sustainability"] },
        ],
      },
    ],
  },
  {
    id: "partners",
    title: "Business Partnerships",
    icon: "store",
    items: [
      {
        q: "Can existing businesses partner with you?",
        a: ["Yes. We aim to work with businesses aligned with:", { list: ["Ethical practices", "Community growth", "Halal standards", "Long-term sustainability"] }],
      },
      {
        q: "What types of partnerships are you looking for?",
        a: [
          "Potential partnerships may include:",
          { list: ["Construction", "Restaurants", "Real estate", "Technology", "Education", "Community services"] },
        ],
      },
      {
        q: "What do businesses gain from partnering?",
        a: [
          "Potential benefits include:",
          {
            list: [
              "Access to community capital",
              "Strategic growth support",
              "Operational development",
              "Real estate/buildout support",
              "Increased community visibility",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "vision",
    title: "Long-Term Vision",
    icon: "home",
    items: [
      {
        q: "What is the long-term goal?",
        a: [
          "The long-term goal is to build:",
          {
            list: [
              "Sustainable halal economic infrastructure",
              "Community-owned assets",
              "Ethical investment systems",
              "Self-sustaining nonprofit support",
              "Multi-sector business ecosystems",
            ],
          },
        ],
      },
      { q: "Do you plan to expand nationally?", a: ["Potentially, yes. The long-term vision may include replication into multiple communities and cities."] },
      {
        q: "Why start with businesses like restaurants and construction?",
        a: [
          "These sectors:",
          {
            list: [
              "Create recurring cash flow",
              "Build real-world infrastructure",
              "Serve everyday community needs",
              "Offer scalable growth opportunities",
              "Create local employment opportunities",
            ],
          },
        ],
      },
    ],
  },
];
