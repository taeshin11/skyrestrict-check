import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'How to Use & FAQ — SkyRestrict Check | No-Fly Zone Guide',
  description: 'Learn how to use SkyRestrict Check to track no-fly zones, read NOTAMs, and monitor live aircraft near restricted airspace. Frequently asked questions answered.',
  keywords: 'how to use no-fly zone tracker, NOTAM guide, airspace restrictions FAQ, flight safety tool, aviation map tutorial',
  openGraph: {
    title: 'How to Use SkyRestrict Check & FAQ',
    description: 'Step-by-step guide and FAQ for tracking global no-fly zones and restricted airspace.',
    type: 'website',
    url: 'https://skyrestrict-check.vercel.app/how-to-use',
  },
};

export default function HowToUsePage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#1A202C] mb-8">How to Use SkyRestrict Check</h1>

        {/* Step-by-step guide */}
        <div className="space-y-6 mb-12">
          <Card>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#3B82F6] text-white flex items-center justify-center text-xl font-bold shrink-0">
                1
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1A202C] mb-2">Explore the Interactive Map</h2>
                <p className="text-[#475569] leading-relaxed mb-3">
                  When you visit SkyRestrict Check, the interactive map is the centerpiece of the experience. It displays
                  a world view with color-coded polygons representing no-fly zones and restricted airspace areas. Use your
                  mouse wheel or pinch gestures to zoom in on regions of interest. Pan across the map by clicking and
                  dragging.
                </p>
                <p className="text-[#475569] leading-relaxed mb-3">
                  Each zone is color-coded by severity: <span className="font-semibold text-red-600">red zones</span> indicate
                  total airspace closures where no civil aviation is permitted, <span className="font-semibold text-orange-500">orange zones</span> represent
                  high-risk areas where airlines are actively rerouting flights, and <span className="font-semibold text-yellow-600">yellow zones</span> are
                  caution areas with partial restrictions or advisories.
                </p>
                <p className="text-[#475569] leading-relaxed">
                  Click on any colored zone to open a popup with detailed information including the zone name, issuing
                  authority, effective dates, and the specific reason for the restriction. If you zoom in to level 4 or higher,
                  live aircraft icons will appear showing real-time flight positions from the OpenSky Network.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#3B82F6] text-white flex items-center justify-center text-xl font-bold shrink-0">
                2
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1A202C] mb-2">Browse & Search NOTAM Alerts</h2>
                <p className="text-[#475569] leading-relaxed mb-3">
                  Scroll down to the NOTAM Alerts section to see all active Notices to Air Missions for conflict zones and
                  restricted airspace worldwide. Each NOTAM card displays the essential information: the NOTAM identifier,
                  affected region and FIR (Flight Information Region), type of restriction, effective dates, maximum flight
                  level affected, and a human-readable description.
                </p>
                <p className="text-[#475569] leading-relaxed mb-3">
                  Use the search bar to filter NOTAMs by region name, NOTAM ID, or any keyword in the description. You can
                  also sort results by severity (most critical first), by date (newest first), or alphabetically by region.
                  The severity filter dropdown lets you focus on specific risk levels — Critical, High, Medium, or Low.
                </p>
                <p className="text-[#475569] leading-relaxed">
                  Each NOTAM card has a &quot;View Full Text&quot; button that expands to show the original NOTAM text in its
                  standard aviation format, displayed in a monospace font for readability. This is the same format used by
                  pilots and dispatchers worldwide.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#3B82F6] text-white flex items-center justify-center text-xl font-bold shrink-0">
                3
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1A202C] mb-2">Submit a Zone Report</h2>
                <p className="text-[#475569] leading-relaxed mb-3">
                  If you know about an unreported no-fly zone or airspace restriction, you can help the community by
                  submitting a report through our built-in form. Fill in the zone name, select the affected region from the
                  dropdown, provide a description of the restriction, and choose the severity level.
                </p>
                <p className="text-[#475569] leading-relaxed">
                  Your email address is optional but helpful if we need to follow up for additional details. All submissions
                  are reviewed before being added to our database. Community reports help us maintain comprehensive coverage
                  and catch restrictions that may not yet be reflected in official databases.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ */}
        <h2 className="text-3xl font-bold text-[#1A202C] mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <h3 className="text-lg font-bold text-[#1A202C] mb-2">What is a no-fly zone?</h3>
            <p className="text-[#475569] leading-relaxed">
              A no-fly zone is a designated area of airspace where aircraft are prohibited from flying. These zones are
              established by national governments or international organizations for various reasons including armed
              conflicts, military exercises, natural disasters, political events, or security threats. No-fly zones can
              be temporary (lasting hours or days) or permanent, and they may apply to all aircraft or only to specific
              categories such as civilian flights. Violating a no-fly zone can result in the aircraft being intercepted
              by military jets, and in extreme cases, shot down.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#1A202C] mb-2">What is a NOTAM and why should I care?</h3>
            <p className="text-[#475569] leading-relaxed">
              NOTAM stands for Notice to Air Missions (formerly &quot;Notice to Airmen&quot;). It is an official notice filed with
              an aviation authority to alert aircraft pilots of potential hazards along a flight route or at a specific
              location. NOTAMs cover everything from temporary airspace restrictions and airport closures to new obstacles
              near runways and changes in navigation aids. For travelers, understanding NOTAMs can explain why your
              flight was delayed, rerouted, or cancelled. For aviation enthusiasts, NOTAMs provide real-time insight
              into how global events affect air traffic management.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#1A202C] mb-2">Is the aircraft tracking data real-time?</h3>
            <p className="text-[#475569] leading-relaxed">
              Yes, our aircraft position data comes from the OpenSky Network, which collects real-time ADS-B
              (Automatic Dependent Surveillance-Broadcast) signals from aircraft worldwide. The data refreshes every
              15 seconds. However, please note that not all aircraft broadcast ADS-B signals, and coverage may be
              limited in remote oceanic regions or areas without ground-based receivers. The aircraft tracking feature
              activates when you zoom into the map at level 4 or higher to avoid overwhelming the display with thousands
              of global flights.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#1A202C] mb-2">Can I use this data for actual flight planning?</h3>
            <p className="text-[#475569] leading-relaxed">
              No. SkyRestrict Check is designed for informational and educational purposes only. While we strive to
              provide accurate and up-to-date information, this tool should never be used as a substitute for official
              aviation authority publications, certified flight planning tools, or professional dispatch services.
              Pilots and flight operators must always refer to official NOTAM sources and their national aviation
              authority for authoritative airspace restriction information. Our data may have delays, inaccuracies,
              or omissions that could be dangerous if relied upon for operational flight planning.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#1A202C] mb-2">Is SkyRestrict Check free to use?</h3>
            <p className="text-[#475569] leading-relaxed">
              Yes, SkyRestrict Check is completely free to use with no registration required. We are committed to
              keeping aviation safety information accessible to everyone. The project is open source and our operating
              costs are covered through non-intrusive advertising. We will never charge users for access to our core
              features including the interactive map, NOTAM database, and aircraft tracking functionality.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#1A202C] mb-2">How often is the zone data updated?</h3>
            <p className="text-[#475569] leading-relaxed">
              Our no-fly zone database is maintained and reviewed regularly to reflect changes in global airspace
              restrictions. When major geopolitical events occur — such as new conflicts, peace agreements, or
              military exercises — we update the affected zones as quickly as possible. Aircraft position data
              refreshes automatically every 15 seconds. Community members can also submit reports about new or
              changed restrictions through our Report Form, helping us maintain comprehensive coverage.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-[#1A202C] mb-2">What do the different zone colors mean?</h3>
            <p className="text-[#475569] leading-relaxed">
              Our map uses a three-tier color system: <span className="font-semibold text-red-600">Red (Total No-Fly)</span> indicates
              complete airspace closure — no civil aviation is permitted under any circumstances. These zones typically
              exist over active war zones like Ukraine and North Korea. <span className="font-semibold text-orange-500">Orange (High Risk)</span> marks
              areas where flying is technically possible but airlines are actively rerouting due to significant danger
              from anti-aircraft weapons, missile activity, or political instability. <span className="font-semibold text-yellow-600">Yellow (Caution)</span> zones
              have partial restrictions or advisories — flights may operate with enhanced procedures, altitude
              restrictions, or specific routing requirements.
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
