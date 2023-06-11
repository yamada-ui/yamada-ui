import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ColorModeScript } from '@yamada-ui/react'
import { customConfig } from 'theme'

class Document extends NextDocument {
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
          <ColorModeScript initialColorMode={customConfig.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
