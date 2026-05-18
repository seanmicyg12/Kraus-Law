"use client";
import { useState } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Something went wrong.");
      }
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Please try again or call us.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-3" />
        <h3 className="font-serif text-2xl font-semibold text-navy-900">Thank you.</h3>
        <p className="mt-2 text-navy-700">
          Grace will personally reply within two hours during business days. For anything urgent, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wider">Name</label>
          <input
            name="name"
            required
            className="w-full bg-white border border-navy-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold-400 text-navy-900"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wider">Phone</label>
          <input
            name="phone"
            type="tel"
            required
            className="w-full bg-white border border-navy-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold-400 text-navy-900"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wider">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full bg-white border border-navy-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold-400 text-navy-900"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wider">Matter Type</label>
        <select
          name="matter"
          required
          defaultValue=""
          className="w-full bg-white border border-navy-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold-400 text-navy-900"
        >
          <option value="" disabled>Choose one</option>
          <option>Divorce</option>
          <option>Family Law / Custody</option>
          <option>Real Estate Closing</option>
          <option>Social Security Disability</option>
          <option>Order of Protection</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wider">
          Briefly, what's going on?
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full bg-white border border-navy-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold-400 text-navy-900 resize-none"
        />
      </div>

      <div className="flex items-start gap-2 text-xs text-navy-600">
        <input type="checkbox" name="consent" required className="mt-0.5 accent-navy-900"/>
        <span>I understand contacting Kraus Law Office does not create an attorney-client relationship until a written engagement is signed.</span>
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 p-3 rounded-md bg-red-50 border border-red-200 text-sm text-red-800">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0"/>
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-navy-900 px-4 py-3.5 text-base font-semibold text-cream-50 hover:bg-navy-800 disabled:opacity-50 transition"
      >
        {status === "sending" ? "Sending..." : (<>Request My Free Consultation <Send className="h-4 w-4"/></>)}
      </button>
    </form>
  );
}
