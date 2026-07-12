#!/usr/bin/env node
// Health check harian: sapa endpointCek tiap provider, tulis hasil ke src/data/status.json.
// Dijalankan lokal (`node scripts/healthcheck.mjs`) atau via GitHub Actions (cron harian).
//
// Aturan status:
//   up      -> 2xx / 3xx / 401 / 403  (server hidup; auth-gated tetap dianggap hidup)
//   down    -> timeout / 5xx / gagal koneksi
//   unknown -> tidak ada endpointCek

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const PROVIDERS_PATH = resolve(ROOT, 'src/data/providers.json');
const STATUS_PATH = resolve(ROOT, 'src/data/status.json');

const TIMEOUT_MS = 10_000;
const JEDA_MS = 1500; // jeda antar provider agar tidak agresif

function tidur(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function cek(endpoint) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(endpoint, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'User-Agent': 'modalnol-healthcheck/1.0 (+https://modalnol.id)' },
    });
    const s = res.status;
    if (s === 401 || s === 403) return 'up'; // auth-gated = hidup
    if (s >= 200 && s < 400) return 'up';
    if (s >= 500) return 'down';
    // 4xx lain (400/404/429): server tetap merespons -> anggap hidup.
    return 'up';
  } catch (err) {
    // Abort (timeout) atau kegagalan jaringan.
    return 'down';
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  const providers = JSON.parse(await readFile(PROVIDERS_PATH, 'utf8'));
  const results = {};

  for (const p of providers) {
    if (!p.endpointCek) {
      results[p.slug] = 'unknown';
      console.log(`- ${p.slug.padEnd(24)} unknown (tanpa endpointCek)`);
      continue;
    }
    const status = await cek(p.endpointCek);
    results[p.slug] = status;
    console.log(`- ${p.slug.padEnd(24)} ${status}`);
    await tidur(JEDA_MS);
  }

  const out = {
    generatedAt: new Date().toISOString(),
    results,
  };
  await writeFile(STATUS_PATH, JSON.stringify(out, null, 2) + '\n', 'utf8');
  console.log(`\n✓ Ditulis ke ${STATUS_PATH}`);
}

main().catch((err) => {
  console.error('Health check gagal:', err);
  process.exit(1);
});
