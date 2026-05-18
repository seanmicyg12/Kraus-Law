"use client";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/seo";

export default function StickyCallButton() {
  return (
    <a
      href={`tel:${SITE.phoneRaw}`}
      className="lg:hidden fixed bottom-5 left-5 z-30 flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3.5 text-sm font-semibold text-cream-50 shadow-2xl active:scale-95 transition"
      aria-label="Call now"
    >
      <span className="pulse-dot relative flex h-2 w-2 rounded-full bg-green-400" />
      <Phone className="h-4 w-4" />
      Call Now
    </a>
  );
}
