'use client';

import { useState, useMemo } from 'react';
import { getNotams, searchNotams, sortNotams } from '@/lib/notam';
import NotamCard from './NotamCard';
import type { Dictionary } from '@/i18n/getDictionary';

const ITEMS_PER_PAGE = 10;

interface NotamFeedProps {
  dict: Dictionary;
}

export default function NotamFeed({ dict }: NotamFeedProps) {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'region' | 'severity'>('severity');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [page, setPage] = useState(1);
  const t = dict.notamFeed;

  const filteredNotams = useMemo(() => {
    let results = query ? searchNotams(query) : getNotams();
    if (severityFilter !== 'all') {
      results = results.filter((n) => n.severity === severityFilter);
    }
    return sortNotams(results, sortBy);
  }, [query, sortBy, severityFilter]);

  const totalPages = Math.ceil(filteredNotams.length / ITEMS_PER_PAGE);
  const paginatedNotams = filteredNotams.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1); }}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#1A202C] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'newest' | 'region' | 'severity')}
          className="px-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#1A202C] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
        >
          <option value="severity">{t.sortSeverity}</option>
          <option value="newest">{t.sortNewest}</option>
          <option value="region">{t.sortRegion}</option>
        </select>
        <select
          value={severityFilter}
          onChange={(e) => { setSeverityFilter(e.target.value); setPage(1); }}
          className="px-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#1A202C] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
        >
          <option value="all">{t.allSeverities}</option>
          <option value="critical">{t.critical}</option>
          <option value="high">{t.high}</option>
          <option value="medium">{t.medium}</option>
          <option value="low">{t.low}</option>
        </select>
      </div>

      <p className="text-sm text-[#64748B] mb-4">
        {t.found.replace('{count}', String(filteredNotams.length))}
      </p>

      <div className="space-y-4">
        {paginatedNotams.map((notam) => (
          <NotamCard key={notam.id} notam={notam} dict={dict} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1.5 rounded-lg border border-[#E2E8F0] text-sm hover:bg-[#F8F9FA] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {t.previous}
          </button>
          <span className="text-sm text-[#64748B]">
            {t.pageOf.replace('{page}', String(page)).replace('{total}', String(totalPages))}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1.5 rounded-lg border border-[#E2E8F0] text-sm hover:bg-[#F8F9FA] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {t.next}
          </button>
        </div>
      )}
    </div>
  );
}
