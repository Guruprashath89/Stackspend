export default function IndustryBenchmark({
  data,
}: any) {
    if (!data?.industryBenchmark) {
  return null;
}

  return (
    <section className="rounded-3xl border border-white/10 bg-[#081225] p-8">

      <div className="mb-8">

        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Industry Benchmark
        </p>

        <h2 className="mt-3 text-3xl font-semibold">
          AI Spend Comparison
        </h2>

        <p className="mt-3 max-w-3xl text-slate-400">
          Benchmark analysis based on estimated AI tooling spend for teams of similar size.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <p className="text-sm text-slate-400">
            Typical Spend Range
          </p>

          <h3 className="mt-3 text-3xl font-semibold">
            ${data.industryBenchmark?.low}–$
            {data.industryBenchmark?.high}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Monthly benchmark range
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <p className="text-sm text-slate-400">
            Your Current Spend
          </p>

          <h3 className="mt-3 text-3xl font-semibold">
            ${data.monthlySpend}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Estimated monthly allocation
          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

          <p className="text-sm text-slate-400">
            Benchmark Status
          </p>

          <h3 className="mt-3 text-3xl font-semibold text-cyan-200">
            {data.industryBenchmark?.status}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Compared to similar teams
          </p>

        </div>

      </div>
    </section>
  );
}