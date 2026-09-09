import React from 'react';
import { Student } from '../types';
import {
  Award,
  CheckCircle2,
  Clock,
  Target,
  BookMarked,
  Sparkles,
} from 'lucide-react';
import { isItemCompleted } from '../utils/studentData';

interface PrestasiViewProps {
  student: Student;
}

export const PrestasiView: React.FC<PrestasiViewProps> = ({ student }) => {
  const completedTargets = student.prestasiList.filter(isItemCompleted).length;
  const totalTargets = student.prestasiList.length; // 23
  const targetPercent = Math.round((completedTargets / totalTargets) * 100);

  const semester1Items = [
    { label: 'QS. al-Lail', value: student.alLail, category: 'Tahfidz' },
    { label: 'QS. asy-Syams', value: student.asySyams, category: 'Tahfidz' },
    { label: 'QS. al-Balad', value: student.alBalad, category: 'Tahfidz' },
    { label: 'QS. al-Fajr', value: student.alFajr, category: 'Tahfidz' },
    { label: 'QS. al-Ghasiyyah', value: student.alGhasiyyah, category: 'Tahfidz' },
    { label: 'Hadits 1', value: student.hadits1, category: 'Hadits' },
    { label: 'Hadits 2', value: student.hadits2, category: 'Hadits' },
    { label: "QS. an-Nisa': 102", value: student.anNisa102, category: 'Tahfidz' },
    { label: 'Praktik Shalat Jenazah', value: student.praktikJenazah, category: 'Praktik' },
    { label: 'Refleksi Semester 1', value: student.refleksiS1, category: 'Refleksi' },
  ];

  const semester2Items = [
    { label: "QS. al-A'la", value: student.alAla, category: 'Tahfidz' },
    { label: 'QS. ath-Thariq', value: student.athThariq, category: 'Tahfidz' },
    { label: 'QS. al-Buruj', value: student.alBuruj, category: 'Tahfidz' },
    { label: 'QS. al-Insyiqaq', value: student.alInsyiqaq, category: 'Tahfidz' },
    { label: 'QS. al-Muthaffifin', value: student.alMuthaffifin, category: 'Tahfidz' },
    { label: 'QS. al-Infithar', value: student.alInfithar, category: 'Tahfidz' },
    { label: 'QS. al-Baqoroh: 183', value: student.alBaqoroh183, category: 'Tahfidz' },
    { label: 'Hadits 3', value: student.hadits3, category: 'Hadits' },
    { label: 'Hadits 4', value: student.hadits4, category: 'Hadits' },
    { label: 'Praktik Mengkafani Jenazah', value: student.mengkafani, category: 'Praktik' },
    { label: 'Bacaan Shalat (Col AM)', value: student.bacaanShalat, category: 'Ibadah' },
    { label: 'KHAT (Col AN)', value: student.khat, category: 'Keterampilan' },
    { label: 'Refleksi Semester 2', value: student.refleksiS2, category: 'Refleksi' },
  ];

  const s1Completed = semester1Items.filter((i) => isItemCompleted(i.value)).length;
  const s2Completed = semester2Items.filter((i) => isItemCompleted(i.value)).length;

  const renderStatusBadge = (value: string) => {
    const isDone = isItemCompleted(value);
    if (isDone) {
      const displayVal = value.trim();
      // If it's just a mark or score
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100/80 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
          <CheckCircle2 className="h-3 w-3 text-emerald-600" />
          <span>{displayVal === '1' || displayVal.toLowerCase() === 'v' ? 'Tuntas' : displayVal}</span>
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-400">
        <Clock className="h-3 w-3 text-slate-400" />
        <span>Belum</span>
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200/80 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-indigo-600" />
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Rekap Capaian Buku Prestasi
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Target hafalan surah pendek, hadits pilihan, praktik ibadah, dan refleksi diri.
          </p>
        </div>

        {/* Live target chip */}
        <div className="inline-flex items-center gap-2 rounded-xl bg-indigo-50 border border-indigo-200/70 px-3.5 py-1.5 text-xs font-extrabold text-indigo-800">
          <Target className="h-3.5 w-3.5 text-indigo-600" />
          <span>
            {completedTargets} dari {totalTargets} Target Tercapai ({targetPercent}%)
          </span>
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50/70 via-sky-50/50 to-blue-50/70 p-4 sm:p-5">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
          <span>Akumulasi Hafalan &amp; Praktik</span>
          <span className="text-indigo-700 font-extrabold">{targetPercent}% Selesai</span>
        </div>
        <div className="h-3 w-full rounded-full bg-white border border-indigo-200/60 overflow-hidden p-0.5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 transition-all duration-700 ease-out"
            style={{ width: `${targetPercent}%` }}
          />
        </div>
      </div>

      {/* Semester 1 & Semester 2 Cards Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* SEMESTER 1 */}
        <article className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <BookMarked className="h-4.5 w-4.5" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-slate-900 leading-tight">
                  Target Semester 1
                </h4>
                <p className="text-[11px] text-slate-500">10 Komponen Penilaian</p>
              </div>
            </div>
            <span className="rounded-full bg-sky-50 border border-sky-200/70 px-2.5 py-1 text-xs font-bold text-sky-700">
              {s1Completed} / 10 Tuntas
            </span>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            {semester1Items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-2.5 hover:bg-slate-50/60 px-2 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 w-4">{idx + 1}.</span>
                  <span className="font-semibold text-slate-700">{item.label}</span>
                </div>
                <div>{renderStatusBadge(item.value)}</div>
              </div>
            ))}
          </div>
        </article>

        {/* SEMESTER 2 & PRAKTIK */}
        <article className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                <Sparkles className="h-4.5 w-4.5" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-slate-900 leading-tight">
                  Target Semester 2 &amp; Praktik
                </h4>
                <p className="text-[11px] text-slate-500">13 Komponen Penilaian</p>
              </div>
            </div>
            <span className="rounded-full bg-indigo-50 border border-indigo-200/70 px-2.5 py-1 text-xs font-bold text-indigo-700">
              {s2Completed} / 13 Tuntas
            </span>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            {semester2Items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-2.5 hover:bg-slate-50/60 px-2 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 w-4">{idx + 1}.</span>
                  <span className="font-semibold text-slate-700">{item.label}</span>
                </div>
                <div>{renderStatusBadge(item.value)}</div>
              </div>
            ))}
          </div>
        </article>
      </div>

      {/* SUMMARY BANNER */}
      <article className="rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-indigo-700 text-white shadow-md">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-slate-900">
                Ringkasan Capaian Target Hafalan &amp; Praktik
              </h4>
              <p className="text-xs text-slate-600">
                Jumlah indikator hafalan dan praktik ibadah yang telah disimak serta dinilai guru.
              </p>
            </div>
          </div>

          <div className="bg-white px-6 py-3.5 rounded-2xl border border-sky-100 shadow-xs text-center sm:text-right shrink-0">
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
              Total Capaian
            </p>
            <p className="text-2xl sm:text-3xl font-black text-sky-600">
              <span>{completedTargets}</span>{' '}
              <span className="text-base font-bold text-slate-400">/ {totalTargets}</span>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
