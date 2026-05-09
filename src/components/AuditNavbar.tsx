"use client";

import { ArrowLeft, CircleDollarSign } from "lucide-react";
import Link from "next/link";

export function AuditNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050812]/72 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link className="flex cursor-pointer items-center gap-3" href="/">
          <div className="flex size-9 items-center justify-center rounded-xl bg-white text-slate-950 shadow-lg shadow-cyan-950/30">
            <CircleDollarSign className="size-5" />
          </div>
          <span className="text-base font-semibold tracking-[-0.02em] text-white">
            StackSpend
          </span>
        </Link>

        <Link
          className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm font-medium tracking-[-0.01em] text-slate-300 transition-all duration-300 hover:scale-[1.01] hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          href="/"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
      </nav>
    </header>
  );
}
