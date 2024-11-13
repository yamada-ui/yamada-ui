import type { Meta, StoryFn } from "@storybook/react"
import { Em, Text } from "@yamada-ui/react"

type Story = StoryFn<typeof Em>

const meta: Meta<typeof Em> = {
  component: Em,
  title: "Components / Typography / Em",
}

export default meta

export const basic: Story = () => {
  return (
    <Text>
      <Em>Unleash the Power</Em> of Styling, Animation, and Flexibility in React
      Apps.
    </Text>
  )
}
