import {
  Autocomplete,
  Avatar,
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useBoolean,
} from "@yamada-ui/react"
import type { ButtonProps, StackProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"
import { Menu as MenuIcon } from "@yamada-ui/lucide"

const TEAM_ITEMS = [
  {
    label: "Personal Account",
    items: [{ label: "Hirotomo Yamada", value: "Hirotomo Yamada" }],
  },
  {
    label: "Term",
    items: [
      { label: "Yamada Inc.", value: "Yamada Inc." },
      { label: "Monsters Inc.", value: "Monsters Inc." },
      { label: "Dragon Inc.", value: "Dragon Inc." },
    ],
  },
]

export type HeaderProps = StackProps & {}

export const Header: FC<HeaderProps> = memo(({ ...rest }) => {
  return (
    <HStack
      as="header"
      w="full"
      borderBottomWidth="1px"
      px={{ base: "lg", sm: "md" }}
      py="md"
      {...rest}
    >
      <Autocomplete
        maxW="xs"
        placeholder="Select term…"
        defaultValue="Hirotomo Yamada"
        autoComplete="username"
        items={TEAM_ITEMS}
      />

      <ButtonGroup gap="md" display={{ base: "flex", md: "none" }}>
        <ControlButton defaultIsSelected>Overview</ControlButton>
        <ControlButton>Customers</ControlButton>
        <ControlButton>Products</ControlButton>
        <ControlButton>Settings</ControlButton>
      </ButtonGroup>

      <Spacer />

      <Menu>
        <MenuButton
          as={IconButton}
          variant="ghost"
          display={{ base: "none", md: "flex" }}
        >
          <MenuIcon fontSize="2xl" />
        </MenuButton>

        <MenuList>
          <MenuItem>Overview</MenuItem>
          <MenuItem>Customers</MenuItem>
          <MenuItem>Products</MenuItem>
          <MenuItem>Settings</MenuItem>
        </MenuList>
      </Menu>

      <HStack display={{ base: "flex", md: "none" }}>
        <Input
          maxW="xs"
          type="email"
          autoComplete="email"
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

type ControlButtonProps = ButtonProps & {
  defaultIsSelected?: boolean
}

const ControlButton: FC<ControlButtonProps> = memo(
  ({ defaultIsSelected, ...rest }) => {
    const [isSelected] = useBoolean(defaultIsSelected)
    return (
      <Button
        variant="unstyled"
        fontWeight="normal"
        color={isSelected ? ["black", "white"] : "muted"}
        _hover={isSelected ? {} : { color: ["black", "white"] }}
        {...rest}
      />
    )
  },
)

ControlButton.displayName = "ControlButton"
