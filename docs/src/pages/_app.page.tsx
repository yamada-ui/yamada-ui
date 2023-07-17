import { localStorageManager, UIProvider } from '@yamada-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Yamada UI</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <UIProvider colorModeManager={localStorageManager}>
        <Component {...pageProps} />
      </UIProvider>
    </>
  )
}

export default App
