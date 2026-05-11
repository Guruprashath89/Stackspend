export default function AIInsights({ data }: any) {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#081225] p-8">
      <h2 className="text-2xl font-semibold">AI Insights</h2>

      <div className="mt-6 flex flex-col gap-4">
        {data.insights.map((insight: string) => (
          <div
            key={insight}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-slate-300"
          >
            {insight}
          </div>
        ))}
      </div>
    </section>
  );
}