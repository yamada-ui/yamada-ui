import type { Meta, StoryFn } from "@storybook/react-vite"
import { Button, IconButton } from "../button"
import { PlusIcon } from "../icon"
import { Input } from "../input"
import { Tag } from "../tag"
import { Group } from "./group"

type Story = StoryFn<typeof Group>

const meta: Meta<typeof Group> = {
  component: Group,
  title: "Components / Group",
}

export default meta

export const Basic: Story = () => {
  return (
    <Group>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Group>
  )
}

export const Orientation: Story = () => {
  return (
    <>
      <Group>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Group>

      <Group orientation="vertical">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Group>
    </>
  )
}

export const Grow: Story = () => {
  return (
    <Group grow w="full">
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Group>
  )
}

export const Attached: Story = () => {
  return (
    <>
      <Group attached>
        <Input />
        <IconButton
          variant="surface"
          aria-label="Add"
          focusVisibleRing="inside"
          icon={<PlusIcon fontSize="xl" />}
        />
      </Group>

      <Group attached>
        <Tag colorScheme="purple" variant="solid">
          @yamada-ui/react
        </Tag>
        <Tag colorScheme="emerald" variant="solid">
          10k+
        </Tag>
      </Group>

      <Group attached orientation="vertical">
        <Button variant="outline" focusVisibleRing="inside">
          Button
        </Button>
        <Button variant="outline" focusVisibleRing="inside">
          Button
        </Button>
        <Button variant="outline" focusVisibleRing="inside">
          Button
        </Button>
      </Group>
    </>
  )
}
