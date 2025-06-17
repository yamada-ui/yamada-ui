import type { Meta, StoryFn } from "@storybook/react-vite"
import { Box } from "../box"
import { Center } from "../center"
import { For } from "../for"
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
      <For each={["info", "success", "warning", "error"]}>
        {(bg, index) => (
          <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>
        )}
      </For>
    </VStack>
  )
}

export const Horizontal: Story = () => {
  return (
    <HStack>
      <For each={["info", "success", "warning", "error"]}>
        {(bg, index) => (
          <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>
        )}
      </For>
    </HStack>
  )
}

export const Depth: Story = () => {
  return (
    <For
      each={
        [
          "end",
          "start",
          "center-end",
          "center-start",
          "end-start",
          "end-end",
          "start-start",
          "start-end",
        ] as const
      }
    >
      {(direction) => (
        <ZStack key={direction} direction={direction}>
          <Box bg="info" color="white" p="md" rounded="l2">
            Box
          </Box>

          <Box bg="success" color="white" p="md" rounded="l2">
            Box
          </Box>

          <Box bg="warning" color="white" p="md" rounded="l2">
            Box
          </Box>

          <Box bg="error" color="white" p="md" rounded="l2">
            Box
          </Box>
        </ZStack>
      )}
    </For>
  )
}

export const Border: Story = () => {
  return (
    <>
      <VStack separator={<Separator />}>
        <Box bg="info" color="white" p="md" rounded="l2">
          Box
        </Box>

        <Box bg="success" color="white" p="md" rounded="l2">
          Box
        </Box>

        <Box bg="warning" color="white" p="md" rounded="l2">
          Box
        </Box>

        <Box bg="error" color="white" p="md" rounded="l2">
          Box
        </Box>
      </VStack>

      <HStack h="2xs" separator={<Separator />}>
        <Center bg="info" color="white" h="full" p="md" rounded="l2">
          Center
        </Center>

        <Center bg="success" color="white" h="full" p="md" rounded="l2">
          Center
        </Center>

        <Center bg="warning" color="white" h="full" p="md" rounded="l2">
          Center
        </Center>

        <Center bg="error" color="white" h="full" p="md" rounded="l2">
          Center
        </Center>
      </HStack>
    </>
  )
}
