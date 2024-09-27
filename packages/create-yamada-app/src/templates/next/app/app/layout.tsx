"use client"

import { UIProvider } from "@yamada-ui/react"

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
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  )
}
