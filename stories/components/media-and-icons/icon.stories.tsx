import type { Meta, StoryFn } from "@storybook/react"
import { Bot } from "@yamada-ui/lucide"
import { Icon, HStack } from "@yamada-ui/react"

type Story = StoryFn<typeof Icon>

const meta: Meta<typeof Icon> = {
  title: "Components / Media And Icons / Icon",
  component: Icon,
}

export default meta

export const basic: Story = () => {
  return (
    <HStack alignItems="flex-end">
      <Bot fontSize="6xl" color="gray.400" />

      <Bot fontSize="5xl" color="gray.400" />

      <Bot fontSize="4xl" color="gray.400" />

      <Bot fontSize="3xl" color="gray.400" />

      <Bot fontSize="2xl" color="gray.400" />

      <Bot fontSize="xl" color="gray.400" />
    </HStack>
  )
}
