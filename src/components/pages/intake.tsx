import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Emphasis } from "@/components/rich";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { analyzeMatter, type IntakeResponse } from "@/lib/intake.functions";
import { useLocale } from "@/lib/i18n";

type State = IntakeResponse | { ok: false; error: "short" };

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

export function IntakePage() {
  const { t, to } = useLocale();
  const c = t.intake;
  const analyze = useServerFn(analyzeMatter);
  const [matter, setMatter] = useState("");
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState<State | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setRes(null);
    try {
      setRes(await analyze({ data: { matter } }));
    } catch {
      setRes({ ok: false, error: "short" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-parchment text-ink min-h-screen">
      <SiteNav />
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto animate-fade-up">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— {c.eyebrow}</span>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-6 text-balance"><Emphasis parts={c.title} /></h1>
          <p className="text-ink/70 text-lg max-w-2xl mb-4">{c.lede}</p>
          <p className="text-xs text-ink/50 max-w-2xl mb-12 border-l-2 border-ochre pl-4">{c.disclaimer}</p>

          <form onSubmit={submit} className="space-y-4">
            <textarea
              value={matter}
              onChange={(e) => setMatter(e.target.value)}
              rows={7}
              maxLength={4000}
              placeholder={c.placeholder}
              className="w-full bg-white/50 border border-ink/20 focus:border-ochre outline-none p-5 text-base leading-relaxed"
            />
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[10px] text-ink/40">{matter.length}/4000</span>
              <button disabled={loading || matter.trim().length < 20} className="bg-ink text-parchment px-8 py-4 font-mono text-[10px] uppercase tracking-widest hover:bg-ochre transition-colors disabled:opacity-40">
                {loading ? c.loading : c.submit}
              </button>
            </div>
          </form>

          {res && !res.ok && <p className="mt-8 text-destructive">{c.errors[res.error]}</p>}

          {res?.ok && (
            <div className="mt-16 bg-card border border-ink/10 p-8 md:p-12 space-y-8">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">{c.suggested} · {c.confidence[res.result.confidence]}</span>
                <h2 className="font-display text-4xl md:text-5xl mt-2">{t.areaNames[res.result.practiceArea]}</h2>
                <p className="text-ink/70 mt-4 leading-relaxed">{res.result.summary}</p>
              </div>
              <List title={c.documents} items={res.result.documents} />
              <List title={c.questions} items={res.result.questions} />
              <List title={c.deadlines} items={res.result.deadlines} />
              <div className="border-t border-ink/10 pt-8 flex flex-wrap gap-4 items-center justify-between">
                <p className="text-xs text-ink/50 max-w-md">{c.generated}</p>
                <div className="flex gap-3">
                  <button type="button" onClick={() => window.print()} className="px-6 py-3 font-mono text-[10px] uppercase tracking-widest border border-ink/20 hover:border-ochre">{c.print}</button>
                  <Link to={to.contact} className="bg-ink text-parchment px-6 py-3 font-mono text-[10px] uppercase tracking-widest hover:bg-ochre">{c.book}</Link>
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
