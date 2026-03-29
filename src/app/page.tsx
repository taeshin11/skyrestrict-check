import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AdBanner from '@/components/layout/AdBanner';
import DynamicMap from '@/components/map/DynamicMap';
import NotamFeed from '@/components/notam/NotamFeed';
import ReportForm from '@/components/ReportForm';
import Card from '@/components/ui/Card';
import { getNotams } from '@/lib/notam';
import noFlyZonesData from '@/data/noFlyZones.json';

export default function Home() {
  const notams = getNotams();
  const zones = noFlyZonesData.features;
  const totalZones = zones.length;
  const criticalNotams = notams.filter((n) => n.severity === 'critical').length;
  const activeRegions = new Set(notams.map((n) => n.region)).size;

  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1A202C] to-[#2D3748] text-white py-16 md:py-24">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#3B82F6] rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#EF4444] rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Track No-Fly Zones{' '}
              <span className="text-[#3B82F6]">in Real Time</span>
            </h1>
            <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-8">
              Visualize conflict-driven airspace restrictions, NOTAM alerts, and live aircraft
              density on an interactive map. Free for everyone.
            </p>
            <button
              onClick={undefined}
              className="inline-flex items-center px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-xl transition-colors shadow-lg shadow-blue-500/25"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Explore the Map
            </button>
          </div>
        </section>

        {/* Ad Banner - Top */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdBanner
            adKey={process.env.NEXT_PUBLIC_ADSTERRA_KEY_TOP}
            width={728}
            height={90}
            className="hidden md:flex"
          />
          <AdBanner
            adKey={process.env.NEXT_PUBLIC_ADSTERRA_KEY_TOP}
            width={320}
            height={50}
            className="md:hidden"
          />
        </div>

        {/* Interactive Map */}
        <section id="map-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Global Airspace Restrictions</h2>
          <DynamicMap />
        </section>

        {/* Info Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1A202C]">{totalZones}</p>
                  <p className="text-sm text-[#64748B]">Active Zones</p>
                </div>
              </div>
              <p className="text-sm text-[#64748B]">
                Monitored no-fly zones and restricted airspace areas worldwide.
              </p>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1A202C]">{criticalNotams}</p>
                  <p className="text-sm text-[#64748B]">Critical NOTAMs</p>
                </div>
              </div>
              <p className="text-sm text-[#64748B]">
                Active critical-severity NOTAMs requiring immediate attention.
              </p>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1A202C]">{activeRegions}</p>
                  <p className="text-sm text-[#64748B]">Affected Regions</p>
                </div>
              </div>
              <p className="text-sm text-[#64748B]">
                Distinct regions with active airspace restrictions or advisories.
              </p>
            </Card>
          </div>
        </section>

        {/* NOTAM Feed */}
        <section id="notam-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">NOTAM Alerts</h2>
          <p className="text-[#64748B] mb-6">
            Active Notices to Air Missions for conflict zones and restricted airspace.
          </p>
          <NotamFeed />
        </section>

        {/* Report Form */}
        <section id="report-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
            <h2 className="text-2xl font-bold text-[#1A202C] mb-2">Report a Zone</h2>
            <p className="text-[#64748B] mb-6">
              Know about an unreported no-fly zone or restriction? Help the community by submitting a report.
            </p>
            <ReportForm />
          </Card>
        </section>

        {/* Ad Banner - Bottom */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdBanner
            adKey={process.env.NEXT_PUBLIC_ADSTERRA_KEY_BOTTOM}
            width={728}
            height={90}
            className="hidden md:flex"
          />
          <AdBanner
            adKey={process.env.NEXT_PUBLIC_ADSTERRA_KEY_BOTTOM}
            width={320}
            height={100}
            className="md:hidden"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
