'use client';

import { useEffect, useState, useCallback } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { AircraftState } from '@/types';
import { getAltitudeColor } from '@/lib/opensky';

function createAircraftIcon(heading: number | null, color: string) {
  const rotation = heading ?? 0;
  return L.divIcon({
    className: 'aircraft-icon',
    html: `<svg width="20" height="20" viewBox="0 0 24 24" style="transform: rotate(${rotation}deg); filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));" fill="${color}">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
    </svg>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
}

export default function AircraftLayer() {
  const [aircraft, setAircraft] = useState<AircraftState[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const map = useMap();

  const fetchAircraft = useCallback(async () => {
    const bounds = map.getBounds();
    const zoom = map.getZoom();

    // Only fetch at reasonable zoom levels
    if (zoom < 4) {
      setAircraft([]);
      return;
    }

    setLoading(true);
    try {
      const url = `/api/aircraft?lamin=${bounds.getSouth()}&lomin=${bounds.getWest()}&lamax=${bounds.getNorth()}&lomax=${bounds.getEast()}`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setAircraft(data.aircraft || []);
        setLastUpdate(new Date());
      }
    } catch (error) {
      console.error('Aircraft fetch error:', error);
    } finally {
      setLoading(false);
    }
  }, [map]);

  useEffect(() => {
    fetchAircraft();
    const interval = setInterval(fetchAircraft, 15000);
    return () => clearInterval(interval);
  }, [fetchAircraft]);

  useEffect(() => {
    map.on('moveend', fetchAircraft);
    return () => {
      map.off('moveend', fetchAircraft);
    };
  }, [map, fetchAircraft]);

  return (
    <>
      {/* Aircraft count badge */}
      <div className="leaflet-top leaflet-right" style={{ marginTop: 10, marginRight: 10 }}>
        <div className="leaflet-control bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md text-xs font-medium text-[#1A202C]">
          {loading ? (
            <span className="text-[#64748B]">Loading...</span>
          ) : (
            <>
              <span className="text-[#3B82F6] font-bold">{aircraft.length}</span>{' '}
              aircraft in view
              {lastUpdate && (
                <span className="text-[#94A3B8] ml-1">
                  ({lastUpdate.toLocaleTimeString()})
                </span>
              )}
            </>
          )}
        </div>
      </div>

      {aircraft
        .filter((a) => a.latitude !== null && a.longitude !== null)
        .map((a) => (
          <Marker
            key={a.icao24}
            position={[a.latitude!, a.longitude!]}
            icon={createAircraftIcon(a.trueTrack, getAltitudeColor(a.baroAltitude))}
          >
            <Popup>
              <div style={{ minWidth: 180, fontFamily: 'Inter, sans-serif' }}>
                <h3 style={{ fontWeight: 700, fontSize: 14 }}>
                  {a.callsign || a.icao24}
                </h3>
                <p style={{ color: '#64748B', fontSize: 12, margin: '4px 0' }}>
                  <strong>Country:</strong> {a.originCountry}
                </p>
                <p style={{ color: '#64748B', fontSize: 12 }}>
                  <strong>Altitude:</strong>{' '}
                  {a.baroAltitude ? `${Math.round(a.baroAltitude)}m` : 'N/A'}
                </p>
                <p style={{ color: '#64748B', fontSize: 12 }}>
                  <strong>Speed:</strong>{' '}
                  {a.velocity ? `${Math.round(a.velocity)} m/s` : 'N/A'}
                </p>
                <p style={{ color: '#64748B', fontSize: 12 }}>
                  <strong>Heading:</strong>{' '}
                  {a.trueTrack ? `${Math.round(a.trueTrack)}°` : 'N/A'}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
    </>
  );
}
