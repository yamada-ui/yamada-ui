import { Meta, StoryFn } from "@storybook/react"
import { Flex, Box, Spacer } from "@yamada-ui/react"

type Story = StoryFn<typeof Flex>

const meta: Meta<typeof Flex> = {
  title: "Components / Layouts / Flex",
  component: Flex,
}

export default meta

export const horizontal: Story = () => {
  return (
    <Flex gap="md">
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
    </Flex>
  )
}

export const vertical: Story = () => {
  return (
    <Flex direction="column" gap="md">
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
    </Flex>
  )
}

export const spacer: Story = () => {
  return (
    <Flex w="full" gap="md">
      <Box p="md" rounded="4" bg="primary" color="white">
        Box
      </Box>

      <Box p="md" rounded="4" bg="secondary" color="white">
        Box
      </Box>

      <Spacer />

      <Box p="md" rounded="4" bg="warning" color="white">
        Box
      </Box>

      <Box p="md" rounded="4" bg="danger" color="white">
        Box
      </Box>
    </Flex>
  )
}
