import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Wendwosen Hirpo & Associates" },
      { name: "description", content: "Commercial arbitration, corporate & M&A, intellectual property, sovereign advisory, and dispute resolution from Addis Ababa." },
    ],
  }),
  component: PracticePage,
});

const areas = [
  { n: "01", title: "Commercial Arbitration", body: "ICC, LCIA, UNCITRAL, and ad-hoc proceedings. Counsel and arbitrator engagements across energy, construction, and cross-border trade.", bullets: ["Lead counsel & co-counsel mandates", "Sole and panel arbitrator appointments", "Enforcement under the New York Convention"] },
  { n: "02", title: "Corporate & M&A", body: "Buy-side and sell-side advisory, joint ventures, and complex restructurings for sovereign, institutional, and family-owned enterprises.", bullets: ["Cross-border acquisitions", "Privatization & PPP frameworks", "Shareholder & joint-venture agreements"] },
  { n: "03", title: "Intellectual Property", body: "Patent prosecution, trademark protection, geographic indications, and technology-transfer counsel — the foundation of the firm's practice.", bullets: ["Trademark & patent strategy", "Geographic indication protection abroad", "Licensing & technology transfer"] },
  { n: "04", title: "Sovereign & Regulatory", body: "Advisory to ministries, regulators, and state-owned enterprises on investment law, concessions, and bilateral treaty obligations.", bullets: ["Investment treaty defense", "Concession & PSA negotiation", "Regulatory reform consultation"] },
  { n: "05", title: "Banking & Finance", body: "Project finance, syndicated lending, and Islamic finance structures for infrastructure and industrial development.", bullets: ["Project finance documentation", "Syndicated facility agreements", "Security & enforcement opinions"] },
  { n: "06", title: "Dispute Resolution", body: "Litigation before Federal Courts of Ethiopia, the Cassation Bench, and specialized tribunals.", bullets: ["Commercial litigation", "Tax & customs appeals", "Constitutional & administrative review"] },
];

function PracticePage() {
  return (
    <div className="bg-parchment text-ink">
      <SiteNav />
      <section className="px-6 md:px-12 lg:px-20 pt-24 pb-16 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-6 block">— Practice Areas</span>
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter mb-8 text-balance max-w-5xl">Six disciplines, one <span className="italic">unified</span> standard of care.</h1>
        <p className="text-xl text-ink/70 leading-relaxed max-w-3xl font-light">A deliberately limited docket. Each matter receives the principal's direct attention from intake through resolution.</p>
      </section>
      <section className="px-6 md:px-12 lg:px-20 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
          {areas.map((a) => (
            <div key={a.n} className="bg-parchment p-10 md:p-12">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-xs text-ochre">{a.n}</span>
                <h2 className="font-display text-3xl tracking-tight">{a.title}</h2>
              </div>
              <p className="text-ink/70 leading-relaxed mb-6 font-light">{a.body}</p>
              <ul className="space-y-2 text-sm text-ink/60">
                {a.bullets.map((b) => (
                  <li key={b} className="flex gap-3"><span className="text-ochre">—</span>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}