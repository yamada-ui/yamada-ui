import type { Meta, StoryFn } from "@storybook/react"
import { Box } from "../box"
import { Center } from "../center"
import { Separator } from "../separator"
import { HStack } from "./h-stack"
import { Stack } from "./stack"
import { VStack } from "./v-stack"
import { ZStack } from "./z-stack"

type Story = StoryFn<typeof Stack>

const meta: Meta<typeof Stack> = {
  component: Stack,
  title: "Components / Stack",
}

export default meta

export const Vertical: Story = () => {
  return (
    <VStack>
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
    </VStack>
  )
}

export const Horizontal: Story = () => {
  return (
    <HStack>
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
    </HStack>
  )
}

export const Depth: Story = () => {
  return (
    <ZStack>
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
    </ZStack>
  )
}

export const WithBorder: Story = () => {
  return (
    <>
      <VStack separator={<Separator />}>
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
      </VStack>

      <HStack h="2xs" separator={<Separator />}>
        <Center bg="primary" color="white" h="full" p="md" rounded="4">
          Center
        </Center>

        <Center bg="secondary" color="white" h="full" p="md" rounded="4">
          Center
        </Center>

        <Center bg="warning" color="white" h="full" p="md" rounded="4">
          Center
        </Center>

        <Center bg="danger" color="white" h="full" p="md" rounded="4">
          Center
        </Center>
      </HStack>
    </>
  )
}
