import type { AppProps } from 'next/app'
import { createColorModeManager, createThemeSchemeManager, UIProvider } from '@yamada-ui/react'
import { config, theme } from 'theme'

const App = ({ Component, pageProps }: AppProps) => {
  const { cookies } = pageProps
  const colorModeManager = createColorModeManager('ssr', cookies)
  const themeSchemeManager = createThemeSchemeManager('ssr', cookies)

  return (
    <UIProvider
      colorModeManager={colorModeManager}
      config={config}
      theme={theme}
      themeSchemeManager={themeSchemeManager}
    >
      <Component {...pageProps} />
    </UIProvider>
  )
}

export default App
