'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function FeedbackButton() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('suggestion');

  const handleSend = () => {
    const subject = encodeURIComponent(`[${type}] SkyRestrict Check Feedback`);
    const body = encodeURIComponent(message);
    window.open(`mailto:taeshinkim11@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setSent(true);
    setTimeout(() => { setSent(false); setOpen(false); setMessage(''); }, 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] w-80 overflow-hidden">
          <div className="bg-gradient-to-r from-[#1A202C] to-[#2D3748] px-5 py-3 flex items-center justify-between">
            <h3 className="font-bold text-sm text-white">Send Feedback</h3>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white text-xl leading-none">&times;</button>
          </div>
          <div className="p-5">
            {sent ? (
              <div className="text-center py-4">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-medium text-[#1A202C]">Thank you for your feedback!</p>
              </div>
            ) : (
              <>
                <div className="flex gap-2 mb-3">
                  {['suggestion', 'bug', 'content'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setType(t)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        type === t
                          ? 'bg-[#3B82F6] text-white'
                          : 'bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0]'
                      }`}
                    >
                      {t === 'suggestion' ? 'Suggestion' : t === 'bug' ? 'Bug Report' : 'Content Request'}
                    </button>
                  ))}
                </div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What would you like to see improved?"
                  rows={3}
                  className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] text-sm text-[#1A202C] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent resize-none mb-3"
                />
                <Button
                  onClick={handleSend}
                  disabled={!message.trim()}
                  size="sm"
                  className="w-full"
                >
                  Send Feedback
                </Button>
              </>
            )}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="group w-12 h-12 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6]"
        aria-label="Send feedback"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
}
