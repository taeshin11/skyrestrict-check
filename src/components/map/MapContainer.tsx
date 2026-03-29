'use client';

import { MapContainer as LeafletMapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import NoFlyZoneLayer from './NoFlyZoneLayer';
import AircraftLayer from './AircraftLayer';
import MapLegend from './MapLegend';
import noFlyZonesData from '@/data/noFlyZones.json';
import { useState } from 'react';

export default function MapContainerComponent() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const el = document.getElementById('map-wrapper');
    if (!el) return;
    if (!isFullscreen) {
      el.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div id="map-wrapper" className="relative w-full rounded-xl overflow-hidden shadow-md border border-[#E2E8F0]">
      <LeafletMapContainer
        center={[30, 40]}
        zoom={3}
        zoomControl={false}
        className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh]"
        scrollWheelZoom={true}
        attributionControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <ZoomControl position="topleft" />
        <NoFlyZoneLayer data={noFlyZonesData as unknown as GeoJSON.FeatureCollection} />
        <AircraftLayer />
      </LeafletMapContainer>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 z-[1000]">
        <MapLegend />
      </div>

      {/* Fullscreen button */}
      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 z-[1000] bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
        aria-label="Toggle fullscreen"
      >
        <svg className="w-5 h-5 text-[#1A202C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isFullscreen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          )}
        </svg>
      </button>
    </div>
  );
}
