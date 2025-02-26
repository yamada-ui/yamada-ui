import type { CSSModifierObject } from "../../core"
import { defaultTheme } from ".."
import { Heading } from "../../components/heading"
import { UIProvider } from "../../providers/ui-provider"
import { merge } from "../../utils"

export default {
  title: "Theme / Text Style",
}

export const Basic = () => {
  const textStyles: CSSModifierObject = {
    gradient: {
      bgClip: "text",
      bgGradient: "linear(to-l, #7928CA, #FF0080)",
      fontSize: "5xl",
      w: "full",
    },
  }

  const theme = merge(defaultTheme, { styles: { textStyles } })

  return (
    <UIProvider theme={theme}>
      <Heading textStyle="gradient" truncated>
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </Heading>
    </UIProvider>
  )
}
