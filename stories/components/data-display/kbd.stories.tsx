import type { Meta, StoryFn } from "@storybook/react"
import { Kbd, Text } from "@yamada-ui/react"

type Story = StoryFn<typeof Kbd>

const meta: Meta<typeof Kbd> = {
  component: Kbd,
  title: "Components / Data Display / Kbd",
}

export default meta

export const basic: Story = () => {
  return (
    <Text>
      <Kbd>shift</Kbd> + <Kbd>H</Kbd>
    </Text>
  )
}
