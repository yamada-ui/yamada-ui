import { extendTheme, Heading, UIProvider } from "@yamada-ui/react"

export default {
  title: "System / Theme / Other Styles",
}

export const useOtherStyle = () => {
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
