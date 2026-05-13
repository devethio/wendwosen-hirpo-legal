import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import portrait from "@/assets/wendwosen-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Wendwosen Hirpo — Ethiopian Attorney at Law" },
      { name: "description", content: "Biography, credentials, and philosophy of Wendwosen Hirpo, an Ethiopian attorney with 18 years of experience in commercial arbitration and sovereign advisory." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2006", body: "LL.B., Addis Ababa University (AAU) School of Law — Graduated with distinction; Editor-in-Chief, Journal of Ethiopian Law." },
  { year: "2008", body: "Admitted to the Federal Courts of Ethiopia; began practice as an intellectual property attorney advising local innovators and rights-holders." },
  { year: "2011", body: "Joined the Ethiopian Intellectual Property Office (EIPO) as a senior legal expert — patent prosecution, trademark opposition, and geographic-indication policy." },
  { year: "2014", body: "LL.M. in Intellectual Property & International Commercial Law — graduate studies focused on technology transfer and TRIPS implementation." },
  { year: "2016", body: "Founded Wendwosen Hirpo & Associates in the Bole district of Addis Ababa." },
  { year: "2019", body: "Appointed arbitrator on the panel of the Ethiopian Arbitration and Conciliation Centre." },
  { year: "2022", body: "Lead counsel on the country's first ICC-administered cross-border energy arbitration." },
  { year: "2024", body: "Visiting fellow, African Centre for International Trade & Investment Law." },
];

function About() {
  return (
    <div className="bg-parchment text-ink">
      <SiteNav />

      <section className="px-6 md:px-12 lg:px-20 pt-24 pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-end">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-6 block">— The Counsel</span>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter mb-8 text-balance">A practice rooted in <span className="italic">place</span>, fluent in the world.</h1>
            <p className="text-xl text-ink/70 leading-relaxed max-w-2xl text-pretty font-light">
              Wendwosen Hirpo is an Ethiopian attorney whose practice began in intellectual property and now spans commercial arbitration, sovereign advisory, and corporate restructuring. Over eighteen years he has counseled ministries, listed multinationals, and the founders of Ethiopia's most ambitious private ventures.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 font-mono text-[11px] uppercase tracking-widest text-ink/60">
              <a href="tel:+251911342578" className="hover:text-ochre transition-colors">+251 911 342 578</a>
              <span className="text-ink/30">·</span>
              <span>Bole · Addis Ababa</span>
            </div>
          </div>
          <div className="lg:col-span-5 animate-fade-up-delay">
            <img src={portrait} alt="Wendwosen Hirpo at his chambers" width={1080} height={1350} className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-ink/10">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-6 block">— Biography</span>
          <div className="prose-lg space-y-6 text-ink/80 text-lg leading-relaxed font-light max-w-3xl">
            <p>Wendwosen read law at Addis Ababa University (AAU), graduating with distinction in 2006 and serving as Editor-in-Chief of the <em>Journal of Ethiopian Law</em>. He stayed on at AAU for graduate study, completing a master's degree with a concentration in intellectual property and international commercial law — a foundation that has shaped every chapter of his practice since.</p>
            <p>His professional formation was unusual for the Ethiopian bar of his generation: rather than move directly into general litigation, he committed his early years to <strong>intellectual property law</strong>. He counseled inventors, agricultural cooperatives, and creative industries on patents, trademarks, copyright, and trade secrets, and went on to serve as a senior legal expert at the <strong>Ethiopian Intellectual Property Office (EIPO)</strong>, where he worked on patent prosecution, opposition proceedings, and the policy framework around Ethiopia's geographic indications — most notably the protection of single-origin coffee names abroad.</p>
            <p>That grounding in IP gave the firm its distinctive cast. Today the practice numbers seven lawyers and accepts a deliberately limited docket — typically no more than a dozen active matters — so that each client retains his direct attention. Outside the chambers, Wendwosen lectures at AAU School of Law and is a frequent commentator on regulatory reform in <em>Addis Standard</em>, the <em>Financial Times Africa Report</em>, and <em>Jeune Afrique</em>.</p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-parchment px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Career</span>
            <h2 className="font-display text-4xl tracking-tight">Selected milestones.</h2>
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
              <li><div className="font-display text-xl">Addis Ababa University School of Law</div><div className="text-sm text-ink/60 mt-1">LL.M., Intellectual Property & International Commercial Law · 2014</div></li>
              <li><div className="font-display text-xl">Addis Ababa University School of Law</div><div className="text-sm text-ink/60 mt-1">LL.B. with distinction · 2006 · Editor-in-Chief, Journal of Ethiopian Law</div></li>
              <li><div className="font-display text-xl">The Hague Academy of International Law</div><div className="text-sm text-ink/60 mt-1">Summer programme in Public International Law · 2010</div></li>
            </ul>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Memberships</span>
            <ul className="space-y-4 text-ink/80">
              <li>Ethiopian Federal Bar Association</li>
              <li>Ethiopian Intellectual Property Office — Former Senior Legal Expert</li>
              <li>East African Law Society</li>
              <li>International Bar Association — Arbitration Committee</li>
              <li>ICC International Court of Arbitration — National Committee, Ethiopia</li>
              <li>Pan-African Lawyers Union</li>
              <li>American Society of International Law</li>
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
          <a href="tel:+251911342578" className="font-display text-3xl md:text-4xl text-ochre hover:text-parchment transition-colors tracking-tight">+251 911 342 578</a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}