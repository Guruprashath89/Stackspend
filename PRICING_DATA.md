# Pricing Data Sources

## Overview

StackSpend currently uses a simplified pricing model to estimate AI tooling spend, savings opportunities, and benchmark comparisons.

The MVP prioritizes:
- predictable calculations
- deterministic outputs
- lightweight implementation

instead of real-time billing integrations.

---

# Pricing Sources

The following public pricing pages were referenced during implementation.

## ChatGPT

Official Pricing:
https://openai.com/chatgpt/pricing/

Used For:
- ChatGPT Plus estimates
- Team seat assumptions

---

## OpenAI API

Official Pricing:
https://openai.com/api/pricing/

Used For:
- API usage assumptions
- token cost approximations

---

## Claude

Official Pricing:
https://www.anthropic.com/pricing

Used For:
- Claude Pro estimates
- assistant overlap modeling

---

## Gemini

Official Pricing:
https://ai.google.dev/pricing

Used For:
- Gemini Advanced estimates
- AI assistant comparison

---

## Cursor

Official Pricing:
https://cursor.com/pricing

Used For:
- developer tooling estimates
- IDE assistant benchmarking

---

## GitHub Copilot

Official Pricing:
https://github.com/features/copilot

Used For:
- engineering productivity comparisons
- developer assistant overlap

---

# Pricing Model Assumptions

The current MVP uses simplified pricing assumptions.

Examples:
- flat monthly subscriptions
- estimated team seat allocation
- simplified API usage tiers
- generalized benchmark ranges

The system intentionally avoids:
- real billing integrations
- live API metering
- invoice ingestion
- token-level telemetry

during the MVP stage.

---

# Why Deterministic Pricing Was Chosen

Deterministic pricing logic was intentionally chosen because:

- calculations remain explainable
- outputs remain stable
- recommendations remain reproducible
- AI hallucination risk is reduced

AI is used only for:
- narrative analysis
- operational recommendations
- executive summaries

not for financial calculations.

---

# Current Limitations

The current pricing engine does not yet support:

- live billing integrations
- organization-wide usage telemetry
- token-level accounting
- regional pricing differences
- enterprise discount contracts
- dynamic pricing updates

---

# Future Improvements

Future versions may integrate:

- Stripe billing APIs
- OpenAI billing APIs
- Anthropic usage APIs
- usage telemetry pipelines
- automated invoice ingestion
- real-time spend dashboards

---

