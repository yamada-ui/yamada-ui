import type { PropsWithChildren } from "react"
import { Flex } from "@yamada-ui/react"

interface LayoutProps extends PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex
      css={{ "--header-height": "calc({root-header-height} + {space})" }}
      flex="1"
      flexDirection="column"
    >
      {children}
    </Flex>
  )
}
