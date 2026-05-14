export default function HeroSummary({ data }: any) {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#081225] p-5 sm:p-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT */}

        <div>

          <p className="mb-2 text-[10px] sm:text-sm uppercase tracking-[0.25em] text-cyan-300">
            Audit Complete
          </p>

          <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight">
            Potential AI Savings Identified
          </h1>

          <p className="mt-3 max-w-2xl text-sm sm:text-lg text-slate-400 leading-6">
            Based on overlapping subscriptions, inactive seats, and plan inefficiencies.
          </p>

        </div>


        {/* RIGHT */}

        <div
          className="
          rounded-3xl
          border
          border-cyan-500/20
          bg-cyan-500/10

          p-5
          sm:p-8

          w-full
          lg:w-auto
          "
        >

          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-cyan-300">
            Estimated Savings
          </p>

          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-200">
            ${data.projectedSavings}
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            per month
          </p>

        </div>

      </div>

    </section>
  );
}