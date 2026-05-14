export default function SpendBreakdown({ data }: any) {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#081225] p-5 sm:p-8">

      <div className="mb-6 sm:mb-8">

        <h2 className="text-xl sm:text-2xl font-semibold">
          Spend Breakdown
        </h2>

        <p className="mt-2 text-sm sm:text-base text-slate-400">
          Tool-level efficiency and optimization analysis.
        </p>

      </div>

      <div className="flex flex-col gap-4 sm:gap-6">

        {data.tools.map((tool: any) => (

          <div
            key={tool.name}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-6"
          >

            {/* TOP */}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <h3 className="text-lg sm:text-xl font-medium">
                  {tool.name}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Efficiency Score: {tool.efficiency}/100
                </p>

              </div>

              <div className="sm:text-right">

                <p className="text-xs sm:text-sm text-slate-400">
                  Monthly Spend
                </p>

                <h4 className="mt-1 text-xl sm:text-2xl font-semibold">
                  ${tool.spend}
                </h4>

              </div>

            </div>


            {/* BAR */}

            <div className="mt-5">

              <div className="mb-2 flex items-center justify-between text-xs sm:text-sm">

                <span className="text-slate-400">
                  Optimization Potential
                </span>

                <span>
                  ${tool.waste}
                </span>

              </div>

              <div className="h-2 sm:h-3 overflow-hidden rounded-full bg-white/10">

                <div
                  className="h-full rounded-full bg-cyan-300"
                  style={{
                    width: `${tool.efficiency}%`,
                  }}
                />

              </div>

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}