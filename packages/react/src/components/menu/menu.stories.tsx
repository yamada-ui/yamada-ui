import type { Meta, StoryFn } from "@storybook/react-vite"
import { useRef } from "react"
import { useDisclosure } from "../../hooks/use-disclosure"
import { Button, IconButton } from "../button"
import {
  ChevronDownIcon,
  MenuIcon,
  PlusIcon,
  SquareArrowOutUpRightIcon,
  SquarePenIcon,
} from "../icon/icons"
import { Portal } from "../portal"
import { Menu } from "./"

type Story = StoryFn<typeof Menu.Root>

const meta: Meta<typeof Menu.Root> = {
  component: Menu.Root,
  title: "Components / Menu",
}

export default meta

export const Basic: Story = () => {
  return (
    <Menu.Root>
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Menu.List>
        <Menu.Item>Set status</Menu.Item>
        <Menu.Item>Edit Profile</Menu.Item>
        <Menu.Item>Preferences</Menu.Item>
      </Menu.List>
    </Menu.Root>
  )
}

export const Command: Story = () => {
  return (
    <Menu.Root>
      <Menu.Button
        as={IconButton}
        variant="outline"
        aria-label="Menu"
        icon={<MenuIcon fontSize="2xl" />}
      />

      <Menu.List>
        <Menu.Item command="⌘T">New Tab</Menu.Item>
        <Menu.Item command="⌘N">New Window</Menu.Item>
        <Menu.Item command="⌘O">Open File</Menu.Item>
      </Menu.List>
    </Menu.Root>
  )
}

export const Icon: Story = () => {
  return (
    <Menu.Root>
      <Menu.Button
        as={IconButton}
        variant="outline"
        aria-label="Menu"
        icon={<MenuIcon fontSize="2xl" />}
      />

      <Menu.List>
        <Menu.Item command="⌘T" icon={<PlusIcon fontSize="lg" />}>
          New Tab
        </Menu.Item>
        <Menu.Item
          command="⌘N"
          icon={<SquareArrowOutUpRightIcon fontSize="lg" />}
        >
          New Window
        </Menu.Item>
        <Menu.Item command="⌘O" icon={<SquarePenIcon fontSize="lg" />}>
          Open File
        </Menu.Item>
      </Menu.List>
    </Menu.Root>
  )
}

export const InitialFocusRef: Story = () => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Menu.Root initialFocusRef={ref}>
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Menu.List>
        <Menu.Item>Set status</Menu.Item>
        <Menu.Item ref={ref}>Edit Profile</Menu.Item>
        <Menu.Item>Preferences</Menu.Item>
      </Menu.List>
    </Menu.Root>
  )
}

export const Placement: Story = () => {
  return (
    <Menu.Root placement="start-start">
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Menu.List>
        <Menu.Item>Set status</Menu.Item>
        <Menu.Item>Edit Profile</Menu.Item>
        <Menu.Item>Preferences</Menu.Item>
      </Menu.List>
    </Menu.Root>
  )
}

export const Animation: Story = () => {
  return (
    <Menu.Root animationScheme="block-start">
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Menu.List>
        <Menu.Item>Set status</Menu.Item>
        <Menu.Item>Edit Profile</Menu.Item>
        <Menu.Item>Preferences</Menu.Item>
      </Menu.List>
    </Menu.Root>
  )
}

export const Offset: Story = () => {
  return (
    <Menu.Root offset={[16, 16]}>
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Menu.List>
        <Menu.Item>Set status</Menu.Item>
        <Menu.Item>Edit Profile</Menu.Item>
        <Menu.Item>Preferences</Menu.Item>
      </Menu.List>
    </Menu.Root>
  )
}

export const Gutter: Story = () => {
  return (
    <Menu.Root gutter={32}>
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Menu.List>
        <Menu.Item>Set status</Menu.Item>
        <Menu.Item>Edit Profile</Menu.Item>
        <Menu.Item>Preferences</Menu.Item>
      </Menu.List>
    </Menu.Root>
  )
}

export const Duration: Story = () => {
  return (
    <Menu.Root duration={0.4}>
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Menu.List>
        <Menu.Item>Set status</Menu.Item>
        <Menu.Item>Edit Profile</Menu.Item>
        <Menu.Item>Preferences</Menu.Item>
      </Menu.List>
    </Menu.Root>
  )
}

export const Separator: Story = () => {
  return (
    <Menu.Root>
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Menu.List>
        <Menu.Item>Set status</Menu.Item>
        <Menu.Item>Edit Profile</Menu.Item>
        <Menu.Item>Preferences</Menu.Item>

        <Menu.Separator />

        <Menu.Item>Sign out</Menu.Item>
      </Menu.List>
    </Menu.Root>
  )
}

