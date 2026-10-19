/**
 * Nonprofit page content. Initiative figures come from the client's prototype.
 * Suggested gift amounts and "what your gift sustains" lines are DRAFT copy for client review.
 */

export const npHero = {
  eyebrow: "Nonprofit impact",
  titleStart: "Built to give.",
  titleEnd: "Designed to last.",
  description:
    "Mizan Capital brings together community capital, real estate experience, and business ownership to build assets that fund our community's needs: lasting support for Islamic education, housing, and community spaces.",
  image: "/images/project-mosque.png",
};

export const fundingModel = {
  title: "How we fund nonprofits",
  description:
    "We calculate each initiative's annual costs and build an endowment whose profits help cover them, turning a one-time donation into lasting support. The original donation stays invested, generating ongoing funding and reducing the need for repeated fundraising.",
  steps: [
    { title: "Calculate", description: "Define the initiative's annual operating cost." },
    { title: "Build", description: "Raise an endowment designed around that need." },
    { title: "Invest", description: "Keep the original donation invested for the long term." },
    { title: "Fund", description: "Use investment profits to help cover recurring costs." },
  ],
  footnote: "Your contribution becomes part of a lasting source of support, helping each initiative serve the community year after year.",
};

export type Initiative = {
  id: string;
  category: string;
  name: string;
  image: string;
  quote: string;
  allocated: number;
  allocationGoal: number;
  endowmentTarget: number;
  sustains: string;
  milestones: string[];
};

export const initiatives: Initiative[] = [
  {
    id: "masjid",
    category: "Infrastructure",
    name: "ISGD Masjid Renovation",
    image: "/images/project-mosque.png",
    quote: "Preserving a place of faith and connection for the next generation.",
    allocated: 20000,
    allocationGoal: 20000,
    endowmentTarget: 250000,
    sustains: "Upkeep, utilities, and repairs that keep the masjid open and welcoming every day.",
    milestones: [
      "Connected with the board to collaborate on masjid renovation.",
      "Concrete scheduled, with a price finalized.",
      "Interior renovations scheduled with a funded budget.",
    ],
  },
  {
    id: "education",
    category: "Education",
    name: "After-School Islamic Education",
    image: "/images/project-curriculum.png",
    quote: "Helping 50 young students build a stronger foundation in their faith.",
    allocated: 20000,
    allocationGoal: 40000,
    endowmentTarget: 150000,
    sustains: "Teacher salaries, curriculum, and classroom costs for 50 students each year.",
    milestones: [
      "Partner initiative connected with a local masjid and received approval to operate.",
      "Education curriculum established and teachers hired.",
    ],
  },
  {
    id: "housing",
    category: "Social services",
    name: "Transitional Muslim Housing",
    image: "/images/project-housing.png",
    quote: "A stable home. A fresh start. A path forward.",
    allocated: 10000,
    allocationGoal: 10000,
    endowmentTarget: 50000,
    sustains: "Case management, onboarding, and operating costs that keep beds available.",
    milestones: [
      "Found an experienced representative to create standard procedures and an onboarding package for participants.",
      "Internal development process and organizational structure developed.",
      "Filing for long-term government grants to grow and sustain funding.",
      "In partnership, acquired and renovating 100 Bolton Ave, a 14-bed, 6-bath apartment property.",
      "Seeking long-term investors with targeted returns of 10%–12%; returns are not guaranteed.",
    ],
  },
];

export const giftAmounts = [100, 250, 500, 1000];

export const vision = {
  title: "Today's projects. Tomorrow's community infrastructure.",
  description:
    "These initiatives are the starting point for a broader vision: community-owned assets that help sustain education, housing, health, and other essential services. By combining profitable investments with purposeful reinvestment, we aim to grow both our financial foundation and the number of people we can serve.",
  pillars: ["Education", "Housing", "Health", "Community spaces"],
};

export const involvement = {
  title: "Bring more than capital.",
  description:
    "Building lasting community institutions takes people with experience, relationships, and a willingness to help. Whatever you bring, there is a role for you.",
  roles: ["Educators", "Business owners", "Contractors", "Nonprofit leaders", "Community members"],
};
