import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"
import { CONSTANTS } from "./constants"
import { getLang } from "./utils/i18n"

const withNextIntl = createNextIntlPlugin()

function getRedirects(source: string, destination: string) {
  return CONSTANTS.I18N.LOCALES.map((locale) => {
    if (locale === CONSTANTS.I18N.DEFAULT_LOCALE) {
      return {
        destination,
        permanent: true,
        source,
      }
    } else {
      const lang = getLang(locale)

      return {
        destination: `/${lang}${destination}`,
        permanent: true,
        source: `/${lang}${source}`,
      }
    }
  })
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
      ...getRedirects("/docs", "/docs/get-started"),
      ...CONSTANTS.I18N.LOCALES.map((locale) => {
        const lang = getLang(locale)

        return {
          destination:
            lang !== "ja"
              ? "https://v1.yamada-ui.com"
              : "https://v1.yamada-ui.com/ja",
          permanent: true,
          source:
            locale === CONSTANTS.I18N.DEFAULT_LOCALE
              ? "/docs/get-started/legacy"
              : `/${lang}/docs/get-started/legacy`,
        }
      }),
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
        source: `/docs/:path*.md`,
      },
      {
        destination: `/${getLang(CONSTANTS.I18N.DEFAULT_LOCALE)}/llms/:path*.md`,
        source: `/llms/:path*.md`,
      },
    ])
  },
}

export default withNextIntl(nextConfig)
