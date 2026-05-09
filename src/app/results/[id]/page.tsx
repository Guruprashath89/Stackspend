import Link from "next/link";

export default async function ResultsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-[#050812] px-4 py-16 text-white sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-100">
          Audit results
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em]">
          Results page placeholder
        </h1>
        <p className="mt-4 leading-7 text-slate-400">
          Audit report <span className="text-slate-200">{id}</span> will render
          here once report generation is connected.
        </p>
        <Link
          className="mt-8 inline-flex h-11 items-center rounded-xl bg-white px-5 text-sm font-medium text-slate-950 transition hover:bg-cyan-100"
          href="/audit"
        >
          Back to audit
        </Link>
      </section>
    </main>
  );
}

