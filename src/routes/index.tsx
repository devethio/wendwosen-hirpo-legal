import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import portrait from "@/assets/wendwosen-portrait.jpg";
import skyline from "@/assets/addis-skyline.jpg";
import office from "@/assets/chambers-office.jpg";
import contract from "@/assets/contract-review.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wendwosen Hirpo & Associates — Attorney at Law, Addis Ababa" },
      { name: "description", content: "Wendwosen Hirpo is a leading Ethiopian attorney specializing in commercial arbitration, sovereign advisory, corporate restructuring, and international investment law. Chambers in Addis Ababa." },
      { property: "og:title", content: "Wendwosen Hirpo & Associates — Attorney at Law" },
      { property: "og:description", content: "Refined legal counsel for complex landscapes. Based in Addis Ababa, Ethiopia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const practiceAreas = [
  { n: "01", title: "Commercial Arbitration", body: "Resolving high-stakes disputes within the IGAD region and beyond, with deep specialization in cross-border infrastructure, energy, and trade treaties." },
  { n: "02", title: "Sovereign Advisory", body: "Strategic counsel to governmental bodies and ministries on legislative reform, privatization frameworks, and bilateral investment treaties." },
  { n: "03", title: "Corporate Restructuring", body: "Guiding Ethiopia's emerging private sector through complex mergers, acquisitions, capital market entry, and post-liberalization transitions." },
  { n: "04", title: "Intellectual Property", body: "Protecting Ethiopian heritage and innovation in the global marketplace — from agricultural geographic indications to digital media rights." },
];

const recognitions = [
  { year: "2024", body: "Chambers Global — Notable Practitioner, East Africa Dispute Resolution" },
  { year: "2023", body: "Legal 500 EMEA — Recommended Lawyer, Commercial & Corporate" },
  { year: "2022", body: "African Legal Awards — Litigation Lawyer of the Year, Shortlist" },
  { year: "2021", body: "Appointed Visiting Lecturer, Addis Ababa University School of Law" },
];

const caseStudies = [
  {
    n: "Case 01",
    tag: "Cross-Border Energy Arbitration",
    title: "ICC arbitration over a $480M hydropower EPC dispute.",
    body: "Lead counsel for an Ethiopian state-owned utility against a European EPC consortium claiming variation costs and delay damages. Drafted the jurisdictional response under the 1958 New York Convention, coordinated three expert witnesses across Geneva and Addis Ababa, and secured a confidential settlement on the eve of the merits hearing.",
    outcomes: [
      { k: "62%", v: "Reduction in claimed damages" },
      { k: "14 mo", v: "From filing to resolution" },
      { k: "$0", v: "Adverse cost award" },
    ],
    seat: "Seat: Paris · Governing law: Ethiopian & ICC Rules 2021",
  },
  {
    n: "Case 02",
    tag: "Sovereign Privatization Advisory",
    title: "Structuring the partial privatization of a flagship telecom.",
    body: "Retained by a working group within the Ministry of Finance to design the legal architecture for the partial divestiture of a state asset valued in excess of $850M. Drafted the share purchase framework, negotiated the bilateral investment protections, and counseled the inter-ministerial committee through three rounds of competitive bidding.",
    outcomes: [
      { k: "$850M+", v: "Transaction perimeter" },
      { k: "4", v: "International bidders qualified" },
      { k: "9 mo", v: "From mandate to signed SPA" },
    ],
    seat: "Sector: Telecommunications · Counterparties: 3 continents",
  },
  {
    n: "Case 03",
    tag: "Corporate Restructuring",
    title: "Pre-IPO restructuring of a Pan-African logistics group.",
    body: "Advised a founder-led logistics group operating across six COMESA states on a holding-company restructure ahead of a planned dual listing in Nairobi and London. Resolved a long-standing minority shareholder dispute, harmonized seven national subsidiaries under a Mauritian topco, and obtained advance tax rulings in three jurisdictions.",
    outcomes: [
      { k: "7", v: "Subsidiaries consolidated" },
      { k: "3x", v: "Pre-money valuation uplift" },
      { k: "100%", v: "Minority dispute settled out-of-court" },
    ],
    seat: "Jurisdictions: ET · KE · UG · RW · MU · UK",
  },
  {
    n: "Case 04",
    tag: "Investment Treaty Defense",
    title: "Defending a sovereign investment incentive against ICSID claim.",
    body: "Co-counsel to an Ethiopian regulatory authority in a $112M ICSID claim brought by a foreign mining concessionaire alleging indirect expropriation following a regulatory reform. Built the public-policy and police-powers defense, deposed three quantum experts, and obtained full dismissal on the merits.",
    outcomes: [
      { k: "$112M", v: "Claim dismissed in full" },
      { k: "100%", v: "Costs awarded to the State" },
      { k: "0", v: "Adverse precedent created" },
    ],
    seat: "Forum: ICSID · Washington, D.C.",
  },
];

