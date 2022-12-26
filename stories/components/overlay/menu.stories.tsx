import {
  faArrowUpRightFromSquare,
  faBars,
  faChevronDown,
  faEdit,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Button,
  FontAwesomeIcon,
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
} from '@yamada-ui/react'
import { useRef } from 'react'

export default {
  title: 'Components / Overlay / Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>

export const basic: ComponentStory<typeof Menu> = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
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

export const withCommand: ComponentStory<typeof Menu> = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<FontAwesomeIcon icon={faBars} />} variant='outline' />

      <MenuList>
        <MenuItem command='⌘T'>New Tab</MenuItem>
        <MenuItem command='⌘N'>New Window</MenuItem>
        <MenuItem command='⌘O'>Open File</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const withIcon: ComponentStory<typeof Menu> = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<FontAwesomeIcon icon={faBars} />} variant='outline' />

      <MenuList>
        <MenuItem icon={<FontAwesomeIcon icon={faPlus} />} command='⌘T'>
          New Tab
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} command='⌘N'>
          New Window
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faEdit} />} command='⌘O'>
          Open File
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export const withInitialFocusRef: ComponentStory<typeof Menu> = () => {
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <Menu initialFocusRef={ref}>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
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

export const withPlacement: ComponentStory<typeof Menu> = () => {
  return (
    <Menu placement='right-start'>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
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

export const withAnimation: ComponentStory<typeof Menu> = () => {
  return (
    <Menu animation='top'>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
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

export const withOffset: ComponentStory<typeof Menu> = () => {
  return (
    <Menu offset={[16, 16]}>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
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

export const withGutter: ComponentStory<typeof Menu> = () => {
  return (
    <Menu gutter={32}>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
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

export const withDuration: ComponentStory<typeof Menu> = () => {
  return (
    <Menu duration={0.4}>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
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

export const withDivider: ComponentStory<typeof Menu> = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
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

export const withGroup: ComponentStory<typeof Menu> = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuGroup title='account'>
          <MenuItem>Set status</MenuItem>
          <MenuItem>Edit Profile</MenuItem>
          <MenuItem>Preferences</MenuItem>
        </MenuGroup>

        <MenuDivider />

        <MenuGroup title='action'>
          <MenuItem>Sign out</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export const withOptionGroup: ComponentStory<typeof Menu> = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuOptionGroup title='order' type='radio'>
          <MenuOptionItem value='asc'>Ascending</MenuOptionItem>
          <MenuOptionItem value='desc'>Descending</MenuOptionItem>
        </MenuOptionGroup>

        <MenuDivider />

        <MenuOptionGroup title='display' type='checkbox'>
          <MenuOptionItem value='gender'>gender</MenuOptionItem>
          <MenuOptionItem value='email'>email</MenuOptionItem>
          <MenuOptionItem value='phone'>phone</MenuOptionItem>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}

export const withPortal: ComponentStory<typeof Menu> = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
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

export const disabledCloseOnSelect: ComponentStory<typeof Menu> = () => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
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

export const disabledAutoSelect: ComponentStory<typeof Menu> = () => {
  return (
    <Menu autoSelect={false}>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
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

export const disabledCloseBlur: ComponentStory<typeof Menu> = () => {
  return (
    <Menu closeOnBlur={false}>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
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

export const isDisabled: ComponentStory<typeof Menu> = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
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

export const useLazy: ComponentStory<typeof Menu> = () => {
  return (
    <Menu isLazy>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
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

export const customControl: ComponentStory<typeof Menu> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <MenuButton as={Button} rightIcon={<FontAwesomeIcon size='xs' icon={faChevronDown} />}>
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
