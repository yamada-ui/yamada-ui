/// <reference types="vite/client" />
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Link as RouterLink,
  Scripts,
} from "@tanstack/react-router"
import {
  Box,
  ColorModeScript,
  HStack,
  ThemeSchemeScript,
  UIProvider,
} from "@yamada-ui/react"
import type { ReactNode } from "react"

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
        <UIProvider storage="cookie">
          <Nav />
          {children}
        </UIProvider>
        <Scripts />
      </body>
    </html>
  )
}

function Nav() {
  return (
    <Box as="nav" borderBottomWidth="1px" px="lg" py="md">
      <HStack gap="md">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </HStack>
    </Box>
  )
}
