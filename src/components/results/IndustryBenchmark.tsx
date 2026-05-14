export default function IndustryBenchmark({
  data,
}: any) {

  if (!data?.industryBenchmark) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-[#081225] p-5 sm:p-8">

      <div className="mb-6 sm:mb-8">

        <p className="text-[10px] sm:text-sm uppercase tracking-[0.2em] text-cyan-300">
          Industry Benchmark
        </p>

        <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-semibold">
          AI Spend Comparison
        </h2>

        <p className="mt-2 text-sm sm:text-base max-w-3xl text-slate-400">
          Benchmark analysis based on estimated AI tooling spend for teams of similar size.
        </p>

      </div>


      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-6">

        {/* CARD 1 */}

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">

          <p className="text-xs sm:text-sm text-slate-400">
            Typical Spend
          </p>

          <h3 className="mt-2 text-xl sm:text-3xl font-semibold">
            ${data.industryBenchmark?.low}
            –
            ${data.industryBenchmark?.high}
          </h3>

          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Monthly range
          </p>

        </div>


        {/* CARD 2 */}

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">

          <p className="text-xs sm:text-sm text-slate-400">
            Your Spend
          </p>

          <h3 className="mt-2 text-xl sm:text-3xl font-semibold">
            ${data.monthlySpend}
          </h3>

          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Monthly allocation
          </p>

        </div>


        {/* CARD 3 */}

        <div className="
          col-span-2
          lg:col-span-1
          rounded-2xl
          border
          border-cyan-500/20
          bg-cyan-500/5
          p-4
          sm:p-6
        ">

          <p className="text-xs sm:text-sm text-slate-400">
            Benchmark Status
          </p>

          <h3 className="mt-2 text-xl sm:text-3xl font-semibold text-cyan-200">
            {data.industryBenchmark?.status}
          </h3>

          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Compared to similar teams
          </p>

        </div>

      </div>

    </section>
  );
}