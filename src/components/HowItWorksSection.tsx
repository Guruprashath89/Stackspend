"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { steps } from "@/components/landing-data";
import { reveal, stagger, viewportOnce } from "@/components/landing-motion";
import { SectionHeader } from "@/components/SectionHeader";

export function HowItWorksSection() {
  return (
    <motion.section
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      id="how-it-works"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={stagger}
    >
      <SectionHeader
        eyebrow="How it works"
        title="From scattered tools to a savings plan in three steps."
        description="The audit turns plan data and usage assumptions into a short, prioritized report your team can actually use."
      />
      <motion.div className="mt-12 grid gap-5 lg:grid-cols-3" variants={stagger}>
        {steps.map((step, index) => (
          <motion.article
            className="relative rounded-3xl border border-white/10 bg-white/[0.035] p-6"
            key={step.title}
            variants={reveal}
          >
            <div className="mb-10 flex items-center justify-between">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-base font-semibold text-slate-950">
                {index + 1}
              </span>
              <ChevronRight className="hidden size-5 text-slate-600 lg:block" />
            </div>
            <h3 className="text-xl font-semibold tracking-[-0.025em] text-white">
              {step.title}
            </h3>
            <p className="mt-3 leading-7 tracking-[-0.01em] text-slate-400">
              {step.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

