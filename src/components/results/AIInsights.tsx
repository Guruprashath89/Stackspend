export default function AIInsights({ data }: any) {

  return (

    <section className="rounded-3xl border border-white/10 bg-[#081225] p-5 sm:p-8">

      <h2 className="text-xl sm:text-2xl font-semibold">
        AI Insights
      </h2>

      <div className="mt-5 sm:mt-6 flex flex-col gap-3 sm:gap-4">

        {data.insights.map(
          (insight: string) => (

            <div
              key={insight}
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]

              p-4
              sm:p-5
              "
            >

              <div className="flex items-start gap-3">

                <div
                  className="
                  mt-1
                  h-2
                  w-2
                  shrink-0
                  rounded-full
                  bg-cyan-300
                  "
                />

                <p
                  className="
                  text-sm
                  sm:text-base
                  leading-6
                  sm:leading-7
                  text-slate-300
                  "
                >
                  {insight}
                </p>

              </div>

            </div>

          )
        )}

      </div>

    </section>

  );
}