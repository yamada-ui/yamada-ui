import type { LinksFunction } from "@remix-run/node"
import { json, LoaderFunction } from "@remix-run/node"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react"
import {
  ColorModeScript,
  createColorModeManager,
  createThemeSchemeManager,
  ThemeSchemeScript,
  UIProvider,
} from "@yamada-ui/react"
import { config, theme } from "./theme"

export const links: LinksFunction = () => [
  { type: "image/svg+xml", href: "/favicon.svg", rel: "icon" },
]

export const loader: LoaderFunction = async ({ request }) => {
  const cookies = request.headers.get("Cookie")

  return json({ cookies })
}

export default function App() {
  const { cookies } = useLoaderData<{ cookies: string }>()

  const colorModeManager = createColorModeManager("ssr", cookies)
  const themeSchemeManager = createThemeSchemeManager("ssr", cookies)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        <ColorModeScript
          type="cookie"
          initialColorMode={config.initialColorMode}
          nonce="testing"
        />
        <ThemeSchemeScript
          type="cookie"
          initialThemeScheme={config.initialThemeScheme}
          nonce="testing"
        />

        <UIProvider
          colorModeManager={colorModeManager}
          config={config}
          theme={theme}
          themeSchemeManager={themeSchemeManager}
        >
          <Outlet />
        </UIProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
