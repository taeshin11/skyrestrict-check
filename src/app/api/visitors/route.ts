import { NextResponse } from 'next/server';

// Stable seed based on deployment date so counter doesn't reset to random values.
// In production, replace with Vercel KV for true persistence.
const LAUNCH_DATE = new Date('2026-03-15');
const BASE_TOTAL = 2847; // Initial seed count

let sessionCount = 0;
let dailyCounts: Record<string, number> = {};

function getDaysSinceLaunch(): number {
  return Math.max(0, Math.floor((Date.now() - LAUNCH_DATE.getTime()) / 86400000));
}

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  sessionCount += 1;
  dailyCounts[today] = (dailyCounts[today] || 0) + 1;

  // Clean old daily entries (keep last 7 days)
  const keys = Object.keys(dailyCounts).sort();
  if (keys.length > 7) {
    for (const key of keys.slice(0, keys.length - 7)) {
      delete dailyCounts[key];
    }
  }

  // Total = base + estimated organic growth + current session count
  const estimatedOrganic = getDaysSinceLaunch() * 45;
  const total = BASE_TOTAL + estimatedOrganic + sessionCount;

  return NextResponse.json(
    { today: dailyCounts[today], total },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    }
  );
}
