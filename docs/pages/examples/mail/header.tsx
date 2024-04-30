import type { StackProps } from "@yamada-ui/react"
import { HStack } from "@yamada-ui/react"
import { type FC, memo } from "react"

type HeaderProps = StackProps & {
  isCenter?: boolean
}

export const Header: FC<HeaderProps> = memo(({ children, ...rest }) => {
  return (
    <HStack w="full" h="14" px="md" gap="sm" borderBottomWidth="1px" {...rest}>
      {children}
    </HStack>
  )
})

Header.displayName = "Header"
