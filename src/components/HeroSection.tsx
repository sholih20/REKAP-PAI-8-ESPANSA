import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, BookOpenCheck, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  studentCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ studentCount }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14 border-b border-slate-200/70 bg-white">
      {/* Subtle Background Radial Gradients */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% -20%, rgba(2, 132, 199, 0.09) 0%, transparent 60%),
            radial-gradient(circle at 90% 80%, rgba(99, 102, 241, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 10% 90%, rgba(14, 165, 233, 0.05) 0%, transparent 40%)
          `,
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Animated Aesthetic Logo Emblem */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-6"
          >
            {/* Glowing Backdrop Aura */}
            <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-sky-400/30 via-blue-500/20 to-indigo-500/30 blur-lg animate-pulse" />

            {/* Rotating / Pulsing Ambient Accent Rings */}
            <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-3xl bg-white p-3.5 shadow-xl shadow-sky-900/10 border border-slate-100 ring-4 ring-sky-50 transition-all duration-300 hover:scale-105">
              <img
                src="https://iili.io/C9zuAqN.png"
                alt="Logo Resmi SMP Negeri 8 Salatiga"
                className="h-full w-full object-contain filter drop-shadow-sm transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Official Badge Pill */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-3 py-0.5 text-[10px] font-extrabold tracking-wider text-sky-300 uppercase shadow-md flex items-center gap-1">
              <ShieldCheck className="h-3 w-3 text-sky-400" />
              <span>ESPANSA</span>
            </div>
          </motion.div>

          {/* Heading and Typography */}
          <motion.div
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200/80 px-3.5 py-1 text-xs font-bold text-sky-700 mb-3">
              <Sparkles className="h-3.5 w-3.5 text-sky-600" />
              <span>SMP Negeri 8 Salatiga • Official Portal</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              E-REKAP PAI &amp;{' '}
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                BUKU PRESTASI
              </span>
            </h1>

            <p className="mt-2 text-base sm:text-lg font-semibold text-slate-700">
              Pendidikan Agama Islam dan Budi Pekerti
            </p>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
              Tahun Pelajaran 2026–2027 • Kurikulum Merdeka
            </p>
          </motion.div>

          {/* Value Highlights / Live Stats */}
          <motion.div
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-slate-600"
          >
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-slate-50 border border-slate-200 px-3 py-1.5 font-medium shadow-2xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              <span>Sinkronisasi Otomatis Google Sheets</span>
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-xl bg-slate-50 border border-slate-200 px-3 py-1.5 font-medium shadow-2xs">
              <BookOpenCheck className="h-3.5 w-3.5 text-sky-500" />
              <span>5 Bab Rekap PAI &amp; 23 Target Prestasi</span>
            </span>

            {studentCount > 0 && (
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-sky-50/70 border border-sky-200/80 px-3 py-1.5 font-semibold text-sky-800 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
                </span>
                <span>{studentCount} Siswa Terdaftar</span>
              </span>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
