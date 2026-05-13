export default function FinancialRisks({
  data,
}: any) {

  return (
    <section className="rounded-3xl border border-red-500/10 bg-[#081225] p-8">

      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-red-300">
          Critical Financial Risks
        </p>

        <h2 className="mt-3 text-3xl font-semibold">
          Key Risk Areas Identified
        </h2>

        <p className="mt-3 max-w-3xl text-slate-400">
          The following operational and financial risks were detected based on your current AI tooling allocation.
        </p>
      </div>

      <div className="space-y-4">

        {data.financialRisks?.length > 0 ? (

          data.financialRisks.map(
            (
              risk: string,
              index: number
            ) => (

              <div
                key={index}
                className="rounded-2xl border border-red-500/10 bg-red-500/5 px-5 py-4"
              >
                <div className="flex items-start gap-3">

                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-red-300" />

                  <p className="leading-7 text-slate-200">
                    {risk}
                  </p>

                </div>
              </div>
            )
          )

        ) : (

          <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 px-5 py-4">

            <p className="text-emerald-200">
              No major financial risks detected in the current AI stack configuration.
            </p>

          </div>

        )}

      </div>
    </section>
  );
}