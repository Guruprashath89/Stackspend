"use client";

import { motion } from "framer-motion";

import { teamSignals } from "@/components/landing-data";
import { reveal, viewportOnce } from "@/components/landing-motion";

export function SocialProofSection() {
  return (
    <motion.section
      className="border-y border-white/10 bg-white/[0.025]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={reveal}
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
            Used by AI-first teams
          </p>
          <p className="mt-2 text-sm leading-6 tracking-[-0.01em] text-slate-400">
            12,000+ subscriptions modeled across startups, agencies, and
            engineering teams.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {teamSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div
                className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] text-sm font-medium tracking-[-0.01em] text-slate-400"
                key={signal.label}
              >
                <Icon className="size-4 text-slate-500" />
                {signal.label}
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

