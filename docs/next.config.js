/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  reactStrictMode: false,
  experimental: {
    externalDir: true,
  },
  eslint: {
    dirs: [
      "pages",
      "components",
      "constant",
      "contexts",
      "hooks",
      "layouts",
      "libs",
      "scripts",
      "theme",
      "utils",
    ],
  },
  typescript: {},
  images: {
    domains: ["images.pexels.com"],
  },
  pageExtensions: ["page.jsx", "page.tsx", "api.js", "api.ts"],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    localeDetection: false,
  },
  productionBrowserSourceMaps: false,
  redirects: async () => [
    {
      source: "/examples",
      destination: "/examples/mail",
      permanent: true,
    },
  ],
}

module.exports = nextConfig
