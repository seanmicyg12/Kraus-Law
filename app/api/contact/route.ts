import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/seo";

export const runtime = "nodejs";

type Payload = {
  name: string;
  phone: string;
  email: string;
  matter: string;
  message: string;
  consent?: string;
};

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)
  );
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;
    const { name, phone, email, matter, message } = body;
    if (!name || !phone || !email || !matter || !message) {
      return NextResponse.json({ error: "All fields required." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL || "Kraus Law Intake <intake@krauslaw.example>";

    const html = `
      <div style="font-family:system-ui,Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#0f1e3d">
        <h2 style="font-family:Georgia,serif;color:#0f1e3d;border-bottom:2px solid #c9a961;padding-bottom:10px">New Consultation Request</h2>
        <table style="width:100%;border-collapse:collapse;margin-top:16px">
          <tr><td style="padding:8px 0;font-weight:600;width:120px">Name</td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Phone</td><td><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Matter</td><td>${escapeHtml(matter)}</td></tr>
        </table>
        <h3 style="margin-top:24px;font-family:Georgia,serif">Message</h3>
        <p style="background:#faf7f2;padding:16px;border-left:3px solid #c9a961;white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</p>
        <p style="color:#666;font-size:12px;margin-top:24px">Submitted to ${SITE.name} via krauslaw.com contact form.</p>
      </div>
    `;

    if (!apiKey || apiKey.includes("...") || !to) {
      // No email configured yet — still succeed so the form works, log to console.
      console.log("[CONTACT FORM]", { name, phone, email, matter, message });
      return NextResponse.json({ ok: true, logged: true });
    }

    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New consult: ${matter} — ${name}`,
      html
    });

    if (result.error) {
      console.error("[CONTACT FORM] Resend error:", result.error);
      return NextResponse.json({ error: "Email delivery failed." }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (err) {
    console.error("[/api/contact]", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
