---
slug: mistral-ai
judul: Cara daftar & pakai Mistral AI (plan gratis Experiment)
updated: 2026-07-12
---

**Cocok untuk:** kamu yang mau model Eropa yang kuat untuk teks & kode (termasuk Codestral untuk coding), lewat plan gratis "Experiment" di La Plateforme.

## Cara daftar langkah demi langkah

1. Buka [console.mistral.ai](https://console.mistral.ai).
2. Klik **Sign up**, daftar dengan Google/email.
3. Aktifkan plan **Experiment** (gratis) saat diminta memilih plan.
4. **Perhatikan:** proses aktivasi biasanya meminta **verifikasi nomor HP**. Dukungan penuh untuk nomor +62 belum kami verifikasi — coba dan beri tahu kami hasilnya.

## Cara ambil API key

1. Di dashboard, buka menu **API Keys** ([console.mistral.ai/api-keys](https://console.mistral.ai/api-keys)).
2. Klik **Create new key**, beri nama.
3. Salin key dan simpan aman.

## Contoh kode

Mistral menyediakan endpoint **kompatibel OpenAI** di `api.mistral.ai/v1`.

### Python (SDK `openai`)

```python
# pip install openai
from openai import OpenAI

client = OpenAI(
    api_key="MISTRAL_API_KEY",  # ganti dengan key-mu
    base_url="https://api.mistral.ai/v1",
)

resp = client.chat.completions.create(
    model="mistral-small-latest",
    messages=[{"role": "user", "content": "Tulis fungsi Python untuk cek bilangan prima."}],
)
print(resp.choices[0].message.content)
```

### JavaScript (fetch)

```javascript
const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer MISTRAL_API_KEY", // ganti dengan key-mu
  },
  body: JSON.stringify({
    model: "mistral-small-latest",
    messages: [{ role: "user", content: "Tulis fungsi Python untuk cek bilangan prima." }],
  }),
});

const data = await res.json();
console.log(data.choices[0].message.content);
```

## Arti kuota gratis dalam bahasa awam

Plan "Experiment" memberi akses gratis dengan rate limit terbatas — cukup untuk riset, belajar, dan prototipe kecil. Bonus: **Codestral** bagus khusus untuk tugas ngoding (autocomplete, jelaskan kode).

## Jebakan umum

- **Butuh verifikasi nomor HP.** Ini kendala paling umum bagi pengguna Indonesia; siapkan nomor yang bisa menerima SMS.
- **Rate limit ketat di free tier.** Jangan kaget kalau kena `429` saat mencoba beruntun.
- **Cek ToS untuk komersial** — plan Experiment ditujukan untuk eksperimen.

## Link dokumentasi resmi

- [Quickstart](https://docs.mistral.ai/getting-started/quickstart/)
- [Batas free tier](https://help.mistral.ai/en/articles/225174-what-are-the-limits-of-the-free-tier)
