import PracticeAreaPage from "@/components/PracticeAreaPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Elmhurst Real Estate Attorney — Flat-Fee Residential Closings",
  description:
    "Flat-fee residential real estate closings in Elmhurst, Oak Brook, Hinsdale and across DuPage County. $595 buyer-side, $695 seller-side. Attorney review, title, closing attendance — handled.",
  path: "/practice-areas/real-estate",
  keywords: [
    "Elmhurst real estate attorney","DuPage real estate lawyer","flat fee closing",
    "Oak Brook closing attorney","Hinsdale real estate lawyer","Illinois attorney review"
  ]
});

export default function RealEstatePage() {
  return (
    <PracticeAreaPage
      eyebrow="Real Estate"
      title="Flat-fee real estate closings. No surprises at the table."
      subtitle="Residential buyer and seller representation across Elmhurst, Oak Brook, Hinsdale, Lombard and the rest of DuPage County. Attorney review handled in 24 hours."
      intro=""
      feeHeadline="$595 buyer-side. $695 seller-side. Everything included."
      feeDetail="One flat fee covers contract review, attorney review negotiations, title commitment review, document drafting, lender coordination, and closing attendance — in person or remote. No hidden 'document prep' or 'wire' fees."
      stats={[
        { value: "$595 / $695", label: "Flat fee buyer / seller" },
        { value: "30–45 days", label: "Typical close timeline" },
        { value: "24 hours", label: "Attorney review turnaround" }
      ]}
      whatYouGet={[
        "Contract reviewed and modified within 24 hours of the executed contract",
        "Inspection response letter negotiated with the other side's attorney",
        "Title commitment reviewed for defects, easements, and exceptions",
        "Closing attended in person or by remote signing"
      ]}
      sections={[
        {
          title: "Why Illinois closings need an attorney",
          body:
            "Illinois is one of the few states where residential contracts include a mandatory attorney review period — typically 5–10 business days after acceptance. During that window, your attorney can request modifications, negotiate inspection responses, or even cancel the contract without penalty.\n\nWithout an attorney, you give up significant negotiating leverage at the moment it matters most. Real estate agents — even great ones — are not licensed to give legal advice."
        },
        {
          title: "What we do for buyers",
          body:
            "We start the moment your offer is accepted. Within 24 hours: contract reviewed, attorney review letter sent with proposed modifications. After inspection: we negotiate the response letter with the seller's attorney.\n\nThroughout escrow: we review the title commitment for clouds, easements, and survey exceptions; coordinate with your lender on closing disclosure issues; and prepare you with a closing-day checklist. At closing, we walk you through every document and make sure your interests are protected before you sign."
        },
        {
          title: "What we do for sellers",
          body:
            "We review the contract and protect you during attorney review. We prepare the deed, bill of sale, ALTA, and seller closing documents. We coordinate the payoff with your existing lender, review the title commitment, and resolve any defects before closing.\n\nWe attend the closing — or if you're out of state, we arrange remote signing and overnight your closing proceeds."
        },
        {
          title: "Common deal-savers",
          body:
            "Most deals don't die because of price — they die during attorney review or after inspection. We've saved deals by negotiating credits instead of price reductions, identifying title defects early, restructuring contingencies, and finding creative solutions when financing wobbles.\n\nIf a deal cannot be saved, we make sure you exit cleanly — earnest money returned, no exposure."
        }
      ]}
      faqs={[
        { q: "When do I pay the flat fee?", a: "At closing, out of proceeds (sellers) or as a closing cost line item (buyers). Nothing up front." },
        { q: "Can you close if I'm out of state?", a: "Yes. We coordinate remote online notarization or mobile notary, and overnight any wet-signed documents. Closing proceeds wire same-day." },
        { q: "Do you handle commercial or investment properties?", a: "Single-family rentals and 1–4 unit residential investment closings: yes, same flat fee structure. True commercial: we'll refer you to a trusted colleague." },
        { q: "What if the inspection finds problems?", a: "We negotiate a response letter — typically requesting repairs, credit, or a price reduction. Most disputes settle in 1–2 rounds of back-and-forth." }
      ]}
    />
  );
}
