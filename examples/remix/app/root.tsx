import type { LinksFunction } from "@remix-run/node"
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
  ThemeSchemeScript,
  UIProvider,
  createColorModeManager,
  createThemeSchemeManager,
} from "@yamada-ui/react"
import theme, { config } from "./theme"
import { json, LoaderFunction } from "@remix-run/node"

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
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
          nonce="testing"
          initialColorMode={config.initialColorMode}
        />
        <ThemeSchemeScript
          type="cookie"
          nonce="testing"
          initialThemeScheme={config.initialThemeScheme}
        />

        <UIProvider
          config={config}
          theme={theme}
          colorModeManager={colorModeManager}
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
