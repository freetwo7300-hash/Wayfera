// Server Component — fetches footer data directly from Prisma (no client-side loading flash)
import { prisma } from '@/app/_lib/prisma';
import { FooterClient } from './footer-client';
import { ContactInfo, SocialLink } from '@/app/_types';

async function getFooterData(): Promise<{
  contactInfo: ContactInfo | null;
  socialLinks: SocialLink[];
}> {
  try {
    const [contactInfo, socialLinks] = await Promise.all([
      prisma.contactInfo.findFirst(),
      prisma.socialLink.findMany({ orderBy: { name: 'asc' } }),
    ]);
    return {
      contactInfo: contactInfo as ContactInfo | null,
      socialLinks: socialLinks as SocialLink[],
    };
  } catch {
    // DB not connected (dev environment without DATABASE_URL) — render with no data
    return { contactInfo: null, socialLinks: [] };
  }
}

export async function Footer() {
  const { contactInfo, socialLinks } = await getFooterData();
  return <FooterClient contactInfo={contactInfo} socialLinks={socialLinks} />;
}
