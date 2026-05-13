import {
  Activity,
  BrainCircuit,
  FileChartColumn,
  GitBranch,
  Hexagon,
  Layers3,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  WalletCards,
  Zap,
} from "lucide-react";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Savings", href: "#savings" },
];

export const supportedTools = [
  "ChatGPT",
  "Claude",
  "Cursor",
  "Copilot",
  "Gemini",
  "OpenAI API",
  "Anthropic API",
];

export const teamSignals = [
  { icon: GitBranch, label: "Dev teams" },
  { icon: Hexagon, label: "AI agencies" },
  { icon: Activity, label: "Seed startups" },
  { icon: ShieldCheck, label: "Ops leads" },
];

export const problems = [
  {
    icon: Layers3,
    title: "Overlapping subscriptions",
    description:
      "Teams often pay for ChatGPT, Claude, Gemini, and IDE copilots that solve the same job.",
  },
  {
    icon: WalletCards,
    title: "Wrong plan tiers",
    description:
      "Annual and enterprise plans can hide unused seats, duplicate add-ons, and premium features nobody touches.",
  },
  {
    icon: ReceiptText,
    title: "Invisible API drift",
    description:
      "Model experiments, stale keys, and forgotten workloads quietly grow into real monthly spend.",
  },
];

export const features = [
  {
    icon: Zap,
    title: "Instant AI Spend Audit",
    description:
      "Upload or enter your stack and get a clear read on spend, usage, and plan fit in minutes.",
  },
  {
    icon: BrainCircuit,
    title: "Personalized Recommendations",
    description:
      "StackSpend suggests cheaper plans, better bundles, and smarter model routing for your workflow.",
  },
  {
    icon: FileChartColumn,
    title: "Shareable Reports",
    description:
      "Export a clean savings brief for founders, finance, engineering leads, and clients.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description:
      "Turn scattered subscription data into prioritized actions with estimated monthly and annual savings.",
  },
];

export const steps = [
  {
    title: "Add your AI tools",
    description:
      "Select products, plans, seats, API usage, and the work your team actually uses them for.",
  },
  {
    title: "We analyze overspending",
    description:
      "StackSpend checks overlap, underused plans, seat waste, and API cost patterns.",
  },
  {
    title: "Get savings recommendations",
    description:
      "Receive a prioritized audit with exact cuts, swaps, downgrades, and projected savings.",
  },
];

export const savings = [
  {
    value: "$320/mo",
    label: "Saved by replacing duplicate writing seats",
    detail: "Agency team, 14 people",
  },
  {
    value: "41%",
    label: "Reduction after model routing cleanup",
    detail: "Developer toolchain",
  },
  {
    value: "$7.8k/yr",
    label: "Recovered from unused enterprise plans",
    detail: "Seed-stage startup",
  },
];

export const recommendations = [
  "Downgrade 8 idle ChatGPT Team seats",
  "Move low-volume API jobs to batch pricing",
  "Replace overlapping research tools with Claude Pro",
];

export const spendRows = [
  { name: "OpenAI API", spend: "$1,260", width: "w-[88%]", color: "bg-cyan-300" },
  { name: "Cursor", spend: "$520", width: "w-[55%]", color: "bg-violet-300" },
  { name: "Claude", spend: "$410", width: "w-[44%]", color: "bg-blue-300" },
  { name: "ChatGPT", spend: "$280", width: "w-[31%]", color: "bg-emerald-300" },
  { name: "Grok", spend: "$200", width: "w-[24%]", color: "bg-sky-300" },
];

