import {
  UIProvider,
  extendTheme,
  Box,
  useColorMode,
  ThemeTokens,
  Semantics,
  Center,
  Image,
  extendToken,
} from '@yamada-ui/react'
import { FC } from 'react'

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

export const useExtendToken = () => {
  const colors: ThemeTokens = extendToken('colors')

  const theme = extendTheme({ colors })()

  return (
    <UIProvider theme={theme}>
      <App />
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

  const theme = extendTheme({ semantics })()

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

const App: FC = () => {
  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Image
        w='full'
        maxW='32rem'
        src='https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png'
      />
    </Center>
  )
}
