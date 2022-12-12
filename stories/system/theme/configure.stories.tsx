import { UIProvider, extendConfig, Center, Image } from '@yamada-ui/react'
import { FC } from 'react'

export default {
  title: 'System / Theme / Configure',
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
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Image
        w='full'
        maxW='xl'
        src='https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/yamada-ui.png'
      />
    </Center>
  )
}
