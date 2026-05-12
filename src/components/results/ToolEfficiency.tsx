export default function ToolEfficiency({ data }: any) {

  const tools = data.tools || [];

  if (tools.length === 0) {
    return null;
  }

  const mostEfficient =
    [...tools].sort(
      (a, b) =>
        b.efficiency - a.efficiency
    )[0];

  const highestWaste =
    [...tools].sort(
      (a, b) =>
        b.waste - a.waste
    )[0];

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
            {mostEfficient.name}
          </h3>

          <div className="mt-6">

            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-slate-400">
                Efficiency Score
              </span>

              <span className="text-emerald-300">
                {mostEfficient.efficiency}/100
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">

              <div
                className="h-full rounded-full bg-emerald-300"
                style={{
                  width: `${mostEfficient.efficiency}%`,
                }}
              />
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            Strong utilization efficiency with minimal overlap and consistent active usage.
          </p>
        </div>

        {/* Highest Waste Tool */}
{
  tools.length > 1 ? (

    <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

      <p className="text-sm uppercase tracking-[0.2em] text-red-300">
        Highest Waste
      </p>

      <h3 className="mt-4 text-3xl font-semibold">
        {highestWaste.name}
      </h3>

      <div className="mt-6">

        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-slate-400">
            Estimated Waste
          </span>

          <span className="text-red-300">
            ${highestWaste.waste}
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">

          <div
            className="h-full rounded-full bg-red-300"
            style={{
              width: `${Math.min(
                highestWaste.waste,
                100
              )}%`,
            }}
          />
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-slate-400">
        Elevated waste levels detected from overlapping usage or underutilized premium allocation.
      </p>
    </div>

  ) : (

    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
        Optimization Insight
      </p>

      <h3 className="mt-4 text-3xl font-semibold">
        Healthy AI Allocation
      </h3>

      <p className="mt-6 text-sm leading-relaxed text-slate-400">
        Your current stack is focused around a single primary AI workflow. Additional savings opportunities usually emerge when multiple overlapping tools are introduced.
      </p>

      <div className="mt-8 rounded-xl border border-cyan-400/10 bg-[#081225] p-4">

        <p className="text-sm text-slate-400">
          Current Waste Exposure
        </p>

        <p className="mt-2 text-2xl font-semibold text-cyan-200">
          Low
        </p>
      </div>
    </div>
  )
}
</div>
      {/* Optimization Opportunity */}

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Best Optimization Opportunity
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              {data.recommendations?.[0]?.title}
            </h3>

            <p className="mt-3 max-w-2xl text-slate-400">
              Optimization analysis detected consolidation and efficiency improvement opportunities based on your current AI stack allocation.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-[#081225] px-6 py-5 text-center">

            <p className="text-sm text-slate-400">
              Potential Savings
            </p>

            <h4 className="mt-2 text-4xl font-bold text-cyan-200">
              ${data.recommendations?.[0]?.savings}
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