# StackSpend

StackSpend is an AI spend auditing platform designed for startups, agencies, and engineering teams to analyze AI tool subscriptions, detect overspending, and generate optimization recommendations instantly.

The platform helps teams identify redundant AI subscriptions, underutilized plans, overlapping tooling, and potential monthly + annual savings using a deterministic audit engine combined with AI-generated operational insights.

---

## Features

- AI tool spend audit
- Monthly + annual savings analysis
- AI-generated optimization insights
- Industry benchmark comparison
- Financial risk analysis
- Executive-style PDF export
- Shareable audit reports
- Responsive dashboard UI
- Persistent audit state

---

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- Groq API
- jsPDF
- Framer Motion

---

## Product Overview

StackSpend was designed as a lightweight SaaS-style AI cost optimization platform.

The goal was to simulate how modern startups manage growing AI subscription costs across tools such as:

- ChatGPT
- Claude
- Cursor
- Gemini
- OpenAI API
- Anthropic API

The system generates:
- financial summaries
- optimization opportunities
- benchmark analysis
- AI-generated operational recommendations

---

## Screenshots

### Landing Page

![Landing Page](./public/screenshots/landing.png)

### Audit Flow

![Audit Flow](./public/screenshots/audit.png)

### Results Dashboard

![Results Dashboard](./public/screenshots/results.png)

## Local Setup

Install dependencies:
npm install

Architecture Decisions
Deterministic Financial Logic

Financial calculations were intentionally implemented using deterministic logic instead of AI-generated calculations.

This ensures:

predictable outputs
explainable calculations
stable recommendations
lower hallucination risk
AI Used for Narrative Analysis

LLMs were used only for:

executive summaries
operational insights
recommendation wording

This separation improves reliability while still leveraging AI for natural-language reporting.

Next.js Fullstack Architecture

Next.js was chosen because it allows:

frontend rendering
API routes
server-side execution

inside a single deployment architecture.

Local Persistence During MVP Stage

Audit state currently uses localStorage to simplify MVP iteration speed and reduce backend complexity during the prototype stage.

Executive-Style UX

The interface was intentionally designed to resemble modern SaaS reporting tools instead of a traditional CRUD admin dashboard.

The focus was:

clarity
perceived professionalism
report shareability
executive readability
Deployment

Deployed using Vercel.

Future Improvements
Database-backed report persistence
Authentication system
Team collaboration
Real billing integrations
Advanced analytics
Scheduled reporting
Email delivery workflows
Author

Guru Prashath
