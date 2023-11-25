import type { UsageTheme } from "@yamada-ui/react"
import { Center, Image, UIProvider } from "@yamada-ui/react"
import type { FC } from "react"

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
        fontFamily: "body",
        bg: ["white", "black"],
        color: ["black", "white"],
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
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Image
        w="full"
        maxW="32rem"
        src="https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"
      />
    </Center>
  )
}
