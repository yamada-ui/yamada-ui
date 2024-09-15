import type { Meta, StoryFn } from "@storybook/react"
import { Flip } from "@yamada-ui/react"

type Story = StoryFn<typeof Flip>

const meta: Meta<typeof Flip> = {
  title: "Components / Transitions / Flip",
  component: Flip,
}

export default meta

export const basic: Story = () => {
  return <Flip></Flip>
}
