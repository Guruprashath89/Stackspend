# Reflection

## What Went Well

The strongest part of the project was the combination of:
- deterministic financial logic
- AI-generated narrative analysis
- executive-style UX

The separation between:
- calculations
and
- AI summaries

significantly improved reliability and made the application feel more production-oriented.

The PDF export system also evolved into one of the strongest parts of the MVP after redesigning the architecture around structured rendering instead of screenshot exports.

---

# Biggest Challenges

## 1. PDF Rendering Complexity

One of the hardest engineering problems was scalable PDF generation.

Early approaches using:
- html2canvas
- dashboard screenshots

caused:
- rendering instability
- unsupported CSS issues
- iframe rendering problems

The system was redesigned using:
- jsPDF
- manual layout rendering
- predictive overflow handling

which produced significantly more stable results.

---

## 2. AI Output Stability

Another challenge involved ensuring predictable AI outputs.

LLMs frequently:
- returned malformed JSON
- added markdown formatting
- produced inconsistent structures

This was mitigated by:
- strict prompt constraints
- JSON-only instructions
- schema enforcement
- graceful fallback handling

---

## 3. Product Positioning

A major realization during development was that:
UX quality heavily affects perceived intelligence.

Even when calculations remained identical, improvements in:
- hierarchy
- spacing
- executive formatting
- report structure

dramatically improved how professional the product felt.

---

# What I Would Improve With More Time

Given more time, the next priorities would be:

- database-backed persistence
- authentication
- collaborative reporting
- real billing integrations
- scheduled audits
- email workflows
- advanced analytics
- historical spend tracking

---

# Most Important Lesson

The most important lesson from this project was that building AI products is not only about AI integration.

The real challenge is combining:
- reliable systems
- strong UX
- structured outputs
- operational clarity
- product thinking

into a coherent user experience.

The project became significantly stronger once the focus shifted from:
- adding features
to
- improving workflow quality
- improving presentation
- improving resilience
