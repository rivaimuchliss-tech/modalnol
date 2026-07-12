---
slug: google-ai-studio
judul: Cara daftar & pakai Google AI Studio (Gemini) gratis
updated: 2026-07-12
---

**Cocok untuk:** kamu yang mau API AI gratis paling gampang dimulai — cukup akun Google, tanpa kartu kredit, model Gemini yang serba bisa (teks, kode, gambar, audio).

## Cara daftar langkah demi langkah

1. Buka [aistudio.google.com](https://aistudio.google.com) di browser.
2. Klik **Sign in** dan login dengan akun Google-mu (akun Gmail biasa sudah cukup).
3. Setujui Terms of Service saat diminta.
4. Kamu langsung masuk ke Google AI Studio — tidak perlu isi kartu kredit untuk tier gratis.

## Cara ambil API key

1. Klik menu **Get API key** (atau langsung ke [aistudio.google.com/apikey](https://aistudio.google.com/apikey)).
2. Klik tombol **Create API key**.
3. Pilih **Create API key in new project** (biar rapi).
4. Salin key yang muncul — simpan baik-baik, jangan tempel di kode publik.

## Contoh kode

Gemini punya endpoint yang **kompatibel dengan OpenAI**, jadi kamu bisa pakai SDK `openai` yang populer.

### Python (SDK `openai`)

```python
# pip install openai
from openai import OpenAI

client = OpenAI(
    api_key="GEMINI_API_KEY",  # ganti dengan API key-mu
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
)

resp = client.chat.completions.create(
    model="gemini-2.5-flash",
    messages=[{"role": "user", "content": "Jelaskan apa itu API dalam 2 kalimat."}],
)
print(resp.choices[0].message.content)
```

### JavaScript (fetch)

```javascript
// Berjalan di Node.js 18+ atau browser (hati-hati mengekspos key di browser)
const res = await fetch(
  "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer GEMINI_API_KEY", // ganti dengan API key-mu
    },
    body: JSON.stringify({
      model: "gemini-2.5-flash",
      messages: [{ role: "user", content: "Jelaskan apa itu API dalam 2 kalimat." }],
    }),
  },
);

const data = await res.json();
console.log(data.choices[0].message.content);
```

## Arti kuota gratis dalam bahasa awam

Tier gratis Gemini punya batas per menit dan per hari yang berbeda tiap model. Untuk belajar, membuat chatbot personal, atau prototipe, kuotanya lebih dari cukup — kamu bisa ratusan kali bertanya per hari tanpa bayar.

## Jebakan umum

- **Data prompt bisa dipakai Google.** Pada tier gratis, konten yang kamu kirim dapat dipakai Google untuk meningkatkan produk mereka. Jangan kirim data rahasia/pribadi pelanggan.
- **Limit per menit (RPM).** Kalau tiba-tiba error `429`, kamu kena rate limit — beri jeda antar-request.
- **Model cepat berganti.** Nama model (mis. `gemini-2.5-flash`) sesekali berubah; cek daftar model resmi bila error "model not found".

## Link dokumentasi resmi

- [Rate limits](https://ai.google.dev/gemini-api/docs/rate-limits)
- [Kompatibilitas OpenAI](https://ai.google.dev/gemini-api/docs/openai)
- [Harga & tier gratis](https://ai.google.dev/gemini-api/docs/pricing)
