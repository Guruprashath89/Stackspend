import {
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  GitBranch,
  Hexagon,
  MessageSquareText,
  Sparkles,
} from "lucide-react";

export const auditTools = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "Team seats, Plus plans, and shared workspace usage.",
    icon: MessageSquareText,
    defaultSpend: 0,
  },
  {
    id: "claude",
    name: "Claude",
    description: "Claude Pro, Team seats, and research-heavy workflows.",
    icon: BrainCircuit,
    defaultSpend: 0,
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "Developer seats, Pro plans, and agentic coding work.",
    icon: Code2,
    defaultSpend: 0,
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    description: "Engineering seat overlap and IDE assistant usage.",
    icon: GitBranch,
    defaultSpend: 0,
  },
  {
    id: "gemini",
    name: "Gemini",
    description: "Workspace AI plans and multimodal assistant usage.",
    icon: Sparkles,
    defaultSpend: 0,
  },
  {
    id: "grok",
    name: "Grok",
    description: "Research, social listening, and secondary assistant use.",
    icon: Hexagon,
    defaultSpend: 0,
  },
  {
    id: "openai-api",
    name: "OpenAI API",
    description: "Model spend, request volume, and production workloads.",
    icon: Cpu,
    defaultSpend: 0,
  },
  {
    id: "anthropic-api",
    name: "Anthropic API",
    description: "Claude API workloads, agents, and eval experiments.",
    icon: Bot,
    defaultSpend: 0,
  },
];

export const planOptions: Record<string, string[]> = {
  chatgpt: ["Free", "Plus", "Team", "Enterprise"],
  claude: ["Free", "Pro", "Team", "Enterprise"],
  cursor: ["Hobby", "Pro", "Business"],
  copilot: ["Individual", "Business", "Enterprise"],
  gemini: ["Free", "Advanced", "Workspace"],
  grok: ["Free", "Premium", "Premium+"],
  "anthropic-api": ["Pay as you go", "Committed use", "Enterprise"],
};

export const defaultConfig = {
  planType: "",
  seats: "",
  spend: "",
  usage: "",
  requests: "",
  developers: "",
};
