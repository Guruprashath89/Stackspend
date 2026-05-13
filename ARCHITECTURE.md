# StackSpend Architecture

## Overview

StackSpend is a lightweight SaaS-style AI spend auditing platform built using Next.js.

The system allows users to:
- input AI tooling usage
- analyze monthly spend
- detect inefficiencies
- generate optimization recommendations
- export executive-style reports

The application combines deterministic financial calculations with AI-generated operational insights.

---

# High-Level Architecture

User Input
↓
Audit Engine
↓
Financial Calculations
↓
AI Analysis Layer
↓
Results Dashboard
↓
PDF Export

---

# Frontend Architecture

The frontend uses:
- Next.js App Router
- React client components
- Tailwind CSS
- Framer Motion animations

The UI is structured into reusable sections:

- Landing Page
- Audit Flow
- Results Dashboard
- PDF Export Layer

The design intentionally resembles a modern SaaS analytics platform instead of a traditional admin dashboard.

---

# Audit Engine

The audit engine is deterministic.

This means:
- financial calculations are rules-based
- pricing logic is predictable
- outputs remain explainable

The engine calculates:
- monthly spend
- estimated waste
- projected savings
- annual opportunity
- benchmark comparisons
- financial risks
- action plans

The audit engine intentionally avoids using AI for calculations to reduce hallucination risk.

---

# AI Analysis Layer

AI is used only for:
- executive summaries
- operational recommendations
- optimization insights
- narrative analysis

This separation improves reliability while still leveraging LLMs for natural-language reporting.

The AI integration uses:
- Groq API
- llama-3.3-70b-versatile

The API route:
/api/analyze

acts as the backend analysis layer.

Persistence Layer

The current MVP uses:

localStorage

to persist audit state between pages.

This decision was made to:

reduce MVP complexity
speed up iteration
avoid early backend overhead

Future versions should migrate to:

Supabase
PostgreSQL
authenticated report storage
PDF Export System

PDF reports are generated using:

jsPDF

The export system uses:

manual layout rendering
dynamic page overflow handling
executive-style report formatting

The PDF layer includes:

financial summaries
benchmark analysis
AI recommendations
operational insights
executive summaries
API Architecture

The backend currently consists of:

Next.js API routes
serverless deployment model

Current API route:

/api/analyze

Responsibilities:

receive audit data
generate AI analysis
parse structured JSON responses
return frontend-safe output
Deployment Architecture

Deployment target:

Vercel

Reasons:

optimized for Next.js
serverless API support
simplified deployment workflow
automatic scaling
Current Limitations
No Database Persistence

Reports currently disappear if localStorage is cleared.

No Authentication

The MVP currently supports anonymous usage only.

No Billing Integrations

Tool pricing is currently mocked using static pricing logic.

Limited AI Context

AI recommendations currently rely on summarized audit metrics instead of deep operational telemetry.

Future Improvements
Database-backed reports
Authentication system
Team collaboration
Shareable public reports
Email delivery workflows
Real billing integrations
Advanced analytics
Historical spend tracking
Scheduled audits
Multi-team support

Architectural Philosophy

The architecture prioritizes:

iteration speed
clarity
deterministic calculations
AI-assisted reporting
SaaS-style UX
lightweight deployment

The goal was to build a realistic AI SaaS MVP that balances:

engineering simplicity
product polish
operational realism
