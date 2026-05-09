import { CircleDollarSign, GitBranch } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8"
      id="github"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-lg bg-white text-slate-950">
            <CircleDollarSign className="size-4" />
          </div>
          <div>
            <p className="text-slate-300">StackSpend</p>
            <p className="mt-1 max-w-sm text-xs text-slate-600">
              Built for AI-first teams managing modern software spend.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          <a
            className="flex cursor-pointer items-center gap-2 transition-colors duration-300 hover:text-white"
            href="#github"
          >
            <GitBranch className="size-4" />
            GitHub
          </a>
          <a className="cursor-pointer transition-colors duration-300 hover:text-white" href="#">
            Built with Next.js
          </a>
          <a className="cursor-pointer transition-colors duration-300 hover:text-white" href="#">
            Privacy
          </a>
          <a className="cursor-pointer transition-colors duration-300 hover:text-white" href="#">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

