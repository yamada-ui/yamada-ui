import type { AppProps } from "next/app"
import type { FC } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import {
  createColorModeManager,
  createThemeSchemeManager,
  UIProvider,
} from "@yamada-ui/react"
import { I18nProvider } from "contexts"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import { Inter } from "next/font/google"
import Head from "next/head"
import { config, theme } from "theme"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("Asia/Tokyo")

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

const inter = Inter({
  style: "normal",
  display: "block",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { cookies } = pageProps
  const colorModeManager = createColorModeManager("ssr", cookies)
  const themeSchemeManager = createThemeSchemeManager("ssr", cookies)

  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Yamada UI</title>
        <link href="/favicon.svg" rel="icon" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <UIProvider
          colorModeManager={colorModeManager}
          config={config}
          theme={theme}
          themeSchemeManager={themeSchemeManager}
        >
          <I18nProvider>
            <Component {...{ ...pageProps, inter }} />
          </I18nProvider>
        </UIProvider>
      </QueryClientProvider>

      <SpeedInsights />
      <Analytics />
    </>
  )
}

export default App
