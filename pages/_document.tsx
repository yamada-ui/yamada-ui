import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
// import { SchemeScript } from 'ui'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='ja'>
        <Head></Head>

        <body>
          {/* <SchemeScript /> */}

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
