import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FEATURES_DIR = path.resolve(__dirname, '..', 'public', 'images', 'features');

const APP_URL = 'http://localhost:3025';
const EMAIL = 'juergen@polymash.com';
const PASSWORD = 'REDACTED';

async function login(page) {
  await page.goto(`${APP_URL}/login`, { waitUntil: 'networkidle' });
  await page.fill('input[type="email"]', EMAIL);
  await page.fill('input[type="password"]', PASSWORD);
  await page.click('button[type="submit"]');
  await page.waitForURL('**/dashboard**', { timeout: 15000 });
  await page.waitForTimeout(2000);
  console.log('Logged in successfully');
}

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await login(page);

  // ── Find a campaign with posts for AI post generator and approval queue screenshots ──
  await page.goto(`${APP_URL}/dashboard/campaigns`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const campaignLink = page.locator('a[href*="/dashboard/campaigns/rec"]').first();
  if (await campaignLink.count() > 0) {
    await campaignLink.click();
    await page.waitForTimeout(3000);

    // Campaign detail header = approval queue overview
    await page.screenshot({
      path: path.join(FEATURES_DIR, 'approval-queue-option-1.png'),
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    });
    console.log('Saved approval-queue-option-1.png (campaign header)');

    // Scroll down to find the posts grid/list for AI post generator
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(1500);
    await page.screenshot({
      path: path.join(FEATURES_DIR, 'ai-post-generator-option-1.png'),
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    });
    console.log('Saved ai-post-generator-option-1.png (posts area)');

    // Try to find and click a post to see the cover slide designer
    // Look for a post card with an edit or cover slide button
    const postCards = page.locator('[class*="post"], [class*="card"]').filter({ hasText: /Instagram|Bluesky|LinkedIn/ });
    const postCount = await postCards.count();
    console.log(`Found ${postCount} post-like elements`);

    if (postCount > 0) {
      // Click on the first post to open its detail
      await postCards.first().click();
      await page.waitForTimeout(2000);

      // Check if a cover slide section appeared
      const coverBtn = page.locator('button, a').filter({ hasText: /cover|carousel/i });
      if (await coverBtn.count() > 0) {
        await coverBtn.first().click();
        await page.waitForTimeout(2000);
        await page.screenshot({
          path: path.join(FEATURES_DIR, 'cover-slide-designer-option-1.png'),
          clip: { x: 0, y: 0, width: 1440, height: 900 },
        });
        console.log('Saved cover-slide-designer-option-1.png');
      }
    }
  }

  await browser.close();
  console.log('\nDone!');
}

main().catch(console.error);
