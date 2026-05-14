export default function SavingsTimeline({ data }: any) {

  const optimizedSpend =
    data.monthlySpend -
    data.projectedSavings;

  return (

    <section className="rounded-3xl border border-white/10 bg-[#081225] p-5 sm:p-8">

      <div className="mb-6 sm:mb-8">

        <h2 className="text-xl sm:text-2xl font-semibold">
          Savings Opportunity Timeline
        </h2>

        <p className="mt-2 text-sm sm:text-base text-slate-400">
          Projected reduction in AI operational costs after optimization.
        </p>

      </div>


      <div className="flex flex-col gap-5 sm:gap-8">

        {/* CURRENT */}

        <div>

          <div className="mb-2 flex items-center justify-between">

            <span className="text-xs sm:text-sm text-slate-400">
              Current Monthly Spend
            </span>

            <span className="text-base sm:text-lg font-medium">
              ${data.monthlySpend}
            </span>

          </div>

          <div className="h-3 sm:h-5 overflow-hidden rounded-full bg-white/10">

            <div className="h-full w-full rounded-full bg-red-400" />

          </div>

        </div>


        {/* OPTIMIZED */}

        <div>

          <div className="mb-2 flex items-center justify-between">

            <span className="text-xs sm:text-sm text-slate-400">
              Optimized Monthly Spend
            </span>

            <span className="text-base sm:text-lg font-medium text-cyan-200">
              ${optimizedSpend}
            </span>

          </div>

          <div className="h-3 sm:h-5 overflow-hidden rounded-full bg-white/10">

            <div className="h-full w-[72%] rounded-full bg-cyan-300" />

          </div>

        </div>


        {/* ANNUAL CARD */}

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 sm:p-6">

          <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-cyan-300">
                Annual Savings Opportunity
              </p>

              <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-cyan-100">
                ${data.annualOpportunity}
              </h3>

            </div>


            <div className="
              rounded-2xl
              border
              border-white/10
              bg-[#020817]

              p-4
              sm:px-5
              sm:py-4

              w-full
              lg:w-auto
            ">

              <p className="text-xs sm:text-sm text-slate-400">
                Optimization Potential
              </p>

              <p className="mt-1 text-xl sm:text-2xl font-semibold text-cyan-200">

                {Math.round(
                  (
                    data.projectedSavings /
                    data.monthlySpend
                  ) * 100
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