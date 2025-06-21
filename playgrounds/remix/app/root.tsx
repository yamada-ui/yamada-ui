import type { LinksFunction } from "@remix-run/node"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

export const links: LinksFunction = () => [
  {
    type: "image/svg+xml",
    href: "https://raw.githubusercontent.com/yamada-ui/yamada-ui/refs/heads/main/logo/favicon.svg",
    rel: "icon",
  },
  {
    href: "https://fonts.googleapis.com",
    rel: "preconnect",
  },
  {
    href: "https://fonts.gstatic.com",
    rel: "preconnect",
  },
  {
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    rel: "stylesheet",
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix - Yamada UI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
