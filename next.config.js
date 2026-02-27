const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    domains: ['images.pexels.com']
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lottie-react']
  }
};

module.exports = withNextIntl(nextConfig);