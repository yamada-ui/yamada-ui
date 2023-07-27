import { UIProvider } from '@yamada-ui/react'
import type { AppPropsWithLayout } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import { I18nProvider } from 'contexts'
import { theme, config } from 'theme'

const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <Head>
        <title>Yamada UI</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <UIProvider theme={theme} config={config}>
        <I18nProvider>{getLayout(<Component {...pageProps} />)}</I18nProvider>
      </UIProvider>
    </>
  )
}

export default App
