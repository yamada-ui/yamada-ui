import type { Meta, StoryFn } from "@storybook/react"
import {
  ContextMenu,
  ContextMenuTrigger,
  Text,
  MenuItem,
  MenuList,
  MenuDivider,
  Center,
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
      <ContextMenuTrigger
        as={Center}
        w="full"
        h="xs"
        borderWidth="1px"
        borderStyle="dashed"
        p="md"
        rounded="md"
      >
        <Text>Right Click Here</Text>
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
