import type { StackProps } from "@yamada-ui/react"
import { HStack } from "@yamada-ui/react"
import { memo } from "react"

interface HeaderProps extends StackProps {
  isCenter?: boolean
}

export const Header = memo<HeaderProps>(({ children, ...rest }) => {
  return (
    <HStack borderBottomWidth="1px" gap="sm" h="14" px="md" w="full" {...rest}>
      {children}
    </HStack>
  )
})

Header.displayName = "Header"
