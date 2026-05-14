export default function ExecutiveSummary({ data }: any) {

  return (

    <section className="rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-5 sm:p-8">

      <div className="max-w-5xl">

        <p className="text-[10px] sm:text-sm uppercase tracking-[0.25em] text-cyan-300">
          Executive Summary
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">
          Your AI stack shows moderate optimization opportunities.
        </h2>


        <p className="mt-4 text-sm sm:text-lg leading-6 sm:leading-relaxed text-slate-300">

          StackSpend identified moderate overspending across your AI tooling ecosystem driven primarily by overlapping assistant workflows, elevated developer tooling allocation, and underutilized premium plans.

        </p>


        <p className="mt-4 text-sm sm:text-lg leading-6 sm:leading-relaxed text-slate-400">

          Implementing the recommended optimizations could significantly reduce annual operational costs while preserving current productivity and workflow efficiency.

        </p>


        {/* KPI CARDS */}

        <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">

          <div className="rounded-2xl border border-white/10 bg-[#081225] p-4 sm:px-5 sm:py-4">

            <p className="text-xs sm:text-sm text-slate-400">
              Confidence
            </p>

            <p className="mt-1 text-lg sm:text-xl font-semibold text-cyan-200">
              High
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-[#081225] p-4 sm:px-5 sm:py-4">

            <p className="text-xs sm:text-sm text-slate-400">
              Savings
            </p>

            <p className="mt-1 text-lg sm:text-xl font-semibold text-cyan-200">
              {`$${data.projectedSavings}/mo`}
            </p>

          </div>


          <div className="
            col-span-2
            sm:col-span-1
            rounded-2xl
            border
            border-white/10
            bg-[#081225]
            p-4
            sm:px-5
            sm:py-4
          ">

            <p className="text-xs sm:text-sm text-slate-400">
              Spend Health
            </p>

            <p className="mt-1 text-lg sm:text-xl font-semibold text-cyan-200">

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