"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Scale } from "lucide-react";
import { SITE } from "@/lib/seo";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Practice Areas", href: "/#practice-areas", submenu: [
    { label: "Divorce", href: "/practice-areas/divorce" },
    { label: "Family Law", href: "/practice-areas/family-law" },
    { label: "Real Estate", href: "/practice-areas/real-estate" },
    { label: "Social Security Disability", href: "/practice-areas/ssdi" }
  ]},
  { label: "About", href: "/about" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        scrolled ? "bg-cream-50/90 backdrop-blur-md border-b border-navy-100 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy-900 text-gold-400 group-hover:bg-navy-800 transition">
              <Scale className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-lg font-semibold text-navy-900">Kraus Law</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-navy-600">Office of Grace Kraus</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm font-medium text-navy-800 hover:text-navy-900 link-underline"
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-white rounded-lg shadow-xl border border-navy-100 overflow-hidden w-64">
                      {item.submenu.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-3 text-sm text-navy-800 hover:bg-cream-100 hover:text-navy-900 border-b last:border-0 border-navy-50"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-gold-700 transition"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-navy-900 px-4 py-2 text-sm font-semibold text-cream-50 hover:bg-navy-800 transition shadow-sm"
            >
              Free Consultation
            </Link>
          </div>

          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-navy-900"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-cream-50 border-t border-navy-100">
          <div className="px-4 py-4 space-y-1">
            {NAV.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-medium text-navy-900"
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.submenu.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-sm text-navy-700"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="block w-full text-center rounded-md border border-navy-900 px-4 py-2.5 text-sm font-semibold text-navy-900"
              >
                {SITE.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-md bg-navy-900 px-4 py-2.5 text-sm font-semibold text-cream-50"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
