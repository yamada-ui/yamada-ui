import { Center, Image, UIProvider, extendTheme } from '@yamada-ui/react'
import { FC } from 'react'

export default {
  title: 'System / Theme / Theming / Extend Theming',
}

export const basic = () => {
  const theme = extendTheme({
    /**
     * Define the theme you want to customize, merging them with the default theme
     */
  })({
    merge: true, // If false, Not merge default themes
    omit: [], // Tokens of default themes you want to omit in the merge
    pick: [], // Tokens of default themes you want to pick in the merge
  })

  return (
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  )
}

export const useMultiObject = () => {
  const theme = extendTheme({ colors: { black: '#1F2123' } }, { colors: { white: '#F6F6F6' } })()

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
        maxW='32rem'
        src='https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/yamada-ui.png'
      />
    </Center>
  )
}
