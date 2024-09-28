"use client"

import { UIProvider, ColorModeScript } from "@yamada-ui/react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>

      <body>
        <ColorModeScript />
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  )
}
