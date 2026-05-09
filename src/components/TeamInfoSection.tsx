"use client";

type TeamInfo = {
  teamSize: string;
  company: string;
  role: string;
};

type TeamInfoSectionProps = {
  teamInfo: TeamInfo;
  onChange: (key: keyof TeamInfo, value: string) => void;
};

const inputClass =
  "h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-cyan-300/45 focus:bg-cyan-300/[0.035] focus:shadow-[0_0_24px_rgba(103,232,249,0.10)]";

export function TeamInfoSection({ teamInfo, onChange }: TeamInfoSectionProps) {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-100">
        Team information
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">
        Tell us who the audit is for
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <label className="space-y-2">
          <span className="text-xs font-medium uppercase tracking-[0.13em] text-slate-500">
            Team size
          </span>
          <input
            className={inputClass}
            inputMode="numeric"
            onChange={(event) => onChange("teamSize", event.target.value)}
            placeholder="18"
            value={teamInfo.teamSize}
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-medium uppercase tracking-[0.13em] text-slate-500">
            Company name
          </span>
          <input
            className={inputClass}
            onChange={(event) => onChange("company", event.target.value)}
            placeholder="Optional"
            value={teamInfo.company}
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-medium uppercase tracking-[0.13em] text-slate-500">
            Role
          </span>
          <input
            className={inputClass}
            onChange={(event) => onChange("role", event.target.value)}
            placeholder="Founder, CTO, Ops..."
            value={teamInfo.role}
          />
        </label>
      </div>
    </section>
  );
}

