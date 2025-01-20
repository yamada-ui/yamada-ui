import type { FC } from "react"
import type { CenterProps } from "../../src"
import { Center, Image } from "../../src"

interface AppProps extends CenterProps {
  children: React.ReactNode
}

export const App: FC<AppProps> = (props) => {
  return (
    <Center
      h="calc(100vh - {spaces.md} * 2)"
      w="calc(100vw - {spaces.md} * 2)"
      {...props}
    >
      <Image
        src="https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"
        maxW="xl"
        w="full"
      />
    </Center>
  )
}
