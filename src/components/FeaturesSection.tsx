"use client";

import { motion } from "framer-motion";

import { features } from "@/components/landing-data";
import { reveal, stagger, viewportOnce } from "@/components/landing-motion";
import { SectionHeader } from "@/components/SectionHeader";

export function FeaturesSection() {
  return (
    <motion.section
      className="border-y border-white/10 bg-[#07101c] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      id="features"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={stagger}
    >
      <SectionHeader
        eyebrow="Features"
        title="A finance-grade audit for modern AI stacks."
        description="Clean enough for founders, specific enough for engineers, and practical enough to turn into action right away."
      />
      <motion.div
        className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2"
        variants={stagger}
      >
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <motion.article
              className="cursor-pointer rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300/35 hover:from-cyan-300/10 hover:to-white/[0.035]"
              key={feature.title}
              variants={reveal}
            >
              <div className="flex items-start gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950/50 text-violet-100 ring-1 ring-white/10">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-7 tracking-[-0.01em] text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

