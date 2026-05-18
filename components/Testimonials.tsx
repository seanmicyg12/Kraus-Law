"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Maria L.",
    location: "Elmhurst, IL",
    matter: "Divorce",
    body: "Grace took what felt like the worst year of my life and made it manageable. She returned every call same-day and explained things in a way I could actually understand.",
    rating: 5
  },
  {
    name: "James & Priya R.",
    location: "Oak Brook, IL",
    matter: "Home Purchase",
    body: "Closed on our first home in 32 days. Grace caught two issues in the title commitment our agent missed. Flat fee, zero surprises.",
    rating: 5
  },
  {
    name: "Anthony D.",
    location: "Villa Park, IL",
    matter: "SSDI Appeal",
    body: "Denied twice on my own. Hired Grace. Won at hearing eight months later. She prepped me so well I barely felt nervous in front of the judge.",
    rating: 5
  },
  {
    name: "Karen M.",
    location: "Hinsdale, IL",
    matter: "Parenting Plan",
    body: "She fought for my kids without ever turning the case into a war. The other side tried to escalate — Grace kept us focused on what mattered.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-700 font-semibold">Client stories</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight">
            What clients say<br/>
            <span className="text-navy-600">after the dust settles.</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="relative bg-white rounded-2xl border border-navy-100 p-7 lg:p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold-200" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <blockquote className="text-navy-800 leading-relaxed text-[15px]">
                &ldquo;{r.body}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-navy-100 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-navy-900 text-sm">{r.name}</div>
                  <div className="text-xs text-navy-500">{r.location}</div>
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-gold-700 bg-gold-50 px-2.5 py-1 rounded-full border border-gold-200">
                  {r.matter}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-900"
          >
            Read all 180+ Google reviews
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
