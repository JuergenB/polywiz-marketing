import { chromium } from 'playwright';
import { resolve } from 'path';

const SCREENSHOT_DIR = resolve('screenshots-verify');
const BASE_URL = 'http://localhost:3111';

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // Disable cache
  const context = page.context();
  await context.clearCookies();

  // Go to homepage
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  // Wait for images to load
  await page.waitForTimeout(3000);

  // Screenshot the full page
  await page.screenshot({ path: `${SCREENSHOT_DIR}/homepage-full.png`, fullPage: true });
  console.log('Saved: homepage-full.png');

  // Scroll to each feature section and screenshot
  // The FeatureShowcase has alternating sections - let's find them
  const featureSections = await page.locator('.py-20.sm\\:py-24').all();
  console.log(`Found ${featureSections.length} feature sections`);

  for (let i = 0; i < Math.min(featureSections.length, 6); i++) {
    await featureSections[i].scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await featureSections[i].screenshot({ path: `${SCREENSHOT_DIR}/feature-${i + 1}.png` });
    console.log(`Saved: feature-${i + 1}.png`);
  }

  // Also check a specific image carousel up close
  // Get the first image carousel container
  const carousels = await page.locator('.rounded-2xl.bg-navy-800.shadow-2xl').all();
  console.log(`Found ${carousels.length} carousels`);

  for (let i = 0; i < Math.min(carousels.length, 6); i++) {
    await carousels[i].scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000); // Wait for carousel animation
    await carousels[i].screenshot({ path: `${SCREENSHOT_DIR}/carousel-${i + 1}.png` });
    console.log(`Saved: carousel-${i + 1}.png`);
  }

  // Check a feature detail page too
  await page.goto(`${BASE_URL}/features/campaign-planner`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${SCREENSHOT_DIR}/detail-campaign-planner.png`, fullPage: false });
  console.log('Saved: detail-campaign-planner.png');

  await browser.close();
  console.log('\nDone! Check screenshots-verify/ directory');
}

main().catch(console.error);
