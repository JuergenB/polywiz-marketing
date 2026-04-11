import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = path.resolve(__dirname, '..', 'public', 'images', 'features', 'tone-voice-system-option-1.png');

const WIDTH = 960;
const HEIGHT = 600;

const dimensions = [
  { label: 'Wit', low: 'Straightforward', high: 'Sharp & ironic', value: 72 },
  { label: 'Warmth', low: 'Formal', high: 'Personal', value: 85 },
  { label: 'Opinion', low: 'Neutral', high: 'Strong positions', value: 55 },
  { label: 'Skepticism', low: 'Accepting', high: 'Questions everything', value: 40 },
  { label: 'Playfulness', low: 'Serious', high: 'Irreverent', value: 65 },
  { label: 'Urgency', low: 'Relaxed', high: 'Action-oriented', value: 30 },
  { label: 'Authority', low: 'Exploratory', high: 'Expert', value: 78 },
  { label: 'Intimacy', low: 'Institutional', high: 'First-person', value: 60 },
];

function sliderRow(d) {
  return `
    <div class="dim-row">
      <div class="dim-header">
        <span class="dim-label">${d.label}</span>
        <span class="dim-value">${Math.round(d.value / 10)}</span>
      </div>
      <div class="slider-track">
        <div class="slider-fill" style="width: ${d.value}%"></div>
        <div class="slider-thumb" style="left: ${d.value}%"></div>
      </div>
      <div class="dim-range">
        <span class="range-low">${d.low}</span>
        <span class="range-high">${d.high}</span>
      </div>
    </div>`;
}

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
    align-items: center;
    justify-content: center;
    padding: 24px 40px;
  }
  .card {
    background: #1a2d47;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px;
    padding: 28px 32px;
    width: 100%;
  }
  .card-title {
    color: #e0e0e0;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .dimensions {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .dim-row {}
  .dim-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }
  .dim-label {
    color: #e0e0e0;
    font-size: 13px;
    font-weight: 600;
  }
  .dim-value {
    color: rgba(255,255,255,0.5);
    font-size: 12px;
    font-weight: 500;
  }
  .slider-track {
    position: relative;
    height: 6px;
    background: rgba(255,255,255,0.08);
    border-radius: 3px;
  }
  .slider-fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    border-radius: 3px;
  }
  .slider-thumb {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  }
  .dim-range {
    display: flex;
    justify-content: space-between;
    margin-top: 2px;
  }
  .range-low, .range-high {
    color: rgba(255,255,255,0.35);
    font-size: 10px;
  }
</style>
</head>
<body>
<div class="card">
  <div class="card-title">Tone Dimensions</div>
  <div class="dimensions">
    ${dimensions.map(sliderRow).join('')}
  </div>
</div>
</body>
</html>`;

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT } });
  await page.setContent(HTML);
  await page.waitForTimeout(500);
  await page.screenshot({ path: OUTPUT, clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT } });
  console.log(`Saved to ${OUTPUT} (${WIDTH}x${HEIGHT})`);
  await browser.close();
}

main().catch(console.error);
