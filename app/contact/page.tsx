import { MapPin, Phone, Mail, Clock, Sparkles } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { pageMetadata, SITE } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Grace Kraus — Free Consultation",
  description: "Reach Kraus Law Office in Elmhurst, IL. Free 20-minute consultations. Same-day callbacks. Call (630) 555-0100 or use the form.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <section className="hero-radial paper-texture pt-32 lg:pt-40 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-cream-50 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-300 font-semibold">Contact</span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Let's talk about<br/>
            <span className="text-shimmer">what's actually going on.</span>
          </h1>
          <p className="mt-5 text-lg text-cream-100/85 max-w-2xl mx-auto">
            The first 20 minutes are free, confidential, and honest. We'll only take the case if we can genuinely help.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-navy-100 p-7 lg:p-10">
              <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-1">Send a message</h2>
              <p className="text-sm text-navy-600 mb-6">Grace personally replies within two hours during business days.</p>
              <ContactForm />
            </div>

            <aside className="lg:col-span-2 space-y-6">
              <div className="bg-navy-950 rounded-2xl p-7 text-cream-50">
                <h3 className="font-serif text-xl font-semibold text-gold-300 mb-5">Reach us directly</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3"><Phone className="h-5 w-5 mt-0.5 text-gold-400 shrink-0"/>
                    <div>
                      <a href={`tel:${SITE.phoneRaw}`} className="font-semibold text-cream-50 hover:text-gold-300">{SITE.phone}</a>
                      <div className="text-xs text-cream-200/70">Call or text — answered live during hours</div>
                    </div>
                  </li>
                  <li className="flex gap-3"><Mail className="h-5 w-5 mt-0.5 text-gold-400 shrink-0"/>
                    <div>
                      <a href={`mailto:${SITE.email}`} className="font-semibold text-cream-50 hover:text-gold-300">{SITE.email}</a>
                      <div className="text-xs text-cream-200/70">Replies same business day</div>
                    </div>
                  </li>
                  <li className="flex gap-3"><MapPin className="h-5 w-5 mt-0.5 text-gold-400 shrink-0"/>
                    <div>
                      <div className="font-semibold text-cream-50">{SITE.address.full}</div>
                      <div className="text-xs text-cream-200/70">Free street parking · Metra accessible</div>
                    </div>
                  </li>
                  <li className="flex gap-3"><Clock className="h-5 w-5 mt-0.5 text-gold-400 shrink-0"/>
                    <div>
                      <div className="font-semibold text-cream-50">Mon–Fri 8:30am–6pm</div>
                      <div className="text-xs text-cream-200/70">Sat by appointment · Emergency line for OPs</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gold-50 border border-gold-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-gold-700"/>
                  <h3 className="font-serif text-lg font-semibold text-navy-900">After hours?</h3>
                </div>
                <p className="text-sm text-navy-800 leading-relaxed">
                  Our AI receptionist answers calls 24/7 — collects the basics, books your consult, and routes anything urgent to Grace. Try it any time at {SITE.phone}.
                </p>
              </div>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-navy-100 shadow-sm">
                <iframe
                  title="Kraus Law Office location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address.full)}&output=embed`}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="border-0"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
