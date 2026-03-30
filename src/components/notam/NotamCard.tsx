'use client';

import { useState } from 'react';
import { NotamEntry } from '@/types';
import Badge from '@/components/ui/Badge';
import type { Dictionary } from '@/i18n/getDictionary';

interface NotamCardProps {
  notam: NotamEntry;
  dict: Dictionary;
}

export default function NotamCard({ notam, dict }: NotamCardProps) {
  const [expanded, setExpanded] = useState(false);
  const t = dict.notamFeed;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-amber-500 text-lg">&#9888;</span>
            <span className="font-bold text-[#1A202C] text-sm">{notam.notamId}</span>
            <Badge variant={notam.severity}>{notam.severity.toUpperCase()}</Badge>
          </div>
          <div className="space-y-1 text-sm text-[#64748B]">
            <p><strong>{t.region}:</strong> {notam.region} FIR ({notam.fir})</p>
            <p><strong>{t.type}:</strong> {notam.type}</p>
            <p><strong>{t.effective}:</strong> {notam.effectiveFrom} → {notam.effectiveTo}</p>
            <p><strong>{t.maxFL}:</strong> {notam.maxFL}</p>
          </div>
          <p className="mt-2 text-sm text-[#475569]">{notam.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-[#3B82F6] hover:text-[#2563EB] font-medium focus:outline-none focus:underline"
        >
          {expanded ? `${t.hideFullText} ▲` : `${t.viewFullText} ▼`}
        </button>
        <button
          onClick={() => {
            const text = `${notam.notamId} — ${notam.region}: ${notam.description}`;
            const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent('https://skyrestrict-check.vercel.app')}`;
            window.open(url, '_blank', 'width=600,height=400');
          }}
          className="text-xs text-[#94A3B8] hover:text-[#1DA1F2] transition-colors"
          aria-label={t.share}
        >
          {t.share}
        </button>
      </div>

      {expanded && (
        <pre className="notam-text mt-3 p-3 bg-[#F8F9FA] rounded-lg border border-[#E2E8F0] overflow-x-auto">
          {notam.fullText}
        </pre>
      )}
    </div>
  );
}
