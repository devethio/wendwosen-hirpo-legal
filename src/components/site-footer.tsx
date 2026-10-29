import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-parchment/60 py-16 px-6 md:px-12 border-t border-parchment/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-parchment mb-4">Wendwosen Hirpo <span className="italic text-ochre">& Associates</span></div>
          <p className="text-sm max-w-sm leading-relaxed">
            Ethiopian legal practice grounded in intellectual property — trademarks, patents, contracts, business formation and litigation before the Federal courts. Based in Bole, Addis Ababa.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-ochre mb-5">Chambers</h4>
          <ul className="text-sm space-y-3">
            <li>Bole Sub-City</li>
            <li>Addis Ababa, Ethiopia</li>
            <li className="pt-2"><a href={site.phoneHref} className="hover:text-parchment transition-colors">{site.phone}</a></li>
            {site.email && <li><a href={`mailto:${site.email}`} className="hover:text-parchment transition-colors">{site.email}</a></li>}
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-ochre mb-5">Navigate</h4>
          <ul className="text-sm space-y-3">
            <li><Link to="/practice" className="hover:text-parchment transition-colors">Practice Areas</Link></li>
            <li><Link to="/about" className="hover:text-parchment transition-colors">The Counsel</Link></li>
            <li><Link to="/intake" className="hover:text-parchment transition-colors">Prepare for a Consultation</Link></li>
            <li><Link to="/contact" className="hover:text-parchment transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-parchment/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-parchment/40">
        <span>© {new Date().getFullYear()} Wendwosen Hirpo & Associates. All rights reserved.</span>
        <span>This website is for general information and is not legal advice.</span>
      </div>
    </footer>
  );
}
