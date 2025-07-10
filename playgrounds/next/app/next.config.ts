import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    externalDir: true,
  },
  reactStrictMode: false,
}

export default nextConfig
