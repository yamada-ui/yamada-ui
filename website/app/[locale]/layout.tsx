import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import {
  ColorModeScript,
  Flex,
  ThemeSchemeScript,
  UIProvider,
} from "@yamada-ui/react"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Inter } from "next/font/google"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import { Footer } from "@/app/[locale]/footer"
import { Header } from "@/app/[locale]/header"
import { CONSTANTS } from "@/constants"
import { routing } from "@/i18n"
import { theme } from "@/theme"
import { getLang } from "@/utils/i18n"

export function generateStaticParams() {
  return CONSTANTS.I18N.LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  setRequestLocale(locale)

  const t = await getTranslations("meta")

  return {
    description: t("description"),
    icons: "/favicon.svg",
    metadataBase: new URL("https://yamada-ui.com"),
    openGraph: {
      type: "website",
      images: "/og.png",
    },
    title: { default: t("title"), template: `%s - ${t("title")}` },
    twitter: {
      card: "summary_large_image",
      creator: "@hirotomoyamada",
      images: "/og.png",
      site: "@hirotomoyamada",
    },
  }
}

const inter = Inter({
  style: "normal",
  display: "block",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

interface LayoutProps extends PropsWithChildren {
  params: Promise<{ locale: string }>
}

export default async function Layout({ children, params }: LayoutProps) {
  const { locale } = await params
  const cookieStore = await cookies()

  if (!hasLocale(routing.locales, locale)) notFound()

  setRequestLocale(locale)

  const lang = getLang(locale)

  return (
    <html
      lang={lang}
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body className={inter.className} suppressHydrationWarning>
        <ColorModeScript type="cookie" />
        <ThemeSchemeScript type="cookie" />

        <NextIntlClientProvider>
          <UIProvider
            cookie={cookieStore.toString()}
            locale={locale}
            storage="cookie"
            theme={theme}
          >
            <Flex alignItems="center" flexDirection="column" minH="100dvh">
              <Flex
                css={{
                  "--header-height":
                    "calc({primary-header-height} + {secondary-header-height})",
                  "--primary-header-height": "sizes.14",
                  "--secondary-header-height": {
                    base: "calc({sizes.13} + {spaces.lg})",
                    md: "0px",
                  },
                }}
                alignItems="center"
                flex="1"
                flexDirection="column"
                maxW="8xl"
                w="full"
              >
                <Header />
                <Flex
                  as="main"
                  flex="1"
                  flexDirection="column"
                  px={{ base: "lg", md: "md" }}
                  w="full"
                >
                  {children}
                </Flex>
                <Footer />
              </Flex>
            </Flex>
          </UIProvider>
        </NextIntlClientProvider>

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
