import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    externalDir: true,
    optimizePackageImports: ["@yamada-ui/react"],
  },
  images: {
    remotePatterns: [{ hostname: "avatars.githubusercontent.com" }],
  },
  productionBrowserSourceMaps: false,
  reactStrictMode: false,
  async redirects() {
    return Promise.resolve([
      {
        destination: "/docs/get-started",
        permanent: true,
        source: "/docs",
      },
    ])
  },
}

export default withNextIntl(nextConfig)
