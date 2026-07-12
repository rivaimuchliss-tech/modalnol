# modalnol.id

Direktori + panduan onboarding **API AI gratis** untuk developer Indonesia. Dari nol sampai berhasil memanggil API AI gratis pertamamu.

Dibangun dengan **Astro** (output statis murni) + **Tailwind CSS v4**. Target biaya bulanan: **Rp0** (Cloudflare Pages + GitHub Actions).

## Menjalankan lokal

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output statis ke dist/
npm run preview  # pratinjau hasil build
```

## Struktur penting

| Path | Isi |
|---|---|
| `src/data/providers.json` | **Sumber kebenaran** data provider. Edit di sini. |
| `src/data/status.json` | Hasil health check (di-update otomatis GitHub Actions). |
| `src/content/panduan/*.md` | Panduan onboarding per provider. |
| `src/components/` | ProviderCard, FilterBar, StatusBadge, IndoBadges, CodeTabs. |
| `src/pages/` | Landing (`index`), detail (`provider/[slug]`), `banding`, `tentang`. |
| `scripts/healthcheck.mjs` | Health check harian. |
| `.github/workflows/healthcheck.yml` | Cron 05.00 WIB. |

## Health check

```bash
npm run healthcheck   # sapa endpointCek tiap provider, tulis src/data/status.json
```

Status: `up` (2xx/3xx/401/403), `down` (timeout/5xx), `unknown` (tanpa `endpointCek`).

## Menambah / mengubah provider

1. Tambah objek baru di `src/data/providers.json` (ikuti skema yang ada).
2. Buat panduan di `src/content/panduan/{slug}.md` (frontmatter: `slug`, `judul`, `updated`).
3. Isi `konteksIndonesia` yang **belum diverifikasi** dengan `null` — UI menampilkan "belum diverifikasi". Jangan mengarang data.
4. Sertakan link `sumberData` resmi + `terakhirDiverifikasiManual`.

## Prinsip

modalnol.id adalah **direktori & edukasi**, **BUKAN proxy API**. Rate limit free tier berubah cepat — tiap klaim menautkan dokumentasi resmi + tanggal verifikasi.

## Deploy

Cloudflare Pages, build command `npm run build`, output directory `dist`. Deploy otomatis tiap push ke `main`.

## Catatan teknis

- Tailwind **v4** (CSS-first, tanpa `tailwind.config.js`) via `@tailwindcss/vite`. Tema aksen ada di `src/styles/global.css`.
- Dark mode mengikuti preferensi sistem (default `prefers-color-scheme` Tailwind v4).
- OG image berupa SVG (`public/og-image.svg`). Bila butuh kompatibilitas sosial maksimal, ganti dengan PNG 1200×630 dan sesuaikan `ogImage` default di `src/layouts/Base.astro`.
