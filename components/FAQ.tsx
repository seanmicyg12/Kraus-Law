"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqSchema } from "@/lib/seo";

const FAQS = [
  {
    q: "How much does a divorce cost in Illinois?",
    a: "Uncontested divorces with no children and modest assets typically run $2,500–$4,500 flat-fee, court filing fees included. Contested matters are hourly with a $3,500 retainer; most clients land between $7,000–$15,000 depending on complexity. You'll get a written budget range after the free consult."
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes — every new matter starts with a free 20-minute consultation, either in-person at our Elmhurst office, by phone, or by video. Book online, call (630) 555-0100, or use the AI receptionist 24/7."
  },
  {
    q: "How fast can you close a home in Elmhurst or DuPage County?",
    a: "Most residential closings finish in 30–45 days from contract. We've closed in as little as 21 days when the lender and title company cooperated. Flat fees: $595 buyer-side, $695 seller-side."
  },
  {
    q: "I was denied SSDI. Can you still help?",
    a: "Absolutely — that's where most of our SSDI work begins. We handle reconsideration and ALJ hearings. The fee is fully contingent (paid only if you win) and federally capped, so you owe nothing up front."
  },
  {
    q: "What areas do you serve?",
    a: "Elmhurst, Oak Brook, Hinsdale, Lombard, Villa Park, Addison, Bensenville, Wood Dale, Westmont, Clarendon Hills, Western Springs, La Grange and the rest of DuPage County. Real estate closings statewide in Illinois."
  },
  {
    q: "Will I work with Grace directly, or get handed to a paralegal?",
    a: "You work with Grace, every step. We keep the firm intentionally small so there are no junior-attorney hand-offs. Grace returns calls and emails personally, usually within two hours during business days."
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. For contested matters we offer monthly payment plans after the initial retainer. SSDI cases are contingency-only. Real estate closings are flat-fee, due at closing. We accept all major credit cards."
  },
  {
    q: "Do you speak Spanish?",
    a: "Grace's primary language is English. Our AI receptionist and chatbot communicate in Spanish, and we bring in a translator for in-person meetings when needed at no charge."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-700 font-semibold">Common questions</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight">
            Answers to what most clients<br className="hidden sm:inline"/> ask in the first call.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`border rounded-xl overflow-hidden transition-colors ${
                  isOpen ? "border-gold-300 bg-cream-50" : "border-navy-100 bg-white hover:border-navy-200"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-semibold text-navy-900 pr-2">
                    {f.q}
                  </span>
                  <span className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                    isOpen ? "bg-navy-900 text-gold-400 rotate-45" : "bg-navy-50 text-navy-700"
                  }`}>
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-5 text-navy-700 leading-relaxed text-[15px]">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
