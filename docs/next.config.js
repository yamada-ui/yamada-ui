const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['page.jsx', 'page.tsx'],
  experimental: {
    esmExternals: false,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeDetection: false,
  },
  rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)