export const Group: Story = () => {
  return (
    <Menu.Root>
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Menu.List>
        <Menu.Group label="account">
          <Menu.Item>Set status</Menu.Item>
          <Menu.Item>Edit Profile</Menu.Item>
          <Menu.Item>Preferences</Menu.Item>
        </Menu.Group>

        <Menu.Separator />

        <Menu.Group label="action">
          <Menu.Item>Sign out</Menu.Item>
        </Menu.Group>
      </Menu.List>
    </Menu.Root>
  )
}

export const OptionGroup: Story = () => {
  return (
    <Menu.Root>
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Menu.List>
        <Menu.OptionGroup type="radio" label="order">
          <Menu.OptionItem value="asc">Ascending</Menu.OptionItem>
          <Menu.OptionItem value="desc">Descending</Menu.OptionItem>
        </Menu.OptionGroup>

        <Menu.Separator />

        <Menu.OptionGroup type="checkbox" label="display">
          <Menu.OptionItem value="gender">gender</Menu.OptionItem>
          <Menu.OptionItem value="email">email</Menu.OptionItem>
          <Menu.OptionItem value="phone">phone</Menu.OptionItem>
        </Menu.OptionGroup>
      </Menu.List>
    </Menu.Root>
  )
}

export const PortalMenu: Story = () => {
  return (
    <Menu.Root>
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Portal>
        <Menu.List>
          <Menu.Item>Set status</Menu.Item>
          <Menu.Item>Edit Profile</Menu.Item>
          <Menu.Item>Preferences</Menu.Item>
        </Menu.List>
      </Portal>
    </Menu.Root>
  )
}

export const NestedMenu: Story = () => {
  return (
    <Menu.Root>
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Menu.List>
        <Menu.Item>
          <Menu.Root>
            <Menu.ItemButton>Settings</Menu.ItemButton>

            <Menu.List>
              <Menu.Item>Extensions</Menu.Item>
              <Menu.Item>
                <Menu.Root>
                  <Menu.ItemButton>Theme</Menu.ItemButton>

                  <Menu.List>
                    <Menu.Item>Color Theme</Menu.Item>
                    <Menu.Item>File Icon Theme</Menu.Item>
                    <Menu.Item>Product Icon Theme</Menu.Item>
                  </Menu.List>
                </Menu.Root>
              </Menu.Item>
              <Menu.Item>User Tasks</Menu.Item>
            </Menu.List>
          </Menu.Root>
        </Menu.Item>
        <Menu.Item>Edit Profile</Menu.Item>
        <Menu.Item>Preferences</Menu.Item>
      </Menu.List>
    </Menu.Root>
  )
}

export const DisabledCloseOnSelect: Story = () => {
  return (
    <Menu.Root closeOnSelect={false}>
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Menu.List>
        <Menu.Item>Set status</Menu.Item>
        <Menu.Item closeOnSelect>Edit Profile</Menu.Item>
        <Menu.Item>Preferences</Menu.Item>
      </Menu.List>
    </Menu.Root>
  )
}

export const DisabledCloseBlur: Story = () => {
  return (
    <Menu.Root closeOnBlur={false}>
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Menu.List>
        <Menu.Item>Set status</Menu.Item>
        <Menu.Item>Edit Profile</Menu.Item>
        <Menu.Item>Preferences</Menu.Item>
      </Menu.List>
    </Menu.Root>
  )
}

export const Disabled: Story = () => {
  return (
    <Menu.Root>
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Menu.List>
        <Menu.Item>Set status</Menu.Item>
        <Menu.Item disabled>Edit Profile</Menu.Item>
        <Menu.Item>Preferences</Menu.Item>
      </Menu.List>
    </Menu.Root>
  )
}

export const Focusable: Story = () => {
  return (
    <Menu.Root>
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Menu.List>
        <Menu.Item>Set status</Menu.Item>
        <Menu.Item disabled focusable>
          Edit Profile
        </Menu.Item>
        <Menu.Item>Preferences</Menu.Item>
      </Menu.List>
    </Menu.Root>
  )
}

export const CustomControl: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <Menu.Root open={open} onClose={onClose} onOpen={onOpen}>
      <Menu.Button as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </Menu.Button>

      <Menu.List>
        <Menu.Item>Set status</Menu.Item>
        <Menu.Item>Edit Profile</Menu.Item>
        <Menu.Item>Preferences</Menu.Item>
      </Menu.List>
    </Menu.Root>
  )
}
