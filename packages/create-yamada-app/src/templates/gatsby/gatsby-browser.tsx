import * as React from "react"
import type { GatsbyBrowser } from "gatsby"
import { UIProvider } from "@yamada-ui/react"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return <UIProvider>{element}</UIProvider>
}
