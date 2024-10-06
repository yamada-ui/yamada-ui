import type { FC } from "react"
import { Center, extendConfig, Image, UIProvider } from "@yamada-ui/react"

export default {
  title: "System / Theme / Configure",
}

export const extendConfigure = () => {
  const config = extendConfig({
    /**
     * Define the config you want to customize, merging them with the default config
     */
  })

  return (
    <UIProvider config={config}>
      <App />
    </UIProvider>
  )
}

export const overrideConfigure = () => {
  const config = {
    /**
     * Define the config you want to customize
     */
  }

  return (
    <UIProvider config={config}>
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
