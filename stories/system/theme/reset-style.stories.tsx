import type { UIStyle } from "@yamada-ui/react"
import type { FC } from "react"
import { Center, extendTheme, Image, UIProvider } from "@yamada-ui/react"

export default {
  title: "System / Theme / Reset Style",
}

export const customResetStyle = () => {
  const resetStyle: UIStyle = {
    /**
     * Define the style you want to customize
     */
  }
  const theme = extendTheme({ styles: { resetStyle } })()

  return (
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  )
}

export const disabledResetStyle = () => {
  return (
    <UIProvider disableResetStyle>
      <App />
    </UIProvider>
  )
}

const App: FC = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Image
        maxW="xl"
        src="https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"
        w="full"
      />
    </Center>
  )
}
