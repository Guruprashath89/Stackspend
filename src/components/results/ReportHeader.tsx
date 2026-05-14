export default function ReportHeader({
  data,
}: any) {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#081225] p-5 sm:p-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

        {/* LEFT */}

        <div>

          <p className="text-[10px] sm:text-sm uppercase tracking-[0.22em] text-cyan-300">
            AI Spend Optimization Audit
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-[-0.04em] text-white">
            Executive Audit Report
          </h1>

          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-slate-400">
            Operational analysis and optimization recommendations for your current AI tooling ecosystem.
          </p>

        </div>


        {/* RIGHT */}

        <div
          className="
          grid
          grid-cols-2
          gap-3
          sm:gap-4
          "
        >

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:px-5 sm:py-4">

            <p className="text-xs sm:text-sm text-slate-400">
              Prepared For
            </p>

            <p className="mt-1 text-sm sm:text-lg font-medium text-white truncate">
              {data.teamInfo?.company ||
                "Unknown Company"}
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:px-5 sm:py-4">

            <p className="text-xs sm:text-sm text-slate-400">
              Team Size
            </p>

            <p className="mt-1 text-sm sm:text-lg font-medium text-white">
              {data.teamInfo?.teamSize ||
                "N/A"}
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:px-5 sm:py-4">

            <p className="text-xs sm:text-sm text-slate-400">
              Generated
            </p>

            <p className="mt-1 text-xs sm:text-lg font-medium text-white line-clamp-2">
              {data.generatedAt}
            </p>

          </div>


          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 sm:px-5 sm:py-4">

            <p className="text-xs sm:text-sm text-slate-400">
              Audit ID
            </p>

            <p className="mt-1 text-sm sm:text-lg font-medium text-cyan-200 truncate">
              {data.auditId}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}