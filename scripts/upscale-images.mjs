#!/usr/bin/env node
/**
 * Upscale screenshots via Replicate's recraft-ai/recraft-crisp-upscale (4x).
 *
 * Why this model and not a "creative" upscaler: our inputs are product
 * screenshots full of small UI text. Magnific-style enhancers (clarity-upscaler)
 * invent detail, and invented detail in a screenshot means publishing words the
 * app never displayed. Crisp Upscale sharpens what is there. Verified 2026-08-12
 * on a 686x355 capture: glyphs came back correct, just sharp.
 *
 * ⚠️ Always eyeball the result at 1:1 before shipping. "It upscaled" is not
 * "the text is still right".
 *
 * Usage:
 *   node scripts/upscale-images.mjs <file> [file...]        # replace in place
 *   node scripts/upscale-images.mjs --max 2000 <file...>    # cap long edge
 *   node scripts/upscale-images.mjs --dry-run <file...>
 *
 * Originals are copied to <file>.orig before replacement. Delete those once
 * you have looked at the results.
 */
import { readFile, writeFile, copyFile, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import os from 'node:os';

const run = promisify(execFile);
const MODEL = 'recraft-ai/recraft-crisp-upscale';
const API = 'https://api.replicate.com/v1';

const argv = process.argv.slice(2);
const dryRun = argv.includes('--dry-run');
const maxIdx = argv.indexOf('--max');
const maxEdge = maxIdx !== -1 ? Number(argv[maxIdx + 1]) : 2000;
const files = argv.filter(
  (a, i) => !a.startsWith('--') && !(maxIdx !== -1 && i === maxIdx + 1),
);

if (files.length === 0) {
  console.error('Usage: node scripts/upscale-images.mjs [--max N] [--dry-run] <file...>');
  process.exit(1);
}

async function token() {
  const settings = JSON.parse(
    await readFile(path.join(os.homedir(), '.claude/settings.json'), 'utf8'),
  );
  const t = settings?.mcpServers?.replicate?.env?.REPLICATE_API_TOKEN;
  if (!t) throw new Error('REPLICATE_API_TOKEN not found in ~/.claude/settings.json');
  return t;
}

async function dims(file) {
  const { stdout } = await run('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', file]);
  const nums = stdout.match(/\d+/g)?.slice(-2).map(Number) ?? [];
  return { w: nums[0], h: nums[1] };
}

async function version(t) {
  const r = await fetch(`${API}/models/${MODEL}`, {
    headers: { Authorization: `Bearer ${t}` },
  });
  if (!r.ok) throw new Error(`model lookup failed: ${r.status}`);
  return (await r.json()).latest_version.id;
}

async function upscale(t, ver, file) {
  const mime = file.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg';
  const b64 = (await readFile(file)).toString('base64');

  const created = await fetch(`${API}/predictions`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${t}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ version: ver, input: { image: `data:${mime};base64,${b64}` } }),
  });
  if (!created.ok) throw new Error(`create failed: ${created.status} ${await created.text()}`);
  const { id } = await created.json();

  for (let i = 0; i < 60; i++) {
    await new Promise((r) => setTimeout(r, 4000));
    const res = await fetch(`${API}/predictions/${id}`, {
      headers: { Authorization: `Bearer ${t}` },
    });
    const body = await res.json();
    if (body.status === 'succeeded') return body.output;
    if (body.status === 'failed' || body.status === 'canceled') {
      throw new Error(`prediction ${body.status}: ${body.error}`);
    }
  }
  throw new Error('timed out after 4 minutes');
}

const t = await token();
const ver = await version(t);
console.log(`model ${MODEL}@${ver.slice(0, 12)}, max edge ${maxEdge}px\n`);

let ok = 0;
for (const file of files) {
  if (!existsSync(file)) {
    console.error(`SKIP  ${file} (not found)`);
    continue;
  }
  const before = await dims(file);
  process.stdout.write(`${path.basename(file)}  ${before.w}x${before.h} -> `);

  if (dryRun) {
    console.log('(dry run)');
    continue;
  }

  try {
    const url = await upscale(t, ver, file);
    const tmp = `${file}.upscaled.tmp`;
    await writeFile(tmp, Buffer.from(await (await fetch(url)).arrayBuffer()));

    // Replicate returns webp; normalise to the original container so nothing
    // downstream has to care, then cap the long edge.
    const ext = path.extname(file).slice(1).toLowerCase();
    await run('sips', ['-s', 'format', ext === 'jpg' ? 'jpeg' : ext, tmp, '--out', tmp]);
    await run('sips', ['-Z', String(maxEdge), tmp]);

    await copyFile(file, `${file}.orig`);
    await copyFile(tmp, file);
    await unlink(tmp);

    const after = await dims(file);
    console.log(`${after.w}x${after.h}  (original kept at ${path.basename(file)}.orig)`);
    ok++;
  } catch (err) {
    console.log(`FAILED\n      ${err.message}`);
  }
}

console.log(`\n${ok}/${files.length} upscaled. Inspect at 1:1 before committing.`);
