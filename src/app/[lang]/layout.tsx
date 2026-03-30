import { i18n, Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/getDictionary';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FeedbackButton from '@/components/FeedbackButton';

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (i18n.locales.includes(rawLang as Locale) ? rawLang : i18n.defaultLocale) as Locale;
  const dict = await getDictionary(lang);

  return (
    <div lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Header lang={lang} dict={dict} />
      {children}
      <Footer lang={lang} dict={dict} />
      <FeedbackButton dict={dict} />
    </div>
  );
}
