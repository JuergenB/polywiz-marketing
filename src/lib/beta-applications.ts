/**
 * Beta Applications — intake for the early-access form (#399).
 *
 * ⚠️ This site holds NO Airtable credential, deliberately. It POSTs to a
 * secret-gated endpoint on the PolyWiz app, which owns the Airtable write.
 *
 * The alternative — giving the marketing site its own Airtable PAT — was
 * rejected: the only PAT available is scoped to the owner's user account and
 * holds `create` on four bases, including the PolyWiz base's `Users` table
 * (bcrypt password hashes) and `Beta Applications` (live invite tokens that
 * mint accounts). A public marketing deploy has no business holding that, and
 * even a table-scoped replacement would have to be rotated through a browser,
 * since Airtable has no API for creating tokens. A shared secret can be rotated
 * from a terminal.
 *
 * Server-side only — BETA_INTAKE_SECRET must never reach the client bundle.
 */

/** A form submit should never hang the request. */
const TIMEOUT_MS = 10_000;

export interface BetaApplicationInput {
  name: string;
  email: string;
  organization?: string;
  /** Self-described role from the form. NOT a permission role. */
  role?: string;
  message?: string;
  source?: string;
}

function config(): { url: string; secret: string } | null {
  const base = process.env.POLYWIZ_APP_URL?.trim().replace(/\/$/, '');
  const secret = process.env.BETA_INTAKE_SECRET?.trim();
  if (!base || !secret) return null;
  return { url: `${base}/api/webhooks/beta-intake`, secret };
}

/**
 * Persist an early-access application.
 *
 * Returns a discriminated result rather than throwing, because the caller's
 * correct response to every outcome here is the same: tell the applicant it
 * worked. Persistence and the notification emails are two independent capture
 * channels — the point of #399 is that losing one does not lose the lead.
 *
 * `duplicate` is not an error to the applicant. Someone re-submitting the form
 * is a person who wants in, not an attacker; surfacing "you already applied"
 * leaks which emails are on file and reads as a rejection.
 */
export async function recordBetaApplication(
  input: BetaApplicationInput,
): Promise<
  | { outcome: 'created'; id: string }
  | { outcome: 'duplicate'; id: string }
  | { outcome: 'skipped'; reason: string }
  | { outcome: 'failed'; error: unknown }
> {
  const cfg = config();
  if (!cfg) {
    return {
      outcome: 'skipped',
      reason: 'POLYWIZ_APP_URL / BETA_INTAKE_SECRET not configured',
    };
  }

  try {
    const res = await fetch(cfg.url, {
      method: 'POST',
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: {
        'Content-Type': 'application/json',
        'x-intake-secret': cfg.secret,
      },
      body: JSON.stringify({
        name: input.name.trim(),
        email: input.email.trim().toLowerCase(),
        organization: input.organization?.trim() || '',
        role: input.role?.trim() || '',
        message: input.message?.trim() || '',
        source: input.source?.trim() || 'marketing-form',
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      return {
        outcome: 'failed',
        error: new Error(`intake ${res.status}: ${detail.slice(0, 300)}`),
      };
    }

    const data = (await res.json()) as { outcome?: string; id?: string };
    if (data.outcome === 'duplicate' && data.id) {
      return { outcome: 'duplicate', id: data.id };
    }
    if (data.outcome === 'created' && data.id) {
      return { outcome: 'created', id: data.id };
    }
    return {
      outcome: 'failed',
      error: new Error(`Unexpected intake response: ${JSON.stringify(data).slice(0, 200)}`),
    };
  } catch (error) {
    return { outcome: 'failed', error };
  }
}
