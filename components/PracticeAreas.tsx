"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Home, FileText, ArrowUpRight, Shield } from "lucide-react";

const AREAS = [
  {
    icon: Heart,
    title: "Divorce",
    href: "/practice-areas/divorce",
    blurb: "Uncontested or contested — handled with care, clarity, and a fair fee structure.",
    points: ["Uncontested flat fees from $2,500","Mediation when possible","Trial-ready when not"]
  },
  {
    icon: Shield,
    title: "Family Law",
    href: "/practice-areas/family-law",
    blurb: "Custody, parenting time, child support, post-decree modifications, and orders of protection.",
    points: ["Allocation of responsibilities","Same-day OPs available","Modification motions"]
  },
  {
    icon: Home,
    title: "Real Estate",
    href: "/practice-areas/real-estate",
    blurb: "Flat-fee residential closings for buyers and sellers across DuPage County.",
    points: ["$595 buyer · $695 seller","Attorney review handled","Closing attendance"]
  },
  {
    icon: FileText,
    title: "Social Security Disability",
    href: "/practice-areas/ssdi",
    blurb: "Denied? Most claims are. We handle reconsideration through ALJ hearings — you owe nothing unless we win.",
    points: ["Contingency only","Hearing preparation","Reconsideration & appeals"]
  }
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-20 lg:py-28 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-700 font-semibold">Practice Areas</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight">
            Four focused practices.<br/>
            <span className="text-navy-600">One attorney, the whole way through.</span>
          </h2>
          <p className="mt-4 text-lg text-navy-700 leading-relaxed">
            Most clients come to us during life's hardest moments — separation, a denied benefits claim, the keys to a first home. We keep our practice small on purpose so each matter gets Grace's full attention.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AREAS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={a.href}
                className="group relative h-full block bg-white rounded-xl border border-navy-100 p-6 shadow-sm hover:shadow-xl hover:border-gold-300 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-400 transition-colors">
                    <a.icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-navy-300 group-hover:text-gold-600 group-hover:rotate-12 transition" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-2">{a.title}</h3>
                <p className="text-sm text-navy-700 leading-relaxed mb-4">{a.blurb}</p>
                <ul className="space-y-1.5">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-navy-600">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-500 shrink-0"/>
                      {p}
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
