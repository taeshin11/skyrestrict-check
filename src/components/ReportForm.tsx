'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import type { Dictionary } from '@/i18n/getDictionary';

const REGIONS = [
  'Ukraine', 'Iraq', 'Syria', 'Iran', 'North Korea', 'Libya', 'Yemen',
  'Ethiopia', 'Somalia', 'Afghanistan', 'Myanmar', 'Sudan', 'Mali', 'Other',
];

interface ReportFormProps {
  dict: Dictionary;
}

export default function ReportForm({ dict }: ReportFormProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const t = dict.reportForm;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;

    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          body: JSON.stringify({ ...data, source: 'web-form' }),
          headers: { 'Content-Type': 'application/json' },
          mode: 'no-cors',
        });
      }
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="zoneName" className="block text-sm font-medium text-[#1A202C] mb-1">
            {t.zoneName}
          </label>
          <input
            type="text"
            id="zoneName"
            name="zoneName"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#1A202C] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
            placeholder={t.zoneNamePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="region" className="block text-sm font-medium text-[#1A202C] mb-1">
            {t.region}
          </label>
          <select
            id="region"
            name="region"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#1A202C] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
          >
            <option value="">{t.selectRegion}</option>
            {REGIONS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-[#1A202C] mb-1">
          {t.description}
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={3}
          className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#1A202C] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent resize-none"
          placeholder={t.descriptionPlaceholder}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="reporterEmail" className="block text-sm font-medium text-[#1A202C] mb-1">
            {t.email} <span className="text-[#94A3B8]">{t.emailOptional}</span>
          </label>
          <input
            type="email"
            id="reporterEmail"
            name="reporterEmail"
            className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#1A202C] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
            placeholder={t.emailPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="severity" className="block text-sm font-medium text-[#1A202C] mb-1">
            {t.severity}
          </label>
          <select
            id="severity"
            name="severity"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#1A202C] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" loading={loading} size="lg">
          {t.submit}
        </Button>
        {status === 'success' && (
          <span className="text-sm text-green-600 font-medium">{t.success}</span>
        )}
        {status === 'error' && (
          <span className="text-sm text-red-600 font-medium">{t.error}</span>
        )}
      </div>
    </form>
  );
}
