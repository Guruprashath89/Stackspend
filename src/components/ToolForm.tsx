"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { auditTools, defaultConfig, planOptions } from "@/components/audit-data";

type ToolConfig = typeof defaultConfig;

type ToolFormProps = {
  selectedTools: string[];
  configs: Record<string, ToolConfig>;
  onConfigChange: (toolId: string, key: keyof ToolConfig, value: string) => void;
};

const inputClass =
  "h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-cyan-300/45 focus:bg-cyan-300/[0.035] focus:shadow-[0_0_24px_rgba(103,232,249,0.10)]";

const labelClass = "text-xs font-medium uppercase tracking-[0.13em] text-slate-500";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="space-y-2">
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  );
}

export function ToolForm({ selectedTools, configs, onConfigChange }: ToolFormProps) {
  const selected = auditTools.filter((tool) => selectedTools.includes(tool.id));

  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-100">
          Configuration
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">
          Add plan and spend details
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          These details power the live savings model and make the final audit
          more useful.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        <AnimatePresence initial={false}>
          {selected.length === 0 ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-dashed border-white/12 bg-black/15 p-6 text-sm text-slate-500"
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: 10 }}
            >
              Select tools above to configure your stack.
            </motion.div>
          ) : (
            selected.map((tool) => {
              const Icon = tool.icon;
              const config = configs[tool.id] ?? defaultConfig;
              const plans = planOptions[tool.id] ?? ["Free", "Pro", "Team", "Enterprise"];
              const isApi = tool.id === "openai-api";
              const isCursor = tool.id === "cursor";

              return (
                <motion.div
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1322]/78"
                  exit={{ opacity: 0, y: -12, height: 0 }}
                  initial={{ opacity: 0, y: 18, height: 0 }}
                  key={tool.id}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-2xl bg-white/[0.055] text-cyan-100 ring-1 ring-white/10">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold tracking-[-0.02em] text-white">
                          {tool.name}
                        </h3>
                        <p className="text-xs text-slate-500">Selected tool</p>
                      </div>
                    </div>
                    <ChevronDown className="size-4 text-slate-600" />
                  </div>

                  <div className="grid gap-4 p-5 sm:grid-cols-2">
                    {!isApi && (
                      <Field label="Plan Type">
                        <select
                          className={`${inputClass} cursor-pointer`}
                          onChange={(event) =>
                            onConfigChange(tool.id, "planType", event.target.value)
                          }
                          value={config.planType}
                        >
                          <option value="">Select plan</option>
                          {plans.map((plan) => (
                            <option className="bg-slate-950" key={plan} value={plan}>
                              {plan}
                            </option>
                          ))}
                        </select>
                      </Field>
                    )}

                    {isCursor ? (
                      <Field label="Number of developers">
                        <input
                          className={inputClass}
                          inputMode="numeric"
                          onChange={(event) =>
                            onConfigChange(tool.id, "developers", event.target.value)
                          }
                          placeholder="8"
                          value={config.developers}
                        />
                      </Field>
                    ) : !isApi ? (
                      <Field label={tool.id === "chatgpt" ? "Number of seats" : "Seats"}>
                        <input
                          className={inputClass}
                          inputMode="numeric"
                          onChange={(event) =>
                            onConfigChange(tool.id, "seats", event.target.value)
                          }
                          placeholder="6"
                          value={config.seats}
                        />
                      </Field>
                    ) : null}

                    <Field label={isApi ? "Monthly API spend" : "Monthly spend"}>
                      <input
                        className={inputClass}
                        inputMode="decimal"
                        onChange={(event) =>
                          onConfigChange(tool.id, "spend", event.target.value)
                        }
                        placeholder="$240"
                        value={config.spend}
                      />
                    </Field>

                    {isApi && (
                      <Field label="Estimated monthly requests">
                        <input
                          className={inputClass}
                          inputMode="numeric"
                          onChange={(event) =>
                            onConfigChange(tool.id, "requests", event.target.value)
                          }
                          placeholder="125000"
                          value={config.requests}
                        />
                      </Field>
                    )}

                    <Field label={isApi ? "Main use case" : "Primary usage"}>
                      <input
                        className={inputClass}
                        onChange={(event) =>
                          onConfigChange(tool.id, "usage", event.target.value)
                        }
                        placeholder="Coding, research, support..."
                        value={config.usage}
                      />
                    </Field>
                  </div>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

