"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

import { savings } from "@/components/landing-data";
import { reveal, stagger, viewportOnce } from "@/components/landing-motion";

export function SavingsSection() {
  return (
    <motion.section
      className="border-y border-white/10 bg-white/[0.025] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      id="savings"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={stagger}
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div variants={reveal}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-cyan-100">
            <BarChart3 className="size-3.5" />
            Savings
          </div>
          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl">
            Realistic savings examples, not vague cost advice.
          </h2>
          <p className="mt-5 text-base leading-7 tracking-[-0.01em] text-slate-400">
            StackSpend turns subscriptions, seats, API calls, and workflow fit
            into concrete estimated monthly and annual savings.
          </p>
        </motion.div>
        <motion.div className="grid gap-5 md:grid-cols-3" variants={stagger}>
          {savings.map((item) => (
            <motion.article
              className="cursor-pointer rounded-3xl border border-white/10 bg-[#0b1322] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25"
              key={item.value}
              variants={reveal}
            >
              <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                {item.value}
              </p>
              <p className="mt-5 text-sm font-medium leading-6 tracking-[-0.01em] text-slate-200">
                {item.label}
              </p>
              <p className="mt-3 text-xs text-slate-500">{item.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

