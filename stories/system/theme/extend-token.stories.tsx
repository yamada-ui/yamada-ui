import { UIProvider, extendTheme, ThemeTokens, extendToken, Center, Image } from '@yamada-ui/react'
import { FC } from 'react'

export default {
  title: 'System / Theme / Tokens',
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

const App: FC = () => {
  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Image
        w='full'
        maxW='32rem'
        src='https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/yamada-ui.png'
      />
    </Center>
  )
}
