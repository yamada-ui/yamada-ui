import type { Meta, StoryFn } from "@storybook/react"
import { Box, Swipeable, Text } from "@yamada-ui/react"

type Story = StoryFn<typeof Swipeable>

const meta: Meta<typeof Swipeable> = {
  title: "Components / Other / Swipeable",
  component: Swipeable,
}

export default meta

export const basic: Story = () => {
  const renderLeftActions = () => (
    <Box
      h="100%"
      w="100%"
      background="green.500"
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      px={4}
    >
      <Text>left</Text>
    </Box>
  )
  const renderRightActions = () => (
    <Box
      h="100%"
      w="100%"
      background="red.500"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      px={4}
    >
      <Text textAlign="center">right</Text>
    </Box>
  )

  return (
    <Swipeable
      maxLeftSwipe={200}
      renderLeftActions={[{ children: renderLeftActions }]}
      renderRightActions={[{ children: renderRightActions }]}
    >
      スワイプするやつ
    </Swipeable>
  )
}
