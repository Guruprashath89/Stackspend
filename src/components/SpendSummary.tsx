"use client";
import { generateAuditResults } from "@/lib/audit-engine";

import { motion } from "framer-motion";
import { Activity, CircleDollarSign, TrendingDown } from "lucide-react";

import { auditTools, defaultConfig } from "@/components/audit-data";



type SpendSummaryProps = {
  selectedTools: string[];
  configs: Record<string, typeof defaultConfig>;
};

function parseSpend(value: string) {
  const parsed = Number(value.replace(/[^0-9.]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

export function SpendSummary({ selectedTools, configs }: SpendSummaryProps) {
  const selected = auditTools.filter((tool) => selectedTools.includes(tool.id));

  const auditData = generateAuditResults(
  selectedTools,
  configs
);

 const healthWidth = auditData.hasValidSpend
  ? `${auditData.healthScore}%`
  : "0%";

  const maxSpend = Math.max(
  ...selected.map(
    (tool) =>
      parseSpend(
        configs[tool.id]?.spend ?? ""
      ) || tool.defaultSpend
  ),
  1
);

  return (
    <aside className="lg:sticky lg:top-24">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1322]/88 shadow-2xl shadow-black/30 backdrop-blur-xl"
        initial={{ opacity: 0, y: 28 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="border-b border-white/10 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100 ring-1 ring-cyan-300/20">
              <Activity className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[-0.01em] text-white">
                Spend Summary
              </p>
              <p className="text-xs text-slate-500">Updates as you edit</p>
            </div>
          </div>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="bg-[#0b1322] p-5">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
              Monthly spend
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-white">
              ${auditData.monthlySpend.toLocaleString()}
            </p>
          </div>
          <div className="bg-[#0b1322] p-5">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
              Projected savings
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-emerald-200">
              ${auditData.projectedSavings.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="space-y-6 p-5 sm:p-6">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-medium text-slate-300">
                Spend Health Score
              </p>
             <p className="text-sm font-semibold text-white">
          {auditData.hasValidSpend
          ? `${auditData.healthScore}/100`
          : "--"}
</p>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.07]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 shadow-[0_0_20px_rgba(103,232,249,0.35)] transition-all duration-500"
                style={{ width: healthWidth }}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-cyan-100">
              <TrendingDown className="size-4" />
              Estimated wasted spend
            </div>
            <p className="text-3xl font-semibold tracking-[-0.045em] text-white">
              ${auditData.estimatedWaste.toLocaleString()}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Based on duplicate subscriptions, unused seats, and plan fit.
            </p>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="font-medium text-white">Selected tools</span>
              <span className="text-slate-500">{selected.length}</span>
            </div>
            <div className="space-y-3">
              {selected.length === 0 ? (
                <p className="rounded-2xl border border-dashed border-white/10 p-4 text-sm text-slate-500">
                  Select tools to preview spend distribution.
                </p>
              ) : (
                selected.map((tool) => {
                  const spend = parseSpend(configs[tool.id]?.spend ?? "") || tool.defaultSpend;
                  const width = `${Math.max(12, Math.round((spend / maxSpend) * 100))}%`;
                  return (
                    <div key={tool.id}>
                      <div className="mb-1.5 flex items-center justify-between gap-3 text-xs">
                        <span className="text-slate-300">{tool.name}</span>
                        <span className="font-semibold text-white">${spend}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/[0.07]">
                        <div
                          className="h-full rounded-full bg-cyan-300/80 transition-all duration-500"
                          style={{ width }}
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-emerald-300/15 bg-emerald-300/8 p-3 text-sm text-emerald-100">
            <CircleDollarSign className="size-4 shrink-0" />
            Annualized opportunity: ${(auditData.projectedSavings * 12).toLocaleString()}
          </div>
        </div>
      </motion.div>
    </aside>
  );
}

