"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Phone } from "lucide-react";
import { SITE } from "@/lib/seo";
import CtaBand from "@/components/CtaBand";

type Section = { title: string; body: string };
type Stat = { value: string; label: string };

export type PracticeAreaProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  feeHeadline: string;
  feeDetail: string;
  stats: Stat[];
  whatYouGet: string[];
  sections: Section[];
  faqs: { q: string; a: string }[];
};

export default function PracticeAreaPage(p: PracticeAreaProps) {
  return (
    <>
      <section className="hero-radial paper-texture pt-32 lg:pt-40 pb-20 lg:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-cream-50">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.25em] text-gold-300 font-semibold"
          >
            {p.eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
          >
            {p.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-xl text-cream-100/85 max-w-3xl leading-relaxed"
          >
            {p.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-gold-500 px-6 py-3.5 text-base font-semibold text-navy-950 hover:bg-gold-400 transition"
            >
              Free Consultation <ArrowRight className="h-4 w-4"/>
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-md border border-cream-50/30 px-6 py-3.5 text-base font-semibold text-cream-50 hover:bg-cream-50/10 transition"
            >
              <Phone className="h-4 w-4"/> {SITE.phone}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Fee callout */}
      <section className="py-16 bg-cream-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-4">{p.feeHeadline}</h2>
              <p className="text-lg text-navy-700 leading-relaxed">{p.feeDetail}</p>
              <ul className="mt-6 space-y-2.5">
                {p.whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-navy-800">
                    <Check className="h-5 w-5 text-gold-600 mt-0.5 shrink-0"/>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-navy-100 p-6 shadow-sm space-y-4">
              {p.stats.map((s) => (
                <div key={s.label} className="pb-4 border-b last:border-0 border-navy-100">
                  <div className="font-serif text-3xl font-semibold text-navy-900">{s.value}</div>
                  <div className="text-sm text-navy-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Long-form content sections */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose-section">
          <div className="space-y-12">
            {p.sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy-900 mb-4">
                  {s.title}
                </h2>
                <p className="text-navy-700 leading-relaxed text-[17px] whitespace-pre-line">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-navy-100">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy-900 mb-6">
              Frequently asked
            </h2>
            <dl className="space-y-6">
              {p.faqs.map((f) => (
                <div key={f.q}>
                  <dt className="font-semibold text-navy-900 mb-1.5">{f.q}</dt>
                  <dd className="text-navy-700 leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
