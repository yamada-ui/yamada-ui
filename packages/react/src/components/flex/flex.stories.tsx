import type { Meta, StoryFn } from "@storybook/react"
import type { FlexProps } from "../flex"
import { useMemo } from "react"
import { For } from "../../components/for"
import { Box } from "../box"
import { Flex, FlexPropsContext } from "../flex"

type Story = StoryFn<typeof Flex>

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: "Components / Flex",
}

export default meta

export const Horizontal: Story = () => {
  return (
    <Flex gap="md">
      <For each={["info", "success", "warning", "danger"]}>
        {(bg, index) => (
          <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>
        )}
      </For>
    </Flex>
  )
}

export const Vertical: Story = () => {
  return (
    <Flex direction="column" gap="md">
      <For each={["info", "success", "warning", "danger"]}>
        {(bg, index) => (
          <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>
        )}
      </For>
    </Flex>
  )
}

export const Context: Story = () => {
  const value = useMemo<FlexProps>(() => ({ direction: "column" }), [])

  return (
    <FlexPropsContext value={value}>
      <Flex gap="md">
        <For each={["info", "success", "warning", "danger"]}>
          {(bg, index) => (
            <Box key={index} bg={bg} color="white" p="md" rounded="l2">
              Box
            </Box>
          )}
        </For>
      </Flex>

      <Flex gap="md">
        <For each={["info", "success", "warning", "danger"]}>
          {(bg, index) => (
            <Box key={index} bg={bg} color="white" p="md" rounded="l2">
              Box
            </Box>
          )}
        </For>
      </Flex>
    </FlexPropsContext>
  )
}
