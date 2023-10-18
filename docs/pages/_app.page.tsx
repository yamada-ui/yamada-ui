import { UIProvider, colorModeManager, themeSchemeManager } from '@yamada-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'

import { I18nProvider } from 'contexts/i18n-context'
import { theme, config } from 'theme'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { cookies } = pageProps

  return (
    <>
      <Head>
        <title>Yamada UI</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <UIProvider
        theme={theme}
        config={config}
        colorModeManager={
          typeof cookies === 'string'
            ? colorModeManager.cookieStorageSSR(cookies)
            : colorModeManager.cookieStorage
        }
        themeSchemeManager={
          typeof cookies === 'string'
            ? themeSchemeManager.cookieStorageSSR(cookies)
            : themeSchemeManager.cookieStorage
        }
      >
        <I18nProvider>
          <Component {...pageProps} />
        </I18nProvider>
      </UIProvider>
    </>
  )
}

export default App
