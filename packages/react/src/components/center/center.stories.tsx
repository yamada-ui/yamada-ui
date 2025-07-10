import type { Meta, StoryFn } from "@storybook/react-vite"
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
    <Center bg="mono" color="mono.contrast" minBoxSize="xs" rounded="l2">
      Center
    </Center>
  )
}

export const IconWithFrame: Story = () => {
  return (
    <Center bg="mono.subtle" color="mono" minBoxSize="10" rounded="full">
      <SkullIcon fontSize="2xl" />
    </Center>
  )
}
