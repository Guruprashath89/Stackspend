import Link from "next/link";

type ResultsCTAProps = {
  onExportPDF: () => void;
};

export default function ResultsCTA({
  onExportPDF,
}: ResultsCTAProps) {

  return (

    <section className="rounded-3xl border border-white/10 bg-[#081225] p-5 sm:p-8">

      <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT */}

        <div className="max-w-2xl">

          <p className="text-[10px] sm:text-sm uppercase tracking-[0.25em] text-cyan-300">
            Next Actions
          </p>

          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-semibold leading-tight">
            Ready to optimize your AI stack?
          </h2>

          <p className="mt-3 text-sm sm:text-lg text-slate-400 leading-6">
            Export your audit report, rerun the audit, or continue refining your AI spending strategy.
          </p>

        </div>


        {/* BUTTONS */}

        <div className="
          grid
          grid-cols-1
          gap-3

          sm:flex
          sm:flex-wrap
        ">

          <button
            onClick={onExportPDF}
            className="
            w-full
            sm:w-auto

            rounded-xl
            border
            border-white/10

            px-5
            py-3

            text-sm
            font-medium

            transition-all
            duration-300

            hover:border-cyan-400/40
            hover:bg-white/[0.03]
            "
          >
            Export PDF
          </button>


          <Link
            href="/audit"
            className="
            w-full
            sm:w-auto

            rounded-xl
            bg-white

            px-5
            py-3

            text-center
            text-sm
            font-medium

            text-slate-950

            transition-all
            duration-300

            hover:bg-cyan-100
            "
          >
            Re-run Audit
          </Link>

        </div>

      </div>

    </section>
  );
}