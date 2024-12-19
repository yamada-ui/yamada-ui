import type { Meta, StoryFn } from "@storybook/react"
import { Box } from "../box"
import { Wrap } from "./"

type Story = StoryFn<typeof Wrap>

const meta: Meta<typeof Wrap> = {
  component: Wrap,
  title: "Components / Wrap",
}

export default meta

export const Basic: Story = () => {
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
