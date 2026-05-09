import { Sparkles } from "lucide-react";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-cyan-100">
        <Sparkles className="size-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 tracking-[-0.01em] text-slate-400">
        {description}
      </p>
    </div>
  );
}

