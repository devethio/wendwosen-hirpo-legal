import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-parchment/60 py-16 px-6 md:px-12 border-t border-parchment/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-parchment mb-4">Wendwosen Hirpo <span className="italic text-ochre">& Associates</span></div>
          <p className="text-sm max-w-sm leading-relaxed">
            Sophisticated legal counsel at the intersection of Ethiopian regulatory frameworks and international commercial standards. Chambers in Addis Ababa, serving clients across the Horn of Africa and beyond.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-ochre mb-5">Chambers</h4>
          <ul className="text-sm space-y-3">
            <li>Bole Sub-City, Friendship Building</li>
            <li>4th Floor, Suite 412</li>
            <li>Addis Ababa, Ethiopia</li>
            <li className="pt-2">+251 911 234 567</li>
            <li>counsel@hirpolegal.et</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-ochre mb-5">Navigate</h4>
          <ul className="text-sm space-y-3">
            <li><Link to="/practice" className="hover:text-parchment transition-colors">Practice Areas</Link></li>
            <li><Link to="/about" className="hover:text-parchment transition-colors">The Counsel</Link></li>
            <li><Link to="/insights" className="hover:text-parchment transition-colors">Insights</Link></li>
            <li><Link to="/contact" className="hover:text-parchment transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-parchment/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-parchment/40">
        <span>© {new Date().getFullYear()} Wendwosen Hirpo & Associates. All rights reserved.</span>
        <span>Federal Bar of Ethiopia · Member, East African Law Society</span>
      </div>
    </footer>
  );
}