import './globals.css';
import type { Metadata } from 'next';
import { Oswald, Noto_Kufi_Arabic } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from '@/app/_components/providers';
import { Toaster } from 'react-hot-toast';
import { JsonLd, CookieConsent } from '@/app/_components/shared';
import { generateOrganizationSchema } from '@/app/_lib/seo';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  variable: '--font-oswald',
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: false, // only preload on Arabic pages
  variable: '--font-noto-kufi-arabic',
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Wayfera - Premium Travel Agency | Discover Amazing Destinations',
    template: '%s | Wayfera',
  },
  description:
    "Experience the world's most breathtaking destinations with Wayfera. Premium travel packages, expert guides, 24/7 support. Book your dream vacation today!",
  keywords: [
    'travel agency',
    'vacation packages',
    'tour booking',
    'travel destinations',
    'holiday planning',
    'flight booking',
    'hotel reservation',
    'luxury travel',
    'adventure travel',
    'travel guide',
  ],
  authors: [{ name: 'Wayfera Travel Agency' }],
  creator: 'Wayfera',
  publisher: 'Wayfera Travel Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Wayfera',
    title: 'Wayfera - Premium Travel Agency',
    description:
      "Experience the world's most breathtaking destinations with our curated travel experiences.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wayfera Travel Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wayfera - Premium Travel Agency',
    description:
      "Experience the world's most breathtaking destinations with our curated travel experiences.",
    images: ['/og-image.jpg'],
    creator: '@wayfera',
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
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      suppressHydrationWarning
    >
      <head>
        {/* Critical resource hints — placed in <head> so browser sees them immediately */}
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        <JsonLd data={generateOrganizationSchema()} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body
        className={`${oswald.variable} ${notoKufiArabic.variable} ${
          locale === 'ar' ? 'font-arabic' : 'font-sans'
        }`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
            <CookieConsent />
            <Toaster position="top-right" />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