const clientOutcomes = [
  { k: "$1.4B", v: "Aggregate transaction value advised" },
  { k: "94%", v: "Matters resolved without trial" },
  { k: "27", v: "Sovereign & multilateral mandates" },
  { k: "0", v: "Disciplinary actions in 18 years of practice" },
];

const clientTestimonials = [
  {
    quote: "He held the line on jurisdiction when three other firms had already conceded it. The tribunal's ruling vindicated a position only he was willing to argue.",
    attribution: "General Counsel",
    org: "State-Owned Utility, Horn of Africa",
    practice: "Commercial Arbitration",
    engagement: "ICC Arbitration · Defense",
  },
  {
    quote: "Wendwosen translated a politically sensitive divestiture into a transaction the market could actually price. His drafting survived four rounds of ministerial review without a comma changed.",
    attribution: "Director, Privatization Unit",
    org: "Federal Ministry, Ethiopia",
    practice: "Sovereign Advisory",
    engagement: "Privatization Framework · Lead Counsel",
  },
  {
    quote: "We retained him for a single matter and have not engaged anyone else since. Calm, decisive, and remarkably well-prepared.",
    attribution: "General Counsel",
    org: "European Energy Consortium",
    practice: "Cross-Border Disputes",
    engagement: "Pre-Arbitration Strategy",
  },
  {
    quote: "Our restructuring crossed six tax regimes and a minority-shareholder feud older than the company itself. He resolved both quietly, in the same quarter.",
    attribution: "Founder & Chairman",
    org: "Pan-African Logistics Group",
    practice: "Corporate Restructuring",
    engagement: "Pre-IPO Holdco Reorganization",
  },
  {
    quote: "His grasp of both the Ethiopian commercial code and international arbitration norms is unparalleled. He is a bridge between two worlds.",
    attribution: "Managing Director",
    org: "Pan-African Infrastructure Group",
    practice: "Investment & Infrastructure",
    engagement: "Concession Renegotiation",
  },
];

