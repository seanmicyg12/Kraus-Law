# Kraus Law Office — AI-Powered Law Firm Website

Production-grade Next.js 15 website for Grace Kraus, Elmhurst IL attorney (family / divorce / real estate / SSDI). Includes a RAG-powered AI chatbot, an AI phone receptionist (Vapi.ai), SEO-optimised pages with schema.org structured data, and an email-routed contact pipeline.

Built to sell at $1,500/mo+ as a managed legal-marketing service.

---

## What's in the box

| Feature | Tech |
| --- | --- |
| Marketing site (home, 4 practice areas, about, contact) | Next.js 15 App Router + TypeScript |
| Beautiful styling | Tailwind CSS + Framer Motion + custom serif/sans pairing |
| RAG chatbot (floating widget, 24/7) | OpenAI gpt-4o-mini + in-memory keyword retrieval |
| AI phone receptionist | Vapi.ai (ElevenLabs voice + Deepgram transcription) |
| Contact form | Resend email API |
| SEO | Per-page metadata, sitemap, robots, JSON-LD LegalService + FAQ schema, OG tags |
| Local SEO | NAP consistency, service-area markup for 12+ DuPage towns |
| Performance | Server components, font subsetting, image optimisation, no runtime CSS-in-JS |

No n8n required. API routes replace the workflow layer — simpler, cheaper, no separate service to maintain.

---

## 1. Install & run locally (5 minutes)

```powershell
cd C:\Users\seanp\kraus-law
npm install
npm run dev
```

Open http://localhost:3000.

The chatbot and contact form work in **degraded mode** without API keys — chatbot serves the closest knowledge-base chunk, contact form logs to console. Add the keys below to unlock the real AI.

---

## 2. Add your API keys

Copy `.env.example` to `.env.local`:

```powershell
copy .env.example .env.local
notepad .env.local
```

Fill in:

### OpenAI (powers the chatbot) — REQUIRED for the chat to use GPT
1. Go to https://platform.openai.com/api-keys
2. Create a new key, copy it
3. Paste into `OPENAI_API_KEY`
4. Add $5 credit at https://platform.openai.com/settings/organization/billing — at gpt-4o-mini pricing that's ~40,000 chat exchanges

### Resend (powers the contact form) — REQUIRED for the form to email Grace
1. Go to https://resend.com and sign up (free tier: 100 emails/day, 3,000/mo)
2. Create an API key
3. Either: (a) verify a domain you own and use `intake@yourdomain.com` as `CONTACT_FROM_EMAIL`, or (b) start with `onboarding@resend.dev` while testing
4. Set `CONTACT_TO_EMAIL` to Grace's real inbox

### Vapi.ai (powers the phone receptionist) — REQUIRED for the AI phone agent
See section 4 below.

### Site config
- `NEXT_PUBLIC_SITE_URL` — your eventual public URL (e.g. `https://krauslaw.com`)
- `NEXT_PUBLIC_PHONE` — display phone number
- `NEXT_PUBLIC_ADDRESS` — office address

After editing, restart `npm run dev`.

---

## 3. Push to GitHub

```powershell
cd C:\Users\seanp\kraus-law
git init
git add .
git commit -m "Initial commit: Kraus Law Office AI website"
gh repo create kraus-law --private --source=. --remote=origin --push
```

If you don't have the `gh` CLI: install from https://cli.github.com or create the repo manually on github.com, then:

```powershell
git remote add origin https://github.com/<your-username>/kraus-law.git
git branch -M main
git push -u origin main
```

---

## 4. Set up the AI phone receptionist (Vapi.ai)

Vapi is the cleanest AI-phone-agent platform on the market. Pricing: ~$0.05–$0.09/minute. For a law firm that's typically $40–80/month at low call volumes.

### 4a. Create the assistant

1. Sign up at https://dashboard.vapi.ai
2. **Assistants → Create Assistant**
3. Open `vapi-assistant.json` from this project
4. Replace `YOUR_DOMAIN` with your deployed Vercel URL (e.g. `kraus-law.vercel.app`) in both `server.url` fields
5. In the Vapi dashboard, paste the JSON into "Import / JSON" — or recreate the fields manually using it as a reference

### 4b. Buy a phone number

1. **Phone Numbers → Buy Number**
2. Pick a (630) area code number for DuPage County — ~$2/mo
3. Assign the number to the "Kraus Law Receptionist" assistant

### 4c. Set the webhook secret

1. In Vapi assistant settings → Server Authentication, add a custom header:
   - Name: `x-vapi-secret`
   - Value: pick a random 32+ char string
2. Paste the same value into `.env.local` as `VAPI_WEBHOOK_SECRET` and redeploy
3. This prevents random people from hitting `/api/vapi`

### 4d. Update the displayed phone

Once you have the Vapi number, change `NEXT_PUBLIC_PHONE` and `phoneRaw` in `lib/seo.ts` to point at it. All "Call Now" buttons on the site now route to the AI receptionist.

### 4e. Test it

Call the Vapi number from any phone. The AI should:
- Greet warmly
- Answer questions using your knowledge base (`lib/knowledge-base.ts`)
- Capture leads and forward them to Grace's email
- Transfer to Grace's real cell for active emergencies

---

## 5. Deploy to Vercel

The fastest path:

```powershell
npm i -g vercel
vercel login
vercel
```

Or via dashboard:
1. Go to https://vercel.com/new
2. Import your `kraus-law` GitHub repo
3. Add all the env vars from `.env.local` to **Settings → Environment Variables**
4. Click Deploy

You'll get a URL like `kraus-law.vercel.app` in ~90 seconds.

---

## 6. Point a custom domain at it

