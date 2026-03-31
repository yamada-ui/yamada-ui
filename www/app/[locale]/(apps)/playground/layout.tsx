import type { PropsWithChildren } from "react"
import { Box } from "@yamada-ui/react"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Box flex="1" mx="calc(-1 * {space})" w="calc(100% + {space} * 2)">
      {children}
    </Box>
  )
}
