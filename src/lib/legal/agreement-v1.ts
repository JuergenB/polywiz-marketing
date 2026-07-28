// ⚠️ MIRRORED FILE — DO NOT EDIT HERE.
//
// Authoring source: polywiz-app/docs/legal/beta-agreement-v1.md
// Regenerate with:  node scripts/build-legal.mjs   (in polywiz-app)
//
// The app and the marketing site must never show different legal text.
//
// sha256(text) = dc3f99877ec88a80f31c20a16242a35e974178b807619c6e6045c65e982aa1f1

/**
 * PolyWiz Beta Agreement — canonical text rendered at /terms.
 *
 * GENERATED FILE — do not edit. Edit docs/legal/beta-agreement-v1.md, then run
 * `node scripts/build-legal.mjs`. That markdown also holds the revision history
 * and the legal-review outcome.
 *
 * NEVER edit a version in place once anyone has accepted it. A material change
 * means: bump CURRENT_AGREEMENT_VERSION, add a revision-history entry, and every
 * existing user re-accepts via the #411 gate.
 *
 * Deliberately free of any node: import so a client component (the clickwrap)
 * can import the text directly. The SHA-256 lives in ./hash.ts, which is
 * server-only.
 */

/** Version string recorded on acceptance. Bump = re-acceptance required. */
export const CURRENT_AGREEMENT_VERSION = "2026-07-25.v1"

/** Human-readable date shown in the page header. */
export const AGREEMENT_EFFECTIVE_DATE = "July 25, 2026"

/** Copy rendered beside the (unchecked) clickwrap checkbox. */
export const AGREEMENT_ACCEPTANCE_LABEL =
  "I have read and agree to the PolyWiz Beta Agreement and Privacy Policy. I confirm I have the rights to any content and images I upload, and I understand that AI-generated posts may be inaccurate and that I am responsible for reviewing them before approving."

