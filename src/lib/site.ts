// Single source for the practice's public contact details (from the firm brochure).
// Leave `email` empty until a real, monitored mailbox exists — the contact
// form and email links are hidden while it is empty.
export const site = {
  url: "https://wendwosen-hirpo-legal.vercel.app",
  phone: "+251 911 342 578",
  phoneHref: "tel:+251911342578",
  phones: [
    { display: "+251 911 342 578", href: "tel:+251911342578" },
    { display: "+251 903 760 370", href: "tel:+251903760370" },
  ],
  poBox: "102225",
  email: "",
};

// Canonical (English) practice-area names, matching the brochure's service lines.
// The intake assistant classifies into these; each dictionary supplies the label.
export const practiceAreas = [
  "Trademark Prosecution & Management",
  "Patents & Utility Models",
  "Industrial Designs & Packaging",
  "IP Dispute Resolution & Appeals",
  "General Legal Consultancy",
] as const;

export type PracticeArea = (typeof practiceAreas)[number];
