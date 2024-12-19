import type { Meta, StoryFn } from "@storybook/react"
import { Box } from "../box"
import { Flex } from "../flex"

type Story = StoryFn<typeof Flex>

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: "Components / Flex",
}

export default meta

export const Horizontal: Story = () => {
  return (
    <Flex gap="md">
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
    </Flex>
  )
}

export const Vertical: Story = () => {
  return (
    <Flex direction="column" gap="md">
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
    </Flex>
  )
}
