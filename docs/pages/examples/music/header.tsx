import { Globe, Mic } from "@yamada-ui/lucide"
import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuItemButton,
  MenuList,
  MenuOptionGroup,
  MenuOptionItem,
  isUndefined,
  transparentizeColor,
  useColorMode,
  useDisclosure,
  useTheme,
} from "@yamada-ui/react"
import type {
  MenuButtonProps,
  MenuGroupProps,
  MenuItemButtonProps,
  MenuItemProps,
  MenuOptionGroupProps,
  MenuOptionItemProps,
  MenuProps,
  Merge,
  StackProps,
} from "@yamada-ui/react"
import { Fragment, memo } from "react"
import type { FC } from "react"

interface MenuGroup
  extends Omit<
    Merge<MenuGroupProps, MenuOptionGroupProps>,
    "value" | "defaultValue" | "children"
  > {
  value?: string | string[]
  defaultValue?: string | string[]
}

interface MenuItem extends MenuGroup {
  items?: (Omit<Merge<MenuItemProps, MenuOptionItemProps>, "children"> & {
    label?: string
    items?: MenuItem[]
  })[]
}

const MUSIC_MENU_ITEMS: MenuItem[] = [
  { items: [{ label: "About Music" }] },
  { items: [{ label: "Preferences…", command: "⌘," }] },
  {
    items: [
      { label: "Hide Music…", command: "⌘H" },
      { label: "Hide Others…", command: "↑⌘H" },
      { label: "Quit Music", command: "⌘Q" },
    ],
  },
]

const FILE_MENU_ITEMS: MenuItem[] = [
  {
    items: [
      {
        label: "New",
        items: [
          {
            items: [
              { label: "Playlist", command: "⌘N" },
              {
                label: "Playlist from Selection",
                command: "↑⌘N",
                isDisabled: true,
              },
              { label: "Smart Playlist", command: "⌥⌘N" },
              { label: "Playlist Folder" },
              { label: "Genius Playlist", isDisabled: true },
            ],
          },
        ],
      },
      { label: "Open Stream URL…", command: "⌘U" },
      { label: "Close Window", command: "⌘W" },
    ],
  },
  {
    items: [
      {
        label: "Library",
        items: [
          {
            items: [
              { label: "Update Cloud Library" },
              { label: "Update Genius" },
            ],
          },
          {
            items: [
              { label: "Organize Library…" },
              { label: "Export Library…" },
            ],
          },
          {
            items: [
              { label: "Import Playlist…" },
              { label: "Export Playlist…", isDisabled: true },
              { label: "Show Duplicate Items" },
            ],
          },
          {
            items: [
              { label: "Get Album Artwork" },
              { label: "Get Track Names", isDisabled: true },
            ],
          },
        ],
      },
      { label: "Import", command: "⌘O" },
      { label: "Burn Playlist to Disc…", isDisabled: true },
    ],
  },
  {
    items: [{ label: "Show in Finder", command: "↑⌘R" }, { label: "Convert" }],
  },
  {
    items: [
      { label: "Page Setup…" },
      { label: "Print", command: "⌘P", isDisabled: true },
    ],
  },
]

const EDIT_MENU_ITEMS: MenuItem[] = [
  {
    items: [
      { label: "Undo", command: "⌘Z", isDisabled: true },
      { label: "Redo", command: "↑⌘Z", isDisabled: true },
    ],
  },
  {
    items: [
      { label: "Cut", command: "⌘X", isDisabled: true },
      { label: "Copy", command: "⌘C", isDisabled: true },
      { label: "Paste", command: "⌘V", isDisabled: true },
    ],
  },
  {
    items: [
      { label: "Select All", command: "⌘A" },
      { label: "Deselect All", command: "↑⌘A", isDisabled: true },
    ],
  },
  {
    items: [
      {
        label: "Smart Dictation…",
        icon: <Mic fontSize="1.5em" />,
        flexDirection: "row-reverse",
      },
      {
        label: "Emoji & Symbols…",
        icon: <Globe fontSize="1.5em" />,
        flexDirection: "row-reverse",
      },
    ],
  },
]

const VIEW_MENU_ITEMS: MenuItem[] = [
  {
    type: "checkbox",
    value: ["Show Lyrics"],
    items: [
      { label: "Show Playing Next", value: "Show Playing Next" },
      { label: "Show Lyrics", value: "Show Lyrics" },
    ],
  },
  {
    type: "checkbox",
    items: [
      { label: "Show Status Bar", value: "Show Status Bar", isDisabled: true },
    ],
  },
  {
    type: "checkbox",
    items: [
      { label: "Hide Sidebar", value: "Hide Sidebar" },
      {
        label: "Enter Full Screen",
        value: "Enter Full Screen",
        isDisabled: true,
      },
    ],
  },
]

