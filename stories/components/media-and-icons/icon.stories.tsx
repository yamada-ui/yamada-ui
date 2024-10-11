import type { Meta, StoryFn } from "@storybook/react"
import { HStack, Icon } from "@yamada-ui/react"
import { FaRobot } from "react-icons/fa"

type Story = StoryFn<typeof Icon>

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Components / Media And Icons / Icon",
}

export default meta

export const basic: Story = () => {
  return (
    <HStack alignItems="flex-end">
      <Icon as={FaRobot} color="gray.400" fontSize="6xl" />

      <Icon as={FaRobot} color="gray.400" fontSize="5xl" />

      <Icon as={FaRobot} color="gray.400" fontSize="4xl" />

      <Icon as={FaRobot} color="gray.400" fontSize="3xl" />

      <Icon as={FaRobot} color="gray.400" fontSize="2xl" />

      <Icon as={FaRobot} color="gray.400" fontSize="xl" />
    </HStack>
  )
}
