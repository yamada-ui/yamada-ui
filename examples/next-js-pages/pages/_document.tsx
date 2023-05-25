import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ColorSchemeScript } from '@yamada-ui/react'
import { customConfig } from 'theme'

export default class Document extends NextDocument {
  static getInitialProps(props: DocumentContext) {
    return NextDocument.getInitialProps(props)
  }

  render() {
    return (
      <Html lang='ja'>
        <Head>
          <title>Next.js Pages - Yamada UI</title>
          <link rel='icon' href='/favicon.svg' />
        </Head>

        <body>
          <ColorSchemeScript initialColorScheme={customConfig.initialColorScheme} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
