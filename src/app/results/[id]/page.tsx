"use client";
import ResultsNavbar from "@/components/results/ResultsNavbar";
import HeroSummary from "@/components/results/HeroSummary";
import MetricsGrid from "@/components/results/MetricsGrid";
import SpendBreakdown from "@/components/results/SpendBreakdown";
import Recommendations from "@/components/results/Recommendations";
import AIInsights from "@/components/results/AIInsights";
import HealthAnalysis from "@/components/results/HealthAnalysis";
import ToolEfficiency from "@/components/results/ToolEfficiency";
import SavingsTimeline from "@/components/results/SavingsTimeline";
import ExecutiveSummary from "@/components/results/ExecutiveSummary";
import ResultsCTA from "@/components/results/ResultsCTA";
import { useEffect, useState } from "react";




export default function ResultsPage() {
  
  const [auditData, setAuditData] = useState<any>(null);
  useEffect(() => {
  const storedAudit = localStorage.getItem(
    "stackspend-audit"
  );

  if (storedAudit) {
    const parsed = JSON.parse(storedAudit);

    const selectedTools =
      parsed.selectedTools || [];

    const configs = parsed.configs || {};

    let monthlySpend = 0;

    selectedTools.forEach((toolId: string) => {
      const spend = Number(
        configs[toolId]?.spend || 0
      );

      monthlySpend += spend;
    });

    let wasteRate = 0.08;

    if (monthlySpend > 500) wasteRate += 0.04;
    if (monthlySpend > 1500) wasteRate += 0.05;
    if (monthlySpend > 5000) wasteRate += 0.07;

    wasteRate += selectedTools.length * 0.025;

    const estimatedWaste = Math.round(
      monthlySpend * wasteRate
    );

    const projectedSavings = Math.round(
      estimatedWaste * 0.61
    );

    const healthScore = Math.max(
      38,
      Math.min(
        96,
        100 - Math.round(wasteRate * 100)
      )
    );

    setAuditData({
      monthlySpend,
      estimatedWaste,
      projectedSavings,
      annualOpportunity:
        projectedSavings * 12,
      healthScore,

      tools: selectedTools.map(
        (toolId: string) => ({
          name: toolId,
          spend: Number(
            configs[toolId]?.spend || 0
          ),
          waste: Math.round(
            Number(configs[toolId]?.spend || 0) *
              wasteRate
          ),
          efficiency: healthScore,
        })
      ),

      recommendations: [
        {
          title:
            "Reduce inactive developer seats",
          savings: 120,
          difficulty: "Low",
          priority: "High",
        },
        {
          title:
            "Consolidate overlapping AI assistants",
          savings: 90,
          difficulty: "Medium",
          priority: "Medium",
        },
      ],

      insights: [
        "Potential overlap detected across AI research assistants.",
        "High developer tooling allocation identified.",
      ],
    });
  }
}, []);
if (!auditData) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020817] text-white">
      Loading audit results...
    </main>
  );
}

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <ResultsNavbar />

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:px-8">
        <HeroSummary data={auditData} />

        <MetricsGrid data={auditData} />

        <div className="grid gap-8 xl:grid-cols-[1.4fr_0.9fr]">
          <SpendBreakdown data={auditData} />

          <div className="flex flex-col gap-8">
            <Recommendations data={auditData} />
            <AIInsights data={auditData} />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <HealthAnalysis data={auditData} />
          <ToolEfficiency data={auditData} />
        </div>

        <SavingsTimeline data={auditData} />

        <ExecutiveSummary data ={auditData} />

        <ResultsCTA />
      </div>
    </main>
  );
}