import type { TextStyles } from "@yamada-ui/react"
import { extendTheme, Heading, UIProvider } from "@yamada-ui/react"

export default {
  title: "System / Theme / Text Styles",
}

export const useTextStyle = () => {
  const textStyles: TextStyles = {
    gradient: {
      bgClip: "text",
      bgGradient: "linear(to-l, #7928CA, #FF0080)",
      fontSize: "5xl",
      w: "full",
    },
  }

  const theme = extendTheme({
    styles: { textStyles },
  })()

  return (
    <UIProvider theme={theme}>
      <Heading textStyle="gradient" isTruncated>
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </Heading>
    </UIProvider>
  )
}
