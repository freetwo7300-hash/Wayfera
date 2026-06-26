import { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  locale?: string;
  alternateLocales?: string[];
}

const DEFAULT_KEYWORDS = [
  'travel agency',
  'vacation packages',
  'tour booking',
  'travel destinations',
  'holiday planning',
  'flight booking',
  'hotel reservation',
  'travel guide',
  'adventure travel',
  'luxury travel',
];

export function generateSEO({
  title,
  description,
  keywords = [],
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonical,
  locale = 'en',
  alternateLocales = ['en', 'ar', 'es', 'fr'],
}: SEOProps): Metadata {
  const fullTitle = `${title} | Wayfera`;
  const allKeywords = Array.from(new Set([...DEFAULT_KEYWORDS, ...keywords]));
  const canonicalUrl = canonical || `${BASE_URL}/${locale}`;

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: [{ name: 'Wayfera Travel Agency' }],
    creator: 'Wayfera',
    publisher: 'Wayfera Travel Agency',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLocales.reduce<Record<string, string>>((acc, loc) => {
        acc[loc] = `${BASE_URL}/${loc}`;
        return acc;
      }, {}),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: 'Wayfera',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: ogType as 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
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
}

// JSON-LD Schema for Organization
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Wayfera',
    description: 'Premium travel agency offering curated travel experiences worldwide',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}/og-image.jpg`,
    telephone: '+1-234-567-8900',
    email: 'info@wayfera.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Travel Street',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
    sameAs: [
      'https://facebook.com/wayfera',
      'https://twitter.com/wayfera',
      'https://instagram.com/wayfera',
      'https://linkedin.com/company/wayfera',
    ],
    priceRange: '$$',
  };
}

// JSON-LD Schema for Breadcrumbs
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// JSON-LD Schema for Product (Tour Package)
export function generateTourPackageSchema(tour: {
  name: string;
  description: string;
  image: string;
  price: number;
  currency?: string;
  rating?: number;
  reviewCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: tour.name,
    description: tour.description,
    image: tour.image,
    offers: {
      '@type': 'Offer',
      price: tour.price,
      priceCurrency: tour.currency || 'USD',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/booking`,
    },
    ...(tour.rating
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: tour.rating,
            reviewCount: tour.reviewCount || 100,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
  };
}
