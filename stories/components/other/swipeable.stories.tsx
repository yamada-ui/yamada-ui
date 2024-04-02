import type { Meta, StoryFn } from "@storybook/react"
import { Swipeable } from "@yamada-ui/react"

type Story = StoryFn<typeof Swipeable>

const meta: Meta<typeof Swipeable> = {
  title: "Components / Other / Swipeable",
  component: Swipeable,
}

export default meta

export const basic: Story = () => {
  return <Swipeable></Swipeable>
}
