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
  colorModeManager,
  themeSchemeManager,
  ColorModeScript,
  ThemeSchemeScript,
  UIProvider,
} from "@yamada-ui/react"
import theme, { config } from "./theme"
import { ClientOnly } from "remix-utils/client-only"

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <Meta />
        <Links />
      </head>
      <body>
        <ClientOnly fallback={<></>}>
          {() => (
            <>
              <ColorModeScript
                type="cookie"
                nonce="testing"
                initialColorMode={config.initialColorMode}
              />
              <ThemeSchemeScript
                type="cookie"
                nonce="testing"
                initialThemeScheme={config.initialThemeScheme}
              />
            </>
          )}
        </ClientOnly>
        <UIProvider
          config={config}
          theme={theme}
          colorModeManager={colorModeManager.cookieStorage}
          themeSchemeManager={themeSchemeManager.cookieStorage}
        >
          <Outlet />
        </UIProvider>
        <ScrollRestoration />
        <Scripts />
        {/* <LiveReload /> */}
      </body>
    </html>
  )
}
