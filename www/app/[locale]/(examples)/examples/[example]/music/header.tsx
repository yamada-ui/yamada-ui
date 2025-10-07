"use client"
import type { ButtonProps, StackProps } from "@yamada-ui/react"
import {
  Button,
  ChevronRightIcon,
  GlobeIcon,
  HStack,
  Menu,
  MicIcon,
} from "@yamada-ui/react"
import { memo } from "react"

export interface HeaderProps extends StackProps {}

export const Header = memo<HeaderProps>(({ ...rest }) => {
  return (
    <HStack as="header" borderBottomWidth="1px" gap="xs" p="sm" {...rest}>
      <MusicMenu />
      <FileMenu />
      <EditMenu />
      <ViewMenu />
      <AccountMenu />
    </HStack>
  )
})

Header.displayName = "Header"

const MusicMenu = memo(() => {
  return (
    <Menu.Root>
      {({ open }) => (
        <>
          <Menu.Trigger>
            <ControlMenuButton open={open}>Music</ControlMenuButton>
          </Menu.Trigger>
          <Menu.Content>
            <Menu.Item>About Music</Menu.Item>
            <Menu.Separator />
            <Menu.Item>
              Preferences... <Menu.Command>⌘,</Menu.Command>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item>
              Hide Music <Menu.Command>⌘H</Menu.Command>
            </Menu.Item>
            <Menu.Item>
              Hide Others <Menu.Command>↑⌘H</Menu.Command>
            </Menu.Item>
            <Menu.Item>
              Quit Music <Menu.Command>⌘Q</Menu.Command>
            </Menu.Item>
          </Menu.Content>
        </>
      )}
    </Menu.Root>
  )
})

MusicMenu.displayName = "MusicMenu"

const FileMenu = memo(() => {
  return (
    <Menu.Root>
      {({ open }) => (
        <>
          <Menu.Trigger>
            <ControlMenuButton open={open}>File</ControlMenuButton>
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
            <Menu.Item justifyContent="space-between">
              Library
              <Menu.Indicator>
                <ChevronRightIcon />
              </Menu.Indicator>
            </Menu.Item>
          </Menu.Content>
        </>
      )}
    </Menu.Root>
  )
})

FileMenu.displayName = "FileMenu"

const EditMenu = memo(() => {
  return (
    <Menu.Root>
      {({ open }) => (
        <>
          <Menu.Trigger>
            <ControlMenuButton open={open}>Edit</ControlMenuButton>
          </Menu.Trigger>
          <Menu.Content>
            <Menu.Item disabled>
              Undo <Menu.Command>⌘Z</Menu.Command>
            </Menu.Item>
            <Menu.Item disabled>
              Redo <Menu.Command>↑⌘Z</Menu.Command>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item disabled>
              Cut <Menu.Command>⌘X</Menu.Command>
            </Menu.Item>
            <Menu.Item disabled>
              Copy <Menu.Command>⌘C</Menu.Command>
            </Menu.Item>
            <Menu.Item disabled>
              Paste <Menu.Command>⌘V</Menu.Command>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item>
              Select All <Menu.Command>⌘A</Menu.Command>
            </Menu.Item>
            <Menu.Item disabled>
              Deselect All <Menu.Command>↑⌘A</Menu.Command>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item justifyContent="space-between">
              Smart Dictation...
              <Menu.Indicator>
                <MicIcon />
              </Menu.Indicator>
            </Menu.Item>
            <Menu.Item justifyContent="space-between">
              Emoji & Symbols...
              <Menu.Indicator>
                <GlobeIcon />
              </Menu.Indicator>
            </Menu.Item>
          </Menu.Content>
        </>
      )}
    </Menu.Root>
  )
})

EditMenu.displayName = "EditMenu"

const ViewMenu = memo(() => {
  return (
    <Menu.Root closeOnSelect={false}>
      {({ open }) => (
        <>
          <Menu.Trigger>
            <ControlMenuButton open={open}>View</ControlMenuButton>
          </Menu.Trigger>
          <Menu.Content>
            <Menu.OptionGroup type="checkbox">
              <Menu.OptionItem value="Show Playing Next">
                Show Playing Next
              </Menu.OptionItem>
              <Menu.OptionItem value="Show Lyrics">Show Lyrics</Menu.OptionItem>
              <Menu.Separator />
              <Menu.OptionItem disabled value="Show Status Bar">
                Show Status Bar
              </Menu.OptionItem>
              <Menu.Separator />
              <Menu.OptionItem value="Hide Sidebar">
                Hide Sidebar
              </Menu.OptionItem>
              <Menu.OptionItem disabled value="Enter Full Screen">
                Enter Full Screen
              </Menu.OptionItem>
            </Menu.OptionGroup>
          </Menu.Content>
        </>
      )}
    </Menu.Root>
  )
})

ViewMenu.displayName = "ViewMenu"

const AccountMenu = memo(() => {
  return (
    <Menu.Root>
      {({ open }) => (
        <>
          <Menu.Trigger>
            <ControlMenuButton open={open}>Account</ControlMenuButton>
          </Menu.Trigger>
          <Menu.Content>
            <Menu.OptionGroup
              type="radio"
              defaultValue="Andy"
              label="Switch Account"
            >
              <Menu.OptionItem value="Andy">Andy</Menu.OptionItem>
              <Menu.OptionItem value="Beloit">Beloit</Menu.OptionItem>
              <Menu.OptionItem value="Luis">Luis</Menu.OptionItem>
            </Menu.OptionGroup>
            <Menu.Separator />
            <Menu.Item>Manage Family...</Menu.Item>
            <Menu.Item>Add Account...</Menu.Item>
          </Menu.Content>
        </>
      )}
    </Menu.Root>
  )
})

AccountMenu.displayName = "AccountMenu"

interface ControlMenuButtonProps extends ButtonProps {
  open?: boolean
}

const ControlMenuButton = memo<ControlMenuButtonProps>(({ open, ...rest }) => (
  <Button
    size="sm"
    variant="ghost"
    bg={open ? "gray.50" : "transparent"}
    disableRipple
    _hover={{ bg: "gray.50" }}
    {...rest}
  />
))

ControlMenuButton.displayName = "ControlMenuButton"