const ACCOUNT_MENU_ITEMS: MenuItem[] = [
  {
    label: "Switch Account",
    type: "radio",
    value: "Andy",
    items: [
      { label: "Andy", value: "Andy" },
      { label: "Benoit", value: "Benoit" },
      { label: "Luis", value: "Luis" },
    ],
  },
  {
    items: [{ label: "Manage Family…" }],
  },
  {
    items: [{ label: "Add Account…" }],
  },
]

export interface HeaderProps extends StackProps {}

export const Header: FC<HeaderProps> = memo(({ ...rest }) => {
  return (
    <HStack as="header" p="sm" gap="xs" borderBottomWidth="1px" {...rest}>
      <ControlMenu label="Music" items={MUSIC_MENU_ITEMS} />
      <ControlMenu label="File" items={FILE_MENU_ITEMS} />
      <ControlMenu label="Edit" items={EDIT_MENU_ITEMS} />
      <ControlMenu label="View" items={VIEW_MENU_ITEMS} />
      <ControlMenu label="Account" items={ACCOUNT_MENU_ITEMS} />
    </HStack>
  )
})

Header.displayName = "Header"

interface ControlMenuProps extends MenuProps {
  label?: string
  items: MenuItem[]
  isNested?: boolean
}

const ControlMenu: FC<ControlMenuProps> = memo(
  ({ label, items, isNested, ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure(rest)

    return (
      <Menu {...{ isOpen, onOpen, onClose }} {...rest}>
        <ControlMenuButton isOpen={isOpen} isNested={isNested}>
          {label}
        </ControlMenuButton>

        <MenuList>
          {items?.map(({ items, ...rest }, index) => (
            <Fragment key={index}>
              {index ? <MenuDivider /> : null}

              <ControlMenuGroup
                {...(rest as Merge<MenuGroupProps, MenuOptionGroupProps>)}
              >
                {items?.map(({ label, items, ...rest }, index) => (
                  <Fragment key={index}>
                    {items?.length ? (
                      <MenuItem>
                        <ControlMenu isNested label={label} items={items} />
                      </MenuItem>
                    ) : (
                      <ControlMenuItem {...rest}>{label}</ControlMenuItem>
                    )}
                  </Fragment>
                ))}
              </ControlMenuGroup>
            </Fragment>
          ))}
        </MenuList>
      </Menu>
    )
  },
)

ControlMenu.displayName = "ControlMenu"

interface ControlMenuButtonProps
  extends Merge<MenuButtonProps, MenuItemButtonProps> {
  isOpen: boolean
  isNested?: boolean
}

const ControlMenuButton: FC<ControlMenuButtonProps> = memo(
  ({ isOpen, isNested, ...rest }) => {
    const { theme } = useTheme()
    const { colorMode } = useColorMode()
    if (!isNested) {
      return (
        <MenuButton
          as={Button}
          vars={[
            {
              name: "bg",
              token: "colors",
              value: [
                `gray.50`,
                transparentizeColor(`gray.600`, 0.12)(theme, colorMode),
              ],
            },
          ]}
          bg={isOpen ? "$bg" : "transparent"}
          variant="ghost"
          size="sm"
          disableRipple
          {...rest}
        />
      )
    } else {
      return <MenuItemButton {...rest} />
    }
  },
)

ControlMenuButton.displayName = "ControlMenuButton"

interface ControlMenuGroupProps
  extends Merge<MenuGroupProps, MenuOptionGroupProps> {}

const ControlMenuGroup: FC<ControlMenuGroupProps> = memo(
  ({ type, ...rest }) => {
    if (isUndefined(type)) {
      return <MenuGroup {...(rest as unknown as MenuGroupProps)} />
    } else {
      return <MenuOptionGroup type={type} {...rest} />
    }
  },
)

ControlMenuGroup.displayName = "ControlMenuGroup"

interface ControlMenuItemProps
  extends Merge<MenuItemProps, MenuOptionItemProps> {}

const ControlMenuItem: FC<ControlMenuItemProps> = memo(({ value, ...rest }) => {
  if (isUndefined(value)) {
    return <MenuItem {...(rest as MenuItemProps)} />
  } else {
    return <MenuOptionItem value={value} {...(rest as MenuOptionItemProps)} />
  }
})

ControlMenuItem.displayName = "ControlMenuItem"
