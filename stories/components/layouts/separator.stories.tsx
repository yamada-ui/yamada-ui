import type { Meta, StoryFn } from "@storybook/react"
import { Flex, Separator } from "@yamada-ui/react"

type Story = StoryFn<typeof Separator>

const meta: Meta<typeof Separator> = {
  component: Separator,
  title: "Components / Layouts / Separator",
}

export default meta

export const horizontal: Story = () => {
  return (
    <>
      <Separator variant="solid" orientation="horizontal" w="lg" />

      <Separator variant="dashed" orientation="horizontal" w="lg" />

      <Separator variant="dotted" orientation="horizontal" w="lg" />
    </>
  )
}

export const vertical: Story = () => {
  return (
    <Flex gap="md">
      <Separator variant="solid" h="lg" orientation="vertical" />

      <Separator variant="dashed" h="lg" orientation="vertical" />

      <Separator variant="dotted" h="lg" orientation="vertical" />
    </Flex>
  )
}
