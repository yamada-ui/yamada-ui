/// <reference types="vite/client" />
import type { ReactNode } from "react"

import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router"
import {
  ColorModeScript,
  ThemeSchemeScript,
  UIProvider,
} from "@yamada-ui/react"

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    links: [
      {
        href: "https://raw.githubusercontent.com/yamada-ui/yamada-ui/refs/heads/main/logo/favicon.svg",
        rel: "icon",
      },
      { href: "https://fonts.googleapis.com", rel: "preconnect" },
      {
        href: "https://fonts.gstatic.com",
        rel: "preconnect",
        crossOrigin: "anonymous",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
        rel: "stylesheet",
      },
    ],
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TanStack Start - Yamada UI" },
    ],
  }),
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        <ColorModeScript type="cookie" />
        <ThemeSchemeScript type="cookie" />
        <UIProvider storage="cookie">{children}</UIProvider>
        <Scripts />
      </body>
    </html>
  )
}
