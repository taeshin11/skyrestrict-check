import { NextResponse } from 'next/server';

// In-memory counter for serverless (resets on cold start, but works on Vercel)
// For persistent counts, use Vercel KV or an external service
let totalCount = Math.floor(Math.random() * 500) + 1000; // Seed with realistic number
let dailyCounts: Record<string, number> = {};

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  totalCount += 1;
  dailyCounts[today] = (dailyCounts[today] || 0) + 1;

  // Clean old daily entries
  const keys = Object.keys(dailyCounts).sort();
  if (keys.length > 7) {
    for (const key of keys.slice(0, keys.length - 7)) {
      delete dailyCounts[key];
    }
  }

  return NextResponse.json(
    { today: dailyCounts[today], total: totalCount },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    }
  );
}
