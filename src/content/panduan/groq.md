---
slug: groq
judul: Cara daftar & pakai Groq API gratis
updated: 2026-07-12
---

**Cocok untuk:** kamu yang butuh respons AI **super cepat** (Groq pakai chip LPU khusus) untuk chatbot atau demo, gratis dan tanpa kartu kredit.

## Cara daftar langkah demi langkah

1. Buka [console.groq.com](https://console.groq.com).
2. Klik **Sign up**, lalu pilih login dengan **Google** atau **email**.
3. Verifikasi email bila diminta.
4. Selesai — kamu langsung masuk ke Groq Console. Tidak perlu kartu kredit.

## Cara ambil API key

1. Di dashboard, buka menu **API Keys** di sidebar kiri.
2. Klik **Create API Key**.
3. Beri nama (mis. `belajar`), lalu **Submit**.
4. Salin key — hanya ditampilkan sekali, simpan aman-aman.

## Contoh kode

Groq **kompatibel OpenAI**, tinggal ganti `base_url`.

### Python (SDK `openai`)

```python
# pip install openai
from openai import OpenAI

client = OpenAI(
    api_key="GROQ_API_KEY",  # ganti dengan API key-mu
    base_url="https://api.groq.com/openai/v1",
)

resp = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "Beri 3 ide nama startup kopi kekinian."}],
)
print(resp.choices[0].message.content)
```

### JavaScript (fetch)

```javascript
const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer GROQ_API_KEY", // ganti dengan API key-mu
  },
  body: JSON.stringify({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: "Beri 3 ide nama startup kopi kekinian." }],
  }),
});

const data = await res.json();
console.log(data.choices[0].message.content);
```

## Arti kuota gratis dalam bahasa awam

Free tier Groq membatasi jumlah request per menit dan per hari (berbeda tiap model). Untuk chatbot personal atau prototipe skala kecil, kuotanya nyaman. Yang bikin istimewa: jawabannya keluar sangat cepat, cocok buat pengalaman "ketik-langsung-balas".

## Jebakan umum

- **Rate limit per model.** Model besar (70B) punya kuota lebih ketat dari model kecil (8B). Cek halaman **Limits** di dashboard untuk angka akunmu.
- **Nama model berubah.** Groq kadang men-deprecate model lama. Kalau error, cek daftar model terbaru di dokumentasi.
- **Bukan untuk beban produksi besar** tanpa upgrade — free tier ditujukan untuk eksplorasi.

## Link dokumentasi resmi

- [Quickstart](https://console.groq.com/docs/quickstart)
- [Rate limits](https://console.groq.com/docs/rate-limits)
- [Daftar model](https://console.groq.com/docs/models)
