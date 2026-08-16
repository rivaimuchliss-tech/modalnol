---
slug: ai-router
judul: Cara daftar dan pakai AI-ROUTER (bonus pendaftaran)
updated: 2026-07-22
---

**Cocok untuk:** developer yang ingin mencoba API yang kompatibel dengan OpenAI, memakai API key sendiri, dan memeriksa reward akun baru dengan ketentuan yang jelas.

AI-ROUTER dioperasikan secara independen dan tidak berafiliasi dengan OpenAI.

## Cara daftar langkah demi langkah

1. Buka [AI-ROUTER Indonesia](https://ai-router.dev/id/).
2. Buat akun dan selesaikan verifikasi yang diminta di dashboard.
3. Buat API key baru di dashboard.
4. Cek saldo, status reward, dan tombol check-in sebelum mulai mengirim request.

Untuk akun baru biasa yang memenuhi syarat, dokumentasi publik menyebut bonus tersedia **5U** setelah pendaftaran. Ada tambahan **15U** bonus beku yang dilepas bertahap berdasarkan penggunaan API nyata. Akun yang dinilai berisiko tinggi dapat memperoleh bonus pendaftaran berbeda.

## Endpoint dan API key

Gunakan base URL berikut untuk client yang memakai format OpenAI:

```text
https://api.ai-router.dev/v1
```

Pilih ID model yang sedang tersedia di dashboard atau katalog akunmu. Jangan menyalin ID model dari contoh lama tanpa mengecek ketersediaannya terlebih dahulu.

### Python (SDK `openai`)

```python
# pip install openai
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["AI_ROUTER_API_KEY"],
    base_url="https://api.ai-router.dev/v1",
)

response = client.chat.completions.create(
    model="MODEL_YANG_TERSEDIA_DI_DASHBOARD",
    messages=[
        {"role": "user", "content": "Jelaskan perbedaan REST dan GraphQL secara singkat."}
    ],
)

print(response.choices[0].message.content)
```

### JavaScript (SDK `openai`)

```javascript
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.AI_ROUTER_API_KEY,
  baseURL: "https://api.ai-router.dev/v1",
});

const response = await client.chat.completions.create({
  model: "MODEL_YANG_TERSEDIA_DI_DASHBOARD",
  messages: [
    { role: "user", content: "Berikan tiga ide fitur untuk aplikasi catatan." },
  ],
});

console.log(response.choices[0].message.content);
```

## Reward check-in harian

Reward check-in yang dipublikasikan adalah **$1 + 2% dari total penggunaan hari sebelumnya**, dengan batas maksimum **$10** per check-in. Nominal yang terlihat di dashboard dan kelayakan akun tetap mengikuti ketentuan reward resmi.

## Jebakan umum

- **Bonus beku bukan kredit instan.** Bonus 15U dilepas secara bertahap setelah penggunaan API nyata.
- **Jangan menaruh API key di frontend atau repositori.** Simpan sebagai environment variable atau secret di server.
- **Jangan menganggap bonus sebagai kuota gratis permanen.** Periksa saldo, syarat akun, dan perubahan ketentuan di dashboard.
- **Ketersediaan model berubah.** Cek daftar model di akunmu sebelum deployment atau saat request mengembalikan error model.

## Link resmi

- [AI-ROUTER Indonesia](https://ai-router.dev/id/)
- [Gateway API kompatibel OpenAI](https://ai-router.dev/id/openai-compatible-api-gateway/)
- [Aturan bonus dan dividen](https://ai-router.dev/id/docs/billing-quota/rewards-and-affiliate-commissions/)
