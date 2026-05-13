"use client";

import { useEffect, useState } from "react";

const loadingSteps = [
  "Analyzing AI tool overlap...",
  "Reviewing operational inefficiencies...",
  "Detecting redundant subscriptions...",
  "Calculating optimization opportunities...",
  "Generating executive audit report...",
];

export default function AuditGeneratingOverlay() {

  const [step, setStep] =
    useState(0);

  useEffect(() => {

    const interval =
      setInterval(() => {

        setStep((prev) => {

          if (
            prev ===
            loadingSteps.length - 1
          ) {
            return prev;
          }

          return prev + 1;
        });

      }, 1800);

    return () =>
      clearInterval(interval);

  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md">

      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#081225] p-10 shadow-2xl">

        <div className="flex flex-col items-center text-center">

          {/* LOADER */}

          <div className="relative mb-8 h-20 w-20">

            <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20" />

            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-cyan-300" />

          </div>

          {/* TITLE */}

          <h2 className="text-3xl font-semibold text-white">
            Generating AI Audit
          </h2>

          <p className="mt-3 max-w-md leading-7 text-slate-400">
            Our AI engine is analyzing your tooling stack, identifying operational inefficiencies, and generating optimization recommendations.
          </p>

          {/* STEPS */}

          <div className="mt-10 w-full space-y-4">

            {loadingSteps.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition-all duration-500 ${
                    index <= step
                      ? "border-cyan-500/20 bg-cyan-500/5 text-cyan-100"
                      : "border-white/5 bg-white/[0.02] text-slate-500"
                  }`}
                >

                  <div
                    className={`h-2.5 w-2.5 rounded-full ${
                      index <= step
                        ? "bg-cyan-300"
                        : "bg-slate-600"
                    }`}
                  />

                  <p className="text-sm tracking-[-0.01em]">
                    {item}
                  </p>

                </div>
              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
}