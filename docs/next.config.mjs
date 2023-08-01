import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['page.jsx', 'page.tsx'],
  experimental: {
    esmExternals: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeDetection: false,
  },
}

export default withContentlayer(nextConfig)
