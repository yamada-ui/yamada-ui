import type { Meta, StoryFn } from "@storybook/react-vite"
import { burger } from "@lucide/lab"
import { FaRobot } from "react-icons/fa"
import { Loading } from "../loading"
import { HStack } from "../stack"
import { Text } from "../text"
import { FileIcon, GhostIcon, LucideIcon, ScanIcon, UserIcon } from "./"
import { DynamicIcon } from "./dynamic"
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

export const NonScalingStroke: Story = () => {
  return <GhostIcon color="fg.muted" fontSize="4xl" nonScalingStroke />
}

export const Combining: Story = () => {
  return (
    <>
      <ScanIcon boxSize="48px" nonScalingStroke>
        <UserIcon
          attrs={{ height: 12, width: 12, x: 6, y: 6 }}
          nonScalingStroke
        />
      </ScanIcon>

      <FileIcon boxSize="48px">
        <Text
          as="text"
          attrs={{
            fontFamily: "Verdana,sans-serif",
            fontSize: 8,
            strokeWidth: 1,
            x: 7.5,
            y: 19,
          }}
        >
          JS
        </Text>
      </FileIcon>
    </>
  )
}

export const Dynamic: Story = () => {
  return <DynamicIcon name="ghost" color="fg.muted" fontSize="4xl" />
}

export const Fallback: Story = () => {
  return (
    <DynamicIcon
      name="ghost"
      fallback={() => <Loading.Oval fontSize="4xl" />}
      fontSize="4xl"
    />
  )
}
