import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), '.visitor-count.json');

interface CounterData {
  total: number;
  daily: Record<string, number>;
}

async function readCounter(): Promise<CounterData> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { total: 0, daily: {} };
  }
}

async function writeCounter(data: CounterData): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(data));
}

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  const counter = await readCounter();

  counter.total += 1;
  counter.daily[today] = (counter.daily[today] || 0) + 1;

  // Clean up old daily entries (keep last 30 days)
  const keys = Object.keys(counter.daily).sort();
  if (keys.length > 30) {
    for (const key of keys.slice(0, keys.length - 30)) {
      delete counter.daily[key];
    }
  }

  await writeCounter(counter);

  return NextResponse.json({
    today: counter.daily[today],
    total: counter.total,
  });
}
