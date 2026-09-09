import React, { useState, useEffect, useMemo } from 'react';
import { Student, ViewTab } from './types';
import { CSV_URL, parseCSV, mapRowToStudent } from './utils/studentData';
import { TASK_GUIDELINES } from './data/guidance';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SearchSection } from './components/SearchSection';
import { StudentCard } from './components/StudentCard';
import { PaiView } from './components/PaiView';
import { PrestasiView } from './components/PrestasiView';
import { GuidanceModal } from './components/GuidanceModal';
import { Footer } from './components/Footer';
import {
  BookOpen,
  Award,
  Sparkles,
  Info,
  Presentation,
  Video,
  Activity,
  FileText,
  Search,
} from 'lucide-react';

export default function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedClass, setSelectedClass] = useState<string>('ALL');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [activeTab, setActiveTab] = useState<ViewTab>('pai');
  const [activeGuidanceId, setActiveGuidanceId] = useState<string | null>(null);

  // Fetch Google Sheets CSV
  const fetchStudentData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(CSV_URL, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`Gagal memuat data spreadsheet (Status: ${response.status})`);
      }
      const text = await response.text();
      const rawRows = parseCSV(text);
      // Skip header row and filter valid names
      const mapped = rawRows
        .slice(1)
        .map(mapRowToStudent)
        .filter((s) => s.name && s.name.trim() !== '');

      setStudents(mapped);

      // If a student was previously selected, keep them synchronized with latest data
      if (selectedStudent) {
        const refreshed = mapped.find(
          (s) => s.nis === selectedStudent.nis && s.name === selectedStudent.name
        );
        if (refreshed) setSelectedStudent(refreshed);
      }
    } catch (err: any) {
      console.error('Error fetching CSV:', err);
      setError(err?.message || 'Terjadi gangguan saat mengambil data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  // Keyboard shortcut: Escape to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveGuidanceId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Extract unique sorted classes
  const classesList = useMemo(() => {
    const set = new Set<string>();
    students.forEach((s) => {
      if (s.className && s.className.trim() !== '') {
        set.add(s.className.trim());
      }
    });
    return Array.from(set).sort();
  }, [students]);

  // Filter students based on query and class
  const filteredStudents = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return students.filter((s) => {
      const matchClass = selectedClass === 'ALL' || s.className === selectedClass;
      if (!matchClass) return false;
      if (!q) return true;
      return (
        s.name.toLowerCase().includes(q) ||
        s.nis.toLowerCase().includes(q) ||
        s.className.toLowerCase().includes(q)
      );
    });
  }, [students, searchQuery, selectedClass]);

  const handleSelectStudent = (student: Student) => {
    setSelectedStudent(student);
    setSearchQuery('');
    // Smooth scroll down to student detail section
    setTimeout(() => {
      const detailEl = document.getElementById('student-detail-section');
      if (detailEl) {
        detailEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handleClearStudent = () => {
    setSelectedStudent(null);
  };

  const currentGuidance = activeGuidanceId ? TASK_GUIDELINES[activeGuidanceId] : null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col antialiased selection:bg-sky-500 selection:text-white">
      {/* Floating Sticky Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedStudent={selectedStudent}
        onClearStudent={handleClearStudent}
      />

      {/* Aesthetic Animated Landing Hero */}
      <HeroSection studentCount={students.length} />

      {/* Main Content Body */}
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex-1">
        {/* Search & Filter Component */}
        <SearchSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          classesList={classesList}
          filteredStudents={filteredStudents}
          onSelectStudent={handleSelectStudent}
          loading={loading}
          error={error}
          onRefresh={fetchStudentData}
          selectedStudent={selectedStudent}
        />

        {/* Student Detail View if Selected */}
        {selectedStudent ? (
          <div id="student-detail-section" className="mt-8">
            <StudentCard student={selectedStudent} onClear={handleClearStudent} />

            {/* Content Tabs (Rekap PAI vs Buku Prestasi) */}
            <div className="mt-6">
              {activeTab === 'pai' ? (
                <PaiView
                  student={selectedStudent}
                  onOpenGuidance={(id) => setActiveGuidanceId(id)}
                />
              ) : (
                <PrestasiView student={selectedStudent} />
              )}
            </div>
          </div>
        ) : (
          /* Empty / Welcoming state with quick links to assignment guidelines */
          <div className="mt-8 space-y-8">
            {/* Guide banner */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 border border-sky-100">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-3 text-lg sm:text-xl font-black text-slate-900">
                Pilih Siswa untuk Melihat Nilai &amp; Prestasi
              </h3>
              <p className="mt-1 max-w-md mx-auto text-xs sm:text-sm text-slate-500">
                Ketik nama atau NIS pada kotak pencarian di atas untuk memeriksa rekap nilai akademik PAI dan progres 23 target hafalan.
              </p>
            </div>

            {/* Quick Access to Task Guidelines (Arahan Tugas) */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-sky-600" />
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                      Pusat Arahan &amp; Ketentuan Tugas PAI
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500">
                    Panduan lengkap tugas karya digital, unjuk presentasi, video drama, praktik, dan slide PPT.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Bab 2: Infografis */}
                <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-4 flex flex-col justify-between hover:shadow-xs transition-shadow">
                  <div>
                    <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-black text-emerald-800 uppercase tracking-wider">
                      Bab 2 • Poster Digital
                    </span>
                    <h4 className="mt-2 font-bold text-slate-900 text-sm">
                      Tugas Infografis Digital
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      Meyakini Kitab-Kitab Allah (Ukuran 1200×1500 px, 4 kitab &amp; rasul, hikmah).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveGuidanceId('b2-infographic')}
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-3 transition-colors shadow-2xs"
                  >
                    <Info className="h-3.5 w-3.5" />
                    <span>Lihat Arahan Lengkap</span>
                  </button>
                </div>

                {/* Bab 2: Presentasi */}
                <div className="rounded-2xl border border-sky-200/80 bg-sky-50/40 p-4 flex flex-col justify-between hover:shadow-xs transition-shadow">
                  <div>
                    <span className="rounded-md bg-sky-100 px-2 py-0.5 text-[10px] font-black text-sky-800 uppercase tracking-wider">
                      Bab 2 • Unjuk Diri
                    </span>
                    <h4 className="mt-2 font-bold text-slate-900 text-sm">
                      Arahan Presentasi Kelas
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      Pahami → Jelaskan → Berikan Contoh → Ajak Teman Berpikir di depan kelas.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveGuidanceId('b2-presentation')}
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs py-2 px-3 transition-colors shadow-2xs"
                  >
                    <Presentation className="h-3.5 w-3.5" />
                    <span>Lihat Arahan Lengkap</span>
                  </button>
                </div>

                {/* Bab 3: Video Drama */}
                <div className="rounded-2xl border border-amber-200/80 bg-amber-50/40 p-4 flex flex-col justify-between hover:shadow-xs transition-shadow">
                  <div>
                    <span className="rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-black text-amber-800 uppercase tracking-wider">
                      Bab 3 • Proyek Video
                    </span>
                    <h4 className="mt-2 font-bold text-slate-900 text-sm">
                      Video Drama Amanah &amp; Jujur
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      IG Reels min. 1 menit, tag @daisholih &amp; @smpn8salatiga, pesan moral berintegritas.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveGuidanceId('b3-video')}
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs py-2 px-3 transition-colors shadow-2xs"
                  >
                    <Video className="h-3.5 w-3.5" />
                    <span>Lihat Arahan Lengkap</span>
                  </button>
                </div>

                {/* Bab 4: Praktik */}
                <div className="rounded-2xl border border-purple-200/80 bg-purple-50/40 p-4 flex flex-col justify-between hover:shadow-xs transition-shadow">
                  <div>
                    <span className="rounded-md bg-purple-100 px-2 py-0.5 text-[10px] font-black text-purple-800 uppercase tracking-wider">
                      Bab 4 • Fikih Ibadah
                    </span>
                    <h4 className="mt-2 font-bold text-slate-900 text-sm">
                      Praktik Salat Sunah &amp; Jenazah
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      Salat Gerhana, Istiska, dan Jenazah (bacaan tartil, ketepatan rukun dan gerakan).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveGuidanceId('b4-practice')}
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs py-2 px-3 transition-colors shadow-2xs"
                  >
                    <Activity className="h-3.5 w-3.5" />
                    <span>Lihat Arahan Lengkap</span>
                  </button>
                </div>

                {/* Bab 5: PPT */}
                <div className="rounded-2xl border border-rose-200/80 bg-rose-50/40 p-4 flex flex-col justify-between hover:shadow-xs transition-shadow sm:col-span-2 lg:col-span-1">
                  <div>
                    <span className="rounded-md bg-rose-100 px-2 py-0.5 text-[10px] font-black text-rose-800 uppercase tracking-wider">
                      Bab 5 • Slide Presentasi
                    </span>
                    <h4 className="mt-2 font-bold text-slate-900 text-sm">
                      Media PPT Masa Keemasan Islam
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      Daulah Abbasiyah (Baitul Hikmah, kedokteran, matematika, tokoh dan hikmah).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveGuidanceId('b5-ppt')}
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs py-2 px-3 transition-colors shadow-2xs"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>Lihat Arahan Lengkap</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Task Guidance Modal / Drawer */}
      <GuidanceModal
        guidance={currentGuidance}
        onClose={() => setActiveGuidanceId(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
