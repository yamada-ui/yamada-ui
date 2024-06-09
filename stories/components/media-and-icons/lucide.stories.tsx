import { burger } from "@lucide/lab"
import type { Meta, StoryFn } from "@storybook/react"
import type { IconNames } from "@yamada-ui/lucide"
import { Ghost, Icon, icons } from "@yamada-ui/lucide"
import type { IconProps } from "@yamada-ui/react"
import { HStack } from "@yamada-ui/react"
import type { FC } from "react"

type Story = StoryFn<typeof Ghost>

const meta: Meta<typeof Ghost> = {
  title: "Components / Media And Icons / Lucide",
  component: Ghost,
}

export default meta

export const basic: Story = () => {
  return (
    <HStack alignItems="flex-end">
      <Ghost size="6xl" />

      <Ghost size="5xl" />

      <Ghost size="4xl" />

      <Ghost size="3xl" />

      <Ghost size="2xl" />

      <Ghost size="xl" />
    </HStack>
  )
}

export const customIcon: Story = () => {
  return <Icon icon={burger} size="4xl" />
}

export const oneGenericIcon: Story = () => {
  const Icon: FC<IconProps & { name: IconNames }> = ({ name, ...rest }) => {
    const Icon = icons[name]

    return <Icon {...rest} />
  }

  return <Icon name="Ghost" size="4xl" />
}
