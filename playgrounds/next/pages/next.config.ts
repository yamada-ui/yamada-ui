import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    externalDir: true,
  },
  pageExtensions: ["page.tsx", "api.ts"],
  reactStrictMode: false,
}

export default nextConfig
