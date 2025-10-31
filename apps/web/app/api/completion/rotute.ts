import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const { prompt } = await request.json();
    const result = await generateText({
        model: openai("gpt-4o-mini"),
        prompt,
    });
    return NextResponse.json(result);
}
