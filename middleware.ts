import createMiddleware from 'next-intl/middleware';
import { defineRouting } from 'next-intl/routing';

const routing = defineRouting({
  locales: ['en', 'ar', 'fr', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon\\.ico|\\.well-known|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.gif|.*\\.webp).*)',
    '/',
    '/(ar|en|fr|es)/:path*'
  ]
};
