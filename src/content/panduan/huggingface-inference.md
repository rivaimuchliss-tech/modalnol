---
slug: huggingface-inference
judul: Cara daftar & pakai Hugging Face Inference gratis
updated: 2026-07-12
---

**Cocok untuk:** kamu yang mau menjajal ribuan model open-source (termasuk yang jarang ada di tempat lain) lewat satu router inference, dengan kuota kredit gratis bulanan.

## Cara daftar langkah demi langkah

1. Buka [huggingface.co/join](https://huggingface.co/join).
2. Daftar dengan email + password (gratis). Verifikasi email.
3. Login ke akunmu.

## Cara ambil Access Token

1. Buka [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens).
2. Klik **Create new token** → pilih tipe **Read** (cukup untuk inference).
3. Beri nama, klik **Create token**, lalu salin (diawali `hf_...`).

## Contoh kode

Hugging Face menyediakan router **kompatibel OpenAI** di `router.huggingface.co/v1`.

### Python (SDK `openai`)

```python
# pip install openai
from openai import OpenAI

client = OpenAI(
    api_key="HF_TOKEN",  # ganti dengan token-mu (hf_...)
    base_url="https://router.huggingface.co/v1",
)

resp = client.chat.completions.create(
    model="openai/gpt-oss-120b",
    messages=[{"role": "user", "content": "Jelaskan open-source AI ke anak SMA."}],
)
print(resp.choices[0].message.content)
```

### JavaScript (fetch)

```javascript
const res = await fetch("https://router.huggingface.co/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer HF_TOKEN", // ganti dengan token-mu
  },
  body: JSON.stringify({
    model: "openai/gpt-oss-120b",
    messages: [{ role: "user", content: "Jelaskan open-source AI ke anak SMA." }],
  }),
});

const data = await res.json();
console.log(data.choices[0].message.content);
```

## Arti kuota gratis dalam bahasa awam

Akun gratis dapat sekitar **US$0,10 kredit inference per bulan** (bisa berubah) — jumlahnya kecil, cukup untuk beberapa kali request percobaan. Kalau kredit habis, kamu perlu beli kredit tambahan. Kelebihan utama: variasi model open-source terluas di antara semua provider di daftar ini.

## Jebakan umum

- **Kuota gratis sangat kecil (±US$0,10/bulan).** Untuk pemakaian rutin, cepat habis.
- **Endpoint `/v1` OpenAI-compatible hanya untuk chat.** Untuk gambar/embedding, pakai `InferenceClient` dari library `huggingface_hub`.
- **Beberapa model butuh akses.** Model "gated" mengharuskan kamu menyetujui lisensi di halaman model dulu.
- **Ketersediaan model bervariasi** antar provider inference di balik router; kalau satu model tak tersedia, coba yang lain.

## Link dokumentasi resmi

- [Inference Providers](https://huggingface.co/docs/inference-providers/index)
- [Pricing & kuota](https://huggingface.co/docs/inference-providers/pricing)
