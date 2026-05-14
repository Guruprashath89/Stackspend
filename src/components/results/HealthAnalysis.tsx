export default function HealthAnalysis({ data }: any) {

  return (

    <section className="rounded-3xl border border-white/10 bg-[#081225] p-5 sm:p-8">

      <h2 className="text-xl sm:text-2xl font-semibold">
        Spend Health Analysis
      </h2>

      <div className="mt-6 sm:mt-10 flex flex-col items-center justify-center">

        <div
          className="
          flex
          h-32
          w-32

          sm:h-48
          sm:w-48

          items-center
          justify-center

          rounded-full

          border-[8px]
          sm:border-[12px]

          border-cyan-300

          text-3xl
          sm:text-5xl

          font-bold
          "
        >
          {data.healthScore}
        </div>

        <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-cyan-300">
          Moderate Waste
        </p>

      </div>

    </section>

  );
}