function Index() {
  return (
    <div className="bg-parchment text-ink selection:bg-ochre/20">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
        <div className="z-10 max-w-3xl animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-ochre"></div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">Addis Ababa · Ethiopia</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mb-8 text-balance">
            Wendwosen <br /><span className="italic">Hirpo</span>
          </h1>
          <p className="text-xl md:text-2xl text-ink/70 leading-relaxed max-w-xl text-pretty font-light">
            Advocating at the intersection of international trade law and sovereign structural reform. Refined counsel for complex landscapes.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="bg-ink text-parchment px-6 py-3 font-mono text-[10px] uppercase tracking-widest hover:bg-ochre transition-colors">
              Request Consultation
            </Link>
            <Link to="/practice" className="px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-ink/70 hover:text-ochre transition-colors border border-ink/20 hover:border-ochre">
              Explore Practice
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-ink/10 pt-8">
            <div>
              <span className="font-mono text-[10px] uppercase block mb-1 text-ink/40">Education</span>
              <span className="text-sm font-medium">LL.B. & LL.M. Addis Ababa University</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase block mb-1 text-ink/40">Bar Admission</span>
              <span className="text-sm font-medium">Federal Supreme Court of Ethiopia</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase block mb-1 text-ink/40">Languages</span>
              <span className="text-sm font-medium">Amharic · English · French</span>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block animate-fade-up-delay">
          <img src={portrait} alt="Portrait of Wendwosen Hirpo" width={1080} height={1920} className="w-full h-full object-cover grayscale-[20%]" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-parchment" />
        </div>
      </section>

      {/* Statement strip */}
      <section className="border-y border-ink/10 bg-parchment">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {[
            { k: "18+", v: "Years of practice" },
            { k: "240+", v: "Matters resolved" },
            { k: "12", v: "Jurisdictions" },
            { k: "$1.4B", v: "Aggregate counsel value" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-4xl md:text-5xl text-ink">{s.k}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-ink text-parchment px-6 md:px-12 lg:px-20 py-32">
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Core Jurisdictions</span>
              <h2 className="font-display text-5xl md:text-6xl tracking-tight max-w-2xl">A practice built on precision and principle.</h2>
            </div>
            <p className="max-w-md text-parchment/60 text-sm leading-relaxed">
              The firm operates with the discipline of a global practice and the cultural fluency of a local fixture — unusual fluency in both common-law and civil-law traditions.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-parchment/10 border border-parchment/10">
            {practiceAreas.map((p) => (
              <div key={p.n} className="bg-ink p-10 md:p-12 hover:bg-white/[0.03] transition-colors">
                <span className="font-mono text-xs text-ochre mb-6 block">{p.n} / Practice</span>
                <h3 className="font-display text-3xl mb-4">{p.title}</h3>
                <p className="text-parchment/60 leading-relaxed text-pretty text-sm">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/practice" className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-ochre hover:text-parchment transition-colors">
              View full practice → 
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy quote */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-parchment relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="font-display text-[12rem] text-ink/[0.06] absolute left-1/2 -translate-x-1/2 -top-12 select-none leading-none">&ldquo;</span>
          <blockquote className="font-display text-3xl md:text-5xl leading-tight text-ink mb-10 italic relative">
            True legal counsel is not merely the interpretation of statutes, but the navigation of human trust and sovereign dignity.
          </blockquote>
          <cite className="font-mono text-xs uppercase tracking-[0.2em] text-ochre not-italic">— Wendwosen Hirpo</cite>
        </div>
      </section>

      {/* Chambers — photo story */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-ink/10">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden mb-px">
            <img src={skyline} alt="Addis Ababa skyline at sunset" loading="lazy" width={1600} height={912} className="w-full h-[420px] md:h-[520px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-14 max-w-2xl text-parchment">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Rooted in Addis Ababa</span>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance">Local fluency, international standard.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <img src={office} alt="The chambers in Bole, Addis Ababa" loading="lazy" width={1200} height={1504} className="w-full aspect-[4/5] object-cover" />
            <div className="flex flex-col justify-center">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— The Chambers</span>
              <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-6">A quiet room for consequential decisions.</h3>
              <p className="text-ink/70 leading-relaxed mb-4">Clients are received at the Bole chambers, where every matter is handled personally by Wendwosen — from first consultation to final filing.</p>
              <p className="text-ink/70 leading-relaxed">Years at the Ethiopian Intellectual Property Office give the practice a rare, inside view of how registrations, oppositions and licensing are actually decided.</p>
              <ul className="mt-8 space-y-3 text-sm">
                {["Trademark & patent registration", "Contract drafting & review", "Business formation & licensing", "Litigation before Federal courts"].map((s) => (
                  <li key={s} className="flex gap-3 border-b border-ink/10 pb-3"><span className="text-ochre">—</span>{s}</li>
                ))}
              </ul>
            </div>
            <img src={contract} alt="Reviewing a contract under the Ethiopian Civil Code" loading="lazy" width={1200} height={1504} className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-ink text-parchment px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— How an engagement works</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-14 max-w-2xl">Four clear steps. No surprises.</h2>
          <div className="grid md:grid-cols-4 gap-px bg-parchment/10 border border-parchment/10">
            {[
              { n: "01", t: "Consultation", b: "A confidential meeting in person or by video to understand the matter and its stakes." },
              { n: "02", t: "Assessment", b: "A written opinion on legal position, risks, options and a transparent fee estimate." },
              { n: "03", t: "Action", b: "Drafting, filing, negotiation or representation — with regular, plain-language updates." },
              { n: "04", t: "Resolution", b: "Closing the matter cleanly, with documents archived and follow-up obligations tracked." },
            ].map((s) => (
              <div key={s.n} className="bg-ink p-8">
                <span className="font-mono text-xs text-ochre block mb-6">{s.n}</span>
                <h3 className="font-display text-2xl mb-3">{s.t}</h3>
                <p className="text-parchment/60 text-sm leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognitions */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-ink/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Recognitions</span>
            <h2 className="font-display text-4xl tracking-tight">Selected honors and distinctions.</h2>
          </div>
          <div className="md:col-span-2 space-y-4">
            {recognitions.map((r) => (
              <div key={r.year} className="grid grid-cols-[80px_1fr] gap-6 py-5 border-b border-ink/10 items-start">
                <span className="font-mono text-xs text-ochre pt-1">{r.year}</span>
                <p className="text-ink/80 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 md:px-12 lg:px-20 py-32 border-t border-ink/10">
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Selected Engagements</span>
              <h2 className="font-display text-5xl md:text-6xl tracking-tight text-balance">Representative matters, redacted for confidence.</h2>
            </div>
            <p className="max-w-sm text-ink/60 text-sm leading-relaxed">
              Identifying details have been omitted in line with the firm's confidentiality undertakings. Full references available on a privileged basis to qualified instructing counsel.
            </p>
          </header>

          <div className="space-y-px bg-ink/10 border border-ink/10">
            {caseStudies.map((c) => (
              <article key={c.n} className="bg-parchment p-10 md:p-14 grid md:grid-cols-12 gap-10">
                <div className="md:col-span-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ochre block mb-4">{c.n} · {c.tag}</span>
                  <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-tight text-balance">{c.title}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mt-6">{c.seat}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-ink/75 leading-relaxed text-pretty">{c.body}</p>
                </div>
                <div className="md:col-span-3 border-l border-ink/10 pl-6 space-y-6">
                  {c.outcomes.map((o) => (
                    <div key={o.v}>
                      <div className="font-display text-3xl text-ink">{o.k}</div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mt-1">{o.v}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Client Outcomes Strip */}
      <section className="bg-ink text-parchment px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Client Outcomes</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-balance">Measured by what we resolve, not what we file.</h2>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientOutcomes.map((s) => (
              <div key={s.v} className="border-t border-parchment/15 pt-5">
                <div className="font-display text-4xl">{s.k}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-parchment/60 mt-2 leading-snug">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-coffee/95 text-parchment px-6 md:px-12 lg:px-20 py-32" style={{ backgroundColor: "var(--coffee)" }}>
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Client Testimonials</span>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight text-balance">Trusted by ministries, multinationals, and founders alike.</h2>
            </div>
            <p className="max-w-sm text-parchment/60 text-sm leading-relaxed">
              Quotes are reproduced with permission and redacted to preserve the identity of the instructing party. Each is mapped to the practice area and engagement type from which it originated.
            </p>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-parchment/10 border border-parchment/10">
            {clientTestimonials.map((t) => (
              <figure key={t.quote} className="p-10 md:p-12 flex flex-col" style={{ backgroundColor: "var(--coffee)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">{t.practice}</span>
                </div>
                <blockquote className="font-display text-xl md:text-2xl italic leading-relaxed mb-8 text-balance flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="border-t border-parchment/15 pt-5 mt-auto">
                  <div className="text-sm font-medium text-parchment">{t.attribution}</div>
                  <div className="text-xs text-parchment/60 mt-1">{t.org}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-parchment/50 mt-3">{t.engagement}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl tracking-tight mb-8 text-balance">
            Begin a confidential <span className="italic">conversation</span>.
          </h2>
          <p className="text-ink/60 max-w-xl mx-auto mb-10 text-lg">
            Initial consultations are conducted in person at the chambers in Bole, or by secure video conference for international clients.
          </p>
          <Link to="/contact" className="inline-block bg-ink text-parchment px-10 py-5 font-mono text-[10px] uppercase tracking-widest hover:bg-ochre transition-colors">
            Request a Consultation
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
