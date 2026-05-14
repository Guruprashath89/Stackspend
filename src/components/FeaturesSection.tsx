"use client";

import { motion } from "framer-motion";

import { features } from "@/components/landing-data";
import {
  reveal,
  stagger,
  viewportOnce,
} from "@/components/landing-motion";

import { SectionHeader } from "@/components/SectionHeader";

export function FeaturesSection() {
  return (
    <motion.section
      className="border-y border-white/10 bg-[#07101c] px-4 py-14 sm:px-6 sm:py-24 lg:px-8"
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
        className="
        mx-auto
        mt-10
        grid
        max-w-7xl
        gap-4
        md:grid-cols-2
        "
        variants={stagger}
      >

        {features.map((feature) => {

          const Icon = feature.icon;

          return (

            <motion.article
              key={feature.title}
              variants={reveal}
              className="
              cursor-pointer
              rounded-3xl
              border
              border-white/10
              bg-gradient-to-br
              from-white/[0.07]
              to-white/[0.025]

              p-5
              sm:p-6

              transition
              duration-300

              hover:-translate-y-1
              hover:border-violet-300/35
              hover:from-cyan-300/10
              hover:to-white/[0.035]
              "
            >

              {/* MOBILE */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">

                <div
                  className="
                  flex
                  size-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-slate-950/50
                  text-violet-100
                  ring-1
                  ring-white/10
                  "
                >
                  <Icon className="size-5" />
                </div>

                <div>

                  <h3
                    className="
                    text-lg
                    sm:text-xl
                    font-semibold
                    tracking-[-0.025em]
                    text-white
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                    mt-2
                    text-sm
                    sm:text-base
                    leading-6
                    sm:leading-7
                    tracking-[-0.01em]
                    text-slate-400
                    "
                  >
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