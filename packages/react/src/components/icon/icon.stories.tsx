import type { Meta, StoryFn } from "@storybook/react-vite"
import { burger } from "@lucide/lab"
import { FaRobot } from "react-icons/fa"
import { HStack } from "../stack"
import { GhostIcon, LucideIcon } from "./"
import { Icon } from "./icon"

type Story = StoryFn<typeof Icon>

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Components / Icon",
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

export const As: Story = () => {
  return (
    <HStack alignItems="flex-end">
      <Icon as={FaRobot} color="fg.muted" fontSize="6xl" />

      <Icon as={FaRobot} color="fg.muted" fontSize="5xl" />

      <Icon as={FaRobot} color="fg.muted" fontSize="4xl" />

      <Icon as={FaRobot} color="fg.muted" fontSize="3xl" />

      <Icon as={FaRobot} color="fg.muted" fontSize="2xl" />

      <Icon as={FaRobot} color="fg.muted" fontSize="xl" />
    </HStack>
  )
}

export const Lab: Story = () => {
  return <LucideIcon color="fg.muted" fontSize="4xl" iconNode={burger} />
}
