const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ["page.jsx", "page.tsx"],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    localeDetection: false,
  },
}

module.exports = withContentlayer(nextConfig)
