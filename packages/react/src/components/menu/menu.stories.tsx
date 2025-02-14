import type { Meta, StoryFn } from "@storybook/react"
import { useRef } from "react"
import { useDisclosure } from "../../hooks/use-disclosure"
import { Button, IconButton } from "../button"
import {
  ChevronDownIcon,
  MenuIcon,
  PlusIcon,
  SquareArrowOutUpRightIcon,
  SquarePenIcon,
} from "../icon"
import { Portal } from "../portal"
import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuItemButton,
  MenuList,
  MenuOptionGroup,
  MenuOptionItem,
  MenuSeparator,
} from "./"

type Story = StoryFn<typeof Menu>

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: "Components / Menu",
}

export default meta

export const Basic: Story = () => {
  return (
    <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const WithCommand: Story = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        variant="outline"
        aria-label="Menu"
        icon={<MenuIcon fontSize="2xl" />}
      />

      <MenuList>
        <MenuItem command="⌘T">New Tab</MenuItem>
        <MenuItem command="⌘N">New Window</MenuItem>
        <MenuItem command="⌘O">Open File</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const WithIcon: Story = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        variant="outline"
        aria-label="Menu"
        icon={<MenuIcon fontSize="2xl" />}
      />

      <MenuList>
        <MenuItem command="⌘T" icon={<PlusIcon fontSize="lg" />}>
          New Tab
        </MenuItem>
        <MenuItem
          command="⌘N"
          icon={<SquareArrowOutUpRightIcon fontSize="lg" />}
        >
          New Window
        </MenuItem>
        <MenuItem command="⌘O" icon={<SquarePenIcon fontSize="lg" />}>
          Open File
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export const WithInitialFocusRef: Story = () => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Menu initialFocusRef={ref}>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem ref={ref}>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const WithPlacement: Story = () => {
  return (
    <Menu placement="right-start">
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const WithAnimation: Story = () => {
  return (
    <Menu animation="top">
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const WithOffset: Story = () => {
  return (
    <Menu offset={[16, 16]}>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const WithGutter: Story = () => {
  return (
    <Menu gutter={32}>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const WithDuration: Story = () => {
  return (
    <Menu duration={0.4}>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const WithSeparator: Story = () => {
  return (
    <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>

        <MenuSeparator />

        <MenuItem>Sign out</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const WithGroup: Story = () => {
  return (
    <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuGroup label="account">
          <MenuItem>Set status</MenuItem>
          <MenuItem>Edit Profile</MenuItem>
          <MenuItem>Preferences</MenuItem>
        </MenuGroup>

        <MenuSeparator />

        <MenuGroup label="action">
          <MenuItem>Sign out</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export const WithOptionGroup: Story = () => {
  return (
    <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuOptionGroup type="radio" label="order">
          <MenuOptionItem value="asc">Ascending</MenuOptionItem>
          <MenuOptionItem value="desc">Descending</MenuOptionItem>
        </MenuOptionGroup>

        <MenuSeparator />

        <MenuOptionGroup type="checkbox" label="display">
          <MenuOptionItem value="gender">gender</MenuOptionItem>
          <MenuOptionItem value="email">email</MenuOptionItem>
          <MenuOptionItem value="phone">phone</MenuOptionItem>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}

export const WithPortal: Story = () => {
  return (
    <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <Portal>
        <MenuList>
          <MenuItem>Set status</MenuItem>
          <MenuItem>Edit Profile</MenuItem>
          <MenuItem>Preferences</MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  )
}

export const NestedMenu: Story = () => {
  return (
    <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>
          <Menu>
            <MenuItemButton>Settings</MenuItemButton>

            <MenuList>
              <MenuItem>Extensions</MenuItem>
              <MenuItem>
                <Menu>
                  <MenuItemButton>Theme</MenuItemButton>

                  <MenuList>
                    <MenuItem>Color Theme</MenuItem>
                    <MenuItem>File Icon Theme</MenuItem>
                    <MenuItem>Product Icon Theme</MenuItem>
                  </MenuList>
                </Menu>
              </MenuItem>
              <MenuItem>User Tasks</MenuItem>
            </MenuList>
          </Menu>
        </MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const DisabledCloseOnSelect: Story = () => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem closeOnSelect>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const DisabledCloseBlur: Story = () => {
  return (
    <Menu closeOnBlur={false}>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const Disabled: Story = () => {
  return (
    <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem disabled>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const Focusable: Story = () => {
  return (
    <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem disabled focusable>
          Edit Profile
        </MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const UseLazy: Story = () => {
  return (
    <Menu lazy>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const CustomControl: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <Menu open={open} onClose={onClose} onOpen={onOpen}>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}
