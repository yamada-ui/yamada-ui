import type { Meta, StoryFn } from "@storybook/react"
import type { FC } from "react"
import type { IconNames, IconProps } from "./"
import { burger } from "@lucide/lab"
import { HStack } from "../stack"
import { GhostIcon, icons, LucideIcon } from "./"

type Story = StoryFn<typeof GhostIcon>

const meta: Meta<typeof GhostIcon> = {
  component: GhostIcon,
  title: "Components / Lucide Icon",
}

export default meta

export const Basic: Story = () => {
  return (
    <HStack alignItems="flex-end">
      <GhostIcon fontSize="6xl" />

      <GhostIcon fontSize="5xl" />

      <GhostIcon fontSize="4xl" />

      <GhostIcon fontSize="3xl" />

      <GhostIcon fontSize="2xl" />

      <GhostIcon fontSize="xl" />
    </HStack>
  )
}

export const CustomIcon: Story = () => {
  return <LucideIcon fontSize="4xl" icon={burger} />
}

export const OneGenericIcon: Story = () => {
  const LucideIcon: FC<{ name: IconNames } & IconProps> = ({
    name,
    ...rest
  }) => {
    const Icon = icons[name]

    return <Icon {...rest} />
  }

  return <LucideIcon name="GhostIcon" fontSize="4xl" />
}
