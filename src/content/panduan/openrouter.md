---
slug: openrouter
judul: Cara daftar & pakai OpenRouter (model gratis) 
updated: 2026-07-12
---

**Cocok untuk:** kamu yang mau mencoba **banyak model** dari berbagai provider dengan satu API key, termasuk sejumlah model berlabel `:free`.

## Cara daftar langkah demi langkah

1. Buka [openrouter.ai](https://openrouter.ai).
2. Klik **Sign in**, login dengan Google, GitHub, atau email.
3. Setujui persyaratan.
4. Untuk model gratis, kamu tidak perlu mengisi kredit sama sekali.

## Cara ambil API key

1. Klik foto profil di kanan atas → **Keys** (atau ke [openrouter.ai/keys](https://openrouter.ai/keys)).
2. Klik **Create Key**, beri nama.
3. Salin key (dimulai dengan `sk-or-...`).

## Cara menemukan model gratis

Buka [openrouter.ai/models?max_price=0](https://openrouter.ai/models?max_price=0). Semua model di sana punya suffix `:free` pada ID-nya. Contoh di bawah memakai salah satunya — daftar model gratis sering berganti, jadi pastikan ID-nya masih ada.

## Contoh kode

OpenRouter **kompatibel OpenAI**.

### Python (SDK `openai`)

```python
# pip install openai
from openai import OpenAI

client = OpenAI(
    api_key="OPENROUTER_API_KEY",  # ganti dengan key-mu (sk-or-...)
    base_url="https://openrouter.ai/api/v1",
)

resp = client.chat.completions.create(
    model="deepseek/deepseek-chat-v3-0324:free",  # cek daftar model :free terbaru
    messages=[{"role": "user", "content": "Ringkas manfaat energi surya dalam 3 poin."}],
)
print(resp.choices[0].message.content)
```

### JavaScript (fetch)

```javascript
const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer OPENROUTER_API_KEY", // ganti dengan key-mu
  },
  body: JSON.stringify({
    model: "deepseek/deepseek-chat-v3-0324:free", // cek daftar model :free terbaru
    messages: [{ role: "user", content: "Ringkas manfaat energi surya dalam 3 poin." }],
  }),
});

const data = await res.json();
console.log(data.choices[0].message.content);
```

## Arti kuota gratis dalam bahasa awam

Model `:free` bisa dipakai tanpa bayar, tapi ada batas jumlah request harian. Batas harian ini biasanya lebih longgar kalau kamu pernah mengisi kredit sedikit. Untuk belajar dan membandingkan kualitas model, ini surganya.

## Jebakan umum

- **Model gratis bisa hilang/berganti.** Ketersediaan model `:free` berubah-ubah mengikuti sponsor. Selalu cek halaman model bila error.
- **Antrean/latency.** Model gratis kadang lebih lambat atau antre saat ramai.
- **Header opsional untuk peringkat.** Kamu bisa menambah header `HTTP-Referer` dan `X-Title` agar app-mu tampil di leaderboard OpenRouter (opsional).

## Link dokumentasi resmi

- [Quickstart](https://openrouter.ai/docs/quickstart)
- [Rate limits & kredit](https://openrouter.ai/docs/api-reference/limits)
- [Daftar model gratis](https://openrouter.ai/models?max_price=0)
