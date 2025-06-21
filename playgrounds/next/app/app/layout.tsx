import type { Metadata } from "next"
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