1. Buy a domain (Vercel sells them at cost: https://vercel.com/domains, ~$15/yr for `.com`)
2. **Vercel → Project → Settings → Domains → Add**
3. Type the domain (e.g. `krauslaw.com`) and follow DNS instructions
4. Update `NEXT_PUBLIC_SITE_URL` env var to the new domain and redeploy
5. SSL is automatic

---

## 7. Editing the knowledge base (the RAG part)

The chatbot and phone agent both read from `lib/knowledge-base.ts`. Each entry has:
- `topic` — short label
- `keywords` — array of phrases that should match user questions
- `content` — the actual answer text

Add a new entry, save, redeploy. The chatbot learns instantly. For 200+ chunks, upgrade to Supabase pgvector (see notes at the top of `lib/knowledge-base.ts`).

---

## 8. SEO checklist for Google

Once the site is live at the real domain:

1. **Google Search Console** → Add property → verify ownership (via Vercel DNS, instant)
2. Submit sitemap: `https://krauslaw.com/sitemap.xml`
3. **Google Business Profile**:
   - Claim/create at https://business.google.com
   - NAP must match the site exactly (already coded to match `lib/seo.ts`)
   - Add the four practice-area pages as services
   - Request reviews from past clients
4. **Bing Webmaster Tools** — same drill, submit sitemap
5. **Local citations** — submit consistent NAP to Avvo, Justia, FindLaw, Lawyers.com, Yelp, and the Illinois State Bar directory
6. **Schema validation** — paste your URL into https://search.google.com/test/rich-results — you should see `LegalService` and `FAQPage` schemas

The site already includes:
- Auto-generated sitemap.xml
- Auto-generated robots.txt
- Per-page `<title>`, `<meta description>`, OG tags, canonical URLs
- LegalService + FAQPage JSON-LD
- Heading hierarchy (one h1, semantic h2s)
- Mobile-first responsive design
- Fast load (server components, no client-side waterfalls)

---

## 9. What to bill Grace for $1,500/mo

The deliverable that justifies the price:

- **Site** (this codebase) — $4–6k value as a one-time build
- **Hosting** — Vercel Pro $20/mo (optional; Hobby is free for low traffic)
- **Domain** — ~$15/yr
- **OpenAI chat** — pennies/day at her volume (budget $10/mo)
- **Resend** — free tier handles ~3k emails/mo
- **Vapi phone receptionist** — ~$50/mo + minute-based ($0.05–$0.09/min)
- **Your time** — knowledge base updates, content additions, SEO monitoring, lead reports

**Your monthly cost: ~$80–120.** Pocket: ~$1,380/mo per client. Three clients = $50k/yr. Ten clients = $165k/yr.

---

## 10. Bringing the chatbot to enterprise-grade

Current build uses keyword retrieval — perfect up to ~50 KB chunks. To scale beyond:

1. Add embeddings: `text-embedding-3-small` (cheap), store in Supabase pgvector
2. Add a "thumbs up/down" feedback loop, write to a `chat_feedback` table
3. Add session memory: persist `messages` in Supabase keyed by `cookieId`
4. Add the **RAG Architect skill** workflow from your attachments to auto-generate the upgrade — describe your data to Claude in a fresh chat and it'll output runnable migration + ingestion code

---

## 11. Common issues

| Symptom | Fix |
| --- | --- |
| `npm install` fails on Windows | Make sure Node 20.x is installed (`node -v`). Get it at https://nodejs.org |
| Chatbot says "having trouble connecting" | Check `OPENAI_API_KEY` is set and has billing enabled |
| Contact form doesn't email | Check Resend domain is verified or use `onboarding@resend.dev` |
| Vapi webhook 401 errors | `VAPI_WEBHOOK_SECRET` in `.env.local` must match the header configured in Vapi |
| Vercel build fails | Run `npm run build` locally first — fix any TypeScript errors it reports |

---

## 12. File map

```
app/
  layout.tsx              Root layout: nav, footer, chatbot, schema.org JSON-LD
  page.tsx                Home: Hero → TrustBar → Practice → Process → Testimonials → FAQ → CTA
  sitemap.ts              Auto-generated /sitemap.xml
  robots.ts               Auto-generated /robots.txt
  about/page.tsx          About Grace
  contact/page.tsx        Form + map + AI receptionist callout
  practice-areas/
    divorce/page.tsx      Long-form, FAQ schema, fee callout
    family-law/page.tsx
    real-estate/page.tsx
    ssdi/page.tsx
  api/
    chat/route.ts         RAG chatbot endpoint (POST)
    contact/route.ts      Contact form handler → Resend (POST)
    vapi/route.ts         Phone receptionist tools webhook (POST)

components/
  Navbar.tsx              Sticky, scroll-aware, mobile drawer
  Footer.tsx              4-col footer with service area, schema-ready NAP
  Hero.tsx                Glass intake card, motion entrance
  TrustBar.tsx            Social proof stats band
  PracticeAreas.tsx       4-card grid with hover-lift
  Process.tsx             4-step dark navy section with gold accents
  Testimonials.tsx        2x2 review cards
  FAQ.tsx                 Accordion with embedded FAQPage JSON-LD
  CtaBand.tsx             Bottom-of-page closer
  ContactForm.tsx         Validated, with success / error states
  PracticeAreaPage.tsx    Shared template for all 4 practice pages
  Chatbot.tsx             Floating widget, suggestions, typing dots
  StickyCallButton.tsx    Mobile-only Call Now FAB

lib/
  seo.ts                  SITE config, metadata helper, schema generators
  knowledge-base.ts       RAG content (edit me)
  utils.ts                cn() helper

public/
  favicon.svg             Scales-of-justice mark

vapi-assistant.json       Importable Vapi config
.env.example              All env vars documented
```

---

## License

Proprietary — built for Grace Kraus / NSCO use only.
