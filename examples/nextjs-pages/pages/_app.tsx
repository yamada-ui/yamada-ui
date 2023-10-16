import type { AppProps } from 'next/app'
import { UIProvider, colorModeManager, themeSchemeManager } from '@yamada-ui/react'
import { theme, config } from 'theme'

const App = ({ Component, pageProps }: AppProps) => {
  const { cookies } = pageProps
  const resolvedColorModeManager =
    typeof cookies === 'string'
      ? colorModeManager.cookieStorageSSR(cookies)
      : colorModeManager.cookieStorage
  const resolvedThemeSchemeManager =
    typeof cookies === 'string'
      ? themeSchemeManager.cookieStorageSSR(cookies)
      : themeSchemeManager.cookieStorage

  return (
    <UIProvider
      theme={theme}
      config={config}
      colorModeManager={resolvedColorModeManager}
      themeSchemeManager={resolvedThemeSchemeManager}
    >
      <Component {...pageProps} />
    </UIProvider>
  )
}

export default App
