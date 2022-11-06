import { UIProvider, extendTheme, Box, Semantics } from '@yamada-ui/react'

export default {
  title: 'System / Theme / Semantic Token',
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
