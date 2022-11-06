import { UIProvider, extendTheme, Box, Semantics, Wrap } from '@yamada-ui/react'

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
      <Wrap gap='md'>
        <Box bg='primary' p='4' rounded='md' color='white'>
          Box
        </Box>

        <Box bg='newPrimary' p='4' rounded='md' color='white'>
          Box
        </Box>

        <Box bg='extendPrimary' p='4' rounded='md' color='white'>
          Box
        </Box>
      </Wrap>
    </UIProvider>
  )
}
