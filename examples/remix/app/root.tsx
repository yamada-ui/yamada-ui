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
  COLOR_MODE_STORAGE_KEY,
  ColorModeScript,
  THEME_SCHEME_STORAGE_KEY,
  ThemeSchemeScript,
  UIProvider,
  createColorModeManager,
  createThemeSchemeManager,
} from "@yamada-ui/react"
import theme, { config } from "./theme"
import { ClientOnly } from "remix-utils/client-only"
import { json, LoaderFunction } from "@remix-run/node"
import { useMemo } from "react"

const parseCookie = (cookie: string, key: string) => {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`))

  return match?.[2]
}

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
]

export const loader: LoaderFunction = async ({ request }) => {
  const cookies = request.headers.get("Cookie")

  return json({ cookies })
}

export default function App() {
  let { cookies } = useLoaderData<{ cookies: string }>()

  if (typeof document !== "undefined") cookies = document.cookie

  const colorModeManager = createColorModeManager("ssr", cookies)
  const themeSchemeManager = createThemeSchemeManager("ssr", cookies)

  const colorMode = useMemo(
    () =>
      parseCookie(cookies, COLOR_MODE_STORAGE_KEY) ?? config.initialColorMode,
    [],
  )

  const themeScheme = useMemo(
    () =>
      parseCookie(cookies, THEME_SCHEME_STORAGE_KEY) ??
      config.initialThemeScheme,
    [],
  )

  return (
    <html
      lang="en"
      data-mode={colorMode}
      data-theme={themeScheme}
      style={{ colorScheme: colorMode }}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body className={`ui-${colorMode}`}>
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
