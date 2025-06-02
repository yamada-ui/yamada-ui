import type { Meta, StoryFn } from "@storybook/react-vite"
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
      <GhostIcon color="fg.muted" fontSize="6xl" />

      <GhostIcon color="fg.muted" fontSize="5xl" />

      <GhostIcon color="fg.muted" fontSize="4xl" />

      <GhostIcon color="fg.muted" fontSize="3xl" />

      <GhostIcon color="fg.muted" fontSize="2xl" />

      <GhostIcon color="fg.muted" fontSize="xl" />
    </HStack>
  )
}

export const CustomIcon: Story = () => {
  return <LucideIcon color="fg.muted" fontSize="4xl" iconNode={burger} />
}
