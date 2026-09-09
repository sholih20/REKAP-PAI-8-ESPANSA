import React from 'react';
import { Student } from '../types';
import { GraduationCap, Printer, User, Sparkles, CheckCircle2 } from 'lucide-react';
import { isItemCompleted } from '../utils/studentData';

interface StudentCardProps {
  student: Student;
  onClear: () => void;
}

export const StudentCard: React.FC<StudentCardProps> = ({ student, onClear }) => {
  const completedTargets = student.prestasiList.filter(isItemCompleted).length;
  const targetPercent = Math.round((completedTargets / 23) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50 mb-8 print:border-none print:shadow-none">
      {/* Decorative top accent gradient */}
      <div className="h-2.5 bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-600" />

      <div className="p-5 sm:p-7">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          {/* Student Profile Info */}
          <div className="flex items-center gap-4 min-w-0">
            <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white shadow-md shadow-sky-200 ring-4 ring-sky-50">
              <GraduationCap className="h-7 w-7 sm:h-8 sm:w-8" />
              {student.gender && (
                <span
                  className={`absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-black text-white shadow-xs ${
                    student.gender === 'L' ? 'bg-blue-600' : 'bg-pink-600'
                  }`}
                  title={student.gender === 'L' ? 'Laki-Laki' : 'Perempuan'}
                >
                  {student.gender}
                </span>
              )}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-sky-600">
                  Data Siswa Terpilih
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200/60">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Aktif</span>
                </span>
              </div>
              <h2 className="mt-0.5 truncate text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {student.name}
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">
                Pendidikan Agama Islam &amp; Budi Pekerti • SMPN 8 Salatiga
              </p>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 rounded-2xl bg-slate-50 border border-slate-100 p-3 sm:p-4 text-center">
            <div className="px-2">
              <dt className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                NIS
              </dt>
              <dd className="mt-0.5 text-sm sm:text-base font-extrabold text-slate-800">
                {student.nis || '—'}
              </dd>
            </div>

            <div className="border-x border-slate-200/70 px-2">
              <dt className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                Kelas
              </dt>
              <dd className="mt-0.5 text-sm sm:text-base font-extrabold text-sky-700">
                {student.className || '—'}
              </dd>
            </div>

            <div className="px-2">
              <dt className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                Target Capaian
              </dt>
              <dd className="mt-0.5 text-sm sm:text-base font-extrabold text-emerald-600">
                {completedTargets} / 23
              </dd>
            </div>
          </div>
        </div>

        {/* Quick actions strip */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-500">Progres Keseluruhan Target:</span>
            <div className="w-32 sm:w-44 h-2.5 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 transition-all duration-500 rounded-full"
                style={{ width: `${targetPercent}%` }}
              />
            </div>
            <span className="font-extrabold text-slate-700">{targetPercent}%</span>
          </div>

          <div className="flex items-center gap-2 print:hidden">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-3 py-2 font-bold text-slate-700 shadow-2xs transition-colors"
            >
              <Printer className="h-3.5 w-3.5 text-slate-500" />
              <span>Cetak Hasil</span>
            </button>
            <button
              type="button"
              onClick={onClear}
              className="inline-flex items-center gap-1 rounded-xl bg-slate-100 hover:bg-slate-200 px-3 py-2 font-bold text-slate-600 transition-colors"
            >
              <User className="h-3.5 w-3.5" />
              <span>Ganti Siswa</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
