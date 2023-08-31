import type { AppProps } from 'next/app'
import { extendConfig, extendTheme, UIProvider, colorModeManager } from '@yamada-ui/react'
import { customTheme, customConfig } from 'theme'

const theme = extendTheme(customTheme)()
const config = extendConfig(customConfig)

const App = ({ Component, pageProps }: AppProps) => {
  const { cookies } = pageProps

  return (
    <UIProvider
      theme={theme}
      config={config}
      colorModeManager={
        typeof cookies === 'string'
          ? colorModeManager.cookieStorageSSR(cookies)
          : colorModeManager.localStorage
      }
    >
      <Component {...pageProps} />
    </UIProvider>
  )
}

export default App
