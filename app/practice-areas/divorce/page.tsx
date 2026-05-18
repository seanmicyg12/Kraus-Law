import PracticeAreaPage from "@/components/PracticeAreaPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Elmhurst Divorce Attorney — Uncontested & Contested",
  description:
    "Elmhurst divorce attorney Grace Kraus handles uncontested and contested divorces across DuPage County. Flat fees from $2,500. Free consultations. Honest counsel, fast resolution.",
  path: "/practice-areas/divorce",
  keywords: [
    "Elmhurst divorce attorney","Elmhurst divorce lawyer","DuPage County divorce",
    "uncontested divorce Illinois","contested divorce Elmhurst","divorce cost Illinois"
  ]
});

export default function DivorcePage() {
  return (
    <PracticeAreaPage
      eyebrow="Divorce"
      title="A divorce attorney who keeps the temperature low — and the cost predictable."
      subtitle="Whether your divorce is uncontested or headed for trial, Grace Kraus has guided hundreds of DuPage County families through the process with steady, plain-English counsel."
      intro=""
      feeHeadline="Flat fees for uncontested divorces. Predictable budgets when it's contested."
      feeDetail="Most uncontested Illinois divorces with no children and modest assets close at a flat $2,500–$4,500 (court filing fees included). Contested matters run hourly with a $3,500 retainer and a clear written budget range — typically $7,000–$15,000 depending on the issues in dispute."
      stats={[
        { value: "60–90 days", label: "Typical uncontested timeline" },
        { value: "$2,500+", label: "Flat fee, uncontested" },
        { value: "100% no-fault", label: "Illinois grounds" }
      ]}
      whatYouGet={[
        "Direct phone and email access to Grace — no junior hand-offs",
        "Written engagement letter with fee range before you sign anything",
        "Same-day replies to texts and emails during business hours",
        "Mediation-first approach when realistic; trial-ready when not"
      ]}
      sections={[
        {
          title: "How divorce works in Illinois",
          body:
            "Illinois has been a pure no-fault state since 2016 — the only ground is 'irreconcilable differences,' and you no longer need a separation period when both spouses agree.\n\nThe basic path: (1) a Petition for Dissolution is filed in the county where you live, (2) the other spouse is served and files a Response, (3) both sides exchange financial discovery, (4) you negotiate a Marital Settlement Agreement and (if children) a Parenting Plan, and (5) a brief 'prove-up' hearing finalizes the judgment.\n\nMost uncontested cases close in 60–90 days. Contested matters where parties disagree on parenting, spousal maintenance, or asset division average 6–14 months."
        },
        {
          title: "Property, debts, and maintenance",
          body:
            "Illinois is an equitable distribution state — not a strict 50/50 split. The court divides marital property (anything acquired during the marriage, with limited exceptions) based on factors including each spouse's contribution, length of the marriage, and economic circumstances after divorce.\n\nMaintenance (formerly 'alimony') follows statutory guidelines for marriages above $500,000 in combined income or below that threshold by agreement. The duration is tied to the length of the marriage."
        },
        {
          title: "When kids are involved",
          body:
            "Illinois retired the word 'custody' in 2016. Instead, two issues are decided: allocation of parental responsibilities (who makes major decisions about education, health, religion, and extracurriculars) and parenting time (the schedule). A written Parenting Plan must be filed within 120 days of the petition.\n\nChild support is calculated under an income-shares model based on both parents' net incomes and overnights."
        }
      ]}
      faqs={[
        { q: "Do we both need attorneys for an uncontested divorce?", a: "Not legally — but Grace can only represent one spouse. The other can choose to consult an attorney for a review, or proceed without one. We're transparent about this from day one." },
        { q: "How fast can we be divorced?", a: "If everything is agreed and paperwork is signed promptly, 60 days is realistic. Cook and DuPage move slightly differently — Grace will give you a county-specific estimate." },
        { q: "What if my spouse refuses to participate?", a: "Illinois allows 'default' divorces if a spouse won't respond after proper service. The process takes longer but doesn't require their cooperation indefinitely." },
        { q: "Will I have to go to court?", a: "Most uncontested clients appear once, briefly, for a prove-up hearing — often by Zoom in DuPage. Contested cases involve more court time, but the goal is always to settle before trial." }
      ]}
    />
  );
}
