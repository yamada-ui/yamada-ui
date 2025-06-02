import type { Meta, StoryFn } from "@storybook/react-vite"
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
      <Box bg="info" color="white" p="md" rounded="l2">
        Box
      </Box>

      <Box bg="success" color="white" p="md" rounded="l2">
        Box
      </Box>

      <Spacer />

      <Box bg="warning" color="white" p="md" rounded="l2">
        Box
      </Box>

      <Box bg="danger" color="white" p="md" rounded="l2">
        Box
      </Box>
    </Flex>
  )
}
