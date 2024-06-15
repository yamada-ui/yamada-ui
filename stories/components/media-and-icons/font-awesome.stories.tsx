import { faPoo } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import { HStack } from "@yamada-ui/react"

type Story = StoryFn<typeof Icon>

const meta: Meta<typeof Icon> = {
  title: "Components / Media And Icons / FontAwesome",
  component: Icon,
}

export default meta

export const basic: Story = () => {
  return (
    <HStack alignItems="flex-end">
      <Icon icon={faPoo} size="6xl" color="orange.700" />

      <Icon icon={faPoo} size="5xl" color="orange.700" />

      <Icon icon={faPoo} size="4xl" color="orange.700" />

      <Icon icon={faPoo} size="3xl" color="orange.700" />

      <Icon icon={faPoo} size="2xl" color="orange.700" />

      <Icon icon={faPoo} size="xl" color="orange.700" />
    </HStack>
  )
}
