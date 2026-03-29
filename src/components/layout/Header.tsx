'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1A202C] text-[#F1F5F9] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span className="text-xl font-bold tracking-tight">SkyRestrict Check</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button onClick={() => scrollTo('map-section')} className="hover:text-[#3B82F6] transition-colors focus:outline-none focus:text-[#3B82F6]">
              Map
            </button>
            <button onClick={() => scrollTo('notam-section')} className="hover:text-[#3B82F6] transition-colors focus:outline-none focus:text-[#3B82F6]">
              NOTAMs
            </button>
            <button onClick={() => scrollTo('report-section')} className="hover:text-[#3B82F6] transition-colors focus:outline-none focus:text-[#3B82F6]">
              Report
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#1A202C] border-t border-white/10 px-4 py-3 space-y-2">
          <button onClick={() => scrollTo('map-section')} className="block w-full text-left py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
            Map
          </button>
          <button onClick={() => scrollTo('notam-section')} className="block w-full text-left py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
            NOTAMs
          </button>
          <button onClick={() => scrollTo('report-section')} className="block w-full text-left py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
            Report
          </button>
        </nav>
      )}
    </header>
  );
}
