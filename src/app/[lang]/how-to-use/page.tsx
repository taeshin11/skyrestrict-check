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
    alternates[l] = `${BASE_URL}/${l}/how-to-use`;
  }
  return {
    title: dict.meta.howToUseTitle,
    description: dict.meta.howToUseDescription,
    alternates: {
      canonical: `${BASE_URL}/${lang}/how-to-use`,
      languages: alternates,
    },
    openGraph: {
      title: dict.meta.howToUseTitle,
      description: dict.meta.howToUseDescription,
      url: `${BASE_URL}/${lang}/how-to-use`,
      siteName: 'SkyRestrict Check',
      locale: lang,
      type: 'website',
    },
  };
}

export default async function HowToUsePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);
  const t = dict.howToUse;

  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-[#1A202C] mb-8">{t.pageTitle}</h1>

      {/* Step-by-step guide */}
      <div className="space-y-6 mb-12">
        <Card>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#3B82F6] text-white flex items-center justify-center text-xl font-bold shrink-0">1</div>
            <div>
              <h2 className="text-xl font-bold text-[#1A202C] mb-2">{t.step1Title}</h2>
              <p className="text-[#475569] leading-relaxed mb-3">{t.step1Text1}</p>
              <p className="text-[#475569] leading-relaxed mb-3">{t.step1Text2}</p>
              <p className="text-[#475569] leading-relaxed">{t.step1Text3}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#3B82F6] text-white flex items-center justify-center text-xl font-bold shrink-0">2</div>
            <div>
              <h2 className="text-xl font-bold text-[#1A202C] mb-2">{t.step2Title}</h2>
              <p className="text-[#475569] leading-relaxed mb-3">{t.step2Text1}</p>
              <p className="text-[#475569] leading-relaxed mb-3">{t.step2Text2}</p>
              <p className="text-[#475569] leading-relaxed">{t.step2Text3}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#3B82F6] text-white flex items-center justify-center text-xl font-bold shrink-0">3</div>
            <div>
              <h2 className="text-xl font-bold text-[#1A202C] mb-2">{t.step3Title}</h2>
              <p className="text-[#475569] leading-relaxed mb-3">{t.step3Text1}</p>
              <p className="text-[#475569] leading-relaxed">{t.step3Text2}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* FAQ */}
      <h2 className="text-3xl font-bold text-[#1A202C] mb-6">{t.faqTitle}</h2>
      <div className="space-y-4">
        {([
          [t.faq1Q, t.faq1A],
          [t.faq2Q, t.faq2A],
          [t.faq3Q, t.faq3A],
          [t.faq4Q, t.faq4A],
          [t.faq5Q, t.faq5A],
          [t.faq6Q, t.faq6A],
          [t.faq7Q, t.faq7A],
        ] as [string, string][]).map(([q, a], i) => (
          <Card key={i}>
            <h3 className="text-lg font-bold text-[#1A202C] mb-2">{q}</h3>
            <p className="text-[#475569] leading-relaxed">{a}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
