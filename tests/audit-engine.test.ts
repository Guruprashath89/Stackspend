import { describe, it, expect } from "vitest";

import { generateAuditResults } from "../src/lib/audit-engine";

describe("Audit Engine", () => {

  const selectedTools = [
    "chatgpt",
    "claude",
    "cursor",
  ];

  const configs = {

    chatgpt: {
      spend: "$120",
      seats: "5",
      usage: "medium",
    },

    claude: {
      spend: "$80",
      seats: "3",
      usage: "medium",
    },

    cursor: {
      spend: "$200",
      seats: "10",
      usage: "high",
    },

  };

  const teamInfo = {
    teamSize: "12",
    company: "Test Company",
    role: "Engineering",
  };

  const result =
    generateAuditResults(
      selectedTools,
      configs,
      teamInfo
    );

  it(
    "calculates monthly spend",
    () => {

      expect(
        result.monthlySpend
      ).toBeGreaterThan(0);

    }
  );

  it(
    "calculates projected savings",
    () => {

      expect(
        result.projectedSavings
      ).toBeGreaterThanOrEqual(0);

    }
  );

  it(
    "calculates annual opportunity",
    () => {

      expect(
        result.annualOpportunity
      ).toBe(
        result.projectedSavings * 12
      );

    }
  );

  it(
    "generates benchmark status",
    () => {

      expect(
  result.industryBenchmark
).toBeDefined();
    }
  );

  it(
    "generates action plan",
    () => {

        expect(
    result.actionPlan
    ).toBeDefined();

    }
  );

});