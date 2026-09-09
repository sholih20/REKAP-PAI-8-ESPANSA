import { TaskGuidance } from '../types';

export const TASK_GUIDELINES: Record<string, TaskGuidance> = {
  'b2-infographic': {
    id: 'b2-infographic',
    tag: 'Bab 2 • Tugas Karya',
    title: 'Tugas Infografis Digital',
    subtitle: 'Bab 2: Meyakini Kitab-Kitab Allah',
    color: 'emerald',
    icon: 'info',
    description:
      'Buatlah 1 infografis digital tentang Meyakini Kitab-Kitab Allah secara kreatif dan informatif.',
    requirements: [
      'Ukuran poster: 1200 × 1500 pixel (rasio potret)',
      'Isi materi dibuat lengkap, jelas, dan mudah dipahami',
      'Gunakan desain yang menarik, estetis, dan kreatif',
      'Semakin lengkap dan kreatif, semakin baik nilai yang diperoleh',
      'Hasil karya harus orisinal / dibuat sendiri (bukan plagiasi)',
    ],
    contentPoints: [
      'Pengertian iman kepada kitab Allah',
      '4 kitab Allah beserta rasul penerimanya',
      'Hikmah beriman kepada kitab-kitab Allah',
      'Contoh perilaku dalam kehidupan sehari-hari',
    ],
    submissionLink: 'https://forms.gle/sTNaFSVnKGWBY4Fx6',
    submissionLabel: 'Buka Form Unggah Infografis',
    motto: 'Selamat berkarya! Tunjukkan kreativitas dan pemahamanmu dalam media visual yang menginspirasi.',
  },

  'b2-presentation': {
    id: 'b2-presentation',
    tag: 'Bab 2 • Unjuk Diri',
    title: 'Arahan Presentasi Kelas',
    subtitle: 'Bab 2: Meyakini Kitab-Kitab Allah',
    color: 'sky',
    icon: 'presentation',
    description:
      'Presentasikan hasil pemahaman kalian tentang Bab 2: Meyakini Kitab-Kitab Allah secara langsung di depan kelas.',
    requirements: [
      'Presentasi dilakukan secara individu/kelompok sesuai arahan guru.',
      'Jelaskan materi dengan bahasa sendiri, bukan sekadar membaca teks.',
      'Sampaikan materi dengan percaya diri, suara lantang dan jelas, serta sikap sopan.',
      'Gunakan infografis yang telah dibuat sebagai media pendukung presentasi.',
      'Sampaikan poin-poin penting: kitab Allah, rasul penerima, dalil, hikmah, dan implementasi nyata.',
      'Bersiaplah menjawab pertanyaan dari guru atau rekan teman sekelas.',
    ],
    tips: [
      'Pahami → Jelaskan → Berikan Contoh → Ajak Teman Berpikir.',
      'Semakin jelas, percaya diri, lengkap, dan menarik penyampaiannya, semakin tinggi apresiasi nilai.',
    ],
    motto:
      '🌟 "Bukan siapa yang paling banyak membaca, tetapi siapa yang paling mampu memahami dan menjelaskan. Selamat mempresentasikan! Tunjukkan bahwa kalian tidak hanya mengetahui kitab-kitab Allah, tetapi juga memahami pentingnya beriman dan mengamalkan ajarannya dalam kehidupan."',
  },

  'b3-video': {
    id: 'b3-video',
    tag: 'Bab 3 • Tugas Proyek Video',
    title: 'Video Drama Sifat Amanah & Jujur',
    subtitle: 'Bab 3: Menjadi Pribadi Berintegritas',
    color: 'amber',
    icon: 'video',
    description:
      'Buatlah drama pendek yang menggambarkan penerapan sifat amanah dan jujur dalam kehidupan sehari-hari.',
    requirements: [
      'Video dapat dibuat secara mandiri atau berkelompok dengan jumlah anggota bebas.',
      'Durasi video minimal 1 menit.',
      'Cerita harus mengandung pesan yang bermakna tentang pentingnya amanah dan jujur.',
      'Buatlah video semenarik, komunikatif, dan sekreatif mungkin.',
      'Video diunggah dalam bentuk Instagram Reels.',
      'Wajib menandai (tag/mention) akun @daisholih dan @smpn8salatiga pada unggahan.',
      'Sertakan caption / narasi deskriptif yang menarik dan sesuai dengan alur video.',
    ],
    tips: [
      'Tidak harus menggunakan peralatan profesional atau kamera mahal. Yang terpenting adalah alur cerita menarik, pesan moral yang kuat, kreativitas, dan penghayatan dalam berakting.',
    ],
    motto:
      '🌟 "Jadilah pribadi yang dapat dipercaya, karena kejujuran adalah awal dari integritas. Semakin kreatif, menarik, dan kuat pesan yang disampaikan, semakin baik! Selamat berkarya dan tunjukkan bahwa integritas dimulai dari diri sendiri."',
  },

  'b4-practice': {
    id: 'b4-practice',
    tag: 'Bab 4 • Praktik Ibadah',
    title: 'Praktik Salat Gerhana, Istiska, & Jenazah',
    subtitle: 'Bab 4: Salat Sunah & Jenazah',
    color: 'purple',
    icon: 'activity',
    description:
      'Pada Bab 4, siswa akan melaksanakan praktik ibadah salat secara langsung di bawah bimbingan guru PAI.',
    requirements: [
      'Memahami pengertian dan hukum Salat Gerhana, Istiska, dan Jenazah.',
      'Mempelajari dan menghafal bacaan-bacaan doa/takbir yang digunakan.',
      'Memahami rukun, tata cara, dan urutan pelaksanaan masing-masing salat.',
      'Mempersiapkan diri dan berwudu untuk mengikuti praktik dengan tertib dan khusyuk.',
    ],
    criteria: [
      { label: 'Pemahaman Materi', percentage: 'Mampu menjelaskan pengertian & ketentuan salat' },
      { label: 'Ketepatan Bacaan', percentage: 'Bacaan tajwid benar, lancar, & tartil' },
      { label: 'Ketepatan Gerakan', percentage: 'Rukun gerakan salat dilakukan dengan benar' },
      { label: 'Urutan Pelaksanaan', percentage: 'Tertib sesuai kaidah fikih salat' },
      { label: 'Sikap & Kesungguhan', percentage: 'Percaya diri, khusyuk, & bersungguh-sungguh' },
    ],
    motto:
      '🌟 "Pahami ilmunya, kuasai bacaannya, praktikkan tata caranya. Persiapkan diri sebaik mungkin dan tunjukkan bahwa kalian tidak hanya memahami teori, tetapi juga mampu mempraktikkannya dengan benar."',
  },

  'b5-ppt': {
    id: 'b5-ppt',
    tag: 'Bab 5 • Media Pembelajaran',
    title: 'Media PPT Masa Keemasan Islam',
    subtitle: 'Bab 5: Masa Keemasan Islam Era Daulah Abbasiyah',
    color: 'rose',
    icon: 'file-text',
    description:
      'Buatlah media pembelajaran dalam bentuk presentasi PowerPoint (PPT) tentang Masa Keemasan Islam Era Daulah Abbasiyah secara lengkap, menarik, dan kreatif.',
    requirements: [
      'Dapat dikerjakan secara individu maupun kelompok.',
      'Gunakan desain visual yang menarik, harmonis, rapi, dan mudah dibaca.',
      'Gunakan kombinasi teks ringkas, gambar, ilustrasi, timeline sejarah, atau infografis relevan.',
      'Hindari terlalu banyak teks dalam satu slide (keep it concise & impactful).',
      'Gunakan referensi dan sumber informasi sejarah Islam yang terpercaya.',
      'Semakin lengkap, kreatif, informatif, dan menarik, semakin tinggi capaian nilai.',
    ],
    contentPoints: [
      'Pengertian dan latar belakang berdirinya Daulah Abbasiyah',
      'Sejarah berdirinya dan fase perkembangan masa keemasan Islam (The Golden Age)',
      'Tokoh-tokoh penting, pusat ilmu pengetahuan, pendidikan, dan perpustakaan Baitul Hikmah',
      'Perkembangan kedokteran, matematika, astronomi, filsafat, dan bidang sains lainnya',
      'Faktor pendorong kemajuan, hikmah masa keemasan, serta pelajaran dari keruntuhannya',
    ],
    criteria: [
      { label: 'Kelengkapan & Ketepatan Materi', percentage: '40%' },
      { label: 'Kreativitas & Desain Slide PPT', percentage: '25%' },
      { label: 'Kejelasan & Keterbacaan Konten', percentage: '15%' },
      { label: 'Kualitas Sumber & Penggunaan Gambar/Ilustrasi', percentage: '10%' },
      { label: 'Kerapian & Ketepatan Waktu Pengumpulan', percentage: '10%' },
    ],
    submissionLink: 'https://forms.gle/1yCd1zSTViAMm2PY6',
    submissionLabel: 'Buka Form Unggah Slide PPT',
    motto:
      '🌟 "Jadilah generasi yang terinspirasi untuk membangun masa depan melalui ilmu, kreativitas, dan semangat berkarya."',
  },
};
