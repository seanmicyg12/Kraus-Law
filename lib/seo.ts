import type { Metadata } from "next";

export const SITE = {
  name: "Kraus Law Office",
  attorney: "Grace Kraus",
  tagline: "Elmhurst's Compassionate Family, Divorce, Real Estate & SSDI Attorney",
  description:
    "Grace Kraus is a trusted Elmhurst, IL attorney serving DuPage County. Free consultations for divorce, family law, real estate closings, and Social Security disability appeals.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://krauslaw.example",
  phone: process.env.NEXT_PUBLIC_PHONE || "(630) 832-0452",
  phoneRaw: "+16308320452",
  email: "intake@krauslaw.example",
  address: {
    street: "269 N Oaklawn Ave",
    city: "Elmhurst",
    state: "IL",
    zip: "60126",
    full: "269 N Oaklawn Ave, Elmhurst, IL 60126"
  },
  hours: "Mon-Fri 8:30am-6pm, Sat by appointment",
  social: {
    google: "https://maps.google.com/?q=269+N+Oaklawn+Ave+Elmhurst+IL",
    avvo: "#",
    linkedin: "#"
  }
};

export function pageMetadata(opts: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE.url}${opts.path || "/"}`;
  return {
    title: `${opts.title} | ${SITE.name}`,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE.name,
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description
    },
    robots: { index: true, follow: true }
  };
}

export function legalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE.name,
    image: `${SITE.url}/og.jpg`,
    url: SITE.url,
    telephone: SITE.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US"
    },
    geo: { "@type": "GeoCoordinates", latitude: 41.9020, longitude: -87.9434 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        opens: "08:30",
        closes: "18:00"
      }
    ],
    areaServed: [
      "Elmhurst, IL","Oak Brook, IL","Hinsdale, IL","Lombard, IL",
      "Villa Park, IL","Addison, IL","Wheaton, IL","DuPage County, IL"
    ],
    serviceType: [
      "Divorce Attorney","Family Law","Real Estate Closing Attorney",
      "Social Security Disability Lawyer"
    ],
    sameAs: [SITE.social.google]
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };
}
