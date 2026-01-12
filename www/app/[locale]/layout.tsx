import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import {
  ColorModeScript,
  Flex,
  ThemeSchemeScript,
  UIProvider,
} from "@yamada-ui/react"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import { notFound } from "next/navigation"
import { Footer } from "@/app/[locale]/footer"
import { Header } from "@/app/[locale]/header"
import { CONSTANTS } from "@/constants"
import { routing } from "@/i18n"
import { theme } from "@/theme"
import { getLang } from "@/utils/i18n"
import { generateSharedMetadata } from "@/utils/next"
import { Balloons } from "./balloons"

export function generateStaticParams() {
  return CONSTANTS.I18N.LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "meta" })

  return {
    ...(await generateSharedMetadata("home")({ params })),
    description: t("description"),
    icons: "/favicon.svg",
    metadataBase: new URL("https://yamada-ui.com"),
    title: { default: t("title"), template: `%s - ${t("title")}` },
  }
}

const _inter = Inter({
  style: "normal",
  display: "block",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const _geist = Geist({
  style: "normal",
  display: "block",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const _geistMono = Geist_Mono({
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

  if (!hasLocale(routing.locales, locale)) notFound()

  setRequestLocale(locale)

  const lang = getLang(locale)

  return (
    <html
      lang={lang}
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ColorModeScript />
        <ThemeSchemeScript />

        <NextIntlClientProvider>
          <UIProvider locale={locale} theme={theme}>
            <Flex alignItems="center" flexDirection="column" minH="100dvh">
              <Flex
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
                  px="{space}"
                  w="full"
                >
                  {children}
                </Flex>
                <Footer />
              </Flex>
            </Flex>

            <Balloons />
          </UIProvider>
        </NextIntlClientProvider>

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
