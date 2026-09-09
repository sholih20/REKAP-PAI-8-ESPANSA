import React from 'react';
import { Student } from '../types';
import {
  BookOpen,
  Info,
  Presentation,
  Video,
  Activity,
  FileText,
  Calculator,
  TrendingUp,
  Award,
} from 'lucide-react';

interface PaiViewProps {
  student: Student;
  onOpenGuidance: (guidanceId: string) => void;
}

export const PaiView: React.FC<PaiViewProps> = ({ student, onOpenGuidance }) => {
  const renderScore = (val: string) => {
    const clean = (val || '').trim();
    if (!clean || clean === '-' || clean === '—') {
      return <span className="font-semibold text-slate-300">—</span>;
    }
    const num = parseFloat(clean.replace(',', '.'));
    const isPassing = !isNaN(num) && num >= 75;

    return (
      <span
        className={`font-black text-sm sm:text-base ${
          isPassing ? 'text-sky-700' : 'text-slate-800'
        }`}
      >
        {clean}
      </span>
    );
  };

  const getPredikat = (avgStr: string) => {
    const num = parseFloat((avgStr || '').replace(',', '.'));
    if (isNaN(num) || num === 0) return { label: 'Belum Lengkap', color: 'bg-slate-100 text-slate-600' };
    if (num >= 90) return { label: 'Sangat Memuaskan (A)', color: 'bg-emerald-100 text-emerald-800' };
    if (num >= 80) return { label: 'Baik (B)', color: 'bg-sky-100 text-sky-800' };
    if (num >= 75) return { label: 'Cukup (C)', color: 'bg-amber-100 text-amber-800' };
    return { label: 'Perlu Bimbingan', color: 'bg-rose-100 text-rose-800' };
  };

  const predikat = getPredikat(student.average);

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200/80 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-sky-600" />
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Rekap Nilai PAI per Bab
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Penilaian proses, tugas karya, unjuk kerja, dan ulangan harian Bab 1 hingga 5.
          </p>
        </div>
        <div className="text-xs text-slate-400">
          Kriteria Ketuntasan Minimal: <span className="font-bold text-slate-700">75</span>
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {/* BAB 1 */}
        <article className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs border-t-4 border-t-sky-500 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="rounded-md bg-sky-50 px-2 py-0.5 text-[10px] font-black tracking-wider uppercase text-sky-700">
              Bab 1
            </span>
            <span className="text-[10px] font-bold text-slate-400">Al-Qur'an</span>
          </div>

          <h4 className="mt-2 text-base font-extrabold text-slate-900 leading-snug">
            Inspirasi Al-Qur’an
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Melestarikan Alam, Menjaga Kehidupan
          </p>

          <div className="mt-4 divide-y divide-slate-100 border-t border-slate-100 text-xs">
            <div className="flex items-center justify-between py-2.5">
              <span className="font-medium text-slate-600">Menulis Ayat</span>
              {renderScore(student.b1Writing)}
            </div>
            <div className="flex items-center justify-between py-2.5">
              <span className="font-medium text-slate-600">Membaca / Hafalan</span>
              {renderScore(student.b1Reading)}
            </div>
            <div className="flex items-center justify-between py-2.5">
              <span className="font-medium text-slate-600">Ulangan Harian</span>
              {renderScore(student.b1Test)}
            </div>
          </div>
        </article>

        {/* BAB 2 */}
        <article className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs border-t-4 border-t-emerald-500 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-black tracking-wider uppercase text-emerald-700">
              Bab 2
            </span>
            <span className="text-[10px] font-bold text-slate-400">Akidah</span>
          </div>

          <h4 className="mt-2 text-base font-extrabold text-slate-900 leading-snug">
            Meyakini Kitab-Kitab Allah
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Menjadi Generasi Pecinta Al-Qur'an
          </p>

          {/* Action Buttons for Task Guidelines */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => onOpenGuidance('b2-infographic')}
              className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 border border-emerald-200/70 px-2.5 py-1.5 text-[11px] font-bold text-emerald-700 hover:bg-emerald-100 transition-colors"
            >
              <Info className="h-3 w-3" />
              <span>Arahan Infografis</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenGuidance('b2-presentation')}
              className="inline-flex items-center gap-1 rounded-lg bg-sky-50 border border-sky-200/70 px-2.5 py-1.5 text-[11px] font-bold text-sky-700 hover:bg-sky-100 transition-colors"
            >
              <Presentation className="h-3 w-3" />
              <span>Arahan Presentasi</span>
            </button>
          </div>

          <div className="mt-4 divide-y divide-slate-100 border-t border-slate-100 text-xs">
            <div className="flex items-center justify-between py-2.5">
              <span className="font-medium text-slate-600">Infografis Digital</span>
              {renderScore(student.b2Infographic)}
            </div>
            <div className="flex items-center justify-between py-2.5">
              <span className="font-medium text-slate-600">Presentasi Kelas</span>
              {renderScore(student.b2Presentation)}
            </div>
            <div className="flex items-center justify-between py-2.5">
              <span className="font-medium text-slate-600">Ulangan Harian</span>
              {renderScore(student.b2Test)}
            </div>
          </div>
        </article>

        {/* BAB 3 */}
        <article className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs border-t-4 border-t-amber-500 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-black tracking-wider uppercase text-amber-700">
              Bab 3
            </span>
            <span className="text-[10px] font-bold text-slate-400">Akhlak</span>
          </div>

          <h4 className="mt-2 text-base font-extrabold text-slate-900 leading-snug">
            Pribadi Berintegritas
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Meneladani Sifat Amanah dan Kejujuran
          </p>

          <div className="mt-3">
            <button
              type="button"
              onClick={() => onOpenGuidance('b3-video')}
              className="inline-flex items-center gap-1 rounded-lg bg-amber-50 border border-amber-200/70 px-2.5 py-1.5 text-[11px] font-bold text-amber-700 hover:bg-amber-100 transition-colors"
            >
              <Video className="h-3 w-3" />
              <span>Arahan Video Drama</span>
            </button>
          </div>

          <div className="mt-4 divide-y divide-slate-100 border-t border-slate-100 text-xs">
            <div className="flex items-center justify-between py-2.5">
              <span className="font-medium text-slate-600">Video Drama</span>
              {renderScore(student.b3Video)}
            </div>
            <div className="flex items-center justify-between py-2.5">
              <span className="font-medium text-slate-600">Ulangan Harian</span>
              {renderScore(student.b3Test)}
            </div>
          </div>
        </article>

        {/* BAB 4 */}
        <article className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs border-t-4 border-t-purple-500 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="rounded-md bg-purple-50 px-2 py-0.5 text-[10px] font-black tracking-wider uppercase text-purple-700">
              Bab 4
            </span>
            <span className="text-[10px] font-bold text-slate-400">Fikih Ibadah</span>
          </div>

          <h4 className="mt-2 text-base font-extrabold text-slate-900 leading-snug">
            Salat Sunah &amp; Jenazah
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Salat Gerhana, Istiska, dan Jenazah
          </p>

          <div className="mt-3">
            <button
              type="button"
              onClick={() => onOpenGuidance('b4-practice')}
              className="inline-flex items-center gap-1 rounded-lg bg-purple-50 border border-purple-200/70 px-2.5 py-1.5 text-[11px] font-bold text-purple-700 hover:bg-purple-100 transition-colors"
            >
              <Activity className="h-3 w-3" />
              <span>Arahan Praktik</span>
            </button>
          </div>

          <div className="mt-4 divide-y divide-slate-100 border-t border-slate-100 text-xs">
            <div className="flex items-center justify-between py-2.5">
              <span className="font-medium text-slate-600">Praktik Ibadah</span>
              {renderScore(student.b4Practice)}
            </div>
            <div className="flex items-center justify-between py-2.5">
              <span className="font-medium text-slate-600">Ulangan Harian</span>
              {renderScore(student.b4Test)}
            </div>
          </div>
        </article>

        {/* BAB 5 */}
        <article className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs border-t-4 border-t-rose-500 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="rounded-md bg-rose-50 px-2 py-0.5 text-[10px] font-black tracking-wider uppercase text-rose-700">
              Bab 5
            </span>
            <span className="text-[10px] font-bold text-slate-400">Sejarah Islam</span>
          </div>

          <h4 className="mt-2 text-base font-extrabold text-slate-900 leading-snug">
            Daulah Abbasiyah
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Masa Keemasan Peradaban Islam
          </p>

          <div className="mt-3">
            <button
              type="button"
              onClick={() => onOpenGuidance('b5-ppt')}
              className="inline-flex items-center gap-1 rounded-lg bg-rose-50 border border-rose-200/70 px-2.5 py-1.5 text-[11px] font-bold text-rose-700 hover:bg-rose-100 transition-colors"
            >
              <FileText className="h-3 w-3" />
              <span>Arahan PPT</span>
            </button>
          </div>

          <div className="mt-4 divide-y divide-slate-100 border-t border-slate-100 text-xs">
            <div className="flex items-center justify-between py-2.5">
              <span className="font-medium text-slate-600">Media PPT</span>
              {renderScore(student.b5Ppt)}
            </div>
            <div className="flex items-center justify-between py-2.5">
              <span className="font-medium text-slate-600">Ulangan Harian</span>
              {renderScore(student.b5Test)}
            </div>
          </div>
        </article>

        {/* SUMMARY CARD: TOTAL & AVERAGE */}
        <article className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-sky-50/40 to-blue-50/30 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-sky-100 px-2 py-0.5 text-[10px] font-black tracking-wider uppercase text-sky-800">
                Akumulasi
              </span>
              <Calculator className="h-4 w-4 text-sky-600" />
            </div>

            <h4 className="mt-2 text-base font-extrabold text-slate-900">
              Rekapitulasi Nilai Akhir
            </h4>
            <p className="text-xs text-slate-500">
              Total kumulatif dan rata-rata PAI semester ini.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-2xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Total Nilai
                </span>
                <p className="mt-0.5 text-xl font-black text-slate-800">
                  {student.totalScore || '—'}
                </p>
              </div>

              <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-2xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Rata-Rata
                </span>
                <p className="mt-0.5 text-xl font-black text-sky-600">
                  {student.average || '—'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium">Predikat Capaian:</span>
            <span className={`font-bold px-2.5 py-1 rounded-lg ${predikat.color}`}>
              {predikat.label}
            </span>
          </div>
        </article>
      </div>
    </div>
  );
};
