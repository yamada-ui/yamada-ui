import type { Meta, StoryFn } from "@storybook/react-vite"
import { ContextMenu } from "."
import { Center } from "../center"
import { Menu } from "../menu"
import { Text } from "../text"

type Story = StoryFn<typeof ContextMenu.Root>

const meta: Meta<typeof ContextMenu.Root> = {
  component: ContextMenu.Root,
  title: "Components / ContextMenu",
}

export default meta

export const Basic: Story = () => {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger
        as={Center}
        borderStyle="dashed"
        borderWidth="1px"
        h="xs"
        p="md"
        rounded="md"
        w="full"
      >
        <Text>Right click here</Text>
      </ContextMenu.Trigger>

      <Menu.List>
        <Menu.Item>Undo</Menu.Item>
        <Menu.Item>Redo</Menu.Item>
        <Menu.Separator />
        <Menu.Item disabled>Cut</Menu.Item>
        <Menu.Item>Copy</Menu.Item>
        <Menu.Item>Paste</Menu.Item>
      </Menu.List>
    </ContextMenu.Root>
  )
}
