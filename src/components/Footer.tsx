import React from 'react';
import { Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-200/80 bg-white/90 py-8 text-center print:hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 font-bold text-slate-700">
            <ShieldCheck className="h-4 w-4 text-sky-600" />
            <span>Portal Resmi MGMP PAI • SMP Negeri 8 Salatiga</span>
          </div>

          <p className="text-[11px] text-slate-400">
            Dikelola untuk transparansi capaian akademik &amp; pembinaan budi pekerti peserta didik.
          </p>

          <div className="mt-2 text-[11px] font-semibold text-slate-400 flex items-center gap-1">
            <span>© {new Date().getFullYear()} @MGMP_PAIespansa</span>
            <span>•</span>
            <span>Tahun Ajaran 2026/2027</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
