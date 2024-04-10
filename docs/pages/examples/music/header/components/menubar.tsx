import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuOptionItem,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Wrap,
  Box,
} from "@yamada-ui/react"
import React from "react"

const MenuBar = () => {
  return (
    <Box pl={4} pt={1} pb={1}>
      <Wrap gap={4}>
        {/* Menuボタン */}
        <Menu>
          <MenuButton as={Button} variant="ghost" colorScheme="gray" size="sm">
            Menu
          </MenuButton>
          <MenuList>
            <MenuGroup title="about">
              <MenuItem>About Music</MenuItem>
            </MenuGroup>
            <MenuDivider />

            <MenuGroup title="preferences">
              <MenuItem command="⌘,">Preferences...</MenuItem>
            </MenuGroup>
            <MenuDivider />

            <MenuGroup title="actions">
              <MenuItem command="⌘H">Hide Music...</MenuItem>
              <MenuItem command="↑⌘H">Hide Others...</MenuItem>
              <MenuItem command="⌘Q">Quit Music</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>

        {/* Fileボタン */}
        <Menu>
          <MenuButton as={Button} variant="ghost" colorScheme="gray" size="sm">
            File
          </MenuButton>
          <MenuList>
            <MenuGroup title="actions">
              <MenuItem command=">">New</MenuItem>
              <MenuItem command="⌘U">Open Stream URL...</MenuItem>
              <MenuItem command="⌘W">Close Window</MenuItem>
            </MenuGroup>
            <MenuDivider />

            <MenuGroup title="datas">
              <MenuItem command=">">Library</MenuItem>
              <MenuItem command="⌘O">Import...</MenuItem>
              <MenuItem isDisabled>Burn Playlist to Disc...</MenuItem>
            </MenuGroup>
            <MenuDivider />

            <MenuGroup title="files">
              <MenuItem command="↑⌘R">Show in Finder</MenuItem>
              <MenuItem>Convert</MenuItem>
            </MenuGroup>
            <MenuDivider />

            <MenuGroup title="pages">
              <MenuItem>Page Setup...</MenuItem>
              <MenuItem command="⌘P" isDisabled>
                Print...
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>

        {/* Editボタン */}
        <Menu>
          <MenuButton as={Button} variant="ghost" colorScheme="gray" size="sm">
            Edit
          </MenuButton>
          <MenuList>
            <MenuGroup title="action-options">
              <MenuItem command="⌘Z" isDisabled>
                Undo
              </MenuItem>
              <MenuItem command="↑⌘Z" isDisabled>
                Redo
              </MenuItem>
            </MenuGroup>
            <MenuDivider />

            <MenuGroup title="file-actions">
              <MenuItem command="⌘X" isDisabled>
                Cut
              </MenuItem>
              <MenuItem command="⌘C" isDisabled>
                Copy
              </MenuItem>
              <MenuItem command="⌘V" isDisabled>
                Paste
              </MenuItem>
            </MenuGroup>
            <MenuDivider />

            <MenuGroup title="select-options">
              <MenuItem command="⌘A">Select All</MenuItem>
              <MenuItem command="↑⌘A" isDisabled>
                Deselect All
              </MenuItem>
            </MenuGroup>
            <MenuDivider />

            <MenuGroup title="others">
              <MenuItem>Smart Dictation...</MenuItem>
              <MenuItem>Emoji & Symbols</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>

        {/* Viewボタン */}
        <Menu>
          <MenuButton as={Button} variant="ghost" colorScheme="gray" size="sm">
            View
          </MenuButton>
          <MenuList>
            <MenuOptionGroup title="order" type="radio" defaultValue="option2">
              <MenuOptionItem value="option1">Show Playing Next</MenuOptionItem>
              <MenuOptionItem value="option2">Show Lyrics</MenuOptionItem>
            </MenuOptionGroup>
            <MenuDivider />

            <MenuOptionGroup title="status-bar">
              <MenuOptionItem isDisabled>Show Status Bar</MenuOptionItem>
            </MenuOptionGroup>
            <MenuDivider />

            <MenuOptionGroup title="sidebar">
              <MenuOptionItem>Hide Sidebar</MenuOptionItem>
              <MenuOptionItem isDisabled>Enter Full Screen</MenuOptionItem>
            </MenuOptionGroup>
          </MenuList>
        </Menu>

        {/* Accountボタン */}
        <Menu>
          <MenuButton as={Button} variant="ghost" colorScheme="gray" size="sm">
            Account
          </MenuButton>
          <MenuList>
            <MenuGroup title="title">
              <MenuOptionItem>Switch Account</MenuOptionItem>
            </MenuGroup>
            <MenuDivider />

            <MenuOptionGroup title="user" type="radio" defaultValue="user2">
              <MenuOptionItem value="user1">Andy</MenuOptionItem>
              <MenuOptionItem value="user2">Benoit</MenuOptionItem>
              <MenuOptionItem value="user3">Luis</MenuOptionItem>
            </MenuOptionGroup>
            <MenuDivider />

            <MenuOptionGroup title="management">
              <MenuOptionItem>Manage Family...</MenuOptionItem>
            </MenuOptionGroup>
            <MenuDivider />

            <MenuOptionGroup title="account">
              <MenuOptionItem>Add Account...</MenuOptionItem>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Wrap>
    </Box>
  )
}

export default MenuBar
