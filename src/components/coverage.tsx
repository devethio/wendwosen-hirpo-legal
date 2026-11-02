import { useLocale } from "@/lib/i18n";

// "Regional practice coverage" table from the firm brochure. On phones each row stacks.
export function Coverage() {
  const { t } = useLocale();
  const c = t.coverage;
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-ink/10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 reveal">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ochre mb-4 block">— {c.eyebrow}</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-balance">{c.title}</h2>
        </div>
        <div className="lg:col-span-8 reveal">
          <table className="w-full text-left border-collapse">
            <thead className="hidden md:table-header-group">
              <tr className="bg-ink text-parchment">
                {c.headers.map((h) => (
                  <th key={h} scope="col" className="px-5 py-4 font-mono text-[10px] uppercase tracking-widest font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.rows.map(([service, jurisdiction, scope]) => (
                <tr key={service} className="block md:table-row border-b border-ink/10 py-5 md:py-0 hover:bg-ochre/5 transition-colors">
                  <th scope="row" className="block md:table-cell md:px-5 md:py-5 font-display text-xl md:text-lg font-normal">{service}</th>
                  <td className="block md:table-cell md:px-5 md:py-5 text-sm text-ink/70 mt-1 md:mt-0">
                    <span className="md:hidden font-mono text-[10px] uppercase tracking-widest text-ochre mr-2">{c.headers[1]}:</span>{jurisdiction}
                  </td>
                  <td className="block md:table-cell md:px-5 md:py-5 text-sm text-ink/70">
                    <span className="md:hidden font-mono text-[10px] uppercase tracking-widest text-ochre mr-2">{c.headers[2]}:</span>{scope}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
