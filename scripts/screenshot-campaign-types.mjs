import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = path.resolve(__dirname, '..', 'public', 'images', 'features', 'campaign-planner-option-4.png');

// Target 16:10 aspect ratio to match the carousel container exactly
const WIDTH = 960;
const HEIGHT = 600;

const HTML = `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #132440;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 48px;
  }
  h3 {
    color: #e0e0e0;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 24px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
  }
  .type-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px 10px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.55);
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    line-height: 1.3;
  }
  .type-card.enabled {
    border-color: rgba(255,255,255,0.18);
    color: rgba(255,255,255,0.7);
  }
  .type-card.selected {
    border-color: #7c3aed;
    background: rgba(124,58,237,0.08);
    color: #a78bfa;
  }
  .type-card svg {
    width: 26px;
    height: 26px;
    stroke-width: 1.5;
  }
</style>
</head>
<body>
<h3>What are you promoting?</h3>
<div class="grid">
  <div class="type-card enabled selected">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8h20M8 4v4"/></svg>
    <span>Newsletter</span>
  </div>
  <div class="type-card enabled">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
    <span>Blog Post</span>
  </div>
  <div class="type-card enabled">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/></svg>
    <span>Exhibition</span>
  </div>
  <div class="type-card enabled">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    <span>Artist Profile</span>
  </div>
  <div class="type-card enabled">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
    <span>Podcast<br>Episode</span>
  </div>
  <div class="type-card enabled">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
    <span>Event</span>
  </div>
  <div class="type-card">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M1 8l7-5 7 5M8 3v18"/><path d="M23 8l-7-5"/><path d="M16 3v18"/></svg>
    <span>Open Call</span>
  </div>
  <div class="type-card">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 4v14"/></svg>
    <span>Public Art</span>
  </div>
  <div class="type-card">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/><line x1="17" y1="17" x2="22" y2="17"/></svg>
    <span>Video/Film</span>
  </div>
  <div class="type-card">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>
    <span>Institutional</span>
  </div>
  <div class="type-card">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 3z"/><path d="M17 4a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2"/><path d="M22 8a1 1 0 0 0 1 1 1 1 0 0 0-1 1 1 1 0 0 0-1-1 1 1 0 0 0 1-1"/></svg>
    <span>Custom</span>
  </div>
</div>
</body>
</html>`;

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT } });

  await page.setContent(HTML);
  await page.waitForTimeout(500);

  // Screenshot the full page at exact dimensions
  await page.screenshot({ path: OUTPUT, clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT } });

  console.log(`Saved to ${OUTPUT} (${WIDTH}x${HEIGHT})`);
  await browser.close();
}

main().catch(console.error);
