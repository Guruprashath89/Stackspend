"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { primaryCtaClass } from "@/components/landing-buttons";
import { reveal, viewportOnce } from "@/components/landing-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <motion.section
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={reveal}
    >
      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(20,184,166,0.16),rgba(99,102,241,0.16)_48%,rgba(15,23,42,0.84))] p-6 sm:rounded-[2rem] sm:p-12 lg:p-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-medium tracking-[-0.01em] text-cyan-100">
              <ShieldCheck className="size-4" />
              Secure, lightweight, and built for team decisions
            </div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl">
              See How Much Your AI Stack Could Save
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 tracking-[-0.01em] text-slate-300">
              Start with a sample audit, then plug in your own tools when you
              are ready to turn the report into savings.
            </p>
          </div>
          <Link href="/audit" className={primaryCtaClass}>
              Start Free Audit
           <ArrowRight className="size-5" />
</Link>
        </div>
      </div>
    </motion.section>
  );
}
