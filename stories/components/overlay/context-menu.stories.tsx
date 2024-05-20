import type { Meta, StoryFn } from "@storybook/react"
import {
  ContextMenu,
  ContextMenuTrigger,
  Text,
  MenuItem,
  MenuList,
  MenuDivider,
  MenuGroup,
  MenuOptionItem,
  MenuOptionGroup,
} from "@yamada-ui/react"

type Story = StoryFn<typeof ContextMenu>

const meta: Meta<typeof ContextMenu> = {
  title: "Components / Overlay / ContextMenu",
  component: ContextMenu,
}

export default meta

export const basic: Story = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger style={triggerStyle}>
        <Text style={{ textAlign: "center" }}>Right Click Here</Text>
      </ContextMenuTrigger>
      <MenuList>
        <MenuItem>Undo</MenuItem>
        <MenuItem>Redo</MenuItem>
        <MenuDivider />
        <MenuItem isDisabled>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuList>
    </ContextMenu>
  )
}

export const WithGroup: Story = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger style={triggerStyle}>
        <Text style={{ textAlign: "center" }}>Right Click Here</Text>
      </ContextMenuTrigger>
      <MenuList>
        <MenuGroup label="order">
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </MenuGroup>

        <MenuDivider />

        <MenuGroup label="display">
          <MenuItem value="gender">gender</MenuItem>
          <MenuItem value="email">email</MenuItem>
          <MenuItem value="phone">phone</MenuItem>
        </MenuGroup>
      </MenuList>
    </ContextMenu>
  )
}

export const WithOptionGroup: Story = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger style={triggerStyle}>
        <Text style={{ textAlign: "center" }}>Right Click Here</Text>
      </ContextMenuTrigger>
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
    </ContextMenu>
  )
}

const triggerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 200,
  height: 100,
  border: "2px dashed $black",
  borderRadius: 6,
  backgroundColor: "rgba(0, 0, 0, 0.1)",

  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.5)",
  },

  '&[data-state="open"]': {
    backgroundColor: "lightblue",
  },
}
