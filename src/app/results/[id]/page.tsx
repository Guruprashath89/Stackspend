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
import FinancialRisks from "@/components/results/FinancialRisks";
import IndustryBenchmark from "@/components/results/IndustryBenchmark";
import ImmediateActionPlan from "@/components/results/ImmediateActionPlan";
import ReportHeader from "@/components/results/ReportHeader";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";





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
// pdf export function ExportPDFButton() 
async function handleExportPDF() {

  const pdf = new jsPDF();

  let y = 20;

  const pageHeight =
  pdf.internal.pageSize.height;

  function checkPageOverflow(
  requiredHeight = 20
) {

  if (
    y + requiredHeight >
    pageHeight - 20
  ) {

    pdf.addPage();

    y = 20;
  }
}

  /*
  -----------------------------------
  TITLE
  -----------------------------------
  */

  pdf.setFontSize(24);

  pdf.setTextColor(15, 23, 42);

  pdf.text(
    "STACKSPEND AI AUDIT REPORT",
    20,
    y
  );

  y += 10;

  pdf.setFontSize(11);

  pdf.setTextColor(100);

  pdf.text(
    "Confidential AI Spend Optimization Report",
    20,
    y
  );

  y += 20;


  /*
  -----------------------------------
  REPORT INFO
  -----------------------------------
  */

  pdf.setFontSize(12);

  pdf.setTextColor(30);

  pdf.text(
    `Audit ID: ${auditData.auditId}`,
    20,
    y
  );

  y += 8;

  pdf.text(
    `Generated: ${auditData.generatedAt}`,
    20,
    y
  );

  y += 8;

  pdf.text(
    `Company: ${
      auditData.teamInfo?.company ||
      "Unknown Company"
    }`,
    20,
    y
  );

  y += 8;

  pdf.text(
    `Team Size: ${
      auditData.teamInfo?.teamSize ||
      "N/A"
    }`,
    20,
    y
  );

  y += 18;

  checkPageOverflow();

  /*
  -----------------------------------
  EXECUTIVE SUMMARY
  -----------------------------------
  */

  pdf.setDrawColor(220);

  pdf.line(20, y, 190, y);

  y += 12;

  pdf.setFontSize(18);

  pdf.setTextColor(15, 23, 42);

  pdf.text(
    "Executive Summary",
    20,
    y
  );

  y += 12;

  pdf.setFontSize(12);

  pdf.setTextColor(60);

  const summary =
    `Your current AI tooling stack shows a health score of ${auditData.healthScore}/100 with approximately $${auditData.projectedSavings} in projected monthly optimization opportunities. The report identified operational inefficiencies related to overlapping tooling allocation and workflow fragmentation.`;

  const splitSummary =
    pdf.splitTextToSize(
      summary,
      170
    );

  pdf.text(
    splitSummary,
    20,
    y
  );

  y += splitSummary.length * 7 + 15;

  checkPageOverflow();

  /*
  -----------------------------------
  FINANCIAL OVERVIEW
  -----------------------------------
  */

  pdf.setDrawColor(220);

  pdf.line(20, y, 190, y);

  y += 12;

  pdf.setFontSize(18);

  pdf.setTextColor(15, 23, 42);

  pdf.text(
    "Financial Overview",
    20,
    y
  );

  y += 14;

  pdf.setFontSize(12);

  pdf.setTextColor(50);

  pdf.text(
    `Monthly Spend: $${auditData.monthlySpend}`,
    25,
    y
  );

  y += 10;

  pdf.text(
    `Estimated Waste: $${auditData.estimatedWaste}`,
    25,
    y
  );

  y += 10;

  pdf.text(
    `Projected Savings: $${auditData.projectedSavings}`,
    25,
    y
  );

  y += 10;

  pdf.text(
    `Health Score: ${auditData.healthScore}/100`,
    25,
    y
  );

  y += 20;

  y += 10;

pdf.text(
  `Risk Level: ${
    aiAnalysis?.riskLevel ||
    "Low"
  }`,
  25,
  y
);

y += 10;

pdf.text(
  `Optimization Score: ${
    aiAnalysis
      ?.optimizationScore || 82
  }/100`,
  25,
  y
);

checkPageOverflow();

  /*
  -----------------------------------
  TOOL BREAKDOWN
  -----------------------------------
  */

  pdf.setDrawColor(220);

  pdf.line(20, y, 190, y);

  y += 12;

  pdf.setFontSize(18);

  pdf.text(
    "Tool Breakdown",
    20,
    y
  );

  y += 14;

  pdf.setFontSize(12);

  auditData.tools.forEach(
    (tool: any) => {

      pdf.text(
        `${tool.name}`,
        25,
        y
      );

      pdf.text(
        `$${tool.spend}/month`,
        140,
        y
      );

      y += 10;
    }
  );

  y += 10;

  checkPageOverflow();

  /*
-----------------------------------
INDUSTRY BENCHMARK
-----------------------------------
*/

pdf.setDrawColor(220);

pdf.line(20, y, 190, y);

y += 12;

pdf.setFontSize(18);

pdf.setTextColor(0, 102, 204);

pdf.text(
  "Industry Benchmark",
  20,
  y
);

y += 14;

pdf.setFontSize(12);

pdf.setTextColor(50);

pdf.text(
  `Benchmark Status: ${
    auditData.industryBenchmark
      ?.status || "N/A"
  }`,
  25,
  y
);

y += 10;

pdf.text(
  `Expected Range: $${
    auditData.industryBenchmark
      ?.low
  } - $${
    auditData.industryBenchmark
      ?.high
  }/month`,
  25,
  y
);

y += 20;

checkPageOverflow();
  /*
  -----------------------------------
  FINANCIAL RISKS
  -----------------------------------
  */

  pdf.setDrawColor(220);

  pdf.line(20, y, 190, y);

  y += 12;

  pdf.setFontSize(18);

  pdf.text(
    "Financial Risks",
    20,
    y
  );

  y += 14;

  pdf.setFontSize(12);

  if (
    auditData.financialRisks
      ?.length === 0
  ) {

    pdf.text(
      "No major operational risks detected.",
      25,
      y
    );

    y += 10;

  } else {

    auditData.financialRisks.forEach(
      (risk: string) => {

        const splitRisk =
          pdf.splitTextToSize(
            `• ${risk}`,
            160
          );

        pdf.text(
          splitRisk,
          25,
          y
        );

        y +=
          splitRisk.length * 7 + 5;
      }
    );
  }

  y += 10;

  checkPageOverflow();

  /*
  -----------------------------------
  ACTION PLAN
  -----------------------------------
  */

  pdf.setDrawColor(220);

  pdf.line(20, y, 190, y);

  y += 12;

  pdf.setFontSize(18);

  pdf.text(
    "Immediate Action Plan",
    20,
    y
  );

  y += 14;

  pdf.setFontSize(12);

  auditData.actionPlan.forEach(
    (
      action: any,
      index: number
    ) => {

      pdf.text(
        `${index + 1}. ${action.title}`,
        25,
        y
      );

      y += 8;

      const splitImpact =
        pdf.splitTextToSize(
          action.impact,
          150
        );

      pdf.text(
        splitImpact,
        35,
        y
      );

      y +=
        splitImpact.length * 7;

      pdf.text(
        `Potential Savings: $${action.savings}/month`,
        35,
        y
      );

      y += 14;
    }
  );

  checkPageOverflow();


  /*
-----------------------------------
AI EXECUTIVE ANALYSIS
-----------------------------------
*/

pdf.setDrawColor(220);

pdf.line(20, y, 190, y);

y += 12;

pdf.setFontSize(18);

pdf.setTextColor(0, 102, 204);

pdf.text(
  "AI Executive Analysis",
  20,
  y
);

y += 14;

pdf.setFontSize(12);

pdf.setTextColor(50);

const aiSummary =
  aiAnalysis?.executiveSummary ||
  "No executive summary available.";

const splitAiSummary =
  pdf.splitTextToSize(
    aiSummary,
    165
  );

pdf.text(
  splitAiSummary,
  25,
  y
);

y +=
  splitAiSummary.length * 7 + 20;

  checkPageOverflow();

 /*
-----------------------------------
AI RECOMMENDATIONS
-----------------------------------
*/

pdf.setDrawColor(220);

pdf.line(20, y, 190, y);

y += 12;


pdf.setFontSize(18);

pdf.setTextColor(0, 102, 204);

pdf.text(
  "AI Recommendations",
  20,
  y
);

y += 14;


pdf.setFontSize(12);

pdf.setTextColor(50);

aiAnalysis?.recommendations?.forEach(
  (
    rec: any,
    index: number
  ) => {

    pdf.text(
      `${index + 1}. ${rec.title}`,
      25,
      y
    );

    y += 8;

    const splitDesc =
      pdf.splitTextToSize(
        rec.description,
        150
      );

      const estimatedHeight =
  splitDesc.length * 7 + 30;

checkPageOverflow(
  estimatedHeight
);

    pdf.text(
      splitDesc,
      35,
      y
    );

    y +=
      splitDesc.length * 7;

    pdf.text(
      `Impact Level: ${rec.impact}`,
      35,
      y
    );

    y += 16;
  }
);

checkPageOverflow();

/*
-----------------------------------
AI KEY INSIGHTS
-----------------------------------
*/

pdf.setDrawColor(220);

pdf.line(20, y, 190, y);

y += 12;

pdf.setFontSize(18);

pdf.setTextColor(0, 102, 204);

pdf.text(
  "AI Key Insights",
  20,
  y
);

y += 14;

pdf.setFontSize(12);

pdf.setTextColor(50);

aiAnalysis?.insights?.forEach(
  (
    insight: string
  ) => {

    const splitInsight =
      pdf.splitTextToSize(
        `• ${insight}`,
        155
      );

    pdf.text(
      splitInsight,
      25,
      y
    );

    y +=
      splitInsight.length * 7 + 6;
  }
);
  checkPageOverflow();
  /*
  -----------------------------------
  FOOTER
  -----------------------------------
  */

  pdf.setFontSize(10);

  pdf.setTextColor(120);

  pdf.text(
    "Generated by StackSpend AI",
    20,
    285
  );

  pdf.save(
    `StackSpend-Audit-${auditData.auditId}.pdf`
  );
}
  return (
  <main className="min-h-screen bg-[#020817] text-white">
     <ResultsNavbar
  onExportPDF={
    handleExportPDF
  }
/>

      <div
  id="pdf-content"
  className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:px-8"
>
        <ReportHeader data={auditData} />

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
        <FinancialRisks data={auditData} />
        <IndustryBenchmark data={auditData} />
        <ImmediateActionPlan data={auditData} />

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

 <div className="mb-6 sm:mb-8">

  <h2 className="text-2xl sm:text-3xl font-semibold">
    AI Optimization Analysis
  </h2>

  <p className="mt-2 text-sm sm:text-base text-slate-400">
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

  <h3 className="text-lg sm:text-xl font-semibold">
    Recommendations
  </h3>

  <div className="mt-4 sm:mt-5 grid gap-4 sm:gap-5">

    {aiAnalysis.recommendations?.map(
      (item: any, index: number) => (

        <div
          key={index}
          className="
          rounded-2xl
          border
          border-white/10
          bg-[#0b1728]

          p-4
          sm:p-5
          "
        >

          <div className="
            flex
            flex-col
            gap-3

            sm:flex-row
            sm:items-center
            sm:justify-between
          ">

            <h4 className="text-base sm:text-lg font-semibold leading-6">
              {item.title}
            </h4>

            <span className="
              self-start
              rounded-full
              bg-cyan-500/10
              px-3
              py-1

              text-xs
              sm:text-sm

              text-cyan-200
            ">
              {item.impact}
            </span>

          </div>

          <p className="
            mt-3
            text-sm
            sm:text-base
            leading-6
            text-slate-400
          ">
            {item.description}
          </p>

        </div>
      )
    )}

  </div>

</div>


{/* Insights */}

<div>

  <h3 className="text-lg sm:text-xl font-semibold">
    Key Insights
  </h3>

  <ul className="mt-4 sm:mt-5 space-y-3">

    {aiAnalysis.insights?.map(
      (
        insight: string,
        index: number
      ) => (

        <li
          key={index}
          className="
          rounded-xl
          border
          border-white/10
          bg-[#0b1728]

          px-4
          py-3

          sm:px-5
          sm:py-4
          "
        >

          <div className="flex items-start gap-3">

            <div className="
            mt-1.5
            h-2
            w-2
            shrink-0
            rounded-full
            bg-cyan-300
            " />

            <p className="
              text-sm
              sm:text-base
              leading-6
              text-slate-300
            ">
              {insight}
            </p>

          </div>

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

        <ResultsCTA
  onExportPDF={
    handleExportPDF
  }
/>
      </div>
    </main>
  );
}