import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 bg-parchment/85 backdrop-blur-md border-b border-ink/10">
      <Link to="/" className="font-display text-xl font-bold tracking-tight text-ink">
        W. HIRPO <span className="text-ochre">&</span> ASSOCIATES
      </Link>
      <div className="hidden md:flex gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">
        <Link to="/" className="hover:text-ochre transition-colors" activeProps={{ className: "text-ochre" }} activeOptions={{ exact: true }}>Home</Link>
        <Link to="/practice" className="hover:text-ochre transition-colors" activeProps={{ className: "text-ochre" }}>Practice</Link>
        <Link to="/about" className="hover:text-ochre transition-colors" activeProps={{ className: "text-ochre" }}>Counsel</Link>
        <Link to="/insights" className="hover:text-ochre transition-colors" activeProps={{ className: "text-ochre" }}>Insights</Link>
        <Link to="/contact" className="hover:text-ochre transition-colors" activeProps={{ className: "text-ochre" }}>Contact</Link>
      </div>
    </nav>
  );
}