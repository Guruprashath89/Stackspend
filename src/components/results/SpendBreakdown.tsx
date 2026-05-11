export default function SpendBreakdown({ data }: any) {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#081225] p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Spend Breakdown</h2>
        <p className="mt-2 text-slate-400">
          Tool-level efficiency and optimization analysis.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {data.tools.map((tool: any) => (
          <div
            key={tool.name}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-medium">{tool.name}</h3>
                <p className="mt-2 text-slate-400">
                  Efficiency Score: {tool.efficiency}/100
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-slate-400">Monthly Spend</p>
                <h4 className="mt-1 text-2xl font-semibold">
                  ${tool.spend}
                </h4>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-slate-400">Optimization Potential</span>
                <span>${tool.waste}</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-cyan-300"
                  style={{ width: `${tool.efficiency}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}