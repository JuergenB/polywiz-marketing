import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface EarlyAccessPayload {
  name: string;
  email: string;
  organization: string;
  role?: string;
  message: string;
  website?: string; // honeypot
  _t?: number; // time elapsed in ms
}

export async function POST(request: NextRequest) {
  let payload: EarlyAccessPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  const { name, email, organization, role, message, website, _t } = payload;

  // Honeypot — if filled, silently accept (bot thinks it succeeded)
  if (website) {
    return NextResponse.json({ success: true, message: "Thanks! We'll be in touch soon." });
  }

  // Timing — form filled in under 3 seconds is almost certainly a bot
  if (_t !== undefined && _t < 3000) {
    return NextResponse.json({ success: true, message: "Thanks! We'll be in touch soon." });
  }

  if (!name?.trim() || !email?.trim() || !organization?.trim()) {
    return NextResponse.json(
      { error: 'Name, email, and organization are required' },
      { status: 400 },
    );
  }

  if (!message?.trim() || message.trim().length < 40) {
    return NextResponse.json(
      { error: 'Please tell us more about what drew you to PolyWiz (at least 40 characters)' },
      { status: 400 },
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
  }

  if (!resend) {
    console.error('[early-access] Resend not configured — RESEND_API_KEY missing');
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 500 },
    );
  }

  try {
    // Notify admin
    await resend.emails.send({
      from: 'PolyWiz <support@polymash.com>',
      to: 'juergen@polymash.com',
      subject: `PolyWiz Early Access Request: ${organization}`,
      html: `
        <h2>New Early Access Request</h2>
        <table style="border-collapse:collapse;font-size:15px;">
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Name</td><td>${name}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Organization</td><td>${organization}</td></tr>
          ${role ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Role</td><td>${role}</td></tr>` : ''}
        </table>
        <hr><p><strong>What piqued their interest:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color:#999;font-size:12px;">Sent from the PolyWiz marketing site early access form.</p>
      `,
    });

    // Send confirmation to requester
    await resend.emails.send({
      from: 'PolyWiz <support@polymash.com>',
      to: email,
      subject: "We got your PolyWiz early access request",
      html: `
        <h2>Thanks for your interest in PolyWiz, ${name.split(' ')[0]}!</h2>
        <p>We received your early access request for <strong>${organization}</strong> and will follow up shortly to schedule a conversation.</p>
        <p>PolyWiz gives arts organizations, nonprofits, and publishers sustained social media presence across 13 platforms — with AI-generated, platform-specific posts and human approval before anything goes live.</p>
        <p>In the meantime, if you have questions, reply to this email or reach out at <a href="mailto:support@polymash.com">support@polymash.com</a>.</p>
        <p style="color:#999;font-size:13px;">— The Polymash Team</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Thanks! We'll be in touch soon.",
    });
  } catch (error) {
    console.error('[early-access] Email send failed:', error);
    return NextResponse.json(
      { error: 'Failed to send request. Please try again.' },
      { status: 500 },
    );
  }
}
