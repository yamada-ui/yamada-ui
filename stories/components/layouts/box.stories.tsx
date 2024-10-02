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
    <Box
      bg="primary"
      color="white"
      p="md"
      rounded="md"
      w={{ base: "3xl", sm: "sm", md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
    >
      Box
    </Box>
  )
}
