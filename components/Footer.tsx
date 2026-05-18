import Link from "next/link";
import { Scale, MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-100 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold-500 text-navy-900">
                <Scale className="h-5 w-5" />
              </span>
              <span className="font-serif text-xl font-semibold">Kraus Law Office</span>
            </Link>
            <p className="mt-4 text-sm text-cream-200/80 leading-relaxed">
              Trusted legal counsel for families and homeowners across Elmhurst and DuPage County since 2014.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-gold-300 mb-4">Practice Areas</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/practice-areas/divorce" className="hover:text-gold-300 transition">Divorce</Link></li>
              <li><Link href="/practice-areas/family-law" className="hover:text-gold-300 transition">Family Law</Link></li>
              <li><Link href="/practice-areas/real-estate" className="hover:text-gold-300 transition">Real Estate</Link></li>
              <li><Link href="/practice-areas/ssdi" className="hover:text-gold-300 transition">Social Security Disability</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-gold-300 mb-4">Office</h3>
            <ul className="space-y-3 text-sm text-cream-200/90">
              <li className="flex gap-2.5"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold-400"/>{SITE.address.full}</li>
              <li className="flex gap-2.5"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold-400"/><a href={`tel:${SITE.phoneRaw}`} className="hover:text-gold-300">{SITE.phone}</a></li>
              <li className="flex gap-2.5"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold-400"/><a href={`mailto:${SITE.email}`} className="hover:text-gold-300">{SITE.email}</a></li>
              <li className="flex gap-2.5"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-gold-400"/>{SITE.hours}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-gold-300 mb-4">Service Area</h3>
            <p className="text-sm text-cream-200/80 leading-relaxed">
              Elmhurst · Oak Brook · Hinsdale · Lombard · Villa Park · Addison · Bensenville · Wood Dale · Westmont · Clarendon Hills · Western Springs · La Grange · all of DuPage County
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center text-xs text-cream-200/60">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="max-w-2xl leading-relaxed">
            Attorney advertising. The information on this site is for general informational purposes and does not constitute legal advice. Contacting us does not create an attorney-client relationship. Prior results do not guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
  );
}
