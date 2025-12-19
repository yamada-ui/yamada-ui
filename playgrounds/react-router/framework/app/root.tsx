import {
  Box,
  ColorModeScript,
  Heading,
  Text,
  ThemeSchemeScript,
  UIProvider,
  VStack,
} from "@yamada-ui/react"
import {
  data,
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "react-router"

import type { Route } from "./+types/root"

export const links: Route.LinksFunction = () => [
  {
    type: "image/svg+xml",
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
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    rel: "stylesheet",
  },
]

export function loader({ request }: Route.LoaderArgs) {
  const cookie = request.headers.get("cookie") ?? ""
  return data({ cookie })
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { cookie } = useRouteLoaderData("root")

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning>
        <ColorModeScript type="cookie" />
        <ThemeSchemeScript type="cookie" />
        <UIProvider cookie={cookie}>{children}</UIProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!"
  let details = "An unexpected error occurred."
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error"
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <VStack align="stretch" gap="md" p="lg">
      <Heading size="lg">{message}</Heading>
      <Text color="muted">{details}</Text>
      {stack ? (
        <Box
          as="pre"
          bg="blackAlpha.50"
          fontSize="sm"
          overflowX="auto"
          p="md"
          rounded="md"
        >
          <code>{stack}</code>
        </Box>
      ) : null}
    </VStack>
  )
}
