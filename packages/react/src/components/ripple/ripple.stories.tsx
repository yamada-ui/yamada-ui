import type { Meta, StoryFn } from "@storybook/react-vite"
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
  const { onClick, ...rippleProps } = useRipple()

  return (
    <Box
      as="button"
      type="button"
      bg="mono"
      color="mono.contrast"
      h="10"
      overflow="hidden"
      position="relative"
      px="md"
      rounded="l2"
      onClick={onClick}
    >
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>
  )
}

export const Disabled: Story = () => {
  const { onClick, ...rippleProps } = useRipple()

  return (
    <Box
      as="button"
      type="button"
      bg="mono"
      color="mono.contrast"
      h="10"
      overflow="hidden"
      position="relative"
      px="md"
      rounded="l2"
      onClick={onClick}
    >
      <Text>Button</Text>

      <Ripple {...rippleProps} disabled />
    </Box>
  )
}
