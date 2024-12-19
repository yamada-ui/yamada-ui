import type { Meta, StoryFn } from "@storybook/react"
import { SkullIcon } from "../icon"
import { Center } from "./center"

type Story = StoryFn<typeof Center>

const meta: Meta<typeof Center> = {
  component: Center,
  title: "Components / Center",
}

export default meta

export const Basic: Story = () => {
  return (
    <Center bg="primary" color="white" minH="xs" minW="xs" rounded="md">
      Center
    </Center>
  )
}

export const IconWithFrame: Story = () => {
  return (
    <Center bg="gray.500" color="white" minH="6xs" minW="6xs" rounded="full">
      <SkullIcon fontSize="3xl" />
    </Center>
  )
}
