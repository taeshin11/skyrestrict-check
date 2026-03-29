import { AircraftState, OpenSkyResponse } from '@/types';

const OPENSKY_BASE_URL = 'https://opensky-network.org/api';
const CACHE_DURATION = 15000; // 15 seconds

interface CacheEntry {
  data: AircraftState[];
  timestamp: number;
}

let cache: CacheEntry | null = null;

function parseAircraftStates(response: OpenSkyResponse): AircraftState[] {
  if (!response.states) return [];

  return response.states.map((state) => ({
    icao24: state[0] as string,
    callsign: (state[1] as string)?.trim() || null,
    originCountry: state[2] as string,
    longitude: state[5] as number | null,
    latitude: state[6] as number | null,
    baroAltitude: state[7] as number | null,
    velocity: state[9] as number | null,
    trueTrack: state[10] as number | null,
    onGround: state[8] as boolean,
    geoAltitude: state[13] as number | null,
  }));
}

export async function fetchAircraftInBounds(
  lamin: number,
  lomin: number,
  lamax: number,
  lomax: number
): Promise<AircraftState[]> {
  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return cache.data;
  }

  try {
    const url = `${OPENSKY_BASE_URL}/states/all?lamin=${lamin}&lomin=${lomin}&lamax=${lamax}&lomax=${lomax}`;
    const response = await fetch(url, { next: { revalidate: 15 } });

    if (!response.ok) {
      if (cache) return cache.data;
      throw new Error(`OpenSky API error: ${response.status}`);
    }

    const data: OpenSkyResponse = await response.json();
    const aircraft = parseAircraftStates(data);

    cache = { data: aircraft, timestamp: Date.now() };
    return aircraft;
  } catch (error) {
    if (cache) return cache.data;
    console.error('OpenSky fetch error:', error);
    return [];
  }
}

export function getAltitudeColor(altitude: number | null): string {
  if (altitude === null) return '#6B7280';
  if (altitude < 3000) return '#3B82F6'; // blue - low
  if (altitude < 10000) return '#10B981'; // green - mid
  return '#EF4444'; // red - high
}
