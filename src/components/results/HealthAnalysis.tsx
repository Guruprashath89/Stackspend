export default function HealthAnalysis({ data }: any) {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#081225] p-8">
      <h2 className="text-2xl font-semibold">Spend Health Analysis</h2>

      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="flex h-48 w-48 items-center justify-center rounded-full border-[12px] border-cyan-300 text-5xl font-bold">
          {data.healthScore}
        </div>

        <p className="mt-6 text-lg text-cyan-300">Moderate Waste</p>
      </div>
    </section>
  );
}