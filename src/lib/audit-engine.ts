import { auditTools } from "@/components/audit-data";

function parseSpend(value: string) {
  const parsed = Number(
    value?.replace(/[^0-9.]/g, "")
  );

  return Number.isFinite(parsed)
    ? parsed
    : 0;
}
const recommendations: any[] = [];


const toolCategories: Record<string, string> = {
  chatgpt: "assistant",
  claude: "assistant",
  gemini: "assistant",
  grok: "assistant",

  cursor: "developer",
  copilot: "developer",

  "openai-api": "api",
  "anthropic-api": "api",
};

export function generateAuditResults(
  selectedTools: string[],
  configs: Record<string, any>,
  teamInfo: any
) {
  const selected = auditTools.filter(
    (tool) =>
      selectedTools.includes(tool.id)
  );

  const tools = selected.map((tool) => {
    const spend = parseSpend(
      configs[tool.id]?.spend ?? ""
    );

    return {
      ...tool,
      spend,
      seats: Number(
        configs[tool.id]?.seats || 1
      ),
      usage:
        configs[tool.id]?.usage ||
        "general",
    };
  });

  const monthlySpend = tools.reduce(
    (sum, tool) => sum + tool.spend,
    0
  );

  const hasValidSpend =
    monthlySpend > 0;

  if (!hasValidSpend) {
    return {
      monthlySpend: 0,
      estimatedWaste: 0,
      projectedSavings: 0,
      annualOpportunity: 0,
      healthScore: 0,
      wasteRate: 0,
      hasValidSpend: false,
      tools: [],
      recommendations: [],
      insights: [],
    };
  }

  let wasteRate = 0.06;

  const insights: string[] = [];
  const recommendations: any[] = [];
  const actionPlan: any[] = [];

  /*
    -----------------------------------
    SPEND SCALE ANALYSIS
    -----------------------------------
  */

  if (monthlySpend > 500) {
    wasteRate += 0.03;
  }

  if (monthlySpend > 1500) {
    wasteRate += 0.05;

    insights.push(
      "High recurring AI spend detected across the organization."
    );
  }

  if (monthlySpend > 5000) {
    wasteRate += 0.07;

    insights.push(
      "Enterprise-scale AI allocation may contain underutilized subscriptions."
    );
  }

  /*
    -----------------------------------
    TOOL SPRAWL ANALYSIS
    -----------------------------------
  */

  if (tools.length >= 4) {
    wasteRate += 0.05;

    insights.push(
      "Multiple overlapping AI tools detected across similar workflows."
    );

    recommendations.push({
      title:
        "Consolidate overlapping AI platforms",
      savings: Math.round(
        monthlySpend * 0.08
      ),
      difficulty: "Medium",
      priority: "High",
    });
  }

  /*
    -----------------------------------
    CATEGORY OVERLAP ANALYSIS
    -----------------------------------
  */

  const categoriesUsed =
    tools.map(
      (tool) =>
        toolCategories[tool.id]
    );

  const assistantCount =
    categoriesUsed.filter(
      (cat) => cat === "assistant"
    ).length;

  if (assistantCount >= 3) {
    wasteRate += 0.06;

    insights.push(
      "Research and conversational assistant overlap detected."
    );

    recommendations.push({
      title:
        "Reduce assistant duplication",
      savings: Math.round(
        monthlySpend * 0.06
      ),
      difficulty: "Low",
      priority: "High",
    });
  }

  actionPlan.push({
  title:
    "Consolidate overlapping AI workflows",

  impact:
    "Reduce duplicated assistant usage across teams.",

  savings: Math.round(
    monthlySpend * 0.08
  ),
});



  /*
    -----------------------------------
    DEVELOPER TOOL ANALYSIS
    -----------------------------------
  */

  const developerTools =
    tools.filter(
      (tool) =>
        toolCategories[tool.id] ===
        "developer"
    );

  developerTools.forEach((tool) => {
    const spendPerSeat =
      tool.spend / tool.seats;

    if (spendPerSeat > 60) {
      wasteRate += 0.03;

      insights.push(
        `${tool.name} allocation appears elevated relative to active developer usage.`
      );

      recommendations.push({
        title:
          `Optimize ${tool.name} seat allocation`,
        savings: Math.round(
          tool.spend * 0.12
        ),
        difficulty: "Low",
        priority: "Medium",
      });
    }
    actionPlan.push({
  title:
    `Review ${tool.name} seat utilization`,

  impact:
    "Potential inactive or underutilized developer licenses detected.",

  savings: Math.round(
    tool.spend * 0.12
  ),
});

  });

  
  /*
    -----------------------------------
    API + CHAT OVERLAP
    -----------------------------------
  */

  const hasAPI =
    selectedTools.includes(
      "openai-api"
    ) ||
    selectedTools.includes(
      "anthropic-api"
    );

  const hasChatAssistants =
    assistantCount >= 2;

  if (hasAPI && hasChatAssistants) {
    wasteRate += 0.04;

    insights.push(
      "Parallel API and subscription workflows may contain duplicated operational usage."
    );
  }

  /*
    -----------------------------------
    LIMIT WASTE RATE
    -----------------------------------
  */

  wasteRate = Math.min(
    wasteRate,
    0.42
  );

  const estimatedWaste =
    Math.round(
      monthlySpend * wasteRate
    );

  const projectedSavings =
    Math.round(
      estimatedWaste * 0.58
    );

  const healthScore =
    Math.max(
      42,
      Math.min(
        96,
        100 -
          Math.round(
            wasteRate * 100
          )
      )
    );

  /*
    -----------------------------------
    TOOL EFFICIENCY
    -----------------------------------
  */

  const processedTools =
    tools.map((tool) => {
      let efficiency =
        healthScore;

      if (
        toolCategories[tool.id] ===
        "assistant"
      ) {
        efficiency -= 2;
      }

      if (
        toolCategories[tool.id] ===
        "developer"
      ) {
        efficiency -= 5;
      }

      efficiency = Math.max(
        45,
        Math.min(96, efficiency)
      );

      return {
        id: tool.id,
        name: tool.name,
        spend: tool.spend,

        waste: Math.round(
          tool.spend * wasteRate
        ),

        efficiency,
      };
    });

  /*
    -----------------------------------
    FALLBACK RECOMMENDATIONS
    -----------------------------------
  */

  if (
    recommendations.length === 0
  ) {
    recommendations.push({
      title:
        "Review AI plan allocation",
      savings: Math.round(
        projectedSavings * 0.4
      ),
      difficulty: "Low",
      priority: "Medium",
    });
  }

  let benchmarkLow = 0;
let benchmarkHigh = 0;

const teamSize = Number(
  teamInfo?.teamSize || 0
);

if (teamSize <= 5) {
  benchmarkLow = 50;
  benchmarkHigh = 120;
}

else if (teamSize <= 20) {
  benchmarkLow = 120;
  benchmarkHigh = 400;
}

else if (teamSize <= 50) {
  benchmarkLow = 400;
  benchmarkHigh = 1200;
}

else {
  benchmarkLow = 1200;
  benchmarkHigh = 5000;
}

let benchmarkStatus =
  "Within Benchmark";

if (monthlySpend > benchmarkHigh) {
  benchmarkStatus =
    "Above Benchmark";
}

if (monthlySpend < benchmarkLow) {
  benchmarkStatus =
    "Below Benchmark";
}

  return {
    financialRisks: [
  ...(selected.some(
    (tool) =>
      tool.id === "chatgpt"
  ) &&
  selected.some(
    (tool) =>
      tool.id === "claude"
  )
    ? [
        "Overlapping AI assistant subscriptions may be increasing operational redundancy.",
      ]
    : []),

  ...(selected.some(
    (tool) =>
      tool.id === "cursor"
  )
    ? [
        "Premium developer tooling allocation may contain inactive or underutilized seats.",
      ]
    : []),

  ...(monthlySpend > 500
    ? [
        "Current AI spend exceeds recommended efficiency threshold for teams of similar size.",
      ]
    : []),

  ...(selected.length >= 4
    ? [
        "Large AI tooling stacks can introduce workflow fragmentation and duplicated functionality.",
      ]
    : []),
],

industryBenchmark: {
  low: benchmarkLow,
  high: benchmarkHigh,
  status: benchmarkStatus,
},
    actionPlan,
    monthlySpend,
    estimatedWaste,
    projectedSavings,
    annualOpportunity:
      projectedSavings * 12,
    healthScore,
    wasteRate,
    hasValidSpend,

    tools: processedTools,

    recommendations,

    insights,
    teamInfo
  };
}