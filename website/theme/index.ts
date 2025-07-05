import type { CSSObject } from "@yamada-ui/react"
import { defaultTheme, defineTheme, merge } from "@yamada-ui/react"

export const theme = defineTheme({
  ...defaultTheme,
  styles: {
    ...defaultTheme.styles,
    globalStyle: merge<CSSObject>(defaultTheme.styles.globalStyle, {
      html: {
        scrollBehavior: "smooth",
      },
    }),
  },
})
