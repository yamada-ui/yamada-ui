import {
  faArrowUpRightFromSquare,
  faBars,
  faChevronDown,
  faEdit,
  faPlus,
} from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  MenuOptionGroup,
  MenuOptionItem,
  Portal,
  useDisclosure,
} from "@yamada-ui/react"
import { useRef } from "react"

type Story = StoryFn<typeof Menu>

const meta: Meta<typeof Menu> = {
  title: "Components / Overlay / Menu",
  component: Menu,
}

export default meta

export const basic: Story = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
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
        icon={<Icon icon={faBars} />}
        variant="outline"
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
        icon={<Icon icon={faBars} />}
        variant="outline"
      />

      <MenuList>
        <MenuItem icon={<Icon icon={faPlus} />} command="⌘T">
          New Tab
        </MenuItem>
        <MenuItem icon={<Icon icon={faArrowUpRightFromSquare} />} command="⌘N">
          New Window
        </MenuItem>
        <MenuItem icon={<Icon icon={faEdit} />} command="⌘O">
          Open File
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export const withInitialFocusRef: Story = () => {
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <Menu initialFocusRef={ref}>
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
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
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
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
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
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
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
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
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
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
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
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

export const withDivider: Story = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>

        <MenuDivider />

        <MenuItem>Sign out</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const withGroup: Story = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
        Menu
      </MenuButton>

      <MenuList>
        <MenuGroup label="account">
          <MenuItem>Set status</MenuItem>
          <MenuItem>Edit Profile</MenuItem>
          <MenuItem>Preferences</MenuItem>
        </MenuGroup>

        <MenuDivider />

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
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
        Menu
      </MenuButton>

      <MenuList>
        <MenuOptionGroup label="order" type="radio">
          <MenuOptionItem value="asc">Ascending</MenuOptionItem>
          <MenuOptionItem value="desc">Descending</MenuOptionItem>
        </MenuOptionGroup>

        <MenuDivider />

        <MenuOptionGroup label="display" type="checkbox">
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
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
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

export const disabledCloseOnSelect: Story = () => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem closeOnSelect={true}>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const disabledCloseBlur: Story = () => {
  return (
    <Menu closeOnBlur={false}>
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
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

export const isDisabled: Story = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem isDisabled>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const isFocusable: Story = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem isDisabled isFocusable>
          Edit Profile
        </MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const useLazy: Story = () => {
  return (
    <Menu isLazy>
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
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
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <MenuButton
        as={Button}
        rightIcon={<Icon size="xs" icon={faChevronDown} />}
      >
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
