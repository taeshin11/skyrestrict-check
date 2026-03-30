import Card from '@/components/ui/Card';
import { getDictionary } from '@/i18n/getDictionary';
import type { Locale } from '@/i18n/config';

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);
  const t = dict.about;

  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-[#1A202C] mb-8">{t.pageTitle}</h1>

      <Card className="mb-8">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-4">{t.whatIsTitle}</h2>
        <div className="space-y-4 text-[#475569] leading-relaxed">
          <p>{t.whatIsText1}</p>
          <p>{t.whatIsText2}</p>
          <p>{t.whatIsText3}</p>
        </div>
      </Card>

      <Card className="mb-8">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-4">{t.problemTitle}</h2>
        <div className="space-y-4 text-[#475569] leading-relaxed">
          <p>{t.problemText1}</p>
          <p>{t.problemText2}</p>
          <p>{t.problemText3}</p>
        </div>
      </Card>

      <Card className="mb-8">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-4">{t.whoTitle}</h2>
        <div className="space-y-4 text-[#475569] leading-relaxed">
          <p>{t.whoIntro}</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>{t.travelers}</strong> — {t.travelersDesc}</li>
            <li><strong>{t.military}</strong> — {t.militaryDesc}</li>
            <li><strong>{t.aviation}</strong> — {t.aviationDesc}</li>
            <li><strong>{t.journalists}</strong> — {t.journalistsDesc}</li>
            <li><strong>{t.students}</strong> — {t.studentsDesc}</li>
          </ul>
        </div>
      </Card>

      <Card className="mb-8">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-4">{t.techTitle}</h2>
        <div className="space-y-4 text-[#475569] leading-relaxed">
          <p>{t.techIntro}</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>{t.techNextjs}</li>
            <li>{t.techLeaflet}</li>
            <li>{t.techOpensky}</li>
            <li>{t.techNotam}</li>
          </ul>
          <p>{t.techHosting}</p>
        </div>
      </Card>

      <Card>
        <h2 className="text-2xl font-bold text-[#1A202C] mb-4">{t.contactTitle}</h2>
        <p className="text-[#475569] leading-relaxed">
          {t.contactText}{' '}
          <a href="mailto:taeshinkim11@gmail.com" className="text-[#3B82F6] hover:underline font-medium">
            taeshinkim11@gmail.com
          </a>
          .
        </p>
      </Card>
    </main>
  );
}
