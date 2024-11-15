import type { Meta, StoryFn } from "@storybook/react"
import { SkullIcon } from "@yamada-ui/lucide"
import { Center } from "@yamada-ui/react"

type Story = StoryFn<typeof Center>

const meta: Meta<typeof Center> = {
  component: Center,
  title: "Components / Layouts / Center",
}

export default meta

export const basic: Story = () => {
  return (
    <Center bg="primary" color="white" minH="xs" minW="xs" rounded="md">
      Center
    </Center>
  )
}

export const iconWithFrame: Story = () => {
  return (
    <Center bg="gray.500" color="white" minH="6xs" minW="6xs" rounded="full">
      <SkullIcon fontSize="3xl" />
    </Center>
  )
}
