import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

/** Where contact-form mail lands. Never rendered into any HTTP response. */
const CONTACT_INBOX = 'support@polymash.com';

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
  website?: string; // honeypot
  _t?: number; // ms elapsed since the form mounted
}

/** Escape user input before it goes into the notification email's HTML. */
function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * General contact form (#9).
 *
 * Exists so `support@polymash.com` never appears in the site's HTML — an address
 * published as a `mailto:` on an indexable page is harvested, and a harvested
 * address cannot be un-harvested.
 *
 * ⚠️ Deliberately NOT modelled on /api/early-access's write-then-mail ordering.
 * That route persists to Airtable first because a lost lead is unrecoverable and
 * it has a datastore to persist to. This one has none: mail is the only channel.
 * So the failure behaviour is the opposite — a send failure returns an error and
 * asks the sender to retry, because a false "thanks, we got it" would drop the
 * message on the floor with nothing anywhere to recover it from.
 */
export async function POST(request: NextRequest) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  const { name, email, subject, message, website, _t } = payload;

  // Honeypot — a bot filled a field no human can see. Accept silently so it
  // doesn't learn to try again with the field left blank.
  if (website) {
    return NextResponse.json({ success: true, message: 'Thanks! We got your message.' });
  }

  // Filled in under 3 seconds is a script, not a person.
  if (_t !== undefined && _t < 3000) {
    return NextResponse.json({ success: true, message: 'Thanks! We got your message.' });
  }

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json(
      { error: 'Name and email are required' },
      { status: 400 },
    );
  }

  if (!message?.trim() || message.trim().length < 20) {
    return NextResponse.json(
      { error: 'Please give us a little more detail (at least 20 characters)' },
      { status: 400 },
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
  }

  if (!resend) {
    console.error('[contact] Resend not configured — RESEND_API_KEY missing');
    return NextResponse.json(
      { error: "We couldn't send that just now. Please try again shortly." },
      { status: 500 },
    );
  }

  const topic = subject?.trim() || 'General enquiry';

  try {
    await resend.emails.send({
      from: `PolyWiz <${CONTACT_INBOX}>`,
      to: CONTACT_INBOX,
      replyTo: email,
      subject: `PolyWiz contact: ${topic}`,
      html: `
        <h2>New message from the PolyWiz site</h2>
        <table style="border-collapse:collapse;font-size:15px;">
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Name</td><td>${esc(name)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Email</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Topic</td><td>${esc(topic)}</td></tr>
        </table>
        <hr><p>${esc(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color:#999;font-size:12px;">Sent from the PolyWiz marketing site contact form. Reply-to is set to the sender.</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Thanks! We got your message.',
    });
  } catch (error) {
    console.error('[contact] Email send failed:', error);
    return NextResponse.json(
      { error: "We couldn't send that just now. Please try again shortly." },
      { status: 500 },
    );
  }
}
