import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FEATURES_DIR = path.resolve(__dirname, '..', 'public', 'images', 'features');

const APP_URL = 'http://localhost:3025';
const EMAIL = 'juergen@polymash.com';
const PASSWORD = process.env.POLYWIZ_APP_PASSWORD;

async function login(page) {
  await page.goto(`${APP_URL}/login`, { waitUntil: 'networkidle' });
  await page.fill('input[type="email"]', EMAIL);
  await page.fill('input[type="password"]', PASSWORD);
  await page.click('button[type="submit"]');
  await page.waitForURL('**/dashboard**', { timeout: 15000 });
  await page.waitForTimeout(2000);
  console.log('Logged in successfully');
}

async function screenshotElement(page, selector, filename, options = {}) {
  const el = page.locator(selector).first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await el.screenshot({ path: path.join(FEATURES_DIR, filename) });
  console.log(`Saved ${filename}`);
}

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await login(page);

  // ── 1. Campaign Dashboard ──
  await page.goto(`${APP_URL}/dashboard`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: path.join(FEATURES_DIR, 'campaign-dashboard-option-1.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });
  console.log('Saved campaign-dashboard-option-1.png');

  // ── 2. Campaign list / overview ──
  await page.goto(`${APP_URL}/dashboard/campaigns`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: path.join(FEATURES_DIR, 'campaign-dashboard-option-2.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });
  console.log('Saved campaign-dashboard-option-2.png (campaigns list)');

  // ── 3. New campaign page — for multiple screenshots ──
  await page.goto(`${APP_URL}/dashboard/campaigns/new`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // ── 4. Quick Post ──
  await page.goto(`${APP_URL}/dashboard/quick-post`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: path.join(FEATURES_DIR, 'quick-post-option-1.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });
  console.log('Saved quick-post-option-1.png');

  // ── 5. Calendar / Scheduler ──
  await page.goto(`${APP_URL}/dashboard/calendar`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await page.screenshot({
    path: path.join(FEATURES_DIR, 'smart-scheduler-option-1.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });
  console.log('Saved smart-scheduler-option-1.png');

  // ── 6. Brand settings (tone dimensions, brand management) ──
  await page.goto(`${APP_URL}/dashboard/settings/brands`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: path.join(FEATURES_DIR, 'brand-manager-option-1.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });
  console.log('Saved brand-manager-option-1.png');

  // ── 7. Compose page (cover slide designer) ──
  await page.goto(`${APP_URL}/dashboard/compose`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: path.join(FEATURES_DIR, 'cover-slide-designer-option-1.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });
  console.log('Saved cover-slide-designer-option-1.png');

  // ── 8. Try to find an existing campaign with posts for approval queue ──
  await page.goto(`${APP_URL}/dashboard/campaigns`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  // Click on the first campaign to see its detail page (approval queue)
  const campaignLink = page.locator('a[href*="/dashboard/campaigns/rec"]').first();
  if (await campaignLink.count() > 0) {
    await campaignLink.click();
    await page.waitForTimeout(3000);
    await page.screenshot({
      path: path.join(FEATURES_DIR, 'approval-queue-option-1.png'),
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    });
    console.log('Saved approval-queue-option-1.png');

    // Scroll down to see posts / AI generated content
    await page.evaluate(() => window.scrollBy(0, 600));
    await page.waitForTimeout(1500);
    await page.screenshot({
      path: path.join(FEATURES_DIR, 'ai-post-generator-option-1.png'),
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    });
    console.log('Saved ai-post-generator-option-1.png');
  }

  // ── 9. Accounts page (multi-platform publisher) ──
  await page.goto(`${APP_URL}/dashboard/accounts`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: path.join(FEATURES_DIR, 'multi-platform-publisher-option-1.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });
  console.log('Saved multi-platform-publisher-option-1.png');

  // ── 10. Settings page ──
  await page.goto(`${APP_URL}/dashboard/settings`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  await browser.close();
  console.log('\nAll screenshots captured!');
}

main().catch(console.error);
