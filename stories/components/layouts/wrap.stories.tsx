import type { Meta, StoryFn } from "@storybook/react"
import { Wrap, Box } from "@yamada-ui/react"

type Story = StoryFn<typeof Wrap>

const meta: Meta<typeof Wrap> = {
  title: "Components / Layouts / Wrap",
  component: Wrap,
}

export default meta

export const basic: Story = () => {
  return (
    <Wrap gap="md">
      <Box p="md" rounded="4" bg="primary" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="secondary" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="warning" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="danger" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="primary" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="secondary" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="warning" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="danger" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="primary" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="secondary" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="warning" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="danger" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="primary" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="secondary" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="warning" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="danger" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="primary" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="secondary" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="warning" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="danger" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="primary" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="secondary" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="warning" color="white">
        Box
      </Box>
      <Box p="md" rounded="4" bg="danger" color="white">
        Box
      </Box>
    </Wrap>
  )
}
