import type { Meta, StoryFn } from "@storybook/react"
import { Wrap } from "../flex"
import { MinusIcon, MoonIcon, PlusIcon, SunIcon } from "../icon"
import { IconButton } from "./icon-button"

type Story = StoryFn<typeof IconButton>

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "Components / IconButton",
}

export default meta

export const Basic: Story = () => {
  return (
    <Wrap gap="md">
      <IconButton
        colorScheme="primary"
        aria-label="Plus"
        icon={<PlusIcon fontSize="2xl" />}
      />

      <IconButton
        colorScheme="secondary"
        aria-label="Minus"
        icon={<MinusIcon fontSize="2xl" />}
      />

      <IconButton
        colorScheme="warning"
        size="lg"
        aria-label="Light"
        icon={<SunIcon fontSize="2xl" />}
      />

      <IconButton
        colorScheme="danger"
        size="lg"
        aria-label="Dark"
        icon={<MoonIcon fontSize="2xl" />}
      />
    </Wrap>
  )
}
