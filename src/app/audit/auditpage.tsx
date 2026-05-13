"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { AuditCTA } from "@/components/AuditCTA";
import { AuditNavbar } from "@/components/AuditNavbar";
import { defaultConfig } from "@/components/audit-data";
import { SpendSummary } from "@/components/SpendSummary";
import { TeamInfoSection } from "@/components/TeamInfoSection";
import { ToolForm } from "@/components/ToolForm";
import { ToolSelection } from "@/components/ToolSelection";
import { reveal, stagger } from "@/components/landing-motion";
import { useRouter } from "next/navigation";
import { generateAuditResults } from "@/lib/audit-engine";
import AuditGeneratingOverlay from "@/components/AuditGeneratingOverlay";

type ToolConfig = typeof defaultConfig;
type TeamInfo = {
  teamSize: string;
  company: string;
  role: string;
};

export default function AuditPage() {
  const [isGenerating, setIsGenerating] =
  useState(false);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [configs, setConfigs] = useState<Record<string, ToolConfig>>({});
  const [teamInfo, setTeamInfo] = useState<TeamInfo>({
    teamSize: "",
    company: "",
    role: "",
  });
  const router = useRouter();

 

  function handleToolToggle(id: string) {
    setSelectedTools((current) => {
      if (current.includes(id)) {
        return current.filter((toolId) => toolId !== id);
      }
      return [...current, id];
    });

    setConfigs((current) => ({
      ...current,
      [id]: current[id] ?? defaultConfig,
    }));
  }

  function handleConfigChange(toolId: string, key: keyof ToolConfig, value: string) {
    setConfigs((current) => ({
      ...current,
      [toolId]: {
        ...(current[toolId] ?? defaultConfig),
        [key]: value,
      },
    }));
  }

  function handleTeamChange(key: keyof TeamInfo, value: string) {
    setTeamInfo((current) => ({
      ...current,
      [key]: value,
    }));
  }


async function handleGenerate() {
  

if (selectedTools.length === 0) {
  alert(
    "Select at least one AI tool."
  );

  return;
}
localStorage.removeItem(
  "stackspend-results"
);
  setIsGenerating(true);

  try {

    // GENERATE CALCULATED RESULTS

    const generatedResults =
  generateAuditResults(
    selectedTools,
    configs,
    teamInfo
  );
    // CALL AI

    const response =
      await fetch(
        "/api/analyze",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            generatedResults
          ),
        }
      );

    const aiData =
      await response.json();

      if (!aiData.success) {
  throw new Error(
    aiData.error || "AI analysis failed"
  );
}

    // SAVE FINAL RESULTS

    localStorage.setItem(
      "stackspend-results",

      JSON.stringify({
        auditData:
          generatedResults,

        aiAnalysis:
          aiData.analysis,
      })
    );

    // NAVIGATE


    router.push(
      "/results/generated"
    );

  } catch (error) {
    setIsGenerating(false);

    console.error(
      "Audit generation failed:",
      error
    );
  }
}

  return (
    <main className="min-h-screen overflow-hidden bg-[#050812] text-white">
      {isGenerating && (
  <AuditGeneratingOverlay />
)}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_22%_10%,rgba(64,184,255,0.12),transparent_28%),radial-gradient(circle_at_84%_4%,rgba(138,92,246,0.13),transparent_30%),linear-gradient(180deg,#050812_0%,#08111f_48%,#050812_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
      <div className="noise-texture pointer-events-none fixed inset-0 -z-10 opacity-[0.055]" />

      <AuditNavbar />

      <motion.section
        animate="visible"
        className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8"
        initial="hidden"
        variants={stagger}
      >
        <motion.div variants={reveal}>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-100">
            AI spend onboarding
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.055em] text-white sm:text-5xl lg:text-[3.85rem]">
            Audit Your AI Stack
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 tracking-[-0.015em] text-slate-300 sm:text-lg sm:leading-8">
            Enter your tools, plans, and usage to uncover savings opportunities.
          </p>
        </motion.div>
      </motion.section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-8 xl:grid-cols-[minmax(0,1fr)_420px]">
        <div className="space-y-6">
          <ToolSelection selectedTools={selectedTools} onToggle={handleToolToggle} />
          <ToolForm
            configs={configs}
            onConfigChange={handleConfigChange}
            selectedTools={selectedTools}
          />
          <TeamInfoSection onChange={handleTeamChange} teamInfo={teamInfo} />
         <AuditCTA
  onGenerate={handleGenerate}
  isGenerating={isGenerating}
/>
        </div>

        <SpendSummary configs={configs} selectedTools={selectedTools} />
      </section>
    </main>
  );
}
