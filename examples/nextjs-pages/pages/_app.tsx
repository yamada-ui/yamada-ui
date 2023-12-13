import type { AppProps } from 'next/app'
import {
  UIProvider,
  colorModeCookieStorageManager,
  colorModeSSRManager,
  themeSchemeCookieStorageManager,
  themeSchemeSSRManager,
} from '@yamada-ui/react'
import { theme, config } from 'theme'

const App = ({ Component, pageProps }: AppProps) => {
  const { cookies } = pageProps
  const resolvedColorModeManager =
    typeof cookies === 'string' ? colorModeSSRManager(cookies) : colorModeCookieStorageManager
  const resolvedThemeSchemeManager =
    typeof cookies === 'string' ? themeSchemeSSRManager(cookies) : themeSchemeCookieStorageManager

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
