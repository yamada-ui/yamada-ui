import type { Meta, StoryFn } from "@storybook/react"
import { Swipeable, Text } from "@yamada-ui/react"

type Story = StoryFn<typeof Swipeable>

const meta: Meta<typeof Swipeable> = {
  title: "Components / Other / Swipeable",
  component: Swipeable,
}

export default meta

export const basic: Story = () => {
  const renderLeftActions = <Text>left</Text>
  const renderRightActions = <Text>right</Text>

  return (
    <Swipeable
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
    >
      スワイプするやつ
    </Swipeable>
  )
}

// NOTE:こんな感じにしたい
// <Swipeable renderLeftActions={<RenderLeftActions />} renderRightActions={<RenderRightActions />} >
//  <Text>swipe me</Text>
// </Swipeable>
//
// <Swipeable>
//  <SwipeablePanel>
//    <Text>swipe me</Text>
//  </SwipeablePanel>
//  <SwipeableLeftAction>
//    <RenderLeftActions />
//  </SwipeableLeftAction>
//  <SwipeableRightAction>
//    <RenderRightActions />
//  </SwipeableRightAction>
// </Swipeable>
