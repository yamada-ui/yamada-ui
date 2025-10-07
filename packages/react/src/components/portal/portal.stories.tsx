import type { Meta, StoryFn } from "@storybook/react-vite"
import { useRef } from "react"
import { Portal } from "."
import { Box } from "../box"
import { VStack } from "../stack"
import { Text } from "../text"

type Story = StoryFn<typeof Portal>

const meta: Meta<typeof Portal> = {
  component: Portal,
  parameters: { layout: "centered" },
  title: "Components / Portal",
}

export default meta

export const Basic: Story = () => {
  return (
    <>
      <Text>元の世界</Text>
      <Portal>
        <Text>ナツキ・スバル</Text>
      </Portal>
    </>
  )
}

export const ChangeDestination: Story = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <VStack>
      <Text>元の世界</Text>
      <Portal containerRef={containerRef}>
        <Text>ナツキ・スバル</Text>
      </Portal>
      <Box ref={containerRef} bg="bg.contrast" color="fg.contrast" p="md">
        <Text>エミリアたん</Text>
      </Box>
    </VStack>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <Text>元の世界</Text>
      <Portal disabled>
        <Text>ナツキ・スバル</Text>
      </Portal>
    </>
  )
}
