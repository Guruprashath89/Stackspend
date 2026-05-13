# Prompt Engineering Documentation

## Overview

StackSpend uses AI only for:
- executive summaries
- operational insights
- optimization recommendations
- narrative analysis

AI is intentionally NOT used for:
- financial calculations
- pricing logic
- savings computation

This separation improves:
- reliability
- explainability
- deterministic outputs

---

# AI Model

Provider:
- Groq API

Model:
- llama-3.3-70b-versatile

---

# Prompt Design Goals

The prompts were designed to:

- generate executive-style reporting
- avoid hallucinated financial calculations
- produce structured JSON
- create concise operational insights
- maintain deterministic UI rendering

---

# Main Analysis Prompt

The backend route:

/api/analyze

constructs a structured analysis prompt.

The prompt includes:

monthly spend
waste estimates
projected savings
annual opportunity
health score
selected tools
business context

The model is instructed to behave as:

enterprise AI spend optimization analyst
Output Constraints

The prompt explicitly requires:

valid JSON output only
no markdown
no code blocks
fixed schema structure

This reduces:

parsing failures
malformed responses
frontend instability
Structured Output Format

The AI response is constrained to:

{
  "executiveSummary": "",
  "riskLevel": "",
  "optimizationScore": 0,
  "recommendations": [],
  "insights": []
}

This allows:

predictable frontend rendering
stable PDF export
simplified parsing
Why AI Was Limited To Narrative Analysis

The system intentionally avoids using AI for:

pricing calculations
spend estimation
benchmark scoring

because deterministic calculations are:

easier to verify
reproducible
safer for financial logic

AI performs better for:

summarization
prioritization
operational phrasing
executive communication
Prompt Engineering Decisions
1. Structured Context Injection

Instead of free-form prompts, the system injects structured audit metrics into the prompt.

This improves:

consistency
contextual relevance
recommendation quality
2. Business Framing

The prompt includes operational context such as:

redundant tooling
overlapping subscriptions
underutilized plans

This encourages:

business-oriented outputs
realistic optimization suggestions

instead of generic AI responses.

3. JSON-Only Enforcement

The prompt repeatedly instructs the model to:

return valid JSON only
avoid markdown formatting
avoid explanations outside schema

This significantly reduces parsing errors.

Failure Handling

The frontend includes graceful fallback states if:

the AI request fails
invalid JSON is returned
rate limits occur
network failures happen

Fallback UX ensures:

the audit dashboard still functions
deterministic metrics remain available
the application does not crash
Limitations

Current prompt limitations:

recommendations are generated from summarized metrics
no historical spend context
no real billing telemetry
no organization-wide behavior analysis
Future Improvements

Potential future prompt improvements:

multi-step reasoning
retrieval-augmented analysis
historical spend comparisons
persona-aware recommendations
industry-specific optimization strategies
confidence scoring
tool usage clustering
Architectural Philosophy

The prompt architecture prioritizes:

reliability
explainability
structured outputs
deterministic calculations
stable frontend rendering

The goal was to combine:

predictable financial analysis
with
AI-generated executive intelligence
