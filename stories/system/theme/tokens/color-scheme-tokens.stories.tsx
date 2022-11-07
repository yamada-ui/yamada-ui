import { UIProvider, extendTheme, Box, useColorScheme, ThemeTokens } from '@yamada-ui/react'

export default {
  title: 'System / Theme / Tokens',
}

export const useColorSchemeToken = () => {
  const { colorScheme } = useColorScheme()

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
        The current colorScheme is "{colorScheme}"
      </Box>
    </UIProvider>
  )
}
