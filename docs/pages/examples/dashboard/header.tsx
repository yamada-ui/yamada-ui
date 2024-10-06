import type { ButtonProps, StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import { MenuIcon } from "@yamada-ui/lucide"
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
import { memo } from "react"

const TEAM_ITEMS = [
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

export const Header: FC<HeaderProps> = memo(({ ...rest }) => {
  return (
    <HStack
      as="header"
      borderBottomWidth="1px"
      px={{ base: "lg", sm: "md" }}
      py="md"
      w="full"
      {...rest}
    >
      <Autocomplete
        autoComplete="username"
        defaultValue="Hirotomo Yamada"
        items={TEAM_ITEMS}
        maxW="xs"
        placeholder="Select term…"
      />

      <ButtonGroup display={{ base: "flex", md: "none" }} gap="md">
        <ControlButton defaultIsSelected>Overview</ControlButton>
        <ControlButton>Customers</ControlButton>
        <ControlButton>Products</ControlButton>
        <ControlButton>Settings</ControlButton>
      </ButtonGroup>

      <Spacer />

      <Menu>
        <MenuButton
          as={IconButton}
          display={{ base: "none", md: "flex" }}
          variant="ghost"
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
          type="email"
          autoComplete="email"
          maxW="xs"
          placeholder="Search…"
        />
        <Avatar
          size="sm"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
        M
      </HStack>
    </HStack>
  )
})

Header.displayName = "Header"

type ControlButtonProps = {
  defaultIsSelected?: boolean
} & ButtonProps

const ControlButton: FC<ControlButtonProps> = memo(
  ({ defaultIsSelected, ...rest }) => {
    const [isSelected] = useBoolean(defaultIsSelected)
    return (
      <Button
        _hover={isSelected ? {} : { color: ["black", "white"] }}
        color={isSelected ? ["black", "white"] : "muted"}
        fontWeight="normal"
        variant="unstyled"
        {...rest}
      />
    )
  },
)

ControlButton.displayName = "ControlButton"
