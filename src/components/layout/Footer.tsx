'use client';

import { useEffect, useState } from 'react';
import { VisitorCount } from '@/types';

export default function Footer() {
  const [visitors, setVisitors] = useState<VisitorCount>({ today: 0, total: 0 });

  useEffect(() => {
    fetch('/api/visitors')
      .then((res) => res.json())
      .then((data) => setVisitors(data))
      .catch(() => {});
  }, []);

  const formatNumber = (n: number) =>
    new Intl.NumberFormat('en-US').format(n);

  return (
    <footer className="bg-[#1A202C] text-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-6 h-6 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="font-bold">SkyRestrict Check</span>
            </div>
            <p className="text-sm text-[#94A3B8]">
              Real-time restricted airspace & no-fly zone visualization for aviation enthusiasts and travelers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-[#94A3B8]">Resources</h3>
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

          {/* Visitor counter */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-[#94A3B8]">Site Stats</h3>
            <div className="flex gap-6 text-sm text-[#94A3B8]">
              <div>
                <span className="block text-lg font-bold text-[#F1F5F9]">{formatNumber(visitors.today)}</span>
                Today
              </div>
              <div>
                <span className="block text-lg font-bold text-[#F1F5F9]">{formatNumber(visitors.total)}</span>
                Total Visits
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-[#64748B]">
          &copy; {new Date().getFullYear()} SkyRestrict Check. Data for informational purposes only. Not for flight planning.
        </div>
      </div>
    </footer>
  );
}
