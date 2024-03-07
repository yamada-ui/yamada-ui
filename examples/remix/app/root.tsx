import { cssBundleHref } from "@remix-run/css-bundle"
import type { LinksFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import {
  // ColorModeScript,
  // ThemeSchemeScript,
  UIProvider,
} from "@yamada-ui/react"
import { config } from "./theme"

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* <ColorModeScript
          type="cookie"
          nonce="testing"
          initialColorMode={config.initialColorMode}
        />
        <ThemeSchemeScript
          type="cookie"
          nonce="testing"
          initialThemeScheme={config.initialThemeScheme}
        /> */}

        <UIProvider>
          <Outlet />
        </UIProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
