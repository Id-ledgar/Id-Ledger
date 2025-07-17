/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['en', 'pl', 'uk', 'ro', 'ru'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig