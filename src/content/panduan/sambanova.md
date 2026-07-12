---
slug: sambanova
judul: Cara daftar & pakai SambaNova Cloud gratis
updated: 2026-07-12
---

**Cocok untuk:** kamu yang ingin mencicipi model open-source besar (Llama 3.3 70B, DeepSeek V3.1, GPT-OSS 120B) dengan inference cepat, gratis untuk developer.

## Cara daftar langkah demi langkah

1. Buka [cloud.sambanova.ai](https://cloud.sambanova.ai).
2. Klik **Sign up**, daftar dengan Google atau email.
3. Verifikasi email bila diminta, lalu masuk ke dashboard.

## Cara ambil API key

1. Di dashboard, buka menu **API Keys** (atau **APIs**).
2. Klik **Generate New Key**, beri nama.
3. Salin key dan simpan aman.

## Contoh kode

SambaNova **kompatibel OpenAI** di `api.sambanova.ai/v1`.

### Python (SDK `openai`)

```python
# pip install openai
from openai import OpenAI

client = OpenAI(
    api_key="SAMBANOVA_API_KEY",  # ganti dengan key-mu
    base_url="https://api.sambanova.ai/v1",
)

resp = client.chat.completions.create(
    model="Meta-Llama-3.3-70B-Instruct",
    messages=[{"role": "user", "content": "Buat outline artikel blog tentang AI di Indonesia."}],
)
print(resp.choices[0].message.content)
```

### JavaScript (fetch)

```javascript
const res = await fetch("https://api.sambanova.ai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer SAMBANOVA_API_KEY", // ganti dengan key-mu
  },
  body: JSON.stringify({
    model: "Meta-Llama-3.3-70B-Instruct",
    messages: [{ role: "user", content: "Buat outline artikel blog tentang AI di Indonesia." }],
  }),
});

const data = await res.json();
console.log(data.choices[0].message.content);
```

## Arti kuota gratis dalam bahasa awam

Free tier memberi sekitar **20 request per HARI** dan 200.000 token/hari per model — ketat, tapi cukup untuk testing dan demo kecil. Ada juga kredit awal US$5 yang kedaluwarsa dalam 30 hari. Daya tariknya: inference-nya sangat cepat.

## Jebakan umum

- **Batas 20 request/HARI** di free tier (bukan per menit) — habis cepat, tidak cocok produksi.
- **Llama 3.1 405B sudah tidak ditawarkan.** Kalau menemukan tutorial lama yang memakainya, ganti dengan model yang tersedia sekarang.
- **Nama model spesifik**, mis. `Meta-Llama-3.3-70B-Instruct` — salin persis dari dokumentasi.
- **Izin komersial free tier tidak ditegaskan** di EULA — cek bila untuk keperluan serius.

## Link dokumentasi resmi

- [Get started](https://docs.sambanova.ai/cloud/docs/get-started/overview)
- [Rate limits](https://docs.sambanova.ai/cloud/docs/get-started/rate-limits)
