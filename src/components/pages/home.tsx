import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, FileSignature, Landmark, Languages, Lightbulb, Phone, Scale, UserRound, type LucideIcon } from "lucide-react";
import { Emphasis } from "@/components/rich";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { Tibeb } from "@/components/tibeb";
import { useLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import portrait from "@/assets/wendwosen-portrait.jpg";
import skyline from "@/assets/addis-skyline.jpg";

export const areaIcons: Record<string, LucideIcon> = { ip: Lightbulb, contracts: FileSignature, business: Building2, litigation: Scale };
const whyIcons = [Landmark, UserRound, Languages];

export function HomePage() {
  const { t, to } = useLocale();
  const h = t.home;

  return (
    <div className="bg-parchment text-ink selection:bg-ochre/20">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 lg:px-20 pt-0 pb-20 md:pt-16 lg:py-20 overflow-hidden">
        <div className="z-10 max-w-3xl animate-fade-up">
          <figure className="group lg:hidden -mx-6 md:mx-0 md:max-w-md mb-12 relative">
            <img src={portrait} alt={`${t.common.firstName} ${t.common.lastName}, ${t.common.aau}`} width={960} height={1280} className="portrait-tone w-full aspect-[4/5] object-cover object-[50%_30%]" />
            <figcaption className="absolute bottom-0 inset-x-0 px-6 pt-16 pb-5 bg-gradient-to-t from-ink/70 to-transparent font-mono text-[10px] uppercase tracking-widest text-parchment/85">{t.common.aau}</figcaption>
          </figure>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-ochre"></div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">{t.common.place}</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mb-8 text-balance">
            {t.common.firstName} <br /><span className="italic">{t.common.lastName}</span>
          </h1>
          <p className="text-xl md:text-2xl text-ink/70 leading-relaxed max-w-xl text-pretty font-light">{h.hero.lede}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to={to.contact} className="group inline-flex items-center gap-3 bg-ink text-parchment px-6 py-3.5 font-mono text-[10px] uppercase tracking-widest hover:bg-ochre transition-colors">
              {t.common.requestConsultation}
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to={to.practice} className="px-6 py-3.5 font-mono text-[10px] uppercase tracking-widest text-ink/70 hover:text-ochre transition-colors border border-ink/20 hover:border-ochre">
              {h.hero.secondary}
            </Link>
          </div>
          <dl className="mt-12 grid sm:grid-cols-3 gap-x-10 gap-y-6 border-t border-ink/10 pt-8">
            {h.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="font-mono text-[10px] uppercase tracking-widest mb-1.5 text-ochre/80">{f.label}</dt>
                <dd className="text-sm font-medium leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="group absolute right-0 top-0 w-1/2 h-full hidden lg:block animate-fade-up-delay">
          <img src={portrait} alt={`${t.common.firstName} ${t.common.lastName}, ${t.common.aau}`} width={960} height={1280} className="portrait-tone w-full h-full object-cover object-[50%_35%]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-parchment" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink/60 to-transparent" />
          <figcaption className="absolute bottom-8 right-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-parchment/85">
            <span className="h-px w-8 bg-ochre"></span>{t.common.aau}
          </figcaption>
        </figure>
      </section>

      {/* Practice areas */}
      <section className="bg-ink text-parchment">
        <Tibeb className="text-ochre/70" />
        <div className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-7xl mx-auto">
            <header className="reveal flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— {h.practice.eyebrow}</span>
                <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-2xl text-balance">{h.practice.title}</h2>
              </div>
              <p className="max-w-md text-parchment/60 text-sm leading-relaxed">{h.practice.intro}</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-parchment/10 border border-parchment/10">
              {t.areas.map((a, i) => {
                const Icon = areaIcons[a.id];
                return (
                  <Link key={a.id} to={to.practice} hash={a.id} className="reveal group relative bg-ink p-10 md:p-12 hover:bg-white/[0.03] transition-colors">
                    <span aria-hidden className="absolute top-0 left-0 h-0.5 w-0 bg-ochre transition-all duration-500 group-hover:w-full" />
                    <div className="flex items-center justify-between mb-8">
                      <span className="flex size-12 items-center justify-center rounded-full border border-ochre/40 text-ochre group-hover:bg-ochre group-hover:text-ink transition-colors">
                        <Icon className="size-5" strokeWidth={1.5} />
                      </span>
                      <span className="font-mono text-xs text-parchment/30">0{i + 1}</span>
                    </div>
                    <h3 className="font-display text-3xl mb-4">{a.title}</h3>
                    <p className="text-parchment/60 leading-relaxed text-pretty text-sm mb-8">{a.summary}</p>
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ochre">
                      {h.practice.learnMore}
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why — rooted in Addis */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden">
            <img src={skyline} alt="" loading="lazy" width={1600} height={912} className="w-full h-[360px] md:h-[480px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-14 max-w-2xl text-parchment">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— {h.why.eyebrow}</span>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance">{h.why.title}</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-ink/10 border-x border-b border-ink/10">
            {h.why.items.map((w, i) => {
              const Icon = whyIcons[i];
              return (
                <div key={w.title} className="reveal bg-parchment p-10 md:p-12">
                  <Icon className="size-7 text-ochre mb-8" strokeWidth={1.25} />
                  <h3 className="font-display text-2xl mb-4 text-balance">{w.title}</h3>
                  <p className="text-ink/70 leading-relaxed text-sm">{w.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How an engagement works */}
      <section className="bg-ink text-parchment px-6 md:px-12 lg:px-20 py-24 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="reveal">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— {h.process.eyebrow}</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-16 max-w-2xl text-balance">{h.process.title}</h2>
          </div>
          <ol className="relative grid md:grid-cols-4 gap-12 md:gap-8">
            <span aria-hidden className="hidden md:block absolute top-5 left-5 right-5 h-px bg-gradient-to-r from-ochre/60 via-parchment/15 to-parchment/5" />
            {h.process.steps.map((s, i) => (
              <li key={s.title} className="reveal relative">
                <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-ochre bg-ink font-mono text-xs text-ochre mb-6">0{i + 1}</span>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-parchment/60 text-sm leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="reveal max-w-6xl mx-auto bg-coffee text-parchment shadow-2xl shadow-ink/20" style={{ backgroundColor: "var(--coffee)" }}>
          <Tibeb className="text-ochre/80" />
          <div className="grid md:grid-cols-12 gap-10 p-10 md:p-16 items-center">
            <div className="md:col-span-7">
              <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-6 text-balance"><Emphasis parts={h.cta.title} /></h2>
              <p className="text-parchment/70 text-lg leading-relaxed max-w-xl">{h.cta.body}</p>
            </div>
            <div className="md:col-span-5 md:border-l md:border-parchment/15 md:pl-10 flex flex-col gap-6">
              <Link to={to.contact} className="group inline-flex items-center justify-between gap-4 bg-ochre text-ink px-7 py-5 font-mono text-[11px] uppercase tracking-widest hover:bg-parchment transition-colors">
                {t.common.requestConsultation}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-parchment/50 block mb-2">{h.cta.or}</span>
                <a href={site.phoneHref} className="inline-flex items-center gap-3 font-display text-3xl md:text-4xl tracking-tight hover:text-ochre transition-colors">
                  <Phone className="size-6 text-ochre" strokeWidth={1.5} />
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
