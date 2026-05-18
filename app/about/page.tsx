import Link from "next/link";
import { ArrowRight, Award, Heart, Scale, Users } from "lucide-react";
import { pageMetadata, SITE } from "@/lib/seo";
import CtaBand from "@/components/CtaBand";

export const metadata = pageMetadata({
  title: "About Grace Kraus — Elmhurst Attorney",
  description: "Grace Kraus is an Elmhurst, IL attorney practicing family law, divorce, real estate, and Social Security disability throughout DuPage County since 2014.",
  path: "/about"
});

const VALUES = [
  { icon: Heart, title: "Plain English, always", body: "Legalese is for documents. When we talk, you'll understand every word." },
  { icon: Scale, title: "Honest fees, written upfront", body: "Flat where we can, capped where we can't. No surprise bills, ever." },
  { icon: Users, title: "Direct access", body: "You call. Grace answers — or calls back personally, usually within two hours." },
  { icon: Award, title: "Small by design", body: "Fewer clients, more attention. We turn away cases that don't fit." }
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-radial paper-texture pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-cream-50">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-300 font-semibold">About</span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Grace Kraus, Attorney at Law
          </h1>
          <p className="mt-5 text-xl text-cream-100/85 max-w-3xl leading-relaxed">
            A solo practice rooted in Elmhurst, built around one belief: when life turns hard, you deserve a lawyer who picks up the phone.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-1">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 overflow-hidden relative flex items-center justify-center shadow-xl">
                <div className="absolute inset-0 hero-radial opacity-50" />
                <span className="relative font-serif text-7xl text-gold-400/40 font-semibold">GK</span>
              </div>
              <div className="mt-4 text-sm space-y-1.5 text-navy-700">
                <div><span className="font-semibold text-navy-900">Bar Admission:</span> Illinois, 2014</div>
                <div><span className="font-semibold text-navy-900">Education:</span> J.D., Loyola Chicago</div>
                <div><span className="font-semibold text-navy-900">Languages:</span> English (Spanish via translator)</div>
                <div><span className="font-semibold text-navy-900">Affiliations:</span> ISBA, DCBA Family Law</div>
              </div>
            </div>

            <div className="md:col-span-2 prose-section space-y-5 text-navy-800 leading-relaxed">
              <p>
                Grace started her career at a large Chicago firm and learned quickly that what she wanted to practice — the work that mattered to her — didn't fit a downtown billing structure. So she opened her own office in Elmhurst in 2017.
              </p>
              <p>
                The practice has stayed intentionally small ever since. Four focus areas: divorce, family law, real estate, and Social Security disability. One attorney on every case. A caseload sized so that calls get returned the same day, not the same week.
              </p>
              <p>
                Most of Grace's new clients come from old ones. She represents the children of clients she represented a decade ago. She has closed three homes for the same family in eight years. She's seen people through the worst weeks of their lives and shown up at their kids' graduations.
              </p>
              <p>
                Outside the office, Grace lives in Elmhurst with her family, coaches youth softball at Eldridge Park, and serves on the board of a local domestic violence resource center.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-navy-900 mb-12 text-center">
            How we work
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-cream-50 rounded-xl p-6 border border-navy-100">
                <v.icon className="h-7 w-7 text-gold-600 mb-3" />
                <h3 className="font-serif text-lg font-semibold text-navy-900 mb-2">{v.title}</h3>
                <p className="text-sm text-navy-700 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-navy-900 px-6 py-3.5 text-base font-semibold text-cream-50 hover:bg-navy-800 transition"
            >
              Schedule a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
