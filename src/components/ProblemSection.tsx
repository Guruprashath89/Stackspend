"use client";

import { motion } from "framer-motion";

import { problems } from "@/components/landing-data";
import { reveal, stagger, viewportOnce } from "@/components/landing-motion";
import { SectionHeader } from "@/components/SectionHeader";

export function ProblemSection() {
  return (
    <motion.section
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={stagger}
    >
      <SectionHeader
        eyebrow="The hidden leak"
        title="AI spend gets messy faster than teams notice."
        description="StackSpend is built for the moment when every team has bought a slightly different AI workflow and nobody knows what is still worth paying for."
      />
      <motion.div className="mt-12 grid gap-5 md:grid-cols-3" variants={stagger}>
        {problems.map((problem) => {
          const Icon = problem.icon;
          return (
            <motion.article
              className="group cursor-pointer rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.055]"
              key={problem.title}
              variants={reveal}
            >
              <div className="mb-8 flex size-12 items-center justify-center rounded-2xl bg-white/[0.06] text-cyan-100 ring-1 ring-white/10">
                <Icon className="size-5" />
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.025em] text-white">
                {problem.title}
              </h3>
              <p className="mt-3 leading-7 tracking-[-0.01em] text-slate-400">
                {problem.description}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

