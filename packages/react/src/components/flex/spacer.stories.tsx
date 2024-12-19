import type { Meta, StoryFn } from "@storybook/react"
import { Box } from "../box"
import { Flex, Spacer } from "../flex"

type Story = StoryFn<typeof Spacer>

const meta: Meta<typeof Spacer> = {
  component: Spacer,
  title: "Components / Spacer",
}

export default meta

export const Basic: Story = () => {
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
