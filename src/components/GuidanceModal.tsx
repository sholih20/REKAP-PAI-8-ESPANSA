import React, { useState } from 'react';
import { TaskGuidance } from '../types';
import {
  X,
  Copy,
  Check,
  ExternalLink,
  Award,
  Lightbulb,
  FileCheck2,
  Share2,
  Sparkles,
} from 'lucide-react';

interface GuidanceModalProps {
  guidance: TaskGuidance | null;
  onClose: () => void;
}

export const GuidanceModal: React.FC<GuidanceModalProps> = ({ guidance, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!guidance) return null;

  const handleCopy = async () => {
    const textToCopy = `*${guidance.title}*\n${guidance.subtitle}\n\n${guidance.description}\n\n` +
      (guidance.requirements ? `Ketentuan:\n` + guidance.requirements.map(r => `• ${r}`).join('\n') + `\n\n` : '') +
      (guidance.contentPoints ? `Materi Isi:\n` + guidance.contentPoints.map(c => `• ${c}`).join('\n') + `\n\n` : '') +
      (guidance.criteria ? `Kriteria Penilaian:\n` + guidance.criteria.map(k => `• ${k.label}: ${k.percentage || ''}`).join('\n') + `\n\n` : '') +
      (guidance.motto ? `${guidance.motto}\n` : '');

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const getThemeClasses = (color: string) => {
    switch (color) {
      case 'emerald':
        return {
          banner: 'bg-emerald-600 text-white',
          tag: 'bg-emerald-100 text-emerald-800 border-emerald-200',
          bullet: 'text-emerald-600',
          card: 'border-emerald-200/80 bg-emerald-50/40',
        };
      case 'amber':
        return {
          banner: 'bg-amber-600 text-white',
          tag: 'bg-amber-100 text-amber-800 border-amber-200',
          bullet: 'text-amber-600',
          card: 'border-amber-200/80 bg-amber-50/40',
        };
      case 'purple':
        return {
          banner: 'bg-purple-600 text-white',
          tag: 'bg-purple-100 text-purple-800 border-purple-200',
          bullet: 'text-purple-600',
          card: 'border-purple-200/80 bg-purple-50/40',
        };
      case 'rose':
        return {
          banner: 'bg-rose-600 text-white',
          tag: 'bg-rose-100 text-rose-800 border-rose-200',
          bullet: 'text-rose-600',
          card: 'border-rose-200/80 bg-rose-50/40',
        };
      default:
        return {
          banner: 'bg-sky-600 text-white',
          tag: 'bg-sky-100 text-sky-800 border-sky-200',
          bullet: 'text-sky-600',
          card: 'border-sky-200/80 bg-sky-50/40',
        };
    }
  };

  const theme = getThemeClasses(guidance.color);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-200/80 my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className={`px-6 py-5 ${theme.banner} relative flex items-start justify-between gap-4`}>
          <div>
            <span className="inline-block rounded-md bg-white/20 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-white">
              {guidance.tag}
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-black tracking-tight leading-snug">
              {guidance.title}
            </h3>
            <p className="mt-0.5 text-xs sm:text-sm font-medium opacity-90">
              {guidance.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup petunjuk"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="max-h-[75vh] overflow-y-auto px-6 py-6 space-y-6 text-sm text-slate-700">
          {/* Main Description */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200/70 p-4">
            <p className="text-sm font-semibold text-slate-800 leading-relaxed">
              {guidance.description}
            </p>
          </div>

          {/* Requirements (Ketentuan) */}
          {guidance.requirements && guidance.requirements.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3">
                <FileCheck2 className={`h-4 w-4 ${theme.bullet}`} />
                <span>Ketentuan Pelaksanaan</span>
              </h4>
              <ul className="space-y-2">
                {guidance.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                    <span className={`font-black text-sm ${theme.bullet}`}>•</span>
                    <span className="leading-snug">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Content Points (Materi Isi) */}
          {guidance.contentPoints && guidance.contentPoints.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2.5">
                Materi / Konten Yang Harus Termuat:
              </h4>
              <ul className="grid gap-2 sm:grid-cols-2 text-xs font-medium text-slate-700">
                {guidance.contentPoints.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-slate-200/60 shadow-2xs">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700 text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Assessment Criteria (Kriteria Penilaian) */}
          {guidance.criteria && guidance.criteria.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3">
                <Award className={`h-4 w-4 ${theme.bullet}`} />
                <span>Kriteria Penilaian</span>
              </h4>
              <div className="grid gap-2 sm:grid-cols-2">
                {guidance.criteria.map((crit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-2 rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs"
                  >
                    <span className="text-xs font-semibold text-slate-800">{crit.label}</span>
                    {crit.percentage && (
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-extrabold text-sky-700">
                        {crit.percentage}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tips Box */}
          {guidance.tips && guidance.tips.length > 0 && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wide mb-2">
                <Lightbulb className="h-4 w-4 text-amber-600" />
                <span>Tips Agar Hasil Maksimal</span>
              </div>
              <ul className="space-y-1.5 text-xs font-medium text-amber-900/90 leading-relaxed">
                {guidance.tips.map((tip, idx) => (
                  <li key={idx}>💡 {tip}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Motto / Inspirational Note */}
          {guidance.motto && (
            <div className="rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border border-sky-100 p-4 text-xs italic text-slate-700 leading-relaxed">
              {guidance.motto}
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/80 px-6 py-4">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-slate-500" />
                  <span>Salin Petunjuk</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {guidance.submissionLink ? (
              <a
                href={guidance.submissionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-colors"
              >
                <span>{guidance.submissionLabel || 'Unggah Tugas'}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-xl bg-slate-900 hover:bg-slate-800 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-colors"
              >
                Tutup Arahan
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
