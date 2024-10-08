import type { UIStyle } from "@yamada-ui/react"
import type { FC } from "react"
import { Center, extendTheme, Image, UIProvider } from "@yamada-ui/react"

export default {
  title: "System / Theme / Global Style",
}

export const customGlobalStyle = () => {
  const globalStyle: UIStyle = {
    /**
     * Define the style you want to customize
     */
  }
  const theme = extendTheme({ styles: { globalStyle } })()

  return (
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  )
}

const App: FC = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Image
        src="https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"
        maxW="xl"
        w="full"
      />
    </Center>
  )
}
