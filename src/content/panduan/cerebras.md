---
slug: cerebras
judul: Cara daftar & pakai Cerebras Inference gratis
updated: 2026-07-12
---

**Cocok untuk:** kamu yang ingin merasakan inference **tercepat di kelasnya** (chip wafer-scale) untuk model Llama, gratis untuk eksplorasi developer.

## Cara daftar langkah demi langkah

1. Buka [cloud.cerebras.ai](https://cloud.cerebras.ai).
2. Klik **Sign up** dan daftar dengan Google atau email.
3. Verifikasi email bila diminta.
4. Masuk ke dashboard Cerebras Cloud.

## Cara ambil API key

1. Di dashboard, buka menu **API Keys**.
2. Klik **Generate API Key** (atau **Create Key**), beri nama.
3. Salin key dan simpan aman.

## Contoh kode

Cerebras **kompatibel OpenAI**.

### Python (SDK `openai`)

```python
# pip install openai
from openai import OpenAI

client = OpenAI(
    api_key="CEREBRAS_API_KEY",  # ganti dengan key-mu
    base_url="https://api.cerebras.ai/v1",
)

resp = client.chat.completions.create(
    model="gpt-oss-120b",
    messages=[{"role": "user", "content": "Buat pantun tentang belajar coding."}],
)
print(resp.choices[0].message.content)
```

### JavaScript (fetch)

```javascript
const res = await fetch("https://api.cerebras.ai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer CEREBRAS_API_KEY", // ganti dengan key-mu
  },
  body: JSON.stringify({
    model: "gpt-oss-120b",
    messages: [{ role: "user", content: "Buat pantun tentang belajar coding." }],
  }),
});

const data = await res.json();
console.log(data.choices[0].message.content);
```

## Arti kuota gratis dalam bahasa awam

Free tier membatasi request dan token per menit/hari. Kuotanya pas untuk demo dan prototipe. Nilai jualnya: token dihasilkan sangat cepat, enak untuk fitur yang butuh respons kilat.

## Jebakan umum

- **Model cepat berganti.** `llama-3.3-70b` sudah tidak tersedia — panduan ini memakai `gpt-oss-120b`. Kalau error "model not found", cek daftar model terbaru di dokumentasi.
- **Konteks dibatasi ~8.192 token** di free tier — hati-hati dengan prompt panjang.
- **Rate limit ketat (~5 request/menit).** Tambahkan jeda/backoff antar-request.
- **Free tier untuk eksplorasi.** Bukan untuk beban produksi; izin komersial free tier belum jelas, cek Terms of Service.

## Link dokumentasi resmi

- [Introduction / Quickstart](https://inference-docs.cerebras.ai/introduction)
- [Rate limits](https://inference-docs.cerebras.ai/support/rate-limits)
