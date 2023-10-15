import type { AppProps } from 'next/app'
import { UIProvider, colorModeManager } from '@yamada-ui/react'
import { theme, config } from 'theme'

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
