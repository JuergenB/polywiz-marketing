/**
 * Generate a hub-and-spoke platform distribution diagram
 * with platform icons in colored circles radiating from a central hub.
 * Output: transparent PNG suitable for dark backgrounds.
 */

const sharp = require('sharp');
const path = require('path');

// Platform definitions with brand colors and 2-letter abbreviations
const PLATFORMS = [
  { name: 'Instagram', abbr: 'IG', color: '#E4405F' },
  { name: 'LinkedIn', abbr: 'LI', color: '#0A66C2' },
  { name: 'X / Twitter', abbr: 'X', color: '#AAAAAA' },
  { name: 'Bluesky', abbr: 'BS', color: '#0085FF' },
  { name: 'TikTok', abbr: 'TT', color: '#FF0050' },
  { name: 'Facebook', abbr: 'FB', color: '#0866FF' },
  { name: 'Threads', abbr: 'TH', color: '#CCCCCC' },
  { name: 'YouTube', abbr: 'YT', color: '#FF0000' },
  { name: 'Pinterest', abbr: 'PI', color: '#E60023' },
  { name: 'Snapchat', abbr: 'SC', color: '#FFFC00' },
  { name: 'Google Biz', abbr: 'GB', color: '#4285F4' },
  { name: 'Reddit', abbr: 'RE', color: '#FF4500' },
  { name: 'Telegram', abbr: 'TG', color: '#26A5E4' },
];

const WIDTH = 2400;
const HEIGHT = 2000;
const CX = WIDTH / 2;
const CY = HEIGHT / 2;
const HUB_R = 70;
const ICON_R = 48;
const ORBIT_R = 650;

function generateSVG() {
  const count = PLATFORMS.length;
  let arrows = '';
  let nodes = '';

  PLATFORMS.forEach((platform, i) => {
    const angle = (2 * Math.PI * i) / count - Math.PI / 2;
    const px = CX + ORBIT_R * Math.cos(angle);
    const py = CY + ORBIT_R * Math.sin(angle);

    // Arrow line from hub to near the circle
    const startR = HUB_R + 20;
    const endR = ORBIT_R - ICON_R - 20;
    const x1 = CX + startR * Math.cos(angle);
    const y1 = CY + startR * Math.sin(angle);
    const x2 = CX + endR * Math.cos(angle);
    const y2 = CY + endR * Math.sin(angle);

    // Arrowhead
    const hl = 20;
    const ha = 0.35;
    const hx1 = x2 - hl * Math.cos(angle - ha);
    const hy1 = y2 - hl * Math.sin(angle - ha);
    const hx2 = x2 - hl * Math.cos(angle + ha);
    const hy2 = y2 - hl * Math.sin(angle + ha);

    arrows += `
      <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
            stroke="${platform.color}" stroke-width="3" stroke-opacity="0.5"/>
      <polygon points="${x2},${y2} ${hx1},${hy1} ${hx2},${hy2}"
               fill="${platform.color}" fill-opacity="0.7"/>
    `;

    // Circle with abbreviation
    nodes += `
      <circle cx="${px}" cy="${py}" r="${ICON_R}" fill="${platform.color}" fill-opacity="0.15"
              stroke="${platform.color}" stroke-width="2.5" stroke-opacity="0.7"/>
      <text x="${px}" y="${py + 10}" text-anchor="middle"
            fill="${platform.color}" font-family="Inter, Arial, sans-serif"
            font-size="30" font-weight="700" letter-spacing="1">${platform.abbr}</text>
      <text x="${px}" y="${py + ICON_R + 30}" text-anchor="middle"
            fill="white" font-family="Inter, Arial, sans-serif"
            font-size="22" font-weight="400" opacity="0.75">${platform.name}</text>
    `;
  });

  // Central hub with concentric rings
  const hub = `
    <circle cx="${CX}" cy="${CY}" r="${HUB_R + 10}" fill="none" stroke="white" stroke-width="1" stroke-opacity="0.15"/>
    <circle cx="${CX}" cy="${CY}" r="${HUB_R}" fill="rgba(224,122,95,0.1)"
            stroke="#E07A5F" stroke-width="3" stroke-opacity="0.6"/>
    <circle cx="${CX}" cy="${CY}" r="${HUB_R - 20}" fill="none" stroke="#E07A5F" stroke-width="1" stroke-opacity="0.3"/>
    <text x="${CX}" y="${CY - 8}" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700" opacity="0.9">YOUR</text>
    <text x="${CX}" y="${CY + 18}" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700" opacity="0.9">CAMPAIGN</text>
  `;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#E07A5F" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#E07A5F" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="${CX}" cy="${CY}" r="400" fill="url(#glow)"/>
    ${arrows}
    ${hub}
    ${nodes}
  </svg>`;
}

async function main() {
  const svg = generateSVG();
  const outPath = path.join(__dirname, '..', 'public', 'images', 'features', 'campaign-planner-option-2.png');

  await sharp(Buffer.from(svg))
    .png()
    .toFile(outPath);

  // Trim transparent edges
  const trimmed = await sharp(outPath)
    .trim()
    .toBuffer();
  await sharp(trimmed).toFile(outPath);

  const meta = await sharp(outPath).metadata();
  console.log(`Generated: ${meta.width}x${meta.height} PNG`);
}

main().catch(console.error);
