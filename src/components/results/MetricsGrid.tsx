const metrics = [
  {
    label: "Monthly Spend",
    key: "monthlySpend",
  },
  {
    label: "Estimated Waste",
    key: "estimatedWaste",
  },
  {
    label: "Projected Savings",
    key: "projectedSavings",
  },
  {
    label: "Annual Opportunity",
    key: "annualOpportunity",
  },
];

export default function MetricsGrid({ data }: any) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.key}
          className="rounded-2xl border border-white/10 bg-[#081225] p-6"
        >
          <p className="text-sm text-slate-400">{metric.label}</p>

          <h3 className="mt-4 text-4xl font-semibold">
            ${data[metric.key]}
          </h3>
        </div>
      ))}
    </section>
  );
}