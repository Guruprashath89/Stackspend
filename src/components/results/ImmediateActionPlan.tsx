export default function ImmediateActionPlan({
  data,
}: any) {

  if (!data?.actionPlan) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-cyan-500/10 bg-[#081225] p-8">

      <div className="mb-8">

        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Immediate Action Plan
        </p>

        <h2 className="mt-3 text-3xl font-semibold">
          Recommended Operational Actions
        </h2>

        <p className="mt-3 max-w-3xl text-slate-400">
          High-priority operational recommendations generated from your current AI tooling allocation.
        </p>

      </div>

      <div className="space-y-5">

        {data.actionPlan.map(
          (
            action: any,
            index: number
          ) => (

            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-semibold text-cyan-200">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {action.title}
                  </h3>

                  <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                    {action.impact}
                  </p>

                </div>

                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-6 py-5 text-center">

                  <p className="text-sm text-slate-400">
                    Potential Savings
                  </p>

                  <h4 className="mt-2 text-3xl font-bold text-cyan-200">
                    ${action.savings}
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    per month
                  </p>

                </div>

              </div>

            </div>
          )
        )}

      </div>
    </section>
  );
}