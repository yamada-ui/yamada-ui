import {
  UIProvider,
  createColorModeManager,
  createThemeSchemeManager,
} from "@yamada-ui/react"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import Head from "next/head"
import type { FC } from "react"
import { I18nProvider } from "contexts/i18n-context"
import { theme, config } from "theme"

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  style: "normal",
  display: "block",
})

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { cookies } = pageProps
  const colorModeManager = createColorModeManager("ssr", cookies)
  const themeSchemeManager = createThemeSchemeManager("ssr", cookies)

  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Yamada UI</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <UIProvider
        theme={theme}
        config={config}
        colorModeManager={colorModeManager}
        themeSchemeManager={themeSchemeManager}
      >
        <I18nProvider>
          <Component {...{ ...pageProps, inter }} />
        </I18nProvider>
      </UIProvider>
    </>
  )
}

export default App
