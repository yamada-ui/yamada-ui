import type { AppProps } from "next/app"
import type { FC } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import {
  Button,
  createColorModeManager,
  createThemeSchemeManager,
  UIProvider,
  useBoolean,
  useBreakpointEffect,
} from "@yamada-ui/react"
import confetti from "canvas-confetti"
import { I18nProvider, useI18n } from "contexts"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import { Inter } from "next/font/google"
import Head from "next/head"
import { useRef } from "react"
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
            <Confetti />

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

const randomInRange = (min: number, max: number) =>
  Math.random() * (max - min) + min

const Confetti: FC = () => {
  const { t } = useI18n()
  const [hidden, { on }] = useBoolean()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useBreakpointEffect((breakpoint) => {
    const isMobile = ["md", "sm"].includes(breakpoint)

    const duration = isMobile ? 500 : 250
    const startVelocity = isMobile ? 20 : 30

    if (timeoutRef.current) clearInterval(timeoutRef.current)

    const canvas = document.createElement("canvas")

    canvas.style.position = "fixed"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.inset = "0"
    canvas.style.pointerEvents = "none"

    document.body.appendChild(canvas)

    const c = confetti.create(canvas, {
      resize: true,
      useWorker: true,
    })

    timeoutRef.current = setInterval(() => {
      c({
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        shapes: ["star", "circle"],
        spread: 360,
        startVelocity,
        ticks: 120,
        zIndex: 0,
      })
      setTimeout(() => {
        c({
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          shapes: ["star", "circle"],
          spread: 360,
          startVelocity,
          ticks: 120,
          zIndex: 0,
        })
      }, 100)
    }, duration)

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current)

      timeoutRef.current = null
    }
  }, [])

  return !hidden ? (
    <Button
      size="lg"
      bottom="md"
      left="50%"
      position="fixed"
      rounded="full"
      transform="translateX(-50%)"
      zIndex="kurillin"
      onClick={() => {
        if (timeoutRef.current) clearInterval(timeoutRef.current)

        timeoutRef.current = null

        on()
      }}
    >
      {t("component.confetti.button")}
    </Button>
  ) : null
}
