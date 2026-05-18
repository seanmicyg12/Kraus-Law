import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SITE, legalServiceSchema } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import Chatbot from "@/components/Chatbot";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`
  },
  description: SITE.description,
  keywords: [
    "Elmhurst divorce attorney","Elmhurst family lawyer","DuPage County divorce",
    "Elmhurst real estate attorney","Illinois Social Security disability lawyer",
    "Oak Brook divorce attorney","Hinsdale family law","Grace Kraus attorney"
  ],
  authors: [{ name: SITE.attorney }],
  creator: SITE.attorney,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: "" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0f1e3d" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema()) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
        <Chatbot />
      </body>
    </html>
  );
}
