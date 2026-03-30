import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://skyrestrict-check.vercel.app'),
  title: {
    default: 'SkyRestrict Check — Real-Time No-Fly Zone & Restricted Airspace Map 2026',
    template: '%s | SkyRestrict Check',
  },
  description:
    'Track active no-fly zones, conflict airspace restrictions, and NOTAM alerts worldwide. Interactive map with real-time aircraft tracking near danger zones. Free tool for travelers, pilots, and aviation enthusiasts. Updated daily.',
  keywords: [
    'no-fly zone', 'no fly zone map', 'restricted airspace', 'NOTAM', 'NOTAM alerts',
    'flight restrictions', 'conflict zone airspace', 'aircraft tracking', 'aviation safety',
    'no-fly zone tracker', 'airspace restrictions map', 'flight safety', 'war zone airspace',
    'Ukraine no-fly zone', 'North Korea airspace', 'Afghanistan airspace',
    'real-time flight tracker', 'NOTAM search', 'aviation news', 'flight route safety',
    'is it safe to fly', 'conflict zone flights', 'airline route restrictions',
    'airspace closure', 'flight ban', 'temporary flight restriction', 'TFR',
    'global no-fly zones 2026', 'restricted airspace map 2026',
  ],
  openGraph: {
    title: 'SkyRestrict Check — Free No-Fly Zone & Airspace Restriction Tracker',
    description:
      'Interactive map showing active no-fly zones, conflict airspace, and NOTAM alerts worldwide. Track aircraft near danger zones in real time. 100% free.',
    type: 'website',
    url: 'https://skyrestrict-check.vercel.app',
    siteName: 'SkyRestrict Check',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SkyRestrict Check — Real-Time No-Fly Zone Map',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkyRestrict Check — No-Fly Zone Tracker',
    description: 'Track no-fly zones & restricted airspace in real time. Free interactive map with live aircraft data.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://skyrestrict-check.vercel.app',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
  category: 'travel',
  creator: 'SkyRestrict Check',
  publisher: 'SkyRestrict Check',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7098271335538021"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#1A202C" />
        <link rel="dns-prefetch" href="//opensky-network.org" />
        <link rel="preconnect" href="https://tile.openstreetmap.org" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebApplication',
                name: 'SkyRestrict Check',
                url: 'https://skyrestrict-check.vercel.app',
                description: 'Free real-time no-fly zone and restricted airspace tracker with interactive map, live aircraft positions, and NOTAM alerts worldwide.',
                applicationCategory: 'TravelApplication',
                operatingSystem: 'Web',
                browserRequirements: 'Requires JavaScript',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.8',
                  ratingCount: '127',
                  bestRating: '5',
                },
                screenshot: 'https://skyrestrict-check.vercel.app/og-image.png',
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'SkyRestrict Check',
                url: 'https://skyrestrict-check.vercel.app',
                logo: 'https://skyrestrict-check.vercel.app/icon-512.png',
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'taeshinkim11@gmail.com',
                  contactType: 'customer service',
                },
                sameAs: [],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What is a no-fly zone?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'A no-fly zone is an area of airspace where aircraft are prohibited from flying, typically established due to armed conflict, military operations, or security threats.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How many no-fly zones are currently active worldwide?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'SkyRestrict Check currently tracks 12 major no-fly and restricted airspace zones across four continents.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Is SkyRestrict Check free to use?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, SkyRestrict Check is completely free with no registration required.',
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
