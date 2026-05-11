import { auditTools } from "@/components/audit-data";

function parseSpend(value: string) {
  const parsed = Number(value?.replace(/[^0-9.]/g, ""));

  return Number.isFinite(parsed) ? parsed : 0;
}

export function generateAuditResults(
  selectedTools: string[],
  configs: Record<string, any>
) {
  const selected = auditTools.filter((tool) =>
    selectedTools.includes(tool.id)
  );

  const monthlySpend = selected.reduce((total, tool) => {
    const entered = parseSpend(
      configs[tool.id]?.spend ?? ""
    );

    return total + entered;
  }, 0);

  const hasValidSpend = monthlySpend > 0;

  let wasteRate = hasValidSpend ? 0.08 : 0;

  if (monthlySpend > 500) wasteRate += 0.04;
  if (monthlySpend > 1500) wasteRate += 0.05;
  if (monthlySpend > 5000) wasteRate += 0.07;

  wasteRate += selected.length * 0.025;

  if (
    selected.some((tool) => tool.id === "chatgpt") &&
    selected.some((tool) => tool.id === "claude")
  ) {
    wasteRate += 0.04;
  }

  if (
    selected.some((tool) => tool.id === "gemini") &&
    selected.some((tool) => tool.id === "chatgpt")
  ) {
    wasteRate += 0.03;
  }

  wasteRate = Math.min(wasteRate, 0.42);

  const estimatedWaste = Math.round(
    monthlySpend * wasteRate
  );

  const recoveryRate =
    monthlySpend > 3000
      ? 0.68
      : monthlySpend > 1000
      ? 0.61
      : 0.52;

  const projectedSavings = Math.round(
    estimatedWaste * recoveryRate
  );

  const healthScore = !hasValidSpend
    ? 0
    : Math.max(
        38,
        Math.min(
          96,
          100 - Math.round(wasteRate * 100)
        )
      );

  return {
    monthlySpend,
    estimatedWaste,
    projectedSavings,
    annualOpportunity: projectedSavings * 12,
    healthScore,
    wasteRate,
    hasValidSpend,

    tools: selected.map((tool) => ({
      id: tool.id,
      name: tool.name,
      spend: parseSpend(
        configs[tool.id]?.spend ?? ""
      ),
      efficiency: healthScore,
      waste: Math.round(
        parseSpend(configs[tool.id]?.spend ?? "") *
          wasteRate
      ),
    })),

    recommendations: [
      {
        title:
          "Reduce inactive developer seats",
        savings: Math.round(
          projectedSavings * 0.4
        ),
        difficulty: "Low",
        priority: "High",
      },

      {
        title:
          "Consolidate overlapping AI assistants",
        savings: Math.round(
          projectedSavings * 0.25
        ),
        difficulty: "Medium",
        priority: "Medium",
      },
    ],

    insights: [
      "Potential overlap detected across AI assistants.",
      "Optimization opportunities found in plan allocation.",
    ],
  };
}