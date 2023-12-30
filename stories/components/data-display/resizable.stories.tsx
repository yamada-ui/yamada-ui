import type { Meta, StoryFn } from "@storybook/react"
import { Resizable } from "@yamada-ui/react"

type Story = StoryFn<typeof Resizable>

const meta: Meta<typeof Resizable> = {
  title: "Components / Data Display / Resizable",
  component: Resizable,
}

export default meta

export const basic: Story = () => {
  return <Resizable></Resizable>
}
