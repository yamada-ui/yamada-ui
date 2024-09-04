import type { Meta, StoryFn } from "@storybook/react"
import { Swap } from "@yamada-ui/react"

type Story = StoryFn<typeof Swap>

const meta: Meta<typeof Swap> = {
  title: "Components / Motion / Swap",
  component: Swap,
}

export default meta

export const basic: Story = () => {
  return <Swap></Swap>
}
