import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Wendwosen Hirpo & Associates" },
      { name: "description", content: "Intellectual property, contracts and commercial law, business formation and licensing, and litigation before the Federal courts of Ethiopia." },
    ],
  }),
  component: PracticePage,
});

const areas = [
  { n: "01", title: "Intellectual Property", body: "The foundation of the practice. Protecting brands, inventions and creative work in Ethiopia, informed by years inside the Ethiopian Intellectual Property Office.", bullets: ["Trademark search, registration & renewal", "Patent and industrial design applications", "Oppositions and infringement matters", "Licensing and assignment agreements"] },
  { n: "02", title: "Contracts & Commercial Law", body: "Drafting and reviewing the agreements businesses rely on, under the Ethiopian Civil and Commercial Codes.", bullets: ["Supply, distribution & service agreements", "Leases and employment contracts", "Contract review before signing"] },
  { n: "03", title: "Business Formation & Licensing", body: "Helping local and foreign clients set up and keep their businesses in good standing in Ethiopia.", bullets: ["Company and branch registration", "Trade licences and renewals", "Memoranda and articles of association"] },
  { n: "04", title: "Litigation", body: "Representation before the Federal courts of Ethiopia when a matter cannot be settled.", bullets: ["Commercial and contract disputes", "Intellectual property disputes", "Pre-litigation demands and negotiation"] },
];

function PracticePage() {
  return (
    <div className="bg-parchment text-ink">
      <SiteNav />
      <section className="px-6 md:px-12 lg:px-20 pt-24 pb-16 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-6 block">— Practice Areas</span>
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter mb-8 text-balance max-w-5xl">Four areas, one <span className="italic">unified</span> standard of care.</h1>
        <p className="text-xl text-ink/70 leading-relaxed max-w-3xl font-light">Every matter is handled personally by Wendwosen, from intake through resolution.</p>
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
