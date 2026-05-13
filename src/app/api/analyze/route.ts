import OpenAI from "openai";
import { NextResponse } from "next/server";

const apiKey =
  process.env.GROQ_API_KEY || "development-fallback-key";

const client = new OpenAI({
  apiKey,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
You are an enterprise AI spend optimization analyst.

Analyze the following AI spend report professionally.

COMPANY AI SPEND DATA:

Monthly Spend:
$${body.monthlySpend}

Estimated Monthly Waste:
$${body.estimatedWaste}

Projected Savings Opportunity:
$${body.projectedSavings}

Annual Savings Opportunity:
$${body.annualOpportunity}

Spend Health Score:
${body.healthScore}/100

Selected AI Tools:
${body.tools
  ?.map(
    (tool: any) =>
      `- ${tool.name}: $${tool.spend}/month`
  )
  .join("\n")}

BUSINESS CONTEXT:
Company Name:
${body.teamInfo?.company || "Unknown"}

Team Size:
${body.teamInfo?.teamSize || "Unknown"}

Role:
${body.teamInfo?.role || "Unknown"}

- Higher health score means better spend efficiency
- Multiple assistant tools may indicate overlap
- Higher waste suggests redundant tooling or underutilized subscriptions
- Savings opportunities should feel realistic and operationally practical

Return ONLY valid JSON.


Use this exact structure:

{
  "executiveSummary": "short executive summary",

  "riskLevel": "Low",

  "optimizationScore": 82,

  "recommendations": [
    {
      "title": "recommendation title",
      "description": "recommendation explanation",
      "impact": "High"
    }
  ],

  "insights": [
    "insight 1",
    "insight 2",
    "insight 3"
  ]
}

DO NOT return markdown.
DO NOT return code blocks.
ONLY return raw JSON.
`;

    const response =
      await client.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],

        temperature: 0.5,
      });

    const raw =
      response.choices[0].message.content;

    console.log(
      "RAW AI RESPONSE:",
      raw
    );

    let parsedAnalysis;

    try {
      parsedAnalysis = JSON.parse(
        raw || "{}"
      );
    } catch (parseError) {
      console.error(
        "JSON PARSE ERROR:",
        parseError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "AI returned invalid JSON",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      analysis: parsedAnalysis,
    });

  } catch (error) {

    console.error(
      "AI ROUTE ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to generate AI analysis",
      },
      {
        status: 500,
      }
    );
  }
}