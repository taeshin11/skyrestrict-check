import { MetadataRoute } from 'next';
import { i18n } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skyrestrict-check.vercel.app';
  const now = new Date();
  const pages = [
    { path: '', changeFrequency: 'hourly' as const, priority: 1.0 },
    { path: '/about', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/how-to-use', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of i18n.locales) {
    for (const page of pages) {
      const alternateLanguages: Record<string, string> = {};
      for (const l of i18n.locales) {
        alternateLanguages[l] = `${baseUrl}/${l}${page.path}`;
      }
      alternateLanguages['x-default'] = `${baseUrl}/en${page.path}`;

      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: alternateLanguages,
        },
      });
    }
  }

  return entries;
}
