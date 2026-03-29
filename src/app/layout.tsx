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
  title: 'SkyRestrict Check — Real-Time No-Fly Zone & Restricted Airspace Map',
  description:
    'Track active no-fly zones, conflict airspace restrictions, and NOTAM alerts worldwide. Real-time aircraft tracking near danger zones. Free tool for travelers and aviation enthusiasts.',
  keywords:
    'no-fly zone, restricted airspace, NOTAM, flight restrictions, conflict zone, aircraft tracking, aviation safety',
  openGraph: {
    title: 'SkyRestrict Check — No-Fly Zone Tracker',
    description:
      'Real-time visualization of global no-fly zones and restricted airspace.',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkyRestrict Check',
    description: 'Track no-fly zones & restricted airspace in real time.',
  },
  robots: 'index, follow',
  alternates: { canonical: 'https://skyrestrict-check.vercel.app' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'SkyRestrict Check',
              description: 'Real-time no-fly zone and restricted airspace tracker',
              applicationCategory: 'TravelApplication',
              operatingSystem: 'Web',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
