import type { Metadata } from "next"
import {
  colorModeManager,
  ColorModeScript,
  themeSchemeManager,
  ThemeSchemeScript,
  UIProvider,
} from "@yamada-ui/react"
import { Inter } from "next/font/google"

const inter = Inter({
  style: "normal",
  display: "block",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  icons:
    "https://raw.githubusercontent.com/yamada-ui/yamada-ui/refs/heads/main/logo/favicon.svg",
  title: "Next.js App - Yamada UI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ColorModeScript type="cookie" />
        <ThemeSchemeScript type="cookie" />

        <UIProvider
          colorModeManager={colorModeManager.cookieStorage}
          themeSchemeManager={themeSchemeManager.cookieStorage}
        >
          {children}
        </UIProvider>
      </body>
    </html>
  )
}
