import type { Meta, StoryFn } from "@storybook/react"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
  ContextMenuItem,
  ContextMenuDivider,
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
          Right Click Here
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
