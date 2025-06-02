import type { Meta, StoryFn } from "@storybook/react-vite"
import { FaRobot } from "react-icons/fa"
import { HStack } from "../stack"
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
      <Icon as={FaRobot} color="fg.muted" fontSize="6xl" />

      <Icon as={FaRobot} color="fg.muted" fontSize="5xl" />

      <Icon as={FaRobot} color="fg.muted" fontSize="4xl" />

      <Icon as={FaRobot} color="fg.muted" fontSize="3xl" />

      <Icon as={FaRobot} color="fg.muted" fontSize="2xl" />

      <Icon as={FaRobot} color="fg.muted" fontSize="xl" />
    </HStack>
  )
}
