import type { Meta, StoryFn } from "@storybook/react"
import { Box } from "../box"
import { Text } from "../text"
import { Ripple, useRipple } from "./"

type Story = StoryFn<typeof Box>

const meta: Meta<typeof Box> = {
  component: Box,
  title: "Components / Ripple",
}

export default meta

export const Basic: Story = () => {
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

export const WithIsDisabled: Story = () => {
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
