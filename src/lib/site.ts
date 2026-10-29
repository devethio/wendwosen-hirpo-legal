// Single source for the practice's public contact details.
// Leave `email` empty until a real, monitored mailbox exists — the contact
// form and email links are hidden while it is empty.
export const site = {
  url: "https://wendwosen-hirpo-legal.vercel.app",
  phone: "+251 911 342 578",
  phoneHref: "tel:+251911342578",
  email: "",
};

// Canonical (English) practice-area names. The intake assistant classifies
// into these; each language's dictionary supplies the display label.
export const practiceAreas = [
  "Intellectual Property",
  "Contracts & Commercial Law",
  "Business Formation & Licensing",
  "Litigation",
] as const;

export type PracticeArea = (typeof practiceAreas)[number];
