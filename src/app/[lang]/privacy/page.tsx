import type { Metadata } from 'next';
import Card from '@/components/ui/Card';
import { getDictionary } from '@/i18n/getDictionary';
import { i18n, type Locale } from '@/i18n/config';

const BASE_URL = 'https://skyrestrict-check.vercel.app';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const alternates: Record<string, string> = {};
  for (const l of i18n.locales) {
    alternates[l] = `${BASE_URL}/${l}/privacy`;
  }
  return {
    title: dict.meta.privacyTitle,
    description: dict.meta.privacyDescription,
    alternates: {
      canonical: `${BASE_URL}/${lang}/privacy`,
      languages: alternates,
    },
    openGraph: {
      title: dict.meta.privacyTitle,
      description: dict.meta.privacyDescription,
      url: `${BASE_URL}/${lang}/privacy`,
      siteName: 'SkyRestrict Check',
      locale: lang,
      type: 'website',
    },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);
  const t = dict.privacyPage;

  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-[#1A202C] mb-2">{t.title}</h1>
      <p className="text-[#64748B] mb-8">{t.lastUpdated}</p>

      <Card className="mb-6">
        <h2 className="text-xl font-bold text-[#1A202C] mb-3">{t.introTitle}</h2>
        <p className="text-[#475569] leading-relaxed">{t.introText}</p>
      </Card>

      <Card className="mb-6">
        <h2 className="text-xl font-bold text-[#1A202C] mb-3">{t.collectTitle}</h2>
        <div className="space-y-3 text-[#475569] leading-relaxed">
          <p><strong>{t.collectAuto}</strong> {t.collectAutoText}</p>
          <p><strong>{t.collectVoluntary}</strong> {t.collectVoluntaryText}</p>
          <p><strong>{t.collectUsage}</strong> {t.collectUsageText}</p>
        </div>
      </Card>

      <Card className="mb-6">
        <h2 className="text-xl font-bold text-[#1A202C] mb-3">{t.cookiesTitle}</h2>
        <div className="space-y-3 text-[#475569] leading-relaxed">
          <p>{t.cookiesIntro}</p>
          <p><strong>{t.cookiesEssential}</strong> {t.cookiesEssentialText}</p>
          <p><strong>{t.cookiesAnalytics}</strong> {t.cookiesAnalyticsText}</p>
          <p><strong>{t.cookiesAds}</strong> {t.cookiesAdsText}</p>
        </div>
      </Card>

      <Card className="mb-6">
        <h2 className="text-xl font-bold text-[#1A202C] mb-3">{t.rightsTitle}</h2>
        <div className="space-y-3 text-[#475569] leading-relaxed">
          <p>
            {t.rightsText}{' '}
            <a href="mailto:taeshinkim11@gmail.com" className="text-[#3B82F6] hover:underline font-medium">taeshinkim11@gmail.com</a>.
          </p>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-bold text-[#1A202C] mb-3">{t.contactTitle}</h2>
        <p className="text-[#475569] leading-relaxed">
          {t.contactText}{' '}
          <a href="mailto:taeshinkim11@gmail.com" className="text-[#3B82F6] hover:underline font-medium">
            taeshinkim11@gmail.com
          </a>.
        </p>
      </Card>
    </main>
  );
}
