import { UIProvider, extendTheme, Box, useColorMode, ThemeTokens } from '@yamada-ui/react'

export default {
  title: 'System / Theme / Tokens',
}

export const useColorModeToken = () => {
  const { colorMode } = useColorMode()

  const colors: ThemeTokens = {
    primary: ['#2196F3', '#F44336'],
  }

  const theme = extendTheme({ colors })()

  return (
    <UIProvider theme={theme}>
      <Box
        bg='primary'
        p='md'
        rounded='md'
        color='white'
        transitionProperty='all'
        transitionDuration='normal'
      >
        The current colorMode is "{colorMode}"
      </Box>
    </UIProvider>
  )
}
