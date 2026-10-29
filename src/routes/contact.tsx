import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { practiceAreas, site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Wendwosen Hirpo & Associates" },
      { name: "description", content: "Reach the chambers of Wendwosen Hirpo & Associates in Bole, Addis Ababa, Ethiopia." },
    ],
  }),
  component: ContactPage,
});

// No backend mail service: the form opens the visitor's email app with the note pre-filled.
function sendNote(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const f = new FormData(e.currentTarget);
  const get = (k: string) => String(f.get(k) ?? "").trim();
  const body = [
    `Name: ${get("name")}`,
    get("organization") && `Organization: ${get("organization")}`,
    `Email: ${get("email")}`,
    get("phone") && `Phone: ${get("phone")}`,
    `Practice area: ${get("area")}`,
    "",
    get("description"),
  ].filter((l) => l !== "").join("\n");
  const subject = `Consultation request — ${get("area")}`;
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function ContactPage() {
  return (
    <div className="bg-parchment text-ink">
      <SiteNav />
      <section className="px-6 md:px-12 lg:px-20 pt-24 pb-16 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-6 block">— Contact</span>
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter mb-8 text-balance max-w-5xl">A brief conversation, <span className="italic">first</span>.</h1>
        <p className="text-xl text-ink/70 leading-relaxed max-w-3xl font-light">New matters begin with a confidential consultation. Please share a short note about the matter and anyone else involved.</p>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-24 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-10">
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-3">Chambers</h3>
            <p className="text-ink/80 leading-relaxed">Bole Sub-City<br/>Addis Ababa, Ethiopia</p>
          </div>
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-3">Direct Line</h3>
            <a href={site.phoneHref} className="font-display text-3xl tracking-tight hover:text-ochre transition-colors">{site.phone}</a>
          </div>
          {site.email && (
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-3">Correspondence</h3>
              <a href={`mailto:${site.email}`} className="font-display text-2xl hover:text-ochre transition-colors">{site.email}</a>
            </div>
          )}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-3">Consultations</h3>
            <p className="text-ink/80">By appointment, in person at the chambers or by video call.</p>
          </div>
        </div>

        {site.email ? (
          <form className="lg:col-span-7 space-y-6 bg-ink text-parchment p-10 md:p-14" onSubmit={sendNote}>
            <h2 className="font-display text-3xl tracking-tight mb-2">Send a confidential note.</h2>
            <p className="text-parchment/60 text-sm mb-6">Submitting opens your email app with this note ready to send to the chambers.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">Full Name</span>
                <input required name="name" type="text" className="mt-2 w-full bg-transparent border-b border-parchment/30 py-2 focus:outline-none focus:border-ochre transition-colors" />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">Organization</span>
                <input name="organization" type="text" className="mt-2 w-full bg-transparent border-b border-parchment/30 py-2 focus:outline-none focus:border-ochre transition-colors" />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">Email</span>
                <input required name="email" type="email" className="mt-2 w-full bg-transparent border-b border-parchment/30 py-2 focus:outline-none focus:border-ochre transition-colors" />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">Phone</span>
                <input name="phone" type="tel" className="mt-2 w-full bg-transparent border-b border-parchment/30 py-2 focus:outline-none focus:border-ochre transition-colors" />
              </label>
            </div>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">Practice Area</span>
              <select name="area" className="mt-2 w-full bg-transparent border-b border-parchment/30 py-2 focus:outline-none focus:border-ochre transition-colors text-parchment">
                {[...practiceAreas, "Other"].map((a) => (
                  <option key={a} className="bg-ink">{a}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">Brief Description</span>
              <textarea required name="description" rows={5} className="mt-2 w-full bg-transparent border-b border-parchment/30 py-2 focus:outline-none focus:border-ochre transition-colors resize-none" />
            </label>
            <button type="submit" className="mt-4 px-8 py-4 bg-ochre text-ink font-mono text-[11px] uppercase tracking-widest hover:bg-parchment transition-colors">Write Email</button>
          </form>
        ) : (
          <div className="lg:col-span-7 bg-ink text-parchment p-10 md:p-14 flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-4">Call to arrange a consultation.</h2>
            <p className="text-parchment/60 mb-10 max-w-md">Describe the matter briefly and a time will be arranged to meet at the chambers in Bole or by video call.</p>
            <a href={site.phoneHref} className="self-start px-8 py-4 bg-ochre text-ink font-mono text-[11px] uppercase tracking-widest hover:bg-parchment transition-colors">Call {site.phone}</a>
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
