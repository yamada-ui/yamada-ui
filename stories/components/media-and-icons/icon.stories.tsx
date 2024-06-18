import type { Meta, StoryFn } from "@storybook/react"
import { Icon, HStack } from "@yamada-ui/react"
import { FaRobot } from "react-icons/fa"

type Story = StoryFn<typeof Icon>

const meta: Meta<typeof Icon> = {
  title: "Components / Media And Icons / Icon",
  component: Icon,
}

export default meta

export const basic: Story = () => {
  return (
    <HStack alignItems="flex-end">
      <Icon as={FaRobot} fontSize="6xl" color="gray.400" />

      <Icon as={FaRobot} fontSize="5xl" color="gray.400" />

      <Icon as={FaRobot} fontSize="4xl" color="gray.400" />

      <Icon as={FaRobot} fontSize="3xl" color="gray.400" />

      <Icon as={FaRobot} fontSize="2xl" color="gray.400" />

      <Icon as={FaRobot} fontSize="xl" color="gray.400" />
    </HStack>
  )
}
