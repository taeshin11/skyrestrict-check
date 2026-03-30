'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/i18n/config';
import { i18n, localeNames } from '@/i18n/config';
import type { Dictionary } from '@/i18n/getDictionary';

interface HeaderProps {
  lang: Locale;
  dict: Dictionary;
}

export default function Header({ lang, dict }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;

  const scrollTo = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/${lang}/#${id}`;
    }
    setMenuOpen(false);
  };

  const switchLocale = (newLang: string) => {
    // Replace current locale prefix with new one
    const pathWithoutLocale = pathname.replace(`/${lang}`, '') || '/';
    window.location.href = `/${newLang}${pathWithoutLocale}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1A202C] text-[#F1F5F9] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${lang}`} className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <svg className="w-8 h-8 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span className="text-xl font-bold tracking-tight">SkyRestrict Check</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button onClick={() => scrollTo('map-section')} className="hover:text-[#3B82F6] transition-colors focus:outline-none focus:text-[#3B82F6]">
              {dict.nav.map}
            </button>
            <button onClick={() => scrollTo('notam-section')} className="hover:text-[#3B82F6] transition-colors focus:outline-none focus:text-[#3B82F6]">
              {dict.nav.notams}
            </button>
            <Link href={`/${lang}/about`} className="hover:text-[#3B82F6] transition-colors">{dict.nav.about}</Link>
            <Link href={`/${lang}/how-to-use`} className="hover:text-[#3B82F6] transition-colors">{dict.nav.faq}</Link>

            {/* Language Picker */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-white/10 transition-colors text-xs"
                aria-label={dict.languagePicker.label}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                {localeNames[lang]}
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-[#2D3748] rounded-lg shadow-xl border border-white/10 py-1 min-w-[140px] z-50">
                  {i18n.locales.map((l) => (
                    <button
                      key={l}
                      onClick={() => { switchLocale(l); setLangOpen(false); }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                        l === lang ? 'text-[#3B82F6] font-semibold' : 'text-[#F1F5F9]'
                      }`}
                    >
                      {localeNames[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
            {dict.nav.map}
          </button>
          <button onClick={() => scrollTo('notam-section')} className="block w-full text-left py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
            {dict.nav.notams}
          </button>
          <Link href={`/${lang}/about`} onClick={() => setMenuOpen(false)} className="block w-full py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
            {dict.nav.about}
          </Link>
          <Link href={`/${lang}/how-to-use`} onClick={() => setMenuOpen(false)} className="block w-full py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
            {dict.nav.faq}
          </Link>
          {/* Mobile Language Picker */}
          <div className="border-t border-white/10 pt-2 mt-2">
            <p className="px-3 py-1 text-xs text-[#94A3B8] uppercase tracking-wider">{dict.languagePicker.label}</p>
            <div className="grid grid-cols-2 gap-1">
              {i18n.locales.map((l) => (
                <button
                  key={l}
                  onClick={() => { switchLocale(l); setMenuOpen(false); }}
                  className={`text-left py-2 px-3 rounded-lg text-sm hover:bg-white/10 transition-colors ${
                    l === lang ? 'text-[#3B82F6] font-semibold' : ''
                  }`}
                >
                  {localeNames[l]}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
