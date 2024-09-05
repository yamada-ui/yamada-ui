import type { AppProps } from "next/app"
import { UIProvider, createColorModeManager } from "@yamada-ui/react"
import { theme, config } from "@/theme"

export default function App({ Component, pageProps }: AppProps) {
  const { cookies } = pageProps
  const colorModeManager = createColorModeManager("ssr", cookies)

  return (
    <UIProvider
      theme={theme}
      config={config}
      colorModeManager={colorModeManager}
    >
      <Component {...pageProps} />
    </UIProvider>
  )
}
