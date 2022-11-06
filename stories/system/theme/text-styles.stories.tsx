import { UIProvider, extendTheme, TextStyles, Heading } from '@yamada-ui/react'

export default {
  title: 'System / Theme / Text Styles',
}

export const useTextStyle = () => {
  const textStyles: TextStyles = {
    gradient: {
      w: 'full',
      fontSize: '5xl',
      bgGradient: 'linear(to-l, #7928CA, #FF0080)',
      bgClip: 'text',
    },
  }

  const theme = extendTheme({
    styles: { textStyles },
  })

  return (
    <UIProvider theme={theme}>
      <Heading textStyle='gradient' isTruncated>
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </Heading>
    </UIProvider>
  )
}
