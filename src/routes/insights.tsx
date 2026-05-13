import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Wendwosen Hirpo & Associates" },
      { name: "description", content: "Commentary on Ethiopian commercial law, arbitration, intellectual property, and regulatory reform." },
    ],
  }),
  component: InsightsPage,
});

const articles = [
  { date: "March 2026", cat: "Arbitration", title: "Ethiopia's New Arbitration Law: Two Years On", excerpt: "An assessment of the 2021 Arbitration & Conciliation Working Procedure Proclamation — what it changed, what remains unsettled, and how tribunals are navigating the gaps." },
  { date: "January 2026", cat: "Intellectual Property", title: "Geographic Indications Beyond Coffee", excerpt: "Why Ethiopia's GI strategy must extend to honey, teff, and traditional crafts — and the bilateral mechanisms that make protection abroad enforceable." },
  { date: "November 2025", cat: "Investment Law", title: "Investment Treaty Claims Against East African States", excerpt: "A pattern emerges: how arbitral tribunals have interpreted fair-and-equitable-treatment obligations under regional BITs over the last decade." },
  { date: "September 2025", cat: "Corporate", title: "Privatization, Round Two", excerpt: "Lessons from the partial privatization of state-owned telecommunications and what they signal for the next wave of sovereign asset sales." },
  { date: "July 2025", cat: "Regulatory", title: "The Capital Markets Authority and the Path to a Domestic Exchange", excerpt: "Listing standards, disclosure obligations, and the regulatory architecture that will define Ethiopia's first secondary market." },
  { date: "May 2025", cat: "Practice", title: "On Limiting the Docket", excerpt: "Why we accept fewer than a dozen active matters at any time — and what that constraint produces for the client and for the work." },
];

function InsightsPage() {
  return (
    <div className="bg-parchment text-ink">
      <SiteNav />
      <section className="px-6 md:px-12 lg:px-20 pt-24 pb-16 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-6 block">— Insights & Commentary</span>
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter mb-8 text-balance max-w-5xl">Notes from the <span className="italic">chambers</span>.</h1>
        <p className="text-xl text-ink/70 leading-relaxed max-w-3xl font-light">Periodic writing on the questions that occupy the practice — published in Addis Standard, the FT Africa Report, and Jeune Afrique.</p>
      </section>
      <section className="px-6 md:px-12 lg:px-20 pb-24 max-w-7xl mx-auto">
        <div className="border-t border-ink/10">
          {articles.map((a) => (
            <article key={a.title} className="grid md:grid-cols-12 gap-8 py-10 border-b border-ink/10 group cursor-pointer hover:bg-ink/[0.02] transition-colors px-2">
              <div className="md:col-span-3 font-mono text-[10px] uppercase tracking-widest text-ink/50">
                <div>{a.date}</div>
                <div className="text-ochre mt-1">{a.cat}</div>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-3 group-hover:text-ochre transition-colors">{a.title}</h2>
                <p className="text-ink/70 leading-relaxed font-light max-w-3xl">{a.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}