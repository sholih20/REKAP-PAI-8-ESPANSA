export interface Student {
  nis: string;
  name: string;
  gender: string;
  className: string;

  // Rekap Nilai PAI (Bab 1 - 5)
  b1Writing: string;
  b1Reading: string;
  b1Test: string;

  b2Infographic: string;
  b2Presentation: string;
  b2Test: string;

  b3Video: string;
  b3Test: string;

  b4Practice: string;
  b4Test: string;

  b5Ppt: string;
  b5Test: string;

  totalScore: string;
  average: string;

  // Buku Prestasi - Semester 1
  alLail: string;
  asySyams: string;
  alBalad: string;
  alFajr: string;
  alGhasiyyah: string;
  hadits1: string;
  hadits2: string;
  anNisa102: string;
  praktikJenazah: string;
  refleksiS1: string;

  // Buku Prestasi - Semester 2 & Praktik
  alAla: string;
  athThariq: string;
  alBuruj: string;
  alInsyiqaq: string;
  alMuthaffifin: string;
  alInfithar: string;
  alBaqoroh183: string;
  hadits3: string;
  hadits4: string;
  mengkafani: string;
  bacaanShalat: string;
  khat: string;
  refleksiS2: string;

  // All 23 items for progress calculation
  prestasiList: string[];
}

export type ViewTab = 'pai' | 'prestasi';

export interface TaskGuidance {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  color: 'emerald' | 'sky' | 'amber' | 'purple' | 'rose';
  icon: string;
  description: string;
  requirements?: string[];
  contentPoints?: string[];
  criteria?: { label: string; percentage?: string }[];
  submissionLink?: string;
  submissionLabel?: string;
  tips?: string[];
  motto?: string;
}
