"use client"

import { ButtonGroup, GlobeIcon, Menu, MicIcon } from "@yamada-ui/react"

const MUSIC_ITEMS = [
  { label: "About Music", value: "About Music" },
  { type: "separator" },
  {
    label: (
      <>
        Preferences...
        <Menu.Command>⌘,</Menu.Command>
      </>
    ),
    value: "Preferences...",
  },
  { type: "separator" },
  {
    label: (
      <>
        Hide Music
        <Menu.Command>⌘H</Menu.Command>
      </>
    ),
    value: "Hide Music",
  },
  {
    label: (
      <>
        Hide Others
        <Menu.Command>↑⌘H</Menu.Command>
      </>
    ),
    value: "Hide Others",
  },
  {
    label: (
      <>
        Quit Music
        <Menu.Command>⌘Q</Menu.Command>
      </>
    ),
    value: "Quit Music",
  },
]
const EDIT_ITEMS = [
  {
    disabled: true,
    label: (
      <>
        Undo
        <Menu.Command>⌘Z</Menu.Command>
      </>
    ),
    value: "Undo",
  },
  {
    disabled: true,
    label: (
      <>
        Redo
        <Menu.Command>↑⌘Z</Menu.Command>
      </>
    ),
    value: "Redo",
  },
  { type: "separator" },
  {
    disabled: true,
    label: (
      <>
        Cut
        <Menu.Command>⌘X</Menu.Command>
      </>
    ),
    value: "Cut",
  },
  {
    disabled: true,
    label: (
      <>
        Copy
        <Menu.Command>⌘C</Menu.Command>
      </>
    ),
    value: "Copy",
  },
  {
    disabled: true,
    label: (
      <>
        Paste
        <Menu.Command>⌘V</Menu.Command>
      </>
    ),
    value: "Paste",
  },
  { type: "separator" },
  {
    label: (
      <>
        Select All
        <Menu.Command>⌘A</Menu.Command>
      </>
    ),
    value: "Select All",
  },
  {
    disabled: true,
    label: (
      <>
        Deselect All
        <Menu.Command>↑⌘A</Menu.Command>
      </>
    ),
    value: "Deselect All",
  },
  { type: "separator" },
  {
    justifyContent: "space-between",
    label: (
      <>
        Smart Dictation...
        <Menu.Indicator>
          <MicIcon color="fg.muted" />
        </Menu.Indicator>
      </>
    ),
    value: "Smart Dictation...",
  },
  {
    justifyContent: "space-between",
    label: (
      <>
        Emoji & Symbols...
        <Menu.Indicator>
          <GlobeIcon color="fg.muted" />
        </Menu.Indicator>
      </>
    ),
    value: "Emoji & Symbols...",
  },
]
const VIEW_ITEMS = [
  { label: "Show Playing Next", value: "Show Playing Next" },
  { label: "Show Lyrics", value: "Show Lyrics" },
  { type: "separator" },
  { disabled: true, label: "Show Status Bar", value: "Show Status Bar" },
  { type: "separator" },
  { label: "Hide Sidebar", value: "Hide Sidebar" },
  { type: "separator" },
  { disabled: true, label: "Enter Full Screen", value: "Enter Full Screen" },
]
const ACCOUNT_ITEMS = [
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
  { type: "separator" },
  { label: "Manage Family...", value: "Manage Family..." },
  { type: "separator" },
  { label: "Add Account...", value: "Add Account..." },
]

export interface HeaderProps extends ButtonGroup.RootProps {}

export function Header({ ...rest }: HeaderProps) {
  return (
    <ButtonGroup.Root
      as="header"
      size="sm"
      variant="ghost"
      borderBottomWidth="1px"
      gap="xs"
      p="sm"
      {...rest}
    >
      <Menu.Root>
        <Menu.Trigger>
          <ButtonGroup.Item>Music</ButtonGroup.Item>
        </Menu.Trigger>

        <Menu.Content items={MUSIC_ITEMS} />
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger>
          <ButtonGroup.Item>File</ButtonGroup.Item>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Root>
            <Menu.Trigger>
              <Menu.Item>New</Menu.Item>
            </Menu.Trigger>
            <Menu.Content>
              <Menu.Item>
                Playlist <Menu.Command>⌘N</Menu.Command>
              </Menu.Item>
              <Menu.Item disabled>
                Playlist from Selection <Menu.Command>↑⌘N</Menu.Command>
              </Menu.Item>
              <Menu.Item>
                Smart Playlist <Menu.Command>⌥⌘N</Menu.Command>
              </Menu.Item>
              <Menu.Item>Playlist Folder</Menu.Item>
              <Menu.Item disabled>Genius Playlist</Menu.Item>
            </Menu.Content>
          </Menu.Root>

          <Menu.Item>
            Open Stream URL... <Menu.Command>⌘U</Menu.Command>
          </Menu.Item>
          <Menu.Item>
            Close Window <Menu.Command>⌘W</Menu.Command>
          </Menu.Item>

          <Menu.Separator />

          <Menu.Root>
            <Menu.Trigger>
              <Menu.Item>Library</Menu.Item>
            </Menu.Trigger>
            <Menu.Content>
              <Menu.Item>Update Cloud Library</Menu.Item>
              <Menu.Item>Update Genius</Menu.Item>
              <Menu.Separator />
              <Menu.Item>Organize Library...</Menu.Item>
              <Menu.Item>Export Library...</Menu.Item>
              <Menu.Separator />
              <Menu.Item>Import Playlist...</Menu.Item>
              <Menu.Item disabled>Export Playlist...</Menu.Item>
              <Menu.Item>Show Duplicate Items</Menu.Item>
              <Menu.Separator />
              <Menu.Item>Get Album Artwork</Menu.Item>
              <Menu.Item disabled>Get Track Names</Menu.Item>
            </Menu.Content>
          </Menu.Root>

          <Menu.Item>
            Import <Menu.Command>⌘O</Menu.Command>
          </Menu.Item>
          <Menu.Item disabled>Burn Playlist to Disc...</Menu.Item>

          <Menu.Separator />

          <Menu.Item>
            Show in Finder <Menu.Command>↑⌘R</Menu.Command>
          </Menu.Item>
          <Menu.Item>Convert</Menu.Item>

          <Menu.Separator />

          <Menu.Item>Page Setup...</Menu.Item>
          <Menu.Item disabled>Print</Menu.Item>
        </Menu.Content>
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger>
          <ButtonGroup.Item>Edit</ButtonGroup.Item>
        </Menu.Trigger>

        <Menu.Content items={EDIT_ITEMS} />
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger>
          <ButtonGroup.Item>View</ButtonGroup.Item>
        </Menu.Trigger>

        <Menu.Content items={VIEW_ITEMS} />
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger>
          <ButtonGroup.Item>Account</ButtonGroup.Item>
        </Menu.Trigger>

        <Menu.Content items={ACCOUNT_ITEMS} />
      </Menu.Root>
    </ButtonGroup.Root>
  )
}
