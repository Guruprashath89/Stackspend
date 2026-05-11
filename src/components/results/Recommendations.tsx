export default function Recommendations({ data }: any) {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#081225] p-8">
      <h2 className="text-2xl font-semibold">
        Optimization Recommendations
      </h2>

      <div className="mt-8 flex flex-col gap-5">
        {data.recommendations.map((item: any) => (
          <div
            key={item.title}
            className="rounded-2xl border border-cyan-500/10 bg-white/[0.02] p-5"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                {item.priority}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
              <span>Implementation: {item.difficulty}</span>
              <span>Save ${item.savings}/mo</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}