import Card from '@/components/ui/Card';

export default function TermsPage() {
  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-[#1A202C] mb-2">Terms of Service</h1>
      <p className="text-[#64748B] mb-8">Last updated: March 29, 2026</p>

      <Card className="mb-6">
        <h2 className="text-xl font-bold text-[#1A202C] mb-3">1. Acceptance of Terms</h2>
        <p className="text-[#475569] leading-relaxed">
          By accessing and using SkyRestrict Check (&quot;the Service&quot;), you agree to be bound by these Terms of Service.
          If you do not agree, please do not use the Service.
        </p>
      </Card>

      <Card className="mb-6">
        <h2 className="text-xl font-bold text-[#1A202C] mb-3">2. Important Disclaimers</h2>
        <div className="space-y-3 text-[#475569] leading-relaxed">
          <p className="font-semibold text-red-600">
            THIS SERVICE IS NOT INTENDED FOR FLIGHT PLANNING OR OPERATIONAL AVIATION USE.
          </p>
          <p>
            The information provided is compiled from various public sources and may contain errors or outdated information.
            Pilots and flight operators must always refer to official sources for authoritative airspace information.
          </p>
        </div>
      </Card>

      <Card className="mb-6">
        <h2 className="text-xl font-bold text-[#1A202C] mb-3">3. Limitation of Liability</h2>
        <p className="text-[#475569] leading-relaxed">
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND.
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, SKYRESTRICT CHECK SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING
          FROM YOUR USE OF THE SERVICE.
        </p>
      </Card>

      <Card>
        <h2 className="text-xl font-bold text-[#1A202C] mb-3">4. Contact</h2>
        <p className="text-[#475569] leading-relaxed">
          For questions about these Terms, please contact us at{' '}
          <a href="mailto:taeshinkim11@gmail.com" className="text-[#3B82F6] hover:underline font-medium">
            taeshinkim11@gmail.com
          </a>.
        </p>
      </Card>
    </main>
  );
}
