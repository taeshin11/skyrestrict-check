'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { VisitorCount } from '@/types';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/getDictionary';

interface FooterProps {
  lang: Locale;
  dict: Dictionary;
}

export default function Footer({ lang, dict }: FooterProps) {
  const [visitors, setVisitors] = useState<VisitorCount>({ today: 0, total: 0 });

  useEffect(() => {
    fetch('/api/visitors')
      .then((res) => res.json())
      .then((data) => setVisitors(data))
      .catch(() => {});
  }, []);

  const formatNumber = (n: number) =>
    new Intl.NumberFormat(lang).format(n);

  return (
    <footer className="bg-[#1A202C] text-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-6 h-6 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="font-bold">SkyRestrict Check</span>
            </div>
            <p className="text-sm text-[#94A3B8]">{dict.footer.brand}</p>
          </div>

          {/* Site Links */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-[#94A3B8]">{dict.footer.pages}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${lang}/about`} className="hover:text-[#3B82F6] transition-colors">{dict.footer.aboutUs}</Link></li>
              <li><Link href={`/${lang}/how-to-use`} className="hover:text-[#3B82F6] transition-colors">{dict.footer.howToUse}</Link></li>
              <li><Link href={`/${lang}/privacy`} className="hover:text-[#3B82F6] transition-colors">{dict.footer.privacy}</Link></li>
              <li><Link href={`/${lang}/terms`} className="hover:text-[#3B82F6] transition-colors">{dict.footer.terms}</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-[#94A3B8]">{dict.footer.resources}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.faa.gov/air_traffic/publications/us_restrictions" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6] transition-colors">
                  FAA Restrictions
                </a>
              </li>
              <li>
                <a href="https://opensky-network.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6] transition-colors">
                  OpenSky Network
                </a>
              </li>
              <li>
                <a href="https://www.icao.int" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6] transition-colors">
                  ICAO
                </a>
              </li>
            </ul>
          </div>

          {/* Stats & Contact */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-[#94A3B8]">{dict.footer.siteStats}</h3>
            <div className="flex gap-6 text-sm text-[#94A3B8] mb-4">
              <div>
                <span className="block text-lg font-bold text-[#F1F5F9]">{formatNumber(visitors.today)}</span>
                {dict.footer.today}
              </div>
              <div>
                <span className="block text-lg font-bold text-[#F1F5F9]">{formatNumber(visitors.total)}</span>
                {dict.footer.totalVisits}
              </div>
            </div>
            <a
              href="mailto:taeshinkim11@gmail.com?subject=SkyRestrict%20Check%20Feedback"
              className="inline-flex items-center gap-1.5 text-sm text-[#94A3B8] hover:text-[#3B82F6] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {dict.footer.sendFeedback}
            </a>
            <a
              href="mailto:taeshinkim11@gmail.com?subject=SkyRestrict%20Check%20—%20Improvement%20Request"
              className="inline-flex items-center gap-1.5 text-sm text-[#94A3B8] hover:text-[#3B82F6] transition-colors mt-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              {dict.footer.suggestImprovement}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#64748B]">
          <span>&copy; {new Date().getFullYear()} SkyRestrict Check. {dict.footer.disclaimer}</span>
          <div className="flex gap-4">
            <Link href={`/${lang}/privacy`} className="hover:text-[#3B82F6] transition-colors">{dict.footer.privacyShort}</Link>
            <Link href={`/${lang}/terms`} className="hover:text-[#3B82F6] transition-colors">{dict.footer.termsShort}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
