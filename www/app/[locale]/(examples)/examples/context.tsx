"use client"

import type { ExampleTheme } from "./data"
import {
  createStore,
  extendConfig,
  extendTheme,
  UIProvider,
} from "@yamada-ui/react"

export const [useExampleTheme, exampleThemeMethods] = createStore<
  ExampleTheme,
  {}
>("default")

export const ExampleThemeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const theme = extendTheme({})
  const config = extendConfig({})
  return (
    <UIProvider config={config} theme={theme}>
      {children}
    </UIProvider>
  )
}
