import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import portrait from "@/assets/wendwosen-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wendwosen Hirpo & Associates — Attorney at Law, Addis Ababa" },
      { name: "description", content: "Wendwosen Hirpo is a leading Ethiopian attorney specializing in commercial arbitration, sovereign advisory, corporate restructuring, and international investment law. Chambers in Addis Ababa." },
      { property: "og:title", content: "Wendwosen Hirpo & Associates — Attorney at Law" },
      { property: "og:description", content: "Refined legal counsel for complex landscapes. Based in Addis Ababa, Ethiopia." },
      { property: "og:image", content: portrait },
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
              <span className="text-sm font-medium">LL.M. Harvard Law School</span>
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

      {/* Testimonials */}
      <section className="bg-coffee/95 text-parchment px-6 md:px-12 lg:px-20 py-32" style={{ backgroundColor: "var(--coffee)" }}>
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Client voices</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-16 max-w-2xl">Trusted by ministries, multinationals, and founders alike.</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <figure className="border-l-2 border-ochre pl-8">
              <blockquote className="font-display text-2xl italic leading-relaxed mb-6">Mr. Hirpo's grasp of both Ethiopian commercial code and international arbitration norms is unparalleled. He is a bridge between two worlds.</blockquote>
              <figcaption className="font-mono text-[10px] uppercase tracking-widest text-parchment/60">Managing Director · Pan-African Infrastructure Group</figcaption>
            </figure>
            <figure className="border-l-2 border-ochre pl-8">
              <blockquote className="font-display text-2xl italic leading-relaxed mb-6">Calm, decisive, and remarkably well-prepared. We retained him for a single matter and have not engaged anyone else since.</blockquote>
              <figcaption className="font-mono text-[10px] uppercase tracking-widest text-parchment/60">General Counsel · European Energy Consortium</figcaption>
            </figure>
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
