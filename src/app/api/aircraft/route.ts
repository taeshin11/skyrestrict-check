import { NextRequest, NextResponse } from 'next/server';
import { fetchAircraftInBounds } from '@/lib/opensky';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const lamin = parseFloat(searchParams.get('lamin') || '0');
  const lomin = parseFloat(searchParams.get('lomin') || '0');
  const lamax = parseFloat(searchParams.get('lamax') || '0');
  const lomax = parseFloat(searchParams.get('lomax') || '0');

  if (isNaN(lamin) || isNaN(lomin) || isNaN(lamax) || isNaN(lomax)) {
    return NextResponse.json({ error: 'Invalid bounds' }, { status: 400 });
  }

  const aircraft = await fetchAircraftInBounds(lamin, lomin, lamax, lomax);

  return NextResponse.json(
    { aircraft, count: aircraft.length },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=15, stale-while-revalidate=30',
      },
    }
  );
}
