import type { Meta, StoryFn } from "@storybook/react"
import { Box, Wrap } from "@yamada-ui/react"

type Story = StoryFn<typeof Wrap>

const meta: Meta<typeof Wrap> = {
  component: Wrap,
  title: "Components / Layouts / Wrap",
}

export default meta

export const basic: Story = () => {
  return (
    <Wrap gap="md">
      <Box bg="primary" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="secondary" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="warning" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="danger" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="primary" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="secondary" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="warning" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="danger" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="primary" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="secondary" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="warning" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="danger" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="primary" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="secondary" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="warning" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="danger" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="primary" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="secondary" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="warning" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="danger" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="primary" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="secondary" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="warning" color="white" p="md" rounded="4">
        Box
      </Box>
      <Box bg="danger" color="white" p="md" rounded="4">
        Box
      </Box>
    </Wrap>
  )
}
