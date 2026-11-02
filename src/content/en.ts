import type { PracticeArea } from "@/lib/site";

// Every user-facing string on the site. `am.ts` must mirror this shape exactly.
// Title arrays alternate plain and emphasised text: ["plain ", "emphasised", " plain"].
// `**text**` inside a paragraph renders bold.
// Firm positioning, services, advantages, coverage and office details follow the
// client's brochure (src/docs); biography facts were supplied by the client separately.

const areaNames: Record<PracticeArea | "Other / Needs review" | "Other", string> = {
  "Trademark Prosecution & Management": "Trademark Prosecution & Management",
  "Patents & Utility Models": "Patents & Utility Models",
  "Industrial Designs & Packaging": "Industrial Designs & Packaging",
  "IP Dispute Resolution & Appeals": "IP Dispute Resolution & Appeals",
  "General Legal Consultancy": "General Legal Consultancy",
  "Other / Needs review": "Other / needs review",
  Other: "Other",
};

export const en = {
  meta: {
    home: {
      title: "Wendwosen Hirpo & Associates — Intellectual Property Law, Addis Ababa",
      description: "Intellectual property law and legal consultancy in Addis Ababa: trademarks, patents and utility models, industrial designs and IP disputes, with local representation before the Ethiopian Intellectual Property Authority (EIPA).",
    },
    about: {
      title: "About Wendwosen Hirpo — Intellectual Property Advocate",
      description: "Background of Wendwosen Hirpo, an Ethiopian IP advocate, Addis Ababa University law graduate and former senior legal expert at the Ethiopian Intellectual Property Office.",
    },
    practice: {
      title: "Practice Areas — Wendwosen Hirpo & Associates",
      description: "Trademark prosecution, patents and utility models, industrial designs and packaging, IP dispute resolution and appeals before EIPA, and general legal consultancy.",
    },
    contact: {
      title: "Contact — Wendwosen Hirpo & Associates",
      description: "Reach Wendwosen Hirpo & Associates at Xexer Building, Churchill Avenue, 4 Kilo, Addis Ababa, Ethiopia.",
    },
    intake: {
      title: "Matter Assessment — Wendwosen Hirpo & Associates",
      description: "Describe your matter and receive the relevant practice area plus a checklist to prepare for your consultation.",
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
    tagline: "Your Rights, Our Responsibility",
    discipline: "Intellectual Property Law & Legal Consultancy",
    place: "Addis Ababa · Ethiopia",
    office: "4 Kilo · Addis Ababa",
    address: ["Xexer Building, Churchill Avenue", "4 Kilo, Addis Ababa, Ethiopia"],
    poBox: "P.O. Box",
    requestConsultation: "Request a Consultation",
    call: "Call",
    callChambers: "Call the office",
    aau: "Addis Ababa University",
    yearSuffix: "",
  },

  areaNames,

  areas: [
    {
      id: "trademarks",
      title: "Trademark Prosecution & Management",
      body: "Comprehensive trademark filings, formal search reports, opposition proceedings, renewal management, and portfolio maintenance tailored to international standards.",
      bullets: ["Trademark filings", "Formal search reports", "Opposition proceedings", "Renewal and portfolio management"],
    },
    {
      id: "patents",
      title: "Patents & Utility Models",
      body: "End-to-end patent preparation, technical filing, substantive examination support, and utility model protection before regulatory bodies.",
      bullets: ["Patent preparation and technical filing", "Substantive examination support", "Utility model protection"],
    },
    {
      id: "designs",
      title: "Industrial Designs & Packaging",
      body: "Protection of aesthetic features, industrial packaging outlines, visual configurations, and ornamental design rights across regional jurisdictions.",
      bullets: ["Industrial design registration", "Packaging and product outlines", "Ornamental design rights"],
    },
    {
      id: "disputes",
      title: "IP Dispute Resolution & Appeals",
      body: "Administrative appeals before EIPA tribunals, enforcement actions, infringement litigation, and strategic dispute resolution mechanisms.",
      bullets: ["Administrative appeals before EIPA", "Enforcement actions", "Infringement litigation", "Strategic dispute resolution"],
    },
    {
      id: "consultancy",
      title: "General Legal Consultancy",
      body: "Alongside IP, practical legal counsel for businesses: contract drafting and review, business formation and licensing, and litigation before the Federal courts of Ethiopia.",
      bullets: ["Contract drafting and review", "Business formation and licensing", "Litigation before the Federal courts"],
    },
  ],

  coverage: {
    eyebrow: "Regional Practice Coverage",
    title: "Where we file, appeal and advise.",
    headers: ["Service line", "Primary jurisdiction", "Regional scope"],
    rows: [
      ["Trademark Protection", "EIPA (Ethiopia)", "Horn of Africa Advisory"],
      ["Patent & Utility Filings", "EIPA (Ethiopia)", "National & Regional Phase"],
      ["Design Registration", "EIPA (Ethiopia)", "Packaging & Product Outlines"],
      ["Enforcement & Appeals", "EIPA Appellate Board / Courts", "Ethiopian Jurisdiction"],
    ],
  },

  home: {
    hero: {
      lede: "Full-spectrum intellectual property protection, prosecution and portfolio management across Ethiopia and the Horn of Africa — with local representation before the Ethiopian Intellectual Property Authority (EIPA).",
      secondary: "Explore Practice",
      facts: [
        { label: "Represents before", value: "Ethiopian Intellectual Property Authority (EIPA)" },
        { label: "Formerly", value: "Senior Legal Expert, Ethiopian Intellectual Property Office" },
        { label: "Education", value: "LL.B. & LL.M., Addis Ababa University" },
      ],
    },
    firm: {
      eyebrow: "About the Firm",
      title: "Premier, specialized intellectual property counsel facilitating global protection across Ethiopia and the Horn of Africa.",
      body: "Wendwosen Hirpo & Associates provides end-to-end IP portfolio creation, protection, prosecution and enforcement services. Serving foreign law firms, international patent and trademark attorneys, and corporate clients, we deliver seamless local representation before the Ethiopian Intellectual Property Authority (EIPA).",
      servingLabel: "Serving",
      serving: ["Foreign law firms", "International patent & trademark attorneys", "Corporate clients"],
    },
    practice: {
      eyebrow: "Core Practice Areas & Services",
      title: "End-to-end IP portfolio creation, protection and enforcement.",
      intro: "Tailored to international standards, for foreign associates and local businesses alike.",
      learnMore: "Learn more",
      viewAll: "View all services",
    },
    why: {
      eyebrow: "Strategic Advantages",
      title: "Local presence, international standard.",
      items: [
        { title: "Direct Local Presence", body: "Established operational channels and daily active practice before the Ethiopian Intellectual Property Authority (EIPA), ensuring swift filing and administrative handling." },
        { title: "Client-Centric International Collaboration", body: "Clear communication protocols, transparent status reporting, and highly cost-effective legal solutions structured specifically for foreign associates and multinational IP firms." },
        { title: "Dual-Language Operations", body: "Seamless execution in both Amharic — the official working language of EIPA — and English, ensuring accurate translation, document preparation and legal compliance." },
      ],
    },
    process: {
      eyebrow: "How an engagement works",
      title: "Four clear steps. No surprises.",
      steps: [
        { title: "Consultation", body: "A confidential meeting in person or by video to understand the matter and its stakes." },
        { title: "Assessment", body: "A clear view of your position, the risks, your options and the expected fees." },
        { title: "Action", body: "Searching, filing, prosecution or representation — with transparent status reporting." },
        { title: "Resolution", body: "Registration, renewal or a closed dispute, with documents archived and deadlines tracked." },
      ],
    },
    cta: {
      title: ["Your rights, ", "our", " responsibility."],
      body: "Consultations are held at our office in 4 Kilo, Addis Ababa, or by video call for clients and associates abroad.",
      or: "Or call directly",
    },
  },

  about: {
    eyebrow: "The Counsel",
    title: ["A practice rooted in ", "place", "."],
    lede: "Wendwosen Hirpo is an Ethiopian advocate specialising in intellectual property. A former senior legal expert at the Ethiopian Intellectual Property Office, he leads the firm's representation of rights-holders, companies and foreign IP firms before the Ethiopian Intellectual Property Authority (EIPA).",
    bioEyebrow: "Biography",
    bioTitle: "From the IP office to private practice.",
    bio: [
      "Wendwosen read law at Addis Ababa University (AAU), earning his LL.B. in 2006. He later returned to AAU for graduate study, completing an LL.M. with a focus on intellectual property and commercial law — a foundation that has shaped his practice since.",
      "His early career was unusual for the Ethiopian bar of his generation: rather than move directly into general litigation, he committed his first years to **intellectual property law**, advising inventors, businesses and creators on patents, trademarks and copyright. He went on to serve as a senior legal expert at the **Ethiopian Intellectual Property Office (EIPO)**, working on the examination of patent and trademark applications, opposition proceedings and IP policy.",
      "That grounding gives the firm its distinctive cast. Today Wendwosen Hirpo & Associates practises daily before the Ethiopian Intellectual Property Authority from its office at 4 Kilo, Addis Ababa.",
    ],
    careerEyebrow: "Career",
    careerTitle: "Milestones.",
    timeline: [
      { year: "2006", body: "LL.B., Addis Ababa University (AAU) School of Law." },
      { year: "2008", body: "Admitted to practise before the Federal Courts of Ethiopia; began practice as an intellectual property attorney advising local innovators and rights-holders." },
      { year: "2011", body: "Joined the Ethiopian Intellectual Property Office (EIPO) as a senior legal expert — patent and trademark examination, oppositions and IP policy." },
      { year: "2014", body: "LL.M., Addis Ababa University, with a focus on intellectual property and commercial law." },
      { year: "2016", body: "Founded Wendwosen Hirpo & Associates in Addis Ababa." },
    ],
    educationEyebrow: "Education",
    education: [
      { name: "Addis Ababa University School of Law", detail: "LL.M., Intellectual Property & Commercial Law · 2014" },
      { name: "Addis Ababa University School of Law", detail: "LL.B. · 2006" },
    ],
    professionalEyebrow: "Professional",
    professional: [
      { name: "Wendwosen Hirpo & Associates", detail: "Founder · Addis Ababa · 2016 – present" },
      { name: "Ethiopian Intellectual Property Office", detail: "Former Senior Legal Expert" },
      { name: "Federal Courts of Ethiopia", detail: "Advocate" },
    ],
    directEyebrow: "Direct Line",
    directTitle: "Reach the office directly.",
  },

  practice: {
    eyebrow: "Practice Areas",
    title: ["Your rights, ", "our", " responsibility."],
    lede: "Full-spectrum intellectual property protection, prosecution and portfolio management across Ethiopia and the Horn of Africa.",
    imageAlt: "Reviewing a contract",
    cta: {
      title: "Not sure where your matter fits?",
      body: "Describe it in your own words and get a checklist of documents and questions to bring to your consultation.",
      button: "Assess my matter",
    },
  },

  contact: {
    eyebrow: "Contact & Engagement",
    title: ["A brief conversation, ", "first", "."],
    lede: "New matters begin with a confidential consultation. Foreign associates and local clients alike are welcome to call or visit the office.",
    chambers: "Office Location",
    direct: "Direct Lines",
    email: "Correspondence",
    consult: "Consultations",
    consultBody: "By appointment, in person at the office or by video call.",
    form: {
      title: "Send a confidential note.",
      note: "Submitting opens your email app with this note ready to send to the office.",
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
      body: "Describe the matter briefly and a time will be arranged to meet at our office in 4 Kilo or by video call.",
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
      not_configured: "The assistant is not configured yet. Please call the office directly.",
      busy: "The assistant is busy. Please try again in a minute.",
      unavailable: "The assistant is temporarily unavailable. Please contact the office directly.",
      failed: "Something went wrong preparing your checklist. Please try again.",
    },
  },

  footer: {
    blurb: "Intellectual property law and legal consultancy — trademarks, patents and utility models, industrial designs and IP disputes, with local representation before EIPA.",
    chambers: "Office",
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
