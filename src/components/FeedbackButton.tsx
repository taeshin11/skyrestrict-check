'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import type { Dictionary } from '@/i18n/getDictionary';

interface FeedbackButtonProps {
  dict: Dictionary;
}

export default function FeedbackButton({ dict }: FeedbackButtonProps) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('suggestion');

  const t = dict.feedback;

  const handleSend = () => {
    const typeLabel = type === 'suggestion' ? t.suggestion : type === 'bug' ? t.bugReport : t.contentRequest;
    const subject = encodeURIComponent(`[${typeLabel}] SkyRestrict Check Feedback`);
    const bodyParts = [];
    bodyParts.push(message);
    if (email) bodyParts.push(`\n\nReply to: ${email}`);
    bodyParts.push(`\n\n---\nSent from SkyRestrict Check (${new Date().toISOString().split('T')[0]})`);
    const body = encodeURIComponent(bodyParts.join(''));
    window.location.href = `mailto:taeshinkim11@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => { setSent(false); setOpen(false); setMessage(''); setEmail(''); }, 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] w-80 overflow-hidden">
          <div className="bg-gradient-to-r from-[#1A202C] to-[#2D3748] px-5 py-3 flex items-center justify-between">
            <h3 className="font-bold text-sm text-white">{t.title}</h3>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white text-xl leading-none">&times;</button>
          </div>
          <div className="p-5">
            {sent ? (
              <div className="text-center py-4">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-medium text-[#1A202C]">{t.thanks}</p>
              </div>
            ) : (
              <>
                <div className="flex gap-2 mb-3">
                  {(['suggestion', 'bug', 'content'] as const).map((tp) => (
                    <button
                      key={tp}
                      onClick={() => setType(tp)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        type === tp
                          ? 'bg-[#3B82F6] text-white'
                          : 'bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0]'
                      }`}
                    >
                      {tp === 'suggestion' ? t.suggestion : tp === 'bug' ? t.bugReport : t.contentRequest}
                    </button>
                  ))}
                </div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.placeholder}
                  rows={3}
                  className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] text-sm text-[#1A202C] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent resize-none mb-3"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] text-sm text-[#1A202C] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent mb-3"
                />
                <Button
                  onClick={handleSend}
                  disabled={!message.trim()}
                  size="sm"
                  className="w-full"
                >
                  {t.send}
                </Button>
                <p className="text-[10px] text-[#94A3B8] mt-2 text-center">{t.hint}</p>
              </>
            )}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="group w-12 h-12 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6]"
        aria-label={t.ariaLabel}
        title={t.ariaLabel}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
}
