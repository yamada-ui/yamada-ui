import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorSchemeScript } from '@yamada-ui/react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <title>Next.js Pages - Yamada UI</title>
          <link rel='icon' href='/favicon.svg' />
        </Head>

        <body>
          <ColorSchemeScript />

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
