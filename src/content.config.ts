import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Panduan onboarding per provider (Markdown di src/content/panduan/).
const panduan = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/panduan' }),
  schema: z.object({
    slug: z.string(),
    judul: z.string(),
    // YAML memparse tanggal tanpa kutip sebagai Date; coerce agar konsisten.
    updated: z.coerce.date(),
  }),
});

export const collections = { panduan };
