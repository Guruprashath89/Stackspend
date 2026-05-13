# Development Log

## Project Goal

The goal of StackSpend was to build a lightweight AI SaaS platform that helps teams audit AI tooling costs, detect overspending, and generate optimization recommendations.

The project was intentionally designed to simulate:
- modern SaaS UX
- AI-assisted reporting
- executive-style analytics workflows

instead of a traditional CRUD dashboard.

---

# Initial MVP Scope

The first MVP focused on:

- landing page
- audit flow
- deterministic spend calculations
- results dashboard
- AI-generated recommendations

The initial version intentionally prioritized:
- iteration speed
- UI polish
- product feel
- simplified architecture

over backend complexity.

---

# Major Development Decisions

## Deterministic Audit Engine

One of the earliest architectural decisions was separating:
- financial calculations
from
- AI-generated insights

Financial logic was implemented using deterministic rules to avoid:
- hallucinated calculations
- inconsistent outputs
- unstable recommendations

AI was limited to:
- executive summaries
- operational insights
- recommendation phrasing

This significantly improved reliability.

---

## Groq API Integration

The application originally explored multiple AI providers.

Groq was selected because:
- low latency
- free development tier
- OpenAI-compatible SDK
- simplified integration

The model:
```txt id="sv2c5g"
llama-3.3-70b-versatile

was used for narrative analysis.

Results Page Evolution

The results dashboard evolved significantly during development.

Early versions:

generated AI analysis on every page refresh
caused unnecessary API calls
increased quota usage
created inconsistent outputs

The architecture was later improved to:

Audit Generation
→ Single AI Call
→ Save Results
→ Render Persisted Report

This reduced:

API waste
latency
duplicate generation

while improving professionalism.

PDF Export Challenges

The PDF export system became one of the most iterative parts of the project.

Initial approaches attempted:

full dashboard screenshot export
html2canvas rendering

This created issues such as:

unsupported CSS rendering
layout instability
iframe rendering failures
poor scalability

The architecture was later redesigned using:

manual jsPDF rendering
structured document layout
dynamic page overflow handling

This produced significantly more stable executive-style reports.

Dynamic Page Overflow Handling

One major issue involved content being cut off after the first PDF page.

The export system originally:

rendered content sequentially
checked overflow too late

This caused:

truncated sections
invisible text
broken layouts

The system was redesigned using:

predictive overflow detection
estimated section heights
dynamic page creation

before rendering large content blocks.

Responsive UI Refinement

Several UI refinements were made after desktop completion.

Key improvements included:

responsive navigation
mobile button layouts
stacked mobile sections
dashboard spacing improvements
executive-style hierarchy

The goal was to make the platform feel closer to a modern SaaS analytics product.

AI Failure Handling

The original AI integration assumed successful responses.

Later iterations added:

graceful fallback states
loading states
invalid JSON handling
AI outage handling

This improved:

production resilience
user trust
UX consistency
Current MVP State

The current MVP supports:

AI spend auditing
deterministic financial analysis
AI-generated recommendations
industry benchmark analysis
PDF export
responsive dashboard UX
serverless deployment architecture
Known Limitations

Current limitations include:

no database persistence
no authentication
mocked pricing assumptions
no real billing integrations
