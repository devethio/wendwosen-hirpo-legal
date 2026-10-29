import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Emphasis } from "@/components/rich";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { useLocale } from "@/lib/i18n";
import { practiceAreas, site } from "@/lib/site";

function Info({ Icon, label, children }: { Icon: LucideIcon; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ochre/10 text-ochre"><Icon className="size-5" strokeWidth={1.5} /></span>
      <div>
        <h3 className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-2">{label}</h3>
        {children}
      </div>
    </div>
  );
}

const field = "mt-2 w-full bg-transparent border-b border-parchment/30 py-2 focus:outline-none focus:border-ochre transition-colors";

export function ContactPage() {
  const { t } = useLocale();
  const c = t.contact;
  const areas = [...practiceAreas, "Other"] as const;

  // No backend mail service: the form opens the visitor's email app with the note pre-filled.
  function sendNote(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const area = t.areaNames[get("area") as (typeof areas)[number]];
    const body = [
      `${c.form.name}: ${get("name")}`,
      get("organization") && `${c.form.organization}: ${get("organization")}`,
      `${c.form.email}: ${get("email")}`,
      get("phone") && `${c.form.phone}: ${get("phone")}`,
      `${c.form.area}: ${area}`,
      "",
      get("description"),
    ].filter((l) => l !== "").join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${c.form.subject} — ${area}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="bg-parchment text-ink">
      <SiteNav />
      <section className="px-6 md:px-12 lg:px-20 pt-20 md:pt-24 pb-16 max-w-7xl mx-auto animate-fade-up">
        <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-6 block">— {c.eyebrow}</span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter mb-8 text-balance max-w-5xl"><Emphasis parts={c.title} /></h1>
        <p className="text-xl text-ink/70 leading-relaxed max-w-3xl font-light">{c.lede}</p>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-24 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-10">
          <Info Icon={MapPin} label={c.chambers}>
            <p className="text-ink/80 leading-relaxed">{t.common.address.map((l, i) => <span key={l}>{i > 0 && <br />}{l}</span>)}</p>
          </Info>
          <Info Icon={Phone} label={c.direct}>
            <a href={site.phoneHref} className="font-display text-3xl tracking-tight hover:text-ochre transition-colors">{site.phone}</a>
          </Info>
          {site.email && (
            <Info Icon={Mail} label={c.email}>
              <a href={`mailto:${site.email}`} className="font-display text-2xl hover:text-ochre transition-colors">{site.email}</a>
            </Info>
          )}
          <Info Icon={Clock} label={c.consult}>
            <p className="text-ink/80">{c.consultBody}</p>
          </Info>
        </div>

        {site.email ? (
          <form className="lg:col-span-7 space-y-6 bg-ink text-parchment p-10 md:p-14" onSubmit={sendNote}>
            <h2 className="font-display text-3xl tracking-tight mb-2">{c.form.title}</h2>
            <p className="text-parchment/60 text-sm mb-6">{c.form.note}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <label className="block"><span className="font-mono text-[10px] uppercase tracking-widest text-ochre">{c.form.name}</span><input required name="name" type="text" className={field} /></label>
              <label className="block"><span className="font-mono text-[10px] uppercase tracking-widest text-ochre">{c.form.organization}</span><input name="organization" type="text" className={field} /></label>
              <label className="block"><span className="font-mono text-[10px] uppercase tracking-widest text-ochre">{c.form.email}</span><input required name="email" type="email" className={field} /></label>
              <label className="block"><span className="font-mono text-[10px] uppercase tracking-widest text-ochre">{c.form.phone}</span><input name="phone" type="tel" className={field} /></label>
            </div>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">{c.form.area}</span>
              <select name="area" className={`${field} text-parchment`}>
                {areas.map((a) => <option key={a} value={a} className="bg-ink">{t.areaNames[a]}</option>)}
              </select>
            </label>
            <label className="block"><span className="font-mono text-[10px] uppercase tracking-widest text-ochre">{c.form.description}</span><textarea required name="description" rows={5} className={`${field} resize-none`} /></label>
            <button type="submit" className="mt-4 px-8 py-4 bg-ochre text-ink font-mono text-[11px] uppercase tracking-widest hover:bg-parchment transition-colors">{c.form.submit}</button>
          </form>
        ) : (
          <div className="lg:col-span-7 relative overflow-hidden bg-ink text-parchment p-10 md:p-14 flex flex-col justify-center">
            <Phone aria-hidden className="absolute -right-10 -bottom-10 size-64 text-parchment/[0.04]" strokeWidth={1} />
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-4 text-balance">{c.callPanel.title}</h2>
            <p className="text-parchment/60 mb-10 max-w-md">{c.callPanel.body}</p>
            <a href={site.phoneHref} className="self-start inline-flex items-center gap-3 px-8 py-4 bg-ochre text-ink font-mono text-[11px] uppercase tracking-widest hover:bg-parchment transition-colors">
              <Phone className="size-4" />
              {t.common.call} {site.phone}
            </a>
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
