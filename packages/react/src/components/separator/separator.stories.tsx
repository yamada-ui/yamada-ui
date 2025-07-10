import type { Meta, StoryFn } from "@storybook/react-vite"
import { Flex } from "../flex"
import { Separator } from "./separator"

type Story = StoryFn<typeof Separator>

const meta: Meta<typeof Separator> = {
  component: Separator,
  title: "Components / Separator",
}

export default meta

export const Horizontal: Story = () => {
  return (
    <>
      <Separator variant="solid" orientation="horizontal" w="lg" />

      <Separator variant="dashed" orientation="horizontal" w="lg" />

      <Separator variant="dotted" orientation="horizontal" w="lg" />
    </>
  )
}

export const Vertical: Story = () => {
  return (
    <Flex gap="md">
      <Separator variant="solid" h="lg" orientation="vertical" />

      <Separator variant="dashed" h="lg" orientation="vertical" />

      <Separator variant="dotted" h="lg" orientation="vertical" />
    </Flex>
  )
}
