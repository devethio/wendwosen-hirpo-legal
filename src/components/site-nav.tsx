import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { paths, useLocale } from "@/lib/i18n";

const order = ["home", "practice", "about", "intake", "contact"] as const;

// Links to the current page in each language; keeps the scroll position.
export function LangSwitch({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  const { lang, page, t } = useLocale();
  const target = page ?? "home";
  const on = dark ? "bg-parchment text-ink" : "bg-ink text-parchment";
  const off = dark ? "text-parchment/60 hover:text-ochre" : "text-ink/60 hover:text-ochre";
  const item = "px-2.5 py-1.5 leading-none transition-colors";
  return (
    <div role="group" aria-label={t.nav.language} className={`inline-flex items-center border ${dark ? "border-parchment/20" : "border-ink/15"} text-[11px] font-medium ${className}`}>
      <Link to={paths.am[target]} resetScroll={false} lang="am" hrefLang="am" aria-current={lang === "am" ? "true" : undefined} className={`${item} text-[13px] ${lang === "am" ? on : off}`}>
        አማርኛ
      </Link>
      <Link to={paths.en[target]} resetScroll={false} lang="en" hrefLang="en" aria-current={lang === "en" ? "true" : undefined} className={`${item} ${lang === "en" ? on : off}`}>
        EN
      </Link>
    </div>
  );
}

export function SiteNav() {
  const { t, to } = useLocale();
  const [open, setOpen] = useState(false);
  const links = order.map((k) => ({ key: k, to: to[k], label: t.nav[k], exact: k === "home" }));

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center gap-3 px-5 md:px-12 py-4 md:py-5 bg-parchment/85 backdrop-blur-md border-b border-ink/10">
      <Link to={to.home} onClick={() => setOpen(false)} className="font-display text-[15px] sm:text-lg md:text-xl font-bold tracking-tight text-ink whitespace-nowrap">
        W. HIRPO <span className="text-ochre">&</span> ASSOCIATES
      </Link>
      <div className="hidden lg:flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">
        {links.map((l) => (
          <Link key={l.key} to={l.to} className="hover:text-ochre transition-colors" activeProps={{ className: "text-ochre" }} activeOptions={{ exact: l.exact }}>{l.label}</Link>
        ))}
        <LangSwitch className="tracking-normal normal-case" />
      </div>
      <div className="flex lg:hidden items-center gap-2">
        <LangSwitch />
        <button type="button" onClick={() => setOpen(!open)} aria-label={open ? t.nav.closeMenu : t.nav.openMenu} aria-expanded={open} aria-controls="mobile-menu" className="-mr-2 p-2 text-ink hover:text-ochre transition-colors">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="lg:hidden absolute inset-x-0 top-full bg-parchment border-b border-ink/10 px-6 py-2 flex flex-col text-[11px] font-medium uppercase tracking-[0.2em] text-ink/70 shadow-sm">
          {links.map((l) => (
            <Link key={l.key} to={l.to} onClick={() => setOpen(false)} className="py-4 border-b border-ink/10 last:border-0 hover:text-ochre transition-colors" activeProps={{ className: "text-ochre" }} activeOptions={{ exact: l.exact }}>{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
