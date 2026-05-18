import PracticeAreaPage from "@/components/PracticeAreaPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Illinois SSDI Attorney — Denied? We Handle the Appeal.",
  description:
    "Denied for Social Security disability? Grace Kraus handles reconsideration and ALJ hearings across Illinois on contingency — you pay nothing unless we win. Free case review.",
  path: "/practice-areas/ssdi",
  keywords: [
    "Illinois SSDI attorney","Social Security disability lawyer","SSDI appeal","ALJ hearing",
    "SSDI denied","disability attorney Elmhurst","SSI lawyer DuPage"
  ]
});

export default function SsdiPage() {
  return (
    <PracticeAreaPage
      eyebrow="Social Security Disability"
      title="Denied disability? Most claims are. We fix that."
      subtitle="Nationally, about 65% of initial SSDI applications are denied. With a prepared, represented client at the ALJ hearing, approval rates more than double."
      intro=""
      feeHeadline="You pay nothing unless we win. Federally capped."
      feeDetail="SSDI representation is contingency-only. The fee is set by federal law at 25% of past-due benefits, capped at $9,200 (2024 max). No retainer. No hourly billing. No fee at all if we lose."
      stats={[
        { value: "$0", label: "Up-front cost" },
        { value: "25% / $9,200", label: "Federal fee cap" },
        { value: "12–18 mo.", label: "Typical ALJ hearing wait" }
      ]}
      whatYouGet={[
        "Honest case review — we'll tell you if your case is winnable before you sign anything",
        "Reconsideration appeal handled end-to-end",
        "Medical evidence gathered and organized for the judge",
        "Full hearing preparation so you walk in confident, not scared"
      ]}
      sections={[
        {
          title: "Why most claims are denied initially",
          body:
            "SSA denies the majority of initial applications — often for paperwork issues, missing medical evidence, or a misread of the listings. That's not the end. The appeals process exists precisely because the initial review is rushed.\n\nThe path: (1) Initial Application, (2) Reconsideration (also usually denied), (3) Administrative Law Judge hearing — where 50%+ of represented claimants win. That hearing is where preparation matters most."
        },
        {
          title: "What we do at the hearing stage",
          body:
            "We pull and organize every relevant medical record. We secure supportive statements from your treating doctors when possible. We identify the SSA listing or medical-vocational rule that fits your case and build the file around it.\n\nThen we prepare you. Most clients have never seen an administrative hearing. We walk through the judge's likely questions, the vocational expert's role, and how to answer honestly without inadvertently hurting your case. Hearings are usually under an hour and held by Zoom unless you prefer in-person."
        },
        {
          title: "SSDI vs. SSI",
          body:
            "SSDI is for people with sufficient work credits (typically 5 of the last 10 years). SSI is need-based and pays a smaller monthly amount with strict asset limits. Some clients qualify for both ('concurrent' claims). We handle both, and we'll tell you which path makes sense after a quick intake."
        },
        {
          title: "Common winning conditions",
          body:
            "We've won cases involving major depressive disorder, chronic back conditions, fibromyalgia, long COVID, autoimmune disorders, post-cancer treatment limitations, severe anxiety, and combined-impairment cases.\n\nThe condition matters less than the documentation. If you've been under regular treatment with consistent records, your case is workable."
        }
      ]}
      faqs={[
        { q: "I just got denied. What do I do?", a: "You have 60 days from the denial date to file a Request for Reconsideration. Call us before that clock runs out — we can usually take the case if it's been less than 50 days." },
        { q: "Can I work part-time while applying?", a: "Yes, up to the 'substantial gainful activity' limit — $1,550/month in 2024 for non-blind applicants. Earnings above that level disqualify you. We'll walk you through the math." },
        { q: "How far back can I claim?", a: "SSDI back-pay runs to your onset date, capped at 12 months before your application. SSI back-pay starts the month after you applied. Past-due benefits can be substantial." },
        { q: "Do I need to attend the hearing in person?", a: "Almost always Zoom these days. The judge will give you a choice and we'll advise based on your specific case and ALJ assignment." }
      ]}
    />
  );
}
