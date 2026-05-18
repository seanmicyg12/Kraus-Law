import PracticeAreaPage from "@/components/PracticeAreaPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Elmhurst Family Law Attorney — Custody, Parenting & Support",
  description:
    "Elmhurst family law attorney Grace Kraus handles allocation of parental responsibilities, parenting time, child support, post-decree modifications, and orders of protection in DuPage County.",
  path: "/practice-areas/family-law",
  keywords: [
    "Elmhurst family law attorney","DuPage custody lawyer","parenting plan Illinois",
    "child support modification","order of protection Elmhurst"
  ]
});

export default function FamilyLawPage() {
  return (
    <PracticeAreaPage
      eyebrow="Family Law"
      title="Family law that puts your kids first — and keeps you sane."
      subtitle="Custody, parenting time, child support, post-decree modifications, and same-day orders of protection across DuPage County."
      intro=""
      feeHeadline="Right-sized fees for the matter in front of you."
      feeDetail="Initial allocation and parenting cases are typically billed hourly with a $2,500–$3,500 retainer. Simple post-decree motions can often be handled flat-fee at $1,200–$2,000. Emergency orders of protection are quoted on the spot."
      stats={[
        { value: "120 days", label: "Parenting plan deadline" },
        { value: "16 factors", label: "Best-interest analysis" },
        { value: "Same-day", label: "OP filings available" }
      ]}
      whatYouGet={[
        "A plan that works for your real schedule — not a template",
        "Mediation guidance when it makes sense; advocacy when it doesn't",
        "Plain-English explanations of every order and form",
        "After-hours emergency line for active OP matters"
      ]}
      sections={[
        {
          title: "Allocation of parental responsibilities",
          body:
            "What most people call 'custody,' Illinois splits into two parts: decision-making (education, healthcare, religion, extracurriculars) and parenting time (the day-to-day schedule). Either can be jointly shared, split between parents, or assigned to one parent.\n\nThe court applies a 16-factor 'best interest of the child' test — including each parent's wishes, the child's relationship with siblings and community, willingness to facilitate the other parent's relationship, and any history of violence. Grace builds your case around the factors that actually matter for your family."
        },
        {
          title: "Parenting plans and time",
          body:
            "Illinois requires a written parenting plan within 120 days of a custody petition. If parents can't agree, the court will impose one. Common arrangements include alternating weeks, 2-2-3 schedules, every-other-weekend with weekday dinners, and adapted summer/holiday schedules.\n\nWe draft plans that anticipate the practical questions — pickup logistics, school events, vacations, right-of-first-refusal — so you're not back in court six months later."
        },
        {
          title: "Child support and modifications",
          body:
            "Illinois calculates child support under an income-shares model: both parents' net incomes are combined, a basic support obligation is derived from state tables, then allocated proportionally and adjusted for overnights with each parent.\n\nWhen circumstances change substantially — job loss, relocation, income jump — the order can be modified. Grace handles modifications efficiently, often without a full re-litigation of the underlying case."
        },
        {
          title: "Orders of protection",
          body:
            "If you or your children are in danger, the court can issue an Emergency Order of Protection same-day, ex parte (without the other party present). A Plenary Order — lasting up to two years — follows after a hearing.\n\nWe file same-day during business hours. If it's outside hours and you're in immediate danger, call 911. DuPage County Family Shelter Service: (630) 469-5650."
        }
      ]}
      faqs={[
        { q: "Will my kids have to testify?", a: "Almost never. Illinois favors keeping children out of the courtroom. The court may appoint a Guardian ad Litem or a child representative to express the child's view." },
        { q: "Can we modify a custody order from another state?", a: "Sometimes — under the UCCJEA, Illinois may take jurisdiction once you've been here six months. Grace handles inter-state issues frequently." },
        { q: "How long does an OP last?", a: "Emergency: up to 21 days. Plenary (after hearing): up to two years, renewable. Civil No Contact orders for sexual assault matters can be permanent." },
        { q: "What if my ex isn't paying support?", a: "We file a Petition for Rule to Show Cause. Remedies include wage garnishment, license suspension, and in extreme cases, jail time." }
      ]}
    />
  );
}
