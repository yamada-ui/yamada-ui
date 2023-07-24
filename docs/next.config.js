/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['page.jsx', 'page.tsx'],
  experimental: {
    esmExternals: false,
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

module.exports = nextConfig
