import type { Meta, StoryFn } from "@storybook/react-vite"
import { Box } from "./box"

type Story = StoryFn<typeof Box>

const meta: Meta<typeof Box> = {
  component: Box,
  title: "Components / Box",
}

export default meta

export const Basic: Story = () => {
  return (
    <Box bg="mono" color="mono.contrast" p="md" rounded="l2">
      Box
    </Box>
  )
}
