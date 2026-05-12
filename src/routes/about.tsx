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
  { year: "2006", body: "LL.B., Addis Ababa University School of Law — Graduated with distinction; Editor-in-Chief, Journal of Ethiopian Law." },
  { year: "2008", body: "Admitted to the Federal Courts of Ethiopia; joined Mehrteab Leul & Associates as junior associate." },
  { year: "2011", body: "LL.M. in International Commercial Law, Harvard Law School — Fulbright Scholar." },
  { year: "2013", body: "Returned to Addis Ababa as senior counsel for a leading Pan-African legal practice." },
  { year: "2016", body: "Founded Wendwosen Hirpo & Associates in the Bole district." },
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
              Wendwosen Hirpo is an Ethiopian attorney whose practice spans commercial arbitration, sovereign advisory, and corporate restructuring. Over eighteen years he has counseled ministries, listed multinationals, and the founders of Ethiopia's most ambitious private ventures.
            </p>
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
            <p>Born in Addis Ababa and raised between the highlands of Bahir Dar and the diaspora communities of Washington, D.C., Wendwosen brings a rare bilateral fluency to the Ethiopian bar. His early career at Mehrteab Leul & Associates exposed him to the privatization wave of the late 2000s; his graduate work at Harvard sharpened a particular interest in how middle-income economies negotiate with global capital.</p>
            <p>He returned home in 2013 with a conviction that Ethiopia's emerging market deserved counsel of equal sophistication to that available in Nairobi or Lagos. Three years later he founded the firm that bears his name. Today the practice numbers seven lawyers and accepts a deliberately limited docket — typically no more than a dozen active matters — so that each client retains his direct attention.</p>
            <p>Outside the chambers, Wendwosen lectures on international trade law at Addis Ababa University, sits on the board of the Ethiopian Diaspora Trust Fund Legal Working Group, and is a frequent commentator on regulatory reform in <em>Addis Standard</em>, the <em>Financial Times Africa Report</em>, and <em>Jeune Afrique</em>.</p>
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
              <li><div className="font-display text-xl">Harvard Law School</div><div className="text-sm text-ink/60 mt-1">LL.M., International Commercial Law · 2011 · Fulbright Scholar</div></li>
              <li><div className="font-display text-xl">Addis Ababa University School of Law</div><div className="text-sm text-ink/60 mt-1">LL.B. with distinction · 2006 · Editor-in-Chief, Journal of Ethiopian Law</div></li>
              <li><div className="font-display text-xl">The Hague Academy of International Law</div><div className="text-sm text-ink/60 mt-1">Summer programme in Public International Law · 2010</div></li>
            </ul>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Memberships</span>
            <ul className="space-y-4 text-ink/80">
              <li>Ethiopian Federal Bar Association</li>
              <li>East African Law Society</li>
              <li>International Bar Association — Arbitration Committee</li>
              <li>ICC International Court of Arbitration — National Committee, Ethiopia</li>
              <li>Pan-African Lawyers Union</li>
              <li>American Society of International Law</li>
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}