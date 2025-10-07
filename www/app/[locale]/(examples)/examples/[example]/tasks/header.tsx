import type { StackProps } from "@yamada-ui/react"
import {
  Avatar,
  Box,
  Heading,
  HStack,
  Menu,
  Text,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"

export interface HeaderProps extends StackProps {}

export const Header = memo<HeaderProps>(({ ...rest }) => {
  return (
    <HStack mb={{ base: "md", sm: "0" }} {...rest}>
      <VStack gap="0">
        <Heading as="h3" size="lg">
          Welcome back!
        </Heading>

        <Text color="muted">Here's a list of your tasks for this month!</Text>
      </VStack>

      <Menu.Root gutter={16}>
        <Menu.Trigger>
          <Avatar
            as="button"
            name="Hirotomo Yamada"
            src="https://avatars.githubusercontent.com/u/84060430?v=4"
            cursor="pointer"
          />
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Group px="3">
            <Box as="li" listStyleType="none">
              <Text lineClamp={1}>Hirotomo Yamada</Text>
            </Box>

            <Box as="li" listStyleType="none">
              <Text color="muted" fontSize="sm" lineClamp={1}>
                mail@example.com
              </Text>
            </Box>
          </Menu.Group>

          <Menu.Separator />

          <Menu.Group>
            <Menu.Item>
              Profile<Menu.Command>⇧⌘P</Menu.Command>
            </Menu.Item>
            <Menu.Item>
              Billing<Menu.Command>⌘B</Menu.Command>
            </Menu.Item>
            <Menu.Item>
              Settings<Menu.Command>⌘S</Menu.Command>
            </Menu.Item>
            <Menu.Item>New Team</Menu.Item>
          </Menu.Group>

          <Menu.Separator />

          <Menu.Group>
            <Menu.Item>
              Logout<Menu.Command>⇧⌘Q</Menu.Command>
            </Menu.Item>
          </Menu.Group>
        </Menu.Content>
      </Menu.Root>
    </HStack>
  )
})

Header.displayName = "Header"
