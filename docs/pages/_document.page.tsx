import { ColorModeScript } from '@yamada-ui/react'

import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang='en'>
      <Head />

      <body>
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
