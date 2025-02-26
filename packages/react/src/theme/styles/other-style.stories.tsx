import type { CSSModifierObject } from "../../core"
import { defaultTheme } from ".."
import { Heading } from "../../components/heading"
import { UIProvider } from "../../providers/ui-provider"
import { merge } from "../../utils"

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

  const theme = merge(defaultTheme, { styles: { mdx } })

  return (
    <UIProvider theme={theme}>
      <Heading apply="mdx.h1" truncated>
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </Heading>
    </UIProvider>
  )
}
