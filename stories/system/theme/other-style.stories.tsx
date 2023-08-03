import { UIProvider, extendTheme, Heading } from '@yamada-ui/react'

export default {
  title: 'System / Theme / Other Styles',
}

export const useOtherStyle = () => {
  const theme = extendTheme({
    styles: {
      mdx: {
        h1: {
          fontSize: '2xl',
          color: 'primary',
        },
      },
    },
  })()

  return (
    <UIProvider theme={theme}>
      <Heading apply='mdx.h1' isTruncated>
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </Heading>
    </UIProvider>
  )
}
