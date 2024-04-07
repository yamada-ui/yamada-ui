import type { Meta, StoryFn } from "@storybook/react"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
  ContextMenuItem,
  ContextMenuDivider,
  ContextMenuOptionGroup,
  ContextMenuOptionItem,
  ContextMenuGroup,
  Text,
} from "@yamada-ui/react"

type Story = StoryFn<typeof ContextMenu>

const meta: Meta<typeof ContextMenu> = {
  title: "Components / Overlay / ContextMenu",
  component: ContextMenu,
}

export default meta

export const basic: Story = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <ContextMenu>
        <ContextMenuTrigger style={triggerStyle}>
          <Text style={{ textAlign: "center" }}>Right Click Here</Text>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Undo</ContextMenuItem>
          <ContextMenuItem>Redo</ContextMenuItem>
          <ContextMenuDivider />
          <ContextMenuItem disabled>Cut</ContextMenuItem>
          <ContextMenuItem>Copy</ContextMenuItem>
          <ContextMenuItem>Paste</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}

export const WithGroup: Story = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger style={triggerStyle}>
        <Text style={{ textAlign: "center" }}>Right Click Here</Text>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup label="order">
          <ContextMenuOptionItem value="asc">Ascending</ContextMenuOptionItem>
          <ContextMenuOptionItem value="desc">Descending</ContextMenuOptionItem>
        </ContextMenuGroup>

        <ContextMenuDivider />

        <ContextMenuGroup label="display">
          <ContextMenuOptionItem value="gender">gender</ContextMenuOptionItem>
          <ContextMenuOptionItem value="email">email</ContextMenuOptionItem>
          <ContextMenuOptionItem value="phone">phone</ContextMenuOptionItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export const WithOptionGroup: Story = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger style={triggerStyle}>
        <Text style={{ textAlign: "center" }}>Right Click Here</Text>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuOptionGroup label="order" type="radio">
          <ContextMenuOptionItem value="asc">Ascending</ContextMenuOptionItem>
          <ContextMenuOptionItem value="desc">Descending</ContextMenuOptionItem>
        </ContextMenuOptionGroup>

        <ContextMenuDivider />

        <ContextMenuOptionGroup label="display" type="checkbox">
          <ContextMenuOptionItem value="gender">gender</ContextMenuOptionItem>
          <ContextMenuOptionItem value="email">email</ContextMenuOptionItem>
          <ContextMenuOptionItem value="phone">phone</ContextMenuOptionItem>
        </ContextMenuOptionGroup>
      </ContextMenuContent>
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
