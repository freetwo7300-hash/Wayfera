// Server Component — fetches footer data directly from Prisma.
// Data is cached for 1 hour so every page view doesn't hit the DB.
import { unstable_cache } from 'next/cache';
import { prisma } from '@/app/_lib/prisma';
import { FooterClient } from './footer-client';
import type { ContactInfo, SocialLink } from '@/app/_types';

const getFooterData = unstable_cache(
  async () => {
    const [contactInfo, socialLinks] = await Promise.all([
      prisma.contactInfo.findFirst(),
      prisma.socialLink.findMany({ orderBy: { name: 'asc' } }),
    ]);
    return {
      contactInfo: contactInfo as ContactInfo | null,
      socialLinks: socialLinks as SocialLink[],
    };
  },
  ['footer-data'],
  {
    revalidate: 3600, // re-fetch at most once per hour
    tags: ['footer'],
  }
);

export async function Footer() {
  let contactInfo: ContactInfo | null = null;
  let socialLinks: SocialLink[] = [];

  try {
    const data = await getFooterData();
    contactInfo = data.contactInfo;
    socialLinks = data.socialLinks;
  } catch {
    // DB not connected (dev without DATABASE_URL) — render gracefully with no data
  }

  return <FooterClient contactInfo={contactInfo} socialLinks={socialLinks} />;
}
