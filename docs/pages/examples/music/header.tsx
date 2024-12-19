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
import type { FC } from "react"
import { GlobeIcon, MicIcon } from "@yamada-ui/lucide"
import {
  Button,
  HStack,
  isUndefined,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuItemButton,
  MenuList,
  MenuOptionGroup,
  MenuOptionItem,
  MenuSeparator,
  transparentizeColor,
  useColorMode,
  useDisclosure,
  useTheme,
} from "@yamada-ui/react"
import { Fragment, memo } from "react"

interface MenuGroup
  extends Omit<
    Merge<MenuGroupProps, MenuOptionGroupProps>,
    "children" | "defaultValue" | "value"
  > {
  defaultValue?: string | string[]
  value?: string | string[]
}

interface MenuItem extends MenuGroup {
  items?: ({
    items?: MenuItem[]
    label?: string
  } & Omit<Merge<MenuItemProps, MenuOptionItemProps>, "children">)[]
}

const MUSIC_MENU_ITEMS: MenuItem[] = [
  { items: [{ label: "About Music" }] },
  { items: [{ command: "⌘,", label: "Preferences…" }] },
  {
    items: [
      { command: "⌘H", label: "Hide Music…" },
      { command: "↑⌘H", label: "Hide Others…" },
      { command: "⌘Q", label: "Quit Music" },
    ],
  },
]

const FILE_MENU_ITEMS: MenuItem[] = [
  {
    items: [
      {
        items: [
          {
            items: [
              { command: "⌘N", label: "Playlist" },
              {
                command: "↑⌘N",
                disabled: true,
                label: "Playlist from Selection",
              },
              { command: "⌥⌘N", label: "Smart Playlist" },
              { label: "Playlist Folder" },
              { disabled: true, label: "Genius Playlist" },
            ],
          },
        ],
        label: "New",
      },
      { command: "⌘U", label: "Open Stream URL…" },
      { command: "⌘W", label: "Close Window" },
    ],
  },
  {
    items: [
      {
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
              { disabled: true, label: "Export Playlist…" },
              { label: "Show Duplicate Items" },
            ],
          },
          {
            items: [
              { label: "Get Album Artwork" },
              { disabled: true, label: "Get Track Names" },
            ],
          },
        ],
        label: "Library",
      },
      { command: "⌘O", label: "Import" },
      { disabled: true, label: "Burn Playlist to Disc…" },
    ],
  },
  {
    items: [{ command: "↑⌘R", label: "Show in Finder" }, { label: "Convert" }],
  },
  {
    items: [
      { label: "Page Setup…" },
      { command: "⌘P", disabled: true, label: "Print" },
    ],
  },
]

const EDIT_MENU_ITEMS: MenuItem[] = [
  {
    items: [
      { command: "⌘Z", disabled: true, label: "Undo" },
      { command: "↑⌘Z", disabled: true, label: "Redo" },
    ],
  },
  {
    items: [
      { command: "⌘X", disabled: true, label: "Cut" },
      { command: "⌘C", disabled: true, label: "Copy" },
      { command: "⌘V", disabled: true, label: "Paste" },
    ],
  },
  {
    items: [
      { command: "⌘A", label: "Select All" },
      { command: "↑⌘A", disabled: true, label: "Deselect All" },
    ],
  },
  {
    items: [
      {
        flexDirection: "row-reverse",
        icon: <MicIcon fontSize="1.5em" />,
        label: "Smart Dictation…",
      },
      {
        flexDirection: "row-reverse",
        icon: <GlobeIcon fontSize="1.5em" />,
        label: "Emoji & Symbols…",
      },
    ],
  },
]

const VIEW_MENU_ITEMS: MenuItem[] = [
  {
    type: "checkbox",
    items: [
      { label: "Show Playing Next", value: "Show Playing Next" },
      { label: "Show Lyrics", value: "Show Lyrics" },
    ],
    value: ["Show Lyrics"],
  },
  {
    type: "checkbox",
    items: [
      { disabled: true, label: "Show Status Bar", value: "Show Status Bar" },
    ],
  },
  {
    type: "checkbox",
    items: [
      { label: "Hide Sidebar", value: "Hide Sidebar" },
      {
        disabled: true,
        label: "Enter Full Screen",
        value: "Enter Full Screen",
      },
    ],
  },
]

const ACCOUNT_MENU_ITEMS: MenuItem[] = [
  {
    type: "radio",
    items: [
      { label: "Andy", value: "Andy" },
      { label: "Beloit", value: "Beloit" },
      { label: "Luis", value: "Luis" },
    ],
    label: "Switch Account",
    value: "Andy",
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
    <HStack as="header" borderBottomWidth="1px" gap="xs" p="sm" {...rest}>
      <ControlMenu items={MUSIC_MENU_ITEMS} label="Music" />
      <ControlMenu items={FILE_MENU_ITEMS} label="File" />
      <ControlMenu items={EDIT_MENU_ITEMS} label="Edit" />
      <ControlMenu items={VIEW_MENU_ITEMS} label="View" />
      <ControlMenu items={ACCOUNT_MENU_ITEMS} label="Account" />
    </HStack>
  )
})

Header.displayName = "Header"

interface ControlMenuProps extends MenuProps {
  items: MenuItem[]
  isNested?: boolean
  label?: string
}

const ControlMenu: FC<ControlMenuProps> = memo(
  ({ isNested, items, label, ...rest }) => {
    const { isOpen, onClose, onOpen } = useDisclosure(rest)

    return (
      <Menu {...{ isOpen, onClose, onOpen }} {...rest}>
        <ControlMenuButton isNested={isNested} isOpen={isOpen}>
          {label}
        </ControlMenuButton>

        <MenuList>
          {items.map(({ items, ...rest }, index) => (
            <Fragment key={index}>
              {index ? <MenuSeparator /> : null}

              <ControlMenuGroup
                {...(rest as Merge<MenuGroupProps, MenuOptionGroupProps>)}
              >
                {items?.map(({ items, label, ...rest }, index) => (
                  <Fragment key={index}>
                    {items?.length ? (
                      <MenuItem>
                        <ControlMenu isNested items={items} label={label} />
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
  ({ isNested, isOpen, ...rest }) => {
    const { theme } = useTheme()
    const { colorMode } = useColorMode()
    if (!isNested) {
      return (
        <MenuButton
          as={Button}
          size="sm"
          variant="ghost"
          bg={isOpen ? "$bg" : "transparent"}
          disableRipple
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
