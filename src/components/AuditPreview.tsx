"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Check, LineChart, TrendingDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { recommendations, spendRows } from "@/components/landing-data";
import { reveal, viewportOnce } from "@/components/landing-motion";

export function AuditPreview() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[560px] sm:max-w-[590px] lg:mx-0"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={reveal}
    >
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/22 via-violet-500/14 to-emerald-400/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#0c1220]/90 shadow-2xl shadow-black/40 backdrop-blur-xl sm:rounded-[1.75rem]">
        <div className="flex flex-col gap-4 border-b border-white/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
          <div className="flex items-center gap-3">
            <div className="audit-score flex size-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/20">
              <LineChart className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[-0.01em] text-white">
                AI Spend Audit
              </p>
              <p className="mt-0.5 text-xs font-medium text-slate-500">
                Demo Audit Preview
              </p>
            </div>
          </div>
          <div className="w-fit rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
            31% savings found
          </div>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2">
          <div className="bg-[#0c1220] px-5 py-4 sm:px-6 sm:py-5">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
              Monthly spend
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-[1.85rem] font-semibold leading-none tracking-[-0.045em] text-white sm:text-[2rem]">
                $2,840
              </span>
              <span className="text-sm font-medium text-rose-200">+18%</span>
            </div>
          </div>
          <div className="bg-[#0c1220] px-5 py-4 sm:px-6 sm:py-5">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
              Estimated savings
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-[1.85rem] font-semibold leading-none tracking-[-0.045em] text-emerald-200 sm:text-[2rem]">
                $920
              </span>
              <span className="text-sm font-medium text-slate-500">/mo</span>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold tracking-[-0.01em] text-white">
                Spend by tool
              </p>
              <p className="text-xs text-slate-500">Live estimate</p>
            </div>
            <div className="space-y-3">
              {spendRows.map((row) => (
                <div key={row.name}>
                  <div className="mb-1.5 flex items-center justify-between gap-4 text-xs">
                    <span className="text-slate-300">{row.name}</span>
                    <span className="font-semibold tabular-nums text-white">
                      {row.spend}
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.07] ring-1 ring-white/[0.03]">
                    <div
                      className={`audit-bar h-full rounded-full shadow-[0_0_18px_currentColor] ${row.color} ${row.width}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 rounded-2xl border border-cyan-300/15 bg-cyan-300/8 p-3 text-sm leading-6 text-cyan-100">
              <TrendingDown className="size-4 shrink-0" />
              API routing changes could save $410 monthly.
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-3.5">
            <div className="mb-3 flex items-center gap-2 px-1">
              <BrainCircuit className="size-4 text-violet-200" />
              <p className="text-sm font-semibold tracking-[-0.01em] text-white">
                Recommendations
              </p>
            </div>
            <div className="space-y-2.5">
              {recommendations.map((item, index) => (
                <div
                  className="audit-recommendation flex cursor-pointer gap-3 rounded-2xl bg-black/18 p-3 text-sm leading-6 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.055]"
                  key={item}
                  style={{ animationDelay: `${index * 140}ms` }}
                >
                  <Check className="mt-1 size-4 shrink-0 text-emerald-200" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Button className="mt-3 h-10 w-full cursor-pointer rounded-xl bg-white text-sm font-medium text-slate-950 shadow-[0_0_24px_rgba(103,232,249,0.16)] transition-all duration-300 hover:scale-[1.01] hover:bg-cyan-100 hover:shadow-[0_0_32px_rgba(103,232,249,0.25)]">
              View audit report
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

