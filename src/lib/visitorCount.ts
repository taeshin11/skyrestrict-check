import { VisitorCount } from '@/types';

export async function getVisitorCount(): Promise<VisitorCount> {
  try {
    const response = await fetch('/api/visitors', { cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch visitor count');
    return await response.json();
  } catch {
    return { today: 0, total: 0 };
  }
}
