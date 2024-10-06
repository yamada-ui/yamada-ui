import type { Meta, StoryFn } from "@storybook/react"
import { Box, Flex, Spacer } from "@yamada-ui/react"

type Story = StoryFn<typeof Flex>

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: "Components / Layouts / Flex",
}

export default meta

export const horizontal: Story = () => {
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

export const vertical: Story = () => {
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

export const spacer: Story = () => {
  return (
    <Flex gap="md" w="full">
      <Box bg="primary" color="white" p="md" rounded="4">
        Box
      </Box>

      <Box bg="secondary" color="white" p="md" rounded="4">
        Box
      </Box>

      <Spacer />

      <Box bg="warning" color="white" p="md" rounded="4">
        Box
      </Box>

      <Box bg="danger" color="white" p="md" rounded="4">
        Box
      </Box>
    </Flex>
  )
}
