import type { Meta, StoryFn } from "@storybook/react"
import { Kbd } from "."
import { Text } from "../../components/text"

type Story = StoryFn<typeof Kbd>

const meta: Meta<typeof Kbd> = {
  component: Kbd,
  title: "Components / Kbd",
}

export default meta

export const Basic: Story = () => {
  return (
    <Text>
      <Kbd>shift</Kbd> + <Kbd>H</Kbd>
    </Text>
  )
}
