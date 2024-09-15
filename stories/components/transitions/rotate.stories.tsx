import type { Meta, StoryFn } from "@storybook/react"
import { Rotate } from "@yamada-ui/react"

type Story = StoryFn<typeof Rotate>

const meta: Meta<typeof Rotate> = {
  title: "Components / Transitions / Rotate",
  component: Rotate,
}

export default meta

export const basic: Story = () => {
  return <Rotate></Rotate>
}
