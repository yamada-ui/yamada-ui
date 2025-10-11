import type { StackProps } from "@yamada-ui/react"
import { HStack } from "@yamada-ui/react"

interface HeaderProps extends StackProps {
  isCenter?: boolean
}

export function Header({ children, ...rest }: HeaderProps) {
  return (
    <HStack borderBottomWidth="1px" gap="sm" h="12" px="sm" w="full" {...rest}>
      {children}
    </HStack>
  )
}
