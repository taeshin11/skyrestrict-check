import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1A202C 0%, #2D3748 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 24,
          }}
        >
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
            <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <span style={{ fontSize: 48, fontWeight: 700, color: '#F1F5F9' }}>
            SkyRestrict Check
          </span>
        </div>
        <span style={{ fontSize: 24, color: '#94A3B8', maxWidth: 600, textAlign: 'center' }}>
          Real-time No-Fly Zone & Restricted Airspace Map
        </span>
        <div
          style={{
            display: 'flex',
            gap: 32,
            marginTop: 40,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 36, fontWeight: 700, color: '#EF4444' }}>12</span>
            <span style={{ fontSize: 14, color: '#94A3B8' }}>Active Zones</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 36, fontWeight: 700, color: '#F59E0B' }}>13</span>
            <span style={{ fontSize: 14, color: '#94A3B8' }}>NOTAMs</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 36, fontWeight: 700, color: '#3B82F6' }}>Live</span>
            <span style={{ fontSize: 14, color: '#94A3B8' }}>Aircraft</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
