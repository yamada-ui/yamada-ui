import { faSkull } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import { Center } from "@yamada-ui/react"

type Story = StoryFn<typeof Center>

const meta: Meta<typeof Center> = {
  title: "Components / Layouts / Center",
  component: Center,
}

export default meta

export const basic: Story = () => {
  return (
    <Center minW="xs" minH="xs" rounded="md" bg="primary" color="white">
      Center
    </Center>
  )
}

export const iconWithFrame: Story = () => {
  return (
    <Center minW="6xs" minH="6xs" rounded="full" bg="gray.500" color="white">
      <Icon icon={faSkull} size="3xl" />
    </Center>
  )
}
