import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PracticeAreas from "@/components/PracticeAreas";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CtaBand from "@/components/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Elmhurst Divorce, Family, Real Estate & SSDI Attorney",
  description:
    "Grace Kraus is an Elmhurst attorney serving DuPage County families with divorce, custody, real estate closings, and Social Security disability appeals. Free consultations. Flat fees for closings and uncontested divorces.",
  path: "/",
  keywords: [
    "Elmhurst divorce attorney","Elmhurst family lawyer","DuPage County divorce attorney",
    "Elmhurst real estate attorney","Illinois SSDI lawyer","Grace Kraus attorney",
    "Oak Brook divorce lawyer","Hinsdale family law","Lombard real estate closing"
  ]
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PracticeAreas />
      <Process />
      <Testimonials />
      <FAQ />
      <CtaBand />
    </>
  );
}
