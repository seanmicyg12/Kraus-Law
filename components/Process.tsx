"use client";
import { motion } from "framer-motion";
import { PhoneCall, FileSearch, Handshake, Trophy } from "lucide-react";

const STEPS = [
  {
    icon: PhoneCall,
    title: "Free 20-minute consultation",
    body: "Call, book online, or use the AI receptionist day or night. We'll learn your situation and tell you honestly whether we're the right fit."
  },
  {
    icon: FileSearch,
    title: "Clear strategy & fixed quote",
    body: "Within 48 hours of the consult, you get a written plan and a flat or capped fee — no surprise hourly bills."
  },
  {
    icon: Handshake,
    title: "Work the plan together",
    body: "Direct phone and email access to Grace. Plain-English updates at every milestone. We move quickly because we keep our caseload small."
  },
  {
    icon: Trophy,
    title: "Outcome, then aftercare",
    body: "When the matter is closed, we stay reachable. Most clients call us back years later — and refer friends and family."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-navy-950 text-cream-50 relative overflow-hidden">
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl"/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold">How it works</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            A predictable process<br/>
            <span className="text-gold-300">in unpredictable moments.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-gold-400/30 font-serif text-7xl font-semibold leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-3">
                <s.icon className="h-7 w-7 text-gold-400 mb-3" />
                <h3 className="font-serif text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-cream-200/80 leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
