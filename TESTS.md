 Testing Strategy

## Overview

StackSpend uses deterministic financial calculations for the audit engine.

Because the core business logic is rules-based instead of AI-generated, the most important testing priority was validating:
- spend calculations
- savings calculations
- benchmark generation
- recommendation logic
- audit consistency

The testing strategy intentionally focused on:
- deterministic outputs
- stable calculations
- predictable recommendation generation

instead of snapshot-heavy UI testing.

---

# Test Scope

The audit engine is the primary unit-tested component.

Key areas tested:

- monthly spend calculation
- waste estimation
- projected savings
- annual opportunity calculation
- benchmark status generation
- recommendation generation
- risk identification

---

# Why Deterministic Logic Was Prioritized

The project intentionally separates:
- deterministic calculations
from
- AI-generated narrative analysis

Financial calculations are tested because they:
- directly affect user trust
- impact business recommendations
- require stable outputs

AI-generated summaries are intentionally treated as:
- non-deterministic narrative output

and therefore were not deeply unit-tested during the MVP stage.

---

# Current Testing Approach

The current test strategy focuses on:

## Unit Tests

Testing:
- audit engine calculations
- benchmark generation
- recommendation logic

## Manual UI Validation

Testing:
- responsive layouts
- report rendering
- PDF export
- AI fallback states

## Production Build Validation

Testing:
```bash id="x3d8q1"
npm run build

to verify:

type safety
route integrity
deployment readiness
Example Test Cases
Monthly Spend Calculation

Input:

multiple AI tools
different pricing tiers

Expected:

correct total monthly spend
Waste Estimation

Input:

overlapping subscriptions
underutilized plans

Expected:

non-zero waste estimation
Annual Opportunity

Expected:

monthly savings × 12
Benchmark Classification

Expected:

below benchmark
within benchmark
above benchmark

based on spend thresholds.

AI Testing Philosophy

AI responses are intentionally constrained using:

strict prompt instructions
JSON-only output
structured schemas

Instead of deeply testing LLM wording, the MVP prioritizes:

parsing safety
schema consistency
graceful failure handling
Current Limitations

Current testing limitations:

no end-to-end automation
limited UI automation
no browser testing pipeline
no AI response mocking
no PDF snapshot testing

These were intentionally deferred during MVP development.

Future Testing Improvements

Potential future improvements:

Playwright end-to-end tests
API integration tests
AI response mocking
PDF snapshot testing
visual regression testing
accessibility testing
performance testing
Architectural Testing Philosophy

The testing strategy prioritizes:

deterministic correctness
financial reliability
stable business logic
deployment safety

The goal was to ensure:

trustworthy audit calculations
predictable report generation
resilient production behavior
