import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { areaIcons } from "@/components/pages/home";
import { Emphasis } from "@/components/rich";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { Tibeb } from "@/components/tibeb";
import { useLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import contract from "@/assets/contract-review.jpg";

export function PracticePage() {
  const { t, to } = useLocale();
  const p = t.practice;

  return (
    <div className="bg-parchment text-ink">
      <SiteNav />

      <section className="px-6 md:px-12 lg:px-20 pt-20 md:pt-24 pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 animate-fade-up">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-6 block">— {p.eyebrow}</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter mb-8 text-balance"><Emphasis parts={p.title} /></h1>
            <p className="text-xl text-ink/70 leading-relaxed max-w-2xl font-light">{p.lede}</p>
          </div>
          <img src={contract} alt={p.imageAlt} width={1200} height={1504} className="hidden lg:block lg:col-span-4 w-full aspect-[4/5] object-cover sepia-[0.25] animate-fade-up-delay" />
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
          {t.areas.map((a, i) => {
            const Icon = areaIcons[a.id];
            return (
              <article key={a.id} id={a.id} className="reveal scroll-mt-28 bg-parchment p-10 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <span className="flex size-12 items-center justify-center rounded-full bg-ochre/10 text-ochre"><Icon className="size-5" strokeWidth={1.5} /></span>
                  <span className="font-mono text-xs text-ink/30">0{i + 1}</span>
                </div>
                <h2 className="font-display text-3xl tracking-tight mb-4">{a.title}</h2>
                <p className="text-ink/70 leading-relaxed mb-6 font-light">{a.body}</p>
                <ul className="space-y-2.5 text-sm text-ink/70">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex gap-3"><span className="text-ochre">—</span>{b}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-ink text-parchment">
        <Tibeb className="text-ochre/70" />
        <div className="px-6 md:px-12 lg:px-20 py-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 reveal">
              <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-4 text-balance">{p.cta.title}</h2>
              <p className="text-parchment/60 leading-relaxed max-w-xl">{p.cta.body}</p>
            </div>
            <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-4">
              <Link to={to.intake} className="group inline-flex items-center justify-between gap-4 bg-ochre text-ink px-7 py-4 font-mono text-[11px] uppercase tracking-widest hover:bg-parchment transition-colors">
                {p.cta.button}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={site.phoneHref} className="inline-flex items-center justify-between gap-4 border border-parchment/20 px-7 py-4 font-mono text-[11px] uppercase tracking-widest hover:border-ochre hover:text-ochre transition-colors">
                {t.common.call} {site.phone}
                <Phone className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
