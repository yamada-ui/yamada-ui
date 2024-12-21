import { Heading } from "../../components/heading"
import { UIProvider } from "../../providers/ui-provider"
import { extendTheme } from "../../tools"

export default {
  title: "Theme / Other Style",
}

export const Basic = () => {
  const theme = extendTheme({
    styles: {
      mdx: {
        h1: {
          color: "primary",
          fontSize: "2xl",
        },
      },
    },
  })()

  return (
    <UIProvider theme={theme}>
      <Heading apply="mdx.h1" isTruncated>
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </Heading>
    </UIProvider>
  )
}
