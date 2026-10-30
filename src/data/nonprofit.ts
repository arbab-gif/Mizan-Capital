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

/**
 * Gift comparison (one-time donation vs. endowment gift). ILLUSTRATIVE: assumes the endowment
 * earns `rate` a year and pays all of it out to the initiative. Confirm the rate with the client.
 */
export const giftModel = {
  rate: 0.1,
  years: 10,
  min: 100,
  max: 10000,
  default: 1000,
};

/** Who can get involved, and what each role actually does. */
// Role details (tasks, commitment, where) are DRAFT copy for client review.
export const involvementRoles = [
  {
    id: "educators",
    title: "Educators",
    icon: "book",
    body: "Teach, design curriculum, or mentor students in our after-school program.",
    headline: "Shape the next generation's foundation in faith.",
    tasks: ["Teach or assist in after-school classes", "Help design and review the curriculum", "Mentor students one-on-one"],
    commitment: "2–4 hrs a week",
    where: "In person · Dayton",
    cta: "Join as an educator",
  },
  {
    id: "business",
    title: "Business owners",
    icon: "store",
    body: "Sponsor an initiative, offer jobs, or share space and services.",
    headline: "Put your business behind the community it serves.",
    tasks: ["Sponsor an initiative or an event", "Offer jobs or internships to program participants", "Share space, products, or services"],
    commitment: "Flexible",
    where: "Your business",
    cta: "Partner as a business",
  },
  {
    id: "contractors",
    title: "Contractors",
    icon: "home",
    body: "Help renovate masjids and housing at fair, community rates.",
    headline: "Build the places our community gathers and lives.",
    tasks: ["Bid on masjid and housing renovations", "Offer fair, community rates", "Advise on scope, budgets, and timelines"],
    commitment: "Per project",
    where: "On site · Greater Dayton",
    cta: "Work with us on a project",
  },
  {
    id: "nonprofits",
    title: "Nonprofit leaders",
    icon: "users",
    body: "Partner on a program, or bring your initiative to the endowment model.",
    headline: "Turn your program into something that lasts.",
    tasks: ["Partner with us on an existing program", "Bring your initiative to the endowment model", "Share outcomes with the community"],
    commitment: "Ongoing partnership",
    where: "Hybrid",
    cta: "Bring your initiative",
  },
  {
    id: "community",
    title: "Community members",
    icon: "heart",
    body: "Volunteer, spread the word, or give monthly toward an endowment.",
    headline: "Every hand and every dollar keeps it going.",
    tasks: ["Volunteer at events and drives", "Give monthly toward an endowment", "Spread the word to family and friends"],
    commitment: "Whatever you can give",
    where: "Anywhere",
    cta: "Get involved",
  },
];

/** "The bigger vision" roadmap. Stage copy is DRAFT for client review. */
export const visionRoadmap = [
  { stage: "Today", title: "Three endowments", body: "A masjid renovation, an after-school program, and transitional housing, funded and underway." },
  { stage: "Next", title: "Grow what works", body: "More classrooms and students, more housing beds, and long-term upkeep for the masjid." },
  { stage: "Tomorrow", title: "Community infrastructure", body: "Community-owned assets that sustain education, housing, health, and shared spaces for generations." },
];

/** Pillars with where each one stands today. */
export const visionPillars = [
  { title: "Education", icon: "book", body: "Islamic schooling and youth programs that build faith and opportunity.", status: "Active", note: "After-school program, 50 students" },
  { title: "Housing", icon: "home", body: "Stable homes and fresh starts for families in transition.", status: "Active", note: "14-bed home at 100 Bolton Ave" },
  { title: "Health", icon: "health", body: "Accessible, culturally aware care for the whole community.", status: "Planned", note: "Next pillar to launch" },
  { title: "Community spaces", icon: "users", body: "Masjids and gathering places that keep the community connected.", status: "Active", note: "ISGD Masjid renovation" },
];

/** "From → To" per pillar for the vision variations. DRAFT copy for client review. */
export const visionFromTo = [
  { title: "Education", icon: "book", today: "After-school program for 50 students", tomorrow: "A full-time Islamic school" },
  { title: "Housing", icon: "home", today: "14-bed transitional home", tomorrow: "Stable housing for every family in need" },
  { title: "Health", icon: "health", today: "In planning", tomorrow: "A community health clinic" },
  { title: "Community spaces", icon: "users", today: "ISGD Masjid renovation", tomorrow: "Masjids and centers across Greater Dayton" },
];

/**
 * Client update (Figma comments, 28 Oct 2026): per-endowment content for the redesigned
 * Active Endowments section, where each initiative gets its own layout.
 */
export const masjidOutlook = {
  category: "Infrastructure",
  name: "ISGD Masjid Renovation",
  status: "Outlook completed",
  image: "/images/project-mosque.png",
  intro: "Interior and exterior renovation, fully outlined and ready to begin.",
  steps: [
    { title: "Renovation outlined", body: "Interior & exterior scope set.", done: true },
    { title: "Quotes collected", body: "Contractor quotes in hand.", done: true },
    { title: "Work outlined", body: "Renovation plan finalized.", done: true },
    { title: "Trim package paid", body: "First package paid.", done: true },
    { title: "Start date", body: "To be determined.", done: false },
  ],
};

export const youthProgram = {
  category: "Education",
  name: "Islamic Youth Program",
  subtitle: "2026 Islamic Youth Curriculum",
  image: "/images/project-curriculum.png",
  stats: [
    { value: "3", label: "Class sessions every week" },
    { value: "50", label: "Students attending at least once a week" },
    { value: "2", label: "Class groups: ages 5–7 and 8–10" },
    { value: "2", label: "Part-time teachers funded by the partnership" },
  ],
  groups: ["Ages 5–7", "Ages 8–10"],
  extras: ["Monthly trip incentives", "Weekly snacks", "School supplies", "Printing & administrative help"],
  allocated2026: 10000,
  raised: 100000,
  goal: 250000,
};

export const transitionalHousing = {
  category: "Social services",
  name: "Muslim Transitional Housing",
  image: "/images/project-housing.png",
  intro: "A short-term start and a long-term home, both already in motion.",
  foundation: ["1 part-time program director hired", "3-month transitional outline & SOPs completed"],
  phases: [
    {
      id: "short",
      label: "Short term",
      title: "Kickstart with a 4-bedroom rental",
      facts: [
        { value: "4", label: "Bedrooms available now" },
        { value: "3 mo", label: "Transitional program" },
      ],
      points: ["Program director in place to run intake", "SOPs ready for every participant"],
    },
    {
      id: "long",
      label: "Long term",
      title: "A 4-unit apartment building",
      facts: [
        { value: "19", label: "Bedrooms" },
        { value: "6", label: "Bathrooms" },
        { value: "0.6 mi", label: "From the ISGD" },
      ],
      points: [
        "Building acquired",
        "Construction started, est. completion May 1st, 2027",
        "10% return funding partnerships available",
      ],
    },
  ],
  allocated2026: 10000,
  raised: 100000,
  goal: 250000,
};

export const externalAssistance = {
  title: "External nonprofit assistance",
  body: "Beyond our own endowments, we help other nonprofits with funding that fits their need.",
  oneTime: {
    title: "One-time funding assistance",
    body: "Reach out for one-time funding options, such as:",
    causes: ["PDM", "Palestine First Pediatric Rehabilitation Unit", "Syrian School Funding"],
  },
  longTerm: {
    title: "Long-term sustainable funding",
    body: "Muslim endowments earn double the offered return to help sustain ongoing costs, with special distribution options.",
  },
};
