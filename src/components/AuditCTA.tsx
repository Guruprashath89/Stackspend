"use client";

import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

type AuditCTAProps = {
  onGenerate: () => void;
  isGenerating: boolean;
};

export function AuditCTA({
  onGenerate,
  isGenerating,
}: AuditCTAProps) {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(20,184,166,0.14),rgba(99,102,241,0.14)_48%,rgba(15,23,42,0.80))] p-5 sm:p-6">

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-cyan-100">
            <Sparkles className="size-4" />
            Ready to model savings
          </div>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
            Generate a professional AI-powered audit report for your tooling stack.
          </p>
        </div>

        <Button
          disabled={isGenerating}
          className="h-12 w-full cursor-pointer rounded-xl bg-white px-6 text-[0.95rem] font-medium text-slate-950 shadow-[0_0_34px_rgba(103,232,249,0.22)] transition-all duration-300 hover:scale-[1.015] hover:bg-cyan-100 hover:shadow-[0_0_46px_rgba(103,232,249,0.32)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          onClick={onGenerate}
        >
          {isGenerating
            ? "Generating Audit..."
            : "Generate AI Spend Audit"}

          <ArrowRight className="size-5" />
        </Button>

      </div>
    </section>
  );
}