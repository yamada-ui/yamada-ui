import type { Meta, StoryFn } from "@storybook/react"
import { Box } from "@yamada-ui/react"

type Story = StoryFn<typeof Box>

const meta: Meta<typeof Box> = {
  component: Box,
  title: "Components / Layouts / Box",
}

export default meta

export const basic: Story = () => {
  return (
    <Box bg="primary" color="white" p="md" rounded="md">
      Box
    </Box>
  )
}
