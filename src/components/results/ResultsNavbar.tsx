import Link from "next/link";

type ResultsNavbarProps = {
  onExportPDF: () => void;
};

export default function ResultsNavbar({
  onExportPDF,
}: ResultsNavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020817]/80 backdrop-blur-xl">

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* LEFT */}

          <div>
            <h1 className="text-xl font-semibold text-white">
              StackSpend
            </h1>

            <p className="text-sm text-slate-400">
              Audit Results
            </p>
          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-3 sm:flex">

            <Link
              href="/audit"
              className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-medium transition hover:border-cyan-400/40"
            >
              Back to Audit
            </Link>

            <button
              onClick={onExportPDF}
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/5 px-4 py-3 text-sm font-medium transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/10"
            >
              Export PDF
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}