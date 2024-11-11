import type { Meta, StoryFn } from "@storybook/react"
import { faPoo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@yamada-ui/fontawesome"
import { HStack } from "@yamada-ui/react"

type Story = StoryFn<typeof FontAwesomeIcon>

const meta: Meta<typeof FontAwesomeIcon> = {
  component: FontAwesomeIcon,
  title: "Components / Media And Icons / FontAwesome",
}

export default meta

export const basic: Story = () => {
  return (
    <HStack alignItems="flex-end">
      <FontAwesomeIcon color="orange.700" fontSize="6xl" icon={faPoo} />

      <FontAwesomeIcon color="orange.700" fontSize="5xl" icon={faPoo} />

      <FontAwesomeIcon color="orange.700" fontSize="4xl" icon={faPoo} />

      <FontAwesomeIcon color="orange.700" fontSize="3xl" icon={faPoo} />

      <FontAwesomeIcon color="orange.700" fontSize="2xl" icon={faPoo} />

      <FontAwesomeIcon color="orange.700" fontSize="xl" icon={faPoo} />
    </HStack>
  )
}
