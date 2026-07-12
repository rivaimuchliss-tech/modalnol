import providersData from '../data/providers.json';

export type Kategori = 'text' | 'code' | 'image' | 'audio' | 'embedding';

export interface KonteksIndonesia {
  butuhKartuKredit: boolean | null;
  bisaNomorIndonesia: boolean | null;
  diblokirRegional: boolean | null;
  bolehKomersial: boolean | null;
  catatan?: string | null;
}

export interface Provider {
  slug: string;
  nama: string;
  website: string;
  urlDaftar: string;
  deskripsi: string;
  kategori: Kategori[];
  modelUnggulan: string[];
  batasGratis: {
    ringkas: string;
    detail: string;
    artiAwam: string;
  };
  konteksIndonesia: KonteksIndonesia;
  kompatibelOpenAI: boolean;
  endpointCek?: string | null;
  sumberData: string[];
  terakhirDiverifikasiManual: string;
}

export const providers: Provider[] = providersData as Provider[];

export function getProvider(slug: string): Provider | undefined {
  return providers.find((p) => p.slug === slug);
}

export const LABEL_KATEGORI: Record<Kategori, string> = {
  text: 'Teks',
  code: 'Kode',
  image: 'Gambar',
  audio: 'Audio',
  embedding: 'Embedding',
};

// Daftar unik kategori yang benar-benar dipakai (untuk FilterBar).
export const kategoriTersedia: Kategori[] = Array.from(
  new Set(providers.flatMap((p) => p.kategori))
) as Kategori[];
