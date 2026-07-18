// Build-time environment variable guard.
//
// Runs before `next build` (see package.json "build" script). Fails a
// PRODUCTION build when a required env var is missing, so a broken deploy
// (e.g. RESEND_API_KEY absent → early-access form 500s silently) never ships.
// Preview and local builds only warn, so half-configured previews aren't blocked.
//
// Var tiers:
//   REQUIRED    — no fallback in code; missing = broken feature. Hard-fail on prod.
//   RECOMMENDED — has a fallback; missing = degraded but working. Warn only.
// Optional vars (feature simply turns off, e.g. NEXT_PUBLIC_USERMAVEN_KEY) are not listed.

const REQUIRED = ['RESEND_API_KEY'];
const RECOMMENDED = ['NEXT_PUBLIC_SITE_URL'];

// Vercel sets VERCEL_ENV to 'production' | 'preview' | 'development'.
// Undefined locally → treated as non-production (warn, don't block).
const isProduction = process.env.VERCEL_ENV === 'production';

const isMissing = (key) => !process.env[key]?.trim();
const missing = REQUIRED.filter(isMissing);

for (const key of RECOMMENDED.filter(isMissing)) {
  console.warn(`⚠  ${key} is not set — using in-code fallback.`);
}

if (missing.length > 0) {
  console.error(`\n✖  Missing required environment variable(s): ${missing.join(', ')}`);
  console.error('   Set them in Vercel → Project → Settings → Environment Variables,');
  console.error('   or in .env.local for local development.\n');

  if (isProduction) {
    console.error('   Blocking this production build.\n');
    process.exit(1);
  }
  console.error('   Non-production build — continuing anyway.\n');
} else {
  console.log('✓  Environment check passed.');
}
