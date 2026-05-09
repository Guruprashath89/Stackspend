"use client";

import { ArrowRight, CircleDollarSign } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navCtaClass } from "@/components/landing-buttons";
import { navItems } from "@/components/landing-data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050812]/72 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link className="flex cursor-pointer items-center gap-3" href="/">
          <div className="flex size-9 items-center justify-center rounded-xl bg-white text-slate-950 shadow-lg shadow-cyan-950/30">
            <CircleDollarSign className="size-5" />
          </div>
          <span className="text-base font-semibold tracking-[-0.02em]">
            StackSpend
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              className="cursor-pointer text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>

        <Link href="/audit" className={navCtaClass}>
          Start Free Audit
          <ArrowRight className="size-4" />
        </Link>
      </nav>
    </header>
  );
}
