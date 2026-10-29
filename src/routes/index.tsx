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
      { title: "Wendwosen Hirpo & Associates — Advocate, Addis Ababa" },
      { name: "description", content: "Wendwosen Hirpo is an Ethiopian advocate and former senior legal expert at the Ethiopian Intellectual Property Office, practising intellectual property, contracts, business formation and Federal court litigation in Addis Ababa." },
      { property: "og:title", content: "Wendwosen Hirpo & Associates — Advocate, Addis Ababa" },
      { property: "og:description", content: "Intellectual property, contracts, business formation and Federal court litigation. Bole, Addis Ababa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const practiceAreas = [
  { n: "01", title: "Intellectual Property", body: "Trademark and patent registration, oppositions, renewals and licensing — advised by a former senior legal expert of the Ethiopian Intellectual Property Office." },
  { n: "02", title: "Contracts & Commercial Law", body: "Drafting and reviewing commercial agreements under Ethiopian law, so that obligations, risk and remedies are clear before anyone signs." },
  { n: "03", title: "Business Formation & Licensing", body: "Setting up companies and branches in Ethiopia — registration, trade licences, and the corporate documents a new business needs." },
  { n: "04", title: "Litigation", body: "Representation before the Federal courts of Ethiopia in commercial, contractual and intellectual-property disputes." },
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
            Ethiopian advocate with a foundation in intellectual property. Practical counsel on trademarks, patents, contracts and new businesses — and representation before the Federal courts.
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
              <span className="font-mono text-[10px] uppercase block mb-1 text-ink/40">Admitted</span>
              <span className="text-sm font-medium">Federal Courts of Ethiopia</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase block mb-1 text-ink/40">Formerly</span>
              <span className="text-sm font-medium">Senior Legal Expert, EIPO</span>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block animate-fade-up-delay">
          <img src={portrait} alt="Wendwosen Hirpo" width={1080} height={1920} className="w-full h-full object-cover grayscale-[20%]" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-parchment" />
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-ink text-parchment px-6 md:px-12 lg:px-20 py-32">
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Areas of Practice</span>
              <h2 className="font-display text-5xl md:text-6xl tracking-tight max-w-2xl">A practice built on precision and principle.</h2>
            </div>
            <p className="max-w-md text-parchment/60 text-sm leading-relaxed">
              The practice began in intellectual property and has grown to cover the legal needs that surround it — the contracts, companies and disputes that protect what clients build.
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

      {/* Chambers — photo story */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden mb-px">
            <img src={skyline} alt="Addis Ababa skyline at sunset" loading="lazy" width={1600} height={912} className="w-full h-[420px] md:h-[520px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-14 max-w-2xl text-parchment">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Rooted in Addis Ababa</span>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance">Local knowledge, careful work.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <img src={office} alt="A law office with bookshelves and a desk" loading="lazy" width={1200} height={1504} className="w-full aspect-[4/5] object-cover" />
            <div className="flex flex-col justify-center">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— The Chambers</span>
              <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-6">A quiet room for consequential decisions.</h3>
              <p className="text-ink/70 leading-relaxed mb-4">Clients are received at the Bole chambers, where every matter is handled personally by Wendwosen — from first consultation to final filing.</p>
              <p className="text-ink/70 leading-relaxed">Years at the Ethiopian Intellectual Property Office give the practice an inside view of how registrations, oppositions and licensing are examined and decided.</p>
              <ul className="mt-8 space-y-3 text-sm">
                {["Trademark & patent registration", "Contract drafting & review", "Business formation & licensing", "Litigation before Federal courts"].map((s) => (
                  <li key={s} className="flex gap-3 border-b border-ink/10 pb-3"><span className="text-ochre">—</span>{s}</li>
                ))}
              </ul>
            </div>
            <img src={contract} alt="Reviewing a contract" loading="lazy" width={1200} height={1504} className="w-full aspect-[4/5] object-cover" />
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
              { n: "02", t: "Assessment", b: "A clear view of your legal position, the risks, your options and the expected fees." },
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

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl tracking-tight mb-8 text-balance">
            Begin a confidential <span className="italic">conversation</span>.
          </h2>
          <p className="text-ink/60 max-w-xl mx-auto mb-10 text-lg">
            Initial consultations are held in person at the chambers in Bole, or by video call for clients outside Addis Ababa.
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
