import { ReportFormData } from '@/types';

export async function submitReport(data: ReportFormData): Promise<boolean> {
  const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn('Google Sheets webhook URL not configured');
    return false;
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      body: JSON.stringify({ ...data, source: 'web-form' }),
      headers: { 'Content-Type': 'application/json' },
      mode: 'no-cors',
    });
    return true;
  } catch (error) {
    console.error('Failed to submit report:', error);
    return false;
  }
}
