export default function Recommendations({ data }: any) {

  return (

    <section className="rounded-3xl border border-white/10 bg-[#081225] p-5 sm:p-8">

      <h2 className="text-xl sm:text-2xl font-semibold">
        Optimization Recommendations
      </h2>

      <div className="mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-5">

        {data.recommendations.map(
          (item: any) => (

            <div
              key={item.title}
              className="
              rounded-2xl
              border
              border-cyan-500/10
              bg-white/[0.02]

              p-4
              sm:p-5
              "
            >

              {/* TOP */}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <h3 className="text-base sm:text-lg font-medium leading-6">
                  {item.title}
                </h3>

                <span className="
                  self-start
                  rounded-full
                  bg-cyan-500/10
                  px-3
                  py-1
                  text-xs
                  sm:text-sm
                  text-cyan-300
                ">
                  {item.priority}
                </span>

              </div>


              {/* BOTTOM */}

              <div className="
                mt-4
                grid
                grid-cols-2
                gap-3

                text-xs
                sm:flex
                sm:items-center
                sm:justify-between
                sm:text-sm

                text-slate-400
              ">

                <div>
                  <p className="text-slate-500">
                    Implementation
                  </p>

                  <p className="mt-1 text-white">
                    {item.difficulty}
                  </p>
                </div>

                <div className="text-right sm:text-left">

                  <p className="text-slate-500">
                    Savings
                  </p>

                  <p className="mt-1 text-cyan-300">
                    ${item.savings}/mo
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