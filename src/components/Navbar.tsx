import React from 'react';
import { ViewTab, Student } from '../types';
import { BookOpen, Award, User, X } from 'lucide-react';

interface NavbarProps {
  activeTab: ViewTab;
  setActiveTab: (tab: ViewTab) => void;
  selectedStudent: Student | null;
  onClearStudent: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedStudent,
  onClearStudent,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-xs transition-all duration-200">
      {/* Accent top gradient stripe */}
      <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-blue-100 p-1.5 border border-sky-200/60 shadow-xs">
              <img
                src="https://iili.io/C9zuAqN.png"
                alt="Logo SMPN 8 Salatiga"
                className="h-full w-full object-contain"
                loading="eager"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="truncate text-xs font-bold uppercase tracking-wider text-sky-700">
                  SMPN 8 Salatiga
                </span>
                <span className="hidden xs:inline-block rounded-md bg-sky-100/70 px-1.5 py-0.5 text-[10px] font-semibold text-sky-800">
                  PAI & BP
                </span>
              </div>
              <h2 className="truncate text-sm font-extrabold text-slate-900 tracking-tight">
                Portal Capaian Siswa
              </h2>
            </div>
          </div>

          {/* Navigation Tabs (Floating Switcher) */}
          <div className="flex items-center gap-2">
            <nav className="flex items-center p-1 rounded-xl bg-slate-100/90 border border-slate-200/60">
              <button
                type="button"
                id="btn-nav-pai"
                onClick={() => setActiveTab('pai')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 min-h-[36px] ${
                  activeTab === 'pai'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
                aria-current={activeTab === 'pai' ? 'page' : undefined}
              >
                <BookOpen className="h-4 w-4" />
                <span>Rekap PAI</span>
              </button>

              <button
                type="button"
                id="btn-nav-prestasi"
                onClick={() => setActiveTab('prestasi')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 min-h-[36px] ${
                  activeTab === 'prestasi'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
                aria-current={activeTab === 'prestasi' ? 'page' : undefined}
              >
                <Award className="h-4 w-4" />
                <span>Buku Prestasi</span>
              </button>
            </nav>

            {/* Quick Active Student Indicator (if selected) */}
            {selectedStudent && (
              <div className="hidden md:flex items-center gap-2 pl-2 border-l border-slate-200">
                <div className="flex items-center gap-1.5 rounded-lg bg-sky-50 border border-sky-200/70 px-2.5 py-1 text-xs">
                  <User className="h-3.5 w-3.5 text-sky-600" />
                  <span className="font-bold text-slate-800 max-w-[120px] truncate">
                    {selectedStudent.name}
                  </span>
                  <span className="rounded bg-sky-200/60 px-1 py-0.2 text-[10px] font-extrabold text-sky-800">
                    {selectedStudent.className}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onClearStudent}
                  title="Ganti Siswa"
                  className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
