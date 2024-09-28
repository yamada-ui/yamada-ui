import { burger } from "@lucide/lab"
import type { Meta, StoryFn } from "@storybook/react"
import type { FC } from "react"
import type { IconNames } from "@yamada-ui/lucide"
import { Ghost, Icon, icons } from "@yamada-ui/lucide"
import type { IconProps } from "@yamada-ui/react"
import { HStack } from "@yamada-ui/react"

type Story = StoryFn<typeof Ghost>

const meta: Meta<typeof Ghost> = {
  title: "Components / Media And Icons / Lucide",
  component: Ghost,
}

export default meta

export const basic: Story = () => {
  return (
    <HStack alignItems="flex-end">
      <Ghost fontSize="6xl" />

      <Ghost fontSize="5xl" />

      <Ghost fontSize="4xl" />

      <Ghost fontSize="3xl" />

      <Ghost fontSize="2xl" />

      <Ghost fontSize="xl" />
    </HStack>
  )
}

export const customIcon: Story = () => {
  return <Icon icon={burger} fontSize="4xl" />
}

export const oneGenericIcon: Story = () => {
  const Icon: FC<IconProps & { name: IconNames }> = ({ name, ...rest }) => {
    const Icon = icons[name]

    return <Icon {...rest} />
  }

  return <Icon name="Ghost" fontSize="4xl" />
}
