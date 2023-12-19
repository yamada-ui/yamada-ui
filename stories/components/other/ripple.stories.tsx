import type { Meta, StoryFn } from "@storybook/react"
import { Box, Ripple, Text, useRipple } from "@yamada-ui/react"

type Story = StoryFn<typeof Box>

const meta: Meta<typeof Box> = {
  title: "Components / Other / Ripple",
  component: Box,
}

export default meta

export const basic: Story = () => {
  const { onPointerDown, ...rippleProps } = useRipple()

  return (
    <Box
      as="button"
      type="button"
      p="md"
      rounded="md"
      bg="primary"
      color="white"
      position="relative"
      overflow="hidden"
      onPointerDown={onPointerDown}
    >
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>
  )
}
