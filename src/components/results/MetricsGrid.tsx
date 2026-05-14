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

export default function MetricsGrid({
  data,
}: any) {

  return (

    <section
      className="
      grid
      grid-cols-2
      gap-3

      sm:grid-cols-2
      xl:grid-cols-4
      xl:gap-6
      "
    >

      {metrics.map(
        (metric) => (

          <div
            key={metric.key}
            className="
            rounded-2xl
            border
            border-white/10
            bg-[#081225]

            p-4
            sm:p-6
            "
          >

            <p className="text-xs sm:text-sm text-slate-400">
              {metric.label}
            </p>

            <h3 className="mt-2 sm:mt-4 text-2xl sm:text-4xl font-semibold">

              ${data[metric.key]}

            </h3>

          </div>

        )
      )}

    </section>

  );
}