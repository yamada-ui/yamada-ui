import type { Meta, StoryFn } from "@storybook/react"
import { burger } from "@lucide/lab"
import { HStack } from "../stack"
import { GhostIcon, LucideIcon } from "./"

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
  return <LucideIcon fontSize="4xl" iconNode={burger} />
}
