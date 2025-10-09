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
    remotePatterns: [
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "images.pexels.com" },
    ],
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
  async rewrites() {
    return Promise.resolve([
      {
        destination: "/:locale/llms.txt/:path*.mdx",
        source: "/:locale/docs/components/:path*.mdx",
      },
    ])
  },
}

export default withNextIntl(nextConfig)
