import Link from "next/link";

export default function ResultsNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020817]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div>
          <h1 className="text-xl font-semibold">StackSpend</h1>
          <p className="text-sm text-slate-400">Audit Results</p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/audit"
            className="rounded-xl border border-white/10 px-4 py-2 text-sm transition hover:border-cyan-400/40"
          >
            Back to Audit
          </Link>

          <button className="rounded-xl bg-white px-5 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-100">
            Share Report
          </button>
        </div>
      </div>
    </header>
  );
}