import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { LangSwitch } from "@/components/site-nav";
import { Tibeb } from "@/components/tibeb";
import { useLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

export function SiteFooter() {
  const { t, to } = useLocale();

  return (
    <>
      <footer className="bg-ink text-parchment/60">
        <Tibeb className="text-ochre/60" />
        <div className="px-6 md:px-12 pt-16 pb-28 lg:pb-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="font-display text-2xl text-parchment mb-4">{t.common.firmFirst} <span className="italic text-ochre">{t.common.firmRest}</span></div>
              <p className="text-sm max-w-sm leading-relaxed mb-8">{t.footer.blurb}</p>
              <LangSwitch dark />
            </div>
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-ochre mb-5">{t.footer.chambers}</h4>
              <ul className="text-sm space-y-3">
                {t.common.address.map((line) => <li key={line}>{line}</li>)}
                <li className="pt-2"><a href={site.phoneHref} className="hover:text-parchment transition-colors">{site.phone}</a></li>
                {site.email && <li><a href={`mailto:${site.email}`} className="hover:text-parchment transition-colors">{site.email}</a></li>}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-ochre mb-5">{t.footer.navigate}</h4>
              <ul className="text-sm space-y-3">
                <li><Link to={to.practice} className="hover:text-parchment transition-colors">{t.footer.links.practice}</Link></li>
                <li><Link to={to.about} className="hover:text-parchment transition-colors">{t.footer.links.about}</Link></li>
                <li><Link to={to.intake} className="hover:text-parchment transition-colors">{t.footer.links.intake}</Link></li>
                <li><Link to={to.contact} className="hover:text-parchment transition-colors">{t.footer.links.contact}</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-parchment/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-parchment/40">
            <span>© {new Date().getFullYear()} {t.common.firm}. {t.footer.rights}</span>
            <span>{t.footer.disclaimer}</span>
          </div>
        </div>
      </footer>
      <a href={site.phoneHref} aria-label={t.common.callChambers} className="lg:hidden fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-ochre text-ink shadow-lg shadow-ink/30 ring-4 ring-parchment/70 hover:bg-ink hover:text-parchment transition-colors">
        <Phone className="size-5" />
      </a>
    </>
  );
}
