import type { Meta, StoryFn } from "@storybook/react"
import {
  Box,
  Center,
  HStack,
  Separator,
  Stack,
  VStack,
  ZStack,
} from "@yamada-ui/react"

type Story = StoryFn<typeof Stack>

const meta: Meta<typeof Stack> = {
  component: Stack,
  title: "Components / Layouts / Stack",
}

export default meta

export const vertical: Story = () => {
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

export const horizontal: Story = () => {
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

export const depth: Story = () => {
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

export const withBorder: Story = () => {
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
