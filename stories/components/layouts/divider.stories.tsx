import type { Meta, StoryFn } from "@storybook/react"
import { Divider, Flex } from "@yamada-ui/react"

type Story = StoryFn<typeof Divider>

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: "Components / Layouts / Divider",
}

export default meta

export const horizontal: Story = () => {
  return (
    <>
      <Divider orientation="horizontal" variant="solid" w="lg" />

      <Divider orientation="horizontal" variant="dashed" w="lg" />

      <Divider orientation="horizontal" variant="dotted" w="lg" />
    </>
  )
}

export const vertical: Story = () => {
  return (
    <Flex gap="md">
      <Divider h="lg" orientation="vertical" variant="solid" />

      <Divider h="lg" orientation="vertical" variant="dashed" />

      <Divider h="lg" orientation="vertical" variant="dotted" />
    </Flex>
  )
}
