"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, FileChartColumn } from "lucide-react";
import Link from "next/link";

import { AuditPreview } from "@/components/AuditPreview";
import { primaryCtaClass } from "@/components/landing-buttons";
import { supportedTools } from "@/components/landing-data";
import { reveal, stagger } from "@/components/landing-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 lg:px-8 xl:grid-cols-[0.78fr_1.22fr]">
      <motion.div
        className="max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.78rem] font-medium tracking-[-0.01em] text-slate-300 shadow-xl shadow-black/20"
          variants={reveal}
        >
          <BadgeCheck className="size-4 text-cyan-200" />
          12,000+ AI subscriptions analyzed
        </motion.div>
        <motion.h1
          className="max-w-2xl text-[2.65rem] font-semibold leading-[1.03] tracking-[-0.055em] text-white sm:text-5xl md:text-[3.45rem] lg:text-[3.85rem] xl:text-[4.15rem]"
          variants={reveal}
        >
          Stop Overpaying For AI Tools
        </motion.h1>
        <motion.p
          className="mt-5 max-w-xl text-base leading-7 tracking-[-0.015em] text-slate-300 sm:mt-6 sm:text-lg sm:leading-8"
          variants={reveal}
        >
          Analyze ChatGPT, Claude, Cursor, Gemini and API spend in under 2
          minutes. Find duplicate seats, bloated plans, and quick wins your team
          can act on today.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          variants={reveal}
        >
          <Button asChild className={primaryCtaClass}>
            <Link href="/audit">
              Start Free Audit
              <ArrowRight className="size-5" />
            </Link>
          </Button>
          <Button
            className="h-12 cursor-pointer rounded-xl border-white/10 bg-transparent px-6 text-[0.95rem] font-medium tracking-[-0.01em] text-slate-300 transition-all duration-300 hover:scale-[1.01] hover:border-white/18 hover:bg-white/[0.035] hover:text-white"
            variant="outline"
          >
            View Sample Report
            <FileChartColumn className="size-5" />
          </Button>
        </motion.div>
        <motion.div
          className="mt-8 flex flex-wrap items-center gap-2 text-sm tracking-[-0.01em] text-slate-500"
          variants={reveal}
        >
          <span>Supports</span>
          {supportedTools.map((tool) => (
            <span
              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[0.78rem] font-medium text-slate-300"
              key={tool}
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <AuditPreview />
    </section>
  );
}
