import type { Meta, StoryFn } from "@storybook/react"
import { For } from "../for"
import { HStack, VStack } from "../stack"
import { Status } from "./"

type Story = StoryFn<typeof Status>

const meta: Meta<typeof Status> = {
  component: Status,
  title: "Components / Status",
}

export default meta

export const Basic: Story = () => {
  return (
    <HStack>
      <Status value="info" />
      <Status value="success" />
      <Status value="warning" />
      <Status value="error" />
    </HStack>
  )
}

export const Label: Story = () => {
  return (
    <HStack>
      <Status value="info">Info</Status>
      <Status value="success">Success</Status>
      <Status value="warning">Warning</Status>
      <Status value="error">Error</Status>
    </HStack>
  )
}

export const Size: Story = () => {
  return (
    <VStack>
      <For each={["sm", "md", "lg"]}>
        {(size) => (
          <HStack>
            <Status size={size} value="info">
              Info
            </Status>

            <Status size={size} value="success">
              Success
            </Status>

            <Status size={size} value="warning">
              Warning
            </Status>

            <Status size={size} value="error">
              Error
            </Status>
          </HStack>
        )}
      </For>
    </VStack>
  )
}
