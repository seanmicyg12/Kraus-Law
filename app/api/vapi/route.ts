import { NextResponse } from "next/server";
import { retrieve } from "@/lib/knowledge-base";
import { SITE } from "@/lib/seo";

export const runtime = "nodejs";

// ============================================================
// Vapi.ai webhook for the AI phone receptionist.
//
// Vapi calls this endpoint during a live phone conversation to:
//   - retrieve knowledge ("function call" tool: lookup_kb)
//   - capture a lead ("function call" tool: capture_lead)
//   - transfer to a human ("function call" tool: transfer_to_grace)
//
// Configure your Vapi assistant with these tools pointing to:
//   https://<your-domain>/api/vapi
//
// Set VAPI_WEBHOOK_SECRET in .env.local and configure the same
// secret in Vapi's webhook authentication settings.
// ============================================================

type VapiEvent = {
  message?: {
    type: string;
    functionCall?: { name: string; parameters: Record<string, unknown> };
    call?: { id: string; customer?: { number?: string } };
  };
};

export async function POST(req: Request) {
  const secret = process.env.VAPI_WEBHOOK_SECRET;
  const auth = req.headers.get("x-vapi-secret") || req.headers.get("authorization");
  if (secret && auth !== secret && auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const event = (await req.json()) as VapiEvent;
    const fn = event.message?.functionCall;
    if (!fn) {
      return NextResponse.json({ ok: true });
    }

    switch (fn.name) {
      case "lookup_kb": {
        const query = String(fn.parameters?.query ?? "");
        const chunks = retrieve(query, 3);
        const answer = chunks
          .map((c) => `${c.topic}: ${c.content}`)
          .join("\n\n");
        return NextResponse.json({
          result: answer || "I don't have that detail handy — Grace can answer it directly. Want me to book you a free consult?"
        });
      }

      case "capture_lead": {
        const lead = {
          name: String(fn.parameters?.name ?? ""),
          phone: String(fn.parameters?.phone ?? event.message?.call?.customer?.number ?? ""),
          email: String(fn.parameters?.email ?? ""),
          matter: String(fn.parameters?.matter ?? ""),
          notes: String(fn.parameters?.notes ?? ""),
          preferredTime: String(fn.parameters?.preferred_time ?? ""),
          callId: event.message?.call?.id
        };

        // Forward into the same intake email pipeline as the web form.
        try {
          await fetch(new URL("/api/contact", req.url).toString(), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: lead.name || "Caller via phone receptionist",
              phone: lead.phone || "unknown",
              email: lead.email || "phone-intake@krauslaw.example",
              matter: lead.matter || "Phone intake",
              message: `Phone call notes: ${lead.notes}\nPreferred time: ${lead.preferredTime}\nVapi Call ID: ${lead.callId}`,
              consent: "phone"
            })
          });
        } catch (e) {
          console.error("[vapi] forward to /api/contact failed", e);
        }

        return NextResponse.json({
          result: `Got it — I have you down for a free consultation. Grace will call you back at ${lead.phone} ${lead.preferredTime ? "around " + lead.preferredTime : "as soon as possible"}. Anything else I can help with?`
        });
      }

      case "transfer_to_grace": {
        return NextResponse.json({
          result: "transferring",
          action: "transfer",
          destination: { type: "number", number: SITE.phoneRaw }
        });
      }

      default:
        return NextResponse.json({ result: "I'm not sure how to handle that — let me take a message instead." });
    }
  } catch (err) {
    console.error("[/api/vapi]", err);
    return NextResponse.json({ error: "Vapi handler error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    name: "Kraus Law Vapi webhook",
    tools: ["lookup_kb", "capture_lead", "transfer_to_grace"]
  });
}
