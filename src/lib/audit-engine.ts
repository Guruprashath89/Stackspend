export function generateAuditResults() {
  return {
    monthlySpend: 3000,
    projectedSavings: 357,
    estimatedWaste: 585,
    annualOpportunity: 4284,
    healthScore: 81,
    optimizationConfidence: "High",

    tools: [
      {
        name: "Cursor",
        spend: 3000,
        waste: 585,
        efficiency: 78,
      },
      {
        name: "ChatGPT",
        spend: 420,
        waste: 82,
        efficiency: 88,
      },
    ],

    recommendations: [
      {
        title: "Reduce inactive developer seats",
        savings: 140,
        difficulty: "Low",
        priority: "High",
      },
      {
        title: "Consolidate overlapping AI assistants",
        savings: 110,
        difficulty: "Medium",
        priority: "Medium",
      },
    ],

    insights: [
      "Cursor spend appears elevated relative to active developer count.",
      "Research workflow overlap detected between AI assistants.",
    ],
  };
}