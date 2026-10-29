import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import portrait from "@/assets/wendwosen-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Wendwosen Hirpo — Ethiopian Advocate" },
      { name: "description", content: "Background of Wendwosen Hirpo, an Ethiopian advocate, Addis Ababa University law graduate and former senior legal expert at the Ethiopian Intellectual Property Office." },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2006", body: "LL.B., Addis Ababa University (AAU) School of Law." },
  { year: "2008", body: "Admitted to practise before the Federal Courts of Ethiopia; began practice as an intellectual property attorney advising local innovators and rights-holders." },
  { year: "2011", body: "Joined the Ethiopian Intellectual Property Office (EIPO) as a senior legal expert — patent and trademark examination, oppositions and IP policy." },
  { year: "2014", body: "LL.M., Addis Ababa University, with a focus on intellectual property and commercial law." },
  { year: "2016", body: "Founded Wendwosen Hirpo & Associates in the Bole district of Addis Ababa." },
];

function About() {
  return (
    <div className="bg-parchment text-ink">
      <SiteNav />

      <section className="px-6 md:px-12 lg:px-20 pt-24 pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-end">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-6 block">— The Counsel</span>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter mb-8 text-balance">A practice rooted in <span className="italic">place</span>.</h1>
            <p className="text-xl text-ink/70 leading-relaxed max-w-2xl text-pretty font-light">
              Wendwosen Hirpo is an Ethiopian advocate whose practice began in intellectual property and now covers contracts, business formation and litigation before the Federal courts. He advises entrepreneurs, companies and rights-holders from his chambers in Bole, Addis Ababa.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 font-mono text-[11px] uppercase tracking-widest text-ink/60">
              <a href={site.phoneHref} className="hover:text-ochre transition-colors">{site.phone}</a>
              <span className="text-ink/30">·</span>
              <span>Bole · Addis Ababa</span>
            </div>
          </div>
          <div className="lg:col-span-5 animate-fade-up-delay">
            <img src={portrait} alt="Wendwosen Hirpo" width={1080} height={1350} className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-ink/10">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-6 block">— Biography</span>
          <div className="prose-lg space-y-6 text-ink/80 text-lg leading-relaxed font-light max-w-3xl">
            <p>Wendwosen read law at Addis Ababa University (AAU), earning his LL.B. in 2006. He later returned to AAU for graduate study, completing an LL.M. with a focus on intellectual property and commercial law — a foundation that has shaped his practice since.</p>
            <p>His early career was unusual for the Ethiopian bar of his generation: rather than move directly into general litigation, he committed his first years to <strong>intellectual property law</strong>, advising inventors, businesses and creators on patents, trademarks and copyright. He went on to serve as a senior legal expert at the <strong>Ethiopian Intellectual Property Office (EIPO)</strong>, working on the examination of patent and trademark applications, opposition proceedings and IP policy.</p>
            <p>That grounding in IP gives the practice its distinctive cast. Clients are received at the chambers in Bole, and every matter is handled personally by Wendwosen — from first consultation to final filing.</p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-parchment px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Career</span>
            <h2 className="font-display text-4xl tracking-tight">Milestones.</h2>
          </div>
          <div className="md:col-span-2 space-y-0">
            {timeline.map((t) => (
              <div key={t.year} className="grid grid-cols-[80px_1fr] gap-6 py-6 border-b border-parchment/10 items-start">
                <span className="font-mono text-xs text-ochre pt-1">{t.year}</span>
                <p className="text-parchment/80 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Education</span>
            <ul className="space-y-6">
              <li><div className="font-display text-xl">Addis Ababa University School of Law</div><div className="text-sm text-ink/60 mt-1">LL.M., Intellectual Property & Commercial Law · 2014</div></li>
              <li><div className="font-display text-xl">Addis Ababa University School of Law</div><div className="text-sm text-ink/60 mt-1">LL.B. · 2006</div></li>
            </ul>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Professional</span>
            <ul className="space-y-6">
              <li><div className="font-display text-xl">Wendwosen Hirpo & Associates</div><div className="text-sm text-ink/60 mt-1">Founder · Bole, Addis Ababa · 2016 – present</div></li>
              <li><div className="font-display text-xl">Ethiopian Intellectual Property Office</div><div className="text-sm text-ink/60 mt-1">Former Senior Legal Expert</div></li>
              <li><div className="font-display text-xl">Federal Courts of Ethiopia</div><div className="text-sm text-ink/60 mt-1">Advocate</div></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink text-parchment px-6 md:px-12 lg:px-20 py-20 border-t border-parchment/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Direct Line</span>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">Reach the chambers directly.</h2>
          </div>
          <a href={site.phoneHref} className="font-display text-3xl md:text-4xl text-ochre hover:text-parchment transition-colors tracking-tight">{site.phone}</a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
