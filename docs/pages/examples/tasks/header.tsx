import {
  Avatar,
  HStack,
  VStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  Heading,
  Box,
} from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"

export interface HeaderProps extends StackProps {}

export const Header: FC<HeaderProps> = memo(({ ...rest }) => {
  return (
    <HStack mb={{ base: "md", sm: "0" }} {...rest}>
      <VStack gap="0">
        <Heading as="h3" size="lg">
          Welcome back!
        </Heading>

        <Text color="muted">Here's a list of your tasks for this month!</Text>
      </VStack>

      <Menu gutter={16}>
        <MenuButton cursor="pointer">
          <Avatar
            name="Hirotomo Yamada"
            src="https://avatars.githubusercontent.com/u/84060430?v=4"
          />
        </MenuButton>

        <MenuList>
          <MenuGroup px="3">
            <Box as="li">
              <Text lineClamp={1}>Hirotomo Yamada</Text>
            </Box>

            <Box as="li">
              <Text fontSize="sm" color="muted" lineClamp={1}>
                mail@example.com
              </Text>
            </Box>
          </MenuGroup>

          <MenuDivider />

          <MenuGroup>
            <MenuItem command="⇧⌘P">Profile</MenuItem>
            <MenuItem command="⌘B">Billing</MenuItem>
            <MenuItem command="⌘S">Settings</MenuItem>
            <MenuItem>New Team</MenuItem>
          </MenuGroup>

          <MenuDivider />

          <MenuGroup>
            <MenuItem command="⇧⌘Q">Logout</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </HStack>
  )
})

Header.displayName = "Header"
