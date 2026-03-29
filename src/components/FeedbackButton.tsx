'use client';

import { useState } from 'react';

export default function FeedbackButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 bg-white rounded-xl shadow-lg border border-[#E2E8F0] p-4 w-72 animate-in">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-sm text-[#1A202C]">Send Feedback</h3>
            <button onClick={() => setOpen(false)} className="text-[#94A3B8] hover:text-[#1A202C] text-lg leading-none">&times;</button>
          </div>
          <p className="text-xs text-[#64748B] mb-3">
            Have a suggestion or found an issue? Let us know!
          </p>
          <a
            href="mailto:taeshinkim11@gmail.com?subject=SkyRestrict%20Check%20Feedback&body=Hi%2C%0A%0AI%20have%20the%20following%20feedback%3A%0A%0A"
            className="block w-full text-center px-4 py-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium rounded-lg transition-colors"
          >
            Open Email
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6]"
        aria-label="Send feedback"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
}
