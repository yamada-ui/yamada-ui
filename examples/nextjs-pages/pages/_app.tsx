import type { AppProps } from 'next/app'
import { UIProvider, createColorModeManager, createThemeSchemeManager } from '@yamada-ui/react'
import { theme, config } from 'theme'

const App = ({ Component, pageProps }: AppProps) => {
  const { cookies } = pageProps
  const colorModeManager = createColorModeManager('ssr', cookies)
  const themeSchemeManager = createThemeSchemeManager('ssr', cookies)

  return (
    <UIProvider
      theme={theme}
      config={config}
      colorModeManager={colorModeManager}
      themeSchemeManager={themeSchemeManager}
    >
      <Component {...pageProps} />
    </UIProvider>
  )
}

export default App
