import type { UsageTheme } from "@yamada-ui/react"
import type { FC } from "react"
import { Center, Image, UIProvider } from "@yamada-ui/react"

export default {
  title: "System / Theme / Override Theming",
}

export const basic = () => {
  const theme: UsageTheme = {
    /**
     * Define the theme you want to customize
     */
    styles: {
      globalStyle: {
        bg: ["white", "black"],
        color: ["black", "white"],
        fontFamily: "body",
      },
    },
  }

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
        maxW="32rem"
        src="https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"
        w="full"
      />
    </Center>
  )
}
