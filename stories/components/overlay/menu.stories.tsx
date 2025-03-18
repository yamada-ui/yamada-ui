import type { Meta, StoryFn } from "@storybook/react"
import {
  ChevronDownIcon,
  MenuIcon,
  PlusIcon,
  SquareArrowOutUpRightIcon,
  SquarePenIcon,
} from "@yamada-ui/lucide"
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuItemButton,
  MenuList,
  MenuOptionGroup,
  MenuOptionItem,
  MenuSeparator,
  Portal,
  useDisclosure,
} from "@yamada-ui/react"
import { useRef } from "react"

type Story = StoryFn<typeof Menu>

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: "Components / Overlay / Menu",
}

export default meta

export const basic: Story = () => {
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

export const withCommand: Story = () => {
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

export const withIcon: Story = () => {
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

export const withInitialFocusRef: Story = () => {
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

export const withPlacement: Story = () => {
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

export const withAnimation: Story = () => {
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

export const withOffset: Story = () => {
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

export const withGutter: Story = () => {
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

export const withDuration: Story = () => {
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

export const withSeparator: Story = () => {
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

export const withGroup: Story = () => {
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

export const withOptionGroup: Story = () => {
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

export const withPortal: Story = () => {
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

export const nestedMenu: Story = () => {
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

export const disabledCloseOnSelect: Story = () => {
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

export const disabledCloseBlur: Story = () => {
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

export const disabled: Story = () => {
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

export const isFocusable: Story = () => {
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

export const useLazy: Story = () => {
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

export const customControl: Story = () => {
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
