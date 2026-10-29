import { BriefcaseBusiness, GraduationCap, Phone } from "lucide-react";
import { Emphasis, Rich } from "@/components/rich";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { useLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import fullLength from "@/assets/wendwosen-full-length.jpg";

export function AboutPage() {
  const { t } = useLocale();
  const a = t.about;

  return (
    <div className="bg-parchment text-ink">
      <SiteNav />

      <section className="px-6 md:px-12 lg:px-20 pt-20 md:pt-24 pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-end">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-6 block">— {a.eyebrow}</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter mb-8 text-balance"><Emphasis parts={a.title} /></h1>
            <p className="text-xl text-ink/70 leading-relaxed max-w-2xl text-pretty font-light">{a.lede}</p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 font-mono text-[11px] uppercase tracking-widest text-ink/60">
              <a href={site.phoneHref} className="hover:text-ochre transition-colors">{site.phone}</a>
              <span className="text-ink/30">·</span>
              <span>{t.common.bole}</span>
            </div>
          </div>
          <figure className="group relative lg:col-span-5 mr-4 mb-4 animate-fade-up-delay">
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 border border-ochre/50" />
            <img src={fullLength} alt={`${t.common.firstName} ${t.common.lastName}`} width={540} height={720} className="portrait-tone relative w-full aspect-[3/4] object-cover" />
          </figure>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-ink/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4 reveal">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— {a.bioEyebrow}</span>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight text-balance">{a.bioTitle}</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-ink/80 text-lg leading-relaxed font-light">
            {a.bio.map((p, i) => (
              <p key={i} className={i === 0 ? "drop-cap" : undefined}><Rich text={p} /></p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-parchment px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="reveal">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— {a.careerEyebrow}</span>
            <h2 className="font-display text-4xl tracking-tight">{a.careerTitle}</h2>
          </div>
          <ol className="md:col-span-2 relative border-l border-parchment/15 ml-2">
            {a.timeline.map((m) => (
              <li key={m.year} className="reveal relative pl-10 pb-10 last:pb-0">
                <span aria-hidden className="absolute -left-[7px] top-1.5 size-3 rounded-full bg-ink border-2 border-ochre" />
                <div className="font-mono text-xs text-ochre mb-2">
                  {m.year} {t.common.yearSuffix && <span className="text-parchment/40">{t.common.yearSuffix}</span>}
                </div>
                <p className="text-parchment/80 leading-relaxed">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10">
          {[
            { eyebrow: a.educationEyebrow, items: a.education, Icon: GraduationCap },
            { eyebrow: a.professionalEyebrow, items: a.professional, Icon: BriefcaseBusiness },
          ].map(({ eyebrow, items, Icon }) => (
            <div key={eyebrow} className="reveal border border-ink/10 bg-white/40 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="flex size-11 items-center justify-center rounded-full bg-ochre/10 text-ochre"><Icon className="size-5" strokeWidth={1.5} /></span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">{eyebrow}</span>
              </div>
              <ul className="space-y-6">
                {items.map((e) => (
                  <li key={e.detail} className="border-l-2 border-ochre/30 pl-5">
                    <div className="font-display text-xl">{e.name}</div>
                    <div className="text-sm text-ink/60 mt-1">{e.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-parchment px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— {a.directEyebrow}</span>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">{a.directTitle}</h2>
          </div>
          <a href={site.phoneHref} className="inline-flex items-center gap-4 font-display text-3xl md:text-4xl text-ochre hover:text-parchment transition-colors tracking-tight">
            <Phone className="size-7" strokeWidth={1.5} />
            {site.phone}
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
