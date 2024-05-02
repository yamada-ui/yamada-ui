import { Heading, Text, VStack } from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"

export type HeaderProps = StackProps & {}

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
