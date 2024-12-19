import type { FC } from "react"
import { Center } from "../../components/center"
import { Image } from "../../components/image"
import { extendConfig } from "../../theme"
import { UIProvider } from "./ui-provider"

export default {
  title: "Theme / Configure",
}

export const ExtendConfigure = () => {
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

export const OverrideConfigure = () => {
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
        src="https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"
        maxW="xl"
        w="full"
      />
    </Center>
  )
}