/** The full document, GitHub-flavoured markdown. */
export const AGREEMENT_TEXT = `## Welcome to the PolyWiz beta

We've written this in plain English on purpose. It's a real agreement and it's binding, but you shouldn't need a lawyer to understand what you're agreeing to.

The short version: **you're responsible for the content you put in and approve on the way out; we're responsible for running the software.** PolyWiz drafts social media posts with AI, but nothing publishes until you review and approve it — so the accuracy and the rights to what goes out are yours.

By ticking the box and activating your account, you agree to everything below.

---

### 1. Who this is between

This agreement is between **Polymash, Inc.** and **you** — and, if you're using PolyWiz for an organization, that organization too. If you're signing up on behalf of an employer, school, gallery, or nonprofit, you're confirming you're allowed to agree to this on their behalf.

### 2. This is a beta

PolyWiz is in **private beta**. That means:

- It's still being built. Things will change, break, and occasionally be wrong.
- You don't pay us anything. Your usage during the beta runs on **credits we've given you** — see below.
- There's **no uptime guarantee, no service level agreement, and no support commitment.**
- We may change, suspend, or discontinue any part of it — or end the beta entirely — at any time.
- We may end your access at any time, for any reason.

We won't do any of that arbitrarily, and where possible we'll give you notice.

Please don't build anything mission-critical on it yet. Keep your own copies of anything you'd hate to lose.

**Your beta credits.** Using PolyWiz draws down a balance of credits. **Creating a campaign and generating posts consume credits** — that's where the work happens. Scheduling and publishing what you've already generated don't, and neither does adding users to your brand. For the beta we've **gifted you a specific block of them, free of charge**, so you can genuinely put the product through its paces instead of rationing yourself against a meter. Your usage is metered, and we'll show you your consumption and remaining balance in the product.

Since it's a gift and not a purchase, the edges matter:

- The credits have **no cash value.** They are **not refundable, not transferable,** and can't be redeemed for money or anything else.
- Credits are provided solely for evaluating the beta and **do not represent stored monetary value or a prepaid balance.**
- **We decide the allocation**, and we may **adjust, suspend, expire, or revoke unused credits for product, operational, or abuse-prevention reasons** — including if the beta changes or ends.
- When your allocation runs out, **we're under no obligation to grant more**, and your access may pause.
- Being given credits now **doesn't lock in any future price, any future allocation, or continued access on these or any other terms.** Nothing here creates a right to future credits.

None of that is us being stingy — we'd rather cover your usage during the beta than have you hold back. We just don't want a gift read as a promise.

**What you get for being early.** Beta users have an outsized say in what PolyWiz becomes. It's a small group, we read what you send us, and features do get built because someone in the beta asked for them. A real example: a beta participant wanted to aim the same source material at different audiences — donors, alumni, students, art-curious neighbors — and a multi-audience selector went onto our roadmap because they asked for it.

That invitation is genuine, and we want to be straight about its limits: **it's an opportunity to influence what we build, not a commitment to build anything.** Polymash alone decides what goes on the roadmap, in what order, and whether to build it at all. Sending us a request — however good it is, however enthusiastic we sound about it — creates **no obligation, no deadline, and no promise** that any feature will be built, released, kept, or work a particular way. Nothing in this agreement means any plan, tier, or level of access "includes development." Anything we say about future features is a current intention, not a commitment, and we may change our minds. **You agree not to rely on any statement about future features or plans when deciding to use PolyWiz.** Whatever you send us is covered by the feedback licence in §6.

### 3. What PolyWiz does

You give PolyWiz a web address — an exhibition page, a blog post, a newsletter issue. It reads that page, and uses AI to draft a series of social media posts tailored to each platform. You review, edit, and approve them. Approved posts are scheduled and published to **your own** connected social media accounts.

You can also upload your own images and text. Those become part of what gets published.

### 4. Your content

"**Your Content**" means everything you upload, connect, or feed into PolyWiz — images, text, links, web pages you point us at, and your social media accounts.

**You keep ownership of Your Content.** We don't claim it. You give us permission to store it, process it, and publish it to your connected accounts, because that's the only way the product can work.

**You promise us that:**

- You **own Your Content, or have all the rights you need** to use it in PolyWiz and publish it — including copyright, trademark, and any permissions needed for photographs of people or artwork.
- Publishing Your Content the way you direct **won't infringe anyone else's rights** — no copyright, trademark, privacy, or publicity violations.
- Your Content is accurate and not misleading.
- Your Content follows the rules of every social platform you publish it to.

This one matters, so plainly: **if you upload an image you don't have the rights to, that's on you, not us.** We have no way to verify what you own. We're relying on your promise.

### 5. AI-generated content

PolyWiz uses AI to draft posts. You need to understand what that means:

- **AI output can be wrong.** It can invent facts, misattribute artwork, misspell names, get dates wrong, or produce something tone-deaf. This is a known property of the technology, not a bug we've overlooked.
- **We don't promise AI output is accurate, appropriate, or legal.**
- **You are solely responsible for reviewing everything before you approve it.** PolyWiz deliberately puts a human approval step between generation and publication. That step is yours. Once you approve a post, you've adopted it as your own.
- Once you approve and publish, you're responsible for what it says — the same as if you'd typed it yourself.

**Who owns the output:** as between you and us, **you own the posts PolyWiz generates for you.** We may use anonymized, aggregated information about how the product is used to improve it. We won't use Your Content to train third-party AI models.

**We're a tool, not a publisher.** PolyWiz enables you to create and publish content; we don't review approved content or adopt it as our own. **We are not the publisher or speaker of content you approve and publish.**

### 6. Our platform

**We own PolyWiz.** The software, source code, design, prompts, templates, cover-slide layouts, generation logic, brand-voice engine, documentation, and the PolyWiz name and logo are Polymash's intellectual property. Nothing here transfers any of it to you.

You get a limited, personal, non-transferable, revocable right to use PolyWiz during the beta. You agree **not** to:

- copy, resell, sublicense, or rent access to PolyWiz;
- reverse engineer, decompile, or try to extract its source code, prompts, or models;
- use it to build or train a competing product;
- scrape it, or access it by automated means outside the product itself;
- remove or obscure any Polymash branding or notices.

**Feedback:** if you send us ideas, bug reports, or suggestions, we can use them freely to improve PolyWiz, with no obligation or payment to you. You keep the right to use your own ideas too — we just don't want to owe anyone royalties on a bug report. As §2 says, we'd love your input and it really does shape the product, but sending it never obliges us to act on it or to build anything.

**Beta confidentiality:** as a condition of participating in the private beta, you agree to keep confidential any non-public information we share about PolyWiz — including unreleased features — and not to disclose it to third parties without our permission. Talking about your general experience with PolyWiz is fine — we'd like that.

### 7. How you may and may not use it

Don't use PolyWiz to create, schedule, or publish anything that:

- infringes someone's copyright, trademark, or other rights;
- is illegal, defamatory, harassing, hateful, or threatening;
- is deliberately false or misleading;
- impersonates someone;
- is spam, or violates any social platform's rules;
- contains malware, or attempts to breach the security of PolyWiz or anything connected to it.

**Social platform rules.** PolyWiz publishes to third-party platforms — Meta (Facebook/Instagram), LinkedIn, Pinterest, and others. Each has its own terms and community guidelines, and **you must follow them** on every account you connect. If a platform requires us to remove content or suspend your access, we'll comply, and we're not responsible for what that costs you.

**Your account.** You're responsible for keeping your account and login credentials secure, and for everything done through your account. Tell us promptly at support@polymash.com if you think someone else has access to it.

### 8. Indemnification

If someone brings a claim against us because of **Your Content**, your use of PolyWiz, or your breach of this agreement, you agree to **defend us, cover the costs, and hold us harmless** — including reasonable attorneys' fees.

This specifically includes claims that Your Content infringes someone's copyright, trademark, trade secret, privacy, or publicity rights.

We'll tell you promptly if such a claim arrives, and you get to control the defense. **You may not settle any claim in a way that imposes liability, an admission, or any obligation on us without our prior written consent.**

**This doesn't apply** to claims arising from our own gross negligence or willful misconduct.

### 9. No warranties

PolyWiz is provided **"as is" and "as available."**

To the fullest extent the law allows, we disclaim all warranties — express or implied — including any implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.

We don't warrant that PolyWiz will be uninterrupted, secure, error-free, or that anything it generates will be accurate or suitable for your purposes.

**We are not responsible for loss of Your Content.** Keep your own copies of anything you'd hate to lose.

### 10. Limitation of liability

To the fullest extent the law allows:

- We are **not liable for indirect, incidental, consequential, special, exemplary, or punitive damages** — including lost profits, lost revenue, lost data, lost business, or reputational harm.
- Our **total liability** for any and all claims relating to PolyWiz is limited to **the greater of (a) one hundred US dollars ($100) or (b) the amount you paid us in the twelve months before the claim.**

These limits apply no matter the legal theory — contract, negligence, strict liability, or anything else — and even if we've been warned the damage was possible. Because the beta costs you nothing — your credits are a gift, not a purchase — this cap reflects what you've paid.

**These limits don't apply** to our gross negligence, our willful misconduct, or our obligations under §8.

Some states don't allow certain exclusions, so parts of this may not apply to you.

### 11. Governing law; disputes

This agreement is governed by the laws of the **State of Florida**, without regard to conflict-of-law rules.

**We'd rather just talk first.** If something goes wrong, email us at support@polymash.com and give us 30 days to sort it out. Most things end there.

If that doesn't work, any dispute arising out of or relating to this agreement or PolyWiz will be resolved by **binding arbitration**, administered by the **American Arbitration Association (AAA) under its Commercial Arbitration Rules**. Arbitration will take place in **Florida**, or by video conference if we both prefer — and we'll agree to video if you ask, so you're not forced to travel.

- **You can opt out.** You may opt out of arbitration within **30 days** of accepting this agreement by emailing support@polymash.com. If you opt out, neither of us is bound by this arbitration section, and the rest of the agreement still applies.
- **This applies to both of us equally.** We have to arbitrate our claims against you too.
- **Small claims are carved out.** Either of us can bring an individual claim in small claims court instead.
- **No class actions.** Claims must be brought individually, not as a class or representative action.
- **The arbitrator decides** any dispute about the scope or enforceability of this arbitration section.
- Each side pays its own attorneys' fees; filing and administrative fees are allocated by the arbitrator, subject to applicable law.

This section **survives** the end of this agreement.

### 12. Privacy and electronic records

Our [Privacy Policy](/privacy) explains what we collect and why. By using PolyWiz you agree to it.

You also agree to **do business with us electronically**. **By checking the box, you consent to receive this agreement and all related notices electronically**, and your click is your signature. You'll need a device with a browser and email access, and you can save or print a copy of this agreement at any time.

You may withdraw that consent by contacting us at support@polymash.com — but doing so ends your ability to use PolyWiz, since the whole thing is online.

### 13. Changes to this agreement

We may update this agreement. Every version has a version number and date.

If we make a **material** change — anything touching liability, arbitration, ownership, or how we handle your data — we'll ask you to accept the new version before you keep using PolyWiz. For minor changes, we'll post the updated version and note the date.

### 14. Ending it

**You** can stop using PolyWiz whenever you like. Ask us and we'll delete your account and content.

**We** can suspend or end your access at any time during the beta, with or without cause. We won't do that arbitrarily, and where possible we'll give you notice. If we do, we'll give you a reasonable chance to export your content unless the circumstances make that unsafe or impossible.

**What happens to unused credits.** They end with your access. Because credits are a gift with no cash value (§2), any unused balance **automatically expires** when this agreement ends or your access stops — there's no refund, payout, or carry-over to anything else. If the beta ends and you move onto a paid plan, we'll talk about what carries over then; nothing here promises that anything does.

Sections 4 (your promises), 6 (our platform), 8 (indemnification), 9 (no warranties), 10 (liability), and 11 (disputes) survive termination.

### 15. Copyright complaints

If you believe content created or published using PolyWiz infringes your copyright, email **support@polymash.com** with:

- a description of the work you say was infringed;
- a description of the allegedly infringing content and where to find it;
- your contact details;
- a statement that you believe in good faith the use isn't authorized by the copyright owner or the law; and
- a statement, under penalty of perjury, that your notice is accurate and that you're the owner or authorized to act for them.

We'll review it and respond, which may include removing content or ending the access of anyone who repeatedly infringes.

### 16. Odds and ends

- **Entire agreement.** This, plus the Privacy Policy, is the whole agreement between us about PolyWiz.
- **Severability.** If a court finds part of this unenforceable, the rest stays in force.
- **No waiver.** If we don't enforce something right away, we haven't given up the right to enforce it later.
- **Assignment.** You can't transfer this agreement without our written consent. We can transfer it to an affiliate or in connection with a merger or sale.
- **Force majeure.** Neither of us is liable for delays caused by things genuinely outside our control.

---

**Questions?** support@polymash.com

Polymash, Inc. · Florida, USA
`
