import type { FC } from "react"
import type { CenterProps } from "../../src"
import { Center, Image } from "../../src"

interface AppProps extends CenterProps {}

export const App: FC<AppProps> = ({ children, ...rest }) => {
  return (
    <Center
      h={{
        base: "calc(100dvh - {spaces.lg} * 2)",
        md: "calc(100dvh - {spaces.md} * 2)",
      }}
      w={{
        base: "calc(100vw - {spaces.lg} * 2)",
        md: "calc(100vw - {spaces.md} * 2)",
      }}
      {...rest}
    >
      {children ?? (
        <Image
          src="https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"
          maxW="xl"
          w="full"
        />
      )}
    </Center>
  )
}
