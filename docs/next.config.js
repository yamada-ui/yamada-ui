/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  i18n: {
    defaultLocale: "en",
    localeDetection: false,
    locales: ["en", "ja"],
  },
  images: {
    domains: ["images.pexels.com"],
  },
  optimizeFonts: true,
  pageExtensions: ["page.jsx", "page.tsx", "api.js", "api.ts"],
  productionBrowserSourceMaps: false,
  reactStrictMode: false,
  redirects: async () => [
    {
      destination: "/examples/mail",
      permanent: true,
      source: "/examples",
    },
  ],
}

module.exports = nextConfig
