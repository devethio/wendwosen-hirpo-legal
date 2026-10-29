import type { PracticeArea } from "@/lib/site";

// Every user-facing string on the site. `am.ts` must mirror this shape exactly.
// Title arrays alternate plain and emphasised text: ["plain ", "emphasised", " plain"].
// `**text**` inside a paragraph renders bold.

const areaNames: Record<PracticeArea | "Other / Needs review" | "Other", string> = {
  "Intellectual Property": "Intellectual Property",
  "Contracts & Commercial Law": "Contracts & Commercial Law",
  "Business Formation & Licensing": "Business Formation & Licensing",
  Litigation: "Litigation",
  "Other / Needs review": "Other / needs review",
  Other: "Other",
};

export const en = {
  meta: {
    home: {
      title: "Wendwosen Hirpo & Associates — Advocate, Addis Ababa",
      description: "Wendwosen Hirpo is an Ethiopian advocate and former senior legal expert at the Ethiopian Intellectual Property Office, practising intellectual property, contracts, business formation and Federal court litigation in Addis Ababa.",
    },
    about: {
      title: "About Wendwosen Hirpo — Ethiopian Advocate",
      description: "Background of Wendwosen Hirpo, an Ethiopian advocate, Addis Ababa University law graduate and former senior legal expert at the Ethiopian Intellectual Property Office.",
    },
    practice: {
      title: "Practice Areas — Wendwosen Hirpo & Associates",
      description: "Intellectual property, contracts and commercial law, business formation and licensing, and litigation before the Federal courts of Ethiopia.",
    },
    contact: {
      title: "Contact — Wendwosen Hirpo & Associates",
      description: "Reach the chambers of Wendwosen Hirpo & Associates in Bole, Addis Ababa, Ethiopia.",
    },
    intake: {
      title: "Matter Assessment — Wendwosen Hirpo & Associates",
      description: "Describe your legal matter and receive the relevant practice area plus a checklist to prepare for your consultation in Addis Ababa.",
    },
  },

  nav: {
    home: "Home",
    practice: "Practice",
    about: "Counsel",
    intake: "Assess Matter",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },

  common: {
    firstName: "Wendwosen",
    lastName: "Hirpo",
    firm: "Wendwosen Hirpo & Associates",
    firmFirst: "Wendwosen Hirpo",
    firmRest: "& Associates",
    place: "Addis Ababa · Ethiopia",
    bole: "Bole · Addis Ababa",
    address: ["Bole Sub-City", "Addis Ababa, Ethiopia"],
    requestConsultation: "Request a Consultation",
    call: "Call",
    callChambers: "Call the chambers",
    aau: "Addis Ababa University",
    yearSuffix: "",
  },

  areaNames,

  areas: [
    {
      id: "ip",
      title: "Intellectual Property",
      summary: "Trademark and patent registration, oppositions, renewals and licensing — advised by a former senior legal expert of the Ethiopian Intellectual Property Office.",
      body: "The foundation of the practice. Protecting brands, inventions and creative work in Ethiopia, informed by years inside the Ethiopian Intellectual Property Office.",
      bullets: ["Trademark search, registration & renewal", "Patent and industrial design applications", "Oppositions and infringement matters", "Licensing and assignment agreements"],
    },
    {
      id: "contracts",
      title: "Contracts & Commercial Law",
      summary: "Drafting and reviewing commercial agreements under Ethiopian law, so that obligations, risk and remedies are clear before anyone signs.",
      body: "Drafting and reviewing the agreements businesses rely on, under the Ethiopian Civil and Commercial Codes.",
      bullets: ["Supply, distribution & service agreements", "Leases and employment contracts", "Contract review before signing"],
    },
    {
      id: "business",
      title: "Business Formation & Licensing",
      summary: "Setting up companies and branches in Ethiopia — registration, trade licences, and the corporate documents a new business needs.",
      body: "Helping local and foreign clients set up and keep their businesses in good standing in Ethiopia.",
      bullets: ["Company and branch registration", "Trade licences and renewals", "Memoranda and articles of association"],
    },
    {
      id: "litigation",
      title: "Litigation",
      summary: "Representation before the Federal courts of Ethiopia in commercial, contractual and intellectual-property disputes.",
      body: "Representation before the Federal courts of Ethiopia when a matter cannot be settled.",
      bullets: ["Commercial and contract disputes", "Intellectual property disputes", "Pre-litigation demands and negotiation"],
    },
  ],

  home: {
    hero: {
      lede: "Ethiopian advocate with a foundation in intellectual property. Practical counsel on trademarks, patents, contracts and new businesses — and representation before the Federal courts.",
      secondary: "Explore Practice",
      facts: [
        { label: "Education", value: "LL.B. & LL.M., Addis Ababa University" },
        { label: "Admitted", value: "Federal Courts of Ethiopia" },
        { label: "Formerly", value: "Senior Legal Expert, Ethiopian Intellectual Property Office" },
      ],
    },
    practice: {
      eyebrow: "Areas of Practice",
      title: "A practice built on precision and principle.",
      intro: "The practice began in intellectual property and has grown to cover the legal needs that surround it — the contracts, companies and disputes that protect what clients build.",
      learnMore: "Learn more",
      viewAll: "View full practice",
    },
    why: {
      eyebrow: "Rooted in Addis Ababa",
      title: "Local knowledge, careful work.",
      items: [
        { title: "Inside knowledge of IP", body: "As a former senior legal expert at the Ethiopian Intellectual Property Office, Wendwosen knows how registrations, oppositions and licences are examined and decided." },
        { title: "Personal attention", body: "Clients are received at the Bole chambers, and every matter is handled personally by Wendwosen — from first consultation to final filing." },
        { title: "Amharic and English", body: "Advice, contracts and correspondence in Amharic or English — for Ethiopian businesses and foreign clients alike." },
      ],
    },
    process: {
      eyebrow: "How an engagement works",
      title: "Four clear steps. No surprises.",
      steps: [
        { title: "Consultation", body: "A confidential meeting in person or by video to understand the matter and its stakes." },
        { title: "Assessment", body: "A clear view of your legal position, the risks, your options and the expected fees." },
        { title: "Action", body: "Drafting, filing, negotiation or representation — with regular, plain-language updates." },
        { title: "Resolution", body: "Closing the matter cleanly, with documents archived and follow-up obligations tracked." },
      ],
    },
    cta: {
      title: ["Begin a confidential ", "conversation", "."],
      body: "Initial consultations are held in person at the chambers in Bole, or by video call for clients outside Addis Ababa.",
      or: "Or call directly",
    },
  },

  about: {
    eyebrow: "The Counsel",
    title: ["A practice rooted in ", "place", "."],
    lede: "Wendwosen Hirpo is an Ethiopian advocate whose practice began in intellectual property and now covers contracts, business formation and litigation before the Federal courts. He advises entrepreneurs, companies and rights-holders from his chambers in Bole, Addis Ababa.",
    bioEyebrow: "Biography",
    bioTitle: "From the IP office to private practice.",
    bio: [
      "Wendwosen read law at Addis Ababa University (AAU), earning his LL.B. in 2006. He later returned to AAU for graduate study, completing an LL.M. with a focus on intellectual property and commercial law — a foundation that has shaped his practice since.",
      "His early career was unusual for the Ethiopian bar of his generation: rather than move directly into general litigation, he committed his first years to **intellectual property law**, advising inventors, businesses and creators on patents, trademarks and copyright. He went on to serve as a senior legal expert at the **Ethiopian Intellectual Property Office (EIPO)**, working on the examination of patent and trademark applications, opposition proceedings and IP policy.",
      "That grounding in IP gives the practice its distinctive cast. Clients are received at the chambers in Bole, and every matter is handled personally by Wendwosen — from first consultation to final filing.",
    ],
    careerEyebrow: "Career",
    careerTitle: "Milestones.",
    timeline: [
      { year: "2006", body: "LL.B., Addis Ababa University (AAU) School of Law." },
      { year: "2008", body: "Admitted to practise before the Federal Courts of Ethiopia; began practice as an intellectual property attorney advising local innovators and rights-holders." },
      { year: "2011", body: "Joined the Ethiopian Intellectual Property Office (EIPO) as a senior legal expert — patent and trademark examination, oppositions and IP policy." },
      { year: "2014", body: "LL.M., Addis Ababa University, with a focus on intellectual property and commercial law." },
      { year: "2016", body: "Founded Wendwosen Hirpo & Associates in the Bole district of Addis Ababa." },
    ],
    educationEyebrow: "Education",
    education: [
      { name: "Addis Ababa University School of Law", detail: "LL.M., Intellectual Property & Commercial Law · 2014" },
      { name: "Addis Ababa University School of Law", detail: "LL.B. · 2006" },
    ],
    professionalEyebrow: "Professional",
    professional: [
      { name: "Wendwosen Hirpo & Associates", detail: "Founder · Bole, Addis Ababa · 2016 – present" },
      { name: "Ethiopian Intellectual Property Office", detail: "Former Senior Legal Expert" },
      { name: "Federal Courts of Ethiopia", detail: "Advocate" },
    ],
    directEyebrow: "Direct Line",
    directTitle: "Reach the chambers directly.",
  },

  practice: {
    eyebrow: "Practice Areas",
    title: ["Four areas, one ", "unified", " standard of care."],
    lede: "Every matter is handled personally by Wendwosen, from intake through resolution.",
    imageAlt: "Reviewing a contract",
    cta: {
      title: "Not sure where your matter fits?",
      body: "Describe it in your own words and get a checklist of documents and questions to bring to your consultation.",
      button: "Assess my matter",
    },
  },

  contact: {
    eyebrow: "Contact",
    title: ["A brief conversation, ", "first", "."],
    lede: "New matters begin with a confidential consultation. Please share a short note about the matter and anyone else involved.",
    chambers: "Chambers",
    direct: "Direct Line",
    email: "Correspondence",
    consult: "Consultations",
    consultBody: "By appointment, in person at the chambers or by video call.",
    form: {
      title: "Send a confidential note.",
      note: "Submitting opens your email app with this note ready to send to the chambers.",
      name: "Full Name",
      organization: "Organization",
      email: "Email",
      phone: "Phone",
      area: "Practice Area",
      description: "Brief Description",
      submit: "Write Email",
      subject: "Consultation request",
    },
    callPanel: {
      title: "Call to arrange a consultation.",
      body: "Describe the matter briefly and a time will be arranged to meet at the chambers in Bole or by video call.",
    },
  },

  intake: {
    eyebrow: "Matter Assessment",
    title: ["Prepare for your ", "consultation", "."],
    lede: "Describe your situation in your own words. Our AI-powered assistant will suggest the relevant practice area and a checklist of documents and questions to bring.",
    disclaimer: "This tool does not provide legal advice and does not create a lawyer–client relationship. Avoid sharing confidential details such as ID numbers. Your text is not stored.",
    placeholder: "e.g. A foreign company is using a brand name very similar to our registered trademark in Ethiopia...",
    submit: "Prepare my checklist",
    loading: "Preparing checklist…",
    suggested: "Suggested practice area",
    confidence: { high: "high confidence", medium: "medium confidence", low: "low confidence" },
    documents: "Documents to bring",
    questions: "Questions to be ready for",
    deadlines: "Dates & deadlines to confirm",
    generated: "Generated automatically for preparation only — not legal advice.",
    print: "Print",
    book: "Book consultation",
    errors: {
      short: "Please describe your matter in at least 20 characters.",
      not_configured: "The assistant is not configured yet. Please call the chambers directly.",
      busy: "The assistant is busy. Please try again in a minute.",
      unavailable: "The assistant is temporarily unavailable. Please contact the chambers directly.",
      failed: "Something went wrong preparing your checklist. Please try again.",
    },
  },

  footer: {
    blurb: "Ethiopian legal practice grounded in intellectual property — trademarks, patents, contracts, business formation and litigation before the Federal courts. Based in Bole, Addis Ababa.",
    chambers: "Chambers",
    navigate: "Navigate",
    links: { practice: "Practice Areas", about: "The Counsel", intake: "Prepare for a Consultation", contact: "Contact" },
    rights: "All rights reserved.",
    disclaimer: "This website is for general information and is not legal advice.",
  },

  notFound: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist or has been moved.",
    home: "Go home",
  },
};

export type Dictionary = typeof en;
