import type { Meta, StoryFn } from "@storybook/react"
import {
  Center,
  ContextMenu,
  ContextMenuTrigger,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@yamada-ui/react"

type Story = StoryFn<typeof ContextMenu>

const meta: Meta<typeof ContextMenu> = {
  component: ContextMenu,
  title: "Components / Overlay / ContextMenu",
}

export default meta

export const basic: Story = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger
        as={Center}
        borderStyle="dashed"
        borderWidth="1px"
        h="xs"
        p="md"
        rounded="md"
        w="full"
      >
        <Text>Right click here</Text>
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
