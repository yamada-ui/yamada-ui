import {
  UIProvider,
  extendTheme,
  Box,
  Semantics,
  useColorScheme,
  ThemeTokens,
} from '@yamada-ui/react'

export default {
  title: 'System / Theme / Tokens',
}

export const useColorSchemeToken = () => {
  const { colorScheme } = useColorScheme()

  const colors: ThemeTokens = {
    primary: ['#2196F3', '#F44336'],
  }

  const theme = extendTheme({ colors })

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

export const useSemanticToken = () => {
  const semantics: Semantics = {
    colors: {
      primary: '#FF7F0B', // override token primary
      newPrimary: 'red.500',
      extendPrimary: 'primary',
    },
  }

  const theme = extendTheme({ semantics })

  return (
    <UIProvider theme={theme}>
      <Box bg='primary' w='full' p='4' rounded='md' color='white'>
        override primary
      </Box>

      <Box bg='newPrimary' w='full' p='4' rounded='md' color='white'>
        new primary
      </Box>

      <Box bg='extendPrimary' w='full' p='4' rounded='md' color='white'>
        extend primary
      </Box>
    </UIProvider>
  )
}
