import type { StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import { Heading, Text, VStack } from "@yamada-ui/react"
import { memo } from "react"

export interface HeaderProps extends StackProps {}

export const Header: FC<HeaderProps> = memo(({ ...rest }) => {
  return (
    <VStack as="header" gap="xs" {...rest}>
      <Heading as="h2" size="normal">
        Settings
      </Heading>

      <Text color="muted">
        Manage your account settings and set e-mail preferences.
      </Text>
    </VStack>
  )
})

Header.displayName = "Header"
