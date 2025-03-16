/* eslint-disable @typescript-eslint/no-deprecated */
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
      <Divider variant="solid" orientation="horizontal" w="lg" />

      <Divider variant="dashed" orientation="horizontal" w="lg" />

      <Divider variant="dotted" orientation="horizontal" w="lg" />
    </>
  )
}

export const vertical: Story = () => {
  return (
    <Flex gap="md">
      <Divider variant="solid" h="lg" orientation="vertical" />

      <Divider variant="dashed" h="lg" orientation="vertical" />

      <Divider variant="dotted" h="lg" orientation="vertical" />
    </Flex>
  )
}
