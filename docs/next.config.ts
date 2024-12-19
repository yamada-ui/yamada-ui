import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
  redirects: async () =>
    new Promise((resolve) =>
      resolve([
        {
          destination: "/examples/mail",
          permanent: true,
          source: "/examples",
        },
      ]),
    ),
}

module.exports = nextConfig
