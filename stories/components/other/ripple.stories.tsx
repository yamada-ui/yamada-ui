import type { Meta, StoryFn } from "@storybook/react"
import { Box, Ripple, Text, useRipple } from "@yamada-ui/react"

type Story = StoryFn<typeof Box>

const meta: Meta<typeof Box> = {
  component: Box,
  title: "Components / Other / Ripple",
}

export default meta

export const basic: Story = () => {
  const { onPointerDown, ...rippleProps } = useRipple()

  return (
    <Box
      as="button"
      type="button"
      bg="primary"
      color="white"
      overflow="hidden"
      p="md"
      position="relative"
      rounded="md"
      onPointerDown={onPointerDown}
    >
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>
  )
}

export const disabled: Story = () => {
  const { onPointerDown, ...rippleProps } = useRipple()

  return (
    <Box
      as="button"
      type="button"
      bg="primary"
      color="white"
      overflow="hidden"
      p="md"
      position="relative"
      rounded="md"
      onPointerDown={onPointerDown}
    >
      <Text>Button</Text>

      <Ripple {...rippleProps} disabled />
    </Box>
  )
}
