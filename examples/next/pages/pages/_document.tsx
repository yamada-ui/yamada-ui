import type { DocumentContext } from 'next/document'
import { ColorModeScript, ThemeSchemeScript } from '@yamada-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import { config } from 'theme'

class Document extends NextDocument {
  static async getInitialProps(props: DocumentContext) {
    return NextDocument.getInitialProps(props)
  }

  render() {
    return (
      <Html lang='ja'>
        <Head>
          <title>Next.js Pages - Yamada UI</title>
          <link href='/favicon.svg' rel='icon' />
        </Head>

        <body>
          <ColorModeScript
            type='cookie'
            initialColorMode={config.initialColorMode}
            nonce='testing'
          />
          <ThemeSchemeScript
            type='cookie'
            initialThemeScheme={config.initialThemeScheme}
            nonce='testing'
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
