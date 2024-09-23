import { ColorModeScript, ThemeSchemeScript } from '@yamada-ui/react'
import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { config } from 'theme'

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
          <ColorModeScript
            type='cookie'
            nonce='testing'
            initialColorMode={config.initialColorMode}
          />
          <ThemeSchemeScript
            type='cookie'
            nonce='testing'
            initialThemeScheme={config.initialThemeScheme}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
