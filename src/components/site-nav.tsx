import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home", exact: true },
  { to: "/practice", label: "Practice", exact: false },
  { to: "/about", label: "Counsel", exact: false },
  { to: "/intake", label: "Assess Matter", exact: false },
  { to: "/contact", label: "Contact", exact: false },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 bg-parchment/85 backdrop-blur-md border-b border-ink/10">
      <Link to="/" onClick={() => setOpen(false)} className="font-display text-xl font-bold tracking-tight text-ink">
        W. HIRPO <span className="text-ochre">&</span> ASSOCIATES
      </Link>
      <div className="hidden md:flex gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="hover:text-ochre transition-colors" activeProps={{ className: "text-ochre" }} activeOptions={{ exact: l.exact }}>{l.label}</Link>
        ))}
      </div>
      <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" className="md:hidden -mr-2 p-2 text-ink hover:text-ochre transition-colors">
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {open && (
        <div id="mobile-menu" className="md:hidden absolute inset-x-0 top-full bg-parchment border-b border-ink/10 px-6 py-2 flex flex-col text-[11px] font-medium uppercase tracking-[0.2em] text-ink/70 shadow-sm">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-4 border-b border-ink/10 last:border-0 hover:text-ochre transition-colors" activeProps={{ className: "text-ochre" }} activeOptions={{ exact: l.exact }}>{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
