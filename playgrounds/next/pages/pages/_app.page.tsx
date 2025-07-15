import type { AppProps } from "next/app"
import { UIProvider } from "@yamada-ui/react"
import { Inter } from "next/font/google"
import Head from "next/head"

const inter = Inter({
  style: "normal",
  display: "block",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function App({ Component, pageProps }: AppProps) {
  const { cookie } = pageProps

  return (
    <>
      <Head>
        <title>Next.js Pages - Yamada UI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://raw.githubusercontent.com/yamada-ui/yamada-ui/refs/heads/main/logo/favicon.svg"
          rel="icon"
        />
      </Head>

      <UIProvider cookie={cookie} storage="cookie">
        <Component {...{ ...pageProps, inter }} />
      </UIProvider>
    </>
  )
}
