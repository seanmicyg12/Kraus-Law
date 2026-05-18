import Link from "next/link";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/seo";

export default function CtaBand() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 hero-radial" />
      <div className="absolute inset-0 paper-texture" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-cream-50">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          The first call is free.<br/>
          <span className="text-shimmer">The clarity that follows is priceless.</span>
        </h2>
        <p className="mt-5 text-lg text-cream-100/80 max-w-2xl mx-auto">
          Tell us what's going on. We'll listen, give it to you straight, and only take the case if we can genuinely help.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gold-500 px-7 py-4 text-base font-semibold text-navy-950 hover:bg-gold-400 transition shadow-xl shadow-gold-500/30"
          >
            Book My Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-cream-50/30 bg-cream-50/5 backdrop-blur-sm px-7 py-4 text-base font-semibold text-cream-50 hover:bg-cream-50/10 transition"
          >
            <Phone className="h-4 w-4" />
            Call {SITE.phone}
          </a>
        </div>
        <p className="mt-6 text-sm text-cream-200/60 flex items-center justify-center gap-2">
          <MessageCircle className="h-4 w-4" />
          Prefer to type? Use the AI assistant — it can book your consult and answer most questions instantly.
        </p>
      </div>
    </section>
  );
}
