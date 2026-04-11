const { chromium } = require('playwright');
const path = require('path');

const SCREENSHOT_DIR = path.resolve(__dirname, '..', 'screenshots-verify');

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // Clear browser cache
  await page.context().clearCookies();

  await page.goto('http://localhost:3111', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);

  // Find all image carousel containers (the rounded-2xl shadow cards)
  const carousels = page.locator('[class*="rounded-2xl"][class*="shadow-2xl"]');
  const count = await carousels.count();
  console.log(`Found ${count} carousels`);

  for (let i = 0; i < count; i++) {
    const carousel = carousels.nth(i);
    await carousel.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await carousel.screenshot({ path: path.join(SCREENSHOT_DIR, `carousel-${i + 1}.png`) });
    console.log(`Saved carousel-${i + 1}.png`);
  }

  // Also take wider feature section screenshots
  // Scroll down past hero to first feature
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(1000);

  // Take 6 section screenshots at different scroll positions
  const scrollPositions = [900, 1700, 2500, 3300, 4100, 4900];
  for (let i = 0; i < scrollPositions.length; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollPositions[i]);
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, `section-${i + 1}.png`) });
    console.log(`Saved section-${i + 1}.png`);
  }

  await browser.close();
  console.log('Done');
}

main().catch(console.error);
