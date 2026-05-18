// ============================================================
// Kraus Law Office - RAG Knowledge Base
// ============================================================
// This is the source of truth the chatbot uses to answer
// visitor questions. Edit these entries and the chatbot
// learns instantly. For production, swap to Supabase pgvector
// or Pinecone (see /lib/knowledge-base.upgrade-notes.md).
// ============================================================

export type KbChunk = {
  id: string;
  topic: string;
  keywords: string[];
  content: string;
};

export const KNOWLEDGE_BASE: KbChunk[] = [
  {
    id: "firm-overview",
    topic: "About the Firm",
    keywords: ["about","firm","grace kraus","elmhurst","attorney","experience"],
    content: `Kraus Law Office is a solo practice led by attorney Grace Kraus, serving Elmhurst, IL and the surrounding DuPage County area for over a decade. We focus on four core practice areas: family law, divorce, residential real estate closings, and Social Security disability appeals. We are intentionally small so every client works directly with Grace — never a junior associate.`
  },
  {
    id: "consultation",
    topic: "Free Consultation",
    keywords: ["consultation","free","cost","price","fee","meeting","call"],
    content: `We offer a free 20-minute consultation for every new matter. You can book online, call (630) 555-0100, or use this chatbot to start. Consultations cover your situation, our approach, expected timeline, and a clear flat-fee or hourly quote — no obligation.`
  },
  {
    id: "fees-divorce",
    topic: "Divorce Fees",
    keywords: ["divorce cost","divorce fee","retainer","flat fee","uncontested"],
    content: `Uncontested divorces in Illinois with no children and limited assets typically run a flat $2,500–$4,500 all-in (court filing fees included). Contested matters are billed hourly at a standard rate with a $3,500 retainer; most clients land between $7,000–$15,000 depending on complexity. We give a written engagement letter with a budget range after the consult.`
  },
  {
    id: "fees-real-estate",
    topic: "Real Estate Closing Fees",
    keywords: ["closing cost","real estate fee","attorney fee","home buyer","seller"],
    content: `Flat fees: $595 for residential buyer representation, $695 for sellers. Includes title review, contract negotiation, attorney review period, and closing attendance. Most Elmhurst, Oak Brook, and Hinsdale closings finish in 30–45 days.`
  },
  {
    id: "fees-ssdi",
    topic: "SSDI Fees",
    keywords: ["ssdi","social security","disability","fee","cost"],
    content: `Social Security disability cases are contingent — we are paid only if you win. Federal law caps the fee at 25% of past-due benefits, with a maximum of $9,200 (2024). You owe nothing up front and nothing if we lose.`
  },
  {
    id: "fees-family",
    topic: "Family Law Fees",
    keywords: ["custody","parenting","allocation","child support","family law cost"],
    content: `Allocation of parental responsibilities (custody) and child support modifications are typically billed hourly with a $2,500–$3,500 retainer. Simple post-decree motions can sometimes be handled flat-fee at $1,200–$2,000.`
  },
  {
    id: "divorce-process",
    topic: "Divorce Process in Illinois",
    keywords: ["divorce process","how long","steps","timeline","illinois"],
    content: `Illinois is a no-fault state — you only need to allege irreconcilable differences. Uncontested cases close in 60–90 days. Contested cases average 6–14 months. The major steps: (1) Petition filed, (2) Response and discovery, (3) Temporary orders if needed, (4) Negotiation or mediation, (5) Trial or settlement, (6) Final judgment.`
  },
  {
    id: "custody-illinois",
    topic: "Custody in Illinois",
    keywords: ["custody","parenting time","allocation","children","decision making"],
    content: `Illinois no longer uses the word "custody." It splits into (1) allocation of parental responsibilities (who makes major decisions about education, health, religion, and activities) and (2) parenting time (the schedule). Courts apply a 16-factor "best interest of the child" analysis. A parenting plan is required and must be filed within 120 days of the petition.`
  },
  {
    id: "real-estate-process",
    topic: "Real Estate Closing Process",
    keywords: ["closing","home buyer","attorney review","contract","title"],
    content: `Illinois contracts include a standard 5–10 business day attorney review and inspection period. Grace negotiates inspection responses, reviews title commitment for defects, coordinates with the lender and title company, and attends closing (in-person or remote). Most closings take 30–45 days from contract to keys.`
  },
  {
    id: "ssdi-process",
    topic: "SSDI Application Process",
    keywords: ["ssdi","social security disability","application","appeal","hearing"],
    content: `Most disability claims are denied at the initial application (about 65% nationally). Standard path: (1) Initial application, (2) Reconsideration, (3) ALJ hearing — this is where representation matters most. We handle reconsideration and hearing stages, and prep clients thoroughly for the judge. Hearings are typically scheduled 12–18 months after request.`
  },
  {
    id: "service-area",
    topic: "Service Area",
    keywords: ["service area","cities","towns","where","locations","dupage"],
    content: `We primarily serve Elmhurst, Oak Brook, Hinsdale, Lombard, Villa Park, Addison, Bensenville, Wood Dale, Westmont, Clarendon Hills, Western Springs, La Grange, and the rest of DuPage County. Real estate closings are statewide.`
  },
  {
    id: "hours-contact",
    topic: "Hours and Contact",
    keywords: ["hours","contact","phone","email","address","location"],
    content: `Office: 269 N Oaklawn Ave, Elmhurst, IL 60126. Phone: (630) 555-0100. Hours: Monday–Friday 8:30am–6pm, Saturday by appointment. After-hours intake is handled by our AI receptionist (English and Spanish). Email: intake@krauslaw.example.`
  },
  {
    id: "what-to-bring",
    topic: "What to Bring to the Consultation",
    keywords: ["bring","prepare","documents","first meeting","consultation prep"],
    content: `Divorce: marriage certificate, recent tax returns, mortgage statement, retirement account statements, list of major assets and debts. Real Estate: signed contract (if any), pre-approval letter. SSDI: list of medical providers and conditions, denial letter if any. Family: existing court orders, parenting calendar.`
  },
  {
    id: "languages",
    topic: "Languages",
    keywords: ["spanish","language","english","habla espanol"],
    content: `Grace speaks English. Our AI receptionist and chatbot can communicate in Spanish, and we have a translator on call for in-person meetings if needed. Documents can be reviewed in English only.`
  },
  {
    id: "emergency",
    topic: "Emergencies",
    keywords: ["emergency","urgent","domestic violence","order of protection","restraining"],
    content: `If you are in immediate danger, call 911. For orders of protection in DuPage County, the Family Shelter Service hotline is (630) 469-5650. We can file emergency orders of protection same-day during business hours — call (630) 555-0100.`
  }
];

// Lightweight keyword retrieval — good enough for ~50 chunks.
// Swap to embeddings (text-embedding-3-small) when you exceed ~200 chunks.
export function retrieve(query: string, k = 4): KbChunk[] {
  const q = query.toLowerCase();
  const scored = KNOWLEDGE_BASE.map((chunk) => {
    let score = 0;
    for (const kw of chunk.keywords) {
      if (q.includes(kw)) score += 3;
      const words = kw.split(/\s+/);
      for (const w of words) if (w.length > 3 && q.includes(w)) score += 1;
    }
    if (q.includes(chunk.topic.toLowerCase())) score += 2;
    return { chunk, score };
  });
  scored.sort((a, b) => b.score - a.score);
  const top = scored.filter((s) => s.score > 0).slice(0, k).map((s) => s.chunk);
  return top.length ? top : KNOWLEDGE_BASE.slice(0, k);
}
