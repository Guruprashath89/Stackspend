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
import { generateAuditResults } from "@/lib/audit-engine";




export default function ResultsPage() {
  
  const [auditData, setAuditData] = useState<any>(null);
useEffect(() => {
  const storedAudit =
    localStorage.getItem(
      "stackspend-audit"
    );

  if (storedAudit) {
    const parsed =
      JSON.parse(storedAudit);

    const selectedTools =
      parsed.selectedTools || [];

    const configs =
      parsed.configs || {};

    const generatedResults =
      generateAuditResults(
        selectedTools,
        configs
      );

    setAuditData(
      generatedResults
    );

    // GEMINI API TEST
    fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(
        generatedResults
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(
          "GEMINI RESPONSE:",
          data
        );
      })
      .catch((error) => {
        console.error(
          "Gemini Error:",
          error
        );
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