const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  reactStrictMode: false,
  pageExtensions: ["page.jsx", "page.tsx"],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    localeDetection: false,
  },
  productionBrowserSourceMaps: false,
  redirects: async () => [
    {
      source: "/coverage",
      destination: "/coverage/index.html",
      permanent: true,
    },
    {
      source: "/examples",
      destination: "/examples/mail",
      permanent: true,
    },
  ],
}

module.exports = withContentlayer(nextConfig)
