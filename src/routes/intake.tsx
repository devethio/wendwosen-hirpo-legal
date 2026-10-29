import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { analyzeMatter, type IntakeResponse } from "@/lib/intake.functions";

export const Route = createFileRoute("/intake")({
  head: () => ({
    meta: [
      { title: "Matter Assessment — Wendwosen Hirpo & Associates" },
      { name: "description", content: "Describe your legal matter and receive the relevant practice area plus a checklist to prepare for your consultation in Addis Ababa." },
      { property: "og:title", content: "Prepare for your consultation — W. Hirpo & Associates" },
      { property: "og:description", content: "An AI-powered intake tool that identifies your practice area and builds a consultation checklist." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: IntakePage,
});

function List({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="border-t border-ink/10 pt-6">
      <h3 className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i} className="flex gap-3 text-ink/80 leading-relaxed"><span className="text-ochre">☐</span>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function IntakePage() {
  const analyze = useServerFn(analyzeMatter);
  const [matter, setMatter] = useState("");
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState<IntakeResponse | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setRes(null);
    try {
      setRes(await analyze({ data: { matter } }));
    } catch {
      setRes({ ok: false, error: "Please describe your matter in at least 20 characters." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-parchment text-ink min-h-screen">
      <SiteNav />
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— Matter Assessment</span>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-6 text-balance">Prepare for your <span className="italic">consultation</span>.</h1>
          <p className="text-ink/70 text-lg max-w-2xl mb-4">Describe your situation in your own words. Our AI-powered assistant will suggest the relevant practice area and a checklist of documents and questions to bring.</p>
          <p className="text-xs text-ink/50 max-w-2xl mb-12 border-l-2 border-ochre pl-4">This tool does not provide legal advice and does not create a lawyer–client relationship. Avoid sharing confidential details such as ID numbers. Your text is not stored.</p>

          <form onSubmit={submit} className="space-y-4">
            <textarea
              value={matter}
              onChange={(e) => setMatter(e.target.value)}
              rows={7}
              maxLength={4000}
              placeholder="e.g. A foreign company is using a brand name very similar to our registered trademark in Ethiopia..."
              className="w-full bg-transparent border border-ink/20 focus:border-ochre outline-none p-5 text-base leading-relaxed"
            />
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[10px] text-ink/40">{matter.length}/4000</span>
              <button disabled={loading || matter.trim().length < 20} className="bg-ink text-parchment px-8 py-4 font-mono text-[10px] uppercase tracking-widest hover:bg-ochre transition-colors disabled:opacity-40">
                {loading ? "Preparing checklist…" : "Prepare my checklist"}
              </button>
            </div>
          </form>

          {res && !res.ok && <p className="mt-8 text-destructive">{res.error}</p>}

          {res?.ok && (
            <div className="mt-16 bg-card border border-ink/10 p-8 md:p-12 space-y-8">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">Suggested practice area · {res.result.confidence} confidence</span>
                <h2 className="font-display text-4xl md:text-5xl mt-2">{res.result.practiceArea}</h2>
                <p className="text-ink/70 mt-4 leading-relaxed">{res.result.summary}</p>
              </div>
              <List title="Documents to bring" items={res.result.documents} />
              <List title="Questions to be ready for" items={res.result.questions} />
              <List title="Dates & deadlines to confirm" items={res.result.deadlines} />
              <div className="border-t border-ink/10 pt-8 flex flex-wrap gap-4 items-center justify-between">
                <p className="text-xs text-ink/50 max-w-md">Generated automatically for preparation only — not legal advice.</p>
                <div className="flex gap-3">
                  <button type="button" onClick={() => window.print()} className="px-6 py-3 font-mono text-[10px] uppercase tracking-widest border border-ink/20 hover:border-ochre">Print</button>
                  <Link to="/contact" className="bg-ink text-parchment px-6 py-3 font-mono text-[10px] uppercase tracking-widest hover:bg-ochre">Book consultation</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
