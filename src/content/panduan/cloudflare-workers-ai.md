---
slug: cloudflare-workers-ai
judul: Cara daftar & pakai Cloudflare Workers AI gratis
updated: 2026-07-12
---

**Cocok untuk:** kamu yang sudah/akan pakai Cloudflare untuk hosting dan ingin menambah fitur AI kecil (teks, gambar, embedding) dengan alokasi gratis harian.

## Cara daftar langkah demi langkah

1. Buka [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up).
2. Daftar dengan email + password. Verifikasi email. Tidak perlu kartu kredit untuk mulai.
3. Masuk ke dashboard Cloudflare.
4. Catat **Account ID** kamu — ada di sidebar/URL dashboard atau di halaman **Workers & Pages** → **Overview**.

## Cara ambil API token

1. Klik ikon profil kanan atas → **My Profile** → **API Tokens**.
2. Klik **Create Token**.
3. Gunakan template **Workers AI** (atau custom token dengan permission `Workers AI: Read/Edit`).
4. **Continue to summary** → **Create Token**, lalu salin token.

## Contoh kode

Workers AI menyediakan endpoint **kompatibel OpenAI**. Perhatikan URL memuat `ACCOUNT_ID`-mu.

### Python (SDK `openai`)

```python
# pip install openai
from openai import OpenAI

ACCOUNT_ID = "ACCOUNT_ID_KAMU"

client = OpenAI(
    api_key="CLOUDFLARE_API_TOKEN",  # ganti dengan token-mu
    base_url=f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/v1",
)

resp = client.chat.completions.create(
    model="@cf/meta/llama-3.1-8b-instruct",
    messages=[{"role": "user", "content": "Apa itu edge computing? Jawab singkat."}],
)
print(resp.choices[0].message.content)
```

### JavaScript (fetch)

```javascript
const ACCOUNT_ID = "ACCOUNT_ID_KAMU";

const res = await fetch(
  `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/v1/chat/completions`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer CLOUDFLARE_API_TOKEN", // ganti dengan token-mu
    },
    body: JSON.stringify({
      model: "@cf/meta/llama-3.1-8b-instruct",
      messages: [{ role: "user", content: "Apa itu edge computing? Jawab singkat." }],
    }),
  },
);

const data = await res.json();
console.log(data.choices[0].message.content);
```

## Arti kuota gratis dalam bahasa awam

Cloudflare memberi alokasi gratis harian berbasis unit kompute bernama **Neurons**. Untuk fitur AI ringan di dalam web/app (mis. rangkuman singkat, klasifikasi), alokasinya cukup untuk trafik kecil. Kalau habis, kelebihannya berbayar.

## Jebakan umum

- **Butuh Account ID + Token**, bukan cuma satu API key. Salah satu kurang → error auth.
- **Nama model diawali `@cf/...`.** Beda format dari provider lain; salin persis dari katalog model.
- **Alokasi harian bisa habis** kalau dipakai ramai — pantau penggunaan di dashboard.

## Link dokumentasi resmi

- [Get started (REST API)](https://developers.cloudflare.com/workers-ai/get-started/rest-api/)
- [Kompatibilitas OpenAI](https://developers.cloudflare.com/workers-ai/configuration/open-ai-compatibility/)
- [Pricing / alokasi gratis](https://developers.cloudflare.com/workers-ai/platform/pricing/)
