import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Text,
} from "@yamada-ui/react"

export const Header = () => (
  <Flex>
    <Stack g={0}>
      <Text fontSize="2xl" fontWeight="bold">
        Welcome back!
      </Text>
      <Text fontSize="sm" color="gray.500">
        Here's a list of your tasks for this month!
      </Text>
    </Stack>
    <Spacer />
    <Menu>
      <MenuButton>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </MenuButton>
      <MenuList>
        <MenuGroup title="Profile" px={4}>
          <Text>Hirotomo Yamada</Text>
          <Text color="gray.500">mail@example.com</Text>
        </MenuGroup>
        <MenuDivider />
        <MenuItem command="⇧⌘P">Profile</MenuItem>
        <MenuItem command="⌘B">Billing</MenuItem>
        <MenuItem command="⌘S">Settings</MenuItem>
        <MenuItem>New Team</MenuItem>
        <MenuDivider />
        <MenuItem command="⇧⌘Q">Logout</MenuItem>
      </MenuList>
    </Menu>
  </Flex>
)
