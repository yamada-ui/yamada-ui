import type { Meta, StoryFn } from "@storybook/react"
import { Text } from "../../components/text"
import { Em } from "./em"

type Story = StoryFn<typeof Em>

const meta: Meta<typeof Em> = {
  component: Em,
  title: "Components / Em",
}

export default meta

export const Basic: Story = () => {
  return (
    <Text>
      <Em>Unleash the Power</Em> of Styling, Animation, and Flexibility in React
      Apps.
    </Text>
  )
}
