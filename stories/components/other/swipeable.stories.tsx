import type { Meta, StoryFn } from "@storybook/react"
import { Swipeable, SwipeableLeftAction } from "@yamada-ui/react"

type Story = StoryFn<typeof Swipeable>

const meta: Meta<typeof Swipeable> = {
  title: "Components / Other / Swipeable",
  component: Swipeable,
}

export default meta

export const basic: Story = () => {
  return (
    <Swipeable>
      スワイプするやつ<SwipeableLeftAction>出てくるやつ</SwipeableLeftAction>
    </Swipeable>
  )
}
