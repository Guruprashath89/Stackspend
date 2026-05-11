export default function HeroSummary({ data }: any) {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#081225] p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Audit Complete
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight lg:text-6xl">
            Potential AI Savings Identified
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Based on overlapping subscriptions, inactive seats, and plan inefficiencies.
          </p>
        </div>

        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            Estimated Savings
          </p>

          <h2 className="mt-4 text-6xl font-bold text-cyan-200">
            ${data.projectedSavings}
          </h2>

          <p className="mt-2 text-slate-400">per month</p>
        </div>
      </div>
    </section>
  );
}