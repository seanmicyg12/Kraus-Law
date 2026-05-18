"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";
import { SITE } from "@/lib/seo";

export default function Hero() {
  return (
    <section className="relative hero-radial paper-texture pt-32 lg:pt-40 pb-24 lg:pb-32 overflow-hidden">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-navy-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 backdrop-blur-sm border border-gold-400/30 px-3.5 py-1.5 text-xs font-medium text-gold-200"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-green-400 pulse-dot relative" />
              Accepting new clients · Free 20-minute consultations
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream-50 leading-[1.05] tracking-tight"
            >
              Steady legal counsel for <span className="text-shimmer">life's biggest</span> chapters.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 text-lg text-cream-100/80 max-w-xl leading-relaxed"
            >
              Grace Kraus has guided Elmhurst families through divorce, custody, home closings, and Social Security disability appeals for over a decade. One attorney, every step — no junior hand-offs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-gold-500 px-6 py-3.5 text-base font-semibold text-navy-950 hover:bg-gold-400 transition shadow-xl shadow-gold-500/20"
              >
                Schedule Free Consultation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-cream-50/30 bg-cream-50/5 backdrop-blur-sm px-6 py-3.5 text-base font-semibold text-cream-50 hover:bg-cream-50/10 transition"
              >
                <Phone className="h-4 w-4" />
                Call {SITE.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-cream-100/70"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex">{[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400"/>)}</div>
                <span className="font-semibold text-cream-50">4.9</span>
                <span>· 180+ Google reviews</span>
              </div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-gold-400"/>Illinois Bar · 2014</div>
              <div className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-gold-400"/>Same-day callback</div>
            </motion.div>
          </div>

          {/* Right column - Glass intake card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/20 via-transparent to-navy-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-cream-50/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-cream-100 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-gold-400 font-serif font-semibold">
                  GK
                </div>
                <div>
                  <div className="font-semibold text-navy-900">Grace Kraus, Attorney</div>
                  <div className="text-xs text-navy-600">Reply in &lt; 2 hours · Mon–Sat</div>
                </div>
              </div>
              <p className="text-sm text-navy-800 mb-5 leading-relaxed">
                Tell me what's going on and I'll get back to you personally with a clear path forward — usually within two hours during business days.
              </p>
              <form action="/contact" className="space-y-3">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full text-sm bg-white border border-navy-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold-400 placeholder-navy-400"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full text-sm bg-white border border-navy-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold-400 placeholder-navy-400"
                  required
                />
                <select
                  className="w-full text-sm bg-white border border-navy-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold-400 text-navy-700"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>What can I help with?</option>
                  <option>Divorce</option>
                  <option>Family / Custody</option>
                  <option>Real Estate Closing</option>
                  <option>Social Security Disability</option>
                  <option>Something else</option>
                </select>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-navy-900 px-4 py-3 text-sm font-semibold text-cream-50 hover:bg-navy-800 transition"
                >
                  Request My Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-[11px] text-navy-500 text-center pt-1">
                  No obligation. Confidential. Spam-free.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
