// ⚠️ MIRRORED FILE — DO NOT EDIT HERE.
//
// Authoring source: polywiz-app/docs/legal/privacy-policy-v1.md
// Regenerate with:  node scripts/build-legal.mjs   (in polywiz-app)
//
// The app and the marketing site must never show different legal text.
//
// sha256(text) = f054269eaefe039830bfa844c05b4435462cc2fe9b0738c7b3e70bfb04839fec

/**
 * PolyWiz Privacy Policy — canonical text rendered at /privacy on both the app
 * and the marketing site.
 *
 * GENERATED FILE — do not edit. Edit docs/legal/privacy-policy-v1.md, then run
 * `node scripts/build-legal.mjs`.
 *
 * The §5 sub-processor table is a factual claim about the codebase. Adding,
 * removing, or swapping a third-party service that touches user data means
 * editing that table in the same change.
 */

/** Version string recorded on acceptance. Bump = re-acceptance required. */
export const CURRENT_PRIVACY_VERSION = "2026-07-25.v1"

/** Human-readable date shown in the page header. */
export const PRIVACY_EFFECTIVE_DATE = "July 25, 2026"

/** The full document, GitHub-flavoured markdown. */
export const PRIVACY_TEXT = `## The short version

We collect what we need to run PolyWiz for you and not much else. **We don't sell your personal information, and we don't share it for cross-context behavioral advertising.** We do use third-party services to make the product work — and we list the ones that handle your data below, by name, because a vague "we may share with service providers" tells you nothing.

The unusual thing about PolyWiz worth understanding up front: **the product's whole job is to publish content to your social media accounts.** Once something publishes, it lives on that platform under that platform's rules, and we can't unpublish it from our side. More on that in §7.

---

## 1. Who we are

Polymash, Inc., a Florida corporation. For anything in this policy — questions, requests, complaints — email **support@polymash.com**.

## 2. What we collect

### Information you give us

| What | Where it comes from |
|---|---|
| Name, email, organization, your role | Beta application form and account registration |
| Why you want access | The "what drew you to PolyWiz" field on the application form |
| Password | You set it yourself at registration. We store a **bcrypt hash**, never the password |
| Time zone, display name | Your profile |
| Brand information | Voice guidelines, logos, cadence preferences you configure |
| Content you upload | Images, captions, text |
| URLs you point us at | Exhibition pages, blog posts, newsletter issues you want campaigns built from |

### Information created when you use PolyWiz

| What | Why |
|---|---|
| Campaigns, generated posts, edits, approvals, schedules | It's the product |
| **Agreement acceptance record** — the version you accepted, the timestamp, **your IP address**, and a hash of the exact text shown | A legal record of what you agreed to and when. The IP address helps verify the authenticity of an acceptance and prevent fraudulent or disputed account activity. See §6 — this record outlives your account |
| Server and application logs, including IP addresses | Security, debugging, abuse prevention |
| Usage and consumption records | Metering, and showing you your own usage |

### Information from services you connect

When you connect a social media account, we receive **access tokens and basic account details** (account name, ID, connected platform) through Zernio. We use them to publish what you approve. **We never receive your social media password.**

### Analytics

- **The marketing site** (not the app) uses UserMaven, configured **cookieless** and in strict-privacy mode. It records page views and interactions on our site. **It does not use cookies, and it does not track you across other websites.** In place of cookies it derives a hashed browser fingerprint (from details like user agent, screen size, and IP) to tell one visit from another. IP addresses are anonymized for EU and UK visitors.
- **The application** does not run advertising or behavioural-tracking analytics.

### Cookies

We use a **session cookie** to keep you logged in. **We don't use advertising or cross-site tracking cookies.** Some embedded third-party tools we load (see §5) may set their own cookies for functionality — **Chatbase**, the in-app help assistant, is the one that does.

## 3. What we do with it

- Run the product: generate content, schedule it, publish it where you tell us
- Create and secure your account, and authenticate you
- Send you transactional email — invitations, password resets, service notices
- Meter usage and show you your own consumption
- Support you when you ask for help
- Keep a record of your agreement acceptance
- Detect and prevent abuse and security problems
- Understand, in aggregate, how the product is used so we can improve it

**We do not sell your personal information. We do not share it for cross-context behavioural advertising.** We don't do targeted advertising at all.

## 4. Legal bases and how AI fits in

Content you supply — URLs, images, text, brand voice — is sent to **Anthropic's Claude API** to generate draft posts. Two things worth being explicit about:

- **We do not use your content to train our own models.** Content is sent to Anthropic's Claude API **solely to generate the outputs you ask for**, on your instruction.
- Under Anthropic's commercial API terms, customer content is **not used to train their models by default**.
- To be precise about what we can and can't promise: we **rely on Anthropic's representations** about their data handling. We don't independently control their internal use of data, and we're not in a position to guarantee a third party's conduct.

We may use **anonymized, aggregated** information about how PolyWiz is used — counts, timings, failure rates — to improve the product. That data doesn't identify you or reproduce your content.

## 5. Who we share it with

We work with a set of carefully selected service providers to operate PolyWiz. The key providers that process personal data are listed below, with what each one receives and why. This list is derived from the codebase.

| Service | What it receives | Why |
|---|---|---|
| **Airtable** | Account records, brand config, campaigns, posts, agreement acceptance records | Primary data store |
| **Vercel** | All application traffic; server logs | Hosting and serverless functions |
| **Vercel Blob** | Uploaded and generated **images**, PDFs | Permanent media storage |
| **Anthropic (Claude)** | Content you supply for generation — scraped page text, image context, brand voice | AI content generation |
| **Zernio** | Post content, media, schedules, your social account tokens | Social scheduling and publishing |
| **Firecrawl** | The **URLs you ask us to scrape** and their content | Reading source pages for campaigns |
| **Replicate** | **Images** you choose to expand or upscale | AI image outpainting and upscaling |
| **Resend** | Your **email address** and message content | Transactional email |
| **Short.io** | Destination URLs | Link shortening for posts |
| **lnk.bio** | Post links and scheduling times, for brands with it enabled | Instagram link-in-bio sync |
| **Chatbase** | **Whatever you type into the in-app help chat**, plus a script loaded on dashboard pages | In-product help assistant |
| **UserMaven** | Marketing-site page views and interactions (cookieless) | Marketing-site analytics only |
| **Social media platforms** | Everything you approve for publication | Publishing — see §7 |

We maintain data processing agreements or comparable contractual protections with providers that process personal data on our behalf, where appropriate. **Zernio, which handles publishing and holds your social account tokens, acts as our service provider — it processes this data on our and your instruction, not for its own purposes.**

We also share information when the law requires it, to protect rights and safety, or in connection with a merger or sale of the business (you'd be told).

## 6. How long we keep it

| Data | Retention |
|---|---|
| Account and profile | Life of the account, then deleted within **30 days** of a deletion request |
| Campaigns, posts, uploaded media | Life of the account, then deleted within **30 days** of a deletion request |
| Beta applications not converted to accounts | **24 months**, then deleted |
| **Agreement acceptance records** | **7 years after the agreement ends.** We retain these to establish, exercise, or defend legal claims and to comply with legal obligations. For that reason they deliberately **outlive account deletion** — they're the proof of what you agreed to, and deleting them would destroy the record for both of us. They're kept separate from your active account data and aren't used for any other purpose |
| Server and application logs | **30 days** |
| Usage and consumption records | Life of the account, plus aggregate figures we keep indefinitely in de-identified form |
| Support chat transcripts | Per Chatbase's retention; we don't keep a separate copy |

**Published posts are the exception** — see §7.

## 7. Published content is outside our control

This one matters and most policies bury it.

**Before publication, you control and approve all content. We act only on your instruction to publish it.**

When you approve a post and it publishes, it goes to **your own account** on Meta (Facebook/Instagram), LinkedIn, Pinterest, X, Threads, Bluesky, TikTok, YouTube, or wherever you've connected. From that moment:

- It's governed by **that platform's** terms and privacy policy, not ours.
- Deleting your PolyWiz account **does not** remove already-published posts.
- If you want a published post gone, you delete it on the platform.
- Anything a platform has already distributed, cached, or that others have shared may persist regardless.

## 8. Your rights

Depending on where you live — California (CCPA/CPRA), Colorado, Connecticut, Utah, Virginia, and a growing number of other states — you may have the right to:

- **Know** what we've collected about you
- **Access** a copy
- **Correct** anything inaccurate
- **Delete** it (subject to the agreement-record exception in §6)
- **Opt out** of sale or targeted advertising — **not applicable here, because we do neither**
- **Not be discriminated against** for exercising any of these

**To exercise any of them, email support@polymash.com.** We'll respond within 45 days, and tell you if we need longer. We may need to verify who you are first — usually by confirming you control the account email.

If you're outside the United States: PolyWiz is operated from the US and your information is processed there.

## 9. Security

Passwords are stored as **bcrypt hashes** — we can't read them, and we can't tell you what yours is. Traffic is encrypted in transit. Access to production data is limited to people who need it. Reset and invitation links are random, single-use, and time-limited.

Being honest about limits: **PolyWiz is in beta, and no system is perfectly secure.** If we discover a breach affecting your personal information, we'll tell you and any regulator the law requires, without unreasonable delay.

## 10. Children

PolyWiz is a business tool and isn't directed to children. We don't knowingly collect personal information from anyone under 16. If you believe a child has given us information, email support@polymash.com and we'll delete it.

## 11. Changes

We'll update this policy as PolyWiz changes. Every version carries a version number and date. For **material** changes — new categories of data, new purposes, a new sub-processor receiving your content — we'll notify you and, where the change is significant, ask you to acknowledge it. Continued use after a minor update means you accept it.

## 12. Contact

**support@polymash.com** — questions, requests, complaints, or anything about this policy.

Polymash, Inc. · Florida, USA
`
