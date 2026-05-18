import { NextResponse } from "next/server";
import OpenAI from "openai";
import { retrieve } from "@/lib/knowledge-base";
import { SITE } from "@/lib/seo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `You are the AI assistant for ${SITE.name}, an Elmhurst, IL solo law practice run by attorney ${SITE.attorney}. The firm handles family law, divorce, residential real estate closings, and Social Security disability appeals across DuPage County, Illinois.

YOUR JOB:
1. Answer visitor questions clearly using ONLY the provided "Knowledge Base" context below. Do not invent fees, timelines, or legal claims that are not in the context.
2. If a question is outside the four practice areas (family/divorce/real-estate/SSDI in Illinois), politely say it's outside scope and offer to take a message.
3. Never give specific legal advice for the visitor's situation — only general information. Always end legal questions with: "For advice on your specific situation, please book a free consultation."
4. Be warm, plain-spoken, and direct. No legalese. Short paragraphs.
5. Push toward action: schedule a free consultation, call ${SITE.phone}, or fill out the contact form.
6. Office: ${SITE.address.full}. Hours: ${SITE.hours}.

DO NOT:
- Make up case law, statutes, or judges
- Quote fees not listed in the knowledge base
- Promise outcomes
- Discuss other firms or attorneys

If the visitor seems in crisis (mentions abuse, self-harm, immediate danger), respond with empathy, tell them to call 911 if in immediate danger, give the DuPage Family Shelter Service number (630) 469-5650, and offer to have Grace call them back.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "messages required" }, { status: 400 });
    }

    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    const query = lastUser?.content || "";
    const chunks = retrieve(query, 4);
    const context = chunks
      .map((c, i) => `[${i + 1}] ${c.topic}\n${c.content}`)
      .join("\n\n");

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey || apiKey.includes("...")) {
      // Graceful fallback when no key is configured yet — returns the most relevant KB chunk.
      const reply = chunks[0]
        ? `${chunks[0].content}\n\nFor advice on your specific situation, please book a free consultation at ${SITE.phone} or use the contact form.`
        : `I'd be happy to help — could you tell me a bit more? Or call us at ${SITE.phone}.`;
      return NextResponse.json({ reply, sourced: chunks.map((c) => c.id) });
    }

    const openai = new OpenAI({ apiKey });

    const chat = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.4,
      max_tokens: 400,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "system", content: `Knowledge Base context:\n\n${context}` },
        ...messages.map((m: { role: string; content: string }) => ({
          role: m.role as "user" | "assistant",
          content: m.content
        }))
      ]
    });

    const reply = chat.choices[0]?.message?.content?.trim() || "Sorry, I'm having trouble. Please call us at " + SITE.phone + ".";
    return NextResponse.json({ reply, sourced: chunks.map((c) => c.id) });
  } catch (err) {
    console.error("[/api/chat]", err);
    return NextResponse.json(
      { reply: `Sorry — I'm having trouble. Please call us at ${SITE.phone} or use the contact form.` },
      { status: 200 }
    );
  }
}
