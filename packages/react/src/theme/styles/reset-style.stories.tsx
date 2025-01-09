import type { FC } from "react"
import type { CSSObject } from "../../core"
import { Center } from "../../components/center"
import { Image } from "../../components/image"
import { UIProvider } from "../../providers/ui-provider"
import { extendTheme } from "../../tools"

export default {
  title: "Theme / Reset Style",
}

export const customResetStyle = () => {
  const resetStyle: CSSObject = {
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
        src="https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"
        maxW="xl"
        w="full"
      />
    </Center>
  )
}
