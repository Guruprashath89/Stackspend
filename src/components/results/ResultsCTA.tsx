import Link from "next/link";

export default function ResultsCTA() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#081225] p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            Next Actions
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight">
            Ready to optimize your AI stack?
          </h2>

          <p className="mt-4 text-lg text-slate-400">
            Export your audit report, share results
            with your team, or rerun the audit with
            updated spend information.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button className="rounded-xl border border-white/10 px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.03]">
            Export PDF
          </button>

          <button className="rounded-xl border border-white/10 px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.03]">
            Share Report
          </button>

          <Link
            href="/audit"
            className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-slate-950 transition-all duration-300 hover:bg-cyan-100"
          >
            Re-run Audit
          </Link>
        </div>
      </div>
    </section>
  );
}