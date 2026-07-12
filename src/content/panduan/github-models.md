---
slug: github-models
judul: Cara daftar & pakai GitHub Models gratis
updated: 2026-07-12
---

**Cocok untuk:** kamu yang sudah punya akun GitHub dan mau langsung menjajal banyak model (GPT, Llama, Mistral, Phi) tanpa daftar layanan baru — cukup pakai Personal Access Token.

## Cara daftar langkah demi langkah

1. Pastikan kamu punya akun [github.com](https://github.com) (gratis).
2. Buka [github.com/marketplace/models](https://github.com/marketplace/models).
3. Pilih model yang ingin dicoba, mis. **GPT-4o mini**. Kamu bisa mencobanya lewat playground di browser dulu.

## Cara ambil token (PAT)

GitHub Models memakai **Personal Access Token** sebagai kunci.

1. Buka [github.com/settings/personal-access-tokens](https://github.com/settings/personal-access-tokens) → **Fine-grained tokens** → **Generate new token**.
2. Beri nama dan masa berlaku.
3. Pada **Permissions**, aktifkan izin **Models** (read). 
4. Klik **Generate token** dan salin (diawali `github_pat_...`).

## Contoh kode

Endpoint **kompatibel OpenAI** ada di `https://models.github.ai/inference`. Nama model memakai format `penerbit/model`.

### Python (SDK `openai`)

```python
# pip install openai
from openai import OpenAI

client = OpenAI(
    api_key="GITHUB_TOKEN",  # ganti dengan PAT-mu (github_pat_...)
    base_url="https://models.github.ai/inference",
)

resp = client.chat.completions.create(
    model="openai/gpt-4o-mini",
    messages=[{"role": "user", "content": "Terjemahkan 'good morning' ke 5 bahasa daerah Indonesia."}],
)
print(resp.choices[0].message.content)
```

### JavaScript (fetch)

```javascript
const res = await fetch("https://models.github.ai/inference/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer GITHUB_TOKEN", // ganti dengan PAT-mu
  },
  body: JSON.stringify({
    model: "openai/gpt-4o-mini",
    messages: [
      { role: "user", content: "Terjemahkan 'good morning' ke 5 bahasa daerah Indonesia." },
    ],
  }),
});

const data = await res.json();
console.log(data.choices[0].message.content);
```

## Arti kuota gratis dalam bahasa awam

Gratis, tapi jelas dibatasi untuk **eksperimen** — ada batas request per menit/hari dan ukuran konteks yang lebih kecil dari versi berbayar. Sangat pas buat belajar, mem-prototype, dan membandingkan model, bukan untuk melayani banyak pengguna.

## Jebakan umum

- **BUKAN untuk produksi.** GitHub menyatakan tier gratis ini untuk pengembangan/eksperimen. Untuk produksi, mereka mengarahkan ke Azure AI.
- **Butuh PAT dengan izin `models`.** Token tanpa izin ini akan ditolak.
- **Nama model pakai format `penerbit/model`**, mis. `openai/gpt-4o-mini`, `meta/Llama-3.3-70B-Instruct`.

## Link dokumentasi resmi

- [GitHub Models docs](https://docs.github.com/en/github-models)
- [Prototyping with AI models](https://docs.github.com/en/github-models/use-github-models/prototyping-with-ai-models)
