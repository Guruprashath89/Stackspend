"use client";

import { motion } from "framer-motion";

import { auditTools } from "@/components/audit-data";
import { stagger, viewportOnce } from "@/components/landing-motion";
import { ToolCard } from "@/components/ToolCard";

type ToolSelectionProps = {
  selectedTools: string[];
  onToggle: (id: string) => void;
};

export function ToolSelection({ selectedTools, onToggle }: ToolSelectionProps) {
  return (
    <motion.section
      className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={stagger}
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-100">
          Tool selection
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">
          Select the AI tools in your stack
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          Choose every product your team pays for or regularly uses. You can add
          details for each selected tool below.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {auditTools.map((tool) => (
          <ToolCard
            key={tool.id}
            onToggle={onToggle}
            selected={selectedTools.includes(tool.id)}
            tool={tool}
          />
        ))}
      </div>
    </motion.section>
  );
}

