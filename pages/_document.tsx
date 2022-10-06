import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
// import { SchemeScript } from 'provider'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <title>Yamada UI</title>
        </Head>

        <body>
          {/* <SchemeScript /> */}

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
