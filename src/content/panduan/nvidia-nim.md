---
slug: nvidia-nim
judul: Cara daftar & pakai NVIDIA NIM gratis
updated: 2026-07-12
---

**Cocok untuk:** kamu yang ingin menjajal banyak model open-source kelas atas (Llama, DeepSeek, Nemotron) lewat endpoint resmi NVIDIA, dengan kredit gratis untuk developer.

## Cara daftar langkah demi langkah

1. Buka [build.nvidia.com](https://build.nvidia.com).
2. Klik **Login/Sign up** dan buat akun NVIDIA (bisa dengan email).
3. Verifikasi email. Lengkapi profil developer bila diminta.
4. Jelajahi katalog model — tiap model punya halaman demo dan contoh kode.

## Cara ambil API key

1. Pilih salah satu model di katalog, mis. **Llama 3.3 70B**.
2. Di panel kanan, klik **Get API Key** (atau **Generate API Key**).
3. Salin key (biasanya diawali `nvapi-...`).

## Contoh kode

NIM menyediakan endpoint **kompatibel OpenAI** di `integrate.api.nvidia.com`.

### Python (SDK `openai`)

```python
# pip install openai
from openai import OpenAI

client = OpenAI(
    api_key="NVIDIA_API_KEY",  # ganti dengan key-mu (nvapi-...)
    base_url="https://integrate.api.nvidia.com/v1",
)

resp = client.chat.completions.create(
    model="meta/llama-3.3-70b-instruct",
    messages=[{"role": "user", "content": "Sebutkan 3 tips belajar pemrograman untuk pemula."}],
)
print(resp.choices[0].message.content)
```

### JavaScript (fetch)

```javascript
const res = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer NVIDIA_API_KEY", // ganti dengan key-mu
  },
  body: JSON.stringify({
    model: "meta/llama-3.3-70b-instruct",
    messages: [{ role: "user", content: "Sebutkan 3 tips belajar pemrograman untuk pemula." }],
  }),
});

const data = await res.json();
console.log(data.choices[0].message.content);
```

## Arti kuota gratis dalam bahasa awam

Kamu mendapat sejumlah kredit gratis untuk mencoba model-model besar tanpa perlu GPU sendiri. Ini "ruang cicip" — ideal untuk menilai kualitas model sebelum kamu memutuskan untuk self-host NIM atau memakai provider lain untuk produksi.

## Jebakan umum

- **Kredit gratis terbatas.** Setelah habis, kamu perlu opsi berbayar atau self-host.
- **Nama model pakai prefix vendor**, mis. `meta/llama-3.3-70b-instruct` — salin persis dari halaman model.
- **Untuk produksi**, NVIDIA mengarahkan ke NIM yang di-deploy sendiri; cek ToS untuk pemakaian komersial endpoint gratis.

## Link dokumentasi resmi

- [Katalog model & API](https://build.nvidia.com)
- [Dokumentasi API](https://docs.api.nvidia.com/)
