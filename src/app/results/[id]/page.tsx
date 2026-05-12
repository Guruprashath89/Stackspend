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
  
  const [auditData, setAuditData] =
  useState<any>(null);

const [aiAnalysis, setAiAnalysis] =
  useState<any>(null);

useEffect(() => {

  const storedResults =
    localStorage.getItem(
      "stackspend-results"
    );

  if (storedResults) {

    const parsed =
      JSON.parse(
        storedResults
      );

    setAuditData(
      parsed.auditData
    );

    setAiAnalysis(
      parsed.aiAnalysis
    );
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
        <div className="rounded-2xl border border-white/10 bg-[#081225] p-6">

  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
    Audit Context
  </p>

  <div className="mt-4 grid gap-4 md:grid-cols-3">

    <div>
      <p className="text-sm text-slate-400">
        Company
      </p>

      <p className="mt-1 text-lg font-medium">
        {auditData.teamInfo?.company || "Not Provided"}
      </p>
    </div>

    <div>
      <p className="text-sm text-slate-400">
        Team Size
      </p>

      <p className="mt-1 text-lg font-medium">
        {auditData.teamInfo?.teamSize || "N/A"}
      </p>
    </div>

    <div>
      <p className="text-sm text-slate-400">
        Role
      </p>

      <p className="mt-1 text-lg font-medium">
        {auditData.teamInfo?.role || "N/A"}
      </p>
    </div>

  </div>
</div>

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
       <section className="rounded-3xl border border-white/10 bg-[#081225] p-8">

  <div className="mb-8">
    <h2 className="text-3xl font-semibold">
      AI Optimization Analysis
    </h2>

    <p className="mt-2 text-slate-400">
      AI-generated financial intelligence
      based on your tooling ecosystem.
    </p>
  </div>

  {aiAnalysis ? (

    <div className="space-y-8">

      {/* Executive Summary */}

      <div>
        <h3 className="text-xl font-semibold">
          Executive Summary
        </h3>

        <p className="mt-3 leading-8 text-slate-300">
          {aiAnalysis.executiveSummary}
        </p>
      </div>

      {/* Risk + Score */}

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">

          <p className="text-sm text-slate-400">
            Risk Level
          </p>

          <h4 className="mt-2 text-3xl font-semibold">
            {aiAnalysis.riskLevel}
          </h4>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">

          <p className="text-sm text-slate-400">
            Optimization Score
          </p>

          <h4 className="mt-2 text-3xl font-semibold">
            {aiAnalysis.optimizationScore}/100
          </h4>
        </div>
      </div>

      {/* Recommendations */}

      <div>
        <h3 className="text-xl font-semibold">
          Recommendations
        </h3>

        <div className="mt-5 grid gap-5">

          {aiAnalysis.recommendations?.map(
            (item: any, index: number) => (

              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-[#0b1728] p-5"
              >
                <div className="flex items-center justify-between">

                  <h4 className="text-lg font-semibold">
                    {item.title}
                  </h4>

                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
                    {item.impact}
                  </span>
                </div>

                <p className="mt-3 text-slate-400">
                  {item.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Insights */}

      <div>
        <h3 className="text-xl font-semibold">
          Key Insights
        </h3>

        <ul className="mt-5 space-y-3">

          {aiAnalysis.insights?.map(
            (
              insight: string,
              index: number
            ) => (

              <li
                key={index}
                className="rounded-xl border border-white/10 bg-[#0b1728] px-5 py-4 text-slate-300"
              >
                {insight}
              </li>
            )
          )}
        </ul>
      </div>
    </div>

  ) : (

    <p className="text-slate-400">
      No AI analysis available.
    </p>

  )}
</section>

        <ResultsCTA />
      </div>
    </main>
  );
}