import type { StackProps } from "@yamada-ui/react"
import {
  Autocomplete,
  Avatar,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuIcon,
  Spacer,
} from "@yamada-ui/react"
import { memo } from "react"
import { ControlButton } from "./control-button"

const TEAM_ITEMS: Autocomplete.Item[] = [
  {
    items: [{ label: "Hirotomo Yamada", value: "Hirotomo Yamada" }],
    label: "Personal Account",
  },
  {
    items: [
      { label: "Yamada Inc.", value: "Yamada Inc." },
      { label: "Monsters Inc.", value: "Monsters Inc." },
      { label: "Dragon Inc.", value: "Dragon Inc." },
    ],
    label: "Term",
  },
]

export interface HeaderProps extends StackProps {}

export const Header = memo<HeaderProps>(({ ...rest }) => {
  return (
    <HStack
      as="header"
      borderBottomWidth="1px"
      px={{ base: "lg", sm: "md" }}
      py="md"
      w="full"
      {...rest}
    >
      <Autocomplete.Root
        defaultValue="Hirotomo Yamada"
        items={TEAM_ITEMS}
        maxW="xs"
        placeholder="Select term…"
      />

      <HStack display={{ base: "flex", md: "none" }} gap="md">
        <ControlButton defaultIsSelected>Overview</ControlButton>
        <ControlButton>Customers</ControlButton>
        <ControlButton>Products</ControlButton>
        <ControlButton>Settings</ControlButton>
      </HStack>

      <Spacer />

      <Menu.Root>
        <Menu.Trigger
          as={IconButton}
          variant="ghost"
          display={{ base: "none", md: "flex" }}
        >
          <MenuIcon fontSize="2xl" />
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item>Overview</Menu.Item>
          <Menu.Item>Customers</Menu.Item>
          <Menu.Item>Products</Menu.Item>
          <Menu.Item>Settings</Menu.Item>
        </Menu.Content>
      </Menu.Root>

      <HStack display={{ base: "flex", md: "none" }}>
        <Input
          type="email"
          autoComplete="email"
          maxW="xs"
          placeholder="Search…"
        />
        <Avatar
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
          size="sm"
        />
        M
      </HStack>
    </HStack>
  )
})

Header.displayName = "Header"
