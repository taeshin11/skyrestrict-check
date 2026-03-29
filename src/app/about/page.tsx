import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'About Us — SkyRestrict Check | No-Fly Zone Tracker',
  description: 'Learn about SkyRestrict Check, the free real-time no-fly zone and restricted airspace tracker built for aviation enthusiasts, travelers, and journalists.',
  keywords: 'about SkyRestrict Check, no-fly zone tracker, airspace restriction tool, aviation safety, NOTAM tracker',
  openGraph: {
    title: 'About SkyRestrict Check',
    description: 'The free tool for tracking global no-fly zones and restricted airspace in real time.',
    type: 'website',
    url: 'https://skyrestrict-check.vercel.app/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#1A202C] mb-8">About SkyRestrict Check</h1>

        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">What Is SkyRestrict Check?</h2>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              SkyRestrict Check is a free, open-source web application designed to visualize global no-fly zones,
              restricted airspace, and active NOTAM (Notice to Air Missions) alerts on an interactive map. Our mission
              is to make critical aviation safety information accessible to everyone — not just professional pilots and
              air traffic controllers.
            </p>
            <p>
              In a world where geopolitical conflicts, military exercises, and security threats can suddenly close
              entire regions of airspace, having a single dashboard to monitor these restrictions is invaluable. Whether
              you are a frequent traveler wondering if your flight route passes through a conflict zone, a military
              enthusiast tracking global tension hotspots, or a journalist covering aviation safety, SkyRestrict Check
              provides the data you need at a glance.
            </p>
            <p>
              Unlike expensive commercial flight-tracking services, SkyRestrict Check is completely free to use and
              requires no registration. We leverage publicly available data sources including the OpenSky Network for
              live aircraft positions and official NOTAM databases to deliver real-time information you can trust.
            </p>
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Problem We Solve</h2>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              Airspace restrictions are published through a complex web of regulatory bodies — the FAA in the United
              States, Eurocontrol in Europe, and dozens of national aviation authorities worldwide. This information is
              often buried in technical NOTAM documents written in specialized aviation shorthand that is difficult
              for non-experts to interpret.
            </p>
            <p>
              SkyRestrict Check solves this fragmentation problem by aggregating restriction data from multiple sources
              and presenting it visually on an interactive map. Each restricted zone is color-coded by severity — red
              for total no-fly zones, orange for high-risk areas where airlines are rerouting, and yellow for caution
              zones with partial restrictions. Users can click any zone to see detailed information including the
              issuing authority, effective dates, and the specific reason for the restriction.
            </p>
            <p>
              Currently, we monitor 12 major conflict and restriction zones across four continents, including Ukraine,
              North Korea, Afghanistan, Syria, Libya, Yemen, Sudan, Somalia, Ethiopia, Iran, Myanmar, and the
              Mali/Sahel region. Our NOTAM database includes 13 active notices covering these areas with real-time
              severity classifications.
            </p>
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Who Is This For?</h2>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>SkyRestrict Check serves a diverse audience of aviation-aware individuals and professionals:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Frequent Travelers</strong> — Check whether your upcoming flight path passes through or near
                restricted airspace. Understand why airlines sometimes take longer routes and how conflict zones affect
                ticket prices.
              </li>
              <li>
                <strong>Military Enthusiasts</strong> — Track global conflict zones and understand how armed conflicts
                translate into aviation restrictions. Monitor changes in airspace status as geopolitical situations
                evolve.
              </li>
              <li>
                <strong>Aviation Geeks</strong> — Watch live aircraft positions near restricted zones using our OpenSky
                Network integration. See how commercial airlines navigate around danger areas in real time.
              </li>
              <li>
                <strong>Journalists & Researchers</strong> — Use our visualization tools to understand and report on
                how conflicts affect global air travel. Our data provides context for stories about flight diversions,
                airline route changes, and airspace sovereignty disputes.
              </li>
              <li>
                <strong>Students & Educators</strong> — Learn about international aviation regulations, the NOTAM
                system, and how airspace management works in practice. Our interactive map makes abstract concepts
                tangible and engaging.
              </li>
            </ul>
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Technology Behind SkyRestrict Check</h2>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              SkyRestrict Check is built with modern web technologies to ensure fast performance, reliability, and a
              smooth user experience across all devices:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Next.js & React</strong> — Our frontend is built with Next.js, providing server-side rendering
                for fast initial page loads and excellent SEO, combined with React for a rich interactive experience.
              </li>
              <li>
                <strong>Leaflet.js Interactive Map</strong> — We use the open-source Leaflet mapping library with
                CartoDB light-theme tiles to render our interactive world map. GeoJSON polygons define each restricted
                zone with precise geographic coordinates.
              </li>
              <li>
                <strong>OpenSky Network API</strong> — Real-time aircraft position data is sourced from the OpenSky
                Network, a free and open research project that provides live air traffic surveillance data collected
                by a global network of ADS-B receivers.
              </li>
              <li>
                <strong>NOTAM Data Aggregation</strong> — We curate and maintain a database of conflict-zone NOTAMs
                from official aviation authority sources, presenting them in a searchable, human-readable format.
              </li>
            </ul>
            <p>
              The entire application is hosted on Vercel&apos;s global edge network, ensuring low latency access from
              anywhere in the world. Our codebase is open source and available on GitHub.
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Contact Us</h2>
          <p className="text-[#475569] leading-relaxed">
            Have questions, suggestions, or want to report an issue? We would love to hear from you.
            Reach out to us at{' '}
            <a href="mailto:taeshinkim11@gmail.com" className="text-[#3B82F6] hover:underline font-medium">
              taeshinkim11@gmail.com
            </a>
            . You can also submit zone reports directly through our{' '}
            <a href="/#report-section" className="text-[#3B82F6] hover:underline font-medium">
              Report Form
            </a>
            .
          </p>
        </Card>
      </main>
      <Footer />
    </>
  );
}
