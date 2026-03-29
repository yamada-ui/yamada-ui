import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"
import { CONSTANTS } from "./constants"
import { getLang } from "./utils/i18n"

const withNextIntl = createNextIntlPlugin()

function getRedirects(source: string | string[], destination: string) {
  const sources = Array.isArray(source) ? source : [source]

  return sources.flatMap((source) => [
    { destination, permanent: true, source },
    {
      destination: `/:locale/${destination}`,
      permanent: true,
      source: `/:locale/${source}`,
    },
  ])
}

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
        destination: "https://v1.yamada-ui.com",
        permanent: true,
        source: "/docs/get-started/legacy",
      },
      {
        destination: "https://v1.yamada-ui.com/:locale",
        permanent: true,
        source: "/:locale/docs/get-started/legacy",
      },
      {
        destination: "https://v1.yamada-ui.com/changelog/:version",
        permanent: true,
        source: "/changelog/:version",
      },
      {
        destination: "https://v1.yamada-ui.com/:locale/changelog/:version",
        permanent: true,
        source: "/:locale/changelog/:version",
      },

      ...getRedirects(["/docs", "/getting-started"], "/docs/get-started"),
      ...getRedirects(
        [
          "/getting-started/installation",
          "/getting-started/installation/:type",
        ],
        "/docs/get-started#installation",
      ),
      ...getRedirects("/getting-started/basics", "/docs/get-started/basics"),
      ...getRedirects(
        "/getting-started/advanced",
        "/docs/get-started/advanced",
      ),
      ...getRedirects(
        "/getting-started/frameworks/nextjs",
        "/docs/get-started/frameworks/next-app",
      ),
      ...getRedirects(
        "/getting-started/frameworks/vite",
        "/docs/get-started/frameworks/vite",
      ),
      ...getRedirects(
        [
          "/getting-started/frameworks",
          "/getting-started/frameworks/:framework",
        ],
        "/docs/get-started#pick-your-framework",
      ),

      ...getRedirects("/styled-system", "/docs/styling"),
      ...getRedirects("/styled-system/ui", "/docs/components/styled"),
      ...getRedirects("/styled-system/loading", "/docs/hooks/use-loading"),
      ...getRedirects("/styled-system/notification", "/docs/hooks/use-notice"),
      ...getRedirects(
        [
          "/styled-system/theming",
          "/styled-system/theming/default-theme",
          "/styled-system/semantic-tokens",
        ],
        "/docs/theming",
      ),
      ...getRedirects("/styled-system/cli", "/docs/theming/cli"),
      ...getRedirects(
        "/styled-system/theming/customize-theme",
        "/docs/theming/customization",
      ),
      ...getRedirects(
        "/styled-system/theming/switch-themes",
        "/docs/theming/switching-themes",
      ),
      ...getRedirects(
        "/styled-system/responsive-styles",
        "/docs/styling/responsive-design",
      ),
      ...getRedirects(
        "/styled-system/text-and-layer-styles",
        "/docs/styling/layer-styles",
      ),
      ...getRedirects(
        ["/styled-system/configure", "/styled-system/configure/default-config"],
        "/docs/theming/configuration/overview",
      ),
      ...getRedirects(
        "/styled-system/configure/customize-config",
        "/docs/theming/configuration/customization",
      ),
      ...getRedirects(
        "/styled-system/theming/component-styles",
        "/docs/components/create-component",
      ),
      ...getRedirects("/styled-system/:segment", "/docs/styling/:segment"),

      ...getRedirects(
        ["/components", "/components/:category"],
        "/docs/components",
      ),
      ...getRedirects(
        "/components/:category/:component",
        "/docs/components/:component",
      ),
      ...getRedirects(
        "/components/:category/:component/:anchor",
        "/docs/components/:component#:anchor",
      ),

      ...getRedirects("/hooks", "/docs/hooks"),
      ...getRedirects("/hooks/:hook", "/docs/hooks/:hook"),

      ...getRedirects(["/community", "/community/team"], "/docs/community"),
      ...getRedirects(
        "/community/contributing",
        "/docs/community/contributing",
      ),

      ...getRedirects("/changelog", "/docs/changelog"),

      ...getRedirects("/examples/cards", "/examples"),
    ])
  },
  async rewrites() {
    return Promise.resolve([
      {
        destination: "/:locale/llms/:path*.md",
        source: "/:locale/docs/:path*.md",
      },
      {
        destination: `/${getLang(CONSTANTS.I18N.DEFAULT_LOCALE)}/llms/:path*.md`,
        source: "/docs/:path*.md",
      },
      {
        destination: `/${getLang(CONSTANTS.I18N.DEFAULT_LOCALE)}/llms/:path*.md`,
        source: "/llms/:path*.md",
      },
    ])
  },
}

export default withNextIntl(nextConfig)
