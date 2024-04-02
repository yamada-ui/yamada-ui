import type { Meta, StoryFn } from "@storybook/react"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
  ContextMenuItem,
  ContextMenuDivider,
  Button,
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
      <ContextMenuTrigger as={Button}>Right Click Here</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Undo</ContextMenuItem>
        <ContextMenuItem>Redo</ContextMenuItem>
        <ContextMenuDivider />
        <ContextMenuItem disabled>Cut</ContextMenuItem>
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Paste</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
