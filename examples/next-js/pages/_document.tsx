import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { SchemeScript } from 'yamada-ui'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <title>Yamada UI</title>
          <link rel='icon' href='/favicon.svg' />
        </Head>

        <body>
          <SchemeScript />

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
