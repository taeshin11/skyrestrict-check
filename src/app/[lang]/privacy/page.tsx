import Card from '@/components/ui/Card';

export default function PrivacyPage() {
  return (
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
            referring URLs, and pages viewed.</p>
          <p><strong>Voluntarily Provided Information:</strong> If you submit a zone report through our form, we collect
            the information you provide, including zone name, region, description, severity assessment, and optionally
            your email address.</p>
          <p><strong>Usage Data:</strong> We track anonymous visitor counts to understand our audience and improve the Service.</p>
        </div>
      </Card>

      <Card className="mb-6">
        <h2 className="text-xl font-bold text-[#1A202C] mb-3">3. Cookies and Tracking Technologies</h2>
        <div className="space-y-3 text-[#475569] leading-relaxed">
          <p>We use cookies and similar tracking technologies to enhance your experience.</p>
          <p><strong>Essential Cookies:</strong> Required for the website to function properly.</p>
          <p><strong>Analytics Cookies:</strong> Used to understand how visitors interact with our website.</p>
          <p><strong>Advertising Cookies:</strong> Our advertising partners may use cookies to serve personalized ads.</p>
        </div>
      </Card>

      <Card className="mb-6">
        <h2 className="text-xl font-bold text-[#1A202C] mb-3">4. Your Rights</h2>
        <div className="space-y-3 text-[#475569] leading-relaxed">
          <p>You may have the right to access, correct, or delete your personal data.
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:taeshinkim11@gmail.com" className="text-[#3B82F6] hover:underline font-medium">taeshinkim11@gmail.com</a>.
          </p>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-bold text-[#1A202C] mb-3">5. Contact Us</h2>
        <p className="text-[#475569] leading-relaxed">
          If you have questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:taeshinkim11@gmail.com" className="text-[#3B82F6] hover:underline font-medium">
            taeshinkim11@gmail.com
          </a>.
        </p>
      </Card>
    </main>
  );
}
