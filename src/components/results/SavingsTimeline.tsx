export default function SavingsTimeline({ data }: any) {
  const optimizedSpend =
    data.monthlySpend - data.projectedSavings;

  return (
    <section className="rounded-3xl border border-white/10 bg-[#081225] p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">
          Savings Opportunity Timeline
        </h2>

        <p className="mt-2 text-slate-400">
          Projected reduction in AI operational costs after optimization.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Current Spend */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-slate-400">
              Current Monthly Spend
            </span>

            <span className="text-lg font-medium">
              ${data.monthlySpend}
            </span>
          </div>

          <div className="h-5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-full rounded-full bg-red-400" />
          </div>
        </div>

        {/* Optimized Spend */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-slate-400">
              Optimized Monthly Spend
            </span>

            <span className="text-lg font-medium text-cyan-200">
              ${optimizedSpend}
            </span>
          </div>

          <div className="h-5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[72%] rounded-full bg-cyan-300" />
          </div>
        </div>

        {/* Annual Savings */}
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Annual Savings Opportunity
              </p>

              <h3 className="mt-3 text-4xl font-bold text-cyan-100">
                ${data.annualOpportunity}
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#020817] px-5 py-4">
              <p className="text-sm text-slate-400">
                Optimization Potential
              </p>

              <p className="mt-2 text-2xl font-semibold text-cyan-200">
                {Math.round(
                  (data.projectedSavings /
                    data.monthlySpend) *
                    100
                )}
                %
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}