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
    alternates[l] = `${BASE_URL}/${l}/terms`;
  }
  return {
    title: dict.meta.termsTitle,
    description: dict.meta.termsDescription,
    alternates: {
      canonical: `${BASE_URL}/${lang}/terms`,
      languages: alternates,
    },
    openGraph: {
      title: dict.meta.termsTitle,
      description: dict.meta.termsDescription,
      url: `${BASE_URL}/${lang}/terms`,
      siteName: 'SkyRestrict Check',
      locale: lang,
      type: 'website',
    },
  };
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);
  const t = dict.termsPage;

  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-[#1A202C] mb-2">{t.title}</h1>
      <p className="text-[#64748B] mb-8">{t.lastUpdated}</p>

      <Card className="mb-6">
        <h2 className="text-xl font-bold text-[#1A202C] mb-3">{t.acceptTitle}</h2>
        <p className="text-[#475569] leading-relaxed">{t.acceptText}</p>
      </Card>

      <Card className="mb-6">
        <h2 className="text-xl font-bold text-[#1A202C] mb-3">{t.disclaimerTitle}</h2>
        <div className="space-y-3 text-[#475569] leading-relaxed">
          <p className="font-semibold text-red-600">{t.disclaimerWarning}</p>
          <p>{t.disclaimerText}</p>
        </div>
      </Card>

      <Card className="mb-6">
        <h2 className="text-xl font-bold text-[#1A202C] mb-3">{t.liabilityTitle}</h2>
        <p className="text-[#475569] leading-relaxed">{t.liabilityText}</p>
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
