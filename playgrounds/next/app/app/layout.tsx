import type { Metadata } from "next"
import {
  ColorModeScript,
  ThemeSchemeScript,
  UIProvider,
} from "@yamada-ui/react"
import { Inter } from "next/font/google"
import { cookies } from "next/headers"

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ColorModeScript type="cookie" />
        <ThemeSchemeScript type="cookie" />

        <UIProvider cookie={cookieStore.toString()}>{children}</UIProvider>
      </body>
    </html>
  )
}
