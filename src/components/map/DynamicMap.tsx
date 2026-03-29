'use client';

import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('./MapContainer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-xl bg-[#EDF2F7] flex items-center justify-center">
      <div className="text-center">
        <svg className="animate-spin h-8 w-8 text-[#3B82F6] mx-auto mb-3" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <p className="text-sm text-[#64748B]">Loading map...</p>
      </div>
    </div>
  ),
});

export default function DynamicMap() {
  return <MapContainer />;
}
