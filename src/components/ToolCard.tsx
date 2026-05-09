"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { reveal } from "@/components/landing-motion";

type ToolCardProps = {
  tool: {
    id: string;
    name: string;
    description: string;
    icon: React.ElementType;
  };
  selected: boolean;
  onToggle: (id: string) => void;
};

export function ToolCard({ tool, selected, onToggle }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <motion.button
      className={`group relative min-h-36 cursor-pointer rounded-3xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.055] ${
        selected
          ? "border-cyan-300/45 bg-cyan-300/[0.075] shadow-[0_0_36px_rgba(103,232,249,0.16)]"
          : "border-white/10 bg-white/[0.035]"
      }`}
      onClick={() => onToggle(tool.id)}
      type="button"
      variants={reveal}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex size-11 items-center justify-center rounded-2xl ring-1 transition ${
            selected
              ? "bg-cyan-300/14 text-cyan-100 ring-cyan-300/25"
              : "bg-white/[0.05] text-slate-300 ring-white/10"
          }`}
        >
          <Icon className="size-5" />
        </div>
        <div
          className={`flex size-6 items-center justify-center rounded-full border transition ${
            selected
              ? "border-emerald-300/35 bg-emerald-300/15 text-emerald-200"
              : "border-white/10 bg-white/[0.03] text-transparent"
          }`}
        >
          <Check className="size-3.5" />
        </div>
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-[-0.025em] text-white">
        {tool.name}
      </h3>
      <p className="mt-2 text-sm leading-6 tracking-[-0.01em] text-slate-400">
        {tool.description}
      </p>
    </motion.button>
  );
}

