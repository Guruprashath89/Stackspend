export default function ReportHeader({
  data,
}: any) {

  return (
    <section className="rounded-3xl border border-white/10 bg-[#081225] p-8">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

        {/* LEFT */}

        <div>

          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            AI Spend Optimization Audit
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white">
            Executive Audit Report
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Operational analysis and optimization recommendations for your current AI tooling ecosystem.
          </p>

        </div>

        {/* RIGHT */}

        <div className="grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">

            <p className="text-sm text-slate-400">
              Prepared For
            </p>

            <p className="mt-2 text-lg font-medium text-white">
              {data.teamInfo?.company ||
                "Unknown Company"}
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">

            <p className="text-sm text-slate-400">
              Team Size
            </p>

            <p className="mt-2 text-lg font-medium text-white">
              {data.teamInfo?.teamSize ||
                "N/A"}
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">

            <p className="text-sm text-slate-400">
              Generated
            </p>

            <p className="mt-2 text-lg font-medium text-white">
              {data.generatedAt}
            </p>

          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-5 py-4">

            <p className="text-sm text-slate-400">
              Audit ID
            </p>

            <p className="mt-2 text-lg font-medium text-cyan-200">
              {data.auditId}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}