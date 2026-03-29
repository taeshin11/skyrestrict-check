// TypeScript interfaces for SkyRestrict Check

export interface NoFlyZone {
  id: string;
  name: string;
  region: string;
  authority: string;
  severity: 'total' | 'high-risk' | 'caution';
  effectiveFrom: string;
  effectiveTo: string | null;
  reason: string;
  geometry: GeoJSON.Feature;
}

export interface NotamEntry {
  id: string;
  notamId: string;
  region: string;
  fir: string;
  type: string;
  effectiveFrom: string;
  effectiveTo: string;
  maxFL: string;
  description: string;
  fullText: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
}

export interface AircraftState {
  icao24: string;
  callsign: string | null;
  originCountry: string;
  longitude: number | null;
  latitude: number | null;
  baroAltitude: number | null;
  velocity: number | null;
  trueTrack: number | null;
  onGround: boolean;
  geoAltitude: number | null;
}

export interface OpenSkyResponse {
  time: number;
  states: (string | number | boolean | null)[][] | null;
}

export interface VisitorCount {
  today: number;
  total: number;
}

export interface ReportFormData {
  zoneName: string;
  region: string;
  description: string;
  reporterEmail: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  source: string;
}
