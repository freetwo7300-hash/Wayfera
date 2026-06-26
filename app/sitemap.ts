import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'ar', 'es', 'fr'];
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/destinations', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/booking', priority: 0.8, changeFrequency: 'weekly' as const },
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach(({ path, priority, changeFrequency }) => {
      sitemap.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    });
  });

  return sitemap;
}
