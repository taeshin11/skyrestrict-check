import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Terms of Service — SkyRestrict Check',
  description: 'Terms of service for using SkyRestrict Check, the free no-fly zone and restricted airspace tracking tool.',
  keywords: 'terms of service, terms and conditions, SkyRestrict Check terms, usage policy',
  openGraph: {
    title: 'Terms of Service — SkyRestrict Check',
    description: 'Terms governing the use of SkyRestrict Check.',
    type: 'website',
    url: 'https://skyrestrict-check.vercel.app/terms',
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#1A202C] mb-2">Terms of Service</h1>
        <p className="text-[#64748B] mb-8">Last updated: March 29, 2026</p>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">1. Acceptance of Terms</h2>
          <p className="text-[#475569] leading-relaxed">
            By accessing and using SkyRestrict Check (&quot;the Service&quot;), available at skyrestrict-check.vercel.app, you
            agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not
            use the Service. We reserve the right to modify these Terms at any time, and your continued use of the
            Service constitutes acceptance of any changes.
          </p>
        </Card>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">2. Description of Service</h2>
          <p className="text-[#475569] leading-relaxed">
            SkyRestrict Check is a free web-based tool that provides visualization of global no-fly zones, restricted
            airspace areas, NOTAM (Notice to Air Missions) alerts, and real-time aircraft position data. The Service
            is provided for informational and educational purposes only. All features of the Service are offered at
            no cost to the user.
          </p>
        </Card>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">3. Important Disclaimers</h2>
          <div className="space-y-3 text-[#475569] leading-relaxed">
            <p className="font-semibold text-red-600">
              THIS SERVICE IS NOT INTENDED FOR FLIGHT PLANNING OR OPERATIONAL AVIATION USE.
            </p>
            <p>
              The information provided by SkyRestrict Check is compiled from various public sources and may contain
              errors, omissions, or outdated information. We make no warranties or representations regarding the
              accuracy, completeness, reliability, or timeliness of any information displayed on the Service.
            </p>
            <p>
              Pilots, flight dispatchers, and aviation operators must always refer to official sources including but
              not limited to their national aviation authority, official NOTAM databases, and certified flight planning
              services for authoritative airspace information. Relying solely on SkyRestrict Check for flight planning
              decisions could endanger lives and violate aviation regulations.
            </p>
          </div>
        </Card>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">4. Acceptable Use</h2>
          <div className="text-[#475569] leading-relaxed">
            <p className="mb-3">You agree not to use the Service to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Plan or conduct actual flight operations</li>
              <li>Make safety-critical aviation decisions</li>
              <li>Engage in any activity that violates applicable laws or regulations</li>
              <li>Attempt to disrupt, overload, or interfere with the Service&apos;s infrastructure</li>
              <li>Scrape, harvest, or collect data from the Service through automated means without permission</li>
              <li>Submit false, misleading, or malicious zone reports</li>
              <li>Use the Service to track specific individuals or aircraft for surveillance purposes</li>
              <li>Reproduce, distribute, or create derivative works from the Service&apos;s content for commercial purposes without permission</li>
            </ul>
          </div>
        </Card>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">5. User Submissions</h2>
          <p className="text-[#475569] leading-relaxed">
            When you submit a zone report through our form, you grant SkyRestrict Check a non-exclusive, royalty-free,
            worldwide license to use, display, and incorporate the submitted information into our database. You represent
            that you have the right to submit such information and that it does not infringe on any third-party rights.
            We reserve the right to review, modify, or reject any submission at our sole discretion.
          </p>
        </Card>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">6. Third-Party Services and Data</h2>
          <p className="text-[#475569] leading-relaxed">
            The Service integrates data from third-party sources including the OpenSky Network, OpenStreetMap, and
            various aviation authorities. These integrations are subject to the respective terms and conditions of
            those services. We are not responsible for the availability, accuracy, or content provided by third-party
            services. Changes or disruptions to third-party services may affect the functionality of SkyRestrict Check.
          </p>
        </Card>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">7. Limitation of Liability</h2>
          <p className="text-[#475569] leading-relaxed">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, SKYRESTRICT CHECK AND ITS OPERATORS SHALL NOT BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF
            PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE, WHETHER
            BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY. THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
            AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
          </p>
        </Card>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">8. Intellectual Property</h2>
          <p className="text-[#475569] leading-relaxed">
            The SkyRestrict Check name, logo, and original content are the intellectual property of SkyRestrict Check.
            The underlying source code is open source and available under its respective license on GitHub. Map data
            is provided by OpenStreetMap contributors under the Open Database License. Aircraft data is provided by
            the OpenSky Network under their terms of use.
          </p>
        </Card>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">9. Termination</h2>
          <p className="text-[#475569] leading-relaxed">
            We reserve the right to suspend or terminate access to the Service for any user who violates these Terms
            or engages in behavior that we deem harmful to the Service or its users. We may also modify, suspend, or
            discontinue the Service at any time without prior notice.
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">10. Contact</h2>
          <p className="text-[#475569] leading-relaxed">
            For questions about these Terms, please contact us at{' '}
            <a href="mailto:taeshinkim11@gmail.com" className="text-[#3B82F6] hover:underline font-medium">
              taeshinkim11@gmail.com
            </a>.
          </p>
        </Card>
      </main>
      <Footer />
    </>
  );
}
