import { UIProvider } from '@yamada-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import { I18nProvider } from 'contexts'
import { ConfigsProvider } from 'contexts/configs-context'
import { theme, config } from 'theme'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Yamada UI</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <UIProvider theme={theme} config={config}>
        <ConfigsProvider>
          <I18nProvider>
            <Component {...pageProps} />
          </I18nProvider>
        </ConfigsProvider>
      </UIProvider>
    </>
  )
}

export default App
