import type { AppProps } from 'next/app'
import { AppProvider } from 'contexts'

export default ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </AppProvider>
  )
}
