export default function ToolEfficiency({ data }: any) {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#081225] p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">
          Tool Efficiency Breakdown
        </h2>

        <p className="mt-2 text-slate-400">
          Identify the strongest performing tools and the biggest optimization opportunities.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Most Efficient Tool */}
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
            Most Efficient
          </p>

          <h3 className="mt-4 text-3xl font-semibold">
            ChatGPT
          </h3>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-slate-400">
                Efficiency Score
              </span>

              <span className="text-emerald-300">
                91/100
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[91%] rounded-full bg-emerald-300" />
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            Strong utilization efficiency with minimal overlap and consistent active usage.
          </p>
        </div>

        {/* Highest Waste Tool */}
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-red-300">
            Highest Waste
          </p>

          <h3 className="mt-4 text-3xl font-semibold">
            Cursor
          </h3>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-slate-400">
                Estimated Waste
              </span>

              <span className="text-red-300">
                $585
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[68%] rounded-full bg-red-300" />
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            Elevated developer seat allocation suggests inactive licenses or over-provisioned plans.
          </p>
        </div>
      </div>

      {/* Optimization Opportunity */}
      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Best Optimization Opportunity
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Consolidate overlapping AI assistants
            </h3>

            <p className="mt-3 max-w-2xl text-slate-400">
              Your current stack includes multiple research-oriented AI assistants with overlapping functionality. Standardizing workflows could significantly reduce operational redundancy.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-[#081225] px-6 py-5 text-center">
            <p className="text-sm text-slate-400">
              Potential Savings
            </p>

            <h4 className="mt-2 text-4xl font-bold text-cyan-200">
              $110
            </h4>

            <p className="mt-1 text-sm text-slate-500">
              per month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}