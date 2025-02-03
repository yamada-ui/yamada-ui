import type { Meta, StoryFn } from "@storybook/react"
import { Button, IconButton } from "../button"
import { PlusIcon } from "../icon"
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
        <Button variant="outline">Button</Button>
        <IconButton
          variant="outline"
          aria-label="Add"
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
        <Button variant="outline">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="outline">Button</Button>
      </Group>
    </>
  )
}
