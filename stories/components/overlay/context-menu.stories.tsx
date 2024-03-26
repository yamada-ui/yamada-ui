import type { Meta, StoryFn } from "@storybook/react"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
  ContextMenuItem,
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
      <ContextMenuTrigger>Triggerだよ</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Itemだよ</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
