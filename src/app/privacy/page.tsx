import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Privacy Policy — SkyRestrict Check',
  description: 'Privacy policy for SkyRestrict Check. Learn how we handle your data, cookies, and third-party services.',
  keywords: 'privacy policy, data protection, cookies, SkyRestrict Check privacy',
  openGraph: {
    title: 'Privacy Policy — SkyRestrict Check',
    description: 'How SkyRestrict Check handles your privacy and data.',
    type: 'website',
    url: 'https://skyrestrict-check.vercel.app/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#1A202C] mb-2">Privacy Policy</h1>
        <p className="text-[#64748B] mb-8">Last updated: March 29, 2026</p>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">1. Introduction</h2>
          <p className="text-[#475569] leading-relaxed">
            SkyRestrict Check (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website at skyrestrict-check.vercel.app (the &quot;Service&quot;).
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
            website. By using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>
        </Card>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">2. Information We Collect</h2>
          <div className="space-y-3 text-[#475569] leading-relaxed">
            <p><strong>Automatically Collected Information:</strong> When you access the Service, we may automatically
              collect certain information about your device, including your IP address, browser type, operating system,
              referring URLs, and pages viewed. This information is used for analytics and to improve the Service.</p>
            <p><strong>Voluntarily Provided Information:</strong> If you submit a zone report through our form, we collect
              the information you provide, including zone name, region, description, severity assessment, and optionally
              your email address. This information is used solely to improve our no-fly zone database.</p>
            <p><strong>Usage Data:</strong> We track anonymous visitor counts (daily and total) to understand our audience
              and improve the Service. This data does not contain personally identifiable information.</p>
          </div>
        </Card>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">3. Cookies and Tracking Technologies</h2>
          <div className="space-y-3 text-[#475569] leading-relaxed">
            <p>We use cookies and similar tracking technologies to enhance your experience on our website:</p>
            <p><strong>Essential Cookies:</strong> Required for the website to function properly, such as maintaining
              your session state and preferences.</p>
            <p><strong>Analytics Cookies:</strong> We may use Google Analytics to understand how visitors interact with
              our website. Google Analytics uses cookies to collect information about your use of the website, which is
              transmitted to and stored by Google. You can opt out of Google Analytics by installing the Google Analytics
              opt-out browser add-on.</p>
            <p><strong>Advertising Cookies:</strong> Our advertising partners (including Google AdSense and Adsterra) may
              use cookies to serve personalized ads based on your browsing history. These third-party cookies are governed
              by the respective privacy policies of these advertising networks. You can manage your ad preferences through
              the Google Ads Settings page or your browser settings.</p>
          </div>
        </Card>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">4. Third-Party Services</h2>
          <div className="space-y-3 text-[#475569] leading-relaxed">
            <p>We integrate with the following third-party services:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>OpenSky Network</strong> — Provides real-time aircraft position data. Their privacy policy is available at opensky-network.org.</li>
              <li><strong>CartoDB / OpenStreetMap</strong> — Provides map tile imagery. Subject to their respective terms of service.</li>
              <li><strong>Google AdSense</strong> — Serves advertisements. Subject to Google&apos;s privacy policy at policies.google.com/privacy.</li>
              <li><strong>Adsterra</strong> — Serves advertisements. Subject to Adsterra&apos;s privacy policy at adsterra.com/privacy-policy.</li>
              <li><strong>Vercel</strong> — Hosts our website. Subject to Vercel&apos;s privacy policy at vercel.com/legal/privacy-policy.</li>
              <li><strong>Google Sheets (via Apps Script)</strong> — Processes zone report submissions. Subject to Google&apos;s privacy policy.</li>
            </ul>
          </div>
        </Card>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">5. How We Use Your Information</h2>
          <div className="text-[#475569] leading-relaxed">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide, maintain, and improve the Service</li>
              <li>To process and review zone report submissions</li>
              <li>To analyze usage patterns and optimize performance</li>
              <li>To serve relevant advertisements that support our free service</li>
              <li>To respond to your inquiries or feedback when you provide contact information</li>
              <li>To detect and prevent technical issues or abuse</li>
            </ul>
          </div>
        </Card>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">6. Data Retention</h2>
          <p className="text-[#475569] leading-relaxed">
            We retain automatically collected data for a reasonable period to fulfill the purposes outlined in this policy.
            Zone report data is retained indefinitely to maintain our database. If you wish to have your submitted data
            removed, please contact us at taeshinkim11@gmail.com.
          </p>
        </Card>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">7. Your Rights</h2>
          <div className="space-y-3 text-[#475569] leading-relaxed">
            <p>Depending on your jurisdiction, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The right to access the personal data we hold about you</li>
              <li>The right to request correction of inaccurate data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to opt out of advertising cookies via your browser settings</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p>To exercise any of these rights, please contact us at taeshinkim11@gmail.com.</p>
          </div>
        </Card>

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">8. Children&apos;s Privacy</h2>
          <p className="text-[#475569] leading-relaxed">
            The Service is not directed to individuals under the age of 13. We do not knowingly collect personal
            information from children under 13. If we become aware that we have collected personal information from
            a child under 13, we will take steps to delete such information.
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-bold text-[#1A202C] mb-3">9. Contact Us</h2>
          <p className="text-[#475569] leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at{' '}
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
