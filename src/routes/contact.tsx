import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Wendwosen Hirpo & Associates" },
      { name: "description", content: "Reach the chambers of Wendwosen Hirpo & Associates in Addis Ababa, Ethiopia." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-parchment text-ink">
      <SiteNav />
      <section className="px-6 md:px-12 lg:px-20 pt-24 pb-16 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-6 block">— Contact</span>
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter mb-8 text-balance max-w-5xl">A brief conversation, <span className="italic">first</span>.</h1>
        <p className="text-xl text-ink/70 leading-relaxed max-w-3xl font-light">New mandates begin with a confidential intake call. Please share a short note about the matter and the jurisdictions involved.</p>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-24 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-10">
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-3">Chambers</h3>
            <p className="text-ink/80 leading-relaxed">Friendship Building, 4th Floor, Suite 412<br/>Bole Sub-City<br/>Addis Ababa, Ethiopia</p>
          </div>
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-3">Direct Line</h3>
            <a href="tel:+251911342578" className="font-display text-3xl tracking-tight hover:text-ochre transition-colors">+251 911 342 578</a>
          </div>
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-3">Correspondence</h3>
            <a href="mailto:counsel@hirpolegal.et" className="font-display text-2xl hover:text-ochre transition-colors">counsel@hirpolegal.et</a>
          </div>
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-3">Hours</h3>
            <p className="text-ink/80">Monday — Friday, 09:00 — 18:00 EAT<br/>By appointment on weekends.</p>
          </div>
        </div>

        <form className="lg:col-span-7 space-y-6 bg-ink text-parchment p-10 md:p-14" onSubmit={(e) => { e.preventDefault(); alert("Thank you. The chambers will respond within two business days."); }}>
          <h2 className="font-display text-3xl tracking-tight mb-2">Send a confidential note.</h2>
          <p className="text-parchment/60 text-sm mb-6">All inquiries are reviewed personally and held in strict confidence.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">Full Name</span>
              <input required type="text" className="mt-2 w-full bg-transparent border-b border-parchment/30 py-2 focus:outline-none focus:border-ochre transition-colors" />
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">Organization</span>
              <input type="text" className="mt-2 w-full bg-transparent border-b border-parchment/30 py-2 focus:outline-none focus:border-ochre transition-colors" />
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">Email</span>
              <input required type="email" className="mt-2 w-full bg-transparent border-b border-parchment/30 py-2 focus:outline-none focus:border-ochre transition-colors" />
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">Phone</span>
              <input type="tel" className="mt-2 w-full bg-transparent border-b border-parchment/30 py-2 focus:outline-none focus:border-ochre transition-colors" />
            </label>
          </div>
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">Practice Area</span>
            <select className="mt-2 w-full bg-transparent border-b border-parchment/30 py-2 focus:outline-none focus:border-ochre transition-colors text-parchment">
              <option className="bg-ink">Commercial Arbitration</option>
              <option className="bg-ink">Corporate & M&A</option>
              <option className="bg-ink">Intellectual Property</option>
              <option className="bg-ink">Sovereign & Regulatory</option>
              <option className="bg-ink">Banking & Finance</option>
              <option className="bg-ink">Dispute Resolution</option>
              <option className="bg-ink">Other</option>
            </select>
          </label>
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">Brief Description</span>
            <textarea required rows={5} className="mt-2 w-full bg-transparent border-b border-parchment/30 py-2 focus:outline-none focus:border-ochre transition-colors resize-none" />
          </label>
          <button type="submit" className="mt-4 px-8 py-4 bg-ochre text-ink font-mono text-[11px] uppercase tracking-widest hover:bg-parchment transition-colors">Submit Inquiry</button>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}