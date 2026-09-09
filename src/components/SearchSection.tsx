import React from 'react';
import { Student } from '../types';
import { Search, X, User, ChevronRight, Filter, AlertCircle, RefreshCw } from 'lucide-react';

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedClass: string;
  setSelectedClass: (cls: string) => void;
  classesList: string[];
  filteredStudents: Student[];
  onSelectStudent: (student: Student) => void;
  loading: boolean;
  error: string | null;
  onRefresh: () => void;
  selectedStudent: Student | null;
}

export const SearchSection: React.FC<SearchSectionProps> = ({
  searchQuery,
  setSearchQuery,
  selectedClass,
  setSelectedClass,
  classesList,
  filteredStudents,
  onSelectStudent,
  loading,
  error,
  onRefresh,
  selectedStudent,
}) => {
  return (
    <section className="rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-7 shadow-xl shadow-slate-200/40">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
              <Search className="h-4.5 w-4.5" />
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Pencarian Data Siswa
            </h2>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Cari berdasarkan Nama Siswa atau Nomor Induk Siswa (NIS).
          </p>
        </div>

        {/* Sync / Refresh Button */}
        <button
          type="button"
          onClick={onRefresh}
          disabled={loading}
          className="self-start sm:self-center inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 transition-colors disabled:opacity-50"
          title="Segarkan data dari Google Sheets"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin text-sky-600' : 'text-slate-500'}`} />
          <span>{loading ? 'Memuat...' : 'Sinkron Data'}</span>
        </button>
      </div>

      {/* Class Filter Chips */}
      {classesList.length > 0 && (
        <div className="mt-4 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
          <span className="inline-flex items-center gap-1 text-slate-400 font-bold text-[11px] uppercase mr-1">
            <Filter className="h-3 w-3" />
            <span>Kelas:</span>
          </span>
          <button
            type="button"
            onClick={() => setSelectedClass('ALL')}
            className={`rounded-xl px-3 py-1.5 font-bold transition-all shrink-0 ${
              selectedClass === 'ALL'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
            }`}
          >
            Semua ({filteredStudents.length})
          </button>
          {classesList.map((cls) => (
            <button
              key={cls}
              type="button"
              onClick={() => setSelectedClass(cls)}
              className={`rounded-xl px-3 py-1.5 font-bold transition-all shrink-0 ${
                selectedClass === cls
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
              }`}
            >
              Kelas {cls}
            </button>
          ))}
        </div>
      )}

      {/* Search Input Field */}
      <div className="relative mt-4">
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          disabled={loading}
          placeholder="Ketik Nama Siswa atau NIS (contoh: Ahsan, 7604)..."
          className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 py-3.5 pl-11 pr-10 text-sm sm:text-base font-semibold text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10 transition-all shadow-inner"
        />
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-400 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Error State */}
      {error && (
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-rose-200 bg-rose-50/70 p-4 text-xs sm:text-sm text-rose-800">
          <AlertCircle className="h-5 w-5 shrink-0 text-rose-600" />
          <div className="flex-1">
            <p className="font-bold">Gagal Mengambil Data Spreadsheet</p>
            <p className="text-xs text-rose-700">{error}</p>
          </div>
          <button
            type="button"
            onClick={onRefresh}
            className="rounded-lg bg-rose-600 px-3 py-1.5 font-bold text-white text-xs hover:bg-rose-700"
          >
            Coba Lagi
          </button>
        </div>
      )}

      {/* Instant Search Results Dropdown List */}
      {searchQuery.trim() !== '' && (
        <div className="mt-3 space-y-2 max-h-72 overflow-y-auto pr-1">
          {filteredStudents.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 px-4 py-6 text-center">
              <User className="mx-auto h-7 w-7 text-slate-300" />
              <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-600">
                Siswa tidak ditemukan untuk "{searchQuery}"
              </p>
              <p className="text-[11px] text-slate-400">
                Periksa ejaan nama atau nomor induk siswa.
              </p>
            </div>
          ) : (
            filteredStudents.slice(0, 10).map((student) => {
              const isCurrent = selectedStudent?.nis === student.nis && student.nis !== '';
              return (
                <button
                  key={`${student.nis}-${student.name}`}
                  type="button"
                  onClick={() => onSelectStudent(student)}
                  className={`flex w-full items-center justify-between rounded-xl border p-3 text-left transition-all duration-150 min-h-[48px] ${
                    isCurrent
                      ? 'border-sky-500 bg-sky-50/70 shadow-xs ring-1 ring-sky-500'
                      : 'border-slate-200/80 bg-white hover:border-sky-300 hover:bg-sky-50/30'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-blue-200 text-sky-800 text-xs font-bold border border-sky-200/80">
                      {student.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="truncate text-xs sm:text-sm font-extrabold text-slate-900">
                          {student.name}
                        </span>
                        {student.gender && (
                          <span
                            className={`rounded px-1.5 py-0.2 text-[10px] font-bold ${
                              student.gender === 'L'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-pink-100 text-pink-800'
                            }`}
                          >
                            {student.gender}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] font-medium text-slate-500">
                        NIS: <span className="font-semibold text-slate-700">{student.nis || '—'}</span> • Kelas: <span className="font-bold text-sky-700">{student.className || '—'}</span>
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                </button>
              );
            })
          )}
        </div>
      )}
    </section>
  );
};
