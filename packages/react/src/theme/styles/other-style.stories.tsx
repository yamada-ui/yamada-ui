import type { CSSModifierObject } from "../../core"
import { Heading } from "../../components/heading"
import { extendTheme, UIProvider } from "../../providers/ui-provider"

export default {
  title: "Theme / Other Style",
}

export const Basic = () => {
  const mdx: CSSModifierObject = {
    h1: {
      color: "primary",
      fontSize: "2xl",
    },
  }

  const theme = extendTheme({ styles: { mdx } })

  return (
    <UIProvider theme={theme}>
      <Heading apply="mdx.h1" truncated>
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </Heading>
    </UIProvider>
  )
}
