import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      monthlySpend,
      estimatedWaste,
      projectedSavings,
      healthScore,
      tools,
    } = body;

    const toolsText = tools
      .map(
        (tool: any) =>
          `${tool.name}: $${tool.spend}`
      )
      .join("\n");

    const model =
      genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
      });

    const prompt = `
You are a professional AI SaaS spend optimization analyst working for StackSpend.

Analyze this company's AI tooling stack professionally.

Monthly Spend: $${monthlySpend}
Estimated Waste: $${estimatedWaste}
Projected Savings: $${projectedSavings}
Health Score: ${healthScore}/100

Selected Tools:
${toolsText}

Generate:
1. Executive Summary
2. Top Savings Opportunities
3. Risk Analysis
4. Optimization Advice
5. Final Recommendation

Keep the tone enterprise-grade, concise, and realistic.
`;

    const result =
      await model.generateContent(
        prompt
      );

    const response =
      result.response.text();

    return NextResponse.json({
      success: true,
      analysis: response,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to generate AI analysis",
      },
      { status: 500 }
    );
  }
}