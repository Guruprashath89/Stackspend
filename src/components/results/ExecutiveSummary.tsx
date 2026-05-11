export default function ExecutiveSummary({ data }: any) {
  return (
    <section className="rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-8">
      <div className="max-w-5xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          Executive Summary
        </p>

        <h2 className="mt-4 text-4xl font-semibold leading-tight">
          Your AI stack shows moderate optimization opportunities.
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-slate-300">
          StackSpend identified moderate overspending
          across your AI tooling ecosystem driven
          primarily by overlapping assistant workflows,
          elevated developer tooling allocation, and
          underutilized premium plans.
        </p>

        <p className="mt-5 text-lg leading-relaxed text-slate-400">
          Implementing the recommended optimizations
          could significantly reduce annual operational
          costs while preserving current team
          productivity and workflow efficiency.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <div className="rounded-2xl border border-white/10 bg-[#081225] px-5 py-4">
            <p className="text-sm text-slate-400">
              Optimization Confidence
            </p>

            <p className="mt-2 text-xl font-semibold text-cyan-200">
              High
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#081225] px-5 py-4">
            <p className="text-sm text-slate-400">
              Estimated Savings
            </p>

            <p className="mt-2 text-xl font-semibold text-cyan-200">
           {`$${data.projectedSavings}/month`}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#081225] px-5 py-4">
            <p className="text-sm text-slate-400">
              Spend Health
            </p>

            <p className="mt-2 text-xl font-semibold text-cyan-200">
             {data.healthScore > 85
  ? "Healthy Spend"
  : data.healthScore > 70
  ? "Moderate Waste"
  : "High Waste"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}