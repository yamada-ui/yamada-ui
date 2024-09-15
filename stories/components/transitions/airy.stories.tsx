import type { Meta, StoryFn } from "@storybook/react"
import { Airy } from "@yamada-ui/react"

type Story = StoryFn<typeof Airy>

const meta: Meta<typeof Airy> = {
  title: "Components / Transitions / Airy",
  component: Airy,
}

export default meta

export const basic: Story = () => {
  return <Airy></Airy>
}